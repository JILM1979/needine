
// src/lib/chain.ts
export const FACTORY_ADDRESS: string =
  "0xE065DEf1bc63743fF54e5694252778498bdFced9"; // cámbialo por tu address de tu contrato
//  "0x009bd52BbF495eEd55bdbb8A5b9098E6eB5d33f7"; // cámbialo por tu address de tu contrato



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
