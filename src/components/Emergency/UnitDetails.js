import React from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button';

const UnitDetails = ({ unit, onClose }) => {
  // Funciones para obtener los colores según el tipo y estado
  const getTypeColor = (type) => {
    switch (type) {
      case 'fire': return 'bg-red-100 text-red-800';
      case 'rescue': return 'bg-orange-100 text-orange-800';
      case 'tactical': return 'bg-purple-100 text-purple-800';
      case 'ambulance': return 'bg-green-100 text-green-800';
      case 'helicopter': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'standby': return 'bg-yellow-100 text-yellow-800';
      case 'maintenance': return 'bg-red-100 text-red-800';
      case 'en-route': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Activo';
      case 'standby': return 'En espera';
      case 'maintenance': return 'En mantenimiento';
      case 'en-route': return 'En ruta';
      default: return status;
    }
  };

  const getChecklistColor = (checklist) => {
    switch (checklist) {
      case 'Completo': return 'bg-green-100 text-green-800';
      case 'Pendiente': return 'bg-yellow-100 text-yellow-800';
      case 'No aplica': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Columna izquierda - Información principal */}
        <div>
          <div className="flex items-center mb-4">
            <div className={`w-16 h-16 rounded-full ${
              unit.type === 'fire' ? 'bg-red-100' : 
              unit.type === 'rescue' ? 'bg-orange-100' :
              unit.type === 'tactical' ? 'bg-purple-100' :
              unit.type === 'ambulance' ? 'bg-green-100' :
              'bg-blue-100'
            } flex items-center justify-center mr-4`}>
              <i className={`fas ${unit.icon} ${
                unit.type === 'fire' ? 'text-red-500' : 
                unit.type === 'rescue' ? 'text-orange-500' :
                unit.type === 'tactical' ? 'text-purple-500' :
                unit.type === 'ambulance' ? 'text-green-500' :
                'text-blue-500'
              } text-2xl`}></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{unit.details.fullName}</h2>
              <div className="flex mt-1 space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(unit.type)}`}>
                  {unit.details.subtype}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(unit.status)}`}>
                  {getStatusText(unit.status)}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 mb-3">Información General</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Ubicación:</span>
                  <span className="text-sm font-medium text-gray-700">{unit.details.location}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Placa/ID:</span>
                  <span className="text-sm font-medium text-gray-700">{unit.details.plate}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Teléfono:</span>
                  <span className="text-sm font-medium text-gray-700">{unit.details.phone}</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-600 mb-3">Estado Técnico</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Checklist:</span>
                  <span className={`text-sm font-medium px-2 py-0.5 rounded-full ${getChecklistColor(unit.details.checklist)}`}>
                    {unit.details.checklist}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Última revisión:</span>
                  <span className="text-sm font-medium text-gray-700">{unit.details.lastRevision}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Columna derecha - Observaciones y acciones */}
        <div>
          <div className="p-4 bg-gray-50 rounded-lg mb-4">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Observaciones</h3>
            <p className="text-sm text-gray-700">
              {unit.details.observations || "Sin observaciones registradas."}
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Acciones</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors flex items-center justify-center text-sm">
                <i className="fas fa-clipboard-check mr-2"></i>
                Ver Checklist Completo
              </button>
              
              <button className="w-full px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-colors flex items-center justify-center text-sm">
                <i className="fas fa-history mr-2"></i>
                Historial de Mantenimiento
              </button>
              
              <button className="w-full px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg transition-colors flex items-center justify-center text-sm">
                <i className="fas fa-user-friends mr-2"></i>
                Personal Asignado
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <Button
          variant="secondary"
          onClick={onClose}
          className="mr-2"
        >
          Cerrar
        </Button>
        <Button
          variant="primary"
        >
          Actualizar Estado
        </Button>
      </div>
    </div>
  );
};

UnitDetails.propTypes = {
  unit: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};

export default UnitDetails; 