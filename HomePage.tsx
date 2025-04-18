import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Shield, Gem, Award, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import EmeraldCard from '../components/emerald/EmeraldCard';
import { emeralds } from '../data/mockData';

const HomePage = () => {
  const navigate = useNavigate();
  const featuredEmeralds = emeralds.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/327167/pexels-photo-327167.jpeg"
            alt="Emerald background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Discover Exceptional <span className="text-teal-400">Emeralds</span> from Around the World
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              Buy, sell, and polish the finest emeralds on our secure marketplace. 
              Connect with trusted sellers and gem experts to find your perfect stone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate('/buy')}
                className="animate-pulse"
              >
                Browse Emeralds
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => navigate('/sell')}
                className="bg-slate-800/50 border-white text-white hover:bg-slate-800"
              >
                Sell Your Emeralds
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Why Choose EmeraldTrader</h2>
            <p className="max-w-2xl mx-auto text-slate-600">
              We provide a secure marketplace with expert verification and seamless transactions for emerald enthusiasts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex items-center justify-center p-3 bg-teal-100 text-teal-700 rounded-full mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Verified Authenticity</h3>
              <p className="text-slate-600">
                All emeralds are verified by gemological experts and come with certification for guaranteed authenticity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex items-center justify-center p-3 bg-amber-100 text-amber-700 rounded-full mb-4">
                <Gem size={24} />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Premium Quality</h3>
              <p className="text-slate-600">
                Curated selection of the finest emeralds from Colombia, Zambia, Brazil and other renowned sources.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="inline-flex items-center justify-center p-3 bg-teal-100 text-teal-700 rounded-full mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Expert Polishing</h3>
              <p className="text-slate-600">
                Professional emerald polishing services to enhance the beauty and value of your precious gems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Emeralds */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Featured Emeralds</h2>
            <Button 
              variant="text" 
              onClick={() => navigate('/buy')}
              className="flex items-center"
            >
              View All <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredEmeralds.map((emerald) => (
              <EmeraldCard key={emerald.id} emerald={emerald} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:max-w-xl">
              <h2 className="text-3xl font-serif font-bold mb-4">Ready to Transform Your Emerald?</h2>
              <p className="text-teal-100 mb-6">
                Our expert artisans use advanced techniques to polish and enhance your emeralds, bringing out their natural beauty and maximizing their value.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={() => navigate('/polishing')}
              >
                Explore Polishing Services
              </Button>
            </div>
            <div className="hidden lg:block lg:ml-8">
              <img 
                src="https://images.pexels.com/photos/11847296/pexels-photo-11847296.jpeg"
                alt="Emerald polishing" 
                className="w-full max-w-md h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Find Your Perfect Emerald</h2>
            <p className="text-slate-600 mb-8">
              Search our extensive collection by origin, carat, price, and more to discover your ideal emerald.
            </p>
            <div className="flex items-center relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search emeralds..."
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <Search className="absolute left-4 text-slate-400" size={20} />
              <Button className="absolute right-2">Search</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;