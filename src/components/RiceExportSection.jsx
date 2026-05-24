import React from 'react';

const exportSteps = [
  'Customer Demand',
  'Sample Dispatch',
  'Freight Cost Calculation',
  'Quotation Preparation',
  'Packaging Confirmation',
  'Shipment and Delivery',
];

const RiceExportSection = () => {
  return (
    <section
      style={{
        padding: '110px 0',
        background: '#f8f8f8',
      }}
    >
      <div className="container">
        <div className="row align-items-stretch g-5">

          {/* LEFT IMAGE GRID */}
          <div
  className="col-lg-6 d-flex align-items-stretch"
>

            <div
  className="row g-3 h-100"
  style={{
    minHeight: '100%',
  }}
>

              {/* Image 1 */}
              <div className="col-4">
                <img
                  src="/RiceExportsSection/ER-image1.png"
                  alt=""
                  style={{
                    width: '100%',
                    height: '290px',
                    objectFit: 'cover',
                    borderRadius: '14px',
                  }}
                />
              </div>

              {/* Image 2 */}
              <div className="col-4">
                <img
                  src="/RiceExportsSection/ERimage2.png"
                  alt=""
                  style={{
                    width: '100%',
                    height: '290px',
                    objectFit: 'cover',
                    borderRadius: '14px',
                  }}
                />
              </div>

              {/* Image 3 */}
              <div className="col-4">
                <img
                  src="/RiceExportsSection/ERimage3.png"
                  alt=""
                  style={{
                    width: '100%',
                    height: '290px',
                    objectFit: 'cover',
                    borderRadius: '14px',
                  }}
                />
              </div>

              {/* Image 4 */}
              <div className="col-4">
                <img
                  src="/RiceExportsSection/ERimage4.png"
                  alt=""
                  style={{
                    width: '100%',
                    height: '290px',
                    objectFit: 'cover',
                    borderRadius: '14px',
                  }}
                />
              </div>

              {/* Image 5 */}
              <div className="col-4">
                <img
                  src="/RiceExportsSection/ERimage5.png"
                  alt=""
                  style={{
                    width: '100%',
                    height: '290px',
                    objectFit: 'cover',
                    borderRadius: '14px',
                  }}
                />
              </div>

              {/* Image 6 */}
              <div className="col-4">
                <img
                  src="/RiceExportsSection/ERimage6.png"
                  alt=""
                  style={{
                    width: '100%',
                    height: '290px',
                    objectFit: 'cover',
                    borderRadius: '14px',
                  }}
                />
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">

            {/* Small Heading */}
            <p
              style={{
                color: '#5d8d16',
                fontSize: '1.2rem',
                fontWeight: '500',
                marginBottom: '18px',
                
              }}
            >
              From Sourcing to Delivery
            </p>

            {/* Main Heading */}
            <h2
              style={{
                fontSize: '3.5rem',
                fontWeight: '700',
                lineHeight: '1.2',
                color: '#4d7c0f',
                marginBottom: '28px',
                
              }}
            >
              Rice Exports at Your Doorstep
            </h2>

            {/* Description */}
            <p
              style={{
                color: '#6b7280',
                fontSize: '1.28rem',
                lineHeight: '1.8',
                marginBottom: '40px',
                
              }}
            >
              We distinguish ourselves as one of the top basmati exporter
              of Pakistan. Our extensive international market reflects our
              commitment to fulfilling diverse customers.
            </p>

            {/* Features */}
            <div className="row mb-5">

              {exportSteps.map((step, index) => (
                <div
                  key={index}
                  className="col-md-6 mb-4"
                >
                  <div className="d-flex align-items-center gap-3">

                    {/* Icon */}
                    <div
                      style={{
                        width: '45px',
                        height: '40px',
                        borderRadius: '50%',
                        background:
                          index % 2 === 0
                            ? 'rgba(164,198,57,0.18)'
                            : 'rgba(255,193,7,0.18)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color:
                          index % 2 === 0
                            ? '#7ba414'
                            : '#f59e0b',
                        fontWeight: '700',
                        fontSize: '1rem',
                      }}
                    >
                      ✓
                    </div>

                    {/* Text */}
                    <span
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: '500',
                        color: '#4d7c0f',
                        
                      }}
                    >
                      {step}
                    </span>

                  </div>
                </div>
              ))}

            </div>

            {/* Bottom Area */}
            <div
              className="d-flex align-items-center justify-content-between flex-wrap"
              style={{
                borderTop: '1px solid #dcdcdc',
                paddingTop: '35px',
                gap: '20px',
              }}
            >

              {/* Button */}
              <a
                href="#"
                style={{
                  background: '#7ba414',
                  color: '#fff',
                  padding: '18px 42px',
                  borderRadius: '50px',
                  fontSize: '1.15rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  
                  transition: '0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Explore More
              </a>

              {/* Contact */}
              <div className="d-flex align-items-center gap-3">

                {/* Profile Image */}
                <img
                  src="/RiceExportsSection/ERimage5.png"
                  alt=""
                  style={{
                    width: '62px',
                    height: '62px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />

                {/* Contact Text */}
                <div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '1rem',
                      color: '#6b7280',
                      fontWeight: '500',
                    }}
                  >
                    Or Call Us
                  </p>

                  <h5
                    style={{
                      margin: 0,
                      color: '#5d8d16',
                      fontWeight: '700',
                      fontSize: '1.6rem',
                    }}
                  >
                    +923111557744
                  </h5>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RiceExportSection;