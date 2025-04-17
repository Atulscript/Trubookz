import React from 'react';
import { FaArrowRight, FaUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    category: 'Financial Management',
    title: 'Essential Bookkeeping Tips for Small Businesses',
    excerpt: 'Learn the fundamental bookkeeping practices that can help your small business thrive in today\'s competitive market.',
    date: 'March 1, 2025',
    readTime: '5 min read',
    author: 'John Smith',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f'
  },
  {
    id: 2,
    category: 'Tax Planning',
    title: 'Maximizing Tax Deductions for Your Business',
    excerpt: 'Discover strategies to optimize your tax deductions and improve your business\'s financial health.',
    date: 'March 5, 2025',
    readTime: '7 min read',
    author: 'Lisa Chen',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07'
  },
  {
    id: 3,
    category: 'Bookkeeping',
    title: 'Digital Transformation in Modern Accounting',
    excerpt: 'Explore how digital tools are revolutionizing the bookkeeping industry and improving efficiency.',
    date: 'March 10, 2025',
    readTime: '6 min read',
    author: 'Mike Johnson',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Blogs</h2>
          <button className="flex items-center text-primary font-semibold hover:text-primary-light transition-colors">
            View All Articles
            <FaArrowRight className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-primary">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaUserCircle className="text-gray-400 text-xl mr-2" />
                    <span className="text-gray-600 text-sm">{post.author}</span>
                  </div>
                  <a
                    href="#"
                    className="text-primary font-semibold flex items-center hover:text-primary-light transition-colors"
                  >
                    Read More
                    <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 