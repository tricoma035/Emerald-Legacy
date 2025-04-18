import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Award, Star, MapPin, ChevronRight, Globe, Users, BadgeCheck } from 'lucide-react';
import Button from '../components/ui/Button';

const AboutPage = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              About EmeraldTrader
            </h1>
            <p className="text-xl text-teal-100 mb-8">
              The premier marketplace for fine emeralds and expert polishing services.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-600">
              At EmeraldTrader, we're dedicated to creating a trusted marketplace that connects emerald enthusiasts, collectors, and investors with authenticated, high-quality emeralds from around the world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="inline-flex items-center justify-center p-3 bg-teal-100 text-teal-700 rounded-full mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Trust & Transparency</h3>
              <p className="text-slate-600">
                We verify the authenticity of every emerald listed on our platform through rigorous certification processes and expert verification.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="inline-flex items-center justify-center p-3 bg-teal-100 text-teal-700 rounded-full mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Global Access</h3>
              <p className="text-slate-600">
                We connect buyers and sellers from across the globe, providing access to emeralds from every major mining region.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="inline-flex items-center justify-center p-3 bg-teal-100 text-teal-700 rounded-full mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Craftsmanship</h3>
              <p className="text-slate-600">
                Our expert gemologists and artisans apply time-honored polishing techniques to enhance the natural beauty of each emerald.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Founded in 2020 by a team of gemologists and technology experts, EmeraldTrader was born from a passion for emeralds and a vision to modernize the traditional gemstone market.
                </p>
                <p>
                  We noticed a gap in the market for a secure, transparent platform specifically focused on emeralds—these magnificent green gems that have captivated humanity for centuries.
                </p>
                <p>
                  Starting with a small network of certified sellers in Colombia, we've expanded to include trusted partners from all major emerald-producing regions, including Zambia, Brazil, and Ethiopia.
                </p>
                <p>
                  Today, EmeraldTrader serves thousands of customers worldwide, from individual collectors to jewelry designers and investors, all united by their appreciation for the unique beauty of emeralds.
                </p>
              </div>
              <div className="mt-8">
                <Button onClick={() => navigate('/buy')}>
                  Explore Our Collection
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/1427121/pexels-photo-1427121.jpeg" 
                alt="Emerald mining" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Our Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/9048847/pexels-photo-9048847.jpeg" 
                alt="Authentication process" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-slate-900 mb-3">Authentication & Certification</h3>
                <p className="text-slate-600 mb-4">
                  Our team of GIA-certified gemologists carefully examines each emerald to verify its authenticity, origin, and quality characteristics. We only accept emeralds with proper documentation from recognized laboratories.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-teal-700 flex-shrink-0 mt-0.5" />
                    <span className="ml-2 text-slate-600">Advanced spectroscopy analysis</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-teal-700 flex-shrink-0 mt-0.5" />
                    <span className="ml-2 text-slate-600">Microscopic examination for natural inclusions</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-teal-700 flex-shrink-0 mt-0.5" />
                    <span className="ml-2 text-slate-600">Origin determination using trace element analysis</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/5370705/pexels-photo-5370705.jpeg" 
                alt="Polishing process" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-slate-900 mb-3">Emerald Polishing</h3>
                <p className="text-slate-600 mb-4">
                  Our master polishers have decades of experience working specifically with emeralds. Using traditional techniques combined with modern technology, we enhance each stone's natural beauty while preserving its character and value.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-teal-700 flex-shrink-0 mt-0.5" />
                    <span className="ml-2 text-slate-600">Specialized emerald-safe polishing compounds</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-teal-700 flex-shrink-0 mt-0.5" />
                    <span className="ml-2 text-slate-600">Precision faceting to maximize brilliance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-teal-700 flex-shrink-0 mt-0.5" />
                    <span className="ml-2 text-slate-600">Custom approaches based on each stone's characteristics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-600">
              Our diverse team combines expertise in gemology, technology, and customer service to deliver an exceptional experience.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3851790/pexels-photo-3851790.jpeg" 
                  alt="Elena Rodriguez" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-medium text-slate-900">Elena Rodriguez</h3>
                <p className="text-teal-700 mb-3">Founder & Head Gemologist</p>
                <p className="text-sm text-slate-600 mb-4">
                  GIA-certified gemologist with 15+ years of experience specializing in Colombian emeralds.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-slate-400 hover:text-teal-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0
                      01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0
                      01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-teal-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-teal-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-medium text-slate-900">Michael Chen</h3>
                <p className="text-teal-700 mb-3">CTO & Co-Founder</p>
                <p className="text-sm text-slate-600 mb-4">
                  Technology expert with a background in secure marketplaces and blockchain verification systems.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-slate-400 hover:text-teal-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-teal-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-teal-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg" 
                  alt="Sarah Ndlovu" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-medium text-slate-900">Sarah Ndlovu</h3>
                <p className="text-teal-700 mb-3">Lead Polishing Specialist</p>
                <p className="text-sm text-slate-600 mb-4">
                  Third-generation gem polisher trained in both traditional and modern techniques in Zambia.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-slate-400 hover:text-teal-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-teal-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-teal-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                  alt="David Williams" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-medium text-slate-900">David Williams</h3>
                <p className="text-teal-700 mb-3">Quality Assurance Director</p>
                <p className="text-sm text-slate-600 mb-4">
                  Former curator at the Natural History Museum with expertise in emerald authentication.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-slate-400 hover:text-teal-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-teal-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-teal-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 text-center">Our Global Presence</h2>
          <p className="max-w-3xl mx-auto text-lg text-center text-slate-600 mb-12">
            With offices in key emerald markets and partners in every major mining region, we provide truly global service.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-700 mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">New York, USA</h3>
              <p className="text-slate-600">Headquarters & Authentication Center</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-700 mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Bogotá, Colombia</h3>
              <p className="text-slate-600">Sourcing Office & Gemology Lab</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 text-teal-700 mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Lusaka, Zambia</h3>
              <p className="text-slate-600">Polishing Studio & Training Center</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">What Our Customers Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="ml-2 text-sm text-slate-600">5.0</p>
              </div>
              <p className="text-slate-600 mb-4">
                "I've been collecting emeralds for over a decade, and EmeraldTrader has the most reliable authentication process I've encountered. The detailed certification and origin information gives me complete confidence in my purchases."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center font-medium text-teal-700">
                  RS
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-900">Robert S.</p>
                  <p className="text-xs text-slate-500">Jewelry Designer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="ml-2 text-sm text-slate-600">5.0</p>
              </div>
              <p className="text-slate-600 mb-4">
                "Their polishing service transformed my family heirloom emerald. It had lost its luster over generations, but their artisans restored it beautifully while preserving its character. The before and after documentation was impressive."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center font-medium text-teal-700">
                  JK
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-900">Jennifer K.</p>
                  <p className="text-xs text-slate-500">Private Collector</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="ml-2 text-sm text-slate-600">4.9</p>
              </div>
              <p className="text-slate-600 mb-4">
                "As someone who sells emeralds, I appreciate how EmeraldTrader has streamlined the verification process. Their platform has connected me with serious buyers worldwide who value quality and authenticity as much as I do."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center font-medium text-teal-700">
                  AL
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-900">Ahmed L.</p>
                  <p className="text-xs text-slate-500">Gem Dealer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Join Our Community of Emerald Enthusiasts</h2>
          <p className="max-w-2xl mx-auto text-teal-100 mb-8">
            Whether you're buying, selling, or looking to enhance your emeralds, we invite you to experience our platform and services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" onClick={() => navigate('/buy')}>
              Explore Emeralds
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="bg-transparent border-white text-white hover:bg-teal-600"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;