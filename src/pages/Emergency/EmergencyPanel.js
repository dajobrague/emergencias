import React, { useState, useRef } from 'react';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import EmergencyMap from '../../components/Maps/EmergencyMap';
import AlertForm from '../../components/Emergency/AlertForm';
import Modal from '../../components/UI/Modal';
import BrigadeDetails from '../../components/Emergency/BrigadeDetails';
import UnitDetails from '../../components/Emergency/UnitDetails';

const EmergencyPanel = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [showAlertForm, setShowAlertForm] = useState(false);
  const newEmergencyBtnRef = useRef(null);
  
  // Estados para el modal de detalles de brigada
  const [selectedBrigade, setSelectedBrigade] = useState(null);
  const [showBrigadeDetails, setShowBrigadeDetails] = useState(false);

  // Estados para el modal de detalles de unidad
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [showUnitDetails, setShowUnitDetails] = useState(false);

  // Datos de ejemplo
  const emergencyUnits = [
    { id: 1, name: 'Los Bronce', type: 'fire', status: 'active', icon: 'fa-fire-extinguisher' },
    { id: 2, name: 'Las Tórtola', type: 'fire', status: 'active', icon: 'fa-fire-extinguisher' },
    { id: 3, name: 'La Ermita', type: 'rescue', status: 'active', icon: 'fa-truck' },
    { id: 4, name: 'STP', type: 'rescue', status: 'standby', icon: 'fa-truck' },
    { id: 5, name: 'Mina', type: 'tactical', status: 'active', icon: 'fa-shield-alt' },
    { id: 6, name: 'Ambulancia', type: 'ambulance', status: 'standby', icon: 'fa-ambulance' },
    { id: 7, name: 'Helicóptero', type: 'helicopter', status: 'active', icon: 'fa-helicopter' },
  ];

  // Datos de brigadas actualizados según requerimientos
  const brigades = {
    AA: [
      { 
        id: 1, 
        zone: 'Los Bronce', 
        dayShift: { 
          active: 8, 
          leader: 'Carlos Pérez', 
          leaderId: 'AA-123' 
        },
        nightShift: { 
          active: 6, 
          leader: 'Ana García', 
          leaderId: 'AA-456' 
        }
      },
      { 
        id: 2, 
        zone: 'Las Tórtola', 
        dayShift: { 
          active: 10, 
          leader: 'Manuel Rodríguez', 
          leaderId: 'AA-234' 
        },
        nightShift: { 
          active: 7, 
          leader: 'Laura Martínez', 
          leaderId: 'AA-567' 
        }
      },
      { 
        id: 3, 
        zone: 'La Ermita', 
        dayShift: { 
          active: 12, 
          leader: 'Roberto Sánchez', 
          leaderId: 'AA-345' 
        },
        nightShift: { 
          active: 9, 
          leader: 'Carmen López', 
          leaderId: 'AA-678' 
        }
      },
      { 
        id: 4, 
        zone: 'STP', 
        dayShift: { 
          active: 9, 
          leader: 'Javier Torres', 
          leaderId: 'AA-456' 
        },
        nightShift: { 
          active: 8, 
          leader: 'Elena Flores', 
          leaderId: 'AA-789' 
        }
      },
      { 
        id: 5, 
        zone: 'Mina', 
        dayShift: { 
          active: 7, 
          leader: 'Antonio Díaz', 
          leaderId: 'AA-567' 
        },
        nightShift: { 
          active: 5, 
          leader: 'Isabel Ruiz', 
          leaderId: 'AA-890' 
        }
      }
    ],
    Externas: [
      { 
        id: 6, 
        zone: 'Los Bronce', 
        dayShift: { 
          active: 5, 
          leader: 'Miguel Vargas', 
          leaderId: 'EX-123' 
        },
        nightShift: { 
          active: 4, 
          leader: 'Lucía Romero', 
          leaderId: 'EX-456' 
        }
      },
      { 
        id: 7, 
        zone: 'Las Tórtola', 
        dayShift: { 
          active: 6, 
          leader: 'Pablo Morales', 
          leaderId: 'EX-234' 
        },
        nightShift: { 
          active: 5, 
          leader: 'Sofía Jiménez', 
          leaderId: 'EX-567' 
        }
      },
      { 
        id: 8, 
        zone: 'La Ermita', 
        dayShift: { 
          active: 7, 
          leader: 'David Gutiérrez', 
          leaderId: 'EX-345' 
        },
        nightShift: { 
          active: 6, 
          leader: 'Marta Álvarez', 
          leaderId: 'EX-678' 
        }
      },
      { 
        id: 9, 
        zone: 'STP', 
        dayShift: { 
          active: 5, 
          leader: 'Alejandro Méndez', 
          leaderId: 'EX-456' 
        },
        nightShift: { 
          active: 4, 
          leader: 'Patricia Domínguez', 
          leaderId: 'EX-789' 
        }
      },
      { 
        id: 10, 
        zone: 'Mina', 
        dayShift: { 
          active: 4, 
          leader: 'Fernando Castro', 
          leaderId: 'EX-567' 
        },
        nightShift: { 
          active: 3, 
          leader: 'Raquel Navarro', 
          leaderId: 'EX-890' 
        }
      }
    ]
  };

  // Datos de ejemplo para las alertas con coordenadas para el mapa
  const alerts = [
    {
      id: 1,
      type: 'fire',
      title: 'Alerta de Incendio',
      description: 'Se reporta un incendio de magnitud media en una estructura residencial. Tres unidades de bomberos han sido despachadas al lugar.',
      location: 'Calle Príncipe #123, Zona Norte',
      time: '30 minutos',
      coords: [-33.4372, -70.6506] // Santiago
    },
    {
      id: 2,
      type: 'traffic',
      title: 'Accidente de Tráfico',
      description: 'Colisión múltiple reportada en la autopista principal. Se requieren servicios médicos de emergencia y control de tráfico.',
      location: 'Autopista 32, Autopista Sur',
      time: '45 minutos',
      coords: [-33.0153, -71.5521] // Valparaíso
    }
  ];

  // Datos de ejemplo para los contactos
  const contacts = [
    { id: 1, name: 'Policlínico Los Bronce', role: 'Médico de Turno', phone: '123-456-7890', icon: 'fas fa-user-md' },
    { id: 2, name: 'Policlínico Las Tórtolas', role: 'Médico de Turno', phone: '123-456-7891', icon: 'fas fa-user-md' },
    { id: 3, name: 'Control Paso Marchant', role: 'Jefe de Turno', phone: '123-456-7892', icon: 'fas fa-hard-hat' },
    { id: 4, name: 'Control La Ermita', role: 'Supervisor de Turno', phone: '123-456-7893', icon: 'fas fa-id-badge' },
    { id: 5, name: 'Control Las Puertas', role: 'Control de Acceso', phone: '123-456-7894', icon: 'fas fa-door-open' }
  ];

  // Función para obtener el color según el estado
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'standby': return 'bg-yellow-100 text-yellow-800';
      case 'available': return 'bg-green-100 text-green-800';
      case 'en-route': return 'bg-yellow-100 text-yellow-800';
      case 'maintenance': return 'bg-red-100 text-red-800';
      case 'on-duty': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Función para obtener el texto según el estado
  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Activa';
      case 'standby': return 'En espera';
      case 'available': return 'Disponible';
      case 'en-route': return 'En camino';
      case 'maintenance': return 'En reparación';
      case 'on-duty': return 'En servicio (8h)';
      default: return status;
    }
  };

  // Función para abrir el formulario de alertas
  const handleOpenAlertForm = () => {
    // Obtenemos la posición del botón para posicionar el modal
    const buttonPosition = newEmergencyBtnRef.current?.getBoundingClientRect();
    
    // Guardamos esta posición en un atributo del documento para poder usarla en el CSS
    if (buttonPosition) {
      document.documentElement.style.setProperty('--emergency-button-top', `${buttonPosition.top + window.scrollY}px`);
    }
    
    setShowAlertForm(true);
  };

  // Función para cerrar el formulario de alertas
  const handleCloseAlertForm = () => {
    setShowAlertForm(false);
  };

  // Función para abrir el modal de detalles de brigada
  const handleOpenBrigadeDetails = (e, brigade, type) => {
    // Ya no capturamos la posición del botón, simplemente abrimos el modal
    setSelectedBrigade({ ...brigade, type });
    setShowBrigadeDetails(true);
  };

  // Función para cerrar el modal de detalles de brigada
  const handleCloseBrigadeDetails = () => {
    setShowBrigadeDetails(false);
    setSelectedBrigade(null);
  };

  // Función para abrir el modal de detalles de unidad
  const handleOpenUnitDetails = (e, unit) => {
    // Ya no capturamos la posición del botón, simplemente abrimos el modal
    setSelectedUnit(unit);
    setShowUnitDetails(true);
  };

  // Función para cerrar el modal de detalles de unidad
  const handleCloseUnitDetails = () => {
    setShowUnitDetails(false);
    setSelectedUnit(null);
  };
  
  // Exponer funciones para el tour
  React.useEffect(() => {
    // Exportar las funciones al objeto window para que puedan ser utilizadas desde el tour
    window.handleCloseAlertForm = handleCloseAlertForm;
    window.handleCloseBrigadeDetails = handleCloseBrigadeDetails;
    window.handleCloseUnitDetails = handleCloseUnitDetails;
    
    // Limpieza al desmontar el componente
    return () => {
      delete window.handleCloseAlertForm;
      delete window.handleCloseBrigadeDetails;
      delete window.handleCloseUnitDetails;
    };
  }, []);

  return (
    <div id="emergency-panel">
      <h2 className="text-2xl font-bold text-dark mb-2">Panel de Emergencias</h2>
      <p className="text-gray-600 mb-8">Estado actual de las operaciones de emergencia</p>
      
      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 flex items-center">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
            <i className="fas fa-exclamation-triangle text-red-500 text-xl"></i>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">3</h3>
            <p className="text-sm text-gray-600">Emergencias Activas</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
            <i className="fas fa-users text-blue-500 text-xl"></i>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">8</h3>
            <p className="text-sm text-gray-600">Brigadistas Disponibles</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 flex items-center">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
            <i className="fas fa-ambulance text-green-500 text-xl"></i>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">12</h3>
            <p className="text-sm text-gray-600">Unidades en Servicio</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 flex items-center">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
            <i className="fas fa-bell text-orange-500 text-xl"></i>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">5</h3>
            <p className="text-sm text-gray-600">Alertas Recientes</p>
          </div>
        </div>
      </div>
      
      {/* Emergencia Actual */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
              <i className="fas fa-exclamation-circle text-red-500"></i>
            </div>
            <h3 className="text-lg font-semibold">Emergencia Actual</h3>
          </div>
          
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
              <i className="fas fa-history mr-1"></i> Historial
            </button>
            <button 
              id="new-emergency-btn"
              ref={newEmergencyBtnRef}
              className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
              onClick={handleOpenAlertForm}
            >
              <i className="fas fa-plus mr-1"></i> Nueva Emergencia
            </button>
          </div>
        </div>
        
        {/* Título del mapa con instrucciones mejoradas */}
        <div className="flex items-center mb-3">
          <i className="fas fa-map-marked-alt text-blue-500 mr-2"></i>
          <h4 className="text-md font-medium">Mapa de Emergencias</h4>
        </div>
        
        <div className="bg-blue-50 p-3 rounded-lg mb-4 text-sm text-blue-700">
          <p><i className="fas fa-info-circle mr-1"></i> Utilice los botones en la esquina inferior derecha para:</p>
          <ul className="list-disc ml-6 mt-1">
            <li>Expandir el mapa verticalmente <i className="fas fa-expand-alt text-blue-500 ml-1"></i></li>
            <li>Ver el mapa en pantalla completa <i className="fas fa-expand text-blue-500 ml-1"></i></li>
          </ul>
          <p className="mt-1">Para cerrar el mapa expandido o en pantalla completa, use el botón <i className="fas fa-times text-blue-500 ml-1"></i> o presione ESC.</p>
        </div>
        
        {/* Mapa de Emergencias con controles mejorados */}
        <div className="mb-4 w-full">
          <EmergencyMap />
        </div>
      </div>
      
      {/* Brigadas */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-dark mb-4">Brigadas Operativas</h3>
        
        {/* Brigadas AA */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <i className="fas fa-users text-green-500"></i>
            </div>
            <h4 className="text-lg font-semibold">Brigadas AA</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {brigades.AA.map(brigade => (
              <div 
                key={brigade.id} 
                className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={(e) => handleOpenBrigadeDetails(e, brigade, 'AA')}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold">{brigade.zone}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800`}>
                    AA
                  </span>
                </div>
                
                <div className="space-y-3">
                  {/* Turno Día */}
                  <div className="bg-amber-50 p-2 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-amber-700">Turno Día</span>
                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                        {brigade.dayShift.active} operativos
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <i className="fas fa-user-tie text-amber-500 mr-1.5"></i>
                      <span className="truncate">{brigade.dayShift.leader}</span>
                    </div>
                  </div>
                  
                  {/* Turno Noche */}
                  <div className="bg-indigo-50 p-2 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-indigo-700">Turno Noche</span>
                      <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">
                        {brigade.nightShift.active} operativos
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <i className="fas fa-user-tie text-indigo-500 mr-1.5"></i>
                      <span className="truncate">{brigade.nightShift.leader}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Brigadas Externas */}
        <div>
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
              <i className="fas fa-hard-hat text-orange-500"></i>
            </div>
            <h4 className="text-lg font-semibold">Brigadas Externas</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {brigades.Externas.map(brigade => (
              <div 
                key={brigade.id} 
                className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={(e) => handleOpenBrigadeDetails(e, brigade, 'Externas')}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold">{brigade.zone}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800`}>
                    Externa
                  </span>
                </div>
                
                <div className="space-y-3">
                  {/* Turno Día */}
                  <div className="bg-amber-50 p-2 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-amber-700">Turno Día</span>
                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                        {brigade.dayShift.active} operativos
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <i className="fas fa-user-tie text-amber-500 mr-1.5"></i>
                      <span className="truncate">{brigade.dayShift.leader}</span>
                    </div>
                  </div>
                  
                  {/* Turno Noche */}
                  <div className="bg-indigo-50 p-2 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-indigo-700">Turno Noche</span>
                      <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">
                        {brigade.nightShift.active} operativos
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <i className="fas fa-user-tie text-indigo-500 mr-1.5"></i>
                      <span className="truncate">{brigade.nightShift.leader}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Unidades de Emergencia */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-dark mb-4">Unidades de Emergencia</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {emergencyUnits.map(unit => (
            <div key={unit.id} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-full ${
                  unit.type === 'fire' ? 'bg-red-100' : 
                  unit.type === 'rescue' ? 'bg-orange-100' :
                  unit.type === 'tactical' ? 'bg-purple-100' :
                  unit.type === 'ambulance' ? 'bg-green-100' :
                  'bg-blue-100'
                } flex items-center justify-center mb-3`}>
                  <i className={`fas ${unit.icon} ${
                    unit.type === 'fire' ? 'text-red-500' : 
                    unit.type === 'rescue' ? 'text-orange-500' :
                    unit.type === 'tactical' ? 'text-purple-500' :
                    unit.type === 'ambulance' ? 'text-green-500' :
                    'text-blue-500'
                  } text-xl`}></i>
                </div>
                <h4 className="text-base font-semibold mb-1 text-center">{unit.name}</h4>
                
                <div className="flex flex-col items-center mt-1 w-full">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(unit.status)} mb-2 w-full text-center`}>
                    {getStatusText(unit.status)}
                  </span>
                  
                  <span className="text-xs text-gray-500 mb-2">
                    {unit.type === 'fire' ? 'Unidad contra incendios' : 
                     unit.type === 'rescue' ? 'Unidad de rescate' :
                     unit.type === 'tactical' ? 'Unidad táctica' :
                     unit.type === 'ambulance' ? 'Ambulancia' :
                     unit.type === 'helicopter' ? 'Helicóptero' : 'Vehículo de emergencia'}
                  </span>
                  
                  <button 
                    className="w-full mt-2 px-3 py-1.5 text-xs bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-md transition-colors flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenUnitDetails(e, unit);
                    }}
                  >
                    <i className="fas fa-info-circle mr-1.5"></i>
                    Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Alertas */}
      <div className="space-y-4 mb-8">
        {alerts.map(alert => (
          <div key={alert.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1">
                <i className={`fas ${alert.type === 'fire' ? 'fa-fire' : 'fa-car-crash'} text-red-500`}></i>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{alert.title}</h3>
                  <span className="text-xs text-gray-500">Hace {alert.time}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{alert.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>{alert.location}</span>
                </div>
                <div className="flex justify-end space-x-2">
                  <button className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                    Detalles
                  </button>
                  <button className="px-3 py-1 text-sm bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors">
                    Responder
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Contactos de Emergencia */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Contactos de Emergencia</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {contacts.map(contact => (
            <div key={contact.id} className="bg-white rounded-lg shadow-sm p-3">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <i className={`${contact.icon} text-blue-500 text-sm`}></i>
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-xs font-medium truncate">{contact.name}</h4>
                  <p className="text-xs text-gray-500 truncate">{contact.role}</p>
                </div>
              </div>
              <a 
                href={`tel:${contact.phone}`} 
                className="flex items-center justify-center w-full px-2 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-md transition-colors text-xs"
              >
                <i className="fas fa-phone-alt mr-1.5"></i>
                Llamar
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal de Detalles de Brigada */}
      {selectedBrigade && (
        <Modal 
          isOpen={showBrigadeDetails} 
          onClose={handleCloseBrigadeDetails} 
          title={`Brigada ${selectedBrigade.zone} - ${selectedBrigade.type === 'AA' ? 'AA' : 'Externa'}`}
          size="lg"
        >
          <BrigadeDetails
            brigade={selectedBrigade}
            type={selectedBrigade.type}
            onClose={handleCloseBrigadeDetails}
          />
        </Modal>
      )}
      
      {/* Modal de Detalles de Unidad */}
      {selectedUnit && (
        <Modal 
          isOpen={showUnitDetails} 
          onClose={handleCloseUnitDetails} 
          title={`Unidad ${selectedUnit.name}`}
          size="lg"
          verticalPosition="lower"
        >
          <UnitDetails
            unit={selectedUnit}
            onClose={handleCloseUnitDetails}
          />
        </Modal>
      )}
      
      {/* Formulario de Alertas */}
      <AlertForm 
        isOpen={showAlertForm} 
        onClose={handleCloseAlertForm} 
      />
    </div>
  );
};

export default EmergencyPanel; 