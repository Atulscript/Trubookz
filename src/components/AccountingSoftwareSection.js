import React from 'react';
import { motion } from 'framer-motion';

const softwarePartners = [
  {
    name: 'QuickBooks',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Intuit_QuickBooks_Logo.svg',
    color: 'text-green-600'
  },
  {
    name: 'Sage',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Sage_Group_logo.svg',
    color: 'text-green-500'
  },
  {
    name: 'Bill.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Bill.com_Logo.svg',
    color: 'text-orange-500'
  },
  {
    name: 'LawPay',
    logo: 'https://www.lawpay.com/assets/images/lawpay-logo.svg',
    color: 'text-blue-600'
  },
  {
    name: 'Clio',
    logo: 'https://www.clio.com/wp-content/uploads/2019/07/clio-logo-blue.svg',
    color: 'text-blue-500'
  },
  {
    name: 'MyCase',
    logo: 'https://www.mycase.com/wp-content/themes/mycase/images/mycase-logo.svg',
    color: 'text-purple-600'
  }
];

const AccountingSoftwareSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empowered by The Best Accounting Software
            </h2>
            <p className="text-gray-600">
              We employ the latest accounting software you trust to give you financial confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {softwarePartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`h-12 w-auto ${partner.color}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountingSoftwareSection; 