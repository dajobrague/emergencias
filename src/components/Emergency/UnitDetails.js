import React from 'react';
import PropTypes from 'prop-types';

const UnitDetails = ({ unit, onClose }) => {
  // Datos ficticios para el ejemplo
  const unitDetails = {
    crew: [
      { id: 1, name: 'José Martínez', role: 'Conductor', status: 'active' },
      { id: 2, name: 'Elena Gómez', role: 'Paramédico', status: 'active' },
      { id: 3, name: 'Carlos López', role: 'Técnico', status: 'active' },
    ],
    specs: {
      model: unit.type === 'helicopter' ? 'Bell 429' : 
             unit.type === 'ambulance' ? 'Mercedes Sprinter' : 
             unit.type === 'fire' ? 'Ford F-550' : 
             unit.type === 'rescue' ? 'Dodge RAM 3500' : 'Vehículo especializado',
      year: '2022',
      capacity: unit.type === 'helicopter' ? '5 personas' : 
                unit.type === 'ambulance' ? '3 pacientes' : 
                unit.type === 'fire' ? '6 bomberos' : 
                unit.type === 'rescue' ? '4 rescatistas' : '6 personas',
      equipment: unit.type === 'helicopter' ? 'Cámara térmica, grúa, equipo médico' : 
                unit.type === 'ambulance' ? 'Desfibrilador, oxígeno, camilla' : 
                unit.type === 'fire' ? 'Mangueras, escaleras, tanque de agua' : 
                unit.type === 'rescue' ? 'Herramientas de extricación, cuerdas' : 'Equipo táctico especializado',
      lastService: '12/03/2023'
    },
    location: 'Estación Central',
    fuelLevel: '85%',
    nextMaintenance: '25/06/2023'
  };

  const getTypeText = (type) => {
    switch (type) {
      case 'fire': return 'Unidad contra incendios';
      case 'rescue': return 'Unidad de rescate';
      case 'tactical': return 'Unidad táctica';
      case 'ambulance': return 'Ambulancia';
      case 'helicopter': return 'Helicóptero';
      default: return 'Vehículo de emergencia';
    }
  };

  const getStatusBadge = (status) => {
    if (status === 'active') {
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Activo</span>;
    } else {
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Inactivo</span>;
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case 'fire': return 'bg-red-100';
      case 'rescue': return 'bg-orange-100';
      case 'tactical': return 'bg-purple-100';
      case 'ambulance': return 'bg-green-100';
      case 'helicopter': return 'bg-blue-100';
      default: return 'bg-gray-100';
    }
  };

  const getTextColor = (type) => {
    switch (type) {
      case 'fire': return 'text-red-500';
      case 'rescue': return 'text-orange-500';
      case 'tactical': return 'text-purple-500';
      case 'ambulance': return 'text-green-500';
      case 'helicopter': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="py-6">
      {/* Encabezado */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg flex items-center justify-between">
        <div className="flex items-center">
          <div className={`w-12 h-12 rounded-full ${getBgColor(unit.type)} flex items-center justify-center mr-3`}>
            <i className={`fas ${unit.icon} ${getTextColor(unit.type)}`}></i>
          </div>
          <div>
            <h4 className="font-medium">{unit.name}</h4>
            <p className="text-sm text-gray-500">
              {getTypeText(unit.type)} - {unit.status === 'active' ? 'En servicio' : 'En espera'}
            </p>
          </div>
        </div>
      </div>
      
      {/* Especificaciones */}
      <div className="mb-4">
        <h5 className="text-sm font-semibold text-gray-700 mb-2">Especificaciones</h5>
        <div className="bg-white border rounded-lg p-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-gray-500">Modelo</p>
              <p className="text-sm font-medium">{unitDetails.specs.model}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Año</p>
              <p className="text-sm font-medium">{unitDetails.specs.year}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Capacidad</p>
              <p className="text-sm font-medium">{unitDetails.specs.capacity}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Último servicio</p>
              <p className="text-sm font-medium">{unitDetails.specs.lastService}</p>
            </div>
          </div>
          
          <div className="mt-3">
            <p className="text-xs text-gray-500">Equipamiento</p>
            <p className="text-sm">{unitDetails.specs.equipment}</p>
          </div>
        </div>
      </div>
      
      {/* Estado */}
      <div className="mb-4">
        <h5 className="text-sm font-semibold text-gray-700 mb-2">Estado Actual</h5>
        <div className="bg-white border rounded-lg p-3">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <p className="text-xs text-gray-500">Ubicación</p>
              <p className="text-sm font-medium">{unitDetails.location}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Nivel de combustible</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1.5">
                <div 
                  className="bg-green-500 h-2.5 rounded-full" 
                  style={{ width: unitDetails.fuelLevel }}
                ></div>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500">Próximo mantenimiento</p>
              <p className="text-sm font-medium">{unitDetails.nextMaintenance}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Personal asignado */}
      <div className="mb-4">
        <h5 className="text-sm font-semibold text-gray-700 mb-2">Personal Asignado</h5>
        <div className="bg-white border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rol
                </th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {unitDetails.crew.map((person) => (
                <tr key={person.id}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="fas fa-user text-gray-400"></i>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{person.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {person.role}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {getStatusBadge(person.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Acciones */}
      <div className="flex justify-end space-x-2 mt-6">
        <button 
          onClick={onClose}
          className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

UnitDetails.propTypes = {
  unit: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};

export default UnitDetails; 