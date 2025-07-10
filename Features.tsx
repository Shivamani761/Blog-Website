import React from 'react';
import { Bot, Zap, Shield, BarChart3, Clock, Users } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Automation',
      description: 'Leverage advanced machine learning algorithms to automate complex business processes with unprecedented accuracy.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes, not months. Our intuitive interface makes automation accessible to everyone.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA standards ensure your data stays protected.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Monitor performance, track ROI, and optimize workflows with comprehensive dashboards and reporting.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring ensures your workflows run smoothly around the clock with automatic error recovery.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in collaboration tools allow teams to work together seamlessly on workflow design and optimization.',
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform your business operations with intelligent automation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-blue-100">Productivity Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};