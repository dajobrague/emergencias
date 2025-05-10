import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { barOptions } from './ChartOptions';

const TruckChart = ({ timeFilter, onTruckTypeChange }) => {
  // Filtros adicionales
  const [cargoType, setCargoType] = useState('all');
  const [truckType, setTruckType] = useState('all');
  const [direction, setDirection] = useState('all');

  // Datos del gráfico
  const [truckData, setTruckData] = useState({
    labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
    datasets: [
      {
        label: 'Camiones',
        data: [5, 12, 25, 20, 18, 8],
        backgroundColor: 'rgba(255, 159, 64, 0.7)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  });

  // Manejar cambio en tipo de camión
  const handleTruckTypeChange = (e) => {
    const newType = e.target.value;
    setTruckType(newType);
    // Pasar el cambio al padre
    if (onTruckTypeChange) {
      onTruckTypeChange(newType);
    }
  };

  useEffect(() => {
    // Actualizar datos según el filtro de tiempo y otros filtros
    if (timeFilter === 'day') {
      setTruckData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Camiones',
            data: [5, 12, 25, 20, 18, 8],
            backgroundColor: 'rgba(255, 159, 64, 0.7)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
        ],
      });
    } else if (timeFilter === 'week') {
      // Aquí mantenemos los grupos horarios pero promediamos por día de la semana
      setTruckData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Lunes-Viernes',
            data: [8, 15, 30, 25, 22, 10],
            backgroundColor: 'rgba(255, 159, 64, 0.7)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            label: 'Fin de Semana',
            data: [3, 8, 15, 12, 10, 5],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      });
    } else if (timeFilter === 'month') {
      setTruckData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Semana 1-2',
            data: [10, 18, 35, 30, 25, 12],
            backgroundColor: 'rgba(255, 159, 64, 0.7)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            label: 'Semana 3-4',
            data: [8, 15, 32, 28, 20, 10],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      });
    } else if (timeFilter === 'year') {
      setTruckData({
        labels: ['00:00-04:00', '04:00-08:00', '08:00-12:00', '12:00-16:00', '16:00-20:00', '20:00-24:00'],
        datasets: [
          {
            label: 'Primer Semestre',
            data: [12, 22, 40, 35, 30, 15],
            backgroundColor: 'rgba(255, 159, 64, 0.7)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          },
          {
            label: 'Segundo Semestre',
            data: [15, 25, 45, 38, 32, 18],
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      });
    }

    // Aquí se podrían aplicar filtros adicionales basados en cargoType, truckType y direction
    // Este es un ejemplo simplificado, en una implementación real estos filtros
    // modificarían los datos mostrados en el gráfico
  }, [timeFilter, cargoType, truckType, direction]);

  // Opciones personalizadas para este gráfico
  const customBarOptions = {
    ...barOptions,
    plugins: {
      ...barOptions.plugins,
      title: {
        display: true,
        text: 'Cantidad de Camiones por Grupo Horario',
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Cantidad de Camiones</h2>
      </div>
      
      {/* Filtros adicionales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Carga
          </label>
          <select
            value={cargoType}
            onChange={(e) => setCargoType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="all">Todos</option>
            <option value="combustible">Combustible</option>
            <option value="lubricantes">Lubricantes</option>
            <option value="acido">Ácido</option>
            <option value="agua">Agua</option>
            <option value="residuos">Residuos</option>
            <option value="calviva">Cal Viva</option>
            <option value="catodos">Cátodos</option>
            <option value="otros">Otros</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Camión
          </label>
          <select
            value={truckType}
            onChange={handleTruckTypeChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="all">Todos</option>
            <option value="sustanciaspeligrosas">Sustancias Peligrosas</option>
            <option value="menor10m">Menor a 10 Metros</option>
            <option value="mayor10m">Mayor a 10 Metros</option>
            <option value="mop">MOP</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dirección
          </label>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="all">Todos</option>
            <option value="subida">Subida</option>
            <option value="bajada">Bajada</option>
          </select>
        </div>
      </div>
      
      <div className="h-64">
        <Bar data={truckData} options={customBarOptions} />
      </div>
    </div>
  );
};

export default TruckChart; 