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
                Emprendedores Web3
            </h1>

            <div className="text-gray-700 text-lg space-y-6">

                <p>
                    La tokenización no se trata solo de “añadir un token”; es el diseño de una
                    economía alineada donde usuarios, creadores y equipo avanzan en la misma
                    dirección. Los <strong>utility tokens</strong> permiten crear incentivos
                    medibles para adopción, retención, contribución y gobernanza ligera,
                    mientras capturan valor que antes se perdía en descuentos, puntos o
                    promociones aisladas.
                </p>

                <h2 className="text-2xl font-semibold">¿Por qué tokenizar aquí?</h2>
                <ul className="space-y-2">
                    <li>✅ Incentivos desde el día 1</li>
                    <li>✅ Captura de valor comunitario</li>
                    <li>✅ Gamificación de participación</li>
                    <li>✅ Gobernanza progresiva</li>
                    <li>✅ Recompensas basadas en mérito</li>
                </ul>

                <h3 className="text-xl font-semibold">Casos reales de aplicación</h3>

                <div className="space-y-4">
                    <div>
                        <strong>SaaS B2B</strong> — referidos y funciones premium
                        <p>
                            Los usuarios ganan tokens por invitaciones aceptadas, completar
                            onboarding y conectar integraciones. Los tokens se canjean por
                            créditos de API, límites superiores o soporte prioritario.
                            Parte del pago mensual compra tokens para la tesorería comunitaria.
                        </p>
                    </div>

                    <div>
                        <strong>Marketplace P2P</strong> — reputación y comisiones
                        <p>
                            Vendedores “stakean” tokens para desbloquear comisiones más bajas y
                            mayor visibilidad. Compradores ganan tokens por reseñas verificadas.
                            Parte del fee alimenta recompensas o un fondo de seguros on-chain.
                        </p>
                    </div>

                    <div>
                        <strong>Comunidades de creadores / educación</strong>
                        <p>
                            Alumnos y creadores ganan tokens por publicar guías útiles y responder
                            preguntas. Pueden gastarlos en workshops, plantillas y sesiones 1:1.
                            La comunidad vota micro-grants trimestrales.
                        </p>
                    </div>

                    <div>
                        <strong>Juegos o apps con temporadas</strong>
                        <p>
                            Temporadas de 6–8 semanas con misiones que otorgan tokens.
                            Se pueden “quemar” tokens para crear objetos raros. El marketplace
                            in-app destina parte de sus comisiones a la siguiente temporada.
                        </p>
                    </div>

                    <div>
                        <strong>Datos / activos del mundo real (RWA light)</strong>
                        <p>
                            Proveedores stakean tokens para listar activos/datos; se penaliza fraude.
                            Compradores pagan en fiat, y el sistema compra tokens para distribuir
                            a validadores. La gobernanza ajusta parámetros de riesgo.
                        </p>
                    </div>

                    <div>
                        <strong>Apps locales / movilidad</strong>
                        <p>
                            Usuarios ganan tokens por check-ins geolocalizados, reseñas verificadas
                            y acciones de sostenibilidad. Se gastan en descuentos locales o pases
                            comunitarios. Se crean fondos barriales votados por holders.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-semibold">Cómo se diseña la economía</h3>
                <ul className="list-disc ml-6 space-y-2">
                    <li>
                        Define KPIs → comportamientos → incentivos. Recompensa acciones
                        verificables que aporten valor real.
                    </li>
                    <li>
                        Oferta clara: suministro, asignación, mecánicas de demanda (canjes, fees,
                        perks, staking).
                    </li>
                    <li>
                        Gobernanza progresiva: empieza con votaciones “off-chain” para
                        decisiones no críticas, escala a on-chain cuando haga sentido.
                    </li>
                    <li>
                        Cumplimiento: utilidad real, reglas anti-sybil y límites por usuario.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold">Lanzamiento en 30 días (Needine)</h3>
                <ol className="list-decimal ml-6 space-y-2">
                    <li>
                        <strong>Semana 1</strong> — Economía e incentivos, KPIs, mapa de misiones,
                        lógica de canje, gobernanza inicial.
                    </li>
                    <li>
                        <strong>Semana 2</strong> — Smart contracts (mint, treasury, roles),
                        panel anti-sybil, pagos fiat→token.
                    </li>
                    <li>
                        <strong>Semana 3</strong> — Misiones, temporadas, perks, dashboard de métricas.
                    </li>
                    <li>
                        <strong>Semana 4</strong> — Piloto controlado con cohortes pequeñas,
                        límites de emisión y ajustes.
                    </li>
                </ol>
                <p>
                    En <a href="https://needine.com" className="text-blue-500 underline">
                        Needine
                    </a>{" "}
                    diseñamos, lanzamos y operamos tu token: economía, contratos, paneles
                    anti-sybil, compliance y analítica. Si nos compartes tu modelo de negocio,
                    te devolvemos un borrador para tus primeros 90 días con misiones y canjes.
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
