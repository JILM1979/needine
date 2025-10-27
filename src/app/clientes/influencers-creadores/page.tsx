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
                Influencers y Creadores
            </h1>

            <div className="text-gray-700 text-lg space-y-6">
                <p>
                    Para influencers y creadores, la tokenización abre una nueva forma de
                    monetizar, alinear incentivos y fortalecer comunidades. Los{" "}
                    <strong>utility tokens</strong> permiten que los seguidores no solo
                    consuman contenido, sino que participen, co-creen y compartan parte del
                    valor generado, creando audiencias más leales y activas.
                </p>

                <h2 className="text-2xl font-semibold">¿Por qué tokenizar como creador?</h2>
                <ul className="space-y-2">
                    <li>✅ Monetización directa sin intermediarios</li>
                    <li>✅ Comunidad más leal y comprometida</li>
                    <li>✅ Gamificación de la participación</li>
                    <li>✅ Gobernanza ligera con fans</li>
                    <li>✅ Recompensas basadas en mérito y contribución</li>
                </ul>

                <h3 className="text-xl font-semibold">Aplicaciones reales de tokenización</h3>

                <div className="space-y-4">
                    <div>
                        <strong>1) Token de comunidad del creador</strong>
                        <p>
                            Emite tu propio token para recompensar a seguidores por comentar,
                            compartir o asistir a eventos en vivo. Los tokens pueden canjearse por
                            meet & greet, contenido exclusivo o acceso anticipado a lanzamientos.
                        </p>
                    </div>

                    <div>
                        <strong>2) Fan equity y co-creación de proyectos</strong>
                        <p>
                            Lanza tokens ligados a un proyecto (curso, serie, podcast). Tus fans
                            pueden ganar perks, acceso o participar en micro-rewards según el
                            éxito del contenido. Incentiva que tu comunidad impulse tu crecimiento.
                        </p>
                    </div>

                    <div>
                        <strong>3) Gamificación y misiones para seguidores</strong>
                        <p>
                            Diseña temporadas con misiones: compartir contenido, crear memes,
                            invitar a amigos, asistir a lives. Los tokens obtenidos pueden gastarse
                            en productos limitados, merchandising o experiencias backstage.
                        </p>
                    </div>

                    <div>
                        <strong>4) Gobernanza ligera de comunidad</strong>
                        <p>
                            Permite que tus holders voten sobre temas como ideas de contenido,
                            colaboraciones, o formato de próximos eventos. La comunidad siente
                            que tiene voz en tu crecimiento creativo.
                        </p>
                    </div>

                    <div>
                        <strong>5) Tokenización de obras y derechos</strong>
                        <p>
                            Vende ediciones limitadas de vídeos, fotos, canciones o diseños como
                            coleccionables digitales. Puedes ofrecer perks adicionales a holders
                            como royalties, acceso o entradas a futuros lanzamientos.
                        </p>
                    </div>

                    <div>
                        <strong>6) Economía de atención on-chain</strong>
                        <p>
                            Convierte tu engagement en valor real. Los seguidores ganan tokens por
                            interactuar contigo; tú capturas parte del valor de esa atención sin
                            depender únicamente de ads o patrocinios tradicionales.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-semibold">Beneficios clave para creadores</h3>
                <ul className="list-disc ml-6 space-y-2">
                    <li>
                        Retención superior: los fans tienen razones para volver semana a semana.
                    </li>
                    <li>
                        Crecimiento orgánico: la comunidad promueve tu contenido para ganar
                        recompensas.
                    </li>
                    <li>
                        Nuevas líneas de ingresos sin depender de plataformas.
                    </li>
                    <li>
                        Delegación parcial de decisiones creativas mediante votaciones.
                    </li>
                </ul>

                <h3 className="text-xl font-semibold">Lanzamiento en 30 días (Needine)</h3>
                <ol className="list-decimal ml-6 space-y-2">
                    <li>
                        <strong>Semana 1</strong> — Definición de utilidades del token,
                        perks exclusivos y misiones para fans.
                    </li>
                    <li>
                        <strong>Semana 2</strong> — Smart contracts, wallet UX y panel
                        anti-sybil.
                    </li>
                    <li>
                        <strong>Semana 3</strong> — Catálogo de canjes: backstage, merch,
                        cursos, accesos.
                    </li>
                    <li>
                        <strong>Semana 4</strong> — Piloto con tu fanbase más activa,
                        feedback, ajustes y lanzamiento general.
                    </li>
                </ol>

                <p>
                    En{" "}
                    <a href="https://needine.com" className="text-blue-500 underline">
                        Needine
                    </a>{" "}
                    ayudamos a influencers y creadores a diseñar, lanzar y operar economías
                    tokenizadas: utilidades reales, gamificación, contratos seguros y
                    analítica. Comparte tu modelo y te entregamos un plan para 90 días con
                    misiones, perks y KPIs.
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
