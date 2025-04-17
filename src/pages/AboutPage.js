import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';

const AboutPage = () => {
  const stats = [
    {
      number: '10+',
      label: 'Years Experience',
      icon: FaChartLine,
    },
    {
      number: '1000+',
      label: 'Clients Served',
      icon: FaUsers,
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      icon: FaHandshake,
    },
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We maintain the highest standards of professional integrity in all our client relationships.',
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our bookkeeping services.',
    },
    {
      title: 'Innovation',
      description: 'We embrace modern technology to provide efficient and accurate bookkeeping solutions.',
    },
    {
      title: 'Client Focus',
      description: 'Your success is our priority. We work closely with you to understand and meet your unique needs.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About TruBookz
            </h1>
            <p className="text-xl text-white/80">
              Your trusted partner in professional bookkeeping services, helping businesses maintain accurate financial records and make informed decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-8">
                Founded with a vision to simplify bookkeeping for businesses of all sizes, TruBookz has grown into a trusted name in the industry. We combine years of expertise with modern technology to deliver accurate, efficient, and reliable bookkeeping services.
              </p>
              <p className="text-gray-600">
                Our team of certified professionals is dedicated to helping businesses maintain accurate financial records, comply with tax regulations, and make informed financial decisions. We understand that every business is unique, which is why we offer customized solutions tailored to your specific needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="text-3xl text-primary" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                  <FaCheckCircle className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">Ready to Get Started?</h2>
              <p className="text-white/80">
                Let us help you streamline your bookkeeping processes and take your business to the next level.
              </p>
              <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us Today
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 