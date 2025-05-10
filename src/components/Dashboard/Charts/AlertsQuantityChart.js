import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { barOptions } from './ChartOptions';

const AlertsQuantityChart = ({ timeFilter }) => {
  // Filtros adicionales
  const [sector, setSector] = useState('all');
  const [alertType, setAlertType] = useState('all');
  const [operator, setOperator] = useState('all');

  // Datos del gráfico
  const [alertsData, setAlertsData] = useState({
    labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
    datasets: [
      {
        label: 'Alertas',
        data: [4, 8, 18, 15, 12, 6],
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Actualizar datos según el filtro de tiempo y otros filtros
    if (timeFilter === 'day') {
      setAlertsData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Alertas',
            data: [4, 8, 18, 15, 12, 6],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      });
    } else if (timeFilter === 'week') {
      setAlertsData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Lunes-Viernes',
            data: [6, 12, 22, 18, 15, 8],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Fin de Semana',
            data: [3, 6, 14, 10, 8, 4],
            backgroundColor: 'rgba(153, 102, 255, 0.7)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          },
        ],
      });
    } else if (timeFilter === 'month') {
      setAlertsData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Semana 1-2',
            data: [10, 16, 25, 20, 18, 12],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Semana 3-4',
            data: [8, 14, 22, 18, 15, 10],
            backgroundColor: 'rgba(153, 102, 255, 0.7)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          },
        ],
      });
    } else if (timeFilter === 'year') {
      setAlertsData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Primer Semestre',
            data: [12, 20, 32, 26, 22, 15],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Segundo Semestre',
            data: [14, 22, 35, 28, 24, 16],
            backgroundColor: 'rgba(153, 102, 255, 0.7)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          },
        ],
      });
    }

    // Aquí se podrían aplicar filtros adicionales basados en sector, alertType y operator
    // Este es un ejemplo simplificado, en una implementación real estos filtros
    // modificarían los datos mostrados en el gráfico
  }, [timeFilter, sector, alertType, operator]);

  // Opciones personalizadas para este gráfico
  const customBarOptions = {
    ...barOptions,
    plugins: {
      ...barOptions.plugins,
      title: {
        display: true,
        text: 'Cantidad de Alertas por Grupo Horario',
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Cantidad de Alertas</h2>
      </div>
      
      {/* Filtros adicionales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sector
          </label>
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="all">Todos</option>
            <option value="lastortolas">Las Tórtolas</option>
            <option value="mineroducto">Mineroducto</option>
            <option value="rutag21g245">Ruta G21 y G245</option>
            <option value="losbronces">Camino Internacional Los Bronces</option>
            <option value="interiormina">Interior Mina</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Alerta
          </label>
          <select
            value={alertType}
            onChange={(e) => setAlertType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="all">Todas</option>
            <option value="critica">Crítica</option>
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Operador de Turno
          </label>
          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="all">Todos</option>
            <option value="jaime_astroza">Jaime Astroza</option>
            <option value="francisco_cortes">Francisco Cortés</option>
            <option value="jose_riquelme">José Riquelme</option>
            <option value="pablo_cima">Pablo Cima</option>
            <option value="carlos_bravo">Carlos Bravo</option>
            <option value="mario_guajardo">Mario Guajardo</option>
            <option value="luis_cuello">Luis Cuello</option>
            <option value="luis_carrasco">Luis Carrasco</option>
          </select>
        </div>
      </div>
      
      <div className="h-64">
        <Bar data={alertsData} options={customBarOptions} />
      </div>
    </div>
  );
};

export default AlertsQuantityChart; 