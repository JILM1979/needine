
// src/lib/chain.ts
export const FACTORY_ADDRESS: string =
  "0x839BBe98bf73Fc176836f931e7f64a4a2Ae6F5A8"; // cámbialo por tu address de tu contrato

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
