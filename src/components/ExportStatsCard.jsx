import React from 'react';

const ExportStatsCard = () => {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderRadius: '14px',
        padding: '14px 18px',
        boxShadow: '0 8px 28px rgba(0,0,0,0.18)',
        minWidth: '180px',
        animation: 'floatCard 3.5s ease-in-out infinite',
      }}
    >
      <p
        style={{
          fontFamily: "'Nunito Sans', sans-serif",
          fontSize: '0.7rem',
          fontWeight: '700',
          color: '#2d6a2d',
          textTransform: 'uppercase',
          letterSpacing: '0.8px',
          margin: '0 0 8px 0',
        }}
      >
        Pakistan's Rice Export
      </p>
      {/* Mini bar chart */}
      <div className="d-flex align-items-end gap-1" style={{ height: '40px', marginBottom: '6px' }}>
        {[55, 70, 45, 80, 65, 90, 75].map((h, i) => (
          <div
            key={i}
            style={{
              width: '14px',
              height: `${h}%`,
              backgroundColor: i === 5 ? '#2d6a2d' : '#a8e063',
              borderRadius: '3px 3px 0 0',
              transition: 'height 0.3s',
            }}
          />
        ))}
      </div>
      <p
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.1rem',
          fontWeight: '700',
          color: '#1a3d1a',
          margin: 0,
        }}
      >
        619,359.29 MT
      </p>
    </div>
  );
};

export default ExportStatsCard;