import React from 'react';

const certifications = [
  {
    image: '/Certifications/image1.png',
    title:
      'United States Department of Agriculture. Organic Certification',
  },
  {
    image: '/Certifications/image3.png',
    title: 'Karachi Chamber of Commerce',
  },
  {
    image: '/Certifications/image3.png',
    title: 'Member of Karachi Chambers of Commerce',
  },
  {
    image: '/Certifications/image4.png',
    title: 'FDA Registered Facility',
  },
  {
    image: '/Certifications/image5.png',
    title: 'Halal Certified for Food Management System',
  },
  {
    image: '/Certifications/image6.png',
    title: 'HACCP Certified for Food Safety Management',
  },
  {
    image: '/Certifications/image7.png',
    title: 'Eurofins Express DR. Specht Laboratorie',
  },
  {
    image: '/Certifications/image8.png',
    title: 'Pakistan Basmati Heritage Foundation',
  },
];

const Certifications = () => {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: '110px 0',
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#4d7c0f',
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            Certifications and Memberships
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="row g-0 border-top border-start">

          {certifications.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6 border-end border-bottom"
            >
              <div
                className="d-flex flex-column align-items-center justify-content-center text-center"
                style={{
                  minHeight: '150px',
                  padding: '25px 10px',
                  background: '#ffffff',
                  transition: 'all 0.3s ease',
                }}
              >

                {/* Logo */}
                <img
                  src={item.image}
                  alt={item.title}
                style={{
  width: '100%',
  maxWidth: '220px',
  height: '110px',
  objectFit: 'contain',
  marginBottom: '28px',
  transition: 'transform 0.3s ease',
}}
                />

                {/* Title */}
                <p
                  style={{
                    fontSize: '1.12rem',
fontWeight: '650',
lineHeight: '1.5',
                    color: '#000',
                    
                    margin: 0,
                    fontFamily: "'Nunito Sans', sans-serif",
                  }}
                >
                  {item.title}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;