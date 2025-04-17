import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustedBrands from './components/TrustedBrands';
import OurServicesSection from './components/OurServicesSection';
import WhyOutsourcedBookkeeping from './components/WhyOutsourcedBookkeeping';
import BookkeepingProcess from './components/BookkeepingProcess';
import StonesIndustrySection from './components/StonesIndustrySection';
import AccountingSoftwareSection from './components/AccountingSoftwareSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactAndBenefitsSection from './components/ContactAndBenefitsSection';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBrands />
      <OurServicesSection />
      <WhyOutsourcedBookkeeping />
      <BookkeepingProcess />
      <StonesIndustrySection />
      <AccountingSoftwareSection />
      <TestimonialsSection />
      <ContactAndBenefitsSection />
      <BlogSection />
      <FAQSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 