import React from 'react';
import { FaPhoneAlt, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        background: '#4e7b06',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        marginTop: '120px',
        clipPath: 'polygon(0 0%, 100% 8%, 100% 100%, 0% 100%)',
      }}
    >

      {/* Top CTA Section */}
      <div
        className="container text-center"
        style={{
          paddingTop: '120px',
          paddingBottom: '90px',
        }}
      >

        {/* Badge */}
        <div className="mb-4">

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.12)',
              padding: '8px 18px',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: '600',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            🕐 We are Ready 24 Hours
          </span>

        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: '2.3rem',
            fontWeight: 'bold',
            lineHeight: '1.3',
            marginBottom: '24px',
            fontFamily: "'Inter', sans-serif",
            maxWidth: '850px',
            marginInline: 'auto',
          }}
        >
          Looking for Quality Rice? Let us know the grain
          type and quantity you need!
        </h2>

        {/* Text */}
        <p
          style={{
            fontSize: '1.08rem',
            color: 'rgba(255,255,255,0.82)',
            marginBottom: '42px',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          We look forward to assisting you with your rice purchase
          and ensuring you get the best quality!
        </p>

        {/* Button */}
        <a
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            background: '#759642',
            color: '#ffffff',
            padding: '10px 18px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '1rem',
            fontFamily: "'Inter', sans-serif",
            transition: '0.3s ease',
          }}
        >
          Contact Us

          <span
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#ffffff',
              color: '#4e7b06',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
            }}
          >
            <FaPhoneAlt />
          </span>

        </a>

      </div>

      {/* Footer Main */}
      <div
        className="container"
        style={{
          paddingBottom: '60px',
        }}
      >

        <div className="row gy-5">

          {/* Logo + Text */}
          <div className="col-lg-4">

            <img
              src="/logo_image.png"
              alt="Logo"
              style={{
                width: '220px',
                marginBottom: '22px',
              }}
            />

            <p
              style={{
                maxWidth: '320px',
                lineHeight: '1.9',
                color: 'rgba(255,255,255,0.88)',
                fontSize: '1rem',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Your Trusted rice exporter committed to the best quality and
              global customer satisfaction.
            </p>

          </div>

          {/* Useful Links */}
          <div className="col-lg-2">

            <h5
              style={{
                fontWeight: '600',
                marginBottom: '28px',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Useful Links
            </h5>

            <div
              className="d-flex flex-column"
              style={{
                gap: '14px',
              }}
            >

              {['About', 'Services', 'Blog'].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontSixe:"1rem",
                    color: 'rgba(255,255,255,0.82)',
                    textDecoration: 'none',
                    fontFamily: "'Inter', sans-serif",
                    transition: '0.3s',
                  }}
                >
                  {item}
                </a>
              ))}

            </div>

          </div>

          {/* Support */}
          <div className="col-lg-2" style={{paddingLeft: '40px'}}>

            <h5
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '28px',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Support
            </h5>

            <div
              className="d-flex flex-column"
              style={{
                gap: '14px',
              }}
            >

              {['Privacy Policy', 'Terms & Condition', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    color: 'rgba(255,255,255,0.82)',
                    textDecoration: 'none',
                    fontFamily: "'Inter', sans-serif",
                    transition: '0.3s',
                  }}
                >
                  {item}
                </a>
              ))}

            </div>

          </div>

          {/* Contact */}
          <div className="col-lg-4 " style={{
    paddingLeft: '110px',
  }}>

            <h5
              style={{
                fontWeight: '600',
                marginBottom: '28px',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Get in Touch!
            </h5>

            <div
              style={{
                display: 'flex',
                fontSize:'1.02rem',
                fontWeight: '600',
                flexDirection: 'column',
                gap: '18px',
                color: 'rgba(255,255,255,0.88)',
                fontFamily: "'Inter', sans-serif",
                lineHeight: '1.8',
              }}
            >

              <div>
                <p>sales@basmatipakistan.com</p>
              </div>

              <div>
                <strong>Phone no.</strong>
                <br />
                +923111557744
              </div>

              <div>
                <strong>Address:</strong>
                <br />
                Office # 1, 1st Floor, Sheikh
                <br />
                Ehsan Building, Edward Road,
                <br />
                Lahore - Punjab, Pakistan
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.18)',
            marginTop: '70px',
            paddingTop: '28px',
          }}
        >

          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

            <p
              style={{
                margin: 0,
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.95rem',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              © Copyright 2024 Crafted by <span style={{color:'#2C4703'}}>WebsCare</span>. All rights reserved.
            </p>

            {/* Social */}
            <a
              href="#"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              <FaFacebookF />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;