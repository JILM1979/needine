import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  try {
    const res = await fetch('https://juanigr1979.app.n8n.cloud/webhook/ab1b9aa9-b497-443a-97bd-d2f856e6a3c4/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, "userId": 'userId' }),
    });

    const data = await res.json();
    console.log("await res.json() = " + data)
    console.log("data.reply = " + data.output)

    return NextResponse.json({ reply: data.output || 'Respuesta no disponible.' });
  } catch (error) {
    console.error('Error al contactar n8n:', error);
    return NextResponse.json({ reply: 'Error interno del asistente.' }, { status: 500 });
  }
}