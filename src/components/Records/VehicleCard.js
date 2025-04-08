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
      case 'mop':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  // Determinar el ícono y color del sentido (Subida o Bajada)
  const getDirectionStyle = (direction) => {
    switch (direction?.toLowerCase()) {
      case 'subida':
        return {
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          icon: 'arrow-up'
        };
      case 'bajada':
        return {
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
          icon: 'arrow-down'
        };
      default:
        return {
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          icon: 'truck'
        };
    }
  };

  // Obtener el ícono según el tipo de camión
  const getTruckIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'mayor a 10 metros':
        return 'ticket-alt';
      case 'menor a 10 metros':
        return 'check';
      case 'sustancias peligrosas':
        return 'exclamation-triangle';
      case 'mop':
        return 'hard-hat';
      default:
        return 'ticket-alt';
    }
  };

  const directionStyle = getDirectionStyle(vehicle.direction);
  const truckIcon = getTruckIcon(vehicle.type);

  return (
    <div className="flex items-start p-4 rounded-lg border border-gray-100 hover:shadow-sm hover:bg-gray-50 transition-all">
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className={`w-8 h-8 ${directionStyle.bgColor} ${directionStyle.textColor} rounded-full flex items-center justify-center mr-3`}>
              <i className={`fas fa-${truckIcon}`}></i>
            </div>
            <span className="text-sm font-semibold text-gray-800">{vehicle.operator}</span>
          </div>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{vehicle.time}</span>
        </div>
        
        <div className="flex items-center justify-between mt-3 pl-11">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
              <i className="fas fa-id-card mr-1"></i> {vehicle.license}
            </span>
            <span className={`text-xs font-medium px-2 py-1 rounded-md ${directionStyle.bgColor} ${directionStyle.textColor}`}>
              <i className={`fas fa-${directionStyle.icon} mr-1`}></i> {vehicle.direction}
            </span>
          </div>
          <span className={`text-xs font-medium px-2 py-1 rounded-md ${getTagStyle(vehicle.type)}`}>
            <i className={`fas fa-${truckIcon} mr-1`}></i> {vehicle.type}
          </span>
        </div>
        <div className="mt-2 pl-11">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm">
            <i className="fas fa-building mr-1"></i> {vehicle.company}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard; 