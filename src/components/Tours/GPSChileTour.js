import React from 'react';
import { Steps } from 'intro.js-react';
import { useTour } from '../../context/TourContext';

const GPSChileTour = () => {
  const { activeTour, endTour } = useTour();
  
  const steps = [
    {
      element: '#teletrac-panel h2, .gpschile-title',
      intro: '<h3 class="text-lg font-bold mb-2">GPSChile</h3><p>Bienvenido a la plataforma de seguimiento GPS y telemetría para toda la flota de vehículos.</p><p class="mt-2">Este sistema te permite monitorear en tiempo real la ubicación, movimiento y estado de todos los vehículos de la operación.</p>',
      position: 'bottom'
    },
    {
      element: '.fleet-overview, .fleet-summary',
      intro: '<h3 class="text-lg font-bold mb-2">Resumen de Flota</h3><p>Panel que muestra el estado general de todos los vehículos monitoreados.</p><p class="mt-2"><strong>Información disponible:</strong></p><ul class="list-disc pl-5 mt-1"><li>Total de vehículos activos</li><li>Vehículos en movimiento vs. detenidos</li><li>Consumo promedio de combustible</li><li>Distancia total recorrida</li><li>Tiempo total de operación</li></ul>',
      position: 'top'
    },
    {
      element: '.live-map, .gps-map-container',
      intro: '<h3 class="text-lg font-bold mb-2">Mapa en Tiempo Real</h3><p>Visualización geográfica de la ubicación exacta de cada vehículo.</p><p class="mt-2"><strong>Características del mapa:</strong></p><ul class="list-disc pl-5 mt-1"><li>Actualización en tiempo real</li><li>Código de colores por tipo de vehículo</li><li>Información de velocidad</li><li>Historial de recorridos</li><li>Zonas geográficas definidas</li></ul><p class="mt-2">Puedes hacer clic en cualquier vehículo para ver detalles específicos.</p>',
      position: 'left'
    },
    {
      element: '.vehicle-details, .vehicle-info-panel',
      intro: '<h3 class="text-lg font-bold mb-2">Detalles de Vehículo</h3><p>Información detallada sobre cada vehículo de la flota.</p><p class="mt-2"><strong>Datos disponibles:</strong></p><ul class="list-disc pl-5 mt-1"><li>Identificación y modelo</li><li>Conductor asignado</li><li>Estado del motor</li><li>Nivel de combustible</li><li>Velocidad actual</li><li>Tiempo de operación</li><li>Próximo mantenimiento</li></ul>',
      position: 'right'
    },
    {
      element: '.route-history, .trip-history',
      intro: '<h3 class="text-lg font-bold mb-2">Historial de Rutas</h3><p>Registro detallado de todos los recorridos realizados por cada vehículo.</p><p class="mt-2"><strong>Información por viaje:</strong></p><ul class="list-disc pl-5 mt-1"><li>Punto de inicio y fin</li><li>Duración y distancia</li><li>Paradas realizadas</li><li>Velocidad promedio y máxima</li><li>Consumo de combustible</li></ul><p class="mt-2">Puedes filtrar por fecha, vehículo o conductor.</p>',
      position: 'bottom'
    },
    {
      element: '.alerts-notifications, .event-alerts',
      intro: '<h3 class="text-lg font-bold mb-2">Alertas y Notificaciones</h3><p>Sistema de alertas para eventos importantes relacionados con la flota.</p><p class="mt-2"><strong>Tipos de alertas:</strong></p><ul class="list-disc pl-5 mt-1"><li>Exceso de velocidad</li><li>Entrada/salida de zonas definidas</li><li>Paradas no programadas</li><li>Desviaciones de ruta</li><li>Alertas de mantenimiento</li><li>Comportamiento inusual</li></ul>',
      position: 'right'
    },
    {
      element: '.reports-generator, .analytics-section',
      intro: '<h3 class="text-lg font-bold mb-2">Reportes y Análisis</h3><p>Herramientas para generar informes detallados sobre la operación de la flota.</p><p class="mt-2"><strong>Tipos de reportes:</strong></p><ul class="list-disc pl-5 mt-1"><li>Utilización de vehículos</li><li>Consumo de combustible</li><li>Comportamiento de conducción</li><li>Cumplimiento de rutas</li><li>Tiempos de operación</li><li>Mantenimiento preventivo</li></ul><p class="mt-2">Los informes pueden programarse para generación automática.</p>',
      position: 'left'
    },
    {
      element: '.geofencing-tools, .zone-management',
      intro: '<h3 class="text-lg font-bold mb-2">Gestión de Zonas</h3><p>Herramientas para definir y monitorear zonas geográficas específicas.</p><p class="mt-2"><strong>Funcionalidades:</strong></p><ul class="list-disc pl-5 mt-1"><li>Creación de zonas permitidas/restringidas</li><li>Alertas de entrada/salida</li><li>Límites de velocidad por zona</li><li>Horarios de acceso</li><li>Estadísticas por zona</li></ul><p class="mt-2">Fundamental para el control de acceso a áreas sensibles o peligrosas.</p>',
      position: 'bottom'
    },
    {
      element: '.maintenance-module, .vehicle-maintenance',
      intro: '<h3 class="text-lg font-bold mb-2">Gestión de Mantenimiento</h3><p>Sistema para programar y dar seguimiento al mantenimiento de la flota.</p><p class="mt-2"><strong>Características principales:</strong></p><ul class="list-disc pl-5 mt-1"><li>Programación basada en kilometraje/tiempo</li><li>Historial de servicios</li><li>Alertas de mantenimiento próximo</li><li>Registro de costos</li><li>Documentación técnica</li></ul><p class="mt-2">Esencial para mantener la flota en óptimas condiciones y prevenir fallas.</p>',
      position: 'top'
    }
  ];
  
  return (
    <Steps
      enabled={activeTour === 'gpschile'}
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

export default GPSChileTour; 