import React from 'react';
import { Steps } from 'intro.js-react';
import { useTour } from '../../context/TourContext';

const EmergencyTour = () => {
  const { activeTour, endTour } = useTour();
  
  const steps = [
    {
      element: '#emergency-panel h2',
      intro: '<h3 class="text-lg font-bold mb-2">Emergencias</h3><p>Este es el centro de control para la gestión integral de emergencias en la operación minera.</p><p class="mt-2">Desde aquí podrás coordinar todos los recursos disponibles, monitorear situaciones en tiempo real y acceder a protocolos de respuesta.</p>',
      position: 'bottom'
    },
    {
      element: '.emergency-card:nth-child(1), .card:nth-child(1)',
      intro: '<h3 class="text-lg font-bold mb-2">Unidades de Emergencia</h3><p>Gestiona todas las unidades disponibles para respuesta a emergencias.</p><p class="mt-2"><strong>¿Qué puedes hacer aquí?</strong></p><ul class="list-disc pl-5 mt-1"><li>Ver el estado y ubicación de cada unidad</li><li>Verificar disponibilidad y tiempos de respuesta</li><li>Asignar unidades a emergencias activas</li><li>Revisar el historial de mantenimiento</li><li>Verificar el equipamiento disponible</li></ul><p class="mt-2">Haz clic para acceder a la gestión detallada de unidades.</p>',
      position: 'bottom'
    },
    {
      element: '.emergency-card:nth-child(2), .card:nth-child(2)',
      intro: '<h3 class="text-lg font-bold mb-2">Personal</h3><p>Administra el equipo humano de respuesta a emergencias.</p><p class="mt-2"><strong>¿Qué puedes hacer aquí?</strong></p><ul class="list-disc pl-5 mt-1"><li>Consultar la lista de personal disponible</li><li>Ver especialidades y certificaciones</li><li>Gestionar turnos y disponibilidad</li><li>Asignar personal a unidades específicas</li><li>Acceder a información de contacto</li></ul><p class="mt-2">El personal está categorizado por roles y especialidades para facilitar la asignación en emergencias.</p>',
      position: 'bottom'
    },
    {
      element: '.emergency-card:nth-child(3), .card:nth-child(3)',
      intro: '<h3 class="text-lg font-bold mb-2">Dashboard</h3><p>Centro de visualización de datos en tiempo real sobre emergencias.</p><p class="mt-2"><strong>Información disponible:</strong></p><ul class="list-disc pl-5 mt-1"><li>Emergencias activas y su estado</li><li>Tiempos de respuesta promedio</li><li>Distribución de incidentes por tipo</li><li>Mapa de calor de zonas con mayor incidencia</li><li>Tendencias y patrones temporales</li></ul><p class="mt-2">Los datos se actualizan automáticamente para mantener información precisa.</p>',
      position: 'bottom'
    },
    {
      element: '.emergency-stats, .stats-container',
      intro: '<h3 class="text-lg font-bold mb-2">Estadísticas</h3><p>Métricas clave sobre la operación de emergencias.</p><p class="mt-2"><strong>Indicadores principales:</strong></p><ul class="list-disc pl-5 mt-1"><li>Tiempo promedio de respuesta</li><li>Número de emergencias atendidas</li><li>Distribución por tipo de emergencia</li><li>Eficiencia en la resolución</li><li>Recursos utilizados</li></ul><p class="mt-2">Estas estadísticas son fundamentales para la mejora continua del servicio de emergencias.</p>',
      position: 'top'
    },
    {
      element: '.bg-white.rounded-xl.shadow-sm.p-6:has(.fa-bell), .alerts-container',
      intro: '<h3 class="text-lg font-bold mb-2">Alertas Activas</h3><p>Notificaciones en tiempo real sobre situaciones que requieren atención.</p><p class="mt-2"><strong>Tipos de alertas:</strong></p><ul class="list-disc pl-5 mt-1"><li>Emergencias en curso</li><li>Unidades en mantenimiento</li><li>Personal con disponibilidad limitada</li><li>Condiciones climáticas adversas</li><li>Alertas de sistema</li></ul><p class="mt-2">Las alertas se clasifican por nivel de prioridad para facilitar la toma de decisiones.</p>',
      position: 'left'
    },
    {
      element: '.bg-white.rounded-xl.shadow-sm.p-6:has(.fa-clipboard-list), .protocols-container',
      intro: '<h3 class="text-lg font-bold mb-2">Protocolos de Emergencia</h3><p>Acceso rápido a los procedimientos establecidos para diferentes tipos de emergencias.</p><p class="mt-2"><strong>Protocolos disponibles:</strong></p><ul class="list-disc pl-5 mt-1"><li>Accidentes vehiculares</li><li>Emergencias médicas</li><li>Incendios</li><li>Derrames de materiales</li><li>Evacuaciones</li></ul><p class="mt-2">Cada protocolo incluye pasos detallados, recursos necesarios y contactos clave.</p>',
      position: 'right'
    },
    {
      element: '.emergency-map, .map-container',
      intro: '<h3 class="text-lg font-bold mb-2">Mapa de Operaciones</h3><p>Visualización geográfica de unidades, personal y emergencias activas.</p><p class="mt-2"><strong>Características del mapa:</strong></p><ul class="list-disc pl-5 mt-1"><li>Ubicación en tiempo real de unidades</li><li>Zonas de cobertura</li><li>Puntos de emergencia activos</li><li>Rutas óptimas</li><li>Puntos de encuentro y evacuación</li></ul><p class="mt-2">Permite una coordinación eficiente de recursos en el terreno.</p>',
      position: 'bottom'
    }
  ];
  
  return (
    <Steps
      enabled={activeTour === 'emergency'}
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

export default EmergencyTour; 