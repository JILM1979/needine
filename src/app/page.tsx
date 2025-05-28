'use client';

import { useState } from 'react';
import { sendEmail } from './actions/sendEmail'; // Ajusta el path si es necesario
import Image from "next/image";
import Chat from "./components/Chat";


export default function Home() {
  
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
      
      <section className="mt-24 max-w-4xl mx-auto text-center px-4" id="services">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">¿Qué hacemos?</h2>
        <p className="text-gray-700 text-lg mb-6">
          Identificamos procesos repetitivos, manuales o lentos en tu organización y los transformamos en flujos inteligentes y autónomos mediante automatización avanzada e inteligencia artificial.
        </p>
        <ul className="text-left space-y-3 text-gray-800 text-base">
          <li>✅ Reducimos tiempos operativos y eliminamos errores humanos</li>
          <li>✅ Liberamos a tu equipo de tareas que no aportan valor</li>
          <li>✅ Hacemos que tus procesos funcionen en piloto automático, las 24 horas</li>
        </ul>
      </section>

      <section className="mt-24 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">¿Qué problema resolvemos?</h2>
        <p className="text-gray-700 text-lg mb-6">
          Muchas empresas pierden recursos valiosos cada día por seguir operando con procesos ineficientes, manuales y desconectados entre herramientas.
        </p>
        <ul className="text-left space-y-3 text-gray-800 text-base">
          <li>✅ Tiempo desperdiciado en tareas repetitivas y traslado de datos entre sistemas</li>
          <li>✅ Equipos saturados y desmotivados por trabajos operativos que pueden automatizarse</li>
          <li>✅ Procesos propensos a errores y sin trazabilidad ni escalabilidad</li>
          <li className="font-semibold text-gray-700">
            ⏱️ Todo esto se traduce en costes innecesarios y una pérdida directa de competitividad.
          </li>
        </ul>
        <p className="text-gray-700 text-lg mt-6">
          <strong>Transformamos esa realidad con soluciones personalizadas de automatización e IA.</strong> Tu negocio se vuelve más ágil, más rentable y más inteligente.
        </p>
      </section>

      <section className="mt-24 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">¿Cómo lo hacemos?</h2>
        <p className="text-gray-700 text-lg mb-6">
          Combinamos tecnología de automatización visual (como n8n) con modelos de IA para diseñar flujos totalmente personalizados que se adaptan a tus herramientas y forma de trabajar.
        </p>
        <ul className="text-left space-y-3 text-gray-800 text-base">
          <li>✅ Automatización de procesos críticos de negocio (BPA)</li>
          <li>✅ Integración con CRMs, ERPs, hojas de cálculo, APIs y más</li>
          <li>✅ Agentes inteligentes para análisis, soporte, clasificación y más</li>
          <li>✅ Soluciones basadas en herramientas como n8n, Zapier, Make y sistemas propios</li>
        </ul>
      </section>

      <section className="mt-24 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">IA aplicada al lenguaje</h2>
        <p className="text-gray-700 text-lg mb-6">
          Gracias al <strong>Procesamiento de Lenguaje Natural (NLP)</strong>, implementamos soluciones capaces de entender, generar y clasificar información textual de forma automática y contextual.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-800">
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">📄 Automatización documental</h3>
            <p className="text-sm">
              Extraemos y procesamos datos desde emails, contratos y PDFs usando IA para ahorrar tiempo y minimizar errores.
            </p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">🤖 Chatbots contextuales</h3>
            <p className="text-sm">
              Creamos asistentes virtuales que entienden consultas, se integran con tus datos y evolucionan con el tiempo.
            </p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">📊 Análisis de sentimiento</h3>
            <p className="text-sm">
              Analizamos opiniones de clientes en redes, encuestas o soporte para tomar decisiones basadas en datos reales.
            </p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">🌐 Clasificación inteligente</h3>
            <p className="text-sm">
              Enrutamos automáticamente emails, tickets o mensajes por intención, idioma o urgencia con precisión y escala.
            </p>
          </div>
        </div>
      </section>

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
