import React from 'react';

const PopularProducts = () => {
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
              fontSize: '3.6rem',
              fontWeight: '700',
              color: '#4d7c0f',
              marginBottom: '22px',
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            Popular Products for Export
          </h2>

          <p
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              color: '#6b7280',
              fontSize: '1.15rem',
              lineHeight: '1.9',
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            We offer a diverse range of basmati rice varieties, each renowned
            for its quality and flavor. These popular choices are known for
            their exceptional quality and consistency, making them ideal for
            export.
          </p>

        </div>

        {/* Products Row */}
        <div className="row justify-content-center g-4 mb-5">

          {/* LEFT CARD */}
         {/* LEFT CARD */}
<div className="col-lg-6">

  <div
    className="product-card"
    style={{
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      height: '290px',
      boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
      cursor: 'pointer',
    }}
  >

    {/* Original Image */}
    <img
      src="/Popular_Products/image1.png"
      alt="Basmati Rice"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
      }}
    />

    {/* Hover Overlay */}
    <div 
      className="product-overlay"
     style={{
  position: 'absolute',
  inset: 0,
  background: 'rgba(118,154,22,0.78)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translateY(-100%)',
  transition: 'transform 0.45s ease',
}}
ref={(el) => {
  if (el) {
    const parent = el.parentElement;

    parent.onmouseenter = () => {
      el.style.transform = 'translateY(0)';
    };

    parent.onmouseleave = () => {
      el.style.transform = 'translateY(-100%)';
    };
  }
}}
    >

      <h3
        style={{
          color: '#ffffff',
          fontSize: '3rem',
          fontWeight: '700',
          margin: 0,
          fontFamily: "'Nunito Sans', sans-serif",
        }}
      >
        Basmati Rice
      </h3>

    </div>

  </div>
</div>

          {/* RIGHT CARD */}
        {/* RIGHT CARD */}
<div className="col-lg-6">

  <div
    className="product-card"
    style={{
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      height: '290px',
      boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
      cursor: 'pointer',
    }}
  >

    {/* Original Image */}
    <img
      src="/Popular_Products/image2.png"
      alt="Organic Basmati Rice"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
      }}
    />

    {/* Hover Overlay */}
    <div
      className="product-overlay"
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(118,154,22,0.78)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translateY(-100%)',
        transition: 'transform 0.45s ease',
      }}
      ref={(el) => {
        if (el) {
          const parent = el.parentElement;

          parent.onmouseenter = () => {
            el.style.transform = 'translateY(0)';
          };

          parent.onmouseleave = () => {
            el.style.transform = 'translateY(-100%)';
          };
        }
      }}
    >

      <h3
        style={{
          color: '#ffffff',
          fontSize: '2.6rem',
          fontWeight: '700',
          margin: 0,
          textAlign: 'center',
          padding: '0 20px',
          fontFamily: "'Nunito Sans', sans-serif",
        }}
      >
        Organic Basmati Rice
      </h3>

    </div>

  </div>

</div>

        </div>

        {/* Button */}
        <div className="text-center">

          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#86a82d',
              color: '#ffffff',
              padding: '18px 42px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontWeight: '700',
              fontFamily: "'Nunito Sans', sans-serif",
              transition: '0.3s ease',
              boxShadow: '0 10px 24px rgba(0,0,0,0.14)',
            }}
          >
            Explore More
          </a>

        </div>

      </div>
    </section>
  );
};

export default PopularProducts;