import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto
const TourContext = createContext();

// Proveedor del contexto
export const TourProvider = ({ children }) => {
  const [activeTour, setActiveTour] = useState(null);
  const [demoMode, setDemoMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  // Mapeo de tours a paneles correspondientes
  const tourToPanelMap = {
    'main': null, // El tour principal no cambia de panel automáticamente
    'fleet': 'fleet-panel',
    'road-safety': 'fleet-panel', // Nuevo tour de seguridad vial que usa el mismo panel de fleet
    'wisetrack': 'wisetrack-panel',
    'gpschile': 'teletrac-panel',
    'gauss': 'gauss-panel',
    'explork': 'explork-panel',
    'document': 'document-panel',
    'records': 'records-panel',
    'simulators': 'simulators-panel',
    'emergency': 'emergency-panel',
    'emergency-units': 'emergency-units-panel',
    'personnel': 'personnel-panel',
    'dashboard': 'dashboard-graphics-panel'
  };

  // Verificar si es la primera visita o si estamos en modo demo
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isDemo = urlParams.get('demo') === 'true';
    
    if (isDemo) {
      setDemoMode(true);
      // Iniciar tour automáticamente después de un breve retraso
      setTimeout(() => {
        setActiveTour('main');
      }, 1000);
    } else {
      const hasSeenTour = localStorage.getItem('hasSeenTour');
      if (!hasSeenTour) {
        // Esperar a que la UI esté cargada
        const timer = setTimeout(() => {
          setActiveTour('main');
          localStorage.setItem('hasSeenTour', 'true');
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
  }, []);
  
  // Navegar al panel correspondiente cuando cambia el tour activo
  useEffect(() => {
    if (activeTour && tourToPanelMap[activeTour]) {
      // Disparar evento para cambiar de panel
      window.dispatchEvent(new CustomEvent('navigate-to-panel', { 
        detail: tourToPanelMap[activeTour] 
      }));
    }
    
    // Resetear el paso actual cuando cambia el tour
    setCurrentStep(0);
  }, [activeTour]);

  // Forzar la aplicación de estilos para todas las páginas
  useEffect(() => {
    // Verificar si los estilos ya existen
    const existingStyle = document.getElementById('introjs-force-styles');
    
    if (!existingStyle) {
      // Crear un elemento style
      const style = document.createElement('style');
      style.id = 'introjs-force-styles';
      style.innerHTML = `
        /* Forzar estilos para los botones de intro.js */
        .introjs-button {
          position: static !important;
          display: inline-block !important;
        }
        
        .introjs-tooltipbuttons {
          display: flex !important;
          position: relative !important;
          border-top: 1px solid #f0f0f0 !important;
          padding-top: 10px !important;
        }
        
        .introjs-tooltip {
          max-width: 420px !important;
          min-width: 320px !important;
          box-sizing: border-box !important;
          border-radius: 12px !important;
          background-color: white !important;
          position: fixed !important;
          bottom: 20px !important;
          right: 20px !important;
          left: auto !important;
          top: auto !important;
          margin: 0 !important;
          display: flex !important;
          flex-direction: column !important;
        }
        
        /* Asegurar que introjs-skipbutton esté a la izquierda */
        .introjs-skipbutton {
          float: left !important;
          margin-right: auto !important;
        }
        
        /* Asegurar que introjs-prevbutton y introjs-nextbutton estén a la derecha */
        .introjs-prevbutton, .introjs-nextbutton, .introjs-donebutton {
          float: right !important;
        }
      `;
      
      // Añadir el elemento style al head
      document.head.appendChild(style);
    }
    
    // Limpiar al desmontar
    return () => {
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);
  
  const startTour = (tourName) => {
    setActiveTour(tourName);
  };

  const endTour = () => {
    setActiveTour(null);
  };
  
  const resetTourHistory = () => {
    localStorage.removeItem('hasSeenTour');
    window.location.reload();
  };
  
  // Función para manejar el cambio de paso en el tour
  const handleStepChange = (nextStep) => {
    setCurrentStep(nextStep);
  };

  return (
    <TourContext.Provider value={{ 
      activeTour,
      startTour,
      endTour,
      demoMode,
      resetTourHistory,
      currentStep,
      handleStepChange
    }}>
      {children}
    </TourContext.Provider>
  );
};

export const useTour = () => useContext(TourContext); 