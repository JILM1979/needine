"use client";

import React, { useState } from "react";
import Link from "next/link";
import AccordionFAQ from "./components/AccordionFAQ";

export default function Page() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
        "idle"
    );

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (data.success) {
                form.reset();
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    }

    return (
        <main>
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

                    <Link
                        href="/tokenizar"
                        className="px-5 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow text-lg"
                    >
                        Tokenizar
                    </Link>
                </div>
            </header>

            {/* BANNER SUPERIOR → mensaje legal clave */}
            <div className="bg-blue-600 text-white text-center py-3 px-4 text-sm md:text-base">
                ⚠️ Importante: Needine crea <b>tokens de utilidad</b>.
                No representamos acciones, pisos, deuda, dividendos ni propiedad legal de activos reales.
            </div>

            {/* HERO */}
            <section className="relative bg-gradient-to-r from-blue-900 to-gray-900 text-white py-24 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Tokens Utility para tu Ecosistema Digital
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-200">
                        Needine te permite crear tokens con beneficios, acceso, membresías
                        y gamificación. Nunca representamos valor legal, financiero o
                        propiedad real.
                    </p>
                </div>
            </section>

            {/* SERVICIOS */}
            <section id="servicios" className="mt-24 max-w-5xl mx-auto text-center px-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Qué Ofrecemos
                </h2>
                <p className="text-gray-600 text-lg mb-12">
                    Tokeniza utilidades digitales para tu comunidad sin complicaciones legales.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-800">
                    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900">🎟️ Membresías y accesos</h3>
                        <p className="text-sm text-gray-700">
                            Crea niveles de acceso, perks y ventajas digitales con tu token.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900">🎮 Gamificación</h3>
                        <p className="text-sm text-gray-700">
                            Asigna recompensas, retos y beneficios para tu comunidad.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900">🎫 Tickets y reservas</h3>
                        <p className="text-sm text-gray-700">
                            Tokeniza entradas, turnos, vouchers o créditos de servicio.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow hover:shadow-md transition">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900">🛍️ Puntos de fidelidad</h3>
                        <p className="text-sm text-gray-700">
                            Crea sistemas de puntos interoperables y transferibles.
                        </p>
                    </div>
                </div>
            </section>

            {/* BENEFICIOS */}
            <section id="beneficios" className="mt-24 bg-gray-50 py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        Beneficios de Tokenizar con Utility Tokens
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

                        <div>
                            <h3 className="font-semibold text-lg mb-2">🔑 Acceso programable</h3>
                            <p className="text-gray-700">
                                Controla niveles de acceso o perks mediante el token.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-2">⚙️ Sin dependencia legal</h3>
                            <p className="text-gray-700">
                                No representan activos físicos ni derechos financieros.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-2">🌍 Intercambiables libremente</h3>
                            <p className="text-gray-700">
                                Tus usuarios pueden moverlos en wallets y DEX sin burocracia.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="cta" className="mt-24 text-center py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    ¿Listo para crear tu token utility?
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Needine se especializa en tokens digitales basados en utilidades, acceso,
                    perks y gamificación. Lo que hagan luego tus usuarios es responsabilidad de ellos.
                </p>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
                    <input type="text" name="name" placeholder="Tu nombre" required className="p-3 border border-gray-300 rounded-lg" />
                    <input type="email" name="email" placeholder="Tu correo" required className="p-3 border border-gray-300 rounded-lg" />
                    <textarea name="message" placeholder="Cuéntanos sobre tu idea" required className="p-3 border border-gray-300 rounded-lg" rows={4} />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 shadow-lg font-semibold"
                    >
                        {status === "sending" ? "Enviando..." : "Enviar"}
                    </button>

                    {status === "success" && (
                        <p className="text-green-600">✅ Mensaje enviado correctamente</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-600">❌ Hubo un error, inténtalo de nuevo</p>
                    )}
                </form>
            </section>
            <AccordionFAQ />

            {/* SOBRE EL CREADOR */}

            <section id="about" className="mt-24 bg-white py-16 px-6 border-t">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        ¿Quién está detrás de Needine?
                    </h2>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* FOTO */}
                        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto overflow-hidden rounded-full border-4 border-blue-500">
                            <img
                                src="/juani.png"
                                alt="Foto de Juan Ignacio López Martínez"
                                className="object-cover object-center w-full h-full scale-110"
                            />

                        </div>

                        {/* TEXTO */}
                        <div className="text-gray-700 leading-relaxed text-lg max-w-3xl">
                            <p className="mb-4">
                                👋 Soy <b>Juan Ignacio</b>, profesional de tecnología con más de 15 años de experiencia
                                en diferentes areas de las Tecnologias de la información. En <b>needine.com</b> investigo mecánicas de tokenización
                                mediante smart contracts en Solidity sobre redes Ethereum/EVM. Exploro seguridad, modelos de permisos,
                                almacenamiento descentralizado (IPFS) e integración con wallets como MetaMask.
                            </p>
                            <p className="mb-4">
                                El desarrollo incluye la implementación de estándares ERC-20, ERC-721 y ERC-1155
                                utilizando OpenZeppelin, pruebas automatizadas con Hardhat bajo enfoque TDD, e
                                integración frontend/Web3 mediante Ethers.js para interacción transaccional y
                                lectura de estado on-chain.
                            </p>
                            <p className="mb-4">
                                La línea de investigación actual incluye integración de modelos de
                                <b> inteligencia artificial</b> para reputación dinámica, recomendaciones de
                                contenido e interacciones de agentes autónomos dentro de ecosistemas Web3.
                            </p>
                            <p className="mb-4">
                                Si tienes una idea o proyecto, estaré encantado de discutirla contigo. 😊
                            </p>
                            <p className="font-semibold text-gray-900 mt-4">
                                Este proyecto no representa activos financieros, propiedad real ni rendimientos.
                                Es estudio experimental sobre <b>utility tokens</b> y arquitecturas descentralizadas.
                            </p>
                            <p className="mt-6 text-sm text-gray-600">
                                <b>Tech stack:</b> Solidity · Ethereum/EVM · Hardhat · OpenZeppelin · Ethers.js · MetaMask · IPFS · Tokenization · TDD · CI/CD
                            </p>

                            <p className="mt-8">
                                <a
                                    href="https://www.linkedin.com/in/juan-ignacio-l%C3%B3pez-mart%C3%ADnez-b282883b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline font-medium"
                                >
                                    Ver mi perfil en LinkedIn
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
