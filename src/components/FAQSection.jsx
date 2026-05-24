import React, { useState } from 'react';

const faqData = [
  {
    question: 'Which variety of basmati rice is best?',
    answer:
      '1121 Basmati Rice is considered one of the finest varieties due to its extra long grains, rich aroma, and premium export quality.',
  },
  {
    question: 'What are the different varieties of Basmati rice?',
    answer:
      'Popular varieties include 1121 Basmati, Super Kernel Basmati, PK 385, Brown Basmati, Organic Basmati, and Sella Rice.',
  },
  {
    question: 'What rice varieties do you offer for export?',
    answer:
      'We export White Rice, Steam Rice, Sella Rice, Organic Basmati Rice, Brown Rice, and Extra Long Grain Rice worldwide.',
  },
  {
    question: 'Are there any certifications required for rice export?',
    answer:
      'Yes, certifications such as FDA, HACCP, ISO, Organic Certification, and Phytosanitary Certificates are often required.',
  },
  {
    question: 'What packaging options are available for Basmati rice?',
    answer:
      'We provide customized packaging including 1kg, 5kg, 10kg, 25kg, and 50kg bags with private labeling options.',
  },
  {
    question: 'What is the minimum order quantity for rice exports?',
    answer:
      'The minimum order quantity depends on destination and packaging requirements, but container-based orders are preferred.',
  },
  {
    question: 'Do you provide samples of your rice before ordering?',
    answer:
      'Yes, we provide product samples to help buyers verify rice quality before placing bulk export orders.',
  },
  {
    question: 'Where is most of the basmati rice grown in Pakistan?',
    answer:
      'Most Basmati rice in Pakistan is grown in Punjab region due to its fertile soil and favorable climate.',
  },
  {
    question: 'What are the storage recommendations for rice?',
    answer:
      'Rice should be stored in a cool, dry place away from direct sunlight and moisture to maintain freshness.',
  },
  {
    question: 'Can you handle large-scale rice export orders?',
    answer:
      'Yes, we specialize in handling large-scale international rice export orders with efficient logistics support.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        background: '#ffffff',
        padding: '55px 0 40px',
      }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-4">

          <h2
            style={{
              fontSize: '48px',
              fontWeight: '600',
              lineHeight: '1.1',
              color: '#4d7c0f',
              fontFamily: "'Inter', sans-serif",
              marginBottom: '10px',
            }}
          >
            Frequently Asked Questions
          </h2>

        </div>

        {/* FAQ Grid */}
        <div className="row g-3">

          {faqData.map((item, index) => (
            <div
              key={index}
              className="col-lg-6"
            >

              <div
  style={{
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    background: '#ffffff',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    height: '100%',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
  }}
>

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    background: '#ffffff',
                    border: 'none',
                    padding: '20px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                >

                  <span
                    style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#557d07',
                      textAlign: 'left',
                      lineHeight: '1.5',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {item.question}
                  </span>

                  <span
                    style={{
                      color: '#557d07',
                      fontSize: '18px',
                      marginLeft: '20px',
                      transition: '0.3s ease',
                      transform:
                        openIndex === index
                          ? 'rotate(90deg)'
                          : 'rotate(0deg)',
                    }}
                  >
                    →
                  </span>

                </button>

                {/* Answer */}
                <div
                  style={{
                    maxHeight:
                      openIndex === index
                        ? '300px'
                        : '0px',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    background: '#ffffff',
borderTop: '1px solid #f1f5f9',
                  }}
                >

                  <p
                    style={{
                      padding: '0 22px 22px',
                      margin: 0,
                      color: '#6b7280',
                      fontSize: '14px',
                      lineHeight: '1.7',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {item.answer}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQSection;