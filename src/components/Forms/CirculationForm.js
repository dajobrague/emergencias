import React from 'react';

const CirculationForm = ({ onSubmit, onCancel }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se procesaría el formulario
    if (onSubmit) onSubmit();
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fecha y Hora de Salida
          </label>
          <input
            type="datetime-local"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 modal-input"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ID del Camión
          </label>
          <input
            type="text"
            placeholder="Ej: CAM-123"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 modal-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Conductor
          </label>
          <input
            type="text"
            placeholder="Nombre del conductor"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 modal-input"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ruta Asignada
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 modal-input">
            <option value="">Seleccione una ruta</option>
            <option value="route1">Ruta Norte</option>
            <option value="route2">Ruta Sur</option>
            <option value="route3">Ruta Este</option>
            <option value="route4">Ruta Oeste</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tipo de Carga
        </label>
        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 modal-input">
          <option value="">Seleccione tipo de carga</option>
          <option value="type1">Materiales de Construcción</option>
          <option value="type2">Alimentos</option>
          <option value="type3">Combustible</option>
          <option value="type4">Otros</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Peso de Carga (kg)
        </label>
        <input
          type="number"
          placeholder="Ej: 5000"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 modal-input"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Destino
        </label>
        <input
          type="text"
          placeholder="Lugar de destino"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 modal-input"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Observaciones
        </label>
        <textarea
          rows="3"
          placeholder="Observaciones adicionales..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 modal-input"
        ></textarea>
      </div>

      <div className="flex justify-end space-x-3">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors modal-btn"
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors modal-btn"
        >
          <i className="fas fa-truck mr-2"></i>
          Registrar Circulación
        </button>
      </div>
    </form>
  );
};

export default CirculationForm; 