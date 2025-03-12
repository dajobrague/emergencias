import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { doughnutOptions } from './ChartOptions';

const IncidentsVehicleChart = () => {
  const incidentsVehicleData = {
    labels: ['Camiones', 'Ambulancias', 'Vehículos Particulares', 'Otros'],
    datasets: [
      {
        label: 'Incidentes por Tipo de Vehículo',
        data: [35, 25, 22, 18],
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Incidentes por Tipo de Vehículo</h2>
      <div className="h-64 flex items-center justify-center">
        <div style={{ width: '80%', height: '80%' }}>
          <Doughnut data={incidentsVehicleData} options={doughnutOptions} />
        </div>
      </div>
    </div>
  );
};

export default IncidentsVehicleChart; 