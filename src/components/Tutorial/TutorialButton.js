import React from 'react';
import { useTutorial } from '../../context/TutorialContext';

const TutorialButton = ({ pageName, steps, className }) => {
  const { startTutorial, isPageCompleted } = useTutorial();
  
  // Determinar si la página ya ha sido completada
  const completed = isPageCompleted(pageName);
  
  // Iniciar el tutorial para esta página específica
  const handleStartTutorial = () => {
    startTutorial(pageName, steps);
  };
  
  return (
    <button
      onClick={handleStartTutorial}
      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all ${
        completed 
          ? 'text-green-700 bg-green-100 hover:bg-green-200' 
          : 'text-blue-700 bg-blue-100 hover:bg-blue-200'
      } ${className || ''}`}
      aria-label="Iniciar tutorial"
      title={completed ? "Tutorial completado - Ver de nuevo" : "Ver tutorial de esta página"}
    >
      {completed ? (
        <>
          <i className="fas fa-check-circle mr-2"></i>
          <span>Tutorial completado</span>
        </>
      ) : (
        <>
          <i className="fas fa-question-circle mr-2"></i>
          <span>Ayuda</span>
        </>
      )}
    </button>
  );
};

export default TutorialButton; 