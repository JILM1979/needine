// lib/chain.ts
export const SEPOLIA = {
  chainIdHex: '0xaa36a7',
  chainIdDec: 11155111,
  name: 'Sepolia',
};

export const FACTORY_ADDRESS = '0xEaa769FAF66C2F09e9C0442F49Ef436C21A30F30';


// Helper para asegurar que el usuario esté en Sepolia
export async function ensureSepolia() {
  const ethereum = (window as any).ethereum;
  if (!ethereum) throw new Error("MetaMask no detectado");

  const currentChainId = await ethereum.request({ method: "eth_chainId" });
  if (currentChainId !== SEPOLIA.chainIdHex) {
    try {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: SEPOLIA.chainIdHex }],
      });
    } catch (switchError: any) {
      // Si la red no está añadida a MetaMask
      if (switchError.code === 4902) {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: SEPOLIA.chainIdHex,
              chainName: "Sepolia Test Network",
              rpcUrls: ["https://rpc.sepolia.org"],
              nativeCurrency: {
                name: "SepoliaETH",
                symbol: "ETH",
                decimals: 18,
              },
              blockExplorerUrls: ["https://sepolia.etherscan.io"],
            },
          ],
        });
      } else {
        throw switchError;
      }
    }
  }
}

