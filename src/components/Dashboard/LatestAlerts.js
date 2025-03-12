import React from 'react';

const LatestAlerts = () => {
  // Últimas alertas
  const latestAlerts = [
    { id: 'ALT-001', type: 'Crítica', description: 'Exceso de velocidad en ruta G21', vehicle: 'Camión 03', time: '10:25 AM' },
    { id: 'ALT-002', type: 'Alta', description: 'Desvío de ruta programada', vehicle: 'Ambulancia 02', time: '09:48 AM' },
    { id: 'ALT-003', type: 'Media', description: 'Tiempo de inactividad prolongado', vehicle: 'Camión 05', time: '08:30 AM' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Últimas Alertas</h2>
      <div className="space-y-4">
        {latestAlerts.map(alert => (
          <div key={alert.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3 flex-shrink-0">
                <i className="fas fa-bell text-red-500"></i>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <h3 className="font-medium text-gray-800">{alert.description}</h3>
                  <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    {alert.type}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  <span className="mr-3">{alert.vehicle}</span>
                  <span>{alert.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
          Ver todas las alertas
        </button>
      </div>
    </div>
  );
};

export default LatestAlerts; 