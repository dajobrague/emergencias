import React from 'react';
import { Steps } from 'intro.js-react';
import { useTour } from '../../context/TourContext';

const PersonnelTour = () => {
  const { activeTour, endTour } = useTour();
  
  const steps = [
    {
      element: '#personnel-panel h2, .personnel-title',
      intro: '<h3 class="text-lg font-bold mb-2">Personal de Emergencias</h3><p>Esta sección te permite gestionar todo el personal involucrado en la respuesta a emergencias.</p><p class="mt-2">Aquí podrás administrar información detallada sobre cada miembro del equipo, sus roles, certificaciones, disponibilidad y asignaciones.</p>',
      position: 'bottom'
    },
    {
      element: '.search-filter-container, .personnel-filters',
      intro: '<h3 class="text-lg font-bold mb-2">Búsqueda y Filtros</h3><p>Herramientas para localizar rápidamente personal específico.</p><p class="mt-2"><strong>Opciones disponibles:</strong></p><ul class="list-disc pl-5 mt-1"><li>Búsqueda por nombre o ID</li><li>Filtro por rol o especialidad</li><li>Filtro por disponibilidad</li><li>Filtro por certificaciones</li><li>Filtro por unidad asignada</li></ul><p class="mt-2">Combina estos filtros para encontrar exactamente el personal que necesitas.</p>',
      position: 'top'
    },
    {
      element: '.add-personnel-button, .btn-add-personnel',
      intro: '<h3 class="text-lg font-bold mb-2">Agregar Personal</h3><p>Este botón te permite registrar un nuevo miembro del equipo en el sistema.</p><p class="mt-2">Al hacer clic, se abrirá un formulario donde podrás ingresar:</p><ul class="list-disc pl-5 mt-1"><li>Información personal y de contacto</li><li>Rol y especialidad</li><li>Certificaciones y habilidades</li><li>Horarios de disponibilidad</li><li>Unidad asignada</li><li>Documentación relevante</li></ul>',
      position: 'left'
    },
    {
      element: '.personnel-card:first-child, .staff-card:first-child',
      intro: '<h3 class="text-lg font-bold mb-2">Tarjeta de Personal</h3><p>Cada tarjeta muestra información clave sobre un miembro del equipo.</p><p class="mt-2"><strong>Información visible:</strong></p><ul class="list-disc pl-5 mt-1"><li>Nombre y fotografía</li><li>Rol o cargo</li><li>Especialidad</li><li>Estado de disponibilidad</li><li>Certificaciones principales</li><li>Unidad asignada</li><li>Información de contacto</li></ul><p class="mt-2">El color de la tarjeta o un indicador visual muestra su estado de disponibilidad actual.</p>',
      position: 'right'
    },
    {
      element: '.availability-status, .status-indicator',
      intro: '<h3 class="text-lg font-bold mb-2">Estado de Disponibilidad</h3><p>Indicador visual que muestra si el personal está disponible para responder a emergencias.</p><p class="mt-2"><strong>Estados posibles:</strong></p><ul class="list-disc pl-5 mt-1"><li><span class="text-green-600">Disponible</span>: Listo para responder</li><li><span class="text-yellow-600">En servicio</span>: Actualmente en una asignación</li><li><span class="text-red-600">No disponible</span>: Fuera de servicio</li><li><span class="text-gray-600">Descanso</span>: En periodo de descanso programado</li></ul><p class="mt-2">Este estado se actualiza automáticamente según los horarios y asignaciones.</p>',
      position: 'top'
    },
    {
      element: '.certifications, .certification-badges',
      intro: '<h3 class="text-lg font-bold mb-2">Certificaciones</h3><p>Muestra las certificaciones y habilidades especiales de cada miembro del personal.</p><p class="mt-2"><strong>Tipos de certificaciones:</strong></p><ul class="list-disc pl-5 mt-1"><li>Primeros auxilios avanzados</li><li>Rescate en altura</li><li>Manejo de materiales peligrosos</li><li>Conducción de vehículos de emergencia</li><li>Operación de equipos especializados</li></ul><p class="mt-2">Las certificaciones incluyen fecha de obtención y vencimiento.</p>',
      position: 'bottom'
    },
    {
      element: '.personnel-actions, .action-buttons',
      intro: '<h3 class="text-lg font-bold mb-2">Acciones de Personal</h3><p>Botones para interactuar con cada miembro del equipo.</p><p class="mt-2"><strong>Acciones disponibles:</strong></p><ul class="list-disc pl-5 mt-1"><li><span class="text-blue-600">Ver perfil</span>: Muestra información completa</li><li><span class="text-green-600">Asignar</span>: Asigna a una unidad o tarea</li><li><span class="text-yellow-600">Editar</span>: Modifica la información</li><li><span class="text-purple-600">Certificaciones</span>: Gestiona certificaciones</li><li><span class="text-red-600">Reportar</span>: Informa problemas o incidentes</li></ul>',
      position: 'left'
    },
    {
      element: '.profile-modal, .personnel-profile',
      intro: '<h3 class="text-lg font-bold mb-2">Perfil de Personal</h3><p>Vista detallada con toda la información del miembro seleccionado.</p><p class="mt-2"><strong>Secciones del perfil:</strong></p><ul class="list-disc pl-5 mt-1"><li>Información personal y de contacto</li><li>Historial de formación y certificaciones</li><li>Experiencia y especialidades</li><li>Historial de asignaciones</li><li>Calendario de disponibilidad</li><li>Documentación personal</li></ul><p class="mt-2">Desde aquí también puedes editar la información o asignar tareas.</p>',
      position: 'center'
    },
    {
      element: '.schedule-view, .availability-calendar',
      intro: '<h3 class="text-lg font-bold mb-2">Calendario de Disponibilidad</h3><p>Muestra los horarios y turnos programados para cada miembro del personal.</p><p class="mt-2"><strong>Características:</strong></p><ul class="list-disc pl-5 mt-1"><li>Vista diaria, semanal y mensual</li><li>Turnos programados</li><li>Periodos de descanso</li><li>Capacitaciones programadas</li><li>Vacaciones y ausencias</li></ul><p class="mt-2">Fundamental para la planificación de recursos humanos en emergencias.</p>',
      position: 'right'
    },
    {
      element: '.team-view, .team-structure',
      intro: '<h3 class="text-lg font-bold mb-2">Estructura de Equipos</h3><p>Visualización de la organización de equipos y jerarquía del personal.</p><p class="mt-2"><strong>Información visible:</strong></p><ul class="list-disc pl-5 mt-1"><li>Equipos y sus miembros</li><li>Cadena de mando</li><li>Roles y responsabilidades</li><li>Especialidades por equipo</li><li>Cobertura por turnos</li></ul><p class="mt-2">Permite entender rápidamente la estructura organizativa de respuesta a emergencias.</p>',
      position: 'bottom'
    }
  ];
  
  return (
    <Steps
      enabled={activeTour === 'personnel'}
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

export default PersonnelTour; 