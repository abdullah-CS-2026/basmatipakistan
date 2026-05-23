import React from 'react';

const FeaturesBadge = () => {
  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '60px',
        padding: '14px 22px',
        width: '320px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      }}
    >
      {/* First Feature */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '8px',
        }}
      >
        <img
          src="/ExportStatsCard/LongGrain.png"
          alt="Long Grain"
          style={{
            width: '15px',
            height: '15px',
            objectFit: 'contain',
            flexShrink: 0,
          }}
        />

        <span
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: '12px',
            fontWeight: '700',
            color: '#333',
            letterSpacing: '0.2px',
            lineHeight: '1.2',
          }}
        >
          DISTINCTIVE AROMA AND FLAVOR
        </span>
      </div>

      {/* Second Feature */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <img
          src="/ExportStatsCard/LongGrain.png"
          alt="Long Grain"
          style={{
            width: '15px',
            height: '15px',
            objectFit: 'contain',
            flexShrink: 0,
          }}
        />

        <span
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontSize: '12px',
            fontWeight: '700',
            color: '#333',
            letterSpacing: '0.2px',
            lineHeight: '1.2',
          }}
        >
          LONG GRAIN AND FLUFFINESS
        </span>
      </div>
    </div>
  );
};

export default FeaturesBadge;