import React from 'react';
import '../index.css';
import ExportStatsCard from './ExportStatsCard';
import NutritionalCard from './NutritionalCard';
import FeaturesBadge from './FeaturesBadge';
import RiceCategories from './RiceCategories';
import RiceExportSection from './RiceExportSection';
import WhyChooseUs from './WhyChooseUs';
import Certifications from './Certifications';
import PremiumOrganicBasmati from './PremiumOrganicBasmati';
import PopularProducts from './PopularProducts';
import FeaturedServices from './FeaturedServices';
import Testimonials from './Testimonials';
import FAQSection from './FAQSection';
import Footer from './Footer';

const HeroSection = () => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '125vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '90px',
        paddingBottom: '180px',
      }}
    >
      {/* Background Image with Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,0.58),
              rgba(0,0,0,0.72)
            ),
            url('hero_section_image.png')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          transform: 'scale(1.02)',
        }}
      />

      {/* Left to Right Bottom Slope */}
      <div
        style={{
          position: 'absolute',
          bottom: '-2px',
          left: 0,
          width: '100%',
          height: '180px',
          background: '#ffffff',
          clipPath: 'polygon(0 100%, 100% 72%, 100% 100%, 0 100%)',
          zIndex: 2,
        }}
      />

      {/* Main Content */}
      <div
        className="container-fluid px-lg-5"
        style={{
          position: 'relative',
          zIndex: 3,
          marginTop:'120px'
        }}
      >
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-5 col-md-6 mb-5 mb-lg-0">
            <div
              style={{
                animation: 'slideInLeft 0.8s ease forwards',
                paddingBottom: '40px',
              }}
            >

             

              {/* Heading */}
              <h1
                style={{
                  fontSize: '38px',
                  fontWeight: '520',
                  color: '#ffffff',
                  lineHeight: '1.12',
                  marginBottom: '1.4rem',
                  textShadow: '0 4px 24px rgba(0,0,0,0.45)',
                }}
              >
                Top Basmati{' '}
                Exporter in
                <br />
                 Pakistan
              </h1>

              {/* Description */}
              <p
                style={{
                  fontSize: '1.02rem',
                  fontWeight: '400',
                  color: 'rgba(255,255,255,0.74)',
                  lineHeight: '1.9',
                  maxWidth: '470px',
                  marginBottom: '2.2rem',
                }}
              >
                At BasmatiPak, we are grower, miller and exporter of the premium
                variety of rice from Pakistan. We also deal in Organic Basmati
                and parboiled rice types for our customers worldwide.
              </p>

              {/* Buttons */}
              <div className="d-flex gap-3 flex-wrap mb-5">

                {/* About Button */}
                <a
                  href="#"
                  className="btn d-flex align-items-center gap-2"
                  style={{
                    background: 'transparent',
                    border: '1.5px solid rgba(255,255,255,0.5)',
                    color: '#fff',
                    fontWeight: '700',
                    fontSize: '0.92rem',
                    borderRadius: '50px',
                    padding: '0.75rem 1.8rem',
                    backdropFilter: 'blur(8px)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    letterSpacing: '0.3px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      'rgba(255,255,255,0.12)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  About Us →
                </a>

                {/* Contact Button */}
                <a
                  href="#"
                  className="btn d-flex align-items-center gap-2"
                  style={{
                    background: '#467402',
                    border: '1.5px solid #5c8f0f',
                    color: '#ffffff',
                    
                    fontWeight: '700',
                    fontSize: '18px',
                    borderRadius: '50px',
                    padding: '0.75rem 1.8rem',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                    letterSpacing: '0.3px',
                    boxShadow: '0 10px 25px rgba(92,143,15,0.35)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#6da814';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#5c8f0f';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                 <span
  style={{
    fontSize: '1rem',
    filter: 'brightness(0) invert(1)',
    display: 'inline-block',
  }}
>
  📞
</span>

                  Contact Us
                </a>
              </div>

              {/* Rice Categories */}
              <div
                style={{
                  paddingTop: '10px',
                  borderTop: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                <RiceCategories />
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-7 col-md-6 d-none d-md-block">
            <div
              style={{
                position: 'relative',
                height: '800px',
              }}
            >

              {/* Main Image */}
              <div
                style={{
                  position: 'absolute',
                  top: '8%',
                  left: '30%',
                  transform: 'translate(-50%, -50%)',
                  width: '442px',
                  height: '581px',
                  borderRadius: '30px',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
                  backdropFilter: 'blur(10px)',
                  animation: 'slideInRight 0.9s ease forwards',
                }}
              >
                <img
                  src="hero_section_image2.png"
                  alt="Basmati Rice"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />

                {/* Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.35) 100%)',
                  }}
                />
              </div>

              {/* Export Stats Card */}
              <div
                style={{
                  position: 'absolute',
                  top: '95px',
                  left: '120px',
                  zIndex: 10,
                }}
              >
                <ExportStatsCard />
              </div>

              {/* Nutrition Card */}
              <div
                style={{
                  position: 'absolute',
                  top: '140px',
                  right: '-15px',
                  zIndex: 10,
                 
                }}
              >
                <NutritionalCard />
              </div>

              {/* Features Badge */}
              <div
                style={{
                  position: 'absolute',
                 bottom: '95px',
left: '44%',
                  transform: 'translateX(-50%)',
                  zIndex: 10,
                  whiteSpace: 'nowrap',
                }}
              >
                <FeaturesBadge />
              </div>

            </div>
          </div>

        </div>
      </div>
       
          
    </section>
    
  );
};

export default HeroSection;