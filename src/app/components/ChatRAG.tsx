'use client';

import { useState, useEffect, useRef } from 'react';

type Message = {
  sender: 'user' | 'bot';
  text: string;
};

export default function ChatRAG() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ChatRAG', {
        method: 'POST',
        body: JSON.stringify({ message: input }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      const botMessage: Message = { sender: 'bot', text: data.reply };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error('Error al contactar al asistente:', err);
      setMessages(prev => [...prev, { sender: 'bot', text: 'Error al contactar al asistente.' }]);
    }

    setLoading(false);
  };

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="mt-24 w-full max-w-full bg-white border rounded-xl shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-2 text-center">Asistente Virtual</h3>
      <div className="h-64 overflow-y-auto mb-4 space-y-2 p-2 bg-gray-50 rounded">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-md max-w-[80%] ${
              msg.sender === 'user' ? 'ml-auto bg-blue-100' : 'mr-auto bg-gray-200'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {/* Div vacío para scroll automático */}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2 text-sm"
          placeholder="Escribe tu mensaje..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}