import React, { useEffect, useRef, useState } from 'react';


const features = [
  {
    id: 1,
    icon: '/whychooseus/wcu1.png',
    title: 'We ensure highest quality of Basmati Rice',
    desc: 'Our commitment is to provide high quality rice with extra-long grains that retain superior texture and flavor. We maintain the highest export standards in Pakistan to ensure premium quality.',
    highlight: false,
  },
  {
    id: 2,
    icon: '/whychooseus/wcu2.png',
    title: 'Offering a range of premium Basmati varietes',
    desc: 'As a leading rice supplier and top exporter from Pakistan, we deliver high-quality wide range of Basmati varieties. Committed to quality and excellence, we deliver products that meet global standards.',
    highlight: false,
  },
  {
    id: 3,
    icon: '/whychooseus/wcu3.png',
    title: 'Your trusted partner in consistent supply',
    desc: 'Our reliable supply chain ensures consistent availability of top quality rice for your needs. Our commitment to timely delivery and quality guarantees customer satisfaction.',
    highlight: false,
  },
  {
    id: 4,
    icon: '/whychooseus/wcu4.png',
    title: 'End to end complete export solutions',
    desc: 'From the selection of growers to careful process of milling, we provide custom packaging and shipping solutions to our valuable customers.',
    highlight: false,
  },
  {
    id: 5,
    icon: '/whychooseus/wcu5.png',
    title: 'Globally registered and accredited exporter',
    desc: 'We are accredited by export authorities worldwide. Our process follows best practices in packaging, transportation, and distribution, making us a reliable partner.',
    highlight: false,
  },
  {
    id: 6,
    icon: '🚀',
    title: 'Strong Export Networks',
    desc: 'Our strong export networks enable us to supply rice to clients across the globe easily. We pride ourselves on fast, reliable exports to meet global demand.',
    highlight: true,
    cta: "Don't miss out",
  },
];

const FeatureCard = ({ feature, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  if (feature.highlight) {
    return (
      <div
        ref={ref}
        className="col-lg-4 col-md-6 mb-4"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
          transition: `opacity 0.6s ease ${
            index * 0.1
          }s, transform 0.6s ease ${index * 0.1}s`,
        }}
      >
        <div
          style={{
            background:
              'linear-gradient(145deg, #1e4d1e 0%, #2d6a2d 60%, #3a8a3a 100%)',
            borderRadius: '18px',
            padding: '2rem',
            height: '100%',
            minHeight: '220px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(45,106,45,0.35)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'rgba(168,224,99,0.12)',
            }}
          />

          <div
            style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-20px',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: '800',
                color: '#fff',
                marginBottom: '1rem',
                lineHeight: '1.3',
              }}
            >
              {feature.title}
            </h3>

            <p
              style={{
                fontSize: '0.88rem',
                color: 'rgba(255,255,255,0.78)',
                lineHeight: '1.7',
                marginBottom: '1.5rem',
              }}
            >
              {feature.desc}
            </p>
          </div>

          <button
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1.5px solid rgba(255,255,255,0.35)',
              color: '#fff',
              fontWeight: '700',
              fontSize: '0.85rem',
              borderRadius: '50px',
              padding: '0.55rem 1.4rem',
              cursor: 'pointer',
              alignSelf: 'flex-start',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.25s',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {feature.cta}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="col-lg-4 col-md-6 mb-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${
          index * 0.1
        }s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '18px',
          padding: '2rem',
          height: '100%',
          minHeight: '220px',
          border: '1px solid rgba(45,106,45,0.08)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          transition: 'all 0.3s ease',
          cursor: 'default',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.boxShadow =
            '0 16px 48px rgba(45,106,45,0.14)';
          e.currentTarget.style.borderColor =
            'rgba(45,106,45,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow =
            '0 4px 24px rgba(0,0,0,0.06)';
          e.currentTarget.style.borderColor =
            'rgba(45,106,45,0.08)';
        }}
      >
        {/* Image Icon */}
      <div
  style={{
    width: '62px',
    height: '62px',
    borderRadius: '50%',
    background:
      feature.id === 1
        ? '#e8f1ff'
        : feature.id === 2
        ? '#fff1e8'
        : feature.id === 3
        ? '#eaf8ee'
        : feature.id === 4
        ? '#f3e8ff'
        : '#ffeaea',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.2rem',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
  }}
>
  <img
    src={feature.icon}
    alt=""
    style={{
      width: '34px',
      height: '34px',
      objectFit: 'contain',
    }}
  />
</div>

        <h3
          style={{
            fontSize: '1.05rem',
            fontWeight: '700',
            color: '#2d6a2d',
            marginBottom: '0.75rem',
            lineHeight: '1.4',
          }}
        >
          {feature.title}
        </h3>

        <p
          style={{
            fontSize: '0.85rem',
            color: '#666',
            lineHeight: '1.75',
            margin: 0,
          }}
        >
          {feature.desc}
        </p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) observer.observe(headerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
       
        padding: '6rem 0 5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(45,106,45,0.04) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(168,224,99,0.06) 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div
          ref={headerRef}
          className="text-center mb-5"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible
              ? 'translateY(0)'
              : 'translateY(24px)',
            transition:
              'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
              fontWeight: '600',
              color: '#467302',
              marginBottom: '1rem',
              letterSpacing: '-0.3px',
            }}
          >
            Why to Choose BasmatiPak?
          </h2>

          <p
            style={{
              fontSize: '1rem',
              fontWeight: '400',
              color: '#555864',
              maxWidth: '1100px',
              margin: '0 auto',
              lineHeight: '1.75',
            }}
          >
            Being the largest Basmati rice exporter in the country,
            we proudly serve diverse international market demands.
            Our standards are well aligned with global quality
            benchmarks.
          </p>
        </div>

        <div className="row">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;