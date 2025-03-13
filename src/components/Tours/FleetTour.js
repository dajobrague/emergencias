import React from 'react';
import { Steps } from 'intro.js-react';
import { useTour } from '../../context/TourContext';

const FleetTour = () => {
  const { activeTour, endTour } = useTour();
  
  const steps = [
    {
      element: '#fleet-panel h2',
      intro: '<h3 class="text-lg font-bold mb-2">Seguridad Vial</h3><p>Esta sección centraliza todas las herramientas para la gestión de seguridad vial en la operación minera.</p><p class="mt-2">Aquí encontrarás acceso a sistemas de monitoreo, registro de incidentes, control de tránsito y documentación relevante.</p>',
      position: 'bottom'
    },
    {
      element: '.grid-cols-1.sm\\:grid-cols-2.md\\:grid-cols-4',
      intro: '<h3 class="text-lg font-bold mb-2">Sistemas de Monitoreo</h3><p>Estas tarjetas te dan acceso directo a las diferentes plataformas de monitoreo utilizadas en la operación.</p><p class="mt-2">Cada sistema tiene funciones específicas y complementarias para garantizar la seguridad de los conductores y vehículos.</p>',
      position: 'bottom'
    },
    {
      element: '.service-card:nth-child(1)',
      intro: '<h3 class="text-lg font-bold mb-2">Wisetrack</h3><p>Sistema de Monitoreo ADAS (Advanced Driver Assistance Systems) para prevención de accidentes.</p><p class="mt-2"><strong>Funcionalidades principales:</strong></p><ul class="list-disc pl-5 mt-1"><li>Detección de fatiga y distracción</li><li>Alertas de colisión frontal</li><li>Monitoreo de velocidad</li><li>Reportes de conducción</li></ul><p class="mt-2">Haz clic en "Iniciar Servicio" para acceder a la plataforma.</p>',
      position: 'bottom'
    },
    {
      element: '.service-card:nth-child(2)',
      intro: '<h3 class="text-lg font-bold mb-2">GPSChile</h3><p>Plataforma de seguimiento GPS y telemetría para toda la flota de vehículos.</p><p class="mt-2"><strong>Funcionalidades principales:</strong></p><ul class="list-disc pl-5 mt-1"><li>Ubicación en tiempo real</li><li>Historial de recorridos</li><li>Control de kilometraje</li><li>Alertas de mantenimiento</li></ul><p class="mt-2">Ideal para supervisar rutas y optimizar la operación de vehículos.</p>',
      position: 'bottom'
    },
    {
      element: '.service-card:nth-child(3)',
      intro: '<h3 class="text-lg font-bold mb-2">Gauss Control</h3><p>Sistema especializado en la detección y prevención de fatiga en conductores.</p><p class="mt-2"><strong>Funcionalidades principales:</strong></p><ul class="list-disc pl-5 mt-1"><li>Monitoreo de patrones de parpadeo</li><li>Detección de micro-sueños</li><li>Alertas en tiempo real</li><li>Análisis predictivo de fatiga</li></ul><p class="mt-2">Fundamental para prevenir accidentes por fatiga en turnos largos.</p>',
      position: 'bottom'
    },
    {
      element: '.service-card:nth-child(4)',
      intro: '<h3 class="text-lg font-bold mb-2">Explor-K</h3><p>Sistema de gestión y control de tránsito para operaciones mineras.</p><p class="mt-2"><strong>Funcionalidades principales:</strong></p><ul class="list-disc pl-5 mt-1"><li>Control de accesos</li><li>Gestión de rutas</li><li>Monitoreo de tráfico</li><li>Coordinación de flotas</li></ul><p class="mt-2">Esencial para la planificación y optimización del tránsito en la mina.</p>',
      position: 'bottom'
    },
    {
      element: '.bg-gray-50:has(.fa-exclamation-triangle)',
      intro: '<h3 class="text-lg font-bold mb-2">Registro de Incidentes</h3><p>Herramienta para reportar y gestionar incidentes relacionados con la seguridad vial.</p><p class="mt-2"><strong>¿Qué puedes hacer aquí?</strong></p><ul class="list-disc pl-5 mt-1"><li>Registrar nuevos incidentes</li><li>Clasificar por tipo y severidad</li><li>Asignar responsables</li><li>Dar seguimiento a acciones correctivas</li></ul><p class="mt-2">Haz clic en esta tarjeta para abrir el formulario de registro.</p>',
      position: 'top'
    },
    {
      element: '.bg-gray-50:has(.fa-traffic-light)',
      intro: '<h3 class="text-lg font-bold mb-2">Control de Tránsito</h3><p>Gestiona rutas y horarios para optimizar el tránsito de vehículos en la operación.</p><p class="mt-2"><strong>¿Qué puedes hacer aquí?</strong></p><ul class="list-disc pl-5 mt-1"><li>Programar circulación de vehículos</li><li>Establecer restricciones temporales</li><li>Definir rutas alternativas</li><li>Coordinar movimientos especiales</li></ul><p class="mt-2">Fundamental para evitar congestiones y optimizar la operación.</p>',
      position: 'top'
    },
    {
      element: '.bg-white.rounded-xl.shadow-sm.p-6:has(.fa-brands)',
      intro: '<h3 class="text-lg font-bold mb-2">Actualizaciones de Organismos Oficiales</h3><p>Feed en tiempo real con información de organismos oficiales relacionados con seguridad vial.</p><p class="mt-2">Mantente informado sobre:</p><ul class="list-disc pl-5 mt-1"><li>Alertas de seguridad</li><li>Cambios en normativas</li><li>Condiciones climáticas</li><li>Eventos que afecten el tránsito</li></ul><p class="mt-2">La información se actualiza automáticamente.</p>',
      position: 'left'
    },
    {
      element: '.space-y-3:has(.bg-gray-50)',
      intro: '<h3 class="text-lg font-bold mb-2">Supervisores de Ruta</h3><p>Información de contacto de los supervisores responsables de cada zona de operación.</p><p class="mt-2">Para cada supervisor encontrarás:</p><ul class="list-disc pl-5 mt-1"><li>Nombre y zona asignada</li><li>Número de teléfono directo</li><li>Correo electrónico</li></ul><p class="mt-2">Contáctalos en caso de emergencias o consultas sobre rutas.</p>',
      position: 'left'
    },
    {
      element: '.mt-8.bg-white.rounded-xl.shadow-sm.p-6',
      intro: '<h3 class="text-lg font-bold mb-2">Documentos Recientes</h3><p>Acceso rápido a los documentos más recientes relacionados con seguridad vial.</p><p class="mt-2">Aquí encontrarás:</p><ul class="list-disc pl-5 mt-1"><li>Manuales de operación</li><li>Procedimientos actualizados</li><li>Normativas vigentes</li><li>Informes de seguridad</li></ul><p class="mt-2">Puedes descargar cualquier documento con un solo clic.</p>',
      position: 'top'
    }
  ];
  
  return (
    <Steps
      enabled={activeTour === 'fleet'}
      steps={steps}
      initialStep={0}
      onExit={endTour}
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

export default FleetTour; 