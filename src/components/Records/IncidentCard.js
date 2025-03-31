import React from 'react';

const IncidentCard = ({ incident }) => {
  // Determinar el ícono y color basado en el tipo de incidente
  const getIconAndColor = (type) => {
    switch (type.toLowerCase()) {
      case 'accidente':
        return {
          icon: 'exclamation-triangle',
          color: 'text-yellow-500',
          bgColor: 'bg-yellow-100'
        };
      case 'avería':
        return {
          icon: 'tools',
          color: 'text-yellow-500',
          bgColor: 'bg-yellow-100'
        };
      case 'emergencia médica':
        return {
          icon: 'ambulance',
          color: 'text-yellow-500', 
          bgColor: 'bg-yellow-100'
        };
      default:
        return {
          icon: 'exclamation-circle',
          color: 'text-yellow-500',
          bgColor: 'bg-yellow-100'
        };
    }
  };

  const { icon, color, bgColor } = getIconAndColor(incident.type);

  return (
    <div className="flex items-start space-x-3 p-4 rounded-lg border border-gray-100 hover:shadow-sm hover:bg-gray-50 transition-all">
      <div className={`flex-shrink-0 ${bgColor} w-10 h-10 rounded-full flex items-center justify-center ${color}`}>
        <i className={`fas fa-${icon}`}></i>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-sm font-semibold text-gray-800">{incident.type}</h4>
            <p className="text-xs font-medium text-gray-500 mt-1">{incident.location}</p>
          </div>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{incident.time}</span>
        </div>
        <p className="mt-2 text-xs text-gray-600">{incident.details}</p>
      </div>
    </div>
  );
};

export default IncidentCard; 