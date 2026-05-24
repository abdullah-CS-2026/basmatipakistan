import React from 'react';

const articles = [
  {
    title:
      "A Complete Guide to Pakistan's Emerging Premium Sultan Basmati Rice Variety",
    image: '/Article_resources/Article_resources1.jpg',
    large: true,
  },
  {
    title:
      'The Growing Demand for Basmati Rice in the Middle East',
    image: '/Article_resources/Article_resources2.jpg',
  },
  {
    title:
      'How to Verify Basmati Rice Quality Before Placing a Bulk Order',
    image: '/Article_resources/Article_resources3.jpg',
  },
];

const ArticleResources = () => {
  return (
    <section
      style={{
        padding: '110px 0',
        background: '#ffffff',
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
              fontSize: '64px',
              fontWeight: '800',
              color: '#5b7f10',
              marginBottom: '20px',
              fontFamily: "'Nunito Sans', sans-serif",
              lineHeight: '1.2',
            }}
          >
            Take a look at our articles & resources
          </h2>

          <p
            style={{
              fontSize: '18px',
              color: '#4f566b',
              maxWidth: '850px',
              margin: '0 auto',
              lineHeight: '1.8',
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            Discover valuable insights and information about Basmati rice,
            its quality, and our commitment to excellence in rice exportation.
          </p>
        </div>

        {/* CONTENT */}
        <div className="row g-4">

          {/* LEFT BIG CARD */}
          <div className="col-lg-5">

            <div
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                overflow: 'hidden',
                border: '1px solid #e3e6ea',
                height: '100%',
                transition: '0.3s ease',
              }}
            >

              {/* IMAGE */}
              <img
                src={articles[0].image}
                alt={articles[0].title}
                style={{
                  width: '100%',
                  height: '340px',
                  objectFit: 'cover',
                }}
              />

              {/* CONTENT */}
              <div
                style={{
                  padding: '28px',
                  position: 'relative',
                  minHeight: '200px',
                }}
              >
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#517500',
                    lineHeight: '1.4',
                    fontFamily: "'Nunito Sans', sans-serif",
                    maxWidth: '85%',
                  }}
                >
                  {articles[0].title}
                </h3>

                {/* ARROW */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '30px',
                    right: '28px',
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: '1px solid #d9dee6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6d8f20',
                    fontSize: '20px',
                  }}
                >
                  ↗
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SMALL CARDS */}
          <div className="col-lg-7">

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '26px',
              }}
            >

              {[articles[1], articles[2]].map((article, index) => (
                <div
                  key={index}
                  style={{
                    background: '#ffffff',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #e3e6ea',
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: '190px',
                  }}
                >

                  {/* IMAGE */}
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{
                      width: '44%',
                      height: '190px',
                      objectFit: 'cover',
                    }}
                  />

                  {/* TEXT */}
                  <div
                    style={{
                      flex: 1,
                      padding: '30px',
                      position: 'relative',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        color: '#517500',
                        lineHeight: '1.5',
                        fontFamily: "'Nunito Sans', sans-serif",
                        maxWidth: '85%',
                      }}
                    >
                      {article.title}
                    </h3>

                    {/* ARROW */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '26px',
                        right: '26px',
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        border: '1px solid #d9dee6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#6d8f20',
                        fontSize: '20px',
                      }}
                    >
                      ↗
                    </div>

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

export default ArticleResources;