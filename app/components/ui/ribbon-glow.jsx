"use client";
// Ribbon Glow — WebGL2 animated ribbon background (adapted from Originkit).
//
// Changes from the original for this site:
// - Plain JSX; sizes to its parent via className instead of a 1200x800 minimum.
// - Stops drawing while scrolled out of view (IntersectionObserver), so the
//   shader costs nothing once you are past the hero.
// - prefers-reduced-motion renders a still frame.
// - DPR capped at 1.5: the field is a soft glow drawn at half resolution
//   anyway, so higher density only costs GPU time.
// - Without WebGL2 it simply shows the background colour.

import { useEffect, useRef } from "react";

const MAX_DPR = 1.5;
const NAME = "RibbonGlow";

// Field shape, frozen: the "Glacier" composition.
const LAYERS = 84;
const TWIST = 1.25; // radians of swirl at full hover under the pointer
const DRAG = 0.18; // how far pointer motion drags the plane

const VERT_SRC = `#version 300 es
const vec2 P[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
void main() { gl_Position = vec4(P[gl_VertexID], 0.0, 1.0); }
`;

// No backticks anywhere in the shader strings: one inside a GLSL comment would
// end the template literal.
const FIELD_SRC = `#version 300 es
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uC1;
uniform vec3 uC2;
uniform float uSize;
uniform float uAngle;
uniform vec2 uMouse;
uniform float uOn;
uniform float uReach;
uniform vec2 uVel;
out vec4 o;

const float TAU = 6.28318530718;
const float LAYERS = ${LAYERS.toFixed(1)};
const float TWIST = ${TWIST.toFixed(3)};
const float DRAG = ${DRAG.toFixed(3)};
const float GAIN = 0.62;
const vec2 CENTRE = vec2(-0.62, 0.24);
const float TILT = 0.6;
const float ZOOM = 1.05;
const float THETA = 2.13;
const float SHEAR = 0.963;
const float SHRINK = 0.953;
const vec2 WARP_FREQ = vec2(0.42, 2.4);
const vec2 WARP_AMP = vec2(0.13, 0.027);
const vec2 ASPECT = vec2(2.1, 0.17);
const float OFFSET = 0.36;
const float GLOW = 0.0021;
const float SOFT = 0.0019;
const float FALLOFF = 0.37;
const float PHASE = 12.0;
const float CYCLE = 0.16;
const float HUE_TRAVEL = 2.0;

mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, s, -s, c); }

void main() {
  vec2 R = uRes;
  vec2 pos = (gl_FragCoord.xy - 0.5 * R) / R.y;

  vec2 d = pos - uMouse;
  float w = uOn * exp(-dot(d, d) / (uReach * uReach));
  if (w > 1e-4) pos = uMouse + rot(w * TWIST) * d * (1.0 - 0.3 * min(w, 1.0)) - uVel * min(w, 1.0) * DRAG;

  pos = rot(uAngle) * pos / uSize;
  float t = uTime * 0.49 + PHASE;
  float breath = (-sin(uTime * 0.735) + sin(uTime * 0.49 + 1.0)) * 0.25 + 0.5;
  vec2 u = rot(TILT) * ((pos - CENTRE) * (ZOOM - breath * 0.085));
  mat2 fold = mat2(cos(THETA), sin(THETA), -SHEAR, cos(THETA));

  vec3 col = vec3(0.0);
  for (float i = 1.0; i <= LAYERS; i += 1.0) {
    u.x -= sin(u.y * WARP_FREQ.x + t + i * 0.007) * WARP_AMP.x;
    u.y -= sin(u.x * WARP_FREQ.y - t + i * 0.02) * WARP_AMP.y;
    u = fold * u * SHRINK;
    vec2 q = (u - vec2(OFFSET + breath * 0.1, 0.0)) * ASPECT;
    float g = GLOW / (dot(q, q) + SOFT) * (0.25 + breath * 0.4);
    float r = length(u);
    float k = sin(i * CYCLE + t * 1.2 + r * HUE_TRAVEL) * 0.5 + 0.5;
    col += g * mix(uC1, uC2, k) * (0.62 + 0.5 * k) * exp2(-r * FALLOFF);
  }
  vec3 x = max(col * GAIN, 0.0);
  col = (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
  col = pow(clamp(col, 0.0, 1.0), vec3(0.85, 0.92, 0.98));
  col *= 1.0 - smoothstep(0.5, 1.6, length(pos)) * 0.07;
  o = vec4(col, 1.0);
}
`;

