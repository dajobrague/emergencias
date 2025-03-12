import React, { useState, useEffect } from 'react';

const RecordsPanel = () => {
  const [activeForm, setActiveForm] = useState('incidents'); // 'incidents' o 'circulation'

  // Escuchar eventos para cambiar de formulario desde otras partes de la aplicación
  useEffect(() => {
    const handleFormChange = (e) => {
      if (e.detail === 'circulation') {
        setActiveForm('circulation');
      } else if (e.detail === 'incidents') {
        setActiveForm('incidents');
      }
    };

    window.addEventListener('change-records-form', handleFormChange);
    
    return () => {
      window.removeEventListener('change-records-form', handleFormChange);
    };
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-dark mb-6">Registros</h2>
      <p className="text-gray-600 mb-8">
        Utilice los siguientes formularios para registrar incidentes o circulación de camiones.
      </p>

      {/* Selector de formulario */}
      <div className="flex space-x-4 mb-8">
        <button
          data-form="incidents"
          className={`px-6 py-3 rounded-lg transition-colors ${
            activeForm === 'incidents'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveForm('incidents')}
        >
          <i className="fas fa-exclamation-triangle mr-2"></i>
          Registro de Incidentes
        </button>
        <button
          data-form="circulation"
          className={`px-6 py-3 rounded-lg transition-colors ${
            activeForm === 'circulation'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => setActiveForm('circulation')}
        >
          <i className="fas fa-truck mr-2"></i>
          Circulación de Camiones
        </button>
      </div>

      {/* Formulario de Incidentes */}
      {activeForm === 'incidents' && (
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-xl font-semibold mb-6">Registro de Incidentes</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha y Hora del Incidente
                </label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ubicación
                </label>
                <input
                  type="text"
                  placeholder="Ej: Ruta 5 Sur Km 123"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Incidente
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Seleccione un tipo</option>
                <option value="accident">Accidente</option>
                <option value="breakdown">Avería</option>
                <option value="delay">Retraso</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehículo Involucrado
              </label>
              <input
                type="text"
                placeholder="Ej: Camión #123"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción del Incidente
              </label>
              <textarea
                rows="4"
                placeholder="Describa el incidente con detalle..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Acciones Tomadas
              </label>
              <textarea
                rows="3"
                placeholder="Describa las acciones tomadas..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                <i className="fas fa-save mr-2"></i>
                Registrar Incidente
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Formulario de Circulación de Camiones */}
      {activeForm === 'circulation' && (
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-xl font-semibold mb-6">Circulación de Camiones</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de Salida
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hora de Salida
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ID del Vehículo
                </label>
                <input
                  type="text"
                  placeholder="Ej: CAM-123"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Conductor
                </label>
                <input
                  type="text"
                  placeholder="Nombre del conductor"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Origen
                </label>
                <input
                  type="text"
                  placeholder="Lugar de origen"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destino
                </label>
                <input
                  type="text"
                  placeholder="Lugar de destino"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Carga
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Seleccione un tipo</option>
                <option value="general">Carga General</option>
                <option value="hazardous">Materiales Peligrosos</option>
                <option value="refrigerated">Refrigerada</option>
                <option value="bulk">A Granel</option>
                <option value="other">Otra</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kilometraje Inicial
              </label>
              <input
                type="number"
                placeholder="Ej: 12500"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Observaciones
              </label>
              <textarea
                rows="3"
                placeholder="Observaciones adicionales..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                <i className="fas fa-save mr-2"></i>
                Registrar Circulación
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default RecordsPanel; 