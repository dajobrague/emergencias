import React from 'react';

const PanelHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    </div>
  );
};

export default PanelHeader; 