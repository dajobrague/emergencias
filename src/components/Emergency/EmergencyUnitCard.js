import React from 'react';

const EmergencyUnitCard = ({ unit }) => {
  // Función para obtener el color según el estado
  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'en-route': return 'bg-yellow-100 text-yellow-800';
      case 'maintenance': return 'bg-red-100 text-red-800';
      case 'busy': return 'bg-red-100 text-red-800';
      case 'on-duty': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Función para obtener el texto según el estado
  const getStatusText = (status) => {
    switch (status) {
      case 'available': return 'Disponible';
      case 'en-route': return 'En camino';
      case 'maintenance': return 'En reparación';
      case 'busy': return 'En servicio';
      case 'on-duty': return 'En servicio';
      default: return status;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative">
        <img 
          src={unit.image} 
          alt={unit.name} 
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/800x600?text=Imagen+no+disponible';
          }}
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(unit.status)}`}>
            {getStatusText(unit.status)}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{unit.name}</h3>
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
            <i className={`${unit.icon} text-blue-500`}></i>
          </div>
          <span className="text-sm text-gray-600">{unit.type}</span>
        </div>
        <p className="text-sm text-gray-500 mb-3">{unit.description}</p>
        <div className="border-t border-gray-100 pt-3">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              <span className="text-gray-500">ID: </span>
              <span className="font-medium">{unit.id}</span>
            </div>
            <button className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm transition-colors">
              Ver detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyUnitCard; 