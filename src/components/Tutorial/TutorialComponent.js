import React, { useEffect, useCallback } from 'react';
import Joyride, { STATUS, EVENTS, ACTIONS } from 'react-joyride';
import { useTutorial } from '../../context/TutorialContext';
import { useTutorialConfig } from '../../context/TutorialConfigContext';

const TutorialComponent = () => {
  const { 
    isActive, 
    steps, 
    stepIndex, 
    nextStep, 
    prevStep, 
    endTutorial,
    goToStep
  } = useTutorial();
  
  // Obtener los estilos del contexto de configuración
  const { generateJoyrideStyles, config } = useTutorialConfig();
  const joyrideStyles = generateJoyrideStyles();

  // Función para hacer scroll al paso actual
  const scrollToStep = useCallback((stepIndex) => {
    if (!steps || !Array.isArray(steps) || stepIndex < 0 || stepIndex >= steps.length) return;
    
    const targetSelector = steps[stepIndex].target;
    if (!targetSelector || typeof targetSelector !== 'string') return;
    
    try {
      // Intentar encontrar el elemento usando diferentes métodos
      let targetElement = document.querySelector(targetSelector);
      
      // Si no se encuentra con querySelector, intentar con getElementById
      if (!targetElement && targetSelector.startsWith('#')) {
        const elementId = targetSelector.substring(1);
        targetElement = document.getElementById(elementId);
      }
      
      if (targetElement) {
        console.log(`Scrolling a elemento para paso ${stepIndex}:`, targetSelector);
        
        // Verificar si el elemento es visible en el viewport
        const rect = targetElement.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        
        const isVisible = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= windowHeight &&
          rect.right <= windowWidth
        );
        
        // Especialmente importante para elementos en la parte inferior
        const isPartiallyVisible = (
          rect.top < windowHeight &&
          rect.bottom > 0
        );
        
        if (!isVisible) {
          // Ajustar scroll para colocar el elemento en el centro si es posible
          const scrollY = window.pageYOffset + rect.top - (windowHeight / 2) + (rect.height / 2);
          
          window.scrollTo({
            top: Math.max(0, scrollY),
            behavior: 'smooth'
          });
          console.log(`Scroll ejecutado para el elemento del paso ${stepIndex}`);
        } else if (!isPartiallyVisible) {
          // Si ni siquiera es parcialmente visible, hacer scroll a su posición
          const scrollY = window.pageYOffset + rect.top - 100;
          window.scrollTo({
            top: Math.max(0, scrollY),
            behavior: 'smooth'
          });
        }
      }
    } catch (error) {
      console.error('Error al hacer scroll al elemento:', error);
    }
  }, [steps]);

  // Función para preparar el elemento objetivo antes de hacer scroll
  const prepareTargetElement = useCallback((stepIndex) => {
    if (!steps || !Array.isArray(steps) || stepIndex < 0 || stepIndex >= steps.length) return;
    
    const targetSelector = steps[stepIndex].target;
    if (!targetSelector || typeof targetSelector !== 'string') return;
    
    try {
      // Verificar si el elemento está dentro de una sección colapsada o un tab oculto
      
      // 1. Verificar si está en una pestaña (tab) y activar la pestaña si es necesario
      if (targetSelector.includes('emergency-timeline') || 
          targetSelector.includes('resources-panel') || 
          targetSelector.includes('protocol-section') || 
          targetSelector.includes('notification-panel')) {
        
        // En estos casos, el contenido puede estar dentro de tabs
        // Intentar encontrar y hacer clic en la pestaña correspondiente
        const tabSelectors = [
          '.scenario-selector button',
          '.tab-selector button',
          '.emergency-section button'
        ];
        
        for (const selector of tabSelectors) {
          const tabs = document.querySelectorAll(selector);
          for (const tab of tabs) {
            // Verificar si el texto o las clases del botón coinciden con la sección objetivo
            const tabText = tab.textContent.toLowerCase();
            if ((targetSelector.includes('timeline') && tabText.includes('alerta')) ||
                (targetSelector.includes('resources') && tabText.includes('brigada')) ||
                (targetSelector.includes('protocol') && tabText.includes('unidad')) ||
                ((targetSelector.includes('notification') && tabText.includes('contacto')) || 
                 (targetSelector.includes('notification') && tabText.includes('salud')))) {
              console.log(`Haciendo clic en tab para mostrar: ${tabText}`);
              tab.click();
              break;
            }
          }
        }
      }
      
      // 2. Verificar si está en un acordeón o sección colapsable
      if (targetSelector.includes('accordion') || 
          targetSelector.includes('collapsible') || 
          targetSelector.includes('expandable')) {
        
        // Buscar el botón de expansión y hacer clic si está colapsado
        const expandButtons = document.querySelectorAll('.accordion-trigger, .collapse-trigger, .expand-btn');
        for (const btn of expandButtons) {
          if (btn.closest(targetSelector) || btn.getAttribute('aria-controls') === targetSelector.substring(1)) {
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            if (!isExpanded) {
              console.log(`Expandiendo sección colapsada para: ${targetSelector}`);
              btn.click();
            }
            break;
          }
        }
      }
    } catch (error) {
      console.error('Error al preparar el elemento objetivo:', error);
    }
  }, [steps]);

  // Efecto para preparar elementos objetivo cuando cambia el paso
  useEffect(() => {
    if (isActive && steps && Array.isArray(steps) && steps.length > 0 && stepIndex >= 0 && stepIndex < steps.length) {
      // Primero preparar el elemento
      prepareTargetElement(stepIndex);
      
      // Luego esperar un poco antes de hacer scroll
      const prepareTimer = setTimeout(() => {
        scrollToStep(stepIndex);
      }, 400);
      
      return () => clearTimeout(prepareTimer);
    }
  }, [isActive, stepIndex, steps, prepareTargetElement, scrollToStep]);

  // Efecto para agregar enfoque visual a los elementos del tutorial
  useEffect(() => {
    if (isActive && steps && Array.isArray(steps) && steps.length > 0 && stepIndex >= 0 && stepIndex < steps.length) {
      try {
        const currentTarget = steps[stepIndex].target;
        if (typeof currentTarget === 'string') {
          console.log(`Aplicando efecto visual para paso ${stepIndex}:`, currentTarget);
          
          // Intentar encontrar el elemento usando querySelector primero
          const element = document.querySelector(currentTarget);
          
          if (element) {
            element.setAttribute('data-tutorial-active', 'true');
            element.style.zIndex = '9999';
            element.style.position = element.style.position || 'relative';
          } else if (currentTarget.startsWith('#')) {
            // Intentar con getElementById como fallback
            const idElement = document.getElementById(currentTarget.substring(1));
            if (idElement) {
              idElement.setAttribute('data-tutorial-active', 'true');
              idElement.style.zIndex = '9999';
              idElement.style.position = idElement.style.position || 'relative';
            }
          }
        }

        // Limpiar el enfoque visual cuando el componente se desmonte o cuando cambie el paso
        return () => {
          const allElements = document.querySelectorAll('[data-tutorial-active="true"]');
          allElements.forEach(el => {
            el.removeAttribute('data-tutorial-active');
            el.style.zIndex = '';
          });
        };
      } catch (err) {
        console.error('Error al intentar resaltar el elemento del tutorial:', err);
      }
    }
  }, [isActive, steps, stepIndex]);

  // Manejador de eventos del tutorial
  const handleJoyrideCallback = (data) => {
    const { action, status, type, index } = data;
    
    // Verificar que steps existe y tiene elementos
    if (!steps || !Array.isArray(steps) || steps.length === 0) {
      console.warn('No hay pasos definidos en el tutorial');
      return;
    }
    
    console.log('Tutorial callback:', { 
      action, 
      status, 
      type, 
      index, 
      stepIndex, 
      target: steps[index]?.target 
    });

    // Para depuración - imprimir todos los elementos disponibles
    if (type === EVENTS.TOUR_START) {
      console.log('Todos los elementos del tutorial:');
      steps.forEach((step, i) => {
        const el = document.querySelector(step.target);
        console.log(`Paso ${i}: ${step.target} - ${el ? 'ENCONTRADO' : 'NO ENCONTRADO'}`);
      });
    }

    if (type === EVENTS.TARGET_NOT_FOUND) {
      // Verificar que existe el paso actual
      if (!steps[index]) {
        console.warn(`No se encontró el paso con índice ${index}`);
        return;
      }
      
      // Manejo especial para modales
      if (steps[index]?.target === '#incident-modal' || steps[index]?.target === '#circulation-modal') {
        console.log(`Modal no encontrado: ${steps[index]?.target}. Intentando abrir...`);
        // Intentar abrir el modal correspondiente
        const modalId = steps[index]?.target.substring(1);
        const openModalFn = window[`open${modalId.charAt(0).toUpperCase() + modalId.slice(1)}`];
        
        if (typeof openModalFn === 'function') {
          openModalFn();
          // Esperar a que se abra el modal antes de continuar
          setTimeout(() => {
            console.log(`Reintentando paso ${index} después de abrir modal`);
            goToStep(index);
          }, 500);
          return;
        }
      }
      
      // El objetivo del paso no se encontró
      console.warn(`Elemento no encontrado para el paso ${index}:`, steps[index]?.target);
      
      // Intentar encontrar el elemento con distintos selectores alternativos
      const targetStr = steps[index]?.target;
      if (typeof targetStr === 'string') {
        // Lista de selectores alternativos para probar
        const alternativeSelectors = [
          `#${targetStr.replace(/[^a-zA-Z0-9-_]/g, '')}`,
          `[id="${targetStr.replace(/[^a-zA-Z0-9-_]/g, '')}"]`,
          `.${targetStr.replace(/[^a-zA-Z0-9-_]/g, '')}`,
          `[data-tutorial="true"]`
        ];
        
        // Probar cada selector alternativo
        for (const selector of alternativeSelectors) {
          try {
            const el = document.querySelector(selector);
            if (el) {
              console.log(`Elemento encontrado con selector alternativo: ${selector}`);
              break;
            }
          } catch (err) {
            console.error(`Error al probar selector alternativo ${selector}:`, err);
          }
        }
      }
      
      // Pasar al siguiente paso en lugar de cerrar
      nextStep();
    } else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      // Tutorial completado o saltado
      endTutorial();
    } else if (type === EVENTS.STEP_AFTER && action === ACTIONS.NEXT) {
      // Solo avanzar cuando es explícitamente una acción de "siguiente"
      // Abrir modal antes de avanzar si el siguiente paso es un modal
      if (index === 9 && steps.length > 10 && steps[10]?.target === '#incident-modal') {
        // Paso 10 a 11 - Abrir modal de incidentes antes de avanzar
        if (document.querySelector(steps[10].target) === null) {
          console.log('Preparando modal para paso 11...');
          
          // Asegurarnos que el modal esté abierto
          const openIncidentModal = window.openIncidentModal || (() => {
            const modalBtn = document.querySelector('.button-registro-incidente');
            if (modalBtn) modalBtn.click();
          });
          
          openIncidentModal();
          
          // Esperar a que aparezca el modal antes de avanzar
          setTimeout(() => {
            if (document.querySelector('#incident-modal')) {
              console.log('Modal incidente abierto, continuando...');
              nextStep();
            } else {
              console.warn('Modal incidente no se abrió correctamente');
            }
          }, 300);
          return;
        }
      } else if (index === 11 && steps.length > 12 && steps[12]?.target === '#circulation-modal') {
        // Paso 12 a 13 - Abrir modal de circulación antes de avanzar
        if (document.querySelector(steps[12].target) === null) {
          console.log('Preparando modal para paso 13...');
          
          // Asegurarnos que el modal esté abierto
          const openCirculationModal = window.openCirculationModal || (() => {
            const modalBtn = document.querySelector('.button-control-camiones');
            if (modalBtn) modalBtn.click();
          });
          
          openCirculationModal();
          
          // Esperar a que aparezca el modal antes de avanzar
          setTimeout(() => {
            if (document.querySelector('#circulation-modal')) {
              console.log('Modal circulación abierto, continuando...');
              nextStep();
            } else {
              console.warn('Modal circulación no se abrió correctamente');
            }
          }, 300);
          return;
        }
      }
      
      // Avanzar al siguiente paso
      nextStep();
    } else if (action === ACTIONS.PREV) {
      // Cualquier acción de "anterior" debe retroceder, independientemente del tipo de evento
      console.log("RETROCEDIENDO al paso anterior", stepIndex - 1);
      prevStep();
    }
  };

  // Efecto para gestionar el bloqueo/desbloqueo del scroll del documento
  useEffect(() => {
    if (!isActive) return;
    
    // Guardar los estilos originales del body para restaurarlos después
    const originalBodyStyle = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      height: document.body.style.height
    };
    
    // Función para restaurar el scroll cuando se termine el tutorial
    return () => {
      // Restaurar los estilos originales del body
      document.body.style.overflow = originalBodyStyle.overflow;
      document.body.style.position = originalBodyStyle.position;
      document.body.style.height = originalBodyStyle.height;
      
      // Asegurarse de que se restaure el scroll
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
      
      // Si por alguna razón los valores originales no existían, establecer a los valores por defecto
      if (!originalBodyStyle.overflow) document.body.style.overflow = '';
      if (!originalBodyStyle.position) document.body.style.position = '';
      if (!originalBodyStyle.height) document.body.style.height = '';
      
      console.log('Tutorial finalizado: Restaurando scroll del documento');
    };
  }, [isActive]);  // Solo se ejecuta cuando cambia isActive

  // Si el tutorial no está activo, no renderizar nada
  if (!isActive) return null;

  return (
    <>
      <Joyride
        callback={handleJoyrideCallback}
        continuous
        hideCloseButton={!config.options.showCloseButton}
        run={isActive}
        scrollToFirstStep
        showProgress={config.options.showProgress}
        showSkipButton={config.options.showSkipButton}
        steps={steps}
        stepIndex={stepIndex}
        styles={joyrideStyles}
        disableCloseOnEsc={config.options.disableCloseOnEsc}
        disableOverlayClose={config.options.disableCloseOnOverlayClick}
        disableScrolling={false}
        scrollOffset={config.options.scrollOffset}
        spotlightClicks={true}
        locale={{
          back: 'Atrás',
          close: 'Cerrar',
          last: 'Finalizar',
          next: 'Siguiente',
          skip: 'Omitir'
        }}
        debug={false}
      />
    </>
  );
};

export default TutorialComponent; 