import React, { useEffect, useRef, useState } from 'react';

const countries = [
  {
    name: 'Egypt',
    image: '/ExportingCountries/Egypt.png',
  },
  {
    name: 'Libya',
    image: '/ExportingCountries/Libya.png',
  },
  {
    name: 'Kuwait',
    image: '/ExportingCountries/Kuwait.png',
  },
  {
    name: 'Iraq',
    image: '/ExportingCountries/Iraq.png',
  },
  {
    name: 'Oman',
    image: '/ExportingCountries/Oman.png',
  },
  {
    name: 'Qatar',
    image: '/ExportingCountries/Qatar.png',
  },
  {
    name: 'Saudi Arabia',
    image: '/ExportingCountries/Saudia.png',
  },
  {
    name: 'UAE',
    image: '/ExportingCountries/UAE.png',
  },
  {
    name: 'Yemen',
    image: '/ExportingCountries/Yemen.png',
  },
];

const ExportingCountries = () => {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '120px 0',
        background: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <div className="container">

        {/* HEADING */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '80px',
          }}
        >
          <h2
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#5b7f10',
              marginBottom: '20px',
              
            }}
          >
            Top Exporting Countries
          </h2>
        </div>

        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">

            <p
              style={{
                fontSize: '16px',
                fontWeight: '400',
                textAlign:'justify',
                lineHeight: '2',
                color: '#4f566b',
                maxWidth: '600px',
                fontFamily: "'Nunito Sans', sans-serif",
              }}
            >
              Basmati rice, renowned for its unique aroma and long grains,
              is primarily exported by countries like India and Pakistan,
              which dominate the global market. Other significant exporters
              include Bangladesh and Nepal. These countries capitalize on
              the growing international demand for basmati, especially in
              regions like the Middle East, Europe, and North America.
            </p>

          </div>

          {/* RIGHT SIDE SLIDER */}
          <div className="col-lg-6">

            <div
              style={{
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
              }}
            >

              {/* SLIDER TRACK */}
              <div
                style={{
                  display: 'flex',
                  gap: '7px',
                  width: 'max-content',
                  animation: startAnimation
                    ? 'smoothSlider 10s linear infinite'
                    : 'none',
                }}
              >

                {[...countries, ...countries].map((country, index) => (
                  <div
                    key={index}
                    style={{
                      minWidth: '230px',
                      background: '#ffffff',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                    }}
                  >

                    {/* FLAG */}
                    <img
                      src={country.image}
                      alt={country.name}
                      style={{
                        width: '100%',
                        height: '150px',
                        objectFit: 'cover',
                      }}
                    />

                  </div>
                ))}

              </div>

              {/* ANIMATION */}
              <style>
                {`
                  @keyframes smoothSlider {
                    0% {
                      transform: translateX(0);
                    }

                    100% {
                      transform: translateX(-50%);
                    }
                  }
                `}
              </style>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ExportingCountries;