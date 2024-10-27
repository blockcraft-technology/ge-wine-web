import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Window as KeplrWindow } from "@keplr-wallet/types";
import { MANTRA_CHAIN_CONFIG } from '@/lib/config';

declare global {
  interface Window extends KeplrWindow {}
}

interface WalletContextType {
  address: string | null;
  isConnecting: boolean;
  isConnected: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  error: string | null;
}

const WalletContext = createContext<WalletContextType>({
  address: null,
  isConnecting: false,
  isConnected: false,
  connect: async () => {},
  disconnect: () => {},
  error: null,
});

export const useWallet = () => useContext(WalletContext);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connect = useCallback(async () => {
    if (!window.keplr) {
      setError("Keplr wallet not found. Please install Keplr extension.");
      return;
    }

    try {
      setIsConnecting(true);
      setError(null);

      // Check if chain is already added
      const chainId = MANTRA_CHAIN_CONFIG.chainId;
      
      await window.keplr.enable(chainId);

      const offlineSigner = window.keplr.getOfflineSigner(chainId);
      const accounts = await offlineSigner.getAccounts();
      
      setAddress(accounts[0].address);
    } catch (err) {
      console.error('Error connecting wallet:', err);
      setError('Failed to connect wallet. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setAddress(null);
    setError(null);
  }, []);

  useEffect(() => {
    const checkConnection = async () => {
      if (window.keplr) {
        try {
          const chainId = MANTRA_CHAIN_CONFIG.chainId;
          const key = await window.keplr.getKey(chainId);
          setAddress(key.bech32Address);
        } catch (err) {
          // Not connected, ignore error
        }
      }
    };

    checkConnection();
  }, []);

  return (
    <WalletContext.Provider
      value={{
        address,
        isConnecting,
        isConnected: !!address,
        connect,
        disconnect,
        error,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}