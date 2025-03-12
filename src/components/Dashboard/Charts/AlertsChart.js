import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { doughnutOptions } from './ChartOptions';

const AlertsChart = () => {
  const alertsData = {
    labels: ['Críticas', 'Altas', 'Medias', 'Bajas'],
    datasets: [
      {
        label: 'Alertas',
        data: [12, 19, 25, 8],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(255, 159, 64, 0.7)',
          'rgba(255, 205, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Cantidad de Alertas</h2>
      <div className="h-64 flex items-center justify-center">
        <div style={{ width: '80%', height: '80%' }}>
          <Doughnut data={alertsData} options={doughnutOptions} />
        </div>
      </div>
    </div>
  );
};

export default AlertsChart; 