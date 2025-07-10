import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      title: 'Annual Gala 2023',
      description: 'Our biggest celebration of the year with awards and recognition.',
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'workshops',
      title: 'Leadership Workshop',
      description: 'Interactive session on developing leadership skills.',
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'networking',
      title: 'Networking Night',
      description: 'Connecting students with industry professionals.',
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      title: 'Tech Talk Series',
      description: 'Expert discussions on emerging technologies.',
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'community',
      title: 'Community Service Day',
      description: 'Volunteers making a difference in the local community.',
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'events',
      title: 'Innovation Summit',
      description: 'Showcasing student innovations and startup ideas.',
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'workshops',
      title: 'Entrepreneurship Workshop',
      description: 'Learning the fundamentals of starting a business.',
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'community',
      title: 'Campus Clean-up',
      description: 'RISE members working together to beautify our campus.',
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'networking',
      title: 'Alumni Meetup',
      description: 'Connecting current members with successful alumni.',
    },
  ];

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'events', label: 'Events' },
    { key: 'workshops', label: 'Workshops' },
    { key: 'networking', label: 'Networking' },
    { key: 'community', label: 'Community Service' },
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our journey through photos capturing memorable moments, 
            achievements, and the vibrant community spirit of RISE.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  filter === category.key
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-200 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-semibold mb-2">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-gray-300">
                {filteredImages[selectedImage].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};