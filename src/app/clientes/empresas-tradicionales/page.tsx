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
                Coorporaciones Tradicionales
            </h1>

            <div className="text-gray-700 text-lg space-y-6">
                <p>
                    La tokenización permite a corporaciones tradicionales digitalizar procesos
                    internos, automatizar flujos complejos y reforzar el cumplimiento mediante
                    activos programables. Los <strong>utility tokens internos</strong> pueden
                    representar certificaciones, accesos, derechos, presupuestos y datos
                    sensibles, creando trazabilidad y gobernanza automática.
                </p>

                <h2 className="text-2xl font-semibold">¿Por qué tokenizar procesos internos?</h2>
                <ul className="space-y-2">
                    <li>✅ Automatización sin fricción</li>
                    <li>✅ Reducción de errores manuales</li>
                    <li>✅ Auditoría y trazabilidad automática</li>
                    <li>✅ Mayor seguridad de datos sensibles</li>
                    <li>✅ Cumplimiento normativo más claro</li>
                </ul>

                <h3 className="text-xl font-semibold">Aplicaciones reales en corporaciones</h3>

                <div className="space-y-4">
                    <div>
                        <strong>1) Automatización de flujos con credenciales tokenizadas</strong>
                        <p>
                            En lugar de almacenar credenciales o datos críticos, los procesos
                            automáticos (RPA, bots, workflows) consumen tokens que representan
                            accesos temporales. Se reduce el riesgo y se acelera el flujo de
                            aprobación entre departamentos.
                        </p>
                    </div>

                    <div>
                        <strong>2) Certificaciones internas programables</strong>
                        <p>
                            Cuando un empleado completa una formación o evaluación, obtiene un
                            token de certificación. Este token habilita acceso a sistemas, tareas
                            específicas o maquinaria. Permite auditoría en tiempo real y evita
                            verificaciones manuales.
                        </p>
                    </div>

                    <div>
                        <strong>3) Trazabilidad de aprobaciones y auditoría automática</strong>
                        <p>
                            Cada aprobación, revisión o paso de un proceso se vincula a un token
                            que registra quién, cuándo y bajo qué condiciones actuó. Facilita
                            cumplimiento normativo y elimina papeleo.
                        </p>
                    </div>

                    <div>
                        <strong>4) Optimización de asignación presupuestaria entre unidades</strong>
                        <p>
                            Se emiten tokens internos que representan presupuestos o derechos de
                            gasto para filiales o departamentos. Los tokens se consumen al ejecutar
                            gastos autorizados, reduciendo tiempos de conciliación y errores
                            contables.
                        </p>
                    </div>

                    <div>
                        <strong>5) Certificados de cumplimiento y ESG tokenizados</strong>
                        <p>
                            Las unidades de negocio reciben tokens cuando cumplen objetivos de
                            sostenibilidad, auditoría o eficiencia. Estos pueden consultarse a
                            nivel corporativo y facilitan reporting transparente.
                        </p>
                    </div>

                    <div>
                        <strong>6) Control de acceso temporal con expiración programada</strong>
                        <p>
                            Los tokens pueden otorgar acceso a sistemas o áreas por tiempo
                            limitado. Una vez expirados, el acceso se revoca automáticamente sin
                            intervención del equipo de TI.
                        </p>
                    </div>

                    <div>
                        <strong>7) Gobernanza de procesos entre departamentos</strong>
                        <p>
                            Ciertas decisiones internas pueden votarse usando tokens de gobernanza
                            asignados a roles o áreas. Esto mejora visibilidad, reduce
                            favoritismos y acelera la toma de decisiones compartidas.
                        </p>
                    </div>

                    <div>
                        <strong>8) Tokenización de datos sensibles en flujos automatizados</strong>
                        <p>
                            Datos como cuentas bancarias, DNI o información médica se reemplazan
                            internamente por tokens. Los sistemas operan sin ver los datos reales,
                            reduciendo riesgo regulatorio y exposición.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-semibold">Beneficios clave para corporaciones</h3>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Menores costes de cumplimiento.</li>
                    <li>Menos carga para equipos de auditoría.</li>
                    <li>Seguridad de datos reforzada.</li>
                    <li>Menos tiempos de ciclo en aprobaciones.</li>
                    <li>Control completo de roles y accesos.</li>
                </ul>

                <h3 className="text-xl font-semibold">Lanzamiento en 30 días (Needine)</h3>
                <ol className="list-decimal ml-6 space-y-2">
                    <li>
                        <strong>Semana 1</strong> — Definición de tokens internos: certificación,
                        acceso, presupuesto, cumplimiento.
                    </li>
                    <li>
                        <strong>Semana 2</strong> — Integración con RPA, workflows, directorio de
                        identidades y permisos.
                    </li>
                    <li>
                        <strong>Semana 3</strong> — Diseño de expiración, reglas automáticas y
                        panel de auditoría en tiempo real.
                    </li>
                    <li>
                        <strong>Semana 4</strong> — Piloto con departamentos clave, ajustes y
                        despliegue progresivo.
                    </li>
                </ol>

                <p>
                    En{" "}
                    <a href="https://needine.com" className="text-blue-500 underline">
                        Needine
                    </a>{" "}
                    ayudamos a corporaciones a tokenizar procesos internos para desbloquear
                    eficiencia, gobernanza clara, reducción de riesgo y cumplimiento continuo.
                    Comparte tu estructura y diseñamos un plan interno con métricas y
                    tokenomics operativas.
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
