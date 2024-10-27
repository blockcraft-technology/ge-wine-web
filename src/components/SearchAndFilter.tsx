import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchAndFilterProps {
  search: string;
  setSearch: (value: string) => void;
  selectedType: string;
  setSelectedType: (value: string) => void;
  selectedRegion: string;
  setSelectedRegion: (value: string) => void;
}

export default function SearchAndFilter({
  search,
  setSearch,
  selectedType,
  setSelectedType,
  selectedRegion,
  setSelectedRegion
}: SearchAndFilterProps) {
  const wineTypes = ['All', 'Red', 'White', 'Rosé', 'Sparkling'];
  const regions = ['All', 'Bordeaux', 'Burgundy', 'Tuscany', 'Rioja', 'Napa Valley'];

  return (
    <div className="glass-card rounded-xl p-6 space-y-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <input
          type="text"
          placeholder="Search wines..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-background/50 border border-border rounded-full focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
        />
      </div>
      
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-foreground mb-2">Wine Type</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full bg-background/50 border border-border rounded-full p-3 focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground"
          >
            {wineTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-foreground mb-2">Region</label>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full bg-background/50 border border-border rounded-full p-3 focus:ring-2 focus:ring-primary/50 focus:border-primary text-foreground"
          >
            {regions.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}