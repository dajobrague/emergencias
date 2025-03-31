import React from 'react';
import { useNavigate } from 'react-router-dom';

const LatestTruckRecords = () => {
  const navigate = useNavigate();

  // Datos de ejemplo para los últimos registros de camiones
  const truckRecords = [
    {
      id: 1,
      type: 'Mayor a 10 Metros',
      vehicle: 'SOT/RASER',
      direction: 'Subida',
      time: '21:15',
      status: 'Ruta',
      statusClass: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: 2,
      type: 'Menor a 10 Metros',
      vehicle: 'SOT/RASER',
      direction: 'Bajada',
      time: '22:40',
      status: 'Mantención',
      statusClass: 'bg-green-100 text-green-800'
    },
    {
      id: 3,
      type: 'Sustancias Peligrosas',
      vehicle: 'GEDABRA',
      direction: 'Bajada',
      time: '00:00',
      status: 'Completado',
      statusClass: 'bg-yellow-100 text-yellow-800'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Últimos Registro de Camiones</h2>
      <div className="space-y-3">
        {truckRecords.map(record => (
          <div key={record.id} className="flex items-start p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
              <i className="fas fa-check text-green-500 text-xs"></i>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800">{record.type}</h3>
                  <p className="text-sm text-gray-600">{record.vehicle}</p>
                </div>
                <span className={`px-2 py-0.5 text-xs rounded-full ${record.statusClass}`}>
                  {record.status}
                </span>
              </div>
              <div className="flex items-center text-sm mt-1">
                <div className="flex items-center text-gray-500 mr-4">
                  <i className="fas fa-arrow-up-right-from-square text-xs mr-1.5"></i>
                  <span>{record.direction}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <i className="far fa-clock text-xs mr-1.5"></i>
                  <span>{record.time}</span>
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