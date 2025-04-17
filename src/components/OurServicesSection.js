import React from 'react';
import { FaBookOpen, FaHistory, FaMoneyCheckAlt, FaChartLine, FaWallet, FaFileInvoiceDollar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={`relative ${color.bgGlow} before:absolute before:inset-0 before:rounded-2xl before:blur-xl`}
  >
    <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
      <div className={`${color.iconBg} ${color.iconColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
        <Icon className="text-2xl" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <motion.a 
        href="#" 
        className={`${color.iconColor} font-semibold flex items-center group`}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        Learn More
        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.a>
    </div>
  </motion.div>
);

const services = [
  {
    icon: FaBookOpen,
    title: 'Bookkeeping Services',
    description: 'Comprehensive bookkeeping solutions to keep your finances organized and up-to-date.',
    color: {
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      bgGlow: 'before:bg-blue-500/5'
    }
  },
  {
    icon: FaHistory,
    title: 'Catch-Up Bookkeeping',
    description: 'Get back on track with our specialized catch-up bookkeeping services.',
    color: {
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      bgGlow: 'before:bg-emerald-500/5'
    }
  },
  {
    icon: FaMoneyCheckAlt,
    title: 'Payroll Services',
    description: 'Streamlined payroll management to ensure timely and accurate payments.',
    color: {
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      bgGlow: 'before:bg-purple-500/5'
    }
  },
  {
    icon: FaChartLine,
    title: 'Fractional CFO Services',
    description: 'Expert financial guidance and strategic planning for your business growth.',
    color: {
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      bgGlow: 'before:bg-orange-500/5'
    }
  },
  {
    icon: FaWallet,
    title: 'Accounts Receivable',
    description: 'Efficient management of incoming payments and customer accounts.',
    color: {
      iconBg: 'bg-pink-50',
      iconColor: 'text-pink-600',
      bgGlow: 'before:bg-pink-500/5'
    }
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'Accounts Payable',
    description: 'Systematic handling of vendor payments and expense tracking.',
    color: {
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      bgGlow: 'before:bg-indigo-500/5'
    }
  }
];

const OurServicesSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Comprehensive financial solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection; 