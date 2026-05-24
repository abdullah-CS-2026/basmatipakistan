import React from 'react';

const features = [
  'Long, aromatic grains',
  'Organic and chemical-free',
  'Certified for quality and authenticity',
  'Multiple varieties: White, Brown, and Parboiled',
];

const PremiumOrganicBasmati = () => {
  return (
    <section
      style={{
        background: '#2f5200',
        padding: '110px 0',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">

            {/* Heading */}
            <h2
              style={{
                color: '#ffffff',
                fontSize: '42px',
                fontWeight: '600',
                lineHeight: '1.15',
                marginBottom: '28px',
                fontFamily: "'Inter', sans-serif",
                maxWidth: '650px',
              }}
            >
              Premium Organic Basmati
              <br />
              Rice from Pakistan
            </h2>

            {/* Description */}
            <p
              style={{
                color: 'rgba(255,255,255,0.88)',
                fontSize: '16px',
                lineHeight: '1.5',
                marginBottom: '42px',
                 fontFamily: "'Inter', sans-serif",
                maxWidth: '640px',
                textAlign: 'justify',
                fontWeight: '500',
                textAlign:'justify',
              }}
            >
              Pakistan is renowned for producing some of the finest Organic
              Basmati rice, grown in the fertile Punjab region at the foothills
              of the Himalayas. Our organic Basmati rice varieties, including
              Organic Brown Basmati Rice, Organic White Basmati Rice, Organic
              Parboiled Basmati Rice, Organic 1121 White Basmati Rice, Organic
              Extra Long Grain Basmati Brown Rice are known for their long
              grains, rich aroma, and exceptional taste. Certified organic by
              Control Union Certifications, we adhere to the highest standards
              to bring you chemical-free, naturally fragrant rice perfect for
              your dining experience. We proudly export our premium Basmati
              rice to international markets, ensuring that customers worldwide
              can enjoy its unique flavor.
            </p>

            {/* Features */}
            <div className="mb-5">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center mb-4"
                >

                  {/* Dot */}
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      marginRight: '22px',
                      position: 'relative',
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '-18px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '2px',
                        height: '18px',
                        background:
                          index === 0
                            ? 'transparent'
                            : 'rgba(255,255,255,0.55)',
                      }}
                    />

                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-18px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '2px',
                        height:
                          index === features.length - 1
                            ? '0'
                            : '18px',
                        background: 'rgba(255,255,255,0.55)',
                      }}
                    />
                  </div>

                  {/* Text */}
                  <span
                    style={{
                      color: '#ffffff',
                      fontSize: '1.08rem',
                      fontWeight: '500',
                       fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {feature}
                  </span>

                </div>
              ))}

            </div>

            {/* Button */}
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#a7c957',
                color: '#ffffff',
                padding: '18px 38px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontWeight: '700',
                 fontFamily: "'Inter', sans-serif",
                transition: '0.3s ease',
                boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
              }}
            >
              Get a Quote
            </a>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 d-flex" style={{
   
    marginBottom: '15px',
  }} >

  <div
    style={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    }}
  >

    {/* Image Frame */}
    <div
      style={{
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        borderRadius: '22px',
        overflow: 'hidden',
        border: '4px solid rgba(255,255,255,0.12)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.28)',
      }}
    >
      <img
        src="/Premium_Organic_Basmati/image1.jpg"
        alt="Premium Organic Basmati"
        style={{
          width: '100%',
          height: '100%',
          minHeight: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>

  </div>

</div>

        </div>
      </div>
    </section>
  );
};

export default PremiumOrganicBasmati;