import React, { useState } from 'react';
import { Upload, X, Plus, Info } from 'lucide-react';
import { origins } from '../data/mockData';
import Button from '../components/ui/Button';
import Card, { CardContent, CardHeader } from '../components/ui/Card';

const SellPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    carat: '',
    origin: '',
    certification: {
      lab: '',
      certificateNumber: '',
      date: '',
    },
  });
  
  const [images, setImages] = useState<string[]>([]);
  const [documents, setDocuments] = useState<string[]>([]);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    
    // Clear error when field is updated
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleAddImage = () => {
    if (images.length < 5) {
      // In a real app, this would handle file uploads
      // For demo, we'll use a placeholder
      setImages([...images, 'https://images.pexels.com/photos/11531387/pexels-photo-11531387.jpeg']);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleAddDocument = () => {
    if (documents.length < 3) {
      // In a real app, this would handle file uploads
      // For demo, we'll use a placeholder
      setDocuments([...documents, 'Certificate_' + (documents.length + 1) + '.pdf']);
    }
  };

  const handleRemoveDocument = (index: number) => {
    const updatedDocuments = [...documents];
    updatedDocuments.splice(index, 1);
    setDocuments(updatedDocuments);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.title.trim()) errors.title = 'Title is required';
    if (!formData.description.trim()) errors.description = 'Description is required';
    if (!formData.price) errors.price = 'Price is required';
    if (!formData.carat) errors.carat = 'Carat is required';
    if (!formData.origin) errors.origin = 'Origin is required';
    if (!formData.certification.lab) errors['certification.lab'] = 'Lab is required';
    if (!formData.certification.certificateNumber) errors['certification.certificateNumber'] = 'Certificate number is required';
    if (!formData.certification.date) errors['certification.date'] = 'Certification date is required';
    if (images.length === 0) errors.images = 'At least one image is required';
    
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      window.scrollTo(0, 0);
      return;
    }
    
    // In a real app, this would submit the form data to a server
    console.log('Form submitted:', formData, images, documents);
    setShowSuccess(true);
    
    // Reset form after submission
    setFormData({
      title: '',
      description: '',
      price: '',
      carat: '',
      origin: '',
      certification: {
        lab: '',
        certificateNumber: '',
        date: '',
      },
    });
    setImages([]);
    setDocuments([]);
    setFormErrors({});
    
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-slate-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-2">Sell Your Emerald</h1>
          <p className="text-slate-600">
            Complete the form below to list your emerald for sale on our marketplace.
          </p>
        </div>

        {showSuccess && (
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-8 flex items-start">
            <div className="flex-shrink-0 mr-3">
              <svg className="h-5 w-5 text-emerald-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-emerald-800 font-medium">Listing Submitted Successfully!</h3>
              <p className="text-emerald-600 text-sm mt-1">
                Your emerald listing has been submitted for review. We'll notify you once it's published.
              </p>
              <div className="mt-4">
                <Button
                  size="sm"
                  onClick={() => setShowSuccess(false)}
                >
                  Add Another Listing
                </Button>
              </div>
            </div>
          </div>
        )}

        {!showSuccess && (
          <form onSubmit={handleSubmit}>
            {Object.keys(formErrors).length > 0 && (
              <Card className="mb-8 border border-red-200 bg-red-50">
                <CardHeader className="border-b border-red-200 bg-red-100">
                  <h3 className="text-lg font-medium text-red-800">Please correct the following errors:</h3>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-red-700 space-y-1">
                    {Object.entries(formErrors).map(([field, error]) => (
                      <li key={field}>{error}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            <Card className="mb-8">
              <CardHeader>
                <h2 className="text-xl font-semibold text-slate-900">Basic Information</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">
                    Title*
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className={`w-full rounded-md border ${
                      formErrors.title ? 'border-red-500' : 'border-slate-300'
                    } px-4 py-2 focus:ring-teal-500 focus:border-teal-500`}
                    placeholder="e.g., Colombian Emerald - Oval Cut 2.5 Carats"
                  />
                  {formErrors.title && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.title}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                    Description*
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full rounded-md border ${
                      formErrors.description ? 'border-red-500' : 'border-slate-300'
                    } px-4 py-2 focus:ring-teal-500 focus:border-teal-500`}
                    placeholder="Describe your emerald in detail including color, clarity, cut, and any special characteristics."
                  ></textarea>
                  {formErrors.description && (
                    <p className="mt-1 text-sm text-red-600">{formErrors.description}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-slate-700 mb-1">
                      Price (USD)*
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
                      className={`w-full rounded-md border ${
                        formErrors.price ? 'border-red-500' : 'border-slate-300'
                      } px-4 py-2 focus:ring-teal-500 focus:border-teal-500`}
                      placeholder="e.g., 5000"
                    />
                    {formErrors.price && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.price}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="carat" className="block text-sm font-medium text-slate-700 mb-1">
                      Carat Weight*
                    </label>
                    <input
                      type="number"
                      id="carat"
                      name="carat"
                      value={formData.carat}
                      onChange={handleChange}
                      min="0"
                      step="0.01"
                      className={`w-full rounded-md border ${
                        formErrors.carat ? 'border-red-500' : 'border-slate-300'
                      } px-4 py-2 focus:ring-teal-500 focus:border-teal-500`}
                      placeholder="e.g., 2.5"
                    />
                    {formErrors.carat && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.carat}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="origin" className="block text-sm font-medium text-slate-700 mb-1">
                      Origin*
                    </label>
                    <select
                      id="origin"
                      name="origin"
                      value={formData.origin}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${
                        formErrors.origin ? 'border-red-500' : 'border-slate-300'
                      } px-4 py-2 focus:ring-teal-500 focus:border-teal-500`}
                    >
                      <option value="">Select origin</option>
                      {origins.map((origin) => (
                        <option key={origin} value={origin}>
                          {origin}
                        </option>
                      ))}
                    </select>
                    {formErrors.origin && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.origin}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <h2 className="text-xl font-semibold text-slate-900">Certification Information</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start mb-2">
                  <Info className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                  <p className="text-sm text-slate-600">
                    All emeralds must have a valid certification from a recognized gemological laboratory.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="certification.lab" className="block text-sm font-medium text-slate-700 mb-1">
                      Laboratory*
                    </label>
                    <select
                      id="certification.lab"
                      name="certification.lab"
                      value={formData.certification.lab}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${
                        formErrors['certification.lab'] ? 'border-red-500' : 'border-slate-300'
                      } px-4 py-2 focus:ring-teal-500 focus:border-teal-500`}
                    >
                      <option value="">Select lab</option>
                      <option value="GIA">GIA</option>
                      <option value="AGL">AGL</option>
                      <option value="Gübelin">Gübelin</option>
                      <option value="SSEF">SSEF</option>
                      <option value="Other">Other</option>
                    </select>
                    {formErrors['certification.lab'] && (
                      <p className="mt-1 text-sm text-red-600">{formErrors['certification.lab']}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="certification.certificateNumber" className="block text-sm font-medium text-slate-700 mb-1">
                      Certificate Number*
                    </label>
                    <input
                      type="text"
                      id="certification.certificateNumber"
                      name="certification.certificateNumber"
                      value={formData.certification.certificateNumber}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${
                        formErrors['certification.certificateNumber'] ? 'border-red-500' : 'border-slate-300'
                      } px-4 py-2 focus:ring-teal-500 focus:border-teal-500`}
                      placeholder="e.g., GIA1234567890"
                    />
                    {formErrors['certification.certificateNumber'] && (
                      <p className="mt-1 text-sm text-red-600">{formErrors['certification.certificateNumber']}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="certification.date" className="block text-sm font-medium text-slate-700 mb-1">
                      Certification Date*
                    </label>
                    <input
                      type="date"
                      id="certification.date"
                      name="certification.date"
                      value={formData.certification.date}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${
                        formErrors['certification.date'] ? 'border-red-500' : 'border-slate-300'
                      } px-4 py-2 focus:ring-teal-500 focus:border-teal-500`}
                    />
                    {formErrors['certification.date'] && (
                      <p className="mt-1 text-sm text-red-600">{formErrors['certification.date']}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <h2 className="text-xl font-semibold text-slate-900">Images & Documents</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Emerald Images* (Max 5)
                  </label>
                  
                  {formErrors.images && (
                    <p className="mb-2 text-sm text-red-600">{formErrors.images}</p>
                  )}
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <div className="aspect-square rounded-md overflow-hidden border border-slate-200">
                          <img src={image} alt={`Emerald ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                    
                    {images.length < 5 && (
                      <button
                        type="button"
                        onClick={handleAddImage}
                        className="aspect-square rounded-md border-2 border-dashed border-slate-300 flex items-center justify-center hover:border-teal-500 hover:bg-teal-50 transition-colors"
                      >
                        <Plus className="h-6 w-6 text-slate-400" />
                      </button>
                    )}
                  </div>
                  
                  <p className="text-xs text-slate-500">
                    Upload high-quality images showing your emerald from multiple angles. Include at least one image showing the entire stone clearly.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Certification Documents (Max 3)
                  </label>
                  
                  <div className="space-y-3 mb-4">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between bg-slate-50 p-3 rounded-md border border-slate-200">
                        <div className="flex items-center">
                          <div className="bg-teal-100 p-2 rounded">
                            <svg className="h-5 w-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <span className="ml-3 text-sm font-medium text-slate-700">{doc}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveDocument(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    ))}
                    
                    {documents.length < 3 && (
                      <button
                        type="button"
                        onClick={handleAddDocument}
                        className="flex items-center justify-center w-full p-3 border-2 border-dashed border-slate-300 rounded-md hover:border-teal-500 hover:bg-teal-50 transition-colors"
                      >
                        <Upload className="h-5 w-5 text-slate-400 mr-2" />
                        <span className="text-sm text-slate-600">Upload Certificate</span>
                      </button>
                    )}
                  </div>
                  
                  <p className="text-xs text-slate-500">
                    Upload scanned copies or photos of the certification documents. This helps verify the authenticity of your emerald.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardContent>
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mt-0.5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-slate-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="terms" className="text-sm text-slate-700">
                      I confirm that all information provided is accurate and the emerald is authentic. I agree to the <a href="#" className="text-teal-700 hover:text-teal-800">Terms of Service</a> and <a href="#" className="text-teal-700 hover:text-teal-800">Seller Guidelines</a>.
                    </label>
                  </div>
                </div>
                
                <Button type="submit" size="lg" fullWidth>
                  Submit Listing
                </Button>
              </CardContent>
            </Card>
          </form>
        )}
      </div>
    </div>
  );
};

export default SellPage;