import React from 'react';
import { Bar } from 'react-chartjs-2';
import { barOptions } from './ChartOptions';

const IncidentsRouteChart = () => {
  const incidentsRouteData = {
    labels: ['G21', 'G245', 'Los Boldos', 'Las Tórtolas', 'Otros'],
    datasets: [
      {
        label: 'Incidentes por Ruta',
        data: [28, 22, 18, 15, 17],
        backgroundColor: 'rgba(153, 102, 255, 0.7)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Incidentes por Ruta</h2>
      <div className="h-64">
        <Bar data={incidentsRouteData} options={barOptions} />
      </div>
    </div>
  );
};

export default IncidentsRouteChart; 