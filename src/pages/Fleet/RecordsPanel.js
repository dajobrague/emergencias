import React, { useState, useRef, useEffect } from 'react';
import IncidentCard from '../../components/Records/IncidentCard';
import VehicleCard from '../../components/Records/VehicleCard';
import RecordFilterBar from '../../components/Records/RecordFilterBar';
import HistoricalRecords from '../../components/Records/HistoricalRecords';
import Modal from '../../components/UI/Modal';
import IncidentForm from '../../components/Forms/IncidentForm';
import CirculationForm from '../../components/Forms/CirculationForm';

const RecordsPanel = () => {
  const [activeTab, setActiveTab] = useState('incidents'); // 'incidents' o 'vehicles'
  const [showDropdown, setShowDropdown] = useState(false);
  const [showIncidentModal, setShowIncidentModal] = useState(false);
  const [showVehicleModal, setShowVehicleModal] = useState(false);
  const dropdownRef = useRef(null);
  
  // Cerrar el dropdown cuando se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Funciones para manejar los modales
  const handleOpenIncidentModal = () => {
    setShowDropdown(false);
    setShowIncidentModal(true);
  };

  const handleOpenVehicleModal = () => {
    setShowDropdown(false);
    setShowVehicleModal(true);
  };

  const handleIncidentSubmit = () => {
    alert('Incidente registrado con éxito');
    setShowIncidentModal(false);
  };

  const handleVehicleSubmit = () => {
    alert('Control de camiones registrado con éxito');
    setShowVehicleModal(false);
  };
  
  // Datos de ejemplo para los últimos incidentes
  const recentIncidents = [
    {
      id: 1,
      type: 'Accidente',
      location: 'Ruta G21 Km 34',
      details: 'Camión y vehículo particular',
      time: '11:13 AM',
      date: '2023-04-15'
    },
    {
      id: 2,
      type: 'Avería',
      location: 'Los Bronces',
      details: 'Ambulancia #1',
      time: '10:05 AM',
      date: '2023-04-15'
    },
    {
      id: 3,
      type: 'Emergencia Médica',
      location: 'Las Tórtolas',
      details: 'N/A',
      time: '09:22 AM',
      date: '2023-04-15'
    }
  ];

  // Datos de ejemplo para los últimos registros de camiones
  const recentVehicles = [
    {
      id: 1,
      type: 'Mayor a 10 Metros',
      operator: 'GOTRANS01',
      license: 'SJFD43',
      status: 'Activo',
      time: '21:15'
    },
    {
      id: 2,
      type: 'Menor a 10 Metros',
      operator: 'GOTRANS02',
      license: 'RTJG65',
      status: 'Mantenimiento',
      time: '22:40'
    },
    {
      id: 3,
      type: 'Sustancias Peligrosas',
      operator: 'CELTRANS',
      license: 'RSJD65',
      status: 'Construcción',
      time: '00:05'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex flex-wrap justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Registros</h1>
          <p className="text-gray-600">Base de Datos de Incidentes y Camiones</p>
        </div>
        
        {/* Botón Nuevo con desplegable */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <i className="fas fa-plus mr-2"></i>
            Nuevo
            <i className={`fas fa-chevron-down ml-2 text-xs transition-transform ${showDropdown ? 'rotate-180' : ''}`}></i>
          </button>
          
          {/* Menú desplegable */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-10 border border-gray-200 overflow-hidden dropdown-menu">
              {/* Indicador triangular */}
              <div className="dropdown-arrow"></div>
              
              <div className="relative">
                <h4 className="dropdown-header">
                  Crear nuevo
                </h4>
                <button
                  onClick={handleOpenIncidentModal}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-100 dropdown-item"
                >
                  <i className="fas fa-exclamation-triangle mr-2 text-orange-500"></i>
                  Registro de Incidentes
                </button>
                <button
                  onClick={handleOpenVehicleModal}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors dropdown-item"
                >
                  <i className="fas fa-truck mr-2 text-green-500"></i>
                  Control de Camiones
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Columna de Últimos Incidentes */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Últimos Incidentes</h2>
          <div className="space-y-4">
            {recentIncidents.map(incident => (
              <IncidentCard key={incident.id} incident={incident} />
            ))}
          </div>
        </div>

        {/* Columna de Últimos Registros de Camiones */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Últimos Registro de Camiones</h2>
          <div className="space-y-4">
            {recentVehicles.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </div>

      {/* Barra de filtros */}
      <RecordFilterBar />

      {/* Registros históricos con pestañas */}
      <HistoricalRecords activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Modal para Registro de Incidentes */}
      <Modal 
        isOpen={showIncidentModal} 
        onClose={() => setShowIncidentModal(false)}
        title="Registro de Incidentes"
        contentClass="p-6"
      >
        <div className="p-2">
          <IncidentForm onSubmit={handleIncidentSubmit} />
        </div>
      </Modal>
      
      {/* Modal para Control de Camiones */}
      <Modal 
        isOpen={showVehicleModal} 
        onClose={() => setShowVehicleModal(false)}
        title="Control de Camiones"
        contentClass="p-6"
      >
        <div className="p-2">
          <CirculationForm onSubmit={handleVehicleSubmit} />
        </div>
      </Modal>
    </div>
  );
};

export default RecordsPanel; 