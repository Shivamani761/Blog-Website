import React from 'react';
import { Mail, Linkedin, Award, Users, Star } from 'lucide-react';

export const Members: React.FC = () => {
  const executiveBoard = [
    {
      name: 'Sarah Johnson',
      position: 'President',
      year: 'Senior',
      major: 'Computer Science',
      bio: 'Passionate about technology and leadership, Sarah has led RISE to new heights with innovative programs.',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'sarah.j@university.edu',
      linkedin: '#',
    },
    {
      name: 'Michael Chen',
      position: 'Vice President',
      year: 'Junior',
      major: 'Business Administration',
      bio: 'Michael brings strategic thinking and organizational skills to help RISE achieve its mission.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'michael.c@university.edu',
      linkedin: '#',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Secretary',
      year: 'Sophomore',
      major: 'Communications',
      bio: 'Emily ensures smooth operations and effective communication across all RISE activities.',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'emily.r@university.edu',
      linkedin: '#',
    },
    {
      name: 'David Kim',
      position: 'Treasurer',
      year: 'Junior',
      major: 'Finance',
      bio: 'David manages RISE\'s finances and ensures responsible stewardship of club resources.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      email: 'david.k@university.edu',
      linkedin: '#',
    },
  ];

  const teamLeads = [
    {
      name: 'Jessica Park',
      position: 'Events Coordinator',
      year: 'Junior',
      major: 'Event Management',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Alex Thompson',
      position: 'Community Outreach Lead',
      year: 'Senior',
      major: 'Social Work',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'Maria Garcia',
      position: 'Marketing Director',
      year: 'Sophomore',
      major: 'Marketing',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
    {
      name: 'James Wilson',
      position: 'Technology Lead',
      year: 'Junior',
      major: 'Information Systems',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    },
  ];

  const stats = [
    { icon: Users, label: 'Total Members', value: '150+' },
    { icon: Award, label: 'Leadership Positions', value: '25' },
    { icon: Star, label: 'Active Volunteers', value: '80+' },
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet the dedicated individuals who make RISE a thriving community of 
            innovation, leadership, and positive impact.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Board */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Executive Board</h2>
            <p className="text-xl text-gray-600">
              The leadership team guiding RISE toward its mission and vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executiveBoard.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-500 mb-2">{member.year} • {member.major}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Leads */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Team Leads</h2>
            <p className="text-xl text-gray-600">
              Department heads driving specific initiatives and programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamLeads.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="relative h-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-1">{member.position}</p>
                  <p className="text-sm text-gray-500">{member.year} • {member.major}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Join Our Team?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're always looking for passionate students who want to make a difference. 
              Join RISE and be part of something bigger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Apply for Membership
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};