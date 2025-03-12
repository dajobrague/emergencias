import React from 'react';

const Card = ({ title, children, icon, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-6 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-dark flex items-center mb-4">
          {icon && <i className={`${icon} text-primary mr-2`}></i>}
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default Card; 