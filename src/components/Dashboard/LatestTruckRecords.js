import React from 'react';
import { useNavigate } from 'react-router-dom';

const LatestTruckRecords = () => {
  const navigate = useNavigate();

  // Datos de ejemplo para los últimos registros de camiones
  const truckRecords = [
    {
      id: 1,
      type: 'MAYOR A 10 METROS',
      operator: 'FRANCISCO HERRADA',
      company: 'SOTRASER',
      license: 'PYWH62',
      direction: 'SUBIDA',
      time: '21:00'
    },
    {
      id: 2,
      type: 'MENOR A 10 METROS',
      operator: 'RANDALL GARCES',
      company: 'RESITER',
      license: 'RRGV95',
      direction: 'SUBIDA',
      time: '21:05'
    },
    {
      id: 3,
      type: 'MAYOR A 10 METROS',
      operator: 'HUGO CARRASCO',
      company: 'T. NAVARRO',
      license: 'RXDX27',
      direction: 'BAJADA',
      time: '22:00'
    }
  ];

  // Función para obtener el icono adecuado según el tipo
  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'mayor a 10 metros':
        return 'ticket-alt';
      case 'menor a 10 metros':
        return 'check';
      case 'sustancias peligrosas':
        return 'exclamation-triangle';
      default:
        return 'ticket-alt';
    }
  };

  // Función para obtener el estilo de dirección
  const getDirectionStyle = (direction) => {
    return direction.toLowerCase() === 'subida' ? 'up' : 'down';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Últimos Registro de Camiones</h2>
      <div className="space-y-3">
        {truckRecords.map(record => (
          <div key={record.id} className="flex items-start p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
              <i className={`fas fa-${getIcon(record.type)} text-green-500 text-xs`}></i>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800">{record.operator}</h3>
                  <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 font-semibold rounded-lg text-xs">
                    <i className="fas fa-building mr-1"></i> {record.company}
                  </span>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {record.time}
                </span>
              </div>
              <div className="flex items-center text-sm mt-2">
                <div className="flex items-center text-gray-500 mr-4">
                  <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md mr-2">
                    <i className="fas fa-id-card mr-1"></i> {record.license}
                  </span>
                  <i className={`fas fa-arrow-${getDirectionStyle(record.direction)} text-xs mr-1.5`}></i>
                  <span>{record.direction}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <span className="text-xs font-medium bg-amber-100 text-amber-800 px-2 py-1 rounded-md">
                    <i className={`fas fa-${getIcon(record.type)} mr-1`}></i> {record.type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button 
          onClick={() => navigate('/records-panel')}
          className="text-sm text-blue-600 hover:text-blue-800 inline-flex items-center bg-transparent border-none cursor-pointer"
        >
          <span>Ver todos los registros</span>
          <i className="fas fa-chevron-right ml-1 text-xs"></i>
        </button>
      </div>
    </div>
  );
};

export default LatestTruckRecords; 