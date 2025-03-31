import React, { useState } from 'react';

const RecordFilterBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recordType, setRecordType] = useState('all');
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: ''
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRecordTypeChange = (e) => {
    setRecordType(e.target.value);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setRecordType('all');
    setDateRange({
      startDate: '',
      endDate: ''
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex flex-wrap gap-4">
        {/* Búsqueda */}
        <div className="relative w-full md:w-auto md:flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-search text-gray-400"></i>
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            placeholder="Buscar registro"
          />
        </div>

        {/* Selector de tipo de registro */}
        <div className="w-full md:w-56">
          <div className="relative">
            <select
              value={recordType}
              onChange={handleRecordTypeChange}
              className="block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
            >
              <option value="all">Todos los Registros</option>
              <option value="incidents">Incidentes</option>
              <option value="vehicles">Camiones</option>
              <option value="alerts">Alertas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <i className="fas fa-chevron-down text-sm"></i>
            </div>
          </div>
        </div>

        {/* Filtro de fechas */}
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-calendar text-gray-400 text-sm"></i>
            </div>
            <input
              type="date"
              name="startDate"
              value={dateRange.startDate}
              onChange={handleDateChange}
              className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Fecha Desde"
            />
            <label className="absolute -top-2 left-2 -mt-px px-1 bg-white text-xs text-gray-500">
              Fecha Desde
            </label>
          </div>
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-calendar text-gray-400 text-sm"></i>
            </div>
            <input
              type="date"
              name="endDate"
              value={dateRange.endDate}
              onChange={handleDateChange}
              className="pl-10 block w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Fecha Hasta"
            />
            <label className="absolute -top-2 left-2 -mt-px px-1 bg-white text-xs text-gray-500">
              Fecha Hasta
            </label>
          </div>
        </div>

        {/* Botón limpiar filtros */}
        <button
          onClick={handleClearFilters}
          className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <i className="fas fa-filter mr-2"></i>
          Limpiar Filtros
        </button>
      </div>
    </div>
  );
};

export default RecordFilterBar; 