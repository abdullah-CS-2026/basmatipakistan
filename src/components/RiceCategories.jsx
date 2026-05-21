import React from 'react';

const categories = [
  { label: 'Long Grain Basmati', icon: '🌾' },
  { label: 'Organic Basmati Rice', icon: '🌿' },
  { label: 'Parboiled Basmati Rice', icon: '🍚' },
];

const RiceCategories = () => {
  return (
    <div className="d-flex gap-4 flex-wrap mt-4">
      {categories.map((cat) => (
        <div
          key={cat.label}
          className="d-flex flex-column align-items-center text-center"
          style={{ cursor: 'pointer' }}
        >
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              marginBottom: '8px',
              transition: 'all 0.25s',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(168,224,99,0.25)';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {cat.icon}
          </div>
          <span
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: '0.76rem',
              fontWeight: '600',
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '90px',
              lineHeight: '1.3',
            }}
          >
            {cat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RiceCategories;