import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import { redirect } from "next/navigation";

export default async function PrivatePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin"); // Redirige al login
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Zona Privada</h1>
      <p className="text-gray-600">Bienvenido, {session.user?.name}.</p>
    </main>
  );
}
