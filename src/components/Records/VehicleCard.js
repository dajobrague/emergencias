import React from 'react';

const VehicleCard = ({ vehicle }) => {
  // Determinar la etiqueta y color basado en el tipo de vehículo
  const getTagStyle = (type) => {
    switch (type.toLowerCase()) {
      case 'mayor a 10 metros':
        return 'bg-amber-100 text-amber-800';
      case 'menor a 10 metros':
        return 'bg-green-100 text-green-800';
      case 'sustancias peligrosas':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  // Determinar el ícono y color del estado
  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case 'activo':
        return {
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          icon: 'check-circle'
        };
      case 'mantenimiento':
        return {
          bgColor: 'bg-amber-100',
          textColor: 'text-amber-800',
          icon: 'tools'
        };
      case 'construcción':
        return {
          bgColor: 'bg-orange-100',
          textColor: 'text-orange-800',
          icon: 'hard-hat'
        };
      default:
        return {
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          icon: 'circle'
        };
    }
  };

  const statusStyle = getStatusStyle(vehicle.status);

  return (
    <div className="flex items-start p-4 rounded-lg border border-gray-100 hover:shadow-sm hover:bg-gray-50 transition-all">
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className={`w-8 h-8 ${statusStyle.bgColor} ${statusStyle.textColor} rounded-full flex items-center justify-center mr-3`}>
              <i className={`fas fa-${statusStyle.icon}`}></i>
            </div>
            <span className="text-sm font-semibold text-gray-800">{vehicle.operator}</span>
          </div>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{vehicle.time}</span>
        </div>
        
        <div className="flex items-center justify-between mt-3 pl-11">
          <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
            <i className="fas fa-id-card mr-1"></i> {vehicle.license}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded-md ${getTagStyle(vehicle.type)}`}>
            {vehicle.type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard; 