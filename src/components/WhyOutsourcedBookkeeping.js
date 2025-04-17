import React from 'react';
import { FaCheckCircle, FaChartLine, FaClock, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: FaUserTie,
    title: 'Professional Expertise',
    description: 'Professional expertise in handling complex financial records',
    color: {
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      bgGlow: 'before:bg-blue-500/5'
    }
  },
  {
    icon: FaChartLine,
    title: 'Cost-Effective',
    description: 'Cost-effective solution compared to in-house bookkeeping',
    color: {
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      bgGlow: 'before:bg-emerald-500/5'
    }
  },
  {
    icon: FaClock,
    title: 'Time-Saving',
    description: 'Time-saving, allowing focus on core business activities',
    color: {
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      bgGlow: 'before:bg-purple-500/5'
    }
  }
];

const WhyOutsourcedBookkeeping = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3"
                alt="Outsourced Bookkeeping"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-xl p-4 rounded-xl shadow-lg"
              >
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-xl font-bold text-blue-600">98%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-emerald-600">50%</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Outsourced Bookkeeping</span> Services?
              </h2>
              
              <p className="text-gray-600 text-base">
                In today's fast-paced business environment, managing your books efficiently is crucial for success. Our professional expertise ensures your financial records are accurate, up-to-date, and compliant.
              </p>
            </motion.div>

            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${benefit.color.bgGlow} before:absolute before:inset-0 before:rounded-2xl before:blur-xl`}
                >
                  <div className="relative bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`${benefit.color.iconBg} ${benefit.color.iconColor} w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <benefit.icon className="text-lg" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOutsourcedBookkeeping; 