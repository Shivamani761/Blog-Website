import React from 'react';
import { Hero } from '../components/Hero';
import { ImageCarousel } from '../components/ImageCarousel';
import { Calendar, Users, Target, Heart } from 'lucide-react';

export const Home: React.FC = () => {
  const carouselImages = [
    'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ];

  const features = [
    {
      icon: Target,
      title: 'Innovation Focus',
      description: 'Fostering creative thinking and innovative solutions to real-world challenges.',
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Building tomorrow\'s leaders through mentorship and hands-on experience.',
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'Making a positive difference in our campus and local community.',
    },
    {
      icon: Calendar,
      title: 'Regular Events',
      description: 'Engaging workshops, seminars, and networking opportunities throughout the year.',
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RISE is more than just a college club – we're a community of passionate students 
              dedicated to personal growth, innovation, and making a lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Take a look at some of our memorable moments and achievements
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ImageCarousel images={carouselImages} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join RISE?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of a community that values growth, innovation, and positive impact. 
            Your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Become a Member
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};