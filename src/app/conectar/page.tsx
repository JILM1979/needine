"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import factoryAbi from "@/abis/AssetTokenFactory.json";
import { FACTORY_ADDRESS, SEPOLIA, ensureSepolia } from "@/lib/chain";
import { getFactoryWithSigner } from "@/lib/ethers";
import { parseUnits } from "ethers";

export default function ConectarPage() {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<string | null>(null);
  const [hasProvider, setHasProvider] = useState<boolean>(false);
  const [connecting, setConnecting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [supply, setSupply] = useState("1000000");
  const [deploying, setDeploying] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [tokenAddress, setTokenAddress] = useState<string | null>(null);

  const handleCreateToken = async (e: React.FormEvent) => {
    e.preventDefault();
    setDeploying(true);
    setTxHash(null);
    setTokenAddress(null);

    try {
      await ensureSepolia();
      const factory = await getFactoryWithSigner();

      const initialSupply = parseUnits(supply, 18);

      const predicted: string = await factory.createAssetToken.staticCall(
        tokenName,
        tokenSymbol,
        initialSupply
      );

      const tx = await factory.createAssetToken(
        tokenName,
        tokenSymbol,
        initialSupply
      );

      setTxHash(tx.hash);
      await tx.wait();

      setTokenAddress(predicted);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("❌ Error creando token:", err);
        alert(err.message);
      } else {
        console.error("❌ Error desconocido:", err);
        alert("Error creando el token");
      }
    } finally {
      setDeploying(false);
    }
  };

  const connectWallet = async () => {
    try {
      setError(null);
      setConnecting(true);

      const ethereum = window.ethereum;
      if (!ethereum) {
        setError("No se detectó MetaMask. Instálalo para continuar.");
        return;
      }

      const accounts = (await ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];
      setAccount(accounts?.[0] ?? null);

      const currentChainId = (await ethereum.request({
        method: "eth_chainId",
      })) as string;
      setChainId(currentChainId);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("No se pudo conectar la cartera.");
      }
    } finally {
      setConnecting(false);
    }
  };

  useEffect(() => {
    console.log("✅ Entrando en ConectarPage ahora");

    if (Array.isArray(factoryAbi)) {
      console.log("ABI length:", factoryAbi.length);
      console.log("Factory:", FACTORY_ADDRESS, "Chain:", SEPOLIA.name);
    } else {
      console.log("⚠️ factoryAbi está vacío o no se pudo importar");
    }

    const ethereum = window.ethereum;
    setHasProvider(!!ethereum);
    if (!ethereum) return;

    // ✅ Handlers tipados como unknown[] y casteados dentro
    const handleAccountsChanged = (...args: unknown[]) => {
      const accounts = args[0] as string[];
      setAccount(accounts?.[0] ?? null);
    };

    const handleChainChanged = (...args: unknown[]) => {
      const cid = args[0] as string;
      setChainId(cid);
    };

    // ✅ Usamos optional chaining para evitar "undefined"
    ethereum.on?.("accountsChanged", handleAccountsChanged);
    ethereum.on?.("chainChanged", handleChainChanged);

    (async () => {
      try {
        const accounts = (await ethereum.request({
          method: "eth_accounts",
        })) as string[];
        if (accounts?.[0]) {
          setAccount(accounts[0]);
        }
        const cid = (await ethereum.request({
          method: "eth_chainId",
        })) as string;
        setChainId(cid);
      } catch {
        /* ignore */
      }
    })();

    return () => {
      ethereum?.removeListener?.("accountsChanged", handleAccountsChanged);
      ethereum?.removeListener?.("chainChanged", handleChainChanged);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Needine logo" className="h-12 w-auto" />
            <span className="font-bold text-gray-900 text-2xl"></span>
          </Link>
          <span className="text-lg text-gray-700 font-medium">
            Conectar cartera
          </span>
        </div>
      </header>

      <section className="max-w-xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900">
          Conectar con MetaMask
        </h1>
        <p className="mt-2 text-gray-600">
          Aquí es donde, más adelante, los clientes podrán tokenizar sus activos.
          Primero conecta tu cartera.
        </p>

        <div className="mt-8 bg-white rounded-2xl border p-6 shadow-sm">
          {!hasProvider && (
            <div className="text-red-600 mb-4">
              No se detectó MetaMask.{" "}
              <a
                href="https://metamask.io/download/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Instálalo aquí
              </a>
              .
            </div>
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={connectWallet}
              disabled={connecting || !!account}
              className="px-5 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow disabled:opacity-60"
            >
              {connecting
                ? "Conectando..."
                : account
                ? `Conectado a ${chainId === "0xaa36a7" ? "Sepolia" : chainId}`
                : "Conectar MetaMask"}
            </button>

            {account && (
              <span className="text-sm text-gray-700 truncate">
                Conectado: <span className="font-mono">{account}</span>
                {chainId ? ` · Chain ID: ${chainId}` : null}
              </span>
            )}
          </div>

          {error && <p className="mt-4 text-red-600">{error}</p>}

          <div className="mt-8 p-6 rounded-xl bg-gray-100">
            <h2 className="text-xl font-semibold mb-4">Tokenizar un activo</h2>
            <form onSubmit={handleCreateToken} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Nombre del token
                </label>
                <input
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Ej: Needine Real Estate"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Símbolo</label>
                <input
                  value={tokenSymbol}
                  onChange={(e) => setTokenSymbol(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Ej: NRE"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Suministro inicial
                </label>
                <input
                  type="number"
                  min="1"
                  value={supply}
                  onChange={(e) => setSupply(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
                <p className="text-xs text-gray-600 mt-1">
                  El suministro se ajustará a 18 decimales automáticamente.
                </p>
              </div>
              <button
                type="submit"
                disabled={deploying}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
              >
                {deploying ? "Creando token..." : "Crear token"}
              </button>
            </form>

            {txHash && (
              <p className="mt-4 text-sm">
                Tx enviada:{" "}
                <a
                  href={`https://sepolia.etherscan.io/tx/${txHash}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  ver en Etherscan
                </a>
              </p>
            )}

            {tokenAddress && (
              <p className="mt-2 text-sm">
                Token desplegado:{" "}
                <a
                  href={`https://sepolia.etherscan.io/address/${tokenAddress}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  {tokenAddress}
                </a>
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}