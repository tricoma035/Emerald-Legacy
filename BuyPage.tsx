import React, { useState, useEffect } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { emeralds } from '../data/mockData';
import { Emerald, FilterOptions, SortOption } from '../types';
import EmeraldCard from '../components/emerald/EmeraldCard';
import FilterSidebar from '../components/emerald/FilterSidebar';
import Button from '../components/ui/Button';

const BuyPage = () => {
  const [displayedEmeralds, setDisplayedEmeralds] = useState<Emerald[]>(emeralds);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    origin: [],
    caratMin: 0,
    caratMax: 10,
    priceMin: 0,
    priceMax: 50000,
  });
  const [sortOption, setSortOption] = useState<SortOption>('price-asc');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = [...emeralds];

    // Apply filters
    if (filterOptions.origin.length > 0) {
      filtered = filtered.filter((emerald) => filterOptions.origin.includes(emerald.origin));
    }

    filtered = filtered.filter(
      (emerald) =>
        emerald.carat >= filterOptions.caratMin &&
        emerald.carat <= filterOptions.caratMax &&
        emerald.price >= filterOptions.priceMin &&
        emerald.price <= filterOptions.priceMax
    );

    // Apply sorting
    switch (sortOption) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.listed).getTime() - new Date(a.listed).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.listed).getTime() - new Date(b.listed).getTime());
        break;
      case 'carat-asc':
        filtered.sort((a, b) => a.carat - b.carat);
        break;
      case 'carat-desc':
        filtered.sort((a, b) => b.carat - a.carat);
        break;
      default:
        break;
    }

    setDisplayedEmeralds(filtered);
  }, [filterOptions, sortOption]);

  const handleApplyFilters = () => {
    // Filters are applied in the useEffect
    // Close the mobile filter sidebar
    setShowFilters(false);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as SortOption);
  };

  return (
    <div className="bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Buy Emeralds</h1>
          <p className="text-slate-600">
            Browse our curated collection of the finest emeralds from around the world.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Mobile filter button */}
          <div className="lg:hidden mb-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center"
            >
              <Filter size={18} className="mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          {/* Sidebar - desktop always visible, mobile conditionally */}
          <div className={`${
            showFilters ? 'block' : 'hidden'
          } lg:block lg:col-span-1 space-y-4`}>
            <FilterSidebar
              filterOptions={filterOptions}
              setFilterOptions={setFilterOptions}
              onApplyFilters={handleApplyFilters}
            />
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-wrap items-center justify-between">
              <div className="flex items-center mb-2 sm:mb-0">
                <SlidersHorizontal size={20} className="text-slate-500 mr-2" />
                <span className="text-slate-700 font-medium">
                  {displayedEmeralds.length} emeralds found
                </span>
              </div>
              <div className="flex items-center">
                <label htmlFor="sort" className="text-sm text-slate-700 mr-2">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={handleSortChange}
                  className="border border-slate-300 rounded-md p-2 text-sm focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="carat-asc">Carat: Low to High</option>
                  <option value="carat-desc">Carat: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedEmeralds.map((emerald) => (
                <EmeraldCard key={emerald.id} emerald={emerald} />
              ))}
            </div>

            {displayedEmeralds.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-slate-900 mb-2">No emeralds found</h3>
                <p className="text-slate-600">
                  Try adjusting your filters to find more results.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;