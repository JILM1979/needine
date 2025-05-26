import Image from "next/image";
import Chat from "./components/Chat";


export default function Home() {
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
              Combinamos tecnología, IA y visión estratégica para automatizar desde lo simple hasta lo impensable.
            </p>
          </div>
        </div>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Automatizamos procesos empresariales aplicando inteligencia artificial. Diseñamos flujos que transforman la eficiencia operativa de tu organización.
        </p>
      </header>

      <Chat />

      <section className="mt-24 max-w-4xl text-center" id="services">
        <h2 className="text-2xl font-semibold mb-4">¿Qué hacemos?</h2>
        <p className="text-gray-700 mb-6">
          Combinamos tecnología de automatización con modelos avanzados de IA para ofrecer:
        </p>
        <ul className="text-left space-y-3 text-gray-800">
          <li>✅ Automatización de procesos de negocio (BPA)</li>
          <li>✅ Integraciones personalizadas con herramientas internas</li>
          <li>✅ Agentes inteligentes para soporte, análisis y gestión de datos</li>
          <li>✅ Flujos diseñados con n8n, Zapier, Make, APIs y más</li>
        </ul>
      </section>

      <section className="mt-24 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Inteligencia Artificial aplicada al lenguaje
        </h2>
        <p className="text-gray-700 mb-6">
          El <strong>Procesamiento de Lenguaje Natural (NLP)</strong> permite a las máquinas comprender, interpretar y generar lenguaje humano con precisión. En un mundo donde los datos textuales son omnipresentes, el NLP se convierte en una herramienta estratégica para las organizaciones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-800">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">📄 Automatización de documentos</h3>
            <p className="text-sm">
              Extraemos y analizamos información de correos, contratos y PDFs con modelos de lenguaje para reducir errores y tiempos operativos.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">🤖 Chatbots inteligentes</h3>
            <p className="text-sm">
              Creamos asistentes virtuales capaces de entender el contexto, resolver consultas internas o de clientes, y aprender con el tiempo.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">📊 Análisis de sentimiento</h3>
            <p className="text-sm">
              Aplicamos modelos para evaluar la percepción del cliente en redes sociales, encuestas o soporte técnico.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">🌐 Clasificación y enrutamiento inteligente</h3>
            <p className="text-sm">
              Organizamos tickets, correos o consultas automáticamente según su contenido, idioma o intención.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-24 text-center text-gray-500 text-sm" id="contact">
        <p>© 2025 NEEDINE — Innovación en automatización con IA</p>
        {/*<p>Email: contacto@needine.ai</p>*/}
      </footer>
    </main>
  );
}
