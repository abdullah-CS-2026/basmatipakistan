import React from 'react';
import {
  FaSeedling,
  FaBoxOpen,
  FaShippingFast,
} from 'react-icons/fa';

const services = [
  {
    title: 'Milling',
    description:
      'With our precision milling and stringent quality control, we guarantee that our Basmati rice maintains its exceptional quality and flavor.',
    icon: <FaSeedling />,
    color: '#5f830f',
    bg: '#e8f1da',
  },
  {
    title: 'Packaging',
    description:
      'Our customized packaging solutions ensure that our Basmati rice remains fresh and protected during transport.',
    icon: <FaBoxOpen />,
    color: '#ff7b00',
    bg: '#ffe8d5',
  },
  {
    title: 'Shipping',
    description:
      'Our reliable logistics network, coupled with real-time tracking, ensures timely and safe delivery of Basmati rice.',
    icon: <FaShippingFast />,
    color: '#39d12f',
    bg: '#e7f8e5',
  },
];

const FeaturedServices = () => {
  return (
    <section
      style={{
        padding: '110px 0',
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">

          <h2
            style={{
              fontSize: '3.3rem',
              fontWeight: '700',
              color: '#4d7c0f',
              marginBottom: '24px',
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            Our Featured Services
          </h2>

          <p
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              color: '#6b7280',
              fontSize: '1.06rem',
              lineHeight: '1.9',
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            We offer comprehensive services tailored for rice exporters,
            including meticulous packaging, reliable shipping, and expert
            milling to ensure the highest quality Basmati rice reaches our
            customers worldwide.
          </p>

        </div>

        {/* Main Row */}
        <div className="row align-items-center g-5">

          {/* LEFT IMAGES */}
          <div className="col-lg-5">

            <div
              className="d-flex flex-column"
              style={{
                gap: '18px',
                paddingLeft: '30px',
              }}
            >

              {/* Top Image */}
              <div
                style={{
                  width: '205px',
                  height: '132px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '5px solid #ffffff',
                  boxShadow: '0 8px 22px rgba(0,0,0,0.10)',
                  marginLeft: '0px',
                }}
              >
                <img
                  src="/FeaturedServices/image1.jpg"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Middle Image */}
              <div
                style={{
                  width: '210px',
                  height: '132px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '5px solid #ffffff',
                  boxShadow: '0 8px 22px rgba(0,0,0,0.10)',
                  marginLeft: '85px',
                }}
              >
                <img
                  src="/FeaturedServices/image2.png"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Bottom Image */}
              <div
                style={{
                  width: '205px',
                  height: '132px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '5px solid #ffffff',
                  boxShadow: '0 8px 22px rgba(0,0,0,0.10)',
                  marginLeft: '0px',
                }}
              >
                <img
                  src="/FeaturedServices/image3.png"
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

            </div>

          </div>

          {/* RIGHT SERVICES */}
          <div className="col-lg-7">

            <div className="d-flex flex-column gap-4">

              {services.map((service, index) => (
  <div
    key={index}
    style={{
      background: '#ffffff',
      border: '1px solid #e6e9ef',
      borderRadius: '16px',
      padding: '26px 28px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '18px',
      boxShadow: '0 3px 10px rgba(0,0,0,0.02)',
      marginLeft: index === 1 ? '80px' : '0',
    }}
  >

                  {/* Icon */}
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: service.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: service.color,
                      fontSize: '1.1rem',
                      flexShrink: 0,
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div>

                    <h4
                      style={{
                        fontSize: '1.55rem',
                        fontWeight: '700',
                        color: service.color,
                        marginBottom: '10px',
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      {service.title}
                    </h4>

                    <p
                      style={{
                        color: '#5f6775',
                        fontSize: '1rem',
                        lineHeight: '1.8',
                        margin: 0,
                        maxWidth: '500px',
                        fontFamily: "'Nunito Sans', sans-serif",
                      }}
                    >
                      {service.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedServices;