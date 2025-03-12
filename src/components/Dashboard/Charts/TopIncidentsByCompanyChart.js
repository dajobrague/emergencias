import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const TopIncidentsByCompanyChart = ({ timeFilter }) => {
  // Datos del gráfico
  const [chartData, setChartData] = useState({
    labels: ['Transportes ABC', 'Logística XYZ', 'Cargas Express', 'Minera Norte', 'Distribuidora Sur'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Actualizar datos según el filtro de tiempo
    if (timeFilter === 'day') {
      setChartData({
        labels: ['Transportes ABC', 'Logística XYZ', 'Cargas Express', 'Minera Norte', 'Distribuidora Sur'],
        datasets: [
          {
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
            ],
            borderColor: [
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      });
    } else if (timeFilter === 'week') {
      setChartData({
        labels: ['Transportes ABC', 'Logística XYZ', 'Cargas Express', 'Minera Norte', 'Distribuidora Sur'],
        datasets: [
          {
            data: [32, 24, 18, 16, 10],
            backgroundColor: [
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
            ],
            borderColor: [
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      });
    } else if (timeFilter === 'month') {
      setChartData({
        labels: ['Transportes ABC', 'Logística XYZ', 'Cargas Express', 'Minera Norte', 'Distribuidora Sur'],
        datasets: [
          {
            data: [28, 26, 22, 14, 10],
            backgroundColor: [
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
            ],
            borderColor: [
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      });
    } else if (timeFilter === 'year') {
      setChartData({
        labels: ['Transportes ABC', 'Logística XYZ', 'Cargas Express', 'Minera Norte', 'Distribuidora Sur'],
        datasets: [
          {
            data: [26, 24, 22, 18, 10],
            backgroundColor: [
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
            ],
            borderColor: [
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
      });
    }
  }, [timeFilter]);

  // Opciones para el gráfico de torta
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxWidth: 12,
          padding: 15,
          font: {
            size: 11
          }
        }
      },
      title: {
        display: true,
        text: 'Top 5 de Incidentes por Empresa',
        font: {
          size: 14,
          weight: 'bold'
        },
        padding: {
          top: 10,
          bottom: 15
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 10,
        titleFont: {
          size: 12
        },
        bodyFont: {
          size: 12
        },
        displayColors: true
      }
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Top 5 de Incidentes por Empresa</h2>
      </div>
      
      <div className="h-64">
        <Pie data={chartData} options={pieOptions} />
      </div>
    </div>
  );
};

export default TopIncidentsByCompanyChart; 