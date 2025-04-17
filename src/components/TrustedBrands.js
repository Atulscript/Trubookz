import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const TrustedBrands = () => {
  const brands = [
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Meta_Platforms_Inc._logo.svg' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg' },
    { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
    { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
    { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' }
  ];

  const stats = [
    { value: '500+', label: 'Active Clients', color: 'text-blue-600' },
    { value: '98%', label: 'Client Retention', color: 'text-purple-600' },
    { value: '24/7', label: 'Support', color: 'text-emerald-600' }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Renowned Brands</span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Trubookz earns the trust of leading USA brands by delivering reliable, efficient, and tailored bookkeeping solutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm">
            <div className="grid grid-cols-3 divide-x divide-gray-100">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 text-center"
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Brands Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10"></div>
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="py-6"
          >
            <div className="flex items-center">
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="mx-8 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-8 md:h-10 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBrands; 