import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const DangerousSubstancesChart = ({ timeFilter, truckType }) => {
  // Estado para almacenar los datos según el tipo de camión
  const [chartData, setChartData] = useState({
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
  });

  // Título dinámico según el tipo de camión
  const [chartTitle, setChartTitle] = useState('Total Anual Sustancias Peligrosas por Sentido 2020');

  useEffect(() => {
    // Actualizar datos según el tipo de camión seleccionado
    if (truckType === 'mayor10m') {
      setChartData({
        labels: ['00:00-01:59', '01:00-03:59', '02:00-07:59', '03:00-01:59', '04:00-04:59', '05:00-05:59', '21:00-21:59'],
        datasets: [
          {
            label: 'BAJADA',
            data: [4500, 1200, 100, 350, 10, 500, 5],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            tension: 0.1,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          },
          {
            label: 'SUBIDA',
            data: [320, 1800, 1450, 1700, 1500, 5, 2],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            tension: 0.1,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          },
        ],
      });
      setChartTitle('Total Anual Camiones Mayor a 10 metros por Sentido 2020');
    } else if (truckType === 'menor10m') {
      setChartData({
        labels: ['00:00-01:59', '01:00-03:59', '02:00-07:59', '03:00-01:59', '04:00-04:59', '05:00-05:59', '21:00-21:59'],
        datasets: [
          {
            label: 'BAJADA',
            data: [3200, 900, 60, 280, 4, 320, 1],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            tension: 0.1,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          },
          {
            label: 'SUBIDA',
            data: [250, 1500, 1200, 1400, 1200, 0, 0],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            tension: 0.1,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          },
        ],
      });
      setChartTitle('Total Anual Camiones Menor a 10 metros por Sentido 2020');
    } else if (truckType === 'mop') {
      setChartData({
        labels: ['00:00-01:59', '01:00-03:59', '02:00-07:59', '03:00-01:59', '04:00-04:59', '05:00-05:59', '21:00-21:59'],
        datasets: [
          {
            label: 'BAJADA',
            data: [2800, 800, 50, 220, 3, 280, 0],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            tension: 0.1,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          },
          {
            label: 'SUBIDA',
            data: [200, 1300, 1000, 1200, 1000, 0, 0],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            tension: 0.1,
            pointRadius: 4,
            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          },
        ],
      });
      setChartTitle('Total Anual Camiones MOP por Sentido 2020');
    } else {
      // Por defecto, mostrar datos de sustancias peligrosas
      setChartData({
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
      });
      setChartTitle('Total Anual Sustancias Peligrosas por Sentido 2020');
    }
  }, [truckType]);

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
        text: chartTitle,
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