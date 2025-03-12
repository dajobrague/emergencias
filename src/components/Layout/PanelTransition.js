import React, { useState, useEffect } from 'react';

const PanelTransition = ({ children, activePanel, previousPanel }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentContent, setCurrentContent] = useState(children);
  
  useEffect(() => {
    if (activePanel !== previousPanel) {
      // Iniciar animación de salida
      setIsAnimating(true);
      
      // Después de completar la animación de salida, actualizar el contenido
      const timer = setTimeout(() => {
        setCurrentContent(children);
        // Inmediatamente iniciar la animación de entrada
        setIsAnimating(false);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      // Si no hay cambio de panel, simplemente actualizar el contenido sin animación
      setCurrentContent(children);
    }
  }, [children, activePanel, previousPanel]);
  
  return (
    <div 
      className={`p-6 transition-all duration-300 ease-in-out ${
        isAnimating 
          ? 'opacity-0 transform translate-y-4' 
          : 'opacity-100 transform translate-y-0'
      }`}
    >
      {currentContent}
    </div>
  );
};

export default PanelTransition; 