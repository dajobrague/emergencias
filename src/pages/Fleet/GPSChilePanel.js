import React from 'react';
import { useTutorial } from '../../context/TutorialContext';
import { gpsChilePanelSteps } from '../../components/Tutorial/tutorialSteps';

const GPSChilePanel = () => {
  // Acceder al contexto del tutorial
  const { startTutorial } = useTutorial();

  // Manejar el inicio del tutorial
  const handleStartTutorial = () => {
    startTutorial('gpschile-panel', gpsChilePanelSteps);
  };

  return (
    <div className="p-6" id="gpschile-panel">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-dark">Sistema GPSChile Navman</h2>
        <button 
          onClick={handleStartTutorial}
          className="ml-2 flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all text-green-700 bg-green-100 hover:bg-green-200"
          aria-label="Iniciar tutorial"
        >
          <i className="fas fa-question-circle mr-2"></i>
          <span>Ayuda</span>
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <i className="fas fa-location-arrow text-green-500 text-3xl"></i>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Acceder a GPSChile Navman</h2>
        
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Plataforma de seguimiento y monitoreo de flota en tiempo real. Visualiza ubicaciones, rutas y 
          actualizaciones de estado de los vehículos.
        </p>
        
        <p className="text-gray-600 mb-8">
          Haga clic en el botón a continuación para acceder al sistema GPSChile Navman.
        </p>
        
        <a 
          href="https://director-cl.teletracnavman.net/avl3/Account/Login?ReturnUrl=%2favl3%2fMain%2fVehiclesNav" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
        >
          <i className="fas fa-external-link-alt mr-2"></i>
          Iniciar GPSChile Navman
        </a>
      </div>
    </div>
  );
};

export default GPSChilePanel; 