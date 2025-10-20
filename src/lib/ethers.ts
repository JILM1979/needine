// src/lib/ethers.ts
import { BrowserProvider, Contract, JsonRpcSigner } from "ethers";
import factoryAbi from "@/abis/AssetTokenFactory.json";
import { FACTORY_ADDRESS } from "./chain";

// Detectar si window.ethereum está disponible
export function getEthereum(): any | null {
  if (typeof window === "undefined") return null;
  return (window as any).ethereum ?? null;
}

// Obtener provider de navegador (MetaMask)
export async function getProvider(): Promise<BrowserProvider> {
  const eth = getEthereum();
  if (!eth) throw new Error("MetaMask no detectado");
  return new BrowserProvider(eth);
}

// Obtener signer (cuenta conectada)
export async function getSigner(): Promise<JsonRpcSigner> {
  const provider = await getProvider();
  return provider.getSigner();
}

// Instanciar el contrato factory con signer (para enviar transacciones)
export async function getFactoryWithSigner() {
  const signer = await getSigner();
  return new Contract(FACTORY_ADDRESS, factoryAbi as any, signer);
}
