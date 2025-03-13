import React from 'react';
import { Steps } from 'intro.js-react';
import { useTour } from '../../context/TourContext';

const RoadSafetyTour = () => {
  const { activeTour, endTour, handleStepChange } = useTour();
  
  const steps = [
    {
      element: '.grid.grid-cols-1.sm\\:grid-cols-2.md\\:grid-cols-4',
      intro: '<h3 class="text-lg font-bold mb-2">Sistemas de Monitoreo</h3><p>Esta sección muestra las principales herramientas de monitoreo para la seguridad vial en la operación minera.</p><p class="mt-2">Cada tarjeta te da acceso a un sistema externo especializado:</p><ul class="list-disc pl-5 mt-1"><li><strong>Wisetrack:</strong> Sistema de monitoreo ADAS</li><li><strong>GPSChile:</strong> Sistema Navman para monitoreo de flotas</li><li><strong>Gauss Control:</strong> Sistema anti-fatiga para conductores</li><li><strong>EXPLOR-K:</strong> Sistema de control de tránsito minero</li></ul><p class="mt-2">Haz clic en cualquier tarjeta para acceder al sistema correspondiente.</p>',
      position: 'bottom',
      tooltipClass: 'custom-tooltip'
    },
    {
      element: '#twitter-container',
      intro: '<h3 class="text-lg font-bold mb-2">Actualizaciones en Tiempo Real</h3><p>En esta sección encontrarás publicaciones en tiempo real de cuentas oficiales relacionadas con la seguridad vial.</p><p class="mt-2">Podrás visualizar información de diferentes fuentes como:</p><ul class="list-disc pl-5 mt-1"><li>Dirección de Meteorología</li><li>Seremi de Transporte</li><li>Carabineros de Chile</li><li>Ministerio de Obras Públicas</li><li>Otras entidades oficiales</li></ul><p class="mt-2">Estas actualizaciones te proporcionan información vital sobre condiciones del camino, clima, normativas y alertas.</p>',
      position: 'left',
      tooltipClass: 'custom-tooltip'
    },
    {
      element: '.bg-gray-50.hover\\:bg-gray-100.transition-colors.p-4.rounded-lg.text-center.cursor-pointer:nth-child(1)',
      intro: '<h3 class="text-lg font-bold mb-2">Registro de Incidentes</h3><p>Este botón te permite abrir un formulario para registrar incidentes relacionados con la seguridad vial.</p><p class="mt-2">Podrás ingresar información detallada sobre:</p><ul class="list-disc pl-5 mt-1"><li>Tipo de incidente</li><li>Ubicación</li><li>Fecha y hora</li><li>Vehículos involucrados</li><li>Descripción y severidad</li></ul><p class="mt-2">Al hacer clic, se abrirá un formulario donde podrás registrar y enviar toda la información necesaria para documentar correctamente el incidente.</p>',
      position: 'top',
      tooltipClass: 'custom-tooltip'
    },
    {
      element: '.bg-gray-50.hover\\:bg-gray-100.transition-colors.p-4.rounded-lg.text-center.cursor-pointer:nth-child(2)',
      intro: '<h3 class="text-lg font-bold mb-2">Control de Tránsito</h3><p>Este botón abre un formulario para la gestión del tránsito de vehículos en la operación.</p><p class="mt-2">El formulario permite:</p><ul class="list-disc pl-5 mt-1"><li>Registrar entrada y salida de vehículos</li><li>Programar horarios de circulación</li><li>Asignar rutas específicas</li><li>Establecer restricciones temporales</li><li>Gestionar permisos especiales</li></ul><p class="mt-2">Esta herramienta es fundamental para mantener un flujo de tránsito ordenado y seguro en todas las rutas de la operación.</p>',
      position: 'top',
      tooltipClass: 'custom-tooltip'
    },
    {
      element: '.space-y-3',
      intro: '<h3 class="text-lg font-bold mb-2">Supervisores de Ruta</h3><p>Aquí encontrarás la información de contacto de los supervisores de ruta asignados a diferentes zonas.</p><p class="mt-2">Para cada supervisor podrás ver:</p><ul class="list-disc pl-5 mt-1"><li>Nombre completo</li><li>Zona asignada</li><li>Número de teléfono directo</li><li>Correo electrónico</li></ul><p class="mt-2">Los supervisores son tu primer punto de contacto ante cualquier situación que requiera atención inmediata en las rutas.</p>',
      position: 'left',
      tooltipClass: 'custom-tooltip'
    },
    {
      element: '.document-container',
      intro: '<h3 class="text-lg font-bold mb-2">Documentos Recientes</h3><p>Esta sección te muestra los documentos más recientes relacionados con seguridad vial.</p><p class="mt-2">Aquí podrás encontrar:</p><ul class="list-disc pl-5 mt-1"><li>Manuales de operación</li><li>Procedimientos actualizados</li><li>Normativas vigentes</li><li>Reportes de seguridad</li><li>Formularios oficiales</li></ul><p class="mt-2">Puedes descargar cualquier documento haciendo clic en el botón correspondiente.</p>',
      position: 'top',
      tooltipClass: 'custom-tooltip'
    }
  ];
  
  return (
    <Steps
      enabled={activeTour === 'road-safety'}
      steps={steps}
      initialStep={0}
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

export default RoadSafetyTour; 