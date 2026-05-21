import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './Pages/HeroSection';
import WhyChooseUs from './Pages/WhyChooseUs';

import './App.css';
import Certifications from './components/Certifications';
import RiceExportSection from './components/RiceExportSection';
import PremiumOrganicBasmati from './components/PremiumOrganicBasmati';
import PopularProducts from './components/PopularProducts';

function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <Certifications/>
      <RiceExportSection/>
      <PremiumOrganicBasmati/>
      <PopularProducts/>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Example Routes */}
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/services" element={<h1>Services Page</h1>} />
          <Route path="/blog" element={<h1>Blog Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;