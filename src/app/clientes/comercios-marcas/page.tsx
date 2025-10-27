import Link from "next/link";
export default function Page() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-24">
            {/* HEADER */}
            <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
                <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80">
                        <img
                            src="/logo.png"
                            alt="Needine logo"
                            className="h-12 w-auto"
                        />

                        {/* 👇 Mensaje de construcción */}
                        <span className="text-red-600 font-semibold text-sm md:text-base flex items-center gap-1">
                            🚧 En construcción · Contratos en Red Sepolia
                        </span>
                    </Link>

                </div>
            </header>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Comercios y Marcas
            </h1>
            <div className="text-gray-700 text-lg space-y-6">
                <p>
                    Para comercios y marcas, la tokenización habilita nuevas formas de
                    fidelización, monetización y construcción de comunidad. En lugar de puntos
                    o descuentos aislados, los <strong>utility tokens</strong> permiten crear
                    economías vivas que premian comportamientos valiosos: compras, reseñas,
                    contenido generado por usuarios y participación social.
                </p>

                <h2 className="text-2xl font-semibold">¿Por qué tokenizar como marca?</h2>
                <ul className="space-y-2">
                    <li>✅ Retención y recompra más altas</li>
                    <li>✅ Comunidad más fiel e involucrada</li>
                    <li>✅ Gamificación de la experiencia de compra</li>
                    <li>✅ Votaciones ligeras para productos</li>
                    <li>✅ Contenido generado por clientes</li>
                </ul>

                <h3 className="text-xl font-semibold">Aplicaciones reales de tokenización</h3>

                <div className="space-y-4">
                    <div>
                        <strong>1) Programas de fidelización tokenizados</strong>
                        <p>
                            Los clientes ganan tokens por compras, check-ins, reseñas y referidos.
                            Pueden canjearlos por descuentos, productos exclusivos, envío gratis o
                            acceso prioritario. El valor es mayor que puntos tradicionales porque
                            los tokens pueden intercambiarse.
                        </p>
                    </div>

                    <div>
                        <strong>2) Gamificación del comercio</strong>
                        <p>
                            Misiones temáticas (Black Friday, Navidad, Back to School) donde los
                            usuarios completan retos para ganar tokens. Esto aumenta visitas,
                            interacción y experiencia divertida, tanto online como en tiendas
                            físicas.
                        </p>
                    </div>

                    <div>
                        <strong>3) Ediciones limitadas y coleccionables digitales</strong>
                        <p>
                            Lanzamiento de coleccionables tokenizados (NFTs) que desbloquean
                            beneficios como acceso anticipado, productos exclusivos o eventos
                            privados. Crea escasez y cultura de marca.
                        </p>
                    </div>

                    <div>
                        <strong>4) Recompensas para contenido generado por clientes (UGC)</strong>
                        <p>
                            Los clientes ganan tokens por reseñas útiles, fotos reales de productos
                            o contenido en redes sociales. Esto fomenta marketing orgánico y
                            viralidad sin necesidad de campañas constantes.
                        </p>
                    </div>

                    <div>
                        <strong>5) Gobernanza ligera de producto</strong>
                        <p>
                            Los holders votan sobre sabores, colores, colaboraciones o colecciones.
                            Esto asegura que los productos tienen demanda antes de producirse, y
                            fortalece la relación con la comunidad.
                        </p>
                    </div>

                    <div>
                        <strong>6) Staking para perks físicos</strong>
                        <p>
                            Los clientes “stakean” tokens para desbloquear beneficios: envío gratis,
                            atención VIP, menores comisiones o prioridad en compras. Esto reduce la
                            circulación de tokens y aumenta su demanda.
                        </p>
                    </div>

                    <div>
                        <strong>7) Micro-propiedad comunitaria</strong>
                        <p>
                            Los clientes obtienen visibilidad o perks al poseer tokens que
                            representan participación simbólica en campañas, colaboraciones o
                            lanzamientos especiales. Incentiva la co-creación.
                        </p>
                    </div>

                    <div>
                        <strong>8) Alianzas interoperables entre marcas</strong>
                        <p>
                            Los tokens de una marca pueden usarse como descuentos en otra marca
                            compatible (ropa deportiva + gimnasio + cafetería). Esto crea
                            ecosistemas en lugar de campañas aisladas.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-semibold">Beneficios clave para comercios</h3>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Mayor tasa de recompra por cliente.</li>
                    <li>Más contenido orgánico creado por usuarios.</li>
                    <li>Visitas repetidas a tienda (online y física).</li>
                    <li>Menor dependencia de descuentos agresivos.</li>
                    <li>Diferenciación competitiva frente a otras marcas.</li>
                </ul>

                <h3 className="text-xl font-semibold">Lanzamiento en 30 días (Needine)</h3>
                <ol className="list-decimal ml-6 space-y-2">
                    <li>
                        <strong>Semana 1</strong> — Definición de utilidades, perks físicos y
                        catálogo de recompensas.
                    </li>
                    <li>
                        <strong>Semana 2</strong> — Integración con punto de venta, misiones de
                        compra y panel anti-sybil.
                    </li>
                    <li>
                        <strong>Semana 3</strong> — Diseño de drops de coleccionables,
                        gobernanza ligera y QR gamificados.
                    </li>
                    <li>
                        <strong>Semana 4</strong> — Piloto con clientes frecuentes, métricas y
                        mejoras para expansión.
                    </li>
                </ol>

                <p>
                    En{" "}
                    <a href="https://needine.com" className="text-blue-500 underline">
                        Needine
                    </a>{" "}
                    ayudamos a comercios y marcas a lanzar programas tokenizados que combinan
                    fidelización, gamificación y comunidad. Comparte tu modelo y te entregamos
                    un plan de 90 días con misiones, perks, KPIs y tokenomics.
                </p>
            </div>


            <a
                href="/tokenizar"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold shadow"
            >
                Crear mi token con Needine
            </a>
        </main>
    );
}
