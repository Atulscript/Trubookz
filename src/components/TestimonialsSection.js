import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Working with Trubookz has transformed our financial management. Their attention to detail and expertise in bookkeeping has given us peace of mind.",
    author: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    quote: "The team at Trubookz has been instrumental in streamlining our bookkeeping processes. Their service is top-notch and highly professional.",
    author: "Michael Chen",
    title: "Founder, InnovateLab",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    quote: "I can't recommend Trubookz enough. They've helped us maintain accurate financial records and provided valuable insights for our business growth.",
    author: "Emily Rodriguez",
    title: "Director, Creative Solutions",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from businesses we've helped with our bookkeeping services
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {[
                  (currentIndex - 1 + testimonials.length) % testimonials.length,
                  currentIndex,
                  (currentIndex + 1) % testimonials.length
                ].map((index) => {
                  const testimonial = testimonials[index];
                  return (
                    <div
                      key={testimonial.id}
                      className="bg-white rounded-xl p-8 shadow-lg relative"
                    >
                      <FaQuoteLeft className="text-primary/20 text-4xl absolute top-4 left-4" />
                      <div className="text-gray-600 mb-6 mt-8 relative z-10">
                        {testimonial.quote}
                      </div>
                      <div className="flex items-center">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial.author}
                          </div>
                          <div className="text-gray-500 text-sm">
                            {testimonial.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg text-primary hover:text-primary-light transition-colors"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg text-primary hover:text-primary-light transition-colors"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 