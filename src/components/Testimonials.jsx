import React from 'react';

const testimonials = [
  {
    rating: '4.9',
    text:
      'Basmati rice from Pakistan stands out due to its commitment to reliable and timely delivery. I require a dependable source of high-quality rice, and their efficiency in meeting delivery deadlines has significantly improved the smooth operation of my business.',
    name: 'Waqas Anjum',
    username: '@Waqas Anjum',
    image: 'https://i.pravatar.cc/60?img=12',
  },
  {
    rating: '5.0',
    text:
      'Our experience with Basmati Pakistan has been excellent. Their efficiency and reliability in delivering high-quality, long-grain white rice give us confidence that they will continue to meet our business objectives.',
    name: 'John Doe',
    username: '@shana.mtw',
    image: 'https://i.pravatar.cc/60?img=15',
  },
  {
    rating: '5.0',
    text:
      'We’ve been purchasing Basmati rice from Basmati Pakistan for months, and their consistency quality and on-time delivery have exceeded our expectations. Their professionalism makes them a trusted partner for our business.',
    name: 'Warwick Blake',
    username: '@wrblake',
    image: 'https://i.pravatar.cc/60?img=18',
  },
  {
    rating: '5.0',
    text:
      'Basmati Pakistan has proven to be a reliable supplier of Basmati rice. Their commitment to delivering top-notch rice and their excellent customer support have been invaluable to our operations. Thank you for your outstanding service.',
    name: 'Neil Barnett',
    username: '@nedbarnett',
    image: 'https://i.pravatar.cc/60?img=20',
  },
  {
    rating: '4.8',
    text:
      'Our experience with Basmati Pakistan has been outstanding. The quality of their Basmati rice is exceptional, and their prompt delivery has consistently met our needs. We are very satisfied with their service.',
    name: 'Malcolm Miller',
    username: '@mc.miller',
    image: 'https://i.pravatar.cc/60?img=23',
  },
  {
    rating: '4.9',
    text:
      'BasmatiPakistan’s Basmati rice is consistently of high quality, and their service is exceptional. Their ability to meet our delivery requirements reliably has made them a preferred supplier for our company.',
    name: 'Tara Dean',
    username: '@tara.dean',
    image: 'https://i.pravatar.cc/60?img=25',
  },
];

