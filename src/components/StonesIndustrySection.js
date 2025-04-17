import React, { useEffect } from 'react';
import { FaBullhorn, FaBuilding, FaHeartbeat, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const industries = [
  {
    icon: FaBullhorn,
    name: 'Marketing Agencies',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: FaBuilding,
    name: 'Real Estate',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: FaHeartbeat,
    name: 'Healthcare',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: FaLaptopCode,
    name: 'Technology',
    color: 'bg-orange-100 text-orange-600'
  }
];

const StonesIndustrySection = () => {
  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#book-consultation') {
        const element = document.getElementById('book-consultation');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Check on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const scrollToConsultation = (e) => {
    e.preventDefault();
    const element = document.getElementById('book-consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent font-headline">
              Trusted Bookkeeping Experts for the Stones Industry
            </h2>

            <div className="text-gray-600 space-y-4 font-body">
              <p>
                Imagine running a thriving stone business, crafting masterpieces from raw slabs. But behind the scenes, the numbers pile up, invoices stack, and bookkeeping feels like a rocky road. That's where Trubookz steps in—handling finances seamlessly while the focus stays on building something remarkable.
              </p>
              <p>
                Trubookz isn't just for the Stones Industry. We provide expert bookkeeping solutions for various industries, big or small, and tailor our approach to meet each industry's unique financial needs, ensuring accuracy and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-12 h-12 ${industry.color} rounded-full flex items-center justify-center`}>
                    <industry.icon className="text-xl" />
                  </div>
                  <span className="font-medium text-gray-800">{industry.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <motion.a
                href="#book-consultation"
                onClick={scrollToConsultation}
                className="text-primary hover:text-primary-dark font-medium text-lg inline-flex items-center group font-body"
              >
                Get Started Today
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092162384-8987c1d64926?ixlib=rb-4.0.3"
                alt="Stone Industry"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StonesIndustrySection; 