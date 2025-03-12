import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { barOptions } from './ChartOptions';

const IncidentChart = ({ timeFilter }) => {
  // Filtros adicionales
  const [sector, setSector] = useState('all');
  const [route, setRoute] = useState('all');
  const [company, setCompany] = useState('all');
  const [incidentType, setIncidentType] = useState('all');

  // Datos del gráfico
  const [incidentData, setIncidentData] = useState({
    labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
    datasets: [
      {
        label: 'Incidentes',
        data: [3, 7, 15, 12, 10, 5],
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Actualizar datos según el filtro de tiempo y otros filtros
    if (timeFilter === 'day') {
      setIncidentData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Incidentes',
            data: [3, 7, 15, 12, 10, 5],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      });
    } else if (timeFilter === 'week') {
      setIncidentData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Lunes-Viernes',
            data: [5, 10, 18, 15, 12, 7],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Fin de Semana',
            data: [2, 5, 10, 8, 6, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      });
    } else if (timeFilter === 'month') {
      setIncidentData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Semana 1-2',
            data: [8, 15, 22, 18, 14, 10],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Semana 3-4',
            data: [6, 12, 20, 16, 13, 8],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      });
    } else if (timeFilter === 'year') {
      setIncidentData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Primer Semestre',
            data: [10, 18, 28, 24, 20, 12],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Segundo Semestre',
            data: [12, 20, 30, 26, 22, 14],
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      });
    }

    // Aquí se podrían aplicar filtros adicionales basados en sector, route, company e incidentType
    // Este es un ejemplo simplificado, en una implementación real estos filtros
    // modificarían los datos mostrados en el gráfico
  }, [timeFilter, sector, route, company, incidentType]);

  // Opciones personalizadas para este gráfico
  const customBarOptions = {
    ...barOptions,
    plugins: {
      ...barOptions.plugins,
      title: {
        display: true,
        text: 'Cantidad de Incidentes por Grupo Horario',
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Cantidad de Incidentes</h2>
      </div>
      
      {/* Filtros adicionales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
            <option value="norte">Norte</option>
            <option value="sur">Sur</option>
            <option value="este">Este</option>
            <option value="oeste">Oeste</option>
            <option value="central">Central</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ruta
          </label>
          <select
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="all">Todas</option>
            <option value="g21">G21</option>
            <option value="g245">G245</option>
            <option value="boldos">Los Boldos</option>
            <option value="tortolas">Las Tórtolas</option>
            <option value="otras">Otras</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Empresa
          </label>
          <select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="all">Todas</option>
            <option value="transportes_abc">Transportes ABC</option>
            <option value="logistica_xyz">Logística XYZ</option>
            <option value="cargas_express">Cargas Express</option>
            <option value="minera_norte">Minera Norte</option>
            <option value="otras">Otras</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Incidencia
          </label>
          <select
            value={incidentType}
            onChange={(e) => setIncidentType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="all">Todos</option>
            <option value="accidente">Accidente</option>
            <option value="averia">Avería</option>
            <option value="emergencia_medica">Emergencia Médica</option>
            <option value="exceso_velocidad">Exceso de Velocidad</option>
            <option value="desvio_ruta">Desvío de Ruta</option>
            <option value="otros">Otros</option>
          </select>
        </div>
      </div>
      
      <div className="h-64">
        <Bar data={incidentData} options={customBarOptions} />
      </div>
    </div>
  );
};

export default IncidentChart; 