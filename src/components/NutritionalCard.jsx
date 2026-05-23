import React from 'react';

const NutritionalCard = () => {
  return (
    <div
      style={{
        position: 'relative',
        marginTop: '130px',
        background: '#ffffff',
        borderRadius: '12px',
        height:"230px",
        width: '185px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      }}
    >

      {/* TOP RIGHT ICON */}
      <div
        style={{
          position: 'absolute',
          top: '-18px',
          right: '-18px',
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: '#1d1e2f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
        }}
      >
        <span
          style={{
            color: '#29ff9b',
            fontSize: '22px',
            fontWeight: 'bold',
          }}
        >
          ⇄
        </span>
      </div>

      {/* IMAGE */}
      <img
        src="/ExportStatsCard/NutritionalValue.png"
        alt="Nutritional Value"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'contain',
          borderRadius: '12px',
        }}
      />
    </div>
  );
};

export default NutritionalCard;