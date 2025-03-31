import React from 'react';
import { Line } from 'react-chartjs-2';

const DangerousSubstancesChart = ({ timeFilter }) => {
  // Datos del gráfico
  const chartData = {
    labels: ['00:00-01:59', '01:00-03:59', '02:00-07:59', '03:00-01:59', '04:00-04:59', '05:00-05:59', '21:00-21:59'],
    datasets: [
      {
        label: 'BAJADA',
        data: [5959, 1133, 73, 310, 6, 435, 1],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        tension: 0.1,
        pointRadius: 4,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      },
      {
        label: 'SUBIDA',
        data: [290, 1766, 1390, 1686, 1411, 0, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        tension: 0.1,
        pointRadius: 4,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  // Opciones para el gráfico
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Anual Sustancias Peligrosas por Sentido 2020',
        font: {
          size: 16,
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
          font: {
            size: 12,
          },
        },
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="h-80">
        <Line data={chartData} options={lineOptions} />
      </div>
    </div>
  );
};

export default DangerousSubstancesChart; 