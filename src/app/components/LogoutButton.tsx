"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "https://needine.com" })}
      className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md shadow"
    >
      Cerrar sesión y volver a Needine.com
    </button>
  );
}
