import React from 'react';
import { Steps } from 'intro.js-react';
import { useTour } from '../../context/TourContext';

const WisetrackTour = () => {
  const { activeTour, endTour } = useTour();
  
  const steps = [
    {
      element: '#wisetrack-panel h2, .wisetrack-title',
      intro: '<h3 class="text-lg font-bold mb-2">Wisetrack</h3><p>Bienvenido al sistema de monitoreo ADAS (Advanced Driver Assistance Systems) para prevención de accidentes.</p><p class="mt-2">Esta plataforma te permite monitorear en tiempo real el comportamiento de los conductores y detectar situaciones de riesgo.</p>',
      position: 'bottom'
    },
    {
      element: '.dashboard-container, .wisetrack-dashboard',
      intro: '<h3 class="text-lg font-bold mb-2">Dashboard Principal</h3><p>Panel de control con información en tiempo real de toda la flota.</p><p class="mt-2"><strong>Información visible:</strong></p><ul class="list-disc pl-5 mt-1"><li>Estado de los vehículos</li><li>Alertas activas</li><li>Conductores en ruta</li><li>Estadísticas de conducción</li><li>Eventos recientes</li></ul>',
      position: 'top'
    },
    {
      element: '.alerts-section, .fatigue-alerts',
      intro: '<h3 class="text-lg font-bold mb-2">Alertas de Fatiga</h3><p>Sección que muestra las alertas relacionadas con fatiga y distracción de conductores.</p><p class="mt-2"><strong>Tipos de alertas:</strong></p><ul class="list-disc pl-5 mt-1"><li>Micro-sueños detectados</li><li>Patrones de parpadeo anormales</li><li>Distracciones prolongadas</li><li>Cabeceos</li><li>Tiempo excesivo de conducción</li></ul><p class="mt-2">Las alertas se clasifican por nivel de severidad y requieren atención inmediata.</p>',
      position: 'right'
    },
    {
      element: '.vehicle-list, .monitored-vehicles',
      intro: '<h3 class="text-lg font-bold mb-2">Vehículos Monitoreados</h3><p>Lista de todos los vehículos equipados con el sistema ADAS.</p><p class="mt-2"><strong>Información por vehículo:</strong></p><ul class="list-disc pl-5 mt-1"><li>Identificación y tipo</li><li>Conductor asignado</li><li>Estado actual (en ruta, detenido, etc.)</li><li>Tiempo de operación</li><li>Alertas recientes</li></ul><p class="mt-2">Puedes hacer clic en cualquier vehículo para ver información detallada.</p>',
      position: 'left'
    },
    {
      element: '.driver-stats, .driver-performance',
      intro: '<h3 class="text-lg font-bold mb-2">Desempeño de Conductores</h3><p>Métricas y estadísticas sobre el comportamiento de cada conductor.</p><p class="mt-2"><strong>Indicadores clave:</strong></p><ul class="list-disc pl-5 mt-1"><li>Puntuación de seguridad</li><li>Eventos de frenado brusco</li><li>Excesos de velocidad</li><li>Episodios de fatiga</li><li>Horas de conducción</li></ul><p class="mt-2">Esta información es fundamental para programas de capacitación y mejora continua.</p>',
      position: 'bottom'
    },
    {
      element: '.map-view, .vehicle-tracking-map',
      intro: '<h3 class="text-lg font-bold mb-2">Mapa de Seguimiento</h3><p>Visualización geográfica en tiempo real de todos los vehículos.</p><p class="mt-2"><strong>Características del mapa:</strong></p><ul class="list-disc pl-5 mt-1"><li>Posición exacta de cada vehículo</li><li>Rutas seguidas</li><li>Zonas de riesgo</li><li>Alertas geolocalizadas</li><li>Historial de recorridos</li></ul><p class="mt-2">Puedes hacer zoom y filtrar la visualización según tus necesidades.</p>',
      position: 'left'
    },
    {
      element: '.reports-section, .analytics-tools',
      intro: '<h3 class="text-lg font-bold mb-2">Reportes y Análisis</h3><p>Herramientas para generar informes detallados sobre la operación.</p><p class="mt-2"><strong>Tipos de reportes:</strong></p><ul class="list-disc pl-5 mt-1"><li>Resumen diario/semanal/mensual</li><li>Análisis de tendencias</li><li>Comparativas entre conductores</li><li>Estadísticas por ruta</li><li>Informes de incidentes</li></ul><p class="mt-2">Los reportes pueden exportarse en diferentes formatos para su análisis posterior.</p>',
      position: 'right'
    },
    {
      element: '.settings-panel, .configuration-options',
      intro: '<h3 class="text-lg font-bold mb-2">Configuración del Sistema</h3><p>Panel para personalizar los parámetros de monitoreo.</p><p class="mt-2"><strong>Opciones configurables:</strong></p><ul class="list-disc pl-5 mt-1"><li>Umbrales de alerta</li><li>Notificaciones</li><li>Integraciones con otros sistemas</li><li>Perfiles de usuario</li><li>Parámetros de detección</li></ul><p class="mt-2">La correcta configuración es clave para la efectividad del sistema.</p>',
      position: 'bottom'
    }
  ];
  
  return (
    <Steps
      enabled={activeTour === 'wisetrack'}
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

export default WisetrackTour; 