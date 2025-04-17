import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BsClipboardData, BsDatabase, BsJournalBookmark, BsFileEarmarkText } from 'react-icons/bs';

const BookkeepingProcess = () => {
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

  const steps = [
    {
      id: '01',
      icon: <BsClipboardData className="w-7 h-7" />,
      title: 'Tax planning & compliance',
      description: 'Initial consultation and tax strategy planning',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      bgGlow: 'before:bg-blue-500/5'
    },
    {
      id: '02',
      icon: <BsDatabase className="w-7 h-7" />,
      title: 'Data collection & analysis',
      description: 'Comprehensive financial data gathering',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      bgGlow: 'before:bg-emerald-500/5'
    },
    {
      id: '03',
      icon: <BsJournalBookmark className="w-7 h-7" />,
      title: 'Bookkeeping records',
      description: 'Maintaining accurate financial records',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      bgGlow: 'before:bg-purple-500/5'
    },
    {
      id: '04',
      icon: <BsFileEarmarkText className="w-7 h-7" />,
      title: 'Financial statements',
      description: 'Detailed reports and analysis',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      bgGlow: 'before:bg-orange-500/5'
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-headline">
            How do our <span className="text-blue-600">Bookkeeping Solutions</span> work?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-body">
            Our streamlined process ensures accurate and efficient bookkeeping services
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-[4.5rem] left-0 w-full h-1 bg-gray-100 hidden md:block" />
          <div className="absolute top-[4.5rem] left-0 w-full hidden md:block">
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 w-full transform origin-left scale-x-0 animate-[progressLine_2s_ease-out_forwards]" />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative ${step.bgGlow} before:absolute before:inset-0 before:rounded-2xl before:blur-xl`}
              >
                <div className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className={`${step.iconBg} ${step.iconColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-headline">{step.title}</h3>
                  <p className="text-gray-600 font-body">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 font-headline">Ready to Streamline Your Bookkeeping?</h4>
              <p className="mt-2 text-gray-600 font-body">Let's discuss how our solutions can help your business grow.</p>
            </div>
            <motion.a
              href="#book-consultation"
              onClick={scrollToConsultation}
              whileHover={{ scale: 1.02 }}
              className="px-6 py-3 bg-white text-primary rounded-lg shadow-lg hover:bg-gray-50 transition-colors inline-block"
            >
              Schedule a Call
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes progressLine {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
};

export default BookkeepingProcess;