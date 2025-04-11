import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const TutorialConfigContext = createContext();

// Hook personalizado para usar el contexto de configuración del tutorial
export const useTutorialConfig = () => useContext(TutorialConfigContext);

// Proveedor del contexto de configuración del tutorial
export const TutorialConfigProvider = ({ children }) => {
  // Colores del tema por defecto
  const defaultColors = {
    primary: '#3b82f6',    // Azul de Tailwind
    secondary: '#ffffff',  // Blanco
    text: '#333333',       // Texto oscuro
    background: '#ffffff', // Fondo blanco
    overlay: 'rgba(0, 0, 0, 0.5)', // Overlay semi-transparente
    success: '#10b981',    // Verde de Tailwind
    error: '#ef4444',      // Rojo de Tailwind
    warning: '#f59e0b',    // Amarillo de Tailwind
  };

  // Configuración por defecto
  const defaultConfig = {
    colors: defaultColors,
    typography: {
      fontFamily: 'inherit',
      titleSize: '18px',
      contentSize: '14px',
      buttonSize: '14px',
    },
    animation: {
      duration: 300, // ms
      timingFunction: 'ease-in-out',
    },
    layout: {
      spacing: '15px',
      borderRadius: '8px',
      buttonPadding: '8px 16px',
    },
    options: {
      showProgress: true,
      showSkipButton: true,
      showBackButton: true,
      disableCloseOnEsc: false,
      disableCloseOnOverlayClick: false,
      disableScrolling: false,
      scrollOffset: 100,
      showCloseButton: true,
    }
  };

  // Estado para la configuración actual
  const [config, setConfig] = useState(defaultConfig);
  
  // Función para actualizar la configuración
  const updateConfig = (newConfig) => {
    setConfig(prevConfig => ({
      ...prevConfig,
      ...newConfig,
      colors: {
        ...prevConfig.colors,
        ...(newConfig.colors || {}),
      },
      typography: {
        ...prevConfig.typography,
        ...(newConfig.typography || {}),
      },
      animation: {
        ...prevConfig.animation,
        ...(newConfig.animation || {}),
      },
      layout: {
        ...prevConfig.layout,
        ...(newConfig.layout || {}),
      },
      options: {
        ...prevConfig.options,
        ...(newConfig.options || {}),
      },
    }));
  };
  
  // Función para restablecer la configuración a los valores predeterminados
  const resetConfig = () => {
    setConfig(defaultConfig);
  };

  // Generar estilos para React Joyride basados en la configuración actual
  const generateJoyrideStyles = () => {
    const { colors, typography, layout } = config;
    
    return {
      options: {
        arrowColor: colors.secondary,
        backgroundColor: colors.background,
        overlayColor: colors.overlay,
        primaryColor: colors.primary,
        spotlightShadow: `0 0 15px ${colors.overlay}`,
        textColor: colors.text,
        zIndex: 10000,
      },
      tooltipContainer: {
        textAlign: 'left',
        padding: layout.spacing,
        fontFamily: typography.fontFamily,
        borderRadius: layout.borderRadius,
      },
      tooltipTitle: {
        fontSize: typography.titleSize,
        fontWeight: 'bold',
        marginBottom: layout.spacing,
        color: colors.text,
      },
      tooltipContent: {
        fontSize: typography.contentSize,
        marginBottom: layout.spacing,
        color: colors.text,
      },
      buttonNext: {
        backgroundColor: colors.primary,
        padding: layout.buttonPadding,
        color: colors.secondary,
        borderRadius: layout.borderRadius,
        fontSize: typography.buttonSize,
      },
      buttonBack: {
        marginRight: '10px',
        color: '#666',
        fontSize: typography.buttonSize,
      },
      buttonClose: {
        color: '#999',
        fontSize: typography.buttonSize,
      }
    };
  };
  
  // Valor del contexto que estará disponible para los componentes hijos
  const contextValue = {
    config,
    updateConfig,
    resetConfig,
    generateJoyrideStyles,
  };
  
  return (
    <TutorialConfigContext.Provider value={contextValue}>
      {children}
    </TutorialConfigContext.Provider>
  );
};

export default TutorialConfigContext; 