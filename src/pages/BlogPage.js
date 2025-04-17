import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Catch-Up Bookkeeping: A Comprehensive Guide',
      excerpt: 'Learn everything you need to know about catch-up bookkeeping and how it can help your business get back on track.',
      author: 'John Smith',
      date: 'March 15, 2024',
      image: '/images/blog/bookkeeping-guide.jpg',
      category: 'Bookkeeping'
    },
    {
      id: 2,
      title: 'Top 10 Bookkeeping Mistakes Small Businesses Make',
      excerpt: 'Discover the most common bookkeeping mistakes that small businesses make and how to avoid them.',
      author: 'Sarah Johnson',
      date: 'March 12, 2024',
      image: '/images/blog/mistakes.jpg',
      category: 'Tips & Tricks'
    },
    {
      id: 3,
      title: 'The Benefits of Cloud-Based Bookkeeping Solutions',
      excerpt: 'Explore how cloud-based bookkeeping can streamline your financial management and improve efficiency.',
      author: 'Mike Brown',
      date: 'March 10, 2024',
      image: '/images/blog/cloud-solutions.jpg',
      category: 'Technology'
    },
    {
      id: 4,
      title: 'Tax Planning Strategies for Small Businesses',
      excerpt: 'Essential tax planning strategies to help your small business maximize deductions and minimize tax liability.',
      author: 'Emily Davis',
      date: 'March 8, 2024',
      image: '/images/blog/tax-planning.jpg',
      category: 'Tax Planning'
    },
    {
      id: 5,
      title: 'Understanding Financial Statements: A Beginner\'s Guide',
      excerpt: 'Learn how to read and interpret financial statements to make better business decisions.',
      author: 'Robert Wilson',
      date: 'March 5, 2024',
      image: '/images/blog/financial-statements.jpg',
      category: 'Financial Analysis'
    },
    {
      id: 6,
      title: 'The Future of Bookkeeping: AI and Automation',
      excerpt: 'How artificial intelligence and automation are transforming the bookkeeping industry.',
      author: 'Lisa Chen',
      date: 'March 3, 2024',
      image: '/images/blog/ai-bookkeeping.jpg',
      category: 'Technology'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Latest Insights & Resources
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80"
            >
              Stay updated with the latest trends, tips, and best practices in bookkeeping and financial management.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="bg-gray-50 aspect-video flex items-center justify-center">
                  <span className="text-primary">Blog Image</span>
                </div>
                <div className="p-6">
                  <span className="inline-block glass-effect text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mt-4 mb-4">
                    <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <FaUser className="mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <div className="mx-4">•</div>
                    <div className="flex items-center">
                      <FaCalendar className="mr-2" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors group"
                  >
                    Read More
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Subscribe to Our Newsletter
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 mb-8"
            >
              Get the latest insights and tips delivered directly to your inbox.
            </motion.p>
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-colors"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 