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
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("❌ Error enviando email:", {
        message: error.message,
        stack: error.stack,
      });

      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    console.error("❌ Error inesperado:", error);
    return NextResponse.json(
      { success: false, error: "Error desconocido" },
      { status: 500 }
    );
  }
}

