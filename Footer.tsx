import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-serif font-bold text-teal-400">Emerald</span>
              <span className="text-2xl font-serif font-bold text-amber-400">Trader</span>
            </Link>
            <p className="text-slate-300 mb-4">
              Your trusted platform for buying, selling, and polishing the finest emeralds from around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium border-b border-slate-700 pb-2 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-300 hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/buy" className="text-slate-300 hover:text-teal-400 transition-colors">Buy Emeralds</Link></li>
              <li><Link to="/sell" className="text-slate-300 hover:text-teal-400 transition-colors">Sell Emeralds</Link></li>
              <li><Link to="/polishing" className="text-slate-300 hover:text-teal-400 transition-colors">Polishing Services</Link></li>
              <li><Link to="/dashboard" className="text-slate-300 hover:text-teal-400 transition-colors">My Dashboard</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-teal-400 transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium border-b border-slate-700 pb-2 mb-4">Useful Information</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-slate-300 hover:text-teal-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-slate-300 hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/shipping" className="text-slate-300 hover:text-teal-400 transition-colors">Shipping Information</Link></li>
              <li><Link to="/faq" className="text-slate-300 hover:text-teal-400 transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="text-slate-300 hover:text-teal-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium border-b border-slate-700 pb-2 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="mr-2 text-teal-400" size={18} />
                <span className="text-slate-300">123 Gem Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-teal-400" size={18} />
                <a href="tel:+12125551234" className="text-slate-300 hover:text-teal-400 transition-colors">+1 (212) 555-1234</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-teal-400" size={18} />
                <a href="mailto:info@emeraldtrader.com" className="text-slate-300 hover:text-teal-400 transition-colors">info@emeraldtrader.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} EmeraldTrader. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;