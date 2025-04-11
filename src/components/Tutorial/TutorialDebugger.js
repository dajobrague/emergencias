import { useEffect } from 'react';
import { useTutorial } from '../../context/TutorialContext';

const TutorialDebugger = () => {
  const { isActive, steps, stepIndex } = useTutorial();

  useEffect(() => {
    if (!isActive || !steps || steps.length === 0) return;

    // Función para imprimir información detallada sobre los elementos
    const analyzeElement = (element, label) => {
      if (!element) return null;
      
      console.log(`%c${label} ANÁLISIS:`, 'background: #333; color: #fff; padding: 2px 5px;');
      console.log('Elemento:', element);
      console.log('ID:', element.id);
      console.log('Clases:', element.className);
      console.log('Posición:', element.getBoundingClientRect());
      console.log('zIndex:', getComputedStyle(element).zIndex);
      console.log('Estilos inline:', element.style.cssText);
      console.log('Visible:', isElementVisible(element));
      
      return element;
    };

    // Verificar si el elemento está visible
    const isElementVisible = (element) => {
      const style = window.getComputedStyle(element);
      return style.display !== 'none' && 
             style.visibility !== 'hidden' && 
             element.getBoundingClientRect().height > 0;
    };

    // Depuración especial para los pasos 10 y 11 (Registro de Incidentes y Control de Camiones)
    if (stepIndex === 9 || stepIndex === 10) {
      console.log(`%c==== DEPURACIÓN PASO ${stepIndex + 1} ====`, 'background: #ff6b6b; color: #fff; padding: 5px;');
      
      // Verificar todos los servicios para ver si hay conflictos de selectores
      const serviceElements = document.querySelectorAll('[id^="service-"]');
      console.log('Todos los elementos de servicio:', serviceElements);
      
      // Verificar elementos específicamente problemáticos
      const wisetrackEl = document.querySelector('#service-wisetrack');
      const explorkEl = document.querySelector('#service-explork');
      analyzeElement(wisetrackEl, 'WISETRACK');
      analyzeElement(explorkEl, 'EXPLOR-K');
      
      // Verificar los botones de registro y control
      const incidentBtn = document.querySelector('#incident-button');
      const circBtn = document.querySelector('#circulation-button');
      analyzeElement(incidentBtn, 'BOTÓN INCIDENTES');
      analyzeElement(circBtn, 'BOTÓN CIRCULACIÓN');

      // Verificar botones por clase
      const incidentBtnClass = document.querySelector('.button-registro-incidente');
      const circBtnClass = document.querySelector('.button-control-camiones');
      analyzeElement(incidentBtnClass, 'BOTÓN INCIDENTES (POR CLASE)');
      analyzeElement(circBtnClass, 'BOTÓN CIRCULACIÓN (POR CLASE)');

      // Verificar si los botones están en la sección correcta
      const registrosSection = document.querySelector('.section-registros');
      if (registrosSection) {
        console.log('Sección de registros encontrada:', registrosSection);
        console.log('Contenido de la sección:', registrosSection.parentElement.innerHTML);
      }
      
      // Comprobar si hay elementos superpuestos o con el mismo ID
      document.querySelectorAll('[id]').forEach(el => {
        const id = el.id;
        const elements = document.querySelectorAll(`#${id}`);
        if (elements.length > 1) {
          console.warn(`¡ADVERTENCIA! ID duplicado: ${id} - ${elements.length} elementos tienen este ID`);
        }
      });
    }

    // Depuración general para todos los pasos
    if (steps[stepIndex]) {
      const target = steps[stepIndex].target;
      console.log(`%cPaso actual ${stepIndex + 1}:`, 'background: #4CAF50; color: white; padding: 2px 5px;', {
        target, 
        title: steps[stepIndex].title
      });
      
      try {
        const element = document.querySelector(target);
        if (element) {
          analyzeElement(element, 'ELEMENTO OBJETIVO');
        } else {
          console.warn(`No se encontró el elemento con selector: ${target}`);
          
          // Intentar encontrar por ID si es un selector ID
          if (target.startsWith('#')) {
            const idElement = document.getElementById(target.substring(1));
            if (idElement) {
              analyzeElement(idElement, 'ELEMENTO POR ID');
            } else {
              console.error(`No se encontró elemento con ID: ${target.substring(1)}`);
            }
          }
        }
      } catch (err) {
        console.error('Error al analizar el elemento del paso:', err);
      }
    }
  }, [isActive, steps, stepIndex]);

  // No renderizar nada visible
  return null;
};

export default TutorialDebugger; 