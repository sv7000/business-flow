import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const AboutUs: React.FC = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO & Founder', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Jane Smith', role: 'CTO', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Mike Johnson', role: 'Head of Marketing', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Sarah Brown', role: 'Lead Designer', image: '/placeholder.svg?height=300&width=300' },
  ];

  const values = [
    { title: 'Innovation', description: 'We constantly push the boundaries of what\'s possible.' },
    { title: 'Integrity', description: 'We uphold the highest ethical standards in all our dealings.' },
    { title: 'Collaboration', description: 'We believe in the power of teamwork and partnerships.' },
    { title: 'Excellence', description: 'We strive for excellence in everything we do.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">About Us</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            We are a team of passionate professionals dedicated to helping businesses thrive in the digital age.
            Our innovative solutions and commitment to excellence set us apart in the industry.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/team.jpg" alt="Our team collaborating" className="rounded-lg shadow-xl" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, our company started with a simple mission: to help businesses leverage technology to achieve their goals.
                Over the years, we've grown from a small startup to a leading provider of innovative solutions, serving clients across various industries.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been marked by continuous learning, adaptation, and a relentless pursuit of excellence.
                We've weathered challenges, celebrated successes, and always kept our clients' needs at the forefront of everything we do.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be trusted by businesses of all sizes, from startups to Fortune 500 companies.
                Our team of experts continues to push the boundaries of what's possible, always staying ahead of the curve in this rapidly evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
                <CheckCircleIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl mb-8">Let's collaborate to bring your vision to life.</p>
          <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;