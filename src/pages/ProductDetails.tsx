import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Wine, MapPin, History, Shield } from 'lucide-react';

// Mock data - replace with API call
const wine = {
  id: '1',
  name: 'Château Margaux 2015',
  vintage: 2015,
  region: 'Bordeaux',
  type: 'Red',
  price: 1500,
  image: 'https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?auto=format&fit=crop&q=80',
  available: true,
  description: 'A legendary vintage from one of Bordeauxs most prestigious estates. This wine showcases exceptional depth, complexity, and aging potential.',
  producer: 'Château Margaux',
  alcohol: 13.5,
  rating: 98,
  grapes: 'Cabernet Sauvignon, Merlot, Petit Verdot, Cabernet Franc',
  remainingSupply: 5,
  totalSupply: 10
};

export default function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Image */}
        <div className="space-y-6">
          <div className="aspect-square rounded-xl overflow-hidden glass-card p-2">
            <img
              src={wine.image}
              alt={wine.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden glass-card p-1">
              <img
                src={wine.image}
                alt={wine.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden glass-card p-1">
              <img
                src="https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&q=80"
                alt="Vineyard"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden glass-card p-1">
              <img
                src="https://images.unsplash.com/photo-1506377585622-bedcbb5a8080?auto=format&fit=crop&q=80"
                alt="Cellar"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="glass-card rounded-xl p-8 space-y-8">
          <div>
            <h1 className="font-serif text-4xl mb-2">{wine.name}</h1>
            <div className="flex items-center space-x-4">
              <span className="px-4 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
                {wine.type}
              </span>
              <span className="text-muted-foreground">Vintage {wine.vintage}</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">{wine.description}</p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-foreground">{wine.region}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Wine className="h-5 w-5 text-primary" />
                <span className="text-foreground">{wine.producer}</span>
              </div>
              <div className="flex items-center space-x-3">
                <History className="h-5 w-5 text-primary" />
                <span className="text-foreground">{wine.alcohol}% ABV</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-foreground">Rating: {wine.rating}/100</span>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-3xl font-bold">${wine.price} USDC</p>
                <p className="text-sm text-muted-foreground">
                  {wine.remainingSupply} of {wine.totalSupply} available
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-border rounded-full w-10 h-10 flex items-center justify-center hover:border-primary transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(wine.remainingSupply, quantity + 1))}
                  className="p-2 border border-border rounded-full w-10 h-10 flex items-center justify-center hover:border-primary transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="w-full gradient-btn text-white py-4 rounded-full font-medium text-lg"
              disabled={!wine.available}
            >
              {wine.available ? 'Mint NFT' : 'Sold Out'}
            </button>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="font-semibold mb-4">About this Wine</h3>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Grape Varieties:</strong> {wine.grapes}</p>
              <p><strong className="text-foreground">NFT Benefits:</strong> Ownership verification, provenance tracking, and exclusive access to wine tastings</p>
              <p><strong className="text-foreground">Storage:</strong> Professionally stored in temperature-controlled facilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}