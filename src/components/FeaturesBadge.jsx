import React from 'react';

const FeaturesBadge = () => {
  return (
    <div
      style={{
        background: 'rgba(45, 106, 45, 0.92)',
        backdropFilter: 'blur(10px)',
        borderRadius: '50px',
        padding: '10px 18px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        animation: 'floatCard 3s ease-in-out infinite 1s',
      }}
    >
      <div className="d-flex align-items-center gap-2">
        <span style={{ fontSize: '10px', color: '#a8e063' }}>●</span>
        <span
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: '0.72rem',
            fontWeight: '700',
            color: '#fff',
            letterSpacing: '0.5px',
          }}
        >
          Distinctive Aroma and Flavor
        </span>
      </div>
      <div
        style={{
          width: '1px',
          height: '14px',
          background: 'rgba(255,255,255,0.3)',
        }}
      />
      <div className="d-flex align-items-center gap-2">
        <span style={{ fontSize: '10px', color: '#a8e063' }}>●</span>
        <span
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: '0.72rem',
            fontWeight: '700',
            color: '#fff',
            letterSpacing: '0.5px',
          }}
        >
          Long Grain and Fluffiness
        </span>
      </div>
    </div>
  );
};

export default FeaturesBadge;