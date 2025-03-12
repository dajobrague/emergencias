import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BrigadeDetails = ({ brigade, type, onClose }) => {
  const [activeTab, setActiveTab] = useState('day');
  
  // Datos de ejemplo para el personal completo
  const dayShiftPersonnel = [
    { id: 1, name: brigade.dayShift.leader, role: 'Líder', status: 'active', badgeId: brigade.dayShift.leaderId },
    { id: 2, name: 'Eduardo Ramírez', role: 'Paramédico', status: 'active', badgeId: type === 'AA' ? 'AA-789' : 'EX-123' },
    { id: 3, name: 'María Fernanda Torres', role: 'Técnico', status: 'active', badgeId: type === 'AA' ? 'AA-790' : 'EX-124' },
    { id: 4, name: 'Andrés Guzmán', role: 'Rescatista', status: 'active', badgeId: type === 'AA' ? 'AA-791' : 'EX-125' },
    { id: 5, name: 'Carolina Méndez', role: 'Médico', status: 'active', badgeId: type === 'AA' ? 'AA-792' : 'EX-126' },
    { id: 6, name: 'Ricardo Velázquez', role: 'Operador', status: 'active', badgeId: type === 'AA' ? 'AA-793' : 'EX-127' },
    { id: 7, name: 'Gabriela Luna', role: 'Auxiliar', status: 'active', badgeId: type === 'AA' ? 'AA-794' : 'EX-128' },
    { id: 8, name: 'Jorge Paredes', role: 'Comunicador', status: 'inactive', badgeId: type === 'AA' ? 'AA-795' : 'EX-129' },
  ];
  
  const nightShiftPersonnel = [
    { id: 9, name: brigade.nightShift.leader, role: 'Líder', status: 'active', badgeId: brigade.nightShift.leaderId },
    { id: 10, name: 'Daniela Rivas', role: 'Paramédico', status: 'active', badgeId: type === 'AA' ? 'AA-799' : 'EX-133' },
    { id: 11, name: 'Héctor Rojas', role: 'Técnico', status: 'active', badgeId: type === 'AA' ? 'AA-800' : 'EX-134' },
    { id: 12, name: 'Valentina Paredes', role: 'Rescatista', status: 'active', badgeId: type === 'AA' ? 'AA-801' : 'EX-135' },
    { id: 13, name: 'Sebastián Ortega', role: 'Médico', status: 'active', badgeId: type === 'AA' ? 'AA-802' : 'EX-136' },
    { id: 14, name: 'Luis Medina', role: 'Operador', status: 'inactive', badgeId: type === 'AA' ? 'AA-803' : 'EX-137' },
    { id: 15, name: 'Valeria Núñez', role: 'Auxiliar', status: 'active', badgeId: type === 'AA' ? 'AA-804' : 'EX-138' },
  ];
  
  const getPersonnel = () => {
    return activeTab === 'day' ? dayShiftPersonnel : nightShiftPersonnel;
  };
  
  const getStatusBadge = (status) => {
    if (status === 'active') {
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Activo</span>;
    } else {
      return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Inactivo</span>;
    }
  };
  
  return (
    <div className="py-2">
      {/* Tabs */}
      <div className="mb-4 border-b">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('day')}
            className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
              activeTab === 'day'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-2">
              <i className="fas fa-sun text-amber-500 text-xs"></i>
            </div>
            Turno Día
          </button>
          <button
            onClick={() => setActiveTab('night')}
            className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
              activeTab === 'night'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
              <i className="fas fa-moon text-indigo-500 text-xs"></i>
            </div>
            Turno Noche
          </button>
        </div>
      </div>
      
      {/* Resumen */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg flex items-center justify-between">
        <div className="flex items-center">
          <div className={`w-10 h-10 rounded-full ${type === 'AA' ? 'bg-blue-100' : 'bg-orange-100'} flex items-center justify-center mr-3`}>
            <i className={`fas ${type === 'AA' ? 'fa-users text-blue-500' : 'fa-hard-hat text-orange-500'}`}></i>
          </div>
          <div>
            <h4 className="font-medium">{brigade.zone} - {type === 'AA' ? 'Brigada AA' : 'Brigada Externa'}</h4>
            <p className="text-sm text-gray-500">
              {activeTab === 'day' 
                ? `${brigade.dayShift.active} operativos en turno día`
                : `${brigade.nightShift.active} operativos en turno noche`
              }
            </p>
          </div>
        </div>
        <div>
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
            type === 'AA' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
          }`}>
            {type === 'AA' ? 'AA' : 'Externa'}
          </span>
        </div>
      </div>
      
      {/* Tabla de personal */}
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg mb-4">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Personal
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rol
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4">
                <span className="sr-only">Acciones</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {getPersonnel().map((person) => (
              <tr key={person.id} className={person.status === 'inactive' ? 'bg-gray-50' : ''}>
                <td className="py-3 pl-4 pr-3 text-sm">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <i className="fas fa-user text-gray-400"></i>
                    </div>
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">{person.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 text-sm text-gray-500">{person.role}</td>
                <td className="px-3 py-3 text-sm text-gray-500">{person.badgeId}</td>
                <td className="px-3 py-3 text-sm text-gray-500">
                  {getStatusBadge(person.status)}
                </td>
                <td className="py-3 pl-3 pr-4 text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900">
                    <i className="fas fa-info-circle"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Acciones */}
      <div className="flex justify-end space-x-2">
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

BrigadeDetails.propTypes = {
  brigade: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default BrigadeDetails; 