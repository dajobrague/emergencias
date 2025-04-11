import React from 'react';

const LatestIncidents = () => {
  // Últimos incidentes
  const latestIncidents = [
    { id: 'INC-001', type: 'Accidente', location: 'Ruta G21 Km 34', vehicles: 'Camión y vehículo particular', time: '11:15 AM' },
    { id: 'INC-002', type: 'Avería', location: 'Los Bronces', vehicles: 'Ambulancia 01', time: '10:05 AM' },
    { id: 'INC-003', type: 'Emergencia Médica', location: 'Las Tórtolas', vehicles: 'N/A', time: '09:22 AM' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Últimos Incidentes</h2>
      <div className="space-y-4">
        {latestIncidents.map(incident => (
          <div key={incident.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3 flex-shrink-0">
                <i className="fas fa-exclamation-triangle text-yellow-500"></i>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <h3 className="font-medium text-gray-800">{incident.type}</h3>
                  <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    {incident.location}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  <span className="mr-3">{incident.vehicles}</span>
                  <span>{incident.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Ver todos los incidentes
        </button>
      </div>
    </div>
  );
};

export default LatestIncidents; 