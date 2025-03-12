import React from 'react';

const FilterPanel = ({ vehicleFilter, setVehicleFilter, incidentFilter, setIncidentFilter }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Filtros</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Vehículo
          </label>
          <select
            value={vehicleFilter}
            onChange={(e) => setVehicleFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">Todos</option>
            <option value="trucks">Camiones</option>
            <option value="ambulances">Ambulancias</option>
            <option value="private">Vehículos Particulares</option>
            <option value="others">Otros</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Incidente
          </label>
          <select
            value={incidentFilter}
            onChange={(e) => setIncidentFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">Todos</option>
            <option value="accidents">Accidentes</option>
            <option value="breakdowns">Averías</option>
            <option value="medical">Emergencias Médicas</option>
            <option value="others">Otros</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ruta
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">Todas</option>
            <option value="g21">G21</option>
            <option value="g245">G245</option>
            <option value="boldos">Los Boldos</option>
            <option value="tortolas">Las Tórtolas</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel; 