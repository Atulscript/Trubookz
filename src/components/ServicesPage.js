import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useAnimation } from 'framer-motion';
import { FaStar, FaCheckCircle, FaArrowRight, FaCalculator, FaLaptop, FaChartLine, FaUsers, FaFileAlt, FaClipboardList, FaDatabase, FaRegCalendarCheck, FaPhone, FaChevronDown, FaTimes, FaComments, FaArrowLeft, FaArrowUp } from 'react-icons/fa';

const ServicesPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  const [activeService, setActiveService] = useState(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [messageInput, setMessageInput] = useState('');

  // Scroll progress indicator
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  // Parallax effect for hero section
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // Add new state variables
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [calculatorInputs, setCalculatorInputs] = useState({
    months: 1,
    transactions: 100,
    complexity: 'low'
  });

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);

      // Show stats when scrolled into view
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        setIsStatsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form validation and progress
  const handleFormChange = (e) => {
    const form = e.target.form;
    const inputs = Array.from(form.elements).filter(el => el.required);
    const filledInputs = inputs.filter(input => input.value.trim() !== '');
    setFormProgress((filledInputs.length / inputs.length) * 100);
  };

  // Floating contact button variants
  const floatingButtonVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    hover: { scale: 1.1, rotate: [0, -10, 10, -10, 0] }
  };

  // Service card hover effect
  const serviceCardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.95 }
  };

  // Stats counter animation
  const CounterAnimation = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (isStatsVisible) {
        let startTime;
        const animateCount = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const percentage = Math.min(progress / (duration * 1000), 1);
          
          setCount(Math.floor(end * percentage));
          
          if (percentage < 1) {
            requestAnimationFrame(animateCount);
          }
        };
        
        requestAnimationFrame(animateCount);
      }
    }, [isStatsVisible, end, duration]);
    
    return <span>{count}</span>;
  };

  // Add helper function for cost calculation
  const calculateCost = ({ months, transactions, complexity }) => {
    const baseRate = 150;
    const complexityMultiplier = {
      low: 1,
      medium: 1.5,
      high: 2
    };
    
    return Math.round(
      baseRate * months * (transactions / 100) * complexityMultiplier[complexity]
    );
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* 1. Hero Section - Introduction */}
      <section className="relative pt-40 md:pt-48 pb-16 bg-gradient-to-br from-blue-900 to-blue-950 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h1 className="text-5xl font-bold mb-6 leading-tight font-playfair">
                Expert Catch-Up <br />
                <span className="text-blue-400">Bookkeeping Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Get your books back on track with our professional catch-up bookkeeping services. We handle months of backlog quickly and accurately.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-500 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-blue-600 transition-colors"
              >
                Schedule Free Consultation
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-blue-800/20 rounded-2xl shadow-2xl aspect-video flex items-center justify-center backdrop-blur-sm border border-blue-700/20">
                <span className="text-blue-200">Bookkeeping Hero Image</span>
              </div>
              <div className="absolute -bottom-6 right-6 bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-blue-400 w-5 h-5" />
                    ))}
                  </div>
                  <span className="font-bold text-white">5.0 Rating</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Services Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-playfair text-blue-900">
            Our Comprehensive Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaCalculator,
                title: 'Catch-Up Bookkeeping',
                description: 'Get your books up-to-date quickly and accurately with our specialized catch-up services.'
              },
              {
                icon: FaLaptop,
                title: 'Monthly Bookkeeping',
                description: 'Maintain accurate financial records with our ongoing bookkeeping support.'
              },
              {
                icon: FaChartLine,
                title: 'Financial Reporting',
                description: 'Get detailed insights with our comprehensive financial analysis and reporting.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700 transition-colors">
                  Learn More
                  <FaArrowRight className="ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 font-playfair text-blue-900">
                Our Simple Process
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Initial Assessment',
                    description: 'We review your current books and determine the scope of work.'
                  },
                  {
                    step: '02',
                    title: 'Data Collection',
                    description: 'Gather all necessary financial documents and statements.'
                  },
                  {
                    step: '03',
                    title: 'Processing',
                    description: 'Our team processes all transactions and updates your books.'
                  },
                  {
                    step: '04',
                    title: 'Review & Delivery',
                    description: 'Final review and delivery of your updated financial records.'
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="text-3xl font-bold text-blue-600">{step.step}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-blue-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-50 rounded-xl shadow-xl aspect-video flex items-center justify-center border border-blue-100">
                <span className="text-blue-600">Process Image</span>
              </div>
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full">
                Fast Process
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full">
                Expert Team
              </div>
              <div className="absolute bottom-4 left-4 bg-blue-400 text-white px-4 py-2 rounded-full">
                Quality Results
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8 font-playfair text-blue-900">
                Why Choose Our Catch-Up Bookkeeping
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Save Time & Resources',
                    description: 'Focus on your core business while we handle your bookkeeping backlog.'
                  },
                  {
                    title: 'Expert Accuracy',
                    description: 'Get professional-grade accuracy with our experienced bookkeepers.'
                  },
                  {
                    title: 'Fast Turnaround',
                    description: 'Catch up months of bookkeeping in just weeks.'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                  >
                    <h3 className="text-xl font-bold mb-2 text-blue-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-blue-900 font-playfair">Additional Services</h3>
              <ul className="space-y-4">
                {[
                  'Monthly Bookkeeping',
                  'Tax Preparation',
                  'Financial Reporting',
                  'Payroll Services',
                  'Business Advisory',
                  'QuickBooks Setup'
                ].map((service, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-blue-600 mr-3" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Statistics Section */}
      <section className="py-16 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair text-white">Our Impact in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Clients Served' },
              { number: '50K+', label: 'Transactions Processed' },
              { number: '15+', label: 'Years Experience' },
              { number: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-700/30"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact Form Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6 font-playfair">
                Get Started Today
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to bring your books up to date? Our expert team is here to help you get started with professional catch-up bookkeeping services.
              </p>
              <ul className="space-y-4">
                {[
                  'Dedicated Professional Bookkeeper',
                  'Fast & Accurate Service',
                  'Customized Solutions',
                  'Ongoing Support'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-blue-400 mr-3" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 font-playfair">Request a Consultation</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-950"></div>
        <div className="absolute inset-0 bg-blue-900/50 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6 font-playfair">
              Ready to Transform Your Bookkeeping?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Take the first step towards organized finances. Contact us today for a personalized solution.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-500 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-blue-600 transition-colors"
            >
              Schedule Your Free Consultation
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 