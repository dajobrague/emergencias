import React, { useState } from 'react';

const IncidentForm = ({ onSubmit, onCancel }) => {
  const [incidentType, setIncidentType] = useState('');
  const [routeType, setRouteType] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se procesaría el formulario
    if (onSubmit) onSubmit();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Fecha */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        {/* Hora */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hora
          </label>
          <input
            type="time"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Lugar de Detención */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Lugar de Detención
          </label>
          <select 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Seleccione un lugar</option>
            <option value="AGUAS CORDILLERA">AGUAS CORDILLERA</option>
            <option value="CERRO CORTADO">CERRO CORTADO</option>
            <option value="EN RUTA">EN RUTA</option>
            <option value="LA ERMITA">LA ERMITA</option>
            <option value="LA PALOMERA">LA PALOMERA</option>
            <option value="LAS PUERTAS">LAS PUERTAS</option>
            <option value="LAS VARAS">LAS VARAS</option>
            <option value="LOS GUINDOS">LOS GUINDOS</option>
            <option value="MAITENES">MAITENES</option>
            <option value="PASO MARCHANT">PASO MARCHANT</option>
            <option value="PENSIÓN INGLESA">PENSIÓN INGLESA</option>
          </select>
        </div>
        
        {/* Ruta */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ruta
          </label>
          <select 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={routeType}
            onChange={(e) => setRouteType(e.target.value)}
            required
          >
            <option value="">Seleccione una ruta</option>
            <option value="G21">G21</option>
            <option value="G245">G245</option>
            <option value="OTRO">Otro</option>
          </select>
        </div>
      </div>
      
      {/* KM/Sector (visible solo si selecciona "Otro" en Ruta) */}
      {routeType === 'OTRO' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Especifique Ruta
          </label>
          <input
            type="text"
            placeholder="Ingrese la ruta"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          KM/Sector
        </label>
        <input
          type="text"
          placeholder="Ingrese el kilómetro o sector"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Patente */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Patente
          </label>
          <input
            type="text"
            placeholder="Ej: ABCD12"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        {/* Involucrado */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Involucrado
          </label>
          <select 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Seleccione involucrado</option>
            <option value="CONTRATISTA">CONTRATISTA</option>
            <option value="PARTICULAR">PARTICULAR</option>
            <option value="ANGLOAMERICAN">ANGLOAMERICAN</option>
          </select>
        </div>
      </div>
      
      {/* Empresa */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Empresa
        </label>
        <input
          type="text"
          placeholder="Ingrese el nombre de la empresa"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Tipo de Vehículo */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Vehículo
          </label>
          <select 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Seleccione tipo de vehículo</option>
            <option value="AUTOMÓVIL">AUTOMÓVIL</option>
            <option value="BUS">BUS</option>
            <option value="CAMA BAJA">CAMA BAJA</option>
            <option value="CAMIÓN">CAMIÓN</option>
            <option value="CAMIÓN GRÚA">CAMIÓN GRÚA</option>
            <option value="CAMIONETA">CAMIONETA</option>
          </select>
        </div>
        
        {/* Tipo de Incidencia */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de Incidencia
          </label>
          <select 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={incidentType}
            onChange={(e) => setIncidentType(e.target.value)}
            required
          >
            <option value="">Seleccione tipo de incidencia</option>
            <option value="Choque">Choque</option>
            <option value="Colisión">Colisión</option>
            <option value="Volcamiento">Volcamiento</option>
            <option value="Desbarrancamiento">Desbarrancamiento</option>
            <option value="Caída">Caída</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>
      
      {/* Otro tipo de incidencia (visible solo si selecciona "Otro") */}
      {incidentType === 'Otro' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Especifique Tipo de Incidencia
          </label>
          <input
            type="text"
            placeholder="Ingrese tipo de incidencia"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      )}

      {/* Descripción del Incidente */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Breve Descripción del Incidente
        </label>
        <textarea
          rows="3"
          placeholder="Describa el incidente detalladamente..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        ></textarea>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Acción Correctiva */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Acción Correctiva
          </label>
          <textarea
            rows="2"
            placeholder="Describa las acciones correctivas tomadas..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>
        
        {/* Fecha de Acción Correctiva */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fecha de Acción Correctiva
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          <i className="fas fa-save mr-2"></i>
          Registrar Incidente
        </button>
      </div>
    </form>
  );
};

export default IncidentForm; 