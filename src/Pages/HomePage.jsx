import React from 'react';

import HeroSection from '../components/HeroSection';

import WhyChooseUs from '../components/WhyChooseUs';
import Certifications from '../components/Certifications';
import RiceExportSection from '../components/RiceExportSection';
import PremiumOrganicBasmati from '../components/PremiumOrganicBasmati';
import PopularProducts from '../components/PopularProducts';
import FeaturedServices from '../components/FeaturedServices';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <WhyChooseUs />
      <Certifications />
      <RiceExportSection />
      <PremiumOrganicBasmati />
      <PopularProducts />
      <FeaturedServices />
      <Testimonials />
      <FAQSection />
      <Footer />
    </>
  );
};

export default HomePage;