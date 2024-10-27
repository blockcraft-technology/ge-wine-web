import React from 'react';
import { Link } from 'react-router-dom';
import { Wine, Shield, Coins } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80"
            alt="Wine cellar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="font-serif text-6xl mb-6">Transform Your Wine Collection into Digital Assets</h1>
          <p className="text-xl mb-8 max-w-2xl">Discover the future of wine collecting with GE.WINE. Mint, trade, and showcase your premium wines as authenticated NFTs on the Mantra Chain.</p>
          <Link
            to="/products"
            className="gradient-btn inline-block text-white px-8 py-3 rounded-full text-lg font-medium"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-serif text-center mb-16">Why Choose GE.WINE?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="glass-card p-8 rounded-xl text-center space-y-4">
            <Wine className="h-12 w-12 mx-auto text-primary" />
            <h3 className="text-2xl font-serif">Premium Selection</h3>
            <p className="text-muted-foreground">Curated collection of the world's finest wines, each verified for authenticity</p>
          </div>
          <div className="glass-card p-8 rounded-xl text-center space-y-4">
            <Shield className="h-12 w-12 mx-auto text-primary" />
            <h3 className="text-2xl font-serif">Secure Ownership</h3>
            <p className="text-muted-foreground">Blockchain-backed certificates ensuring transparent and verifiable ownership</p>
          </div>
          <div className="glass-card p-8 rounded-xl text-center space-y-4">
            <Coins className="h-12 w-12 mx-auto text-primary" />
            <h3 className="text-2xl font-serif">Trading Platform</h3>
            <p className="text-muted-foreground">Seamless marketplace for buying, selling, and trading wine NFTs</p>
          </div>
        </div>
      </section>

      <section className="glass-card mx-4 sm:mx-6 lg:mx-8 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6">Join the Digital Wine Revolution</h2>
              <p className="text-muted-foreground mb-8">Experience the perfect blend of traditional wine collecting and blockchain technology. Start your digital wine journey today.</p>
              <Link
                to="/marketplace"
                className="gradient-btn inline-block text-white px-6 py-3 rounded-full"
              >
                Enter Marketplace
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80"
                alt="Wine collection"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}