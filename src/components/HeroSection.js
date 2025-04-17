import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative bg-gradient-to-br from-[#004182] via-[#004182] to-[#003166] text-white overflow-hidden h-screen">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto h-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center py-4">
          {/* Left Content */}
          <div className="z-10 p-6 lg:p-8 space-y-5">
            {/* Badge */}
            <motion.div 
              {...fadeIn}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 space-x-2 border border-white/20"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm font-medium text-yellow-400">Trusted by 500+ Businesses</span>
            </motion.div>

            {/* Title Stack */}
            <motion.div 
              {...fadeIn}
              className="space-y-3"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight font-headline">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  Leading
                </span>
                <br />
                <span className="relative inline-block">
                  Bookkeeping
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 400 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5 Q100 0, 200 5 T400 5" stroke="#60A5FA" strokeWidth="4" fill="none"/>
                  </svg>
                </span>
                <br />
                <span className="text-4xl lg:text-6xl text-blue-200">Services</span>
              </h1>
              
              <p className="text-lg text-blue-100/90 max-w-xl leading-relaxed font-body my-8">
                Transform your financial management with our expert catch-up bookkeeping services. Stay organized, compliant, and ahead.
              </p>
            </motion.div>

            {/* Rating and CTA */}
            <div className="space-y-5">
              <motion.div 
                {...fadeIn}
                className="flex items-center space-x-4"
              >
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden bg-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-sm font-medium text-white">+42</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                    ))}
                    <span className="ml-2 font-semibold">5.0</span>
                  </div>
                  <span className="text-sm text-blue-200">
                    From 500+ verified reviews
                  </span>
                </div>
              </motion.div>

              <motion.button
                {...fadeIn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center space-x-3 bg-white text-primary px-6 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
              >
                <span>Schedule Free Consultation</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>

          {/* Right Content - New Design */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 hidden lg:block h-full px-6"
          >
            <div className="relative h-full w-full flex items-center">
              {/* Main Content Grid */}
              <div className="grid grid-cols-12 gap-3 w-full">
                {/* Large Feature Image */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="col-span-8 row-span-2 relative"
                >
                  <div className="relative h-[340px] rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                      alt="Financial workspace" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-transparent" />
                    
                    {/* Overlay Stats */}
                    <div className="absolute bottom-3 left-3 right-3 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">Monthly Growth</p>
                            <p className="text-base font-bold text-green-400">+32.40%</p>
                          </div>
                        </div>
                        <div className="flex space-x-1.5">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-1.5 h-6 bg-blue-400/30 rounded-full">
                              <div 
                                className="w-full bg-blue-400 rounded-full" 
                                style={{ height: `${[70, 45, 85][i]}%` }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Side Cards */}
                <div className="col-span-4 space-y-3">
                  {/* Analytics Card */}
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">Tasks Complete</span>
                      </div>
                      <span className="text-base font-bold text-green-400">94%</span>
                    </div>
                  </motion.div>

                  {/* Status Card */}
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-7 h-7 rounded-full border-2 border-[#004182] bg-gradient-to-br from-blue-200 to-white">
                            <img 
                              src={`https://i.pravatar.cc/150?img=${i + 20}`} 
                              alt="Team member" 
                              className="w-full h-full rounded-full"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Active Team</p>
                        <div className="flex items-center">
                          <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse" />
                          <span className="text-xs text-green-400 ml-1.5">Online now</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="col-span-4 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-200">Active Clients</p>
                      <p className="text-xl font-bold">2,847</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 