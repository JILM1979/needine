"use client";

import { useState } from "react";

interface Item {
    question: string;
    answer: string;
}

const faqItems: Item[] = [
    {
        question: "¿Los tokens representan acciones o propiedad real?",
        answer:
            "No. Los tokens creados con Needine son puramente utility. No representan propiedad, dividendos, deuda ni derechos financieros."
    },
    {
        question: "¿Necesito KYC para usar Needine?",
        answer:
            "No. Para utility no se solicita KYC. Si introduces elementos financieros, es tu responsabilidad legal."
    },
    {
        question: "¿Puedo tokenizar pisos o acciones?",
        answer:
            "No. Needine no permite tokenizar propiedad legal de inmuebles, valores financieros ni instrumentos regulados."
    },
    {
        question: "¿Qué pasa si pierdo mis claves?",
        answer:
            "Las wallets son responsabilidad del usuario. La blockchain no permite recuperación sin clave."
    },
    {
        question: "¿Mis tokens pueden venderse libremente?",
        answer:
            "Sí, siempre dentro de su condición utility. El mercado es libre y descentralizado."
    }
];

export default function AccordionFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(i === openIndex ? null : i);
    };

    return (
        <section className="max-w-4xl mx-auto my-24 px-6">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
                Preguntas Frecuentes
            </h2>

            <div className="space-y-4">
                {faqItems.map((item, i) => (
                    <div
                        key={i}
                        className="border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-lg hover:shadow-blue-100 transition"
                    >
                        {/* HEADER */}
                        <button
                            onClick={() => toggle(i)}
                            className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-900"
                        >
                            <span>{item.question}</span>

                            {/* ICONO ROTANDO */}
                            <svg
                                className={`w-5 h-5 transition-transform ${openIndex === i ? "rotate-180" : "rotate-0"
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* CONTENT */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40" : "max-h-0"
                                }`}
                        >
                            <p className="px-5 pb-5 text-gray-700 text-sm">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
