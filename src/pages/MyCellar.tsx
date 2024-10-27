import React from 'react';
import WineCard from '@/components/WineCard';

// Mock data - replace with API call
const myWines = [
  {
    id: '1',
    name: 'Château Margaux 2015',
    vintage: 2015,
    region: 'Bordeaux',
    type: 'Red',
    image: 'https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?auto=format&fit=crop&q=80',
    available: true,
  },
];

export default function MyCellar() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="font-serif text-4xl mb-4">My Wine Cellar</h1>
        <p className="text-gray-600">Manage your wine NFT collection and marketplace listings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {myWines.map((wine) => (
          <WineCard key={wine.id} {...wine} isCellarView={true} />
        ))}
      </div>

      {myWines.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">You don't have any wine NFTs yet.</p>
          <button className="mt-4 gradient-btn text-white px-6 py-2 rounded-full">
            Browse Collection
          </button>
        </div>
      )}
    </div>
  );
}