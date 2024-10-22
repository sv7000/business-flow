import React from 'react';
import { CheckCircleIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Consulting',
      description: 'Expert advice to help your business grow and overcome challenges.',
      features: ['Strategic planning', 'Process optimization', 'Risk management', 'Technology integration'],
      image: '/placeholder.svg?height=400&width=600',
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your specific business needs.',
      features: ['Web applications', 'Mobile apps', 'Cloud solutions', 'API integration'],
      image: '/placeholder.svg?height=400&width=600',
    },
    {
      title: 'Marketing',
      description: 'Comprehensive marketing strategies to boost your brand and reach your target audience.',
      features: ['Digital marketing', 'Content creation', 'Social media management', 'SEO optimization'],
      image: '/placeholder.svg?height=400&width=600',
    },
    {
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights to drive business growth.',
      features: ['Data visualization', 'Predictive analytics', 'Business intelligence', 'Machine learning'],
      image: '/placeholder.svg?height=400&width=600',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We offer a wide range of services to help your business thrive in the digital age.
            From expert consulting to cutting-edge software development, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
          <div className="container mx-auto px-4">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <img src={service.image} alt={service.title} className="rounded-lg shadow-xl" />
              </div>
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 flex items-center">
                  Learn More
                  <ChevronRightIcon className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's work together to take your business to the next level. Our team of experts is ready to help you achieve your goals.
          </p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
            Contact Us Now
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img src={`/placeholder.svg?height=50&width=50`} alt="Client" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold">John Doe</h3>
                    <p className="text-gray-600">CEO, Tech Company</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Working with this team has been an absolute pleasure. Their expertise and dedication to our project were outstanding. Highly recommended!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;