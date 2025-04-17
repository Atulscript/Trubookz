import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    id: 1,
    question: 'What is catch-up bookkeeping?',
    answer: 'Catch-up bookkeeping is the process of updating and organizing financial records that have fallen behind. This service helps businesses bring their books up to date, ensuring compliance and accurate financial reporting.'
  },
  {
    id: 2,
    question: 'How long does the catch-up process take?',
    answer: 'The duration varies depending on the complexity of your books and how far behind they are. Typically, we can complete catch-up bookkeeping for 3-6 months of records within 2-3 weeks. We\'ll provide a more accurate timeline after reviewing your specific situation.'
  },
  {
    id: 3,
    question: 'What documents do I need to provide?',
    answer: 'You\'ll need to provide bank statements, credit card statements, receipts, invoices, payroll records, and any other financial documents from the period requiring catch-up. We\'ll provide a detailed checklist during our initial consultation.'
  },
  {
    id: 4,
    question: 'How do you ensure data security?',
    answer: 'We use industry-standard encryption and secure cloud storage solutions to protect your financial data. Our systems comply with all relevant data protection regulations, and we maintain strict confidentiality protocols.'
  }
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={false}
      className="border-b border-gray-200 py-4"
    >
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="text-lg font-medium text-gray-900">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown className={`transform transition-colors ${isOpen ? 'text-primary' : 'text-gray-400'}`} />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8"
          >
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggleFAQ(faq.id)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;