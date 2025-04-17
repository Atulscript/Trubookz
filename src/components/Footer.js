import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'About Us',
      content: 'Trubookz provides professional bookkeeping services to help businesses maintain accurate financial records and make informed decisions.',
    },
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#services' },
        { name: 'Resources', href: '#resources' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Our Services',
      links: [
        { name: 'Bookkeeping', href: '#services' },
        { name: 'Payroll Management', href: '#services' },
        { name: 'Tax Preparation', href: '#services' },
        { name: 'Financial Analysis', href: '#services' },
      ],
    },
    {
      title: 'Contact Info',
      content: (
        <div className="space-y-2">
          <p>123 Business Street</p>
          <p>City, State 12345</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@trubookz.com</p>
        </div>
      ),
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#004182] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-white">{section.title}</h3>
              {section.content && (
                <div className="space-y-4">
                  <p className="text-gray-300">{section.content}</p>
                  {section.title === 'About Us' && (
                    <motion.button
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById('book-consultation');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center px-4 py-2 bg-white text-primary hover:bg-gray-50 rounded-lg transition-colors font-medium shadow-lg hover:shadow-xl"
                    >
                      Get Started Today
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.button>
                  )}
                </div>
              )}
              {section.links && (
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-300 text-sm">
              © {currentYear} Trubookz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 