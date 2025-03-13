import React, { useState } from 'react';
import ServiceCard from '../../components/UI/ServiceCard';
import Card from '../../components/UI/Card';
import TwitterTimeline from '../../components/UI/TwitterTimeline';
import Modal from '../../components/UI/Modal';
import IncidentForm from '../../components/Forms/IncidentForm';
import CirculationForm from '../../components/Forms/CirculationForm';

const FleetPanel = () => {
  // Estados para controlar la visibilidad de los modales
  const [showIncidentModal, setShowIncidentModal] = useState(false);
  const [showCirculationModal, setShowCirculationModal] = useState(false);

  const services = [
    {
      id: 'wisetrack',
      title: 'Wisetrack',
      description: 'Sistema de Monitoreo ADAS.',
      icon: 'fas fa-satellite',
      iconClass: 'icon-wisetrack',
      buttonClass: '',
      url: 'https://dispatcher.wisetrack.cl/Portal/'
    },
    {
      id: 'gpschile',
      title: 'GPSChile',
      description: 'Sistema de Monitoreo de Flotas Navman.',
      icon: 'fas fa-location-arrow',
      iconClass: 'icon-gpschile',
      buttonClass: 'gpschile',
      url: 'https://director-cl.teletracnavman.net/avl3/Account/Login?ReturnUrl=%2favl3%2fMain%2fVehiclesNav'
    },
    {
      id: 'gauss',
      title: 'Gauss Control',
      description: 'Sistema de Control y Gestión de Fatiga en la Conducción.',
      icon: 'fas fa-tachometer-alt',
      iconClass: 'icon-gauss',
      buttonClass: 'gauss',
      url: 'https://w3.gausscontrol.com/'
    },
    {
      id: 'explork',
      title: 'Dirección de Tránsito EXPLOR-K',
      description: 'Sistema de gestión y control de tránsito para operaciones mineras.',
      icon: 'fas fa-road',
      iconClass: 'icon-explork',
      buttonClass: 'explork',
      url: 'https://explor-k.com/procesoClientes.html'
    }
  ];

  // Datos de supervisores de ruta
  const supervisors = [
    {
      name: 'Carlos Rodríguez',
      phone: '+56 9 1234 5678',
      email: 'carlos.rodriguez@empresa.cl',
      route: 'Zona Norte'
    },
    {
      name: 'María González',
      phone: '+56 9 8765 4321',
      email: 'maria.gonzalez@empresa.cl',
      route: 'Zona Centro'
    },
    {
      name: 'Juan Pérez',
      phone: '+56 9 2468 1357',
      email: 'juan.perez@empresa.cl',
      route: 'Zona Sur'
    }
  ];

  // Función para navegar a la página de registros
  const navigateToRecords = (formType = null) => {
    window.dispatchEvent(new CustomEvent('navigate-to-panel', { detail: 'records-panel' }));
    
    // Si se especifica un tipo de formulario, cambiar a ese formulario después de un breve retraso
    if (formType) {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('change-records-form', { detail: formType }));
      }, 100);
    }
  };

  // Función para manejar el envío del formulario de incidentes
  const handleIncidentSubmit = () => {
    // Aquí se procesaría el formulario
    alert('Incidente registrado con éxito');
    setShowIncidentModal(false);
  };

  // Función para manejar el envío del formulario de circulación
  const handleCirculationSubmit = () => {
    // Aquí se procesaría el formulario
    alert('Circulación registrada con éxito');
    setShowCirculationModal(false);
  };

  return (
    <div id="fleet-panel" className="service-panel active">
      <h2 className="text-2xl font-bold text-dark mb-6">Seguridad Vial</h2>
      <p className="text-gray-600 mb-8">
        Seleccione uno de nuestros servicios de seguridad vial para acceder a información detallada sobre sus vehículos.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {services.map(service => (
          <ServiceCard 
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            iconClass={service.iconClass}
            buttonClass={service.buttonClass}
            url={service.url}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Twitter Timeline (ahora X) */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col h-full">
          <h3 className="text-lg font-semibold text-dark flex items-center mb-4">
            <i className="fa-brands fa-x-twitter text-primary mr-2"></i>
            Actualizaciones de Organismos Oficiales
          </h3>
          <div className="flex-grow" id="twitter-container" style={{ minHeight: '450px' }}>
            <TwitterTimeline height={450} />
          </div>
        </div>
        
        {/* Tarjetas Informativas */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col h-full">
          <h3 className="text-lg font-semibold text-dark flex items-center mb-4">
            <i className="fas fa-info-circle text-primary mr-2"></i>
            Información de Contacto y Registros
          </h3>
          
          <div className="flex-grow flex flex-col">
            {/* Tarjetas de Registros - AHORA ARRIBA */}
            <div className="mb-6 flex-grow">
              <h4 className="text-md font-medium text-gray-700 mb-3">Registros</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div 
                  onClick={() => setShowIncidentModal(true)} 
                  className="bg-gray-50 hover:bg-gray-100 transition-colors p-4 rounded-lg text-center cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mx-auto mb-2">
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                  <h5 className="font-medium text-gray-800">Registro de Incidentes</h5>
                  <p className="text-sm text-gray-500 mt-1">Reportar y consultar incidentes</p>
                </div>
                <div 
                  onClick={() => setShowCirculationModal(true)} 
                  className="bg-gray-50 hover:bg-gray-100 transition-colors p-4 rounded-lg text-center cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-500 mx-auto mb-2">
                    <i className="fas fa-traffic-light"></i>
                  </div>
                  <h5 className="font-medium text-gray-800">Control de Tránsito</h5>
                  <p className="text-sm text-gray-500 mt-1">Gestionar rutas y horarios</p>
                </div>
              </div>
            </div>
            
            {/* Supervisores de Ruta - AHORA ABAJO */}
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Supervisores de Ruta</h4>
              <div className="space-y-3">
                {supervisors.map((supervisor, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-3 flex-shrink-0">
                      <i className="fas fa-user"></i>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800">{supervisor.name}</h5>
                      <p className="text-sm text-gray-500">{supervisor.route}</p>
                      <div className="flex flex-col mt-1 text-sm">
                        <span className="flex items-center text-gray-600">
                          <i className="fas fa-phone mr-2 text-blue-500"></i>
                          {supervisor.phone}
                        </span>
                        <span className="flex items-center text-gray-600">
                          <i className="fas fa-envelope mr-2 text-blue-500"></i>
                          {supervisor.email}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Documentos Recientes (movido abajo) */}
      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-dark flex items-center mb-4">
          <i className="fas fa-file-alt text-primary mr-2"></i>
          Documentos Recientes
        </h3>
        <div className="h-64 overflow-auto">
          {/* Lista de documentos */}
          <div className="document-container">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-primary mr-4">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-800">Manual de Operaciones {i}.pdf</h4>
                  <p className="text-xs text-gray-400 flex items-center mt-1">
                    <i className="fas fa-clock mr-1"></i> Actualizado hace {i} días
                  </p>
                </div>
                <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-blue-50 text-primary rounded transition-colors">
                  Descargar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para Registro de Incidentes */}
      <Modal 
        isOpen={showIncidentModal} 
        onClose={() => setShowIncidentModal(false)}
        title="Registro de Incidentes"
        size="lg"
      >
        <IncidentForm 
          onSubmit={handleIncidentSubmit} 
          onCancel={() => setShowIncidentModal(false)} 
        />
      </Modal>

      {/* Modal para Circulación de Camiones */}
      <Modal 
        isOpen={showCirculationModal} 
        onClose={() => setShowCirculationModal(false)}
        title="Circulación de Camiones"
        size="lg"
      >
        <CirculationForm 
          onSubmit={handleCirculationSubmit} 
          onCancel={() => setShowCirculationModal(false)} 
        />
      </Modal>
    </div>
  );
};

export default FleetPanel; 