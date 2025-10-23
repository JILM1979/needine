import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; // <-- nuevo

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Needine",
  description: "Utility tokens, perks, acceso, gamificación sin representación financiera.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>

        {/* FOOTER */}
        <footer className="mt-24 bg-gray-900 text-gray-300 py-10 text-center text-sm">
          <div className="max-w-5xl mx-auto px-6">
            <p>
              © {new Date().getFullYear()} Needine. Todos los derechos reservados.
            </p>
            <p className="mt-3">
              Los tokens creados en Needine son utility. No representan propiedad
              legal, dividendos, acciones, deuda ni derechos financieros sobre
              activos reales. Cada proyecto es responsable de su cumplimiento
              normativo.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
