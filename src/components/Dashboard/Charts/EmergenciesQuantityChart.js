import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { barOptions } from './ChartOptions';

const EmergenciesQuantityChart = ({ timeFilter }) => {
  // Filtros adicionales
  const [sector, setSector] = useState('all');
  const [company, setCompany] = useState('all');
  const [emergencyType, setEmergencyType] = useState('all');
  const [operator, setOperator] = useState('all');

  // Datos del gráfico
  const [emergenciesData, setEmergenciesData] = useState({
    labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
    datasets: [
      {
        label: 'Emergencias',
        data: [2, 5, 12, 10, 8, 4],
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Actualizar datos según el filtro de tiempo y otros filtros
    if (timeFilter === 'day') {
      setEmergenciesData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Emergencias',
            data: [2, 5, 12, 10, 8, 4],
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
    } else if (timeFilter === 'week') {
      setEmergenciesData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Lunes-Viernes',
            data: [4, 8, 15, 12, 10, 6],
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Fin de Semana',
            data: [2, 4, 8, 6, 5, 3],
            backgroundColor: 'rgba(255, 205, 86, 0.7)',
            borderColor: 'rgba(255, 205, 86, 1)',
            borderWidth: 1,
          },
        ],
      });
    } else if (timeFilter === 'month') {
      setEmergenciesData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Semana 1-2',
            data: [6, 12, 18, 15, 12, 8],
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Semana 3-4',
            data: [5, 10, 16, 14, 10, 7],
            backgroundColor: 'rgba(255, 205, 86, 0.7)',
            borderColor: 'rgba(255, 205, 86, 1)',
            borderWidth: 1,
          },
        ],
      });
    } else if (timeFilter === 'year') {
      setEmergenciesData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Primer Semestre',
            data: [8, 15, 22, 18, 15, 10],
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'Segundo Semestre',
            data: [10, 18, 25, 20, 16, 12],
            backgroundColor: 'rgba(255, 205, 86, 0.7)',
            borderColor: 'rgba(255, 205, 86, 1)',
            borderWidth: 1,
          },
        ],
      });
    }

    // Aquí se podrían aplicar filtros adicionales basados en sector, company, emergencyType y operator
    // Este es un ejemplo simplificado, en una implementación real estos filtros
    // modificarían los datos mostrados en el gráfico
  }, [timeFilter, sector, company, emergencyType, operator]);

  // Opciones personalizadas para este gráfico
  const customBarOptions = {
    ...barOptions,
    plugins: {
      ...barOptions.plugins,
      title: {
        display: true,
        text: 'Cantidad de Emergencias por Grupo Horario',
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Cantidad de Emergencias</h2>
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
            <option value="lastortolas">Las Tórtolas</option>
            <option value="mineroducto">Mineroducto</option>
            <option value="rutag21g245">Ruta G21 y G245</option>
            <option value="losbronces">Camino Internacional Los Bronces</option>
            <option value="interiormina">Interior Mina</option>
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
            <option value="resiter">RESITER</option>
            <option value="sotraser">SOTRASER</option>
            <option value="copec">COPEC</option>
            <option value="transcargo">TRANSCARGO</option>
            <option value="geobarra">GEOBARRA</option>
            <option value="transnavarro">TRANSPORTE NAVARRO</option>
            <option value="transbello">TRANSPORTE BELLO</option>
            <option value="enaex">ENAEX</option>
            <option value="transportebsm">TRANSPORTE BSM</option>
            <option value="elis">ELIS</option>
            <option value="besalco">BESALCO</option>
            <option value="otros">OTROS</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Emergencia
          </label>
          <select
            value={emergencyType}
            onChange={(e) => setEmergencyType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="all">Todas</option>
            <option value="accidente_vehicular">Accidente Vehicular</option>
            <option value="incendio">Incendio</option>
            <option value="derrame">Derrame</option>
            <option value="emergencia_medica">Emergencia Médica</option>
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
        <Bar data={emergenciesData} options={customBarOptions} />
      </div>
    </div>
  );
};

export default EmergenciesQuantityChart; 