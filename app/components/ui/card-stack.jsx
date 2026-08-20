"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

function wrapIndex(n, len) {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}

function signedOffset(i, active, len, loop) {
  const raw = i - active;
  if (!loop || len <= 1) return raw;
  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

export function CardStack({
  items = [],
  initialIndex = 0,
  maxVisible = 5,
  cardWidth = 520,
  cardHeight = 320,
  overlap = 0.45,
  spreadDeg = 40,
  perspectivePx = 1100,
  depthPx = 120,
  tiltXDeg = 10,
  activeLiftPx = 20,
  activeScale = 1.03,
  inactiveScale = 0.92,
  loop = true,
  autoAdvance = true,
  intervalMs = 3200,
  pauseOnHover = true,
  showDots = true,
  className = "",
  onChangeIndex,
  renderCard,
}) {
  const len = items.length;
  const [active, setActive] = useState(() => wrapIndex(initialIndex, len));
  const [hovering, setHovering] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);

  useEffect(() => {
    setActive((a) => wrapIndex(a, len));
  }, [len]);

  useEffect(() => {
    if (!len) return;
    onChangeIndex?.(active, items[active]);
  }, [active, len, onChangeIndex, items]);

  const canGoPrev = loop || active > 0;
  const canGoNext = loop || active < len - 1;

  const prev = useCallback(() => {
    if (!len || !canGoPrev) return;
    setActive((a) => wrapIndex(a - 1, len));
  }, [canGoPrev, len]);

  const next = useCallback(() => {
    if (!len || !canGoNext) return;
    setActive((a) => wrapIndex(a + 1, len));
  }, [canGoNext, len]);

  // Keyboard navigation
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  // Autoplay
  useEffect(() => {
    if (!autoAdvance || !len) return;
    if (pauseOnHover && hovering) return;

    const id = setInterval(() => {
      if (loop || active < len - 1) {
        next();
      }
    }, Math.max(700, intervalMs));

    return () => clearInterval(id);
  }, [autoAdvance, intervalMs, hovering, pauseOnHover, len, loop, active, next]);

  // Zero-glitch Mouse/Touch Drag events with smooth gesture release
  const handleDragStart = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    dragStartX.current = clientX;
    setIsDragging(true);
    setDragOffset(0);
  };

  useEffect(() => {
    if (!isDragging) return;

    let currentDiff = 0;

    const handleWindowMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      currentDiff = clientX - dragStartX.current;
      setDragOffset(currentDiff);
    };

    const handleWindowEnd = () => {
      setIsDragging(false);
      if (currentDiff < -25) {
        next();
      } else if (currentDiff > 25) {
        prev();
      }
      setDragOffset(0);
    };

    window.addEventListener("mousemove", handleWindowMove);
    window.addEventListener("mouseup", handleWindowEnd);
    window.addEventListener("touchmove", handleWindowMove);
    window.addEventListener("touchend", handleWindowEnd);

    return () => {
      window.removeEventListener("mousemove", handleWindowMove);
      window.removeEventListener("mouseup", handleWindowEnd);
      window.removeEventListener("touchmove", handleWindowMove);
      window.removeEventListener("touchend", handleWindowEnd);
    };
  }, [isDragging, prev, next]);

  if (!len) return null;

  const maxOffset = Math.max(0, Math.floor(maxVisible / 2));
  const cardSpacing = Math.max(10, Math.round(cardWidth * (1 - overlap)));
  const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0;
  const activeItem = items[active];

  return (
    <div
      className={`w-full ${className}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Stage */}
      <div
        className="relative w-full overflow-hidden sm:overflow-visible focus:outline-none"
        style={{ height: Math.max(360, cardHeight + 70) }}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {/* Ambient background glows */}
        <div
          className="pointer-events-none absolute inset-x-0 top-6 mx-auto h-44 w-[70%] rounded-full bg-[#2de8b0]/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-36 w-[76%] rounded-full bg-black/40 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 flex items-end justify-center"
          style={{ perspective: `${perspectivePx}px` }}
        >
          {items.map((item, i) => {
            const off = signedOffset(i, active, len, loop);
            const abs = Math.abs(off);
            const visible = abs <= maxOffset;

            if (!visible) return null;

            const rotateZ = off * stepDeg;
            const extraX = off === 0 ? dragOffset : 0;
            const x = off * cardSpacing + extraX;
            const y = abs * 10;
            const z = -abs * depthPx;

            const isActive = off === 0;
            const scale = isActive ? activeScale : inactiveScale;
            const lift = isActive ? -activeLiftPx : 0;
            const rotateX = isActive ? 0 : tiltXDeg;
            const zIndex = 100 - abs;

            return (
              <div
                key={item.id || i}
                onClick={() => setActive(i)}
                onMouseDown={isActive ? handleDragStart : undefined}
                onTouchStart={isActive ? handleDragStart : undefined}
                className={`absolute bottom-4 rounded-2xl border-2 sm:border-4 border-white/15 overflow-hidden shadow-2xl transition-transform duration-500 ease-out select-none ${
                  isActive
                    ? "cursor-grab active:cursor-grabbing border-[#2de8b0]/60 shadow-[0_0_30px_rgba(45,232,176,0.2)]"
                    : "cursor-pointer hover:border-white/30"
                }`}
                style={{
                  width: "min(92vw, " + cardWidth + "px)",
                  height: cardHeight,
                  zIndex,
                  transformStyle: "preserve-3d",
                  transform: `translate3d(${x}px, ${y + lift}px, ${z}px) rotateZ(${rotateZ}deg) rotateX(${rotateX}deg) scale(${scale})`,
                  transition: isDragging && isActive ? "none" : "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.45s ease",
                  opacity: visible ? 1 : 0,
                }}
              >
                <div
                  className="h-full w-full"
                  style={{
                    transform: `translateZ(${z}px)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {renderCard ? (
                    renderCard(item, { active: isActive })
                  ) : (
                    <DefaultCard item={item} active={isActive} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows & Dots */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous capability"
          className="p-2 rounded-full border border-white/15 bg-white/5 hover:bg-[#2de8b0] hover:text-black text-white transition-all cursor-pointer active:scale-95 shadow-md"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {showDots && (
          <div className="flex items-center gap-2">
            {items.map((it, idx) => {
              const on = idx === active;
              return (
                <button
                  key={it.id || idx}
                  onClick={() => setActive(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    on ? "w-8 bg-[#2de8b0]" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to ${it.title}`}
                />
              );
            })}
          </div>
        )}

        <button
          type="button"
          onClick={next}
          aria-label="Next capability"
          className="p-2 rounded-full border border-white/15 bg-white/5 hover:bg-[#2de8b0] hover:text-black text-white transition-all cursor-pointer active:scale-95 shadow-md"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {activeItem?.href && (
          <Link
            href={activeItem.href}
            target="_blank"
            rel="noreferrer"
            className="text-white/60 hover:text-[#2de8b0] transition-colors p-1"
            aria-label="Open link"
          >
            <SquareArrowOutUpRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

function DefaultCard({ item }) {
  return (
    <div
      className="relative h-full w-full p-6 sm:p-7 text-left flex flex-col justify-between overflow-hidden backdrop-blur-2xl"
      style={{
        background:
          "linear-gradient(180deg, rgba(5, 37, 28, 0.95) 0%, rgba(2, 20, 15, 0.96) 50%, rgba(1, 5, 4, 0.98) 100%)",
      }}
    >
      {/* Top Corner Glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#2de8b0]/15 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header Row: Icon + Tag */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#2de8b0]/15 border border-[#2de8b0]/30 text-[#2de8b0] flex items-center justify-center text-2xl shadow-md shrink-0">
            {item.icon || "✨"}
          </div>
          {item.tag && (
            <span className="px-3 py-1 rounded-full bg-[#2de8b0]/15 border border-[#2de8b0]/30 text-[#2de8b0] text-xs font-bold uppercase tracking-wider">
              {item.tag}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
          {item.title}
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
          {item.desc || item.description}
        </p>
      </div>

      {/* Bullets List */}
      {item.bullets && item.bullets.length > 0 && (
        <ul className="relative z-10 mt-4 pt-3 border-t border-white/10 space-y-1.5">
          {item.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white/75 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2de8b0] shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
