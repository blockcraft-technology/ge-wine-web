import React from 'react';
import { Link } from 'react-router-dom';
import { Wine, Menu, X, Loader2 } from 'lucide-react';
import { useWallet } from '@/contexts/WalletContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { address, isConnecting, isConnected, connect, disconnect, error } = useWallet();

  const handleConnectClick = async () => {
    if (isConnected) {
      disconnect();
    } else {
      await connect();
    }
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Wine className="h-8 w-8 gradient-text" />
              <span className="font-serif text-2xl text-foreground">GE.WINE</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">Products</Link>
            <Link to="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors">Marketplace</Link>
            {isConnected && (
              <Link to="/my-cellar" className="text-muted-foreground hover:text-foreground transition-colors">My Cellar</Link>
            )}
            <button
              onClick={handleConnectClick}
              disabled={isConnecting}
              className="gradient-btn text-white px-6 py-2 rounded-full flex items-center space-x-2"
            >
              {isConnecting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Connecting...</span>
                </>
              ) : isConnected ? (
                <span>{formatAddress(address!)}</span>
              ) : (
                <span>Connect Wallet</span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/products" 
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link 
              to="/marketplace" 
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Marketplace
            </Link>
            {isConnected && (
              <Link 
                to="/my-cellar" 
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                My Cellar
              </Link>
            )}
            <button
              onClick={handleConnectClick}
              disabled={isConnecting}
              className="w-full text-left px-3 py-2 gradient-btn text-white rounded-full mt-2 flex items-center space-x-2"
            >
              {isConnecting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Connecting...</span>
                </>
              ) : isConnected ? (
                <span>{formatAddress(address!)}</span>
              ) : (
                <span>Connect Wallet</span>
              )}
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-500/10 text-red-400 px-4 py-2 text-sm text-center">
          {error}
        </div>
      )}
    </nav>
  );
}