const FINISH_SRC = `#version 300 es
precision highp float;
uniform sampler2D uField;
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uBg;
uniform float uPaper;
out vec4 o;

float ign(vec2 p, float f) { p += 5.588238 * mod(f, 64.0); return fract(52.9829189 * fract(0.06711056 * p.x + 0.00583715 * p.y)); }

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec3 L = max(texture(uField, frag / uRes).rgb, 0.0);
  vec3 dark = uBg + L * (1.0 - uBg);
  float strength = clamp(max(L.r, max(L.g, L.b)), 0.0, 1.0);
  vec3 paper = uBg * (1.0 - strength) + L * 0.96;
  vec3 col = mix(dark, paper, uPaper);
  col += (ign(frag, floor(uTime * 24.0)) - 0.5) / 255.0;
  o = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

const colorCache = new Map();

// Accepts hex, rgb()/rgba(), hsl()/hsla() and var(--token, <literal>).
function parseColor(input) {
  if (!input) return null;
  const key = String(input);
  if (colorCache.has(key)) return colorCache.get(key) ?? null;
  let s = key.trim();
  const v = s.match(/^var\(\s*--[^,]+,\s*(.+)\)$/);
  if (v) s = v[1].trim();
  let out = null;
  if (s.charAt(0) === "#") {
    let h = s.slice(1);
    if (h.length === 3 || h.length === 4)
      h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    if (h.length >= 6) {
      const r = parseInt(h.slice(0, 2), 16);
      const g = parseInt(h.slice(2, 4), 16);
      const b = parseInt(h.slice(4, 6), 16);
      if (Number.isFinite(r) && Number.isFinite(g) && Number.isFinite(b))
        out = [r / 255, g / 255, b / 255];
    }
  } else {
    const m = s.match(/^(rgba?|hsla?)\(([^)]*)\)/i);
    if (m) {
      const parts = m[2].split(/[\s,/]+/).filter(Boolean);
      const f = (i) => parseFloat(parts[i]);
      if (parts.length >= 3 && [0, 1, 2].every((i) => Number.isFinite(f(i)))) {
        if (m[1].toLowerCase().startsWith("rgb")) {
          const ch = (i) => (parts[i].endsWith("%") ? f(i) / 100 : f(i) / 255);
          out = [ch(0), ch(1), ch(2)];
        } else {
          const hh = (((f(0) % 360) + 360) % 360) / 360;
          const ss = f(1) / 100;
          const ll = f(2) / 100;
          const q = ll < 0.5 ? ll * (1 + ss) : ll + ss - ll * ss;
          const p = 2 * ll - q;
          const hue = (t) => {
            t = t < 0 ? t + 1 : t > 1 ? t - 1 : t;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
          };
          out = [hue(hh + 1 / 3), hue(hh), hue(hh - 1 / 3)];
        }
        out = out.map((c) => Math.min(1, Math.max(0, c)));
      }
    }
  }
  colorCache.set(key, out);
  return out;
}

const color = (input, fallback) => parseColor(input) ?? parseColor(fallback);
const num = (v, fb) => (typeof v === "number" && isFinite(v) ? v : fb);
const clampN = (v, lo, hi) => (v < lo ? lo : v > hi ? hi : v);

function link(gl, frag, label) {
  const shader = (type, src) => {
    const sh = gl.createShader(type);
    if (!sh) return null;
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      console.error(`${NAME} ${label} shader:`, gl.getShaderInfoLog(sh));
      gl.deleteShader(sh);
      return null;
    }
    return sh;
  };
  const vs = shader(gl.VERTEX_SHADER, VERT_SRC);
  const fs = shader(gl.FRAGMENT_SHADER, frag);
  if (!vs || !fs) return null;
  const prog = gl.createProgram();
  if (!prog) return null;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error(`${NAME} ${label} link:`, gl.getProgramInfoLog(prog));
    gl.deleteProgram(prog);
    return null;
  }
  return prog;
}

function locations(gl, prog, names) {
  const out = {};
  for (const n of names) out[n] = gl.getUniformLocation(prog, n);
  return out;
}

// The half-resolution field target. Half float where the GPU can render to
// it (no banding in the smooth falloff), 8-bit otherwise.
function fieldTarget(gl) {
  const fbo = gl.createFramebuffer();
  let tex = null;
  let w = 0;
  let h = 0;
  let half = !!gl.getExtension("EXT_color_buffer_float");
  return {
    fbo,
    texture: () => tex,
    width: () => w,
    height: () => h,
    resize(nw, nh) {
      if (nw === w && nh === h && tex) return;
      for (let attempt = 0; attempt < 2; attempt++) {
        if (tex) gl.deleteTexture(tex);
        tex = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(
          gl.TEXTURE_2D, 0, half ? gl.RGBA16F : gl.RGBA8, nw, nh, 0,
          gl.RGBA, half ? gl.HALF_FLOAT : gl.UNSIGNED_BYTE, null,
        );
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
        const ok = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        if (ok || !half) break;
        half = false;
      }
      w = nw;
      h = nh;
    },
    dispose() {
      if (tex) gl.deleteTexture(tex);
      gl.deleteFramebuffer(fbo);
    },
  };
}

// Pointer in CSS px relative to the root.
function trackPointer(root) {
  const p = { tx: 0, ty: 0, inside: false };
  const read = (e) => {
    const r = root.getBoundingClientRect();
    p.tx = e.clientX - r.left;
    p.ty = e.clientY - r.top;
    p.inside =
      e.clientX >= r.left && e.clientX <= r.right &&
      e.clientY >= r.top && e.clientY <= r.bottom;
  };
  const out = (e) => {
    if (!e.relatedTarget) p.inside = false;
  };
  window.addEventListener("pointermove", read, { passive: true });
  window.addEventListener("pointerdown", read, { passive: true });
  document.addEventListener("pointerout", out);
  return {
    p,
    dispose() {
      window.removeEventListener("pointermove", read);
      window.removeEventListener("pointerdown", read);
      document.removeEventListener("pointerout", out);
    },
  };
}

const DEFAULTS = {
  background: "#0B0A10",
  color1: "#18E767",
  color2: "#61FF73",
};

/**
 * Props: background, color1, color2 (any CSS colour); speed 0–100 (50 is the
 * designed rate, 0 a still frame); size 50–200; angle -180–180 (degrees);
 * hover 0–200 (pointer swirl strength); reach 10–800 (px); className; style.
 */
export default function RibbonGlow({
  className,
  style,
  background = DEFAULTS.background,
  color1 = DEFAULTS.color1,
  color2 = DEFAULTS.color2,
  speed = 50,
  size = 100,
  angle = -180,
  hover = 100,
  reach = 240,
}) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);

  // Latest props for the render loop, without restarting WebGL on change.
  const vRef = useRef(null);
  useEffect(() => {
    vRef.current = {
      background,
      color1,
      color2,
      speed: clampN(num(speed, 50), 0, 100) / 50,
      size: clampN(num(size, 100), 50, 200) / 100,
      // Positive turns clockwise, as CSS rotate does.
      angle: (clampN(num(angle, 0), -180, 180) * Math.PI) / 180,
      hover: clampN(num(hover, 100), 0, 200) / 100,
      reach: clampN(num(reach, 240), 10, 800),
    };
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;
    const gl = canvas.getContext("webgl2", {
      antialias: false, alpha: false, depth: false, stencil: false,
    });
    if (!gl) return; // background colour on the root stays as the fallback
    const field = link(gl, FIELD_SRC, "field");
    const finish = link(gl, FINISH_SRC, "finish");
    if (!field || !finish) return;
    const uf = locations(gl, field, [
      "uRes", "uTime", "uC1", "uC2", "uSize", "uAngle", "uMouse", "uOn", "uReach", "uVel",
    ]);
    const un = locations(gl, finish, ["uField", "uRes", "uTime", "uBg", "uPaper"]);
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    const target = fieldTarget(gl);
    const pointer = trackPointer(root);
    const ptr = pointer.p;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");

    // No real GPU (SwiftShader, llvmpipe, Microsoft Basic Render): the 84-layer
    // shader would run on the CPU at a few fps and starve the page, so draw
    // a single still frame instead of animating.
    const dbg = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = String(
      dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER),
    );
    const software = /swiftshader|llvmpipe|software|basic render/i.test(renderer);

    // Field resolution as a share of the canvas. Starts at half and steps
    // down while frames run slow, so weak GPUs stay smooth.
    let fieldScale = 0.5;
    let slowAvg = 16;
    let frames = 0;

    // Eased pointer state, in CSS px (y down) and CSS px per second.
    let mx = 0;
    let my = 0;
    let vx = 0;
    let vy = 0;
    let on = 0;
    let raf = 0;
    let last = -1;
    let clock = 0;
    let visible = true;

    const render = (now) => {
      raf = 0;
      const v = vRef.current;
      if (!v) return;
      const dt = last < 0 ? 0 : clampN((now - last) / 1000, 0, 0.05);
      // Gaps over 200ms are a background tab or a pause, not a slow GPU.
      if (last >= 0 && now - last < 200) {
        // Smoothed frame time; every 45 frames, drop field resolution a step
        // if it is averaging slower than ~45 fps (floor: a quarter).
        slowAvg += (now - last - slowAvg) * 0.1;
        if (++frames % 45 === 0 && slowAvg > 22 && fieldScale > 0.25) {
          fieldScale = Math.max(0.25, fieldScale * 0.75);
        }
      }
      last = now;
      clock = (clock + dt * (still.matches ? 0 : v.speed)) % 3600;

      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const cw = canvas.clientWidth || 1;
      const ch = canvas.clientHeight || 1;
      const bw = Math.max(1, Math.round(cw * dpr));
      const bh = Math.max(1, Math.round(ch * dpr));
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw;
        canvas.height = bh;
      }
      target.resize(
        Math.max(1, Math.round(bw * fieldScale)),
        Math.max(1, Math.round(bh * fieldScale)),
      );

      // Presence fades in and out; position is lightly smoothed; velocity
      // is the smoothed derivative of that position.
      const present = ptr.inside ? 1 : 0;
      if (present && on < 0.02) {
        mx = ptr.tx;
        my = ptr.ty;
      }
      on += (present - on) * (1 - Math.exp(-dt * 5));
      const k = 1 - Math.exp(-dt * 16);
      const nx = mx + (ptr.tx - mx) * k;
      const ny = my + (ptr.ty - my) * k;
      if (dt > 0) {
        const kv = 1 - Math.exp(-dt * 8);
        vx += ((nx - mx) / dt - vx) * kv;
        vy += ((ny - my) / dt - vy) * kv;
      }
      mx = nx;
      my = ny;
      const vLen = Math.hypot(vx, vy) / ch;
      const vCap = vLen > 3 ? 3 / vLen : 1;

      const c1 = color(v.color1, DEFAULTS.color1);
      const c2 = color(v.color2, DEFAULTS.color2);
      const bg = color(v.background, DEFAULTS.background);
      const bgLum = 0.2126 * bg[0] + 0.7152 * bg[1] + 0.0722 * bg[2];

      // Pass 1: the field, at half resolution.
      gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
      gl.viewport(0, 0, target.width(), target.height());
      gl.useProgram(field);
      gl.uniform2f(uf.uRes, target.width(), target.height());
      gl.uniform1f(uf.uTime, clock);
      gl.uniform3f(uf.uC1, c1[0], c1[1], c1[2]);
      gl.uniform3f(uf.uC2, c2[0], c2[1], c2[2]);
      gl.uniform1f(uf.uSize, v.size);
      gl.uniform1f(uf.uAngle, v.angle);
      gl.uniform2f(uf.uMouse, (mx - cw / 2) / ch, (ch / 2 - my) / ch);
      gl.uniform1f(uf.uOn, on * v.hover);
      gl.uniform1f(uf.uReach, v.reach / ch);
      gl.uniform2f(uf.uVel, (vx / ch) * vCap, (-vy / ch) * vCap);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      // Pass 2: upsample and composite.
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, bw, bh);
      gl.useProgram(finish);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, target.texture());
      gl.uniform1i(un.uField, 0);
      gl.uniform2f(un.uRes, bw, bh);
      gl.uniform1f(un.uTime, clock);
      gl.uniform3f(un.uBg, bg[0], bg[1], bg[2]);
      gl.uniform1f(un.uPaper, clampN((bgLum - 0.35) / 0.3, 0, 1));
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      if (visible && !software) raf = requestAnimationFrame(render);
    };

    const start = () => {
      if (!raf) {
        last = -1; // no time jump after a pause
        raf = requestAnimationFrame(render);
      }
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    // Only animate while the hero is on screen.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(root);
    // A still frame (software path) has to be redrawn when the size changes.
    const ro = new ResizeObserver(() => {
      if (software && visible) start();
    });
    ro.observe(root);
    start();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      pointer.dispose();
      target.dispose();
      gl.deleteVertexArray(vao);
      gl.deleteProgram(field);
      gl.deleteProgram(finish);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      // Position comes from className (default relative) so callers can use
      // "absolute inset-0" to lay it behind content.
      className={className ?? "relative"}
      style={{ overflow: "hidden", background, ...style }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}
