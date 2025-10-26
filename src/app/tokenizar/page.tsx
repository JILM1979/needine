"use client";
//import { Log, LogDescription } from "ethers";
//import { BrowserProvider } from "ethers";
import vaultAbi from "@/abis/VaultV2.json";
import { ethers } from "ethers";
import React, { useEffect, useState, useCallback } from "react";
import { Log, LogDescription, BrowserProvider } from "ethers";

//import React, { useEffect, useState } from "react";
import Link from "next/link";
import factoryAbi from "@/abis/AssetTokenFactory.json";
import { FACTORY_ADDRESS, SEPOLIA, ensureSepolia } from "@/lib/chain";
import { getFactoryWithSigner } from "@/lib/ethers";
import { parseUnits } from "ethers";

export default function TokenizarPage() {
    const [account, setAccount] = useState<string | null>(null);
    const [chainId, setChainId] = useState<string | null>(null);
    const [hasProvider, setHasProvider] = useState<boolean>(false);
    const [connecting, setConnecting] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const [tokenName, setTokenName] = useState("");
    const [tokenSymbol, setTokenSymbol] = useState("");
    const [description, setDescription] = useState("");
    const [supply, setSupply] = useState("1000000");
    const [deploying, setDeploying] = useState(false);
    const [txHash, setTxHash] = useState<string | null>(null);
    const [tokenAddress, setTokenAddress] = useState<string | null>(null);

    //    const [isFungible, setIsFungible] = useState(true);
    const [isMintable, setIsMintable] = useState(true);
    const [isBurnable, setIsBurnable] = useState(true);
    const [isStakable, setIsStakable] = useState(true);

    //    const [mintTo, setMintTo] = useState("");
    //    const [burnFrom, setBurnFrom] = useState("");
    const [targetAddress, setTargetAddress] = useState("");
    const [amount, setAmount] = useState("");

    const [myAssets, setMyAssets] = useState<MyAsset[]>([]);
    const [loadingTokens, setLoadingTokens] = useState(false);
    type MyAsset = {
        tokenAddress: string;
        vaultAddress: string;
        stakePoolAddress: string | null;
        name: string;
        symbol: string;
        supply: bigint; // ethers v6 devuelve bigint
        isMintable: boolean;
        isBurnable: boolean;
        stakingEnabled: boolean;
        owner: string;
    };
    const handleMint = async (vaultAddress: string, to: string, amount: string) => {
        try {
            await ensureSepolia();
            if (!window.ethereum) {
                throw new Error("No se encontró un proveedor Ethereum");
            }
            const provider = new BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const vault = new ethers.Contract(vaultAddress, vaultAbi, signer);

            const decimals = 18; // si quieres leerlo dinámico lo hago luego 👌
            const value = parseUnits(amount, decimals);

            const tx = await vault.mint(to, value);
            await tx.wait();
            alert(`✅ Mint realizado! Tx: ${tx.hash}`);
        } catch (err: unknown) {
            if (err instanceof Error) alert("❌ Error mint: " + err.message);
        }
    };

    const handleBurn = async (vaultAddress: string, from: string, amount: string) => {
        try {
            await ensureSepolia();
            if (!window.ethereum) {
                throw new Error("No se encontró un proveedor Ethereum");
            }
            const provider = new BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const vault = new ethers.Contract(vaultAddress, vaultAbi, signer);

            const decimals = 18;
            const value = parseUnits(amount, decimals);

            const tx = await vault.burn(from, value);
            await tx.wait();
            alert(`🔥 Burn realizado! Tx: ${tx.hash}`);
        } catch (err: unknown) {
            if (err instanceof Error) alert("❌ Error burn: " + err.message);
        }
    };

    const FACTORY_DEPLOY_BLOCK = 9489062; // Sepolia, 25-10-2025
    const loadMyTokens = useCallback(async (currentAccount: string) => {
        try {
            setLoadingTokens(true);
            await ensureSepolia();
            if (!window.ethereum) {
                throw new Error("No se encontró un proveedor Ethereum");
            }
            const provider = new BrowserProvider(window.ethereum);
            const factory = await getFactoryWithSigner();
            const iface = factory.interface;

            const ev = iface.getEvent("AssetTokenCreated");
            if (!ev) throw new Error("Evento AssetTokenCreated no existe en ABI");
            const eventTopic = ev.topicHash;

            const logs = await provider.getLogs({
                address: FACTORY_ADDRESS,
                fromBlock: FACTORY_DEPLOY_BLOCK,
                toBlock: "latest",
                topics: [eventTopic],
            });

            const parsed = logs
                .map((log: Log) => {
                    try {
                        return iface.parseLog(log) as LogDescription;
                    } catch {
                        return null;
                    }
                })
                .filter((ev: LogDescription | null) => ev && ev.name === "AssetTokenCreated")
                .map((ev: LogDescription | null) => (ev!.args as Record<string, unknown>))
                .filter((args: Record<string, unknown>) =>
                    typeof args.owner === "string" &&
                    (args.owner as string).toLowerCase() === currentAccount.toLowerCase()
                )
                .map((args: Record<string, unknown>) => ({
                    tokenAddress: args.tokenAddress as string,
                    vaultAddress: args.vaultAddress as string,
                    stakePoolAddress:
                        args.stakePoolAddress === "0x0000000000000000000000000000000000000000"
                            ? null
                            : (args.stakePoolAddress as string),
                    name: args.name as string,
                    symbol: args.symbol as string,
                    supply: args.supply as bigint,
                    isMintable: args.isMintable as boolean,
                    isBurnable: args.isBurnable as boolean,
                    stakingEnabled: args.stakingEnabled as boolean,
                    owner: args.owner as string,
                }));

            const uniq: MyAsset[] = Array.from(
                new Map(parsed.map((a: MyAsset) => [a.tokenAddress.toLowerCase(), a])).values()
            );

            setMyAssets(uniq);
        } finally {
            setLoadingTokens(false);
        }
    }, []);

    const disconnectWallet = () => {
        setAccount(null);
        setChainId(null);
        setError(null);
        setConnecting(false);
    };
    const changeAccount = async () => {
        if (!window.ethereum) return;
        try {
            await window.ethereum.request({
                method: "wallet_requestPermissions",
                params: [{ eth_accounts: {} }],
            });

            const accounts = (await window.ethereum.request({
                method: "eth_requestAccounts",
            })) as string[];

            setAccount(accounts?.[0] ?? null);

        } catch (err) {
            console.warn(err);
        }
    };

    const handleCreateToken = async (e: React.FormEvent) => {
        e.preventDefault();
        setDeploying(true);
        setTxHash(null);
        setTokenAddress(null);

        try {
            await ensureSepolia();
            const factory = await getFactoryWithSigner();

            // 🔹 Leer la tarifa actual (getCreationFeeInEth)
            const feeInEth = await factory.getRequiredFeeInEth();
            console.log("💰 Fee actual en ETH:", feeInEth.toString());

            const initialSupply = parseUnits(supply, 18);

            // 🔹 Llamada completa con opciones y valor enviado
            const tx = await factory.createAssetToken({
                name: tokenName,
                symbol: tokenSymbol,
                supply: initialSupply,
                isMintable: isMintable,
                isBurnable: isBurnable,
                description: description,
                enableStaking: isStakable
            },
                { value: feeInEth } // envío del pago en ETH
            );

            setTxHash(tx.hash);
            const receipt = await tx.wait();


            const event = receipt.logs
                .map((log: Log) => {
                    try {
                        return factory.interface.parseLog({
                            topics: log.topics,
                            data: log.data,
                        }) as LogDescription;
                    } catch {
                        return null;
                    }
                })
                .find((parsed: LogDescription | null): parsed is LogDescription => {
                    return parsed !== null && parsed.name === "AssetTokenCreated";
                });


            if (event) {
                const tokenAddr = event.args.tokenAddress as string;
                setTokenAddress(tokenAddr);
                console.log("✅ Nuevo activo desplegado en:", tokenAddr);
            } else {
                console.warn("⚠️ No se encontró evento AssetTokenCreated");
            }

        } catch (err) {
            console.error("❌ Error creando token:", err);
            alert((err as Error).message || "Error creando el token");
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
    useEffect(() => {
        if (account) {
            loadMyTokens(account);
        } else {
            setMyAssets([]);
        }
    }, [account, chainId, loadMyTokens]);


    return (
        <main className="min-h-screen bg-gray-50">
            <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
                <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo.png" alt="Needine logo" className="h-12 w-auto" />
                        {/* 👇 Mensaje de construcción */}
                        <span className="text-red-600 font-semibold text-sm md:text-base flex items-center gap-1">
                            🚧 En construcción · Contratos en Red Sepolia
                        </span>
                    </Link>
                    <span className="text-lg text-gray-700 font-medium">

                    </span>
                </div>
            </header>

            <section className="max-w-xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold text-gray-900">
                    Conectar con MetaMask
                </h1>
                <p className="mt-2 text-gray-600">
                    Aquí es donde, más adelante, los clientes podrán tokenizar.
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
                        {/* Botón conectar / desconectar */}
                        <button
                            onClick={account ? disconnectWallet : connectWallet}
                            disabled={connecting}
                            className={`px-5 py-3 rounded-2xl font-semibold shadow text-white disabled:opacity-60
                                ${account ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"}`}
                        >
                            {connecting
                                ? "Conectando..."
                                : account
                                    ? "Desconectar"
                                    : "Conectar MetaMask"}
                        </button>

                        {/* Texto de conexión */}
                        {account && (
                            <span className="text-sm text-gray-700 truncate">
                                Conectado: <span className="font-mono">{account}</span>
                                {chainId ? ` · Chain ID: ${chainId}` : null}
                            </span>
                        )}

                        {/* Botón para cambiar cuenta */}
                        {account && (
                            <button
                                onClick={changeAccount}
                                className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium"
                            >
                                Cambiar cuenta
                            </button>
                        )}
                    </div>


                    {error && <p className="mt-4 text-red-600">{error}</p>}

                    <div className="mt-8 p-6 rounded-xl bg-gray-100">
                        <h2 className="text-xl font-semibold mb-4">Tokenizar ahora</h2>
                        <form onSubmit={handleCreateToken} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Nombre del token</label>
                                <input
                                    value={tokenName}
                                    onChange={(e) => setTokenName(e.target.value)}
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="Ej: Token Needine Utilidades"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Símbolo</label>
                                <input
                                    value={tokenSymbol}
                                    onChange={(e) => setTokenSymbol(e.target.value)}
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="Ej: NEEDI"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Suministro inicial</label>
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
                            <div>
                                <label className="block text-sm font-medium">Descripcion</label>
                                <input
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="description"
                                    required
                                />
                            </div>

                            {/* === NUEVAS OPCIONES === */}
                            <div className="grid grid-cols-2 gap-4">
                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={isMintable}
                                        onChange={(e) => setIsMintable(e.target.checked)}
                                    />
                                    Token mintable
                                </label>

                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={isBurnable}
                                        onChange={(e) => setIsBurnable(e.target.checked)}
                                    />
                                    Token burnable
                                </label>
                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={isStakable}
                                        onChange={(e) => setIsStakable(e.target.checked)}
                                    />
                                    Token stakable
                                </label>


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
                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-3">Mis tokens creados</h2>

                    {!account && <p className="text-sm text-gray-600">Conecta tu cartera para ver tus tokens.</p>}

                    {account && (
                        <div className="space-y-3">
                            {loadingTokens && <p className="text-sm text-gray-500">Cargando…</p>}
                            {!loadingTokens && myAssets.length === 0 && (
                                <p className="text-sm text-gray-600">No has creado tokens todavía.</p>
                            )}

                            {myAssets.map(asset => (
                                <div key={asset.tokenAddress} className="bg-white border rounded-xl p-4 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="font-semibold">{asset.name} <span className="text-gray-500">({asset.symbol})</span></div>
                                            <div className="text-xs text-gray-600">
                                                Supply inicial: {asset.supply.toString()}
                                            </div>
                                            <div className="text-xs text-gray-600">
                                                Mintable: {asset.isMintable ? "sí" : "no"} · Burnable: {asset.isBurnable ? "sí" : "no"} · Staking: {asset.stakingEnabled ? "sí" : "no"}
                                            </div>
                                        </div>
                                        <div className="text-right space-y-1">
                                            <a href={`https://sepolia.etherscan.io/address/${asset.tokenAddress}`} target="_blank" rel="noreferrer" className="text-blue-600 underline text-sm">Token</a><br />
                                            <a href={`https://sepolia.etherscan.io/address/${asset.vaultAddress}`} target="_blank" rel="noreferrer" className="text-blue-600 underline text-sm">Vault</a><br />
                                            {asset.stakePoolAddress && (
                                                <a href={`https://sepolia.etherscan.io/address/${asset.stakePoolAddress}`} target="_blank" rel="noreferrer" className="text-blue-600 underline text-sm">StakePool</a>
                                            )}
                                        </div>
                                    </div>
                                    {/* Botonera rápida para próximos pasos */}
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <Link href={`/token/${asset.tokenAddress}`} className="px-3 py-1.5 text-sm bg-gray-100 rounded-lg hover:bg-gray-200">Gestionar</Link>
                                        {asset.stakingEnabled && asset.stakePoolAddress && (
                                            <Link href={`/stake/${asset.stakePoolAddress}`} className="px-3 py-1.5 text-sm bg-gray-100 rounded-lg hover:bg-gray-200">Staking</Link>
                                        )}
                                    </div>
                                    {/* ==== Mint & Burn QUICK ACTIONS ==== */}
                                    <div className="mt-4 bg-gray-50 p-3 rounded-xl">
                                        <div className="text-xs text-gray-600 mb-2">
                                            Mint / Burn desde el Vault ({asset.vaultAddress.slice(0, 6)}…)
                                        </div>

                                        <div className="grid grid-cols-1 gap-2">
                                            <input
                                                className="border p-2 rounded text-sm"
                                                placeholder="Dirección (vacío = tú)"
                                                value={targetAddress}
                                                onChange={(e) => setTargetAddress(e.target.value)}
                                            />

                                            <input
                                                className="border p-2 rounded text-sm"
                                                placeholder="Cantidad (ej: 100)"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                            />

                                            <div className="flex gap-2 mt-1">
                                                {asset.isMintable && (
                                                    <button
                                                        onClick={() => handleMint(asset.vaultAddress, targetAddress || account!, amount)}
                                                        className="px-3 py-1 rounded bg-green-500 hover:bg-green-600 text-white text-sm"
                                                    >
                                                        Mint
                                                    </button>
                                                )}

                                                {asset.isBurnable && (
                                                    <button
                                                        onClick={() => handleBurn(asset.vaultAddress, targetAddress || account!, amount)}
                                                        className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-sm"
                                                    >
                                                        Burn
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </section>
        </main>
    );
}