const Testimonials = () => {
  return (
   <section
  style={{
    background: '#f3f4fb',
    padding: '160px 0 150px',
    overflow: 'hidden',
    position: 'relative',
    clipPath: 'polygon(0 6%, 100% 0%, 100% 94%, 0% 100%)',
  }}
>

      {/* Floating Emojis */}
      <div
        style={{
          position: 'absolute',
          top: '45px',
          left: '30%',
          fontSize: '4rem',
        }}
      >
        😀
      </div>

      <div
        style={{
          position: 'absolute',
          top: '52px',
          right: '30%',
          fontSize: '3.2rem',
        }}
      >
        🤩
      </div>


      <div className="container">

        {/* Badge */}
        <div className="text-center mb-3">

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#ffffff',
              border: '1px solid #ececec',
              borderRadius: '50px',
              padding: '7px 18px',
              fontSize: '0.85rem',
              color: '#7ba414',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
            }}
          >
            🏷 Positive feedback
          </span>

        </div>

        {/* Heading */}
        <div className="text-center mb-5">

          <h2
            style={{
              fontSize: '3.3rem',
              fontWeight: '700',
              color: '#4d7c0f',
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            See what our customer's saying
          </h2>

        </div>

        {/* Testimonials Grid */}
        <div className="row justify-content-center g-4">

          {/* Column 1 */}
          <div className="col-lg-3 d-flex flex-column gap-4">

            {/* Card 1 */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '14px',
                padding: '24px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                border: '1px solid #ececec',
              }}
            >

              <div
                style={{
                  color: '#7ba414',
                  fontWeight: '700',
                  marginBottom: '18px',
                  fontSize: '0.95rem',
                }}
              >
                {testimonials[0].rating}
                <span
                  style={{
                    color: '#777',
                    marginLeft: '4px',
                    fontWeight: '500',
                  }}
                >
                  Rated
                </span>

                <span
                  style={{
                    color: '#f5b301',
                    marginLeft: '10px',
                  }}
                >
                  ★★★★★
                </span>
              </div>

              <p
                style={{
                  color: '#6b7280',
                  fontSize: '0.98rem',
                  lineHeight: '1.9',
                  marginBottom: '28px',
                }}
              >
                {testimonials[0].text}
              </p>

              <div className="d-flex align-items-center gap-3">

                <img
                  src={testimonials[0].image}
                  alt=""
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />

                <div>

                  <h6
                    style={{
                      margin: 0,
                      color: '#4d7c0f',
                      fontWeight: '700',
                    }}
                  >
                    {testimonials[0].name}
                  </h6>

                  <small
                    style={{
                      color: '#9ca3af',
                    }}
                  >
                    {testimonials[0].username}
                  </small>

                </div>

              </div>

            </div>

            {/* Card 2 */}
            <div
              style={{
                background: '#ffffff',
                borderRadius: '14px',
                padding: '24px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                border: '1px solid #ececec',
              }}
            >

              <div
                style={{
                  color: '#7ba414',
                  fontWeight: '700',
                  marginBottom: '18px',
                  fontSize: '0.95rem',
                }}
              >
                {testimonials[3].rating}
                <span
                  style={{
                    color: '#777',
                    marginLeft: '4px',
                    fontWeight: '500',
                  }}
                >
                  Rated
                </span>

                <span
                  style={{
                    color: '#f5b301',
                    marginLeft: '10px',
                  }}
                >
                  ★★★★★
                </span>
              </div>

              <p
                style={{
                  color: '#6b7280',
                  fontSize: '0.98rem',
                  lineHeight: '1.9',
                  marginBottom: '28px',
                }}
              >
                {testimonials[3].text}
              </p>

              <div className="d-flex align-items-center gap-3">

                <img
                  src={testimonials[3].image}
                  alt=""
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />

                <div>

                  <h6
                    style={{
                      margin: 0,
                      color: '#4d7c0f',
                      fontWeight: '700',
                    }}
                  >
                    {testimonials[3].name}
                  </h6>

                  <small
                    style={{
                      color: '#9ca3af',
                    }}
                  >
                    {testimonials[3].username}
                  </small>

                </div>

              </div>

            </div>

          </div>

          {/* Column 2 */}
          <div
            className="col-lg-3 d-flex flex-column gap-4"
            style={{
              marginTop: '-40px',
            }}
          >

            {/* Card 3 */}
            {[testimonials[1], testimonials[4]].map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  padding: '24px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                  border: '1px solid #ececec',
                  marginTop: '40px',
                }}
              >

                <div
                  style={{
                    color: '#7ba414',
                    fontWeight: '700',
                    marginBottom: '18px',
                    fontSize: '0.95rem',
                  }}
                >
                  {item.rating}
                  <span
                    style={{
                      color: '#777',
                      marginLeft: '4px',
                      fontWeight: '500',
                    }}
                  >
                    Rated
                  </span>

                  <span
                    style={{
                      color: '#f5b301',
                      marginLeft: '10px',
                    }}
                  >
                    ★★★★★
                  </span>
                </div>

                <p
                  style={{
                    color: '#6b7280',
                    fontSize: '0.98rem',
                    lineHeight: '1.9',
                    marginBottom: '28px',
                  }}
                >
                  {item.text}
                </p>

                <div className="d-flex align-items-center gap-3">

                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                  />

                  <div>

                    <h6
                      style={{
                        margin: 0,
                        color: '#4d7c0f',
                        fontWeight: '700',
                      }}
                    >
                      {item.name}
                    </h6>

                    <small
                      style={{
                        color: '#9ca3af',
                      }}
                    >
                      {item.username}
                    </small>

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* Column 3 */}
          <div
            className="col-lg-3 d-flex flex-column gap-4"
            style={{
              marginTop: '12px',
            }}
          >

            {[testimonials[2], testimonials[5]].map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  borderRadius: '14px',
                  padding: '24px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                  border: '1px solid #ececec',
                }}
              >

                <div
                  style={{
                    color: '#7ba414',
                    fontWeight: '700',
                    marginBottom: '18px',
                    fontSize: '0.95rem',
                  }}
                >
                  {item.rating}
                  <span
                    style={{
                      color: '#777',
                      marginLeft: '4px',
                      fontWeight: '500',
                    }}
                  >
                    Rated
                  </span>

                  <span
                    style={{
                      color: '#f5b301',
                      marginLeft: '10px',
                    }}
                  >
                    ★★★★★
                  </span>
                </div>

                <p
                  style={{
                    color: '#6b7280',
                    fontSize: '0.98rem',
                    lineHeight: '1.9',
                    marginBottom: '28px',
                  }}
                >
                  {item.text}
                </p>

                <div className="d-flex align-items-center gap-3">

                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                  />

                  <div>

                    <h6
                      style={{
                        margin: 0,
                        color: '#4d7c0f',
                        fontWeight: '700',
                      }}
                    >
                      {item.name}
                    </h6>

                    <small
                      style={{
                        color: '#9ca3af',
                      }}
                    >
                      {item.username}
                    </small>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;