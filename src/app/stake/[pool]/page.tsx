"use client";
import Link from "next/link";

import { use, useEffect, useState } from "react";
import { ethers, BrowserProvider, parseUnits, formatUnits } from "ethers";
import erc20Abi from "@/abis/ERC20.json";
import { ensureSepolia } from "@/lib/chain";
import stakePoolArtifact from "@/abis/StakePool.json";

export default function StakePage({ params }: { params: Promise<{ pool: string }> }) {

    // ✅ desenvuelve params (Next.js ahora lo exige)
    const { pool: poolAddress } = use(params);

    const [account, setAccount] = useState("");
    const [tokenAddress, setTokenAddress] = useState("");
    const [stakeBalance, setStakeBalance] = useState("0");
    const [pendingRewards, setPendingRewards] = useState("0");
    const [totalStaked, setTotalStaked] = useState("0");
    const [amount, setAmount] = useState("");

    const [decimals, setDecimals] = useState(18);

    const [tokenName, setTokenName] = useState("");

    const stakePoolAbi = stakePoolArtifact;
    const connect = async () => {
        if (!window.ethereum) {
            throw new Error("No se encontró un proveedor Ethereum");
        }
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        }) as string[];

        if (!accounts || !accounts[0]) return;

        await ensureSepolia();

        setAccount(accounts[0]);
    };
    const shortenAddress = (addr: string) =>
        addr ? addr.slice(0, 6) + "..." + addr.slice(-4) : "";
    const loadData = async () => {
        console.log("Cargando datos del pool de staking...");
        await ensureSepolia();
        if (!window.ethereum) {
            throw new Error("No se encontró un proveedor Ethereum");
        }
        const provider = new BrowserProvider(window.ethereum);
        const pool = new ethers.Contract(poolAddress, stakePoolAbi, provider);

        // ✅ función correcta para token staked
        const _token = await pool.stakingToken();
        setTokenAddress(_token);

        const token = new ethers.Contract(_token, erc20Abi, provider);

        const decimals = await token.decimals();
        setDecimals(decimals);

        // ✅ funciones correctas según ABI
        const userStake = await pool.balances(account);
        const pending = await pool.earned(account);
        const _total = await pool.totalSupply();

        setStakeBalance(formatUnits(userStake, decimals));
        setPendingRewards(formatUnits(pending, decimals));
        setTotalStaked(formatUnits(_total, decimals));
        const name = await token.name();
        setTokenName(name);
    };

    const handleApprove = async () => {
        if (!window.ethereum) {
            throw new Error("No se encontró un proveedor Ethereum");
        }
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const token = new ethers.Contract(tokenAddress, erc20Abi, signer);
        const value = parseUnits(amount, decimals);

        const tx = await token.approve(poolAddress, value);
        await tx.wait();
        alert("✅ Aprobado");
    };

    const handleStake = async () => {
        if (!window.ethereum) {
            throw new Error("No se encontró un proveedor Ethereum");
        }
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const pool = new ethers.Contract(poolAddress, stakePoolAbi, signer);
        const value = parseUnits(amount, decimals);

        const tx = await pool.stake(value);
        await tx.wait();
        loadData();
    };

    const handleUnstake = async () => {
        if (!window.ethereum) {
            throw new Error("No se encontró un proveedor Ethereum");
        }
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const pool = new ethers.Contract(poolAddress, stakePoolAbi, signer);

        const value = parseUnits(amount, decimals);

        // ✅ función ABI real
        const tx = await pool.withdraw(value);
        await tx.wait();
        loadData();
    };

    const handleClaim = async () => {
        if (!window.ethereum) {
            throw new Error("No se encontró un proveedor Ethereum");
        }
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const pool = new ethers.Contract(poolAddress, stakePoolAbi, signer);

        // ✅ función ABI real
        const tx = await pool.getReward();
        await tx.wait();
        loadData();
    };

    useEffect(() => {
        if (!account) return;

        const timeout = setTimeout(() => {
            loadData();
        }, 300);

        return () => clearTimeout(timeout);
    }, [account]);

    return (
        <main className="max-w-xl mx-auto p-6">
            {/* HEADER */}
            <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
                <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-80">
                        <img
                            src="/logo.png"
                            alt="Needine logo"
                            className="h-12 w-auto"
                        />

                        {/* 👇 Mensaje de construcción */}
                        <span className="text-red-600 font-semibold text-sm md:text-base flex items-center gap-1">
                            🚧 En construcción · Contratos en Red Sepolia
                        </span>
                    </Link>
                </div>
            </header>
            <h1 className="text-2xl font-bold mb-4">💎 Staking Pool</h1>
            <Link
                href="/tokenizar"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium mb-4"
            >
                <span className="text-lg mr-1">←</span> Volver
            </Link>
            {/* HEADER DETAILS */}
            {account && (
                <div className="p-4 mb-4 border rounded-xl bg-white shadow text-sm">
                    <p><b>👤 Cuenta:</b> {shortenAddress(account)}</p>
                    <p><b>🪙 Token:</b> {tokenName}</p>
                    <p><b>📌 Token Address:</b> {shortenAddress(tokenAddress)}</p>
                    <p><b>🏦 Pool Address:</b> {shortenAddress(poolAddress)}</p>
                </div>
            )}
            {!account && (
                <div className="p-4 mb-4 border rounded-xl bg-white shadow text-sm">
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                        onClick={connect}
                    >
                        Conectar
                    </button>
                </div>
            )}

            {account && (
                <div className="space-y-3">
                    <div className="p-4 bg-white border rounded-xl shadow">

                        <p className="text-sm text-gray-600">
                            Staked: <b>{stakeBalance}</b>
                        </p>
                        <p className="text-sm text-gray-600">
                            Mis Rewards: <b>{pendingRewards}</b>
                        </p>
                        <p className="text-sm text-gray-600">
                            Total Pool: <b>{totalStaked}</b>
                        </p>
                    </div>

                    <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Cantidad"
                        className="w-full p-2 border rounded"
                    />

                    <button
                        onClick={handleApprove}
                        className="w-full bg-gray-200 py-2 rounded"
                    >
                        Aprobar token
                    </button>

                    <button
                        onClick={handleStake}
                        className="w-full bg-green-600 text-white py-2 rounded"
                    >
                        Stake
                    </button>

                    <button
                        onClick={handleUnstake}
                        className="w-full bg-red-600 text-white py-2 rounded"
                    >
                        Unstake
                    </button>

                    <button
                        onClick={handleClaim}
                        className="w-full bg-purple-600 text-white py-2 rounded"
                    >
                        Claim Rewards
                    </button>
                </div>
            )}
        </main>
    );
}
