import React from 'react';
import { Link } from 'react-router-dom';
import { Wine, Grape } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WineCardProps {
  id: string;
  name: string;
  vintage: number;
  region: string;
  type: string;
  price?: number;
  image: string;
  available: boolean;
  isCellarView?: boolean;
  isMarketplace?: boolean;
}

export default function WineCard({ 
  id, 
  name, 
  vintage, 
  region, 
  type, 
  price, 
  image, 
  available, 
  isCellarView = false,
  isMarketplace = false 
}: WineCardProps) {
  return (
    <Link to={`/products/${id}`}>
      <div className="group relative glass-card rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        <div className="aspect-[3/4] relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {!available && !isCellarView && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-semibold">Sold Out</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">{name}</h3>
              <p className="text-sm text-muted-foreground">{vintage}</p>
            </div>
            <div className={cn(
              "px-3 py-1 rounded-full text-xs font-medium",
              type === 'Red' && "bg-red-500/20 text-red-400",
              type === 'White' && "bg-yellow-500/20 text-yellow-400",
              type === 'Rosé' && "bg-pink-500/20 text-pink-400",
              type === 'Sparkling' && "bg-blue-500/20 text-blue-400"
            )}>
              {type}
            </div>
          </div>
          <div className="mt-3 flex items-center text-sm text-muted-foreground">
            <Grape className="h-4 w-4 mr-1" />
            <span>{region}</span>
          </div>
          {!isCellarView && (
            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold text-foreground">${price?.toLocaleString()} USDC</span>
              {available && (
                <button className="gradient-btn text-white px-4 py-2 rounded-full text-sm">
                  {isMarketplace ? 'Buy Now' : 'Mint NFT'}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}