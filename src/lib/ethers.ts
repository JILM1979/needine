// src/lib/ethers.ts
import { BrowserProvider, Contract, Eip1193Provider } from "ethers";
import factoryAbi from "@/abis/AssetTokenFactory.json";
import { FACTORY_ADDRESS } from "./chain";

export function getWeb3Provider(): BrowserProvider {
  if (typeof window === "undefined" || !window.ethereum) {
    throw new Error("No se detectó proveedor Ethereum");
  }

  // 👇 ahora está tipado correctamente
  return new BrowserProvider(window.ethereum as Eip1193Provider);
}

export async function getFactoryWithSigner(): Promise<Contract> {
  const provider = getWeb3Provider();
  const signer = await provider.getSigner();
  return new Contract(FACTORY_ADDRESS, factoryAbi, signer);
}

