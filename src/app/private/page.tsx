// app/private/page.tsx
import { getServerSession } from "next-auth";
//import { authOptions } from "../ /api/auth/[...nextauth]/route";
import { authOptions } from "../../lib/authOptions";
import { redirect } from "next/navigation";
import LogoutButton from "../components/LogoutButton";
import { allowedUsers } from "@/lib/allowedUsers";
import ChatRAG from "@/app/components/ChatRAG";


export default async function PrivatePage() {
  const session = await getServerSession(authOptions);

  
  if (!session || !session.user || !allowedUsers.includes(session.user.name ?? "")) {
    return redirect("/");
  }

  return (
    <main className="p-8">
      <LogoutButton />
      <h1 className="text-2xl font-bold mb-4">Zona Privada</h1>
      <p>Bienvenido {session.user?.name}</p>

      <ChatRAG />

    </main>
  );
}


