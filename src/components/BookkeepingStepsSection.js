import React from 'react';
import { FaRegCalendarCheck, FaDatabase, FaClipboardList, FaFileAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Tax planning & compliance',
    description: 'The service provider initiates the process by conducting an initial consultation with the client.',
    icon: FaRegCalendarCheck,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    number: '02',
    title: 'Data collection & analysis',
    description: 'We gather and analyze your financial data to understand your business needs.',
    icon: FaDatabase,
    color: 'bg-green-100 text-green-600'
  },
  {
    number: '03',
    title: 'Bookkeeping & financial record maintenance',
    description: 'Our team maintains accurate and up-to-date financial records.',
    icon: FaClipboardList,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    number: '04',
    title: 'Financial statement preparation',
    description: 'We prepare detailed financial statements and reports for your review.',
    icon: FaFileAlt,
    color: 'bg-orange-100 text-orange-600'
  }
];

const BookkeepingStepsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            How do our Bookkeeping Solutions work?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures accurate and efficient bookkeeping services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-xl p-6 shadow-lg"
              >
                <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mb-4`}>
                  <step.icon className="text-xl" />
                </div>
                <div className="absolute -top-6 right-6 text-6xl font-bold text-gray-100 select-none">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center">
                  <FaArrowRight className="text-primary text-2xl" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookkeepingStepsSection; 