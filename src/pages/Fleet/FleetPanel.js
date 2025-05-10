import React, { useState, useEffect, useRef } from 'react';
import ServiceCard from '../../components/UI/ServiceCard';
import TwitterTimeline from '../../components/UI/TwitterTimeline';
import Modal from '../../components/UI/Modal';
import IncidentForm from '../../components/Forms/IncidentForm';
import CirculationForm from '../../components/Forms/CirculationForm';
// Importar componentes del tutorial
import { fleetPanelSteps, incidentFormSteps, circulationFormSteps } from '../../components/Tutorial/tutorialSteps';
import { useTutorial } from '../../context/TutorialContext';

const FleetPanel = () => {
  // Estados para controlar la visibilidad de los modales
  const [showIncidentModal, setShowIncidentModal] = useState(false);
  const [showCirculationModal, setShowCirculationModal] = useState(false);
  
  // Referencias a los botones para el tutorial
  const incidentButtonRef = useRef(null);
  const circulationButtonRef = useRef(null);
  
  // Acceder al contexto del tutorial
  const { 
    startTutorial, 
    registerModalAction, 
    isActive, 
    currentPage, 
    stepIndex 
  } = useTutorial();

  // Funciones para abrir modales
  const openIncidentModal = () => {
    setShowIncidentModal(true);
  };

  const openCirculationModal = () => {
    setShowCirculationModal(true);
  };

  // Exponer las funciones de modales globalmente para el tutorial
  useEffect(() => {
    window.openIncidentModal = openIncidentModal;
    window.openCirculationModal = openCirculationModal;
    
    return () => {
      // Limpieza al desmontar
      delete window.openIncidentModal;
      delete window.openCirculationModal;
    };
  }, []);

  // Registrar acciones de modales al iniciar el componente
  useEffect(() => {
    if (registerModalAction) {
      registerModalAction('incident-modal', openIncidentModal);
      registerModalAction('circulation-modal', openCirculationModal);
    }
  }, [registerModalAction]);

  // Asegurar que los botones de registro estén disponibles para el tutorial
  useEffect(() => {
    // Asegurarse que los IDs están correctamente aplicados
    if (incidentButtonRef.current) {
      window.incidentButton = incidentButtonRef.current;
      console.log("Botón de incidentes referenciado:", incidentButtonRef.current);
    }
    
    if (circulationButtonRef.current) {
      window.circulationButton = circulationButtonRef.current;
      console.log("Botón de circulación referenciado:", circulationButtonRef.current);
    }
  }, []);

  // Efecto para manejar la apertura de modales durante el tutorial
  useEffect(() => {
    if (isActive && currentPage === 'fleet-panel') {
      // Paso 10 - Solo mostrar botón Registro de Incidentes (cerrar modales)
      if (stepIndex === 9) {
        setShowIncidentModal(false);
        setShowCirculationModal(false);
      }
      // Paso 11 - Abrir modal de Registro de Incidentes
      else if (stepIndex === 10) {
        setShowCirculationModal(false);
        setShowIncidentModal(true);
      }
      // Paso 12 - Solo mostrar botón Control de Camiones (cerrar modales)
      else if (stepIndex === 11) {
        setShowIncidentModal(false);
        setShowCirculationModal(false);
      }
      // Paso 13 - Abrir modal Control de Camiones
      else if (stepIndex === 12) {
        setShowIncidentModal(false);
        setShowCirculationModal(true);
      }
      // Cerrar modales para los demás pasos
      else if (stepIndex > 12) {
        setShowIncidentModal(false);
        setShowCirculationModal(false);
      }
    }
  }, [isActive, currentPage, stepIndex]);

  // Efecto para iniciar los tutoriales de los formularios cuando se abren
  useEffect(() => {
    if (showIncidentModal && !isActive) {
      const timer = setTimeout(() => {
        startTutorial('incident-form', incidentFormSteps);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [showIncidentModal, startTutorial, isActive]);

  useEffect(() => {
    if (showCirculationModal && !isActive) {
      const timer = setTimeout(() => {
        startTutorial('circulation-form', circulationFormSteps);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [showCirculationModal, startTutorial, isActive]);

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
      id: 'webcontrol',
      title: 'WebControl',
      description: 'Acreditación de personas y equipos',
      icon: 'fas fa-id-card',
      iconClass: 'icon-webcontrol',
      buttonClass: 'webcontrol',
      url: 'https://webcontrol.anglochile.cl/webcontrol42'
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
      name: 'RUTA G-21',
      phone: '+56942373538',
      email: 'supervisorg21@angloamerican.com'
    },
    {
      name: 'RUTA G-245',
      phone: '+56963263072',
      email: 'supervisorg245@angloamerican.com'
    },
    {
      name: 'RESCATE',
      phone: '+56996434891',
      email: 'rescaterutas@angloamerican.com'
    }
  ];

  // Datos de centros de control
  const controlCenters = [
    {
      name: 'CONTROL LA ERMITA',
      phone: '+56222155295',
      email: 'laermitacontrol@angloamerican.com'
    },
    {
      name: 'CONTROL LAS PUERTAS',
      phone: '+56222307001',
      email: 'laspuertascontrol@angloamerican.com'
    },
    {
      name: 'CONTROL PASO MARCHANT',
      phone: '+56222307754 - +56222307752',
      email: 'vigilancia.losbronces@angloamerican.com'
    }
  ];

  // Formatear números de teléfono para mejor visualización
  const formatPhone = (phone) => {
    if (phone.includes('-')) {
      // Para teléfonos con múltiples números (separados por guión)
      return phone.split('-').map(num => formatPhone(num.trim())).join(' - ');
    }
    
    // Formato para celulares (+56 9 XXXX XXXX)
    if (phone.includes('+569')) {
      return phone.replace(/\+(\d{2})(\d{1})(\d{4})(\d{4})/, '+$1 $2 $3 $4');
    }
    
    // Formato para teléfonos fijos (+56 XX XXX XXX)
    return phone.replace(/\+(\d{2})(\d{2})(\d{3})(\d{3})/, '+$1 $2 $3 $4');
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
    alert('Control de camiones registrado con éxito');
    setShowCirculationModal(false);
  };

  // Handler para el botón de tutorial
  const handleStartTutorial = () => {
    startTutorial('fleet-panel', fleetPanelSteps);
  };

  return (
    <div id="fleet-panel" className="service-panel active">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-dark">Panel de Seguridad Vial</h2>
        <button 
          onClick={handleStartTutorial}
          className="ml-2 flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all text-blue-700 bg-blue-100 hover:bg-blue-200"
          aria-label="Iniciar tutorial"
        >
          <i className="fas fa-question-circle mr-2"></i>
          <span>Ayuda</span>
        </button>
      </div>
      <p className="text-gray-600 mb-8">
        Seleccione uno de nuestros servicios de seguridad vial para acceder a información detallada sobre sus vehículos.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-3 mb-8">
        {services.map(service => (
          <ServiceCard 
            key={service.id}
            id={service.id}
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
          <div className="flex-grow" id="twitter-container" style={{ minHeight: '550px' }}>
            <TwitterTimeline height={550} />
          </div>
        </div>
        
        {/* Tarjetas Informativas */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col h-full">
          <h3 className="text-lg font-semibold text-dark flex items-center mb-4">
            <i className="fas fa-info-circle text-primary mr-2"></i>
            Información de Contacto y Registros
          </h3>
          
          <div className="flex-grow flex flex-col">
            {/* Tarjetas de Registros */}
            <div className="mb-6">
              <h4 className="text-md font-medium text-gray-700 mb-3 section-registros">Registros</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 container-registros">
                <div 
                  onClick={openIncidentModal} 
                  className="bg-gray-50 hover:bg-gray-100 transition-colors p-4 rounded-lg text-center cursor-pointer button-registro-incidente"
                  id="incident-button"
                  data-tutorial="true"
                  ref={incidentButtonRef}
                  style={{ position: 'relative', zIndex: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 mx-auto mb-2">
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                  <h5 className="font-medium text-gray-800">Registro de Incidentes</h5>
                  <p className="text-sm text-gray-500 mt-1">Reportar y consultar incidentes</p>
                </div>
                <div 
                  onClick={openCirculationModal} 
                  className="bg-gray-50 hover:bg-gray-100 transition-colors p-4 rounded-lg text-center cursor-pointer button-control-camiones"
                  id="circulation-button"
                  data-tutorial="true"
                  ref={circulationButtonRef}
                  style={{ position: 'relative', zIndex: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-500 mx-auto mb-2">
                    <i className="fas fa-ticket-alt"></i>
                  </div>
                  <h5 className="font-medium text-gray-800">Control de Camiones</h5>
                  <p className="text-sm text-gray-500 mt-1">Gestionar rutas y horarios</p>
                </div>
              </div>
            </div>
            
            {/* Sección de Contactos - Modificada según la imagen */}
            <div className="mt-6 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Columna: Supervisores */}
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3 bg-white p-2 rounded-md border-l-4 border-blue-500 shadow-sm">Supervisores</h4>
                  <div className="grid gap-3">
                    {supervisors.map((supervisor, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow border border-gray-100">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-2">
                            <i className="fas fa-user"></i>
                          </div>
                          <h5 className="font-medium text-gray-800">{supervisor.name}</h5>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <a href={`tel:${supervisor.phone.replace(/\s+/g, '')}`} className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-2 rounded-full flex-shrink-0 mr-2">
                              <i className="fas fa-phone-alt"></i>
                            </a>
                            <div className="flex-1 truncate">
                              <span>{formatPhone(supervisor.phone)}</span>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <a href={`mailto:${supervisor.email}`} className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-2 rounded-full flex-shrink-0 mr-2">
                              <i className="fas fa-envelope"></i>
                            </a>
                            <div className="flex-1 truncate">
                              <span>{supervisor.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Columna: Centros de Control */}
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3 bg-white p-2 rounded-md border-l-4 border-green-500 shadow-sm">Centros de Control</h4>
                  <div className="grid gap-3">
                    {controlCenters.map((center, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow border border-gray-100">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-2">
                            <i className="fas fa-building"></i>
                          </div>
                          <h5 className="font-medium text-gray-800">{center.name}</h5>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <a href={`tel:${center.phone.replace(/\s+/g, '').split('-')[0]}`} className="text-green-500 hover:text-green-700 hover:bg-green-50 p-2 rounded-full flex-shrink-0 mr-2">
                              <i className="fas fa-phone-alt"></i>
                            </a>
                            <div className="flex-1 truncate">
                              <span>{formatPhone(center.phone)}</span>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <a href={`mailto:${center.email}`} className="text-green-500 hover:text-green-700 hover:bg-green-50 p-2 rounded-full flex-shrink-0 mr-2">
                              <i className="fas fa-envelope"></i>
                            </a>
                            <div className="flex-1 truncate">
                              <span>{center.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal para Registro de Incidentes */}
      <Modal 
        isOpen={showIncidentModal} 
        onClose={() => setShowIncidentModal(false)}
        title="Registro de Incidentes"
        size="lg"
        id="incident-modal"
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
        title="Control de Circulación de Camiones"
        size="lg"
        id="circulation-modal"
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