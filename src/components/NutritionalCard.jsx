import React from 'react';

const nutritionData = [
  { label: 'Protein', value: '4.4g', percent: 44 },
  { label: 'Copper', value: '12%', percent: 12 },
  { label: 'Folate', value: '24%', percent: 24 },
  { label: 'Magnesium', value: '5%', percent: 5 },
  { label: 'Vitamin B1', value: '22%', percent: 22 },
  { label: 'Iron', value: '11%', percent: 11 },
  { label: 'Phosphorous', value: '6%', percent: 6 },
  { label: 'Zinc', value: '7%', percent: 7 },
];

const NutritionalCard = () => {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.94)',
        backdropFilter: 'blur(14px)',
        borderRadius: '14px',
        padding: '14px 16px',
        boxShadow: '0 10px 32px rgba(0,0,0,0.2)',
        minWidth: '200px',
        animation: 'floatCard 4s ease-in-out infinite 0.5s',
      }}
    >
      <div className="d-flex align-items-center justify-content-between mb-2">
        <p
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: '0.68rem',
            fontWeight: '800',
            color: '#2d6a2d',
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            margin: 0,
          }}
        >
          Nutritional Values of
          <br />
          Basmati Rice
        </p>
        <div
          style={{
            background: '#2d6a2d',
            borderRadius: '8px',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <span style={{ color: '#fff', fontSize: '14px' }}>⇄</span>
        </div>
      </div>

      {nutritionData.map((item) => (
        <div key={item.label} className="d-flex align-items-center justify-content-between mb-1">
          <span
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '0.68rem',
              color: '#555',
              fontWeight: '600',
              minWidth: '80px',
            }}
          >
            {item.label}
          </span>
          <div
            style={{
              flex: 1,
              height: '4px',
              background: '#e8f5e3',
              borderRadius: '4px',
              margin: '0 8px',
            }}
          >
            <div
              style={{
                width: `${item.percent * 2}%`,
                height: '100%',
                background: '#2d6a2d',
                borderRadius: '4px',
                maxWidth: '100%',
              }}
            />
          </div>
          <span
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '0.68rem',
              color: '#2d6a2d',
              fontWeight: '700',
              minWidth: '30px',
              textAlign: 'right',
            }}
          >
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default NutritionalCard;