import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Shield, Award, Clock, Check, MapPin, FileCheck } from 'lucide-react';
import { emeralds } from '../data/mockData';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import EmeraldDetailGallery from '../components/emerald/EmeraldDetailGallery';
import EmeraldCard from '../components/emerald/EmeraldCard';

const EmeraldDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const emerald = emeralds.find((em) => em.id === id);
  const relatedEmeralds = emeralds
    .filter((em) => em.id !== id && em.origin === emerald?.origin)
    .slice(0, 3);

  if (!emerald) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Emerald Not Found</h1>
        <p className="text-slate-600 mb-8">The emerald you are looking for does not exist or has been removed.</p>
        <Button as={Link} to="/buy">
          Browse Other Emeralds
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/buy" className="inline-flex items-center text-teal-700 hover:text-teal-800 transition-colors">
            <ChevronLeft size={16} className="mr-1" />
            Back to listings
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column: Gallery */}
            <div>
              <EmeraldDetailGallery images={emerald.images} title={emerald.title} />
            </div>

            {/* Right column: Details */}
            <div>
              <div className="mb-6">
                <div className="flex items-center mb-1">
                  <Badge variant="info" className="mr-2">{emerald.origin}</Badge>
                  <Badge>{emerald.carat} carats</Badge>
                </div>
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-2">{emerald.title}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <Award className="h-4 w-4 text-amber-600 mr-1" />
                    <span className="text-sm text-slate-700">{emerald.certification.lab} Certified</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-teal-700 mr-1" />
                    <span className="text-sm text-slate-700">Authenticity Guaranteed</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-4">
                  ${emerald.price.toLocaleString()}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-medium text-slate-900 mb-2">Description</h2>
                <p className={`text-slate-700 ${!showFullDescription && 'line-clamp-4'}`}>
                  {emerald.description}
                </p>
                {emerald.description.length > 200 && (
                  <button 
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="text-teal-700 hover:text-teal-800 text-sm font-medium mt-2"
                  >
                    {showFullDescription ? 'Show less' : 'Read more'}
                  </button>
                )}
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-medium text-slate-900 mb-2">Specifications</h2>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 p-3 rounded-md">
                    <span className="block text-sm text-slate-500">Origin</span>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-teal-700 mr-1" />
                      <span className="font-medium text-slate-900">{emerald.origin}</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-md">
                    <span className="block text-sm text-slate-500">Carat</span>
                    <span className="font-medium text-slate-900">{emerald.carat} ct</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-md">
                    <span className="block text-sm text-slate-500">Certification</span>
                    <div className="flex items-center">
                      <FileCheck className="h-4 w-4 text-teal-700 mr-1" />
                      <span className="font-medium text-slate-900">{emerald.certification.lab} #{emerald.certification.certificateNumber.substring(0, 8)}...</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-md">
                    <span className="block text-sm text-slate-500">Listed</span>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-teal-700 mr-1" />
                      <span className="font-medium text-slate-900">{new Date(emerald.listed).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-medium text-slate-900 mb-2">Seller Information</h2>
                <div className="bg-slate-50 p-4 rounded-md flex items-start">
                  <div className="bg-teal-100 text-teal-700 rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl mr-4">
                    {emerald.seller.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="font-medium text-slate-900 mr-2">{emerald.seller.name}</span>
                      {emerald.seller.verified && (
                        <Badge variant="success" className="flex items-center">
                          <Check className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-slate-600 mb-1">
                      Rating: {emerald.seller.rating}/5.0
                    </div>
                    <button className="text-teal-700 hover:text-teal-800 text-sm font-medium">
                      Contact Seller
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button fullWidth size="lg">Add to Cart</Button>
                <Button variant="outline" fullWidth>Contact Seller</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Emeralds */}
        {relatedEmeralds.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Similar Emeralds</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedEmeralds.map((emerald) => (
                <EmeraldCard key={emerald.id} emerald={emerald} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmeraldDetailPage;