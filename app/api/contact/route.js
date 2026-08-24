// app/api/contact/route.js
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, countryCode, message, services } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail
        pass: process.env.GMAIL_PASS, // Gmail app password
      },
    });

    const formattedServices = Array.isArray(services) && services.length > 0
      ? services.join(", ")
      : "None specified";
    const userPhone = phone ? `${countryCode || ""} ${phone}`.trim() : "Not provided";

    // Mail options
    const mailOptions = {
      from: `"Devskarnel Website Contact" <${process.env.GMAIL_USER || "devskarnel@gmail.com"}>`,
      replyTo: email,
      to: process.env.GMAIL_USER || "devskarnel@gmail.com",
      subject: `Devskarnel - New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${userPhone}</p>
        <p><strong>Services:</strong> ${formattedServices}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 },
    );
  }
}
