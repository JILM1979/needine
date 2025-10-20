"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function ConectarPage() {

  useEffect(() => {
    console.log("✅ Entrando en ConectarPage");

  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Needine logo" className="h-12 w-auto" />
            <span className="font-bold text-gray-900 text-2xl"></span>
          </Link>
          <span className="text-lg text-gray-700 font-medium">
            Conectar cartera
          </span>
        </div>
      </header>

      <section className="max-w-xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900">
          Conectar con MetaMask
        </h1>
        
      </section>
    </main>
  );
}
