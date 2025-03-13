import React, { useEffect } from 'react';
import { Steps } from 'intro.js-react';
import { useTour } from '../../context/TourContext';

const MainTour = () => {
  const { activeTour, endTour, currentStep, handleStepChange } = useTour();
  
  // Mapeo de pasos a paneles correspondientes
  const stepToPanelMap = [
    null, // Paso 0: Introducción (no cambia de panel)
    'fleet-panel', // Paso 1: Seguridad Vial
    'wisetrack-panel', // Paso 2: Wisetrack
    'teletrac-panel', // Paso 3: GPSChile
    'gauss-panel', // Paso 4: Gauss
    'explork-panel', // Paso 5: Explor-K
    'document-panel', // Paso 6: Repositorio
    'records-panel', // Paso 7: Registros
    'simulators-panel', // Paso 8: Simuladores
    'emergency-panel', // Paso 9: Emergencias
    'emergency-units-panel', // Paso 10: Unidades
    'personnel-panel', // Paso 11: Personal
    'dashboard-graphics-panel' // Paso 12: Dashboard
  ];
  
  // Navegar al panel correspondiente cuando cambia el paso actual
  useEffect(() => {
    if (activeTour === 'main' && currentStep > 0 && stepToPanelMap[currentStep]) {
      // Disparar evento para cambiar de panel
      window.dispatchEvent(new CustomEvent('navigate-to-panel', { 
        detail: stepToPanelMap[currentStep] 
      }));
    }
  }, [currentStep, activeTour]);
  
  const steps = [
    {
      element: '.sidebar',
      intro: '<h3 class="text-lg font-bold mb-2">Bienvenido al Sistema de Emergencias y Seguridad Vial</h3><p>Este sistema integral te permite gestionar todos los aspectos relacionados con la seguridad vial y emergencias en la operación minera.</p><p class="mt-2">La barra lateral te da acceso a todas las secciones principales. Puedes expandirla o contraerla usando el botón en la parte superior.</p><p class="mt-2">A continuación, te guiaremos a través de todas las secciones del sistema en orden.</p>',
      position: 'right'
    },
    {
      element: '#fleet-panel h2',
      intro: '<h3 class="text-lg font-bold mb-2">Seguridad Vial</h3><p>Esta sección centraliza todas las herramientas para la gestión de seguridad vial en la operación minera.</p><p class="mt-2">Aquí encontrarás acceso a sistemas de monitoreo, registro de incidentes, control de tránsito y documentación relevante.</p><p class="mt-2"><strong>¿Qué puedes hacer aquí?</strong></p><ul class="list-disc pl-5 mt-1"><li>Acceder a plataformas de monitoreo</li><li>Registrar y consultar incidentes</li><li>Gestionar el control de tránsito</li><li>Ver información de supervisores de ruta</li><li>Acceder a documentos recientes</li></ul>',
      position: 'bottom'
    },
    {
      element: '#wisetrack-panel h2, .wisetrack-title',
      intro: '<h3 class="text-lg font-bold mb-2">Wisetrack</h3><p>Sistema de Monitoreo ADAS (Advanced Driver Assistance Systems) para prevención de accidentes.</p><p class="mt-2"><strong>Funcionalidades principales:</strong></p><ul class="list-disc pl-5 mt-1"><li>Detección de fatiga y distracción</li><li>Alertas de colisión frontal</li><li>Monitoreo de velocidad</li><li>Reportes de conducción</li></ul><p class="mt-2">Esta plataforma es fundamental para prevenir accidentes relacionados con la fatiga y comportamientos de riesgo al volante.</p>',
      position: 'bottom'
    },
    {
      element: '#teletrac-panel h2, .gpschile-title',
      intro: '<h3 class="text-lg font-bold mb-2">GPSChile</h3><p>Plataforma de seguimiento GPS y telemetría para toda la flota de vehículos.</p><p class="mt-2"><strong>Funcionalidades principales:</strong></p><ul class="list-disc pl-5 mt-1"><li>Ubicación en tiempo real</li><li>Historial de recorridos</li><li>Control de kilometraje</li><li>Alertas de mantenimiento</li></ul><p class="mt-2">Ideal para supervisar rutas y optimizar la operación de vehículos en toda la operación minera.</p>',
      position: 'bottom'
    },
    {
      element: '#gauss-panel h2, .gauss-title',
      intro: '<h3 class="text-lg font-bold mb-2">Gauss Control</h3><p>Sistema especializado en la detección y prevención de fatiga en conductores.</p><p class="mt-2"><strong>Funcionalidades principales:</strong></p><ul class="list-disc pl-5 mt-1"><li>Monitoreo de patrones de parpadeo</li><li>Detección de micro-sueños</li><li>Alertas en tiempo real</li><li>Análisis predictivo de fatiga</li></ul><p class="mt-2">Fundamental para prevenir accidentes por fatiga en turnos largos y operaciones nocturnas.</p>',
      position: 'bottom'
    },
    {
      element: '#explork-panel h2, .explork-title',
      intro: '<h3 class="text-lg font-bold mb-2">Explor-K</h3><p>Sistema de gestión y control de tránsito para operaciones mineras.</p><p class="mt-2"><strong>Funcionalidades principales:</strong></p><ul class="list-disc pl-5 mt-1"><li>Control de accesos</li><li>Gestión de rutas</li><li>Monitoreo de tráfico</li><li>Coordinación de flotas</li></ul><p class="mt-2">Esencial para la planificación y optimización del tránsito en la mina, evitando congestiones y mejorando la seguridad vial.</p>',
      position: 'bottom'
    },
    {
      element: '#document-panel h1, #document-panel h2',
      intro: '<h3 class="text-lg font-bold mb-2">Repositorio</h3><p>Biblioteca digital con toda la documentación importante para la operación.</p><p class="mt-2">Aquí encontrarás documentos organizados por categorías:</p><ul class="list-disc pl-5 mt-1"><li>Estudios Técnicos</li><li>Reglamentos y Procedimientos</li><li>Alertas de Seguridad</li><li>FAQ\'s del Operador</li><li>Recursos de Aprendizaje</li></ul><p class="mt-2">Utiliza las herramientas de búsqueda y filtrado para encontrar rápidamente lo que necesitas.</p>',
      position: 'bottom'
    },
    {
      element: '#records-panel h2, .records-title',
      intro: '<h3 class="text-lg font-bold mb-2">Registros</h3><p>Centro de gestión de todos los registros relacionados con la operación.</p><p class="mt-2"><strong>Tipos de registros:</strong></p><ul class="list-disc pl-5 mt-1"><li>Incidentes de seguridad</li><li>Circulación de vehículos</li><li>Mantenimientos programados</li><li>Inspecciones realizadas</li><li>Eventos reportados</li></ul><p class="mt-2">Aquí puedes consultar el historial completo y generar reportes detallados para análisis.</p>',
      position: 'bottom'
    },
    {
      element: '#simulators-panel h2, .simulators-title',
      intro: '<h3 class="text-lg font-bold mb-2">Simuladores</h3><p>Plataforma de simulación para entrenamiento y análisis de escenarios.</p><p class="mt-2"><strong>Funcionalidades disponibles:</strong></p><ul class="list-disc pl-5 mt-1"><li>Simulación de conducción</li><li>Escenarios de emergencia</li><li>Entrenamiento de respuesta</li><li>Análisis de riesgos</li><li>Evaluación de competencias</li></ul><p class="mt-2">Fundamental para la capacitación del personal sin exponer a riesgos reales.</p>',
      position: 'bottom'
    },
    {
      element: '#emergency-panel h2',
      intro: '<h3 class="text-lg font-bold mb-2">Emergencias</h3><p>Centro de control para la gestión integral de emergencias en la operación minera.</p><p class="mt-2"><strong>Secciones principales:</strong></p><ul class="list-disc pl-5 mt-1"><li>Unidades de emergencia</li><li>Personal de respuesta</li><li>Dashboard de estadísticas</li><li>Protocolos de actuación</li><li>Alertas activas</li></ul><p class="mt-2">Desde aquí se coordina toda la respuesta a situaciones de emergencia.</p>',
      position: 'bottom'
    },
    {
      element: '#emergency-units-panel h2, .emergency-units-title',
      intro: '<h3 class="text-lg font-bold mb-2">Unidades de Emergencia</h3><p>Gestión de todas las unidades disponibles para respuesta a emergencias.</p><p class="mt-2"><strong>Funcionalidades clave:</strong></p><ul class="list-disc pl-5 mt-1"><li>Monitoreo de estado y ubicación</li><li>Control de disponibilidad</li><li>Gestión de checklists</li><li>Asignación de personal</li><li>Historial de mantenimiento</li></ul><p class="mt-2">Fundamental para garantizar la operatividad de los recursos de emergencia.</p>',
      position: 'bottom'
    },
    {
      element: '#personnel-panel h2, .personnel-title',
      intro: '<h3 class="text-lg font-bold mb-2">Personal</h3><p>Gestión integral del personal involucrado en la respuesta a emergencias.</p><p class="mt-2"><strong>Funcionalidades principales:</strong></p><ul class="list-disc pl-5 mt-1"><li>Información de contacto y perfiles</li><li>Certificaciones y habilidades</li><li>Control de disponibilidad</li><li>Asignación a unidades</li><li>Gestión de turnos</li></ul><p class="mt-2">Permite coordinar eficientemente el recurso más valioso: el equipo humano.</p>',
      position: 'bottom'
    },
    {
      element: '#dashboard-graphics-panel h2, .dashboard-title',
      intro: '<h3 class="text-lg font-bold mb-2">Dashboard</h3><p>Centro de visualización de datos y estadísticas en tiempo real.</p><p class="mt-2"><strong>Información disponible:</strong></p><ul class="list-disc pl-5 mt-1"><li>Indicadores clave de desempeño</li><li>Estadísticas de emergencias</li><li>Tiempos de respuesta</li><li>Distribución de incidentes</li><li>Tendencias y patrones</li></ul><p class="mt-2">Fundamental para la toma de decisiones basada en datos y la mejora continua.</p>',
      position: 'bottom'
    },
    {
      element: '.help-button',
      intro: '<h3 class="text-lg font-bold mb-2">¿Necesitas ayuda?</h3><p>Este botón de ayuda está siempre disponible. Puedes iniciar tours específicos para cada sección en cualquier momento.</p><p class="mt-2">El botón inferior te permite reiniciar el historial de tours si deseas volver a ver las introducciones.</p><p class="mt-2">¡Has completado el tour general del sistema! Ahora puedes explorar cada sección con más detalle.</p>',
      position: 'left'
    }
  ];
  
  return (
    <Steps
      enabled={activeTour === 'main'}
      steps={steps}
      initialStep={currentStep}
      onExit={endTour}
      onBeforeChange={(nextStep) => {
        handleStepChange(nextStep);
        return true;
      }}
      options={{
        nextLabel: 'Siguiente',
        prevLabel: 'Anterior',
        skipLabel: 'Saltar',
        doneLabel: 'Finalizar',
        hidePrev: false,
        hideNext: false,
        showBullets: true,
        showProgress: true,
        disableInteraction: false,
        showStepNumbers: false,
        exitOnOverlayClick: true,
        exitOnEsc: true,
        tooltipClass: 'custom-tooltip',
        highlightClass: 'custom-highlight',
        scrollToElement: true,
        scrollPadding: 50,
        overlayOpacity: 0.3,
        positionPrecedence: ['bottom', 'right', 'left', 'top'],
        hintButtonLabel: 'Entendido',
        dontShowAgain: false,
        dontShowAgainLabel: 'No mostrar de nuevo',
        scrollTo: 'tooltip'
      }}
    />
  );
};

export default MainTour; 