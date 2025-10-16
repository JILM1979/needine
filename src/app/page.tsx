import React from "react";

export default function Page() {
  return (
    <main>

      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-900 to-gray-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Tokenización de Activos en Blockchain
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Needine transforma activos físicos y financieros en tokens digitales,
            abriendo nuevas oportunidades de inversión, liquidez y eficiencia.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-lg font-semibold">
            Descubre cómo funciona
          </button>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mt-24 max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Ofrecemos soluciones integrales para digitalizar y tokenizar activos
          con la máxima seguridad y transparencia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-800">

          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">🏢 Tokenización inmobiliaria</h3>
            <p className="text-sm text-gray-700">
              Permite invertir en propiedades de forma fraccionada, democratizando
              el acceso al sector inmobiliario global.
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">💎 Activos financieros y commodities</h3>
            <p className="text-sm text-gray-700">
              Bonos, acciones, metales preciosos o materias primas convertidos
              en tokens líquidos y negociables.
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">🌍 Inclusión y acceso global</h3>
            <p className="text-sm text-gray-700">
              Rompemos barreras geográficas para que cualquier persona pueda
              invertir en activos de todo el mundo.
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2 text-gray-900">🔒 Seguridad y transparencia</h3>
            <p className="text-sm text-gray-700">
              Blockchain pública y contratos inteligentes para garantizar
              confianza y trazabilidad en cada operación.
            </p>
          </div>

        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="mt-24 bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Beneficios de la Tokenización
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

            <div>
              <h3 className="font-semibold text-lg mb-2">⚡ Liquidez inmediata</h3>
              <p className="text-gray-700">
                Los tokens permiten intercambiar activos que antes eran
                ilíquidos, como bienes raíces o arte.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">🤝 Transparencia total</h3>
              <p className="text-gray-700">
                Cada transacción queda registrada en blockchain, ofreciendo
                trazabilidad y confianza.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">📈 Nuevos modelos de negocio</h3>
              <p className="text-gray-700">
                Abre la puerta a financiamiento descentralizado (DeFi),
                fraccionamiento de activos y mayor acceso al capital.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mt-24 text-center py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          ¿Listo para tokenizar tus activos?
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          En Needine diseñamos soluciones de tokenización personalizadas para
          empresas, instituciones y proyectos innovadores.
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 shadow-lg font-semibold">
          Habla con un experto
        </button>
      </section>

    </main>
  );
}
