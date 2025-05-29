// app/private/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LogoutButton from "../components/LogoutButton";

export default async function PrivatePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/"); // o muestra una página de error si prefieres
  }

  return (
    <main className="p-8">
      <LogoutButton />
      <h1 className="text-2xl font-bold mb-4">Zona Privada</h1>
      <p>Bienvenido {session.user?.name}</p>
    </main>
  );
}


