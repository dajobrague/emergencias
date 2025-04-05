import React, { useState } from 'react';

const CirculationForm = ({ onSubmit, onCancel }) => {
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState('');
  
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
        {/* Sentido */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sentido
          </label>
          <select 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Seleccione sentido</option>
            <option value="SUBIDA">SUBIDA</option>
            <option value="BAJADA">BAJADA</option>
          </select>
        </div>
        
        {/* Patente */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Patente
          </label>
          <input
            type="text"
            placeholder="Ej: PYWH62"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Escolta Convoy */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Escolta Convoy
          </label>
          <input
            type="number"
            placeholder="Ingrese número"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        {/* N° Escolta */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            N° Escolta
          </label>
          <input
            type="number"
            placeholder="Ingrese número"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Rut Conductor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Rut Conductor
          </label>
          <input
            type="text"
            placeholder="Ej: 12345678-9"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        {/* Nombre Conductor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre Conductor
          </label>
          <input
            type="text"
            placeholder="Ingrese nombre"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        {/* Apellido Conductor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Apellido Conductor
          </label>
          <input
            type="text"
            placeholder="Ingrese apellido"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>
      
      {/* Empresa */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Empresa
        </label>
        <select 
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={empresaSeleccionada}
          onChange={(e) => setEmpresaSeleccionada(e.target.value)}
          required
        >
          <option value="">Seleccione empresa</option>
          <option value="RESITER">RESITER</option>
          <option value="SOTRASER">SOTRASER</option>
          <option value="T. NAVARRO">T. NAVARRO</option>
          <option value="COPEC">COPEC</option>
          <option value="TRANSCARGO">TRANSCARGO</option>
          <option value="GEOBARRA">GEOBARRA</option>
          <option value="TRANSPORTE BELLO">TRANSPORTE BELLO</option>
          <option value="ENAEX">ENAEX</option>
          <option value="TRANSPORTE BSM">TRANSPORTE BSM</option>
          <option value="ELIS">ELIS</option>
          <option value="BESALCO">BESALCO</option>
          <option value="OTROS">OTROS</option>
        </select>
      </div>
      
      {/* Campo Otros para Empresa */}
      {empresaSeleccionada === 'OTROS' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Especifique Empresa
          </label>
          <input
            type="text"
            placeholder="Ingrese nombre de empresa"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Tipo Camión */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tipo Camión
          </label>
          <select 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Seleccione tipo de camión</option>
            <option value="SUSTANCIAS PELIGROSAS">SUSTANCIAS PELIGROSAS</option>
            <option value="MENOR A 10 METROS">MENOR A 10 METROS</option>
            <option value="MAYOR A 10 METROS">MAYOR A 10 METROS</option>
            <option value="MOP">MOP</option>
          </select>
        </div>
        
        {/* Carga */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Carga
          </label>
          <input
            type="text"
            placeholder="Describa la carga"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>
      
      {/* Gerencia */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Gerencia
        </label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="">Seleccione gerencia</option>
          <option value="LOGISTICA">LOGÍSTICA</option>
          <option value="INFRAESTRUCTURA">INFRAESTRUCTURA</option>
          <option value="MINA">MINA</option>
          <option value="PLANTA">PLANTA</option>
          <option value="OTRA">OTRA</option>
        </select>
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
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
        >
          <i className="fas fa-truck mr-2"></i>
          Registrar Control de Camiones
        </button>
      </div>
    </form>
  );
};

export default CirculationForm; 