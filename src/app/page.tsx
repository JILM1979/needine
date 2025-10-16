'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import { sendEmail } from './actions/sendEmail'; // Ajusta el path si es necesario
import Image from "next/image";
import Chat from "./components/Chat";



export default function Home() {
  const { data: session } = useSession();
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    const res = await sendEmail(formData);

    if (res.success) {
      setStatus('Mensaje enviado correctamente.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Error al enviar el mensaje.');
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 py-12">
      <header className="text-center max-w-3xl">   
        {/* Mensaje informativo al visitante */}
        <div className="bg-yellow-100 text-yellow-800 text-sm md:text-base px-4 py-2 rounded-md shadow mb-4 border border-yellow-300">
          <strong>2Aviso importante:</strong> Nos encontramos en la etapa inicial de lanzamiento de Needine. Agradecemos su interés y comprensión mientras finalizamos los preparativos para ofrecer nuestros servicios.
        </div>
        
        {/* Login/Logout según sesión */}
        <div className="mt-4 flex justify-end">
          {session ? (
            <div className="flex flex-col items-end space-y-2">
              <p className="text-sm text-gray-700">Bienvenido, {session.user?.name}</p>
              <button
                onClick={() => signOut()}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
              >
                Cerrar sesión
              </button>

              <a
                href="/private"
                className="inline-block px-6 py-3 text-white bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md transition mt-2"
              >
                Acceso parte privada
              </a>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Iniciar sesión privada
            </button>
          )}
        </div>      
        <div className="flex justify-center">
          {/* <img
            src="/logo.PNG"
            alt="Logo NEEDINE"
            className="w-48 h-48 md:w-64 md:h-64 object-contain mb-6"
          />*/}
          <Image
            src="/logo.PNG"
            alt="Logo NEEDINE"
            width={284}
            height={284}
            className="object-contain mb-6"
          />          
        </div>
        <div className="relative w-full max-w-4xl h-[300px] md:h-[400px] mb-8 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-black/40 z-10" />
          {/*  
          <img
            src="/automation-illustration.png"
            alt="Automatización inteligente"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          */}
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/automation-illustration.png"
              alt="Automatización inteligente"
              fill
              style={{ objectFit: 'cover' }}
              priority={true}
            />
          </div>
          <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
            <h2 className="text-white text-2xl md:text-4xl font-semibold leading-tight drop-shadow-md">
              Transformamos tu empresa <br />
              con flujos inteligentes y automatizados
            </h2>
            <p className="text-gray-200 text-sm mt-4 max-w-xl">
              Detectamos cuellos de botella y tareas repetitivas en tus procesos. Luego diseñamos e implementamos flujos automáticos con n8n e Inteligencia Artificial para que tu equipo gane tiempo y eficiencia.
            </p>
          </div>
        </div>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Automatizamos procesos empresariales aplicando inteligencia artificial. Diseñamos flujos que transforman la eficiencia operativa de tu organización.
        </p>
      </header>
      

      <Chat />
      
      <section className="mt-24 max-w-5xl mx-auto text-center px-6" id="services">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Qué hacemos?</h2>
        <p className="text-gray-600 text-lg mb-6">
          Automatizamos tus procesos de negocio combinando <span className="font-medium text-blue-600">tecnología visual</span> y <span className="font-medium text-blue-600">modelos de IA</span> para que tu equipo se enfoque en tareas estratégicas, no repetitivas.
        </p>
        <ul className="text-left text-gray-800 space-y-3 text-base max-w-2xl mx-auto">
          <li>✅ Reducimos el tiempo y los errores en procesos clave</li>
          <li>✅ Liberamos a tus equipos operativos de tareas repetitivas</li>
          <li>✅ Diseñamos flujos inteligentes que escalan con tu negocio</li>
        </ul>
      </section>
{/* 
      <section className="mt-24 max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">IA aplicada al lenguaje</h2>
        <p className="text-gray-600 text-lg mb-6">
          Con <strong className="text-blue-600">Procesamiento de Lenguaje Natural (NLP)</strong>, transformamos textos en datos accionables, mejorando la eficiencia en atención, análisis y toma de decisiones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-800">
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">📄 Automatización documental</h3>
            <p className="text-sm text-gray-700">
              Extraemos y procesamos información desde correos, contratos o PDFs de forma automática y sin errores.
            </p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">🤖 Chatbots contextuales</h3>
            <p className="text-sm text-gray-700">
              Creamos asistentes capaces de comprender intenciones, responder preguntas y aprender con el tiempo.
            </p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">📊 Análisis de sentimiento</h3>
            <p className="text-sm text-gray-700">
              Analizamos el tono y emociones en feedback de clientes para extraer insights accionables.
            </p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">🌐 Clasificación inteligente</h3>
            <p className="text-sm text-gray-700">
              Clasificamos y dirigimos correos, tickets o mensajes según urgencia, idioma o intención.
            </p>
          </div>
        </div>
      </section>

*/}

      <section className="mt-24 max-w-2xl w-full" id="contact">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contáctanos</h2>
        <p className="text-center text-gray-600 mb-6">
          ¿Tienes un proyecto en mente o necesitas más información? Escríbenos.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-md">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows={4}
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Enviar mensaje
          </button>
          {status && <p className="text-sm text-center mt-2 text-gray-600">{status}</p>}
        </form>
      </section>


      <footer className="mt-24 text-center text-gray-500 text-sm" id="contact">
        <p>© 2025 NEEDINE — Innovación en automatización con IA</p>
        {/*<p>Email: contacto@needine.ai</p>*/}
      </footer>
    </main>
  );
}
