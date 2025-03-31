import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Layout/Sidebar';
import PanelTransition from './components/Layout/PanelTransition';
import FleetPanel from './pages/Fleet/FleetPanel';
import WisetrackPanel from './pages/Fleet/WisetrackPanel';
import GPSChilePanel from './pages/Fleet/GPSChilePanel';
import GaussPanel from './pages/Fleet/GaussPanel';
import WebControlPanel from './pages/Fleet/WebControlPanel';
import ExplorkPanel from './pages/Fleet/ExplorkPanel';
import RecordsPanel from './pages/Fleet/RecordsPanel';
import SimulatorsPanel from './pages/Fleet/SimulatorsPanel';
import EmergencyPanel from './pages/Emergency/EmergencyPanel';
import EmergencyUnitsPanel from './pages/EmergencyUnits/EmergencyUnitsPanel';
import DocumentPanel from './pages/Document/DocumentPanel';
import PersonnelPanel from './pages/Personnel/PersonnelPanel';
import DashboardPanel from './pages/Dashboard/DashboardPanel';

function App({ softrData }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activePanel, setActivePanel] = useState('fleet-panel');
  const [previousPanel, setPreviousPanel] = useState(null);

  // Función para cambiar el panel activo con seguimiento del panel anterior
  const handlePanelChange = useCallback((panelId) => {
    setPreviousPanel(activePanel);
    setActivePanel(panelId);
  }, [activePanel]);

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
  }, [handlePanelChange]);

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
      case 'webcontrol-panel':
        return <WebControlPanel />;
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
    <BrowserRouter>
      <div className="flex h-screen bg-gray-50">
        <Sidebar 
          isCollapsed={isCollapsed} 
          toggleSidebar={toggleSidebar} 
          activePanel={activePanel} 
          setActivePanel={handlePanelChange} 
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Título principal global */}
          <div className="bg-gray-50 text-gray-700 py-2 px-6 shadow-sm z-10 border-b border-gray-200">
            <h1 className="text-lg font-medium text-center">Plataforma de Seguridad Vial y Emergencia</h1>
          </div>
          
          <main className={`flex-1 overflow-auto transition-all duration-300 ${isCollapsed ? 'ml-2' : 'ml-4'}`}>
            <PanelTransition activePanel={activePanel} previousPanel={previousPanel}>
              {renderActivePanel()}
            </PanelTransition>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App; 