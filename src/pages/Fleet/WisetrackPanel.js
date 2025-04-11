import React from 'react';
import { useTutorial } from '../../context/TutorialContext';
import { wisetrackPanelSteps } from '../../components/Tutorial/tutorialSteps';

const WisetrackPanel = () => {
  // Acceder al contexto del tutorial
  const { startTutorial } = useTutorial();

  // Manejar el inicio del tutorial
  const handleStartTutorial = () => {
    startTutorial('wisetrack-panel', wisetrackPanelSteps);
  };

  return (
    <div className="p-6" id="wisetrack-panel">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-dark">Sistema Wisetrack</h2>
        <button 
          onClick={handleStartTutorial}
          className="ml-2 flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all text-blue-700 bg-blue-100 hover:bg-blue-200"
          aria-label="Iniciar tutorial"
        >
          <i className="fas fa-question-circle mr-2"></i>
          <span>Ayuda</span>
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
            <i className="fas fa-map-marker-alt text-blue-500 text-3xl"></i>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Acceder a Wisetrack</h2>
        
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Sistema avanzado de gestión de flotas y análisis de conducción. Monitorea el comportamiento 
          de los conductores y optimiza las rutas.
        </p>
        
        <p className="text-gray-600 mb-8">
          Haga clic en el botón a continuación para acceder al sistema Wisetrack.
        </p>
        
        <a 
          href="https://dispatcher.wisetrack.cl/Portal/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          <i className="fas fa-external-link-alt mr-2"></i>
          Iniciar Wisetrack
        </a>
      </div>
    </div>
  );
};

export default WisetrackPanel; 