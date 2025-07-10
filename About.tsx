import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We believe in pushing boundaries and finding creative solutions to complex challenges.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Together we achieve more. We foster teamwork and mutual support among all members.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, setting high standards for ourselves.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'We look ahead and work towards creating a better future for our community.',
    },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'RISE was founded by a group of passionate students with a vision to create positive change.',
    },
    {
      year: '2021',
      title: 'First Major Event',
      description: 'Organized our first innovation summit, attracting over 200 participants from across campus.',
    },
    {
      year: '2022',
      title: 'Community Outreach',
      description: 'Launched our community service initiative, impacting over 500 local residents.',
    },
    {
      year: '2023',
      title: 'National Recognition',
      description: 'Received the Outstanding Student Organization Award at the national level.',
    },
    {
      year: '2024',
      title: 'Expansion',
      description: 'Grew to over 150 active members and established partnerships with local businesses.',
    },
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About RISE</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are a dynamic student organization committed to fostering innovation, 
            leadership, and community engagement among college students.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower students through innovative programs, leadership development opportunities, 
                and community engagement initiatives that foster personal growth and positive social impact. 
                We strive to create an inclusive environment where every member can thrive and contribute 
                to meaningful change.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the premier student organization that cultivates the next generation of innovative 
                leaders who will drive positive change in their communities and beyond. We envision a 
                future where our members become catalysts for transformation in their chosen fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our organization's growth
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-8 h-8">
                    <div className="w-4 h-4 bg-white border-4 border-purple-600 rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};