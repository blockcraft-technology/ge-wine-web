import React, { useState } from 'react';
import WineCard from '@/components/WineCard';
import SearchAndFilter from '@/components/SearchAndFilter';

// Mock data - replace with API call
const wines = [
  {
    id: '1',
    name: 'Château Margaux 2015',
    vintage: 2015,
    region: 'Bordeaux',
    type: 'Red',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1586370434639-0fe43b2d32e6?auto=format&fit=crop&q=80',
    available: true,
  },
  {
    id: '2',
    name: 'Dom Pérignon 2010',
    vintage: 2010,
    region: 'Champagne',
    type: 'Sparkling',
    price: 800,
    image: 'https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?auto=format&fit=crop&q=80',
    available: true,
  },
  {
    id: '3',
    name: 'Sassicaia 2018',
    vintage: 2018,
    region: 'Tuscany',
    type: 'Red',
    price: 900,
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80',
    available: false,
  },
];

export default function Products() {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const filteredWines = wines.filter((wine) => {
    const matchesSearch = wine.name.toLowerCase().includes(search.toLowerCase());
    const matchesType = selectedType === 'All' || wine.type === selectedType;
    const matchesRegion = selectedRegion === 'All' || wine.region === selectedRegion;
    return matchesSearch && matchesType && matchesRegion;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="font-serif text-4xl mb-4">Premium Wine Collection</h1>
        <p className="text-gray-600">Discover and mint NFTs of the world's finest wines.</p>
      </div>

      <div className="mb-8">
        <SearchAndFilter
          search={search}
          setSearch={setSearch}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWines.map((wine) => (
          <WineCard key={wine.id} {...wine} />
        ))}
      </div>

      {filteredWines.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No wines found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}