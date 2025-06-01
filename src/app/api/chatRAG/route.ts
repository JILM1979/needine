import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  // Leer userId desde cookie
  const userId = req.cookies.get('userId')?.value || 'unknown';

  try {
    const res = await fetch('https://juanigr1979.app.n8n.cloud/webhook/9ef01afd-2d52-424c-810d-5da1b3e9bd8a/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, userId }),
    });

    const data = await res.json();
    console.log("data =" + data );
    return NextResponse.json({ reply: data.output || 'Respuesta no disponible.' });
  } catch (error) {
    console.error('Error al contactar n8n:', error);
    return NextResponse.json({ reply: 'Error interno del asistente.' }, { status: 500 });
  }
}