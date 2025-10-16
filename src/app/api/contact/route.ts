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
      host: "smtp.tu-proveedor.com", // ejemplo: smtp.gmail.com
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // config en .env
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
