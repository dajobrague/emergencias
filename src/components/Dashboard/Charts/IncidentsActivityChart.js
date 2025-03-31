import React from 'react';
import { Bar } from 'react-chartjs-2';

const IncidentsActivityChart = ({ timeFilter }) => {
  // Datos para el gráfico
  const chartData = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Incidentes',
        data: [7, 14, 9, 11, 18, 14, 12],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Opciones para el gráfico
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Actividad por Período',
        font: {
          size: 14,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          precision: 0,
          font: {
            size: 12,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Cantidad de Incidentes</h2>
      <div className="h-64">
        <Bar data={chartData} options={barOptions} />
      </div>
    </div>
  );
};

export default IncidentsActivityChart; 