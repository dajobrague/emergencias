import React from 'react';

const ServiceCard = ({ title, description, icon, iconClass, buttonClass, url }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 transition-all hover:-translate-y-1 hover:shadow-md flex flex-col h-full">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 text-xl ${
        iconClass === 'icon-wisetrack' ? 'bg-blue-50 text-blue-600' :
        iconClass === 'icon-teletrac' ? 'bg-green-50 text-green-600' :
        iconClass === 'icon-explork' ? 'bg-purple-50 text-purple-600' :
        'bg-orange-50 text-orange-600'
      }`}>
        <i className={icon}></i>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-xs mb-4 flex-grow">{description}</p>
      
      <a 
        href={url} 
        target="_blank"
        rel="noopener noreferrer"
        className={`py-2 px-3 rounded-lg text-white text-center text-sm font-medium transition-colors ${
          buttonClass === 'teletrac' ? 'bg-green-600 hover:bg-green-700' :
          buttonClass === 'gauss' ? 'bg-orange-500 hover:bg-orange-600' :
          buttonClass === 'explork' ? 'bg-purple-600 hover:bg-purple-700' :
          'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        <i className="fas fa-external-link-alt mr-1"></i>
        Iniciar Servicio
      </a>
    </div>
  );
};

export default ServiceCard; 