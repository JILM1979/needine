/*
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Configura el transporter (usa Gmail, SMTP de tu hosting o un servicio tipo SendGrid)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false, // ⚠️ IMPORTANTE: para puerto 587 debe ser false
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
    await transporter.sendMail({
      from: `"Needine Web" <${process.env.EMAIL_USER}>`,
      to: "info@needine.com",
      subject: "Nuevo contacto desde la web Needine",
      text: `
        Nombre: ${name}
        Email: ${email}
        Mensaje: ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
*/
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    await resend.emails.send({
      from: "Needine <onboarding@resend.dev>", // luego puedes usar info@needine.com cuando verifiques tu dominio
      to: "info@needine.com",
      subject: "Nuevo contacto desde la web Needine",
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

