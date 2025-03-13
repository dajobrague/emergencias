import React, { useEffect, useState } from 'react';
import { Steps } from 'intro.js-react';
import { useTour } from '../../context/TourContext';

const EmergencyTour = () => {
  const { activeTour, endTour, handleStepChange } = useTour();
  
  // Estados para controlar los modales abiertos
  const [emergencyFormOpened, setEmergencyFormOpened] = useState(false);
  const [unitDetailsOpened, setUnitDetailsOpened] = useState(false);
  
  // Limpiar estados al desmontar el componente
  useEffect(() => {
    return () => {
      // Asegurarse que los modales estén cerrados si se desmonta el componente
      if (emergencyFormOpened && window.handleCloseAlertForm) {
        window.handleCloseAlertForm();
      }
      if (unitDetailsOpened && window.handleCloseUnitDetails) {
        window.handleCloseUnitDetails();
      }
    };
  }, [emergencyFormOpened, unitDetailsOpened]);
  
  const steps = [
    {
      element: '#emergency-panel h2',
      intro: '<h3 class="text-lg font-bold mb-2">Panel de Emergencias</h3><p>Bienvenido al centro de control para la gestión integral de emergencias en la operación minera.</p><p class="mt-2">Desde esta interfaz podrás monitorear todas las situaciones de emergencia en tiempo real, coordinar el despliegue de recursos y acceder a toda la información necesaria para una respuesta efectiva.</p>',
      position: 'bottom',
      tooltipClass: 'custom-tooltip'
    },
    {
      element: '.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4.gap-4.mb-8',
      intro: '<h3 class="text-lg font-bold mb-2">Estadísticas de Emergencia</h3><p>Este panel te proporciona un resumen rápido de la situación actual de emergencias.</p><p class="mt-2">Aquí puedes visualizar en tiempo real:</p><ul class="list-disc pl-5 mt-1"><li>Número de emergencias activas que requieren atención</li><li>Cantidad de brigadistas disponibles para responder</li><li>Unidades de emergencia actualmente en servicio</li><li>Alertas recientes que han sido reportadas</li></ul><p class="mt-2">Estos indicadores te dan una visión general instantánea del estado operativo.</p>',
      position: 'bottom',
      tooltipClass: 'custom-tooltip'
    },
    {
      element: '.bg-white.rounded-xl.shadow-sm.p-6.mb-8',
      intro: '<h3 class="text-lg font-bold mb-2">Emergencia Actual</h3><p>Esta sección muestra información detallada sobre la emergencia en curso, incluyendo un mapa interactivo.</p><p class="mt-2">Funcionalidades principales:</p><ul class="list-disc pl-5 mt-1"><li>Visualización geográfica de la emergencia actual</li><li>Ubicación de unidades y recursos en tiempo real</li><li>Botón "Nueva Emergencia" para reportar un nuevo incidente</li><li>Acceso al historial de emergencias previas</li></ul><p class="mt-2">El mapa es completamente interactivo: puedes hacer zoom, desplazarte y ver información detallada al hacer clic en los marcadores.</p>',
      position: 'top',
      tooltipClass: 'custom-tooltip'
    },
    {
      element: '#new-emergency-btn',
      intro: '<h3 class="text-lg font-bold mb-2">Reportar Nueva Emergencia</h3><p>Este botón te permite registrar un nuevo incidente o emergencia en el sistema.</p><p class="mt-2">Al hacer clic aquí, se abrirá un formulario donde podrás:</p><ul class="list-disc pl-5 mt-1"><li>Seleccionar el tipo de emergencia</li><li>Indicar la ubicación exacta</li><li>Especificar el nivel de gravedad</li><li>Describir la situación</li><li>Solicitar recursos específicos</li></ul><p class="mt-2">La información proporcionada será inmediatamente notificada a los equipos correspondientes.</p><p class="mt-2 text-blue-600 font-semibold">* Al hacer clic en Siguiente se cerrará este formulario *</p>',
      position: 'left',
      tooltipClass: 'custom-tooltip'
    },
    {
      element: '.mb-8:nth-of-type(3)',
      intro: '<h3 class="text-lg font-bold mb-2">Brigadas Operativas</h3><p>Esta sección muestra todas las brigadas disponibles para responder a emergencias, organizadas por tipo.</p><p class="mt-2">Información disponible:</p><ul class="list-disc pl-5 mt-1"><li>Brigadas AA (internas): Personal propio de la compañía</li><li>Brigadas Externas: Contratistas y servicios externos</li><li>Número de operativos disponibles por turno</li><li>Líderes asignados a cada brigada</li><li>Zonas de cobertura</li></ul><p class="mt-2">Haciendo clic en cualquier brigada, podrás ver información detallada y contactar directamente al personal.</p>',
      position: 'top',
      tooltipClass: 'custom-tooltip'
    },
    {
      element: '.flex.items-center.mb-3:first-of-type',
      intro: '<h3 class="text-lg font-bold mb-2">Brigadas AA</h3><p>Esta sección corresponde a las brigadas internas de la compañía (AA) especializadas en respuesta a emergencias.</p>',
      position: 'right',
      tooltipClass: 'custom-tooltip'
    },
    {
      element: '.flex.items-center.mb-3:nth-of-type(2)',
      intro: '<h3 class="text-lg font-bold mb-2">Brigadas Externas</h3><p>Esta sección corresponde a las brigadas externas (contratistas) que complementan la respuesta a emergencias.</p>',
      position: 'left',
      tooltipClass: 'custom-tooltip'
    },
    {
      element: '.mb-8:nth-of-type(4) > h3',
      intro: '<h3 class="text-lg font-bold mb-2">Unidades de Emergencia</h3><p>Aquí se muestran todos los vehículos y equipos especializados disponibles para respuesta a emergencias.</p><p class="mt-2">Tipos de unidades:</p><ul class="list-disc pl-5 mt-1"><li>Unidades contra incendios: Vehículos equipados para combatir fuegos</li><li>Unidades de rescate: Equipadas para extracciones y salvamentos</li><li>Unidades tácticas: Para coordinación y mando en terreno</li><li>Ambulancias: Para atención médica y traslados</li><li>Helicópteros: Para evacuaciones y respuesta rápida</li></ul><p class="mt-2">Cada unidad muestra su estado actual de disponibilidad y puedes acceder a información detallada haciendo clic en "Detalles".</p>',
      position: 'top',
      tooltipClass: 'custom-tooltip'
    },
    {
      element: '.grid.grid-cols-1.sm\\:grid-cols-2.md\\:grid-cols-3.lg\\:grid-cols-4.xl\\:grid-cols-7.gap-4 > div:first-child button',
      intro: '<h3 class="text-lg font-bold mb-2">Detalles de Unidad</h3><p>Cada tarjeta representa una unidad de emergencia con información esencial.</p><p class="mt-2">La información incluye:</p><ul class="list-disc pl-5 mt-1"><li>Nombre de la unidad y su ubicación</li><li>Tipo de unidad (contra incendios, rescate, etc.)</li><li>Estado actual (activa, en espera, en mantenimiento)</li><li>Capacidades y equipamiento principal</li></ul><p class="mt-2">El color del ícono indica el tipo de unidad, mientras que el estado se muestra con un indicador de color en la parte inferior.</p><p class="mt-2 text-blue-600 font-semibold">* Al hacer clic en Siguiente se cerrarán los detalles *</p>',
      position: 'bottom',
      tooltipClass: 'custom-tooltip'
    },
    {
      element: '.space-y-4.mb-8',
      intro: '<h3 class="text-lg font-bold mb-2">Alertas Activas</h3><p>Esta sección muestra las alertas de emergencia actualmente activas en el sistema.</p><p class="mt-2">Cada alerta incluye:</p><ul class="list-disc pl-5 mt-1"><li>Tipo de emergencia (incendio, accidente, etc.)</li><li>Título y descripción de la situación</li><li>Ubicación exacta del incidente</li><li>Tiempo transcurrido desde el reporte</li><li>Botones para ver detalles o iniciar una respuesta</li></ul><p class="mt-2">Las alertas se ordenan por prioridad y tiempo, mostrando primero las más recientes y urgentes.</p>',
      position: 'top',
      tooltipClass: 'custom-tooltip'
    },
    {
      element: '.mb-8:nth-of-type(6)',
      intro: '<h3 class="text-lg font-bold mb-2">Contactos de Emergencia</h3><p>Directorio de contactos clave para situaciones de emergencia.</p><p class="mt-2">Incluye:</p><ul class="list-disc pl-5 mt-1"><li>Policlínicos de cada zona</li><li>Puntos de control de acceso</li><li>Supervisores de turno</li><li>Jefes de operaciones</li><li>Servicios de emergencia externos</li></ul><p class="mt-2">Puedes realizar llamadas directamente haciendo clic en el botón "Llamar", lo que agiliza la comunicación en situaciones críticas.</p>',
      position: 'top',
      tooltipClass: 'custom-tooltip'
    }
  ];
  
  // Función para manejar el cambio antes de pasar al siguiente paso
  const handleBeforeChange = (nextStep) => {
    // Si estamos por cambiar desde el paso 3 (formulario de emergencia)
    // Y el formulario está abierto, lo cerramos
    if (emergencyFormOpened && nextStep !== 3) {
      if (window.handleCloseAlertForm) {
        window.handleCloseAlertForm();
      }
      setEmergencyFormOpened(false);
    }
    
    // Si estamos por cambiar desde el paso 8 (detalles de unidad)
    // Y los detalles están abiertos, los cerramos
    if (unitDetailsOpened && nextStep !== 8) {
      if (window.handleCloseUnitDetails) {
        window.handleCloseUnitDetails();
      }
      setUnitDetailsOpened(false);
    }
    
    handleStepChange(nextStep);
    return true;
  };
  
  // Función para abrir formularios y modales cuando llegamos a ciertos pasos
  const handleAfterChange = (currentStep) => {
    // Abrir formulario de nueva emergencia en el paso 3
    if (currentStep === 3 && !emergencyFormOpened) {
      try {
        const newEmergencyBtn = document.getElementById('new-emergency-btn');
        if (newEmergencyBtn) {
          newEmergencyBtn.click();
          setEmergencyFormOpened(true);
        }
      } catch (error) {
        console.log("Error al intentar abrir el formulario:", error);
      }
    }
    
    // Abrir detalles de la primera unidad en el paso 8
    if (currentStep === 8 && !unitDetailsOpened) {
      try {
        const unitDetailBtn = document.querySelector('.grid.grid-cols-1.sm\\:grid-cols-2.md\\:grid-cols-3.lg\\:grid-cols-4.xl\\:grid-cols-7.gap-4 > div:first-child button');
        if (unitDetailBtn) {
          unitDetailBtn.click();
          setUnitDetailsOpened(true);
        }
      } catch (error) {
        console.log("Error al intentar abrir detalles de unidad:", error);
      }
    }
  };
  
  return (
    <Steps
      enabled={activeTour === 'emergency'}
      steps={steps}
      initialStep={0}
      onExit={endTour}
      onBeforeChange={handleBeforeChange}
      onAfterChange={handleAfterChange}
      options={{
        nextLabel: 'Siguiente',
        prevLabel: 'Anterior',
        skipLabel: 'Saltar',
        doneLabel: 'Finalizar',
        showBullets: true,
        showProgress: true,
        disableInteraction: false,
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

export default EmergencyTour; 