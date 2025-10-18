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

    // Log de entrada
    console.log("📩 Datos recibidos:", { name, email, message });

    const response = await resend.emails.send({
      from: "Needine <juani@needine.com>",
//      from: "onboarding@resend.dev",    
      to: "info@needine.com",
//      to: "entradajuan@gmail.com",
      subject: "Nuevo contacto desde la web Needine",
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong> ${message}</p>`,
    });

    // Log de la respuesta de Resend
    console.log("✅ Respuesta de Resend:", response);

    return NextResponse.json({ success: true, response });
  } catch (error: any) {
    // Log del error con más detalle
    console.error("❌ Error enviando email:", {
      message: error.message,
      stack: error.stack,
      ...error, // incluye propiedades extras si las hay
    });

    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

