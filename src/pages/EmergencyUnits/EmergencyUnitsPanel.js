import React, { useState } from 'react';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import Modal from '../../components/UI/Modal';

const EmergencyUnitsPanel = () => {
  const [showAddUnitModal, setShowAddUnitModal] = useState(false);
  const [showUnitProfileModal, setShowUnitProfileModal] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [formData, setFormData] = useState({
    unitNumber: '',
    unitType: '',
    unitStatus: 'Activo',
    unitZone: '',
    unitNotes: '',
    unitPhone: ''
  });
  
  // Array de checklists recientes
  const recentChecklists = [
    {
      id: 1,
      unitNumber: 'Los Bronce',
      unitType: 'Camión de Bomberos',
      date: '18/05/2023',
      time: '09:30',
      responsable: 'Juan Pérez',
      status: 'Completo',
      observations: 'Equipo en condiciones óptimas'
    },
    {
      id: 2,
      unitNumber: 'Las Tórtola',
      unitType: 'Camión de Bomberos',
      date: '17/05/2023',
      time: '14:15',
      responsable: 'María Gómez',
      status: 'Completo',
      observations: 'Nivel de combustible al 75%'
    },
    {
      id: 3,
      unitNumber: 'Ambulancia',
      unitType: 'Ambulancia',
      date: '16/05/2023',
      time: '11:45',
      responsable: 'Carlos Rodríguez',
      status: 'Completo',
      observations: 'Reposición de material médico realizada'
    },
    {
      id: 4,
      unitNumber: 'La Ermita',
      unitType: 'Vehículo de Rescate',
      date: '16/05/2023',
      time: '08:20',
      responsable: 'Ana Martínez',
      status: 'Pendiente',
      observations: 'Pendiente revisión de equipo hidráulico'
    },
    {
      id: 5,
      unitNumber: 'Helicóptero',
      unitType: 'Unidad Aérea',
      date: '15/05/2023',
      time: '16:30',
      responsable: 'Roberto Sánchez',
      status: 'Completo',
      observations: 'Mantenimiento preventivo realizado'
    },
    {
      id: 6,
      unitNumber: 'STP',
      unitType: 'Unidad Táctica',
      date: '15/05/2023',
      time: '10:00',
      responsable: 'Laura Torres',
      status: 'Completo',
      observations: 'Sin observaciones'
    },
    {
      id: 7,
      unitNumber: 'Mina',
      unitType: 'Vehículo de Rescate',
      date: '14/05/2023',
      time: '15:45',
      responsable: 'Daniel López',
      status: 'Completo',
      observations: 'Materiales reemplazados'
    },
    {
      id: 8,
      unitNumber: 'Los Bronce',
      unitType: 'Camión de Bomberos',
      date: '13/05/2023',
      time: '09:15',
      responsable: 'Juan Pérez',
      status: 'Completo',
      observations: 'Revisión de mangueras completada'
    },
    {
      id: 9,
      unitNumber: 'Ambulancia',
      unitType: 'Ambulancia',
      date: '12/05/2023',
      time: '13:20',
      responsable: 'María Gómez',
      status: 'Completo',
      observations: 'Equipo médico verificado'
    },
    {
      id: 10,
      unitNumber: 'Las Tórtola',
      unitType: 'Camión de Bomberos',
      date: '11/05/2023',
      time: '11:30',
      responsable: 'Roberto Sánchez',
      status: 'Completo',
      observations: 'Cambio de aceite realizado'
    }
  ];
  
  const [units, setUnits] = useState([
    {
      id: 1,
      number: 'Los Bronce',
      type: 'Camión de Bomberos',
      status: 'Activo',
      zone: 'Zona Norte',
      icon: 'fas fa-fire-extinguisher',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-500',
      lastCheck: '15/05/2023',
      checklistStatus: 'Completo',
      observations: 'Equipo en perfectas condiciones',
      phone: '+56 9 1234 5678',
      patente: 'RGBD50',
      personnel: [
        {
          name: "Juan Pérez",
          role: "Conductor",
          time: "3h",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          gender: "male"
        },
        {
          name: "María Gómez",
          role: "Técnico de Emergencias",
          time: "3h",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          gender: "female"
        }
      ]
    },
    {
      id: 2,
      number: 'Las Tórtola',
      type: 'Camión de Bomberos',
      status: 'En ruta',
      zone: 'Zona Centro',
      icon: 'fas fa-fire-extinguisher',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-500',
      lastCheck: '10/05/2023',
      checklistStatus: 'Pendiente',
      observations: 'Nivel de agua al 75%',
      phone: '+56 9 2345 6789',
      patente: 'GXPG50',
      personnel: [
        {
          name: "Ana Martínez",
          role: "Paramédico",
          time: "2h",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          gender: "female"
        }
      ]
    },
    {
      id: 3,
      number: 'La Ermita',
      type: 'Vehículo de Rescate',
      status: 'Activo',
      zone: 'Zona Sur',
      icon: 'fas fa-truck',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-500',
      lastCheck: '12/05/2023',
      checklistStatus: 'Completo',
      observations: 'Equipamiento completo y verificado',
      phone: '+56 9 3456 7890',
      patente: 'LJTD55',
      personnel: []
    },
    {
      id: 4,
      number: 'STP',
      type: 'Vehículo de Rescate',
      status: 'En mantenimiento',
      zone: 'Zona Este',
      icon: 'fas fa-truck',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-500',
      lastCheck: '05/05/2023',
      checklistStatus: 'No aplica',
      observations: 'En revisión mecánica programada',
      phone: '+56 9 4567 8901',
      patente: 'LVFW73',
      personnel: []
    },
    {
      id: 5,
      number: 'Mina',
      type: 'Unidad Táctica',
      status: 'Activo',
      zone: 'Zona Centro',
      icon: 'fas fa-shield-alt',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-500',
      lastCheck: '14/05/2023',
      checklistStatus: 'Completo',
      observations: 'Sin observaciones',
      phone: '+56 9 5678 9012',
      patente: 'STP',
      personnel: []
    },
    {
      id: 6,
      number: 'Ambulancia',
      type: 'Ambulancia',
      status: 'Activo',
      zone: 'Zona Oeste',
      icon: 'fas fa-ambulance',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-500',
      lastCheck: '13/05/2023',
      checklistStatus: 'Completo',
      observations: 'Equipamiento médico verificado',
      phone: '+56 9 6789 0123',
      patente: 'AMB01',
      personnel: []
    },
    {
      id: 7,
      number: 'Helicóptero',
      type: 'Unidad Aérea',
      status: 'En espera',
      zone: 'Base Aérea',
      icon: 'fas fa-helicopter',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-500',
      lastCheck: '11/05/2023',
      checklistStatus: 'Completo',
      observations: 'Listo para despegue inmediato',
      phone: '+56 9 7890 1234',
      patente: 'HLC01',
      personnel: []
    }
  ]);

  const getStatusClass = (status) => {
    switch (status) {
      case 'Activo':
        return 'bg-green-100 text-green-800';
      case 'En ruta':
        return 'bg-blue-100 text-blue-800';
      case 'En mantenimiento':
        return 'bg-red-100 text-red-800';
      case 'En espera':
        return 'bg-yellow-100 text-yellow-800';
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'busy':
        return 'bg-blue-100 text-blue-800';
      case 'maintenance':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getChecklistStatusClass = (status) => {
    switch (status) {
      case 'Completo':
        return 'bg-green-100 text-green-800';
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-800';
      case 'No aplica':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleAddUnit = () => {
    // Validar que al menos se haya ingresado un número de unidad
    if (!formData.unitNumber.trim()) {
      alert('Por favor ingrese al menos un número de unidad');
      return;
    }
    
    // Crear un nuevo objeto de unidad
    const newUnit = {
      id: units.length + 1,
      number: formData.unitNumber,
      type: formData.unitType || 'No especificado',
      status: formData.unitStatus,
      zone: formData.unitZone || 'No asignada',
      icon: getIconByType(formData.unitType),
      bgColor: getBgColorByType(formData.unitType),
      iconColor: getIconColorByType(formData.unitType),
      lastCheck: 'No realizado',
      checklistStatus: 'Pendiente',
      observations: formData.unitNotes || 'Sin observaciones',
      phone: formData.unitPhone || 'No registrado',
      patente: formData.unitNumber,
      personnel: []
    };
    
    // Agregar la nueva unidad al array de unidades
    setUnits([...units, newUnit]);
    
    // Cerrar el modal y resetear el formulario
    setShowAddUnitModal(false);
    setFormData({
      unitNumber: '',
      unitType: '',
      unitStatus: 'Activo',
      unitZone: '',
      unitNotes: '',
      unitPhone: ''
    });
  };

  const getIconByType = (type) => {
    if (type.toLowerCase().includes('bombero')) {
      return 'fas fa-fire-extinguisher';
    } else if (type.toLowerCase().includes('ambulancia')) {
      return 'fas fa-ambulance';
    } else if (type.toLowerCase().includes('rescate')) {
      return 'fas fa-truck';
    } else if (type.toLowerCase().includes('helicóptero')) {
      return 'fas fa-helicopter';
    } else if (type.toLowerCase().includes('táctica')) {
      return 'fas fa-shield-alt';
    } else {
      return 'fas fa-truck'; // Icono por defecto
    }
  };

  const getBgColorByType = (type) => {
    if (type.toLowerCase().includes('bombero')) {
      return 'bg-red-100';
    } else if (type.toLowerCase().includes('ambulancia')) {
      return 'bg-green-100';
    } else if (type.toLowerCase().includes('rescate')) {
      return 'bg-orange-100';
    } else if (type.toLowerCase().includes('helicóptero')) {
      return 'bg-blue-100';
    } else if (type.toLowerCase().includes('táctica')) {
      return 'bg-purple-100';
    } else {
      return 'bg-gray-100'; // Color de fondo por defecto
    }
  };

  const getIconColorByType = (type) => {
    if (type.toLowerCase().includes('bombero')) {
      return 'text-red-500';
    } else if (type.toLowerCase().includes('ambulancia')) {
      return 'text-green-500';
    } else if (type.toLowerCase().includes('rescate')) {
      return 'text-orange-500';
    } else if (type.toLowerCase().includes('helicóptero')) {
      return 'text-blue-500';
    } else if (type.toLowerCase().includes('táctica')) {
      return 'text-purple-500';
    } else {
      return 'text-gray-500'; // Color del ícono por defecto
    }
  };

  const openUnitProfile = (unit) => {
    setSelectedUnit(unit);
    setShowUnitProfileModal(true);
  };

  return (
    <div id="emergency-units-panel" className="service-panel">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-dark">Unidades de Emergencia</h2>
          <p className="text-gray-600 mt-1">Gestión y monitoreo de vehículos de emergencia</p>
        </div>
        <Button 
          variant="primary" 
          icon="fas fa-plus"
          onClick={() => setShowAddUnitModal(true)}
        >
          Añadir Unidad
        </Button>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm text-gray-600 mb-1">Tipo de Unidad</label>
          <select className="w-full p-2 border border-gray-200 rounded text-sm">
            <option value="">Todos los tipos</option>
            <option>Camión de Bomberos</option>
            <option>Ambulancia</option>
            <option>Vehículo de Rescate</option>
            <option>Unidad Táctica</option>
            <option>Unidad Aérea</option>
          </select>
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm text-gray-600 mb-1">Estado</label>
          <select className="w-full p-2 border border-gray-200 rounded text-sm">
            <option value="">Todos los estados</option>
            <option>Activo</option>
            <option>En ruta</option>
            <option>En mantenimiento</option>
            <option>En espera</option>
          </select>
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <label className="block text-sm text-gray-600 mb-1">Estado de Checklist</label>
          <select className="w-full p-2 border border-gray-200 rounded text-sm">
            <option value="">Todos</option>
            <option>Completo</option>
            <option>Pendiente</option>
            <option>No aplica</option>
          </select>
        </div>
        
        <div className="flex items-end">
          <Button variant="outline" size="md">
            <i className="fas fa-filter mr-2"></i>
            Filtrar
          </Button>
        </div>
      </div>

      {/* Grid de unidades */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {units.map(unit => (
          <div key={unit.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:-translate-y-1 transition-transform">
            {/* Header con estado e ícono */}
            <div className="p-4 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full ${unit.bgColor} flex items-center justify-center mr-3`}>
                  <i className={`${unit.icon} ${unit.iconColor} text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{unit.number}</h3>
                  <p className="text-sm text-gray-600">{unit.type}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(unit.status)}`}>
                {unit.status}
              </span>
            </div>
            
            {/* Información principal */}
            <div className="p-4">
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">Checklist:</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getChecklistStatusClass(unit.checklistStatus)}`}>
                    {unit.checklistStatus}
                  </span>
                </div>
                
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">Última revisión:</span>
                  <span className="text-sm font-medium">{unit.lastCheck}</span>
                </div>
                
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">Teléfono:</span>
                  <span className="text-sm font-medium">{unit.phone}</span>
                </div>
                
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">Patente:</span>
                  <span className="text-sm font-medium">{unit.patente}</span>
                </div>
                
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <i className="fas fa-map-marker-alt w-4"></i>
                  <span>{unit.zone}</span>
                </div>
              </div>

              {/* Observaciones */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Observaciones:</h4>
                <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded-md">{unit.observations}</p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                >
                  <i className="fas fa-clipboard-check mr-1"></i>
                  Checklist
                </Button>
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => openUnitProfile(unit)}
                >
                  <i className="fas fa-info-circle mr-1"></i>
                  Ver perfil
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Sección de Últimos Checklists */}
      <div className="mt-12 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-dark">Últimos Checklists</h2>
          <Button 
            variant="outline" 
            size="sm"
            icon="fas fa-clipboard-list"
          >
            Ver todos los checklists
          </Button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Unidad
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Responsable
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Observaciones
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentChecklists.map(checklist => (
                  <tr key={checklist.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{checklist.unitNumber}</div>
                          <div className="text-xs text-gray-500">{checklist.unitType}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{checklist.date}</div>
                      <div className="text-xs text-gray-500">{checklist.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{checklist.responsable}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        checklist.status === 'Completo' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {checklist.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs truncate">{checklist.observations}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button 
                        variant="text" 
                        size="xs"
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <i className="fas fa-eye mr-1"></i>
                        Ver detalle
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Modal para añadir unidad */}
      <Modal 
        isOpen={showAddUnitModal} 
        onClose={() => setShowAddUnitModal(false)}
        title="Agregar Nueva Unidad de Emergencia"
      >
        <div className="p-5">
          <form id="addUnitForm">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label htmlFor="unitNumber" className="block text-sm text-gray-700 mb-1">
                  Número/Patente de Unidad: <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="unitNumber" 
                  className="w-full p-2 border border-gray-200 rounded" 
                  placeholder="Ej. RGBD50" 
                  required
                  value={formData.unitNumber}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="flex-1">
                <label htmlFor="unitStatus" className="block text-sm text-gray-700 mb-1">
                  Estado:
                </label>
                <select 
                  id="unitStatus" 
                  className="w-full p-2 border border-gray-200 rounded"
                  value={formData.unitStatus}
                  onChange={handleInputChange}
                >
                  <option value="Activo">Activo</option>
                  <option value="En ruta">En ruta</option>
                  <option value="En mantenimiento">En mantenimiento</option>
                  <option value="En espera">En espera</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label htmlFor="unitType" className="block text-sm text-gray-700 mb-1">
                  Tipo de Unidad: <span className="text-red-500">*</span>
                </label>
                <select 
                  id="unitType" 
                  className="w-full p-2 border border-gray-200 rounded"
                  value={formData.unitType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleccione un tipo</option>
                  <option value="Camión de Bomberos">Camión de Bomberos</option>
                  <option value="Ambulancia">Ambulancia</option>
                  <option value="Vehículo de Rescate">Vehículo de Rescate</option>
                  <option value="Unidad Táctica">Unidad Táctica</option>
                  <option value="Unidad Aérea">Unidad Aérea (Helicóptero)</option>
                </select>
              </div>
              
              <div className="flex-1">
                <label htmlFor="unitZone" className="block text-sm text-gray-700 mb-1">
                  Zona de Operación: <span className="text-red-500">*</span>
                </label>
                <select 
                  id="unitZone" 
                  className="w-full p-2 border border-gray-200 rounded"
                  value={formData.unitZone}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleccione una zona</option>
                  <option value="Zona Norte">Zona Norte</option>
                  <option value="Zona Sur">Zona Sur</option>
                  <option value="Zona Este">Zona Este</option>
                  <option value="Zona Oeste">Zona Oeste</option>
                  <option value="Zona Centro">Zona Centro</option>
                  <option value="Base Aérea">Base Aérea</option>
                </select>
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="unitPhone" className="block text-sm text-gray-700 mb-1">
                Teléfono de Contacto:
              </label>
              <input 
                type="text" 
                id="unitPhone" 
                className="w-full p-2 border border-gray-200 rounded" 
                placeholder="Ej. +56 9 1234 5678" 
                value={formData.unitPhone}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="unitNotes" className="block text-sm text-gray-700 mb-1">
                Observaciones:
              </label>
              <textarea 
                id="unitNotes" 
                rows="3" 
                className="w-full p-2 border border-gray-200 rounded resize-none" 
                placeholder="Ingrese cualquier información adicional relevante..."
                value={formData.unitNotes}
                onChange={handleInputChange}
              ></textarea>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex gap-3">
                <div className="text-gray-500 text-3xl">
                  <i className="fas fa-info-circle"></i>
                </div>
                <p className="text-sm text-gray-600">
                  Las unidades añadidas estarán disponibles inmediatamente para su asignación. 
                  Asegúrese de completar todos los campos obligatorios marcados con (*).
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-end gap-3 p-4 border-t border-gray-100">
          <Button 
            variant="outline" 
            onClick={() => setShowAddUnitModal(false)}
          >
            Cancelar
          </Button>
          <Button 
            variant="primary" 
            icon="fas fa-plus-circle"
            onClick={handleAddUnit}
          >
            Guardar Unidad
          </Button>
        </div>
      </Modal>
      
      {/* Modal de perfil de unidad */}
      {selectedUnit && (
        <Modal 
          isOpen={showUnitProfileModal} 
          onClose={() => setShowUnitProfileModal(false)}
          title={`Unidad ${selectedUnit.number}`}
          size="lg"
        >
          <div className="p-5">
            {/* Resumen de la unidad */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6 flex items-center">
              <div className={`w-16 h-16 rounded-full ${selectedUnit.bgColor} flex items-center justify-center mr-4`}>
                <i className={`${selectedUnit.icon} ${selectedUnit.iconColor} text-2xl`}></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{selectedUnit.number}</h3>
                <p className="text-sm text-gray-600">{selectedUnit.type}</p>
                <div className="mt-1">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(selectedUnit.status)}`}>
                    {selectedUnit.status}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Información de contacto y ubicación */}
            <h4 className="text-sm font-semibold text-gray-700 uppercase mb-2">Información General</h4>
            <div className="bg-white border rounded-lg p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Zona de Operación</p>
                  <p className="text-sm font-medium flex items-center">
                    <i className="fas fa-map-marker-alt text-gray-400 mr-1.5"></i>
                    {selectedUnit.zone}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Teléfono de Contacto</p>
                  <p className="text-sm font-medium flex items-center">
                    <i className="fas fa-phone text-gray-400 mr-1.5"></i>
                    {selectedUnit.phone}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Patente</p>
                  <p className="text-sm font-medium flex items-center">
                    <i className="fas fa-id-card text-gray-400 mr-1.5"></i>
                    {selectedUnit.patente}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Estado del CheckList */}
            <h4 className="text-sm font-semibold text-gray-700 uppercase mb-2">Estado del CheckList</h4>
            <div className="bg-white border rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Estado</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getChecklistStatusClass(selectedUnit.checklistStatus)}`}>
                    {selectedUnit.checklistStatus}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Última Revisión</p>
                  <p className="text-sm font-medium">{selectedUnit.lastCheck}</p>
                </div>
                <div className="flex-none">
                  <Button variant="outline" size="sm">
                    <i className="fas fa-clipboard-check mr-1.5"></i>
                    Ver CheckList
                  </Button>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 mb-1">Observaciones</p>
                <p className="text-sm bg-gray-50 p-3 rounded-md">{selectedUnit.observations}</p>
              </div>
            </div>
            
            {/* Personal asignado */}
            <h4 className="text-sm font-semibold text-gray-700 uppercase mb-2">Personal Asignado</h4>
            <div className="bg-white border rounded-lg p-4 mb-6">
              {selectedUnit.personnel.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedUnit.personnel.map((person, index) => (
                    <div key={index} className="flex items-center p-2 rounded-lg hover:bg-gray-50">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mr-3">
                        <i className={`fas ${person.gender === 'female' ? 'fa-female text-pink-500' : 'fa-male text-blue-500'} text-xl`}></i>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{person.name}</p>
                        <p className="text-xs text-gray-500">{person.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 p-2">No hay personal asignado actualmente a esta unidad.</p>
              )}
            </div>
            
            <div className="flex justify-end gap-3">
              <Button 
                variant="outline" 
                onClick={() => setShowUnitProfileModal(false)}
              >
                Cerrar
              </Button>
              <Button 
                variant="outline"
                className="text-yellow-600 border-yellow-600 hover:bg-yellow-50"
              >
                <i className="fas fa-edit mr-1.5"></i>
                Editar
              </Button>
              <Button 
                variant="primary"
              >
                <i className="fas fa-user-plus mr-1.5"></i>
                Asignar Personal
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EmergencyUnitsPanel; 