
// src/lib/chain.ts
export const FACTORY_ADDRESS: string =
  "0x9d5173e0377d9cca9161032818eb4a49b700b30e"; // cámbialo por tu address real

export const SEPOLIA: { id: number; name: string } = {
  id: 11155111,
  name: "Sepolia",
};

// Esta función asegura que estás conectado a Sepolia
export async function ensureSepolia(): Promise<void> {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("No se detectó proveedor Ethereum");
  }

  const chainId = (await window.ethereum.request({
    method: "eth_chainId",
  })) as string;

  if (chainId !== "0xaa36a7") {
    // 0xaa36a7 es hex de 11155111
    throw new Error("Conéctate a la red Sepolia");
  }
}
