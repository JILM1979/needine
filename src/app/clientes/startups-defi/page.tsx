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
                Startups Web3 & DeFi
            </h1>
            <div className="text-gray-700 text-lg space-y-6">
                <p>
                    Las startups Web3 y DeFi utilizan la tokenización para incentivar liquidez,
                    controlar accesos técnicos y experimentar con modelos económicos iterativos.
                    Los <strong>utility tokens</strong> permiten staking, gating de features,
                    epochs ajustables y mecanismos de seguridad descentralizada.
                </p>

                <h2 className="text-2xl font-semibold">¿Por qué tokenizar en Web3 & DeFi?</h2>
                <ul className="space-y-2">
                    <li>✅ Incentivos sostenibles para liquidez</li>
                    <li>✅ Accesos técnicos vía staking</li>
                    <li>✅ Anti-sybil activado por stake</li>
                    <li>✅ Experimentación económica por epochs</li>
                    <li>✅ Gobernanza ponderada por actividad real</li>
                </ul>

                <h3 className="text-xl font-semibold">Aplicaciones reales de tokenización</h3>

                <div className="space-y-4">
                    <div>
                        <strong>1) Staking para acceso a features premium</strong>
                        <p>
                            Los usuarios stakean tokens para activar funciones avanzadas como
                            límites ampliados, acceso beta, throughput prioritario o APIs privadas.
                            Retiran el stake cuando dejan de necesitarlas.
                        </p>
                    </div>

                    <div>
                        <strong>2) Staking anti-sybil para recursos técnicos</strong>
                        <p>
                            Se requiere staking mínimo para solicitar API keys, bounties, pruebas
                            incentivadas o despliegues. Opcionalmente puede aplicarse slashing ante
                            abuso. Reduce bots y actores maliciosos.
                        </p>
                    </div>

                    <div>
                        <strong>3) Créditos técnicos tokenizados (access tokens)</strong>
                        <p>
                            Los tokens se “queman” para consumir recursos como RPC, storage
                            descentralizado, compute o consultas indexadas. Modelo pay-as-you-go
                            sin facturación tradicional.
                        </p>
                    </div>

                    <div>
                        <strong>4) Experimentación económica con epochs</strong>
                        <p>
                            Emisiones, recompensas, fees y slashing pueden ajustarse cada ciclo
                            (epoch) sin migraciones complejas. Permite tuning rápido en mercados
                            volátiles.
                        </p>
                    </div>

                    <div>
                        <strong>5) Tesorerías tokenizadas</strong>
                        <p>
                            Se emiten tokens internos que representan presupuesto asignado a squads
                            o productos. Facilita gobernanza granular, vesting y accountability para
                            contributors técnicos.
                        </p>
                    </div>

                    <div>
                        <strong>6) Yield boosters vía staking</strong>
                        <p>
                            Stakear tokens del protocolo otorga multiplicadores temporales de APR,
                            prioridad en retiros o revenue sharing. Atrae liquidez estable sin
                            sobrediluir.
                        </p>
                    </div>

                    <div>
                        <strong>7) Staking como seguro (insurance collateral)</strong>
                        <p>
                            Nodos, validadores o relayers stakean tokens para garantizar buen
                            comportamiento. Slashing si fallan SLA, uptime o seguridad.
                        </p>
                    </div>

                    <div>
                        <strong>8) Token-gated beta testing</strong>
                        <p>
                            Solo holders con cierta reputación o stake acceden a betas privadas y
                            votan prioridades de bugs. Mejora calidad del feedback.
                        </p>
                    </div>

                    <div>
                        <strong>9) Burn-to-deploy</strong>
                        <p>
                            Para desplegar módulos, vaults o subgráficas se queman tokens. Reduce
                            spam técnico y genera presión deflacionaria controlada.
                        </p>
                    </div>

                    <div>
                        <strong>10) Gobernanza ponderada por staking + reputación</strong>
                        <p>
                            El poder de voto considera stake, actividad histórica y contribución
                            técnica. Evita que whales inactivas dominen decisiones.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-semibold">Impacto medible</h3>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Liquidez más estable en pools.</li>
                    <li>Menos abuso de APIs y betas.</li>
                    <li>Mayor participación técnica.</li>
                    <li>Ajustes económicos rápidos por epochs.</li>
                    <li>Seguridad descentralizada sin fricción.</li>
                </ul>

                <h3 className="text-xl font-semibold">Lanzamiento en 30 días (Needine)</h3>
                <ol className="list-decimal ml-6 space-y-2">
                    <li>
                        <strong>Semana 1</strong> — Diseño de utilidades: staking, gating técnico,
                        burn-to-use y yields.
                    </li>
                    <li>
                        <strong>Semana 2</strong> — Smart contracts para stake, slashing y ciclos
                        económicos (epochs).
                    </li>
                    <li>
                        <strong>Semana 3</strong> — Configuración de roles técnicos, betas gated
                        y dashboards de liquidity health.
                    </li>
                    <li>
                        <strong>Semana 4</strong> — Piloto con power-users, calibración y despliegue
                        iterativo.
                    </li>
                </ol>

                <p>
                    En{" "}
                    <a href="https://needine.com" className="text-blue-500 underline">
                        Needine
                    </a>{" "}
                    ayudamos a startups Web3 & DeFi a tokenizar staking, crear accesos
                    técnicos, ejecutar modelos burn-to-use y experimentar con economías
                    iterativas. Comparte tu protocolo y diseñamos incentivos sostenibles en 90
                    días.
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
