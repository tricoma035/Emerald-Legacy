import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Upload, CheckCircle } from 'lucide-react';
import { polishTypes } from '../data/mockData';
import Button from '../components/ui/Button';
import Card, { CardContent, CardHeader, CardFooter } from '../components/ui/Card';

const PolishingPage = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedType, setSelectedType] = useState<string>('');
  const [isCustomUpload, setIsCustomUpload] = useState<boolean>(true);
  const [hasUploaded, setHasUploaded] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  
  const handleSelectType = (typeId: string) => {
    setSelectedType(typeId);
  };
  
  const handleUpload = () => {
    // In a real app, this would handle file uploads
    setHasUploaded(true);
  };
  
  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleSubmit = () => {
    // In a real app, this would submit the form data to a server
    console.log({
      polishType: selectedType,
      isCustomUpload,
      selectedDate,
      notes,
    });
    
    // Move to confirmation step
    setStep(4);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Emerald Polishing Services</h1>
          <p className="text-slate-600">
            Professional polishing to enhance the beauty and value of your emeralds.
          </p>
        </div>
        
        {/* Progress steps */}
        <div className="mb-8">
          <div className="flex items-center">
            {[1, 2, 3, 4].map((s) => (
              <React.Fragment key={s}>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  s <= step ? 'bg-teal-700 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {s < step ? <CheckCircle size={16} /> : s}
                </div>
                {s < 4 && (
                  <div className={`flex-1 h-1 ${
                    s < step ? 'bg-teal-700' : 'bg-slate-200'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-slate-600">Select Service</span>
            <span className="text-xs text-slate-600">Upload Emerald</span>
            <span className="text-xs text-slate-600">Schedule</span>
            <span className="text-xs text-slate-600">Confirmation</span>
          </div>
        </div>
        
        {/* Step 1: Select Service */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-medium text-slate-900 mb-6">Select a Polishing Service</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {polishTypes.map((type) => (
                <Card 
                  key={type.id} 
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedType === type.id 
                      ? 'ring-2 ring-teal-500 transform scale-[1.02]' 
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => handleSelectType(type.id)}
                >
                  <CardHeader className={`${
                    selectedType === type.id ? 'bg-teal-50' : ''
                  }`}>
                    <h3 className="text-lg font-medium text-slate-900">{type.name}</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-slate-900 mb-2">
                      ${type.price}
                    </div>
                    <p className="text-slate-600 mb-4">{type.description}</p>
                    <div className="flex items-center text-sm text-slate-500">
                      <Clock size={16} className="mr-1" />
                      <span>Estimated time: {type.duration}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedType === type.id
                        ? 'border-teal-700 bg-teal-700'
                        : 'border-slate-300'
                    }`}>
                      {selectedType === type.id && (
                        <CheckCircle size={14} className="text-white" />
                      )}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-end">
              <Button 
                onClick={handleNext} 
                disabled={!selectedType}
                className="flex items-center"
              >
                Continue <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        )}
        
        {/* Step 2: Upload Emerald */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-medium text-slate-900 mb-6">Emerald Details</h2>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className={`flex-1 p-4 border-2 rounded-lg cursor-pointer ${
                    isCustomUpload 
                      ? 'border-teal-700 bg-teal-50' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`} onClick={() => setIsCustomUpload(true)}>
                    <div className="flex items-center mb-2">
                      <div className={`w-5 h-5 rounded-full mr-2 border-2 ${
                        isCustomUpload 
                          ? 'border-teal-700 bg-teal-700' 
                          : 'border-slate-300'
                      }`}>
                        {isCustomUpload && (
                          <CheckCircle size={16} className="text-white" />
                        )}
                      </div>
                      <span className="font-medium">Upload Your Emerald</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Upload photos of an emerald you already own for polishing services.
                    </p>
                  </div>
                  
                  <div className={`flex-1 p-4 border-2 rounded-lg cursor-pointer ${
                    !isCustomUpload 
                      ? 'border-teal-700 bg-teal-50' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`} onClick={() => setIsCustomUpload(false)}>
                    <div className="flex items-center mb-2">
                      <div className={`w-5 h-5 rounded-full mr-2 border-2 ${
                        !isCustomUpload 
                          ? 'border-teal-700 bg-teal-700' 
                          : 'border-slate-300'
                      }`}>
                        {!isCustomUpload && (
                          <CheckCircle size={16} className="text-white" />
                        )}
                      </div>
                      <span className="font-medium">Select from My Purchases</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Choose from emeralds you've previously purchased on our platform.
                    </p>
                  </div>
                </div>
                
                {isCustomUpload ? (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Upload Emerald Photos
                    </label>
                    
                    {!hasUploaded ? (
                      <button
                        type="button"
                        onClick={handleUpload}
                        className="w-full border-2 border-dashed border-slate-300 rounded-lg p-8 flex flex-col items-center justify-center hover:border-teal-500 hover:bg-teal-50 transition-colors"
                      >
                        <Upload className="h-10 w-10 text-slate-400 mb-3" />
                        <span className="text-sm font-medium text-slate-700">Click to upload</span>
                        <span className="text-xs text-slate-500 mt-1">
                          Upload clear images from multiple angles (max 5 images)
                        </span>
                      </button>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between bg-slate-50 p-3 rounded-md border border-slate-200">
                          <div className="flex items-center">
                            <div className="bg-teal-100 p-2 rounded">
                              <CheckCircle className="h-5 w-5 text-teal-700" />
                            </div>
                            <span className="ml-3 text-sm font-medium text-slate-700">Emerald_front.jpg</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between bg-slate-50 p-3 rounded-md border border-slate-200">
                          <div className="flex items-center">
                            <div className="bg-teal-100 p-2 rounded">
                              <CheckCircle className="h-5 w-5 text-teal-700" />
                            </div>
                            <span className="ml-3 text-sm font-medium text-slate-700">Emerald_side.jpg</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="text-teal-700 hover:text-teal-800 text-sm font-medium"
                        >
                          + Add more photos
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Select an Emerald from Your Purchases
                    </label>
                    
                    <div className="space-y-3">
                      <div className="p-4 border border-slate-200 rounded-lg hover:border-teal-500 cursor-pointer">
                        <div className="flex">
                          <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
                            <img 
                              src="https://images.pexels.com/photos/10970985/pexels-photo-10970985.jpeg" 
                              alt="Colombian Emerald" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-900">Colombian Emerald - Vivid Green</h4>
                            <p className="text-sm text-slate-600">Purchased on April 15, 2023</p>
                            <p className="text-sm text-slate-600">2.34 carats</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-slate-200 rounded-lg hover:border-teal-500 cursor-pointer">
                        <div className="flex">
                          <div className="w-16 h-16 rounded-md overflow-hidden mr-4">
                            <img 
                              src="https://images.pexels.com/photos/4970335/pexels-photo-4970335.jpeg" 
                              alt="Zambian Emerald" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-slate-900">Zambian Emerald - Oval Cut</h4>
                            <p className="text-sm text-slate-600">Purchased on June 10, 2023</p>
                            <p className="text-sm text-slate-600">1.85 carats</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button 
                onClick={handleNext} 
                disabled={isCustomUpload && !hasUploaded}
                className="flex items-center"
              >
                Continue <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        )}
        
        {/* Step 3: Schedule */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-medium text-slate-900 mb-6">Schedule & Additional Information</h2>
            
            <Card className="mb-8">
              <CardContent className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Select Preferred Drop-off Date
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="relative">
                        <input
                          type="date"
                          className="w-full rounded-md border border-slate-300 px-4 py-2 focus:ring-teal-500 focus:border-teal-500"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                        />
                        <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-slate-400 pointer-events-none" />
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Select a date at least 3 days from today
                      </p>
                    </div>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-md p-3">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <Clock className="h-5 w-5 text-amber-600" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-amber-800">Service Timeline</h3>
                          <div className="mt-2 text-sm text-amber-700">
                            <p>Standard Polish: 3-5 days</p>
                            <p>Premium Polish: 5-7 days</p>
                            <p>Custom Polish: 7-10 days</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-slate-700 mb-2">
                    Special Instructions or Requests (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    className="w-full rounded-md border border-slate-300 px-4 py-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Provide any specific requirements or notes for our expert polishers..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-slate-900 mb-3">Service Summary</h3>
                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Service Type:</span>
                        <span className="font-medium text-slate-900">
                          {polishTypes.find(t => t.id === selectedType)?.name || 'None selected'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Emerald Source:</span>
                        <span className="font-medium text-slate-900">
                          {isCustomUpload ? 'Custom Upload' : 'From Purchases'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Estimated Completion:</span>
                        <span className="font-medium text-slate-900">
                          {selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          }) : 'Not scheduled'}
                        </span>
                      </div>
                      <div className="pt-2 mt-2 border-t border-slate-200 flex justify-between">
                        <span className="font-medium text-slate-900">Total:</span>
                        <span className="font-bold text-slate-900">
                          ${polishTypes.find(t => t.id === selectedType)?.price || 0}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button 
                onClick={handleSubmit} 
                disabled={!selectedDate || !selectedType}
              >
                Submit Request
              </Button>
            </div>
          </div>
        )}
        
        {/* Step 4: Confirmation */}
        {step === 4 && (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-100 rounded-full mb-6">
                <CheckCircle className="h-10 w-10 text-teal-700" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Polishing Request Submitted!</h2>
              <p className="text-slate-600 mb-6 max-w-lg mx-auto">
                Your emerald polishing request has been successfully submitted. Our expert team will be in touch with you shortly to confirm the details and provide shipping instructions.
              </p>
              <div className="bg-slate-50 p-6 rounded-lg max-w-sm mx-auto mb-6">
                <h3 className="font-medium text-slate-900 mb-3 text-left">Request Summary</h3>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Service Type:</span>
                    <span className="font-medium text-slate-900">
                      {polishTypes.find(t => t.id === selectedType)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Request ID:</span>
                    <span className="font-medium text-slate-900">POL-2025-{Math.floor(1000 + Math.random() * 9000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Scheduled Date:</span>
                    <span className="font-medium text-slate-900">
                      {new Date(selectedDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 mt-2 border-t border-slate-200">
                    <span className="font-medium text-slate-900">Total:</span>
                    <span className="font-bold text-slate-900">
                      ${polishTypes.find(t => t.id === selectedType)?.price}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-x-4">
                <Button as="a" href="/dashboard/polishing">
                  View Request Status
                </Button>
                <Button variant="outline" as="a" href="/polishing">
                  New Polishing Request
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PolishingPage;