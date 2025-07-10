import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter } from 'lucide-react';

export const Events: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const events = [
    {
      id: 1,
      title: 'Innovation Summit 2024',
      date: '2024-03-15',
      time: '9:00 AM - 5:00 PM',
      location: 'Main Auditorium',
      attendees: 250,
      type: 'upcoming',
      description: 'Join us for a day of inspiring talks, workshops, and networking with industry leaders.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Leadership Workshop',
      date: '2024-02-28',
      time: '2:00 PM - 4:00 PM',
      location: 'Student Center Room 201',
      attendees: 45,
      type: 'upcoming',
      description: 'Develop essential leadership skills through interactive exercises and group discussions.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Community Service Day',
      date: '2024-01-20',
      time: '8:00 AM - 3:00 PM',
      location: 'Local Community Center',
      attendees: 80,
      type: 'past',
      description: 'Volunteers helped organize food drives and educational activities for local families.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Tech Talk: AI in Education',
      date: '2024-01-10',
      time: '6:00 PM - 8:00 PM',
      location: 'Engineering Building, Room 105',
      attendees: 120,
      type: 'past',
      description: 'Expert panel discussion on the role of artificial intelligence in modern education.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Networking Night',
      date: '2024-03-25',
      time: '7:00 PM - 9:00 PM',
      location: 'Campus Restaurant',
      attendees: 60,
      type: 'upcoming',
      description: 'Connect with alumni, industry professionals, and fellow students in a relaxed setting.',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'Annual Gala',
      date: '2023-12-15',
      time: '6:00 PM - 11:00 PM',
      location: 'Grand Ballroom',
      attendees: 200,
      type: 'past',
      description: 'Our biggest event of the year celebrating achievements and recognizing outstanding members.',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const filteredEvents = events.filter(event => {
    if (filter === 'all') return true;
    return event.type === filter;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our upcoming events and relive the highlights from our past gatherings. 
            Join us for inspiring experiences and meaningful connections.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <div className="flex space-x-2">
              {[
                { key: 'all', label: 'All Events' },
                { key: 'upcoming', label: 'Upcoming' },
                { key: 'past', label: 'Past Events' },
              ].map((option) => (
                <button
                  key={option.key}
                  onClick={() => setFilter(option.key as any)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    filter === option.key
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                    event.type === 'upcoming' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-500 text-white'
                  }`}>
                    {event.type === 'upcoming' ? 'Upcoming' : 'Past Event'}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  
                  {event.type === 'upcoming' && (
                    <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};