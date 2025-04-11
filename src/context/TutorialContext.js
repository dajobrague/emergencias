import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto
const TutorialContext = createContext();

// Hook personalizado para usar el contexto del tutorial
export const useTutorial = () => useContext(TutorialContext);

// Proveedor del contexto del tutorial
export const TutorialProvider = ({ children }) => {
  // Estado para controlar si el tutorial está activo
  const [isActive, setIsActive] = useState(false);
  
  // Estado para controlar la página actual del tutorial
  const [currentPage, setCurrentPage] = useState('');
  
  // Estado para los pasos del tutorial
  const [steps, setSteps] = useState([]);
  
  // Estado para el índice del paso actual
  const [stepIndex, setStepIndex] = useState(0);
  
  // Estado para el progreso del usuario (páginas completadas)
  const [completedPages, setCompletedPages] = useState({});
  
  // Estado para las funciones que abren modales específicos
  const [modalActions, setModalActions] = useState({});
  
  // Estado para las callbacks específicas de cada paso
  const [stepCallbacks, setStepCallbacks] = useState({});

  // Cargar el progreso del usuario desde localStorage al montar el componente
  useEffect(() => {
    const savedProgress = localStorage.getItem('tutorialProgress');
    if (savedProgress) {
      setCompletedPages(JSON.parse(savedProgress));
    }
  }, []);
  
  // Guardar progreso en localStorage cuando cambie
  useEffect(() => {
    if (Object.keys(completedPages).length > 0) {
      localStorage.setItem('tutorialProgress', JSON.stringify(completedPages));
    }
  }, [completedPages]);
  
  // Efecto para ejecutar callbacks específicas de pasos cuando cambia el índice
  useEffect(() => {
    if (isActive && stepCallbacks[stepIndex]) {
      stepCallbacks[stepIndex]();
    }
  }, [isActive, stepIndex, stepCallbacks]);
  
  // Registrar acciones para abrir modales
  const registerModalAction = (modalId, openAction) => {
    setModalActions(prev => ({
      ...prev,
      [modalId]: openAction
    }));
  };

  // Iniciar el tutorial para una página específica
  const startTutorial = (page, pageSteps, callbacks = {}) => {
    setCurrentPage(page);
    setSteps(pageSteps);
    setStepIndex(0);
    setIsActive(true);
    
    // Si hay callbacks para pasos específicos, registrarlas
    if (Object.keys(callbacks).length > 0) {
      setStepCallbacks(callbacks);
    } else {
      setStepCallbacks({});
    }
  };
  
  // Finalizar el tutorial
  const endTutorial = () => {
    setIsActive(false);
    setStepCallbacks({});
    
    // Marcar la página actual como completada
    if (currentPage) {
      setCompletedPages(prev => ({
        ...prev,
        [currentPage]: true
      }));
    }
    
    // Restaurar el scroll del documento
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.height = '';
    document.documentElement.style.overflow = '';
    document.documentElement.style.height = '';
    
    // Eliminar clases o atributos que puedan afectar al scroll
    document.body.classList.remove('joyride-no-scroll');
    document.documentElement.classList.remove('joyride-no-scroll');
  };
  
  // Ir al siguiente paso del tutorial
  const nextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      endTutorial();
    }
  };
  
  // Ir al paso anterior del tutorial
  const prevStep = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };
  
  // Ir a un paso específico
  const goToStep = (index) => {
    if (index >= 0 && index < steps.length) {
      setStepIndex(index);
    }
  };
  
  // Abrir un modal específico (si está registrado)
  const openModal = (modalId) => {
    if (modalActions[modalId]) {
      modalActions[modalId]();
      return true;
    }
    return false;
  };
  
  // Verificar si una página ha sido completada
  const isPageCompleted = (page) => {
    return !!completedPages[page];
  };
  
  // Resetear el progreso del tutorial
  const resetProgress = () => {
    setCompletedPages({});
    localStorage.removeItem('tutorialProgress');
  };
  
  // Valor del contexto que estará disponible para los componentes hijos
  const contextValue = {
    isActive,
    currentPage,
    steps,
    stepIndex,
    completedPages,
    startTutorial,
    endTutorial,
    nextStep,
    prevStep,
    goToStep,
    isPageCompleted,
    resetProgress,
    registerModalAction,
    openModal
  };
  
  return (
    <TutorialContext.Provider value={contextValue}>
      {children}
    </TutorialContext.Provider>
  );
};

export default TutorialContext; 