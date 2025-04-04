import React, { useState, useEffect } from 'react';
import Sidebar from './components/Layout/Sidebar';
import PanelTransition from './components/Layout/PanelTransition';
import FleetPanel from './pages/Fleet/FleetPanel';
import WisetrackPanel from './pages/Fleet/WisetrackPanel';
import GPSChilePanel from './pages/Fleet/GPSChilePanel';
import GaussPanel from './pages/Fleet/GaussPanel';
import ExplorkPanel from './pages/Fleet/ExplorkPanel';
import RecordsPanel from './pages/Fleet/RecordsPanel';
import SimulatorsPanel from './pages/Fleet/SimulatorsPanel';
import EmergencyPanel from './pages/Emergency/EmergencyPanel';
import EmergencyUnitsPanel from './pages/EmergencyUnits/EmergencyUnitsPanel';
import DocumentPanel from './pages/Document/DocumentPanel';
import PersonnelPanel from './pages/Personnel/PersonnelPanel';
import DashboardPanel from './pages/Dashboard/DashboardPanel';

// Importaciones para el tour guiado
import { TourProvider } from './context/TourContext';
import MainTour from './components/Tours/MainTour';
import FleetTour from './components/Tours/FleetTour';
import WisetrackTour from './components/Tours/WisetrackTour';
import GPSChileTour from './components/Tours/GPSChileTour';
import EmergencyTour from './components/Tours/EmergencyTour';
import EmergencyUnitsTour from './components/Tours/EmergencyUnitsTour';
import PersonnelTour from './components/Tours/PersonnelTour';
import DocumentTour from './components/Tours/DocumentTour';
import HelpButton from './components/UI/HelpButton';
import DemoControls from './components/UI/DemoControls';
import RoadSafetyTour from './components/Tours/RoadSafetyTour';

// Importar estilos de Intro.js
import 'intro.js/introjs.css';
import './styles/intro-custom.css';

function App({ softrData }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activePanel, setActivePanel] = useState('fleet-panel');
  const [previousPanel, setPreviousPanel] = useState(null);

  // Función para cambiar el panel activo con seguimiento del panel anterior
  const handlePanelChange = (panelId) => {
    setPreviousPanel(activePanel);
    setActivePanel(panelId);
  };

  // Escuchar eventos para cambiar de panel desde otras partes de la aplicación
  useEffect(() => {
    const handleNavigateToPanel = (e) => {
      if (e.detail) {
        handlePanelChange(e.detail);
      }
    };

    window.addEventListener('navigate-to-panel', handleNavigateToPanel);
    
    return () => {
      window.removeEventListener('navigate-to-panel', handleNavigateToPanel);
    };
  }, []);

  // Función para alternar el estado colapsado de la barra lateral
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Renderizar el panel activo
  const renderActivePanel = () => {
    switch (activePanel) {
      case 'fleet-panel':
        return <FleetPanel />;
      case 'wisetrack-panel':
        return <WisetrackPanel />;
      case 'teletrac-panel':
        return <GPSChilePanel />;
      case 'gauss-panel':
        return <GaussPanel />;
      case 'explork-panel':
        return <ExplorkPanel />;
      case 'records-panel':
        return <RecordsPanel />;
      case 'simulators-panel':
        return <SimulatorsPanel />;
      case 'emergency-panel':
        return <EmergencyPanel />;
      case 'emergency-units-panel':
        return <EmergencyUnitsPanel />;
      case 'document-panel':
        return <DocumentPanel />;
      case 'personnel-panel':
        return <PersonnelPanel />;
      case 'dashboard-graphics-panel':
        return <DashboardPanel />;
      default:
        return <FleetPanel />;
    }
  };

  return (
    <TourProvider>
      <div className="flex h-screen bg-gray-50">
        {/* Componentes del tour */}
        <MainTour />
        <FleetTour />
        <EmergencyTour />
        <DocumentTour />
        <PersonnelTour />
        <EmergencyUnitsTour />
        <WisetrackTour />
        <GPSChileTour />
        <RoadSafetyTour />
        
        {/* Controles de ayuda y demo */}
        <HelpButton />
        <DemoControls />
        
        <Sidebar 
          isCollapsed={isCollapsed} 
          toggleSidebar={toggleSidebar} 
          activePanel={activePanel} 
          setActivePanel={handlePanelChange} 
        />
        <main className={`flex-1 overflow-auto transition-all duration-300 ${isCollapsed ? 'ml-2' : 'ml-4'}`}>
          <PanelTransition activePanel={activePanel} previousPanel={previousPanel}>
            {renderActivePanel()}
          </PanelTransition>
        </main>
      </div>
    </TourProvider>
  );
}

export default App; 