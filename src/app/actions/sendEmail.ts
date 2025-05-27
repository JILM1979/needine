// app/actions/sendEmail.ts
'use server';

import nodemailer from 'nodemailer';

export async function sendEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formulario NEEDINE" <${process.env.SMTP_USER}>`,
      to: 'ji@needine.com',
      subject: 'Nuevo mensaje de contacto - NEEDINE',
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Error al enviar correo:', error);
    return { success: false, error: 'No se pudo enviar el mensaje' };
  }
}
