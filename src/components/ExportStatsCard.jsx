import React from 'react';

const ExportStatsCard = () => {
  return (
    <div
    style={{
  background: '#ffffff',
  borderRadius: '12px',
  padding: '4px',
  width: '220px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.18)',
  marginTop: '60px',
  border: '3px solid white',
}}
    >
    <img
  src="/ExportStatsCard/PakistanRiceExport.png"
  alt="Pakistan Rice Export"
  style={{
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'contain',
    border: '3px solid #ffffff',
    borderRadius: '8px',
    padding: '3px',
    background: '#ffffff',
  }}
/>
    </div>
  );
};

export default ExportStatsCard;