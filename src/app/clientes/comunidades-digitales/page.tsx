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
                Comunidades Digitales
            </h1>
            <div className="text-gray-700 text-lg space-y-6">
                <p>
                    La tokenización permite que comunidades digitales coordinen decisiones,
                    recompensen contribuciones y gestionen reputación de forma meritocrática.
                    Los <strong>utility tokens comunitarios</strong> habilitan votaciones
                    ligeras, badges verificables, micro-grants y gamificación de la
                    participación.
                </p>

                <h2 className="text-2xl font-semibold">¿Por qué tokenizar comunidades digitales?</h2>
                <ul className="space-y-2">
                    <li>✅ Gobernanza ligera sin fricción</li>
                    <li>✅ Meritocracia basada en reputación</li>
                    <li>✅ Curación comunitaria de contenido</li>
                    <li>✅ Distribución eficiente de micro-grants</li>
                    <li>✅ Recompensas por contribuciones reales</li>
                </ul>

                <h3 className="text-xl font-semibold">Aplicaciones reales de tokenización</h3>

                <div className="space-y-4">
                    <div>
                        <strong>1) Votaciones sobre temas no críticos</strong>
                        <p>
                            Los miembros votan con tokens para definir prioridades, nuevas
                            funcionalidades, iniciativas de contenido o presupuestos menores.
                            Orientan la dirección sin bloquear a los líderes.
                        </p>
                    </div>

                    <div>
                        <strong>2) Reputación basada en contribución</strong>
                        <p>
                            Los usuarios ganan tokens de reputación por crear guías, responder
                            preguntas, detectar errores o moderar. Esta reputación pesa más en las
                            votaciones y desbloquea perks internos.
                        </p>
                    </div>

                    <div>
                        <strong>3) Curación descentralizada de contenido</strong>
                        <p>
                            La comunidad vota qué contenido destacar, archivar o priorizar.
                            Creadores destacados reciben tokens reputacionales, mientras que el
                            spam puede ser penalizado suavemente.
                        </p>
                    </div>

                    <div>
                        <strong>4) Micro-grants para proyectos de miembros</strong>
                        <p>
                            La tesorería comunitaria (treasury) financia herramientas, campañas o
                            eventos. Los holders votan propuestas y asignan tokens para su
                            ejecución, estimulando participación.
                        </p>
                    </div>

                    <div>
                        <strong>5) Badges soulbound (no transferibles)</strong>
                        <p>
                            Se emiten badges para moderadores, mentores, voluntarios o alumnos
                            destacados. No pueden venderse ni transferirse, representando
                            mérito verificable en perfiles.
                        </p>
                    </div>

                    <div>
                        <strong>6) Roles dinámicos según reputación</strong>
                        <p>
                            Los permisos (moderación, curación, edición) se desbloquean según
                            reputación y participación. Roles no se vuelven estáticos ni se
                            heredan por antigüedad.
                        </p>
                    </div>

                    <div>
                        <strong>7) Recompensas para micro-tareas internas</strong>
                        <p>
                            Etiquetar contenido, traducir mensajes, preparar resúmenes o detectar
                            spam puede recompensarse con tokens. Las tareas pequeñas se resuelven
                            rápido y con calidad.
                        </p>
                    </div>

                    <div>
                        <strong>8) Sybil-resistance en votaciones</strong>
                        <p>
                            Para votar, los usuarios deben poseer reputación mínima o cierta
                            actividad reciente. Esto evita bots y cuentas dormidas, manteniendo
                            decisiones sanas.
                        </p>
                    </div>

                    <div>
                        <strong>9) Decaimiento de reputación (reputation decay)</strong>
                        <p>
                            La reputación disminuye lentamente si el usuario deja de contribuir,
                            garantizando que el liderazgo refleje participación actual y no solo
                            histórica.
                        </p>
                    </div>

                    <div>
                        <strong>10) Retroactive rewards</strong>
                        <p>
                            Periódicamente, la comunidad elige miembros con mayor impacto reciente
                            y se les otorgan tokens o perks. Funciona extremadamente bien para
                            retención y motivación.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-semibold">Impacto medible</h3>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Mayor retención a largo plazo.</li>
                    <li>Más contenido útil por semana.</li>
                    <li>Mayor participación en votaciones.</li>
                    <li>Auge de usuarios “core” comprometidos.</li>
                    <li>Cultura comunitaria menos pasiva.</li>
                </ul>

                <h3 className="text-xl font-semibold">Lanzamiento en 30 días (Needine)</h3>
                <ol className="list-decimal ml-6 space-y-2">
                    <li>
                        <strong>Semana 1</strong> — Definir modelo de reputación, badges y
                        gobernanza ligera.
                    </li>
                    <li>
                        <strong>Semana 2</strong> — Integración con Discord/Telegram, panel de
                        votaciones y misiones.
                    </li>
                    <li>
                        <strong>Semana 3</strong> — Configuración de micro-grants, roles dinámicos
                        y curación de contenido.
                    </li>
                    <li>
                        <strong>Semana 4</strong> — Piloto con miembros activos, ajustes y
                        expansión progresiva.
                    </li>
                </ol>

                <p>
                    En{" "}
                    <a href="https://needine.com" className="text-blue-500 underline">
                        Needine
                    </a>{" "}
                    acompañamos a comunidades digitales con tokenización enfocada en reputación,
                    gobernanza ligera, votaciones y participación sostenida. Comparte tu modelo
                    y diseñamos un plan de 90 días con mecanismos anti-sybil, badges y
                    gamificación.
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
