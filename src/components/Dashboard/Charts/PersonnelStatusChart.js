import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { doughnutOptions } from './ChartOptions';

const PersonnelStatusChart = () => {
  const personnelStatusData = {
    labels: ['Activos', 'En Servicio', 'En Permiso', 'Inactivos'],
    datasets: [
      {
        label: 'Estado del Personal',
        data: [42, 18, 7, 3],
        backgroundColor: [
          'rgba(75, 192, 192, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 205, 86, 0.7)',
          'rgba(255, 99, 132, 0.7)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Estado del Personal</h2>
      <div className="h-64 flex items-center justify-center">
        <div style={{ width: '80%', height: '80%' }}>
          <Doughnut data={personnelStatusData} options={doughnutOptions} />
        </div>
      </div>
    </div>
  );
};

export default PersonnelStatusChart; 