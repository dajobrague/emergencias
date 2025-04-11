import React from 'react';
import { useTutorial } from '../../context/TutorialContext';
import { gaussPanelSteps } from '../../components/Tutorial/tutorialSteps';

const GaussPanel = () => {
  // Acceder al contexto del tutorial
  const { startTutorial } = useTutorial();

  // Manejar el inicio del tutorial
  const handleStartTutorial = () => {
    startTutorial('gauss-panel', gaussPanelSteps);
  };

  return (
    <div className="p-6" id="gauss-panel">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-dark">Sistema Gauss Control</h2>
        <button 
          onClick={handleStartTutorial}
          className="ml-2 flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all text-purple-700 bg-purple-100 hover:bg-purple-200"
          aria-label="Iniciar tutorial"
        >
          <i className="fas fa-question-circle mr-2"></i>
          <span>Ayuda</span>
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
            <i className="fas fa-compass text-purple-500 text-3xl"></i>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Acceder a Gauss Control</h2>
        
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Sistema de Control y Gestión de Fatiga en la Conducción.
        </p>
        
        <p className="text-gray-600 mb-8">
          Haga clic en el botón a continuación para acceder al sistema Gauss Control.
        </p>
        
        <a 
          href="https://w3.gausscontrol.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
        >
          <i className="fas fa-external-link-alt mr-2"></i>
          Iniciar Gauss Control
        </a>
      </div>
    </div>
  );
};

export default GaussPanel; 