import React from 'react';
import { Steps } from 'intro.js-react';
import { useTour } from '../../context/TourContext';

const EmergencyUnitsTour = () => {
  const { activeTour, endTour } = useTour();
  
  const steps = [
    {
      element: '#emergency-units-panel h2, .emergency-units-title',
      intro: '<h3 class="text-lg font-bold mb-2">Unidades de Emergencia</h3><p>Esta sección te permite gestionar todas las unidades disponibles para respuesta a emergencias en la operación minera.</p><p class="mt-2">Aquí podrás monitorear el estado, ubicación y disponibilidad de cada unidad, así como su historial de mantenimiento y chequeos.</p>',
      position: 'bottom'
    },
    {
      element: '.search-filter-container, .filters-container',
      intro: '<h3 class="text-lg font-bold mb-2">Búsqueda y Filtros</h3><p>Herramientas para localizar rápidamente unidades específicas.</p><p class="mt-2"><strong>Opciones disponibles:</strong></p><ul class="list-disc pl-5 mt-1"><li>Búsqueda por nombre o patente</li><li>Filtro por tipo de unidad</li><li>Filtro por estado operativo</li><li>Filtro por zona asignada</li></ul><p class="mt-2">Utiliza estas opciones para encontrar exactamente lo que necesitas.</p>',
      position: 'top'
    },
    {
      element: '.add-unit-button, .btn-add-unit',
      intro: '<h3 class="text-lg font-bold mb-2">Agregar Nueva Unidad</h3><p>Este botón te permite registrar una nueva unidad en el sistema.</p><p class="mt-2">Al hacer clic, se abrirá un formulario donde podrás ingresar:</p><ul class="list-disc pl-5 mt-1"><li>Nombre y código de la unidad</li><li>Tipo de vehículo</li><li>Número de patente</li><li>Zona de operación</li><li>Equipamiento disponible</li><li>Personal asignado</li></ul>',
      position: 'left'
    },
    {
      element: '.unit-card:first-child, .emergency-unit-card:first-child',
      intro: '<h3 class="text-lg font-bold mb-2">Tarjeta de Unidad</h3><p>Cada tarjeta muestra información clave sobre una unidad específica.</p><p class="mt-2"><strong>Información visible:</strong></p><ul class="list-disc pl-5 mt-1"><li>Nombre y tipo de unidad</li><li>Estado operativo actual</li><li>Patente del vehículo</li><li>Número de teléfono</li><li>Zona asignada</li><li>Estado del checklist</li><li>Fecha del último chequeo</li></ul><p class="mt-2">El color de la tarjeta indica el estado: verde (disponible), amarillo (en mantenimiento), rojo (en emergencia).</p>',
      position: 'right'
    },
    {
      element: '.unit-status, .status-indicator',
      intro: '<h3 class="text-lg font-bold mb-2">Estado de la Unidad</h3><p>Indicador visual del estado operativo actual de cada unidad.</p><p class="mt-2"><strong>Estados posibles:</strong></p><ul class="list-disc pl-5 mt-1"><li><span class="text-green-600">Disponible</span>: Lista para responder a emergencias</li><li><span class="text-yellow-600">En mantenimiento</span>: Temporalmente fuera de servicio</li><li><span class="text-red-600">En emergencia</span>: Actualmente respondiendo a un incidente</li><li><span class="text-gray-600">Fuera de servicio</span>: No disponible por tiempo prolongado</li></ul>',
      position: 'top'
    },
    {
      element: '.checklist-status, .checklist-indicator',
      intro: '<h3 class="text-lg font-bold mb-2">Estado del Checklist</h3><p>Muestra si la unidad ha completado su lista de verificación de seguridad.</p><p class="mt-2"><strong>Estados posibles:</strong></p><ul class="list-disc pl-5 mt-1"><li><span class="text-green-600">Completo</span>: Todos los ítems verificados correctamente</li><li><span class="text-yellow-600">Parcial</span>: Verificación en proceso o incompleta</li><li><span class="text-red-600">Pendiente</span>: No se ha realizado la verificación</li><li><span class="text-gray-600">Vencido</span>: Checklist desactualizado, requiere nueva verificación</li></ul><p class="mt-2">Es crucial que todas las unidades tengan su checklist completo antes de operar.</p>',
      position: 'top'
    },
    {
      element: '.unit-actions, .action-buttons',
      intro: '<h3 class="text-lg font-bold mb-2">Acciones de Unidad</h3><p>Botones para interactuar con cada unidad.</p><p class="mt-2"><strong>Acciones disponibles:</strong></p><ul class="list-disc pl-5 mt-1"><li><span class="text-blue-600">Ver detalles</span>: Muestra información completa de la unidad</li><li><span class="text-green-600">Checklist</span>: Accede a la lista de verificación</li><li><span class="text-yellow-600">Editar</span>: Modifica la información de la unidad</li><li><span class="text-red-600">Reportar</span>: Informa problemas o incidentes</li></ul>',
      position: 'left'
    },
    {
      element: '.unit-modal, .unit-details-modal',
      intro: '<h3 class="text-lg font-bold mb-2">Perfil de Unidad</h3><p>Vista detallada con toda la información de la unidad seleccionada.</p><p class="mt-2"><strong>Secciones del perfil:</strong></p><ul class="list-disc pl-5 mt-1"><li>Información general y especificaciones</li><li>Equipamiento disponible</li><li>Personal asignado</li><li>Historial de mantenimiento</li><li>Registro de incidentes</li><li>Documentación técnica</li></ul><p class="mt-2">Desde aquí también puedes editar la información o generar reportes.</p>',
      position: 'center'
    },
    {
      element: '.personnel-list, .assigned-personnel',
      intro: '<h3 class="text-lg font-bold mb-2">Personal Asignado</h3><p>Muestra el equipo humano asignado a cada unidad.</p><p class="mt-2">Para cada miembro del personal se indica:</p><ul class="list-disc pl-5 mt-1"><li>Nombre y cargo</li><li>Especialidad o rol</li><li>Certificaciones</li><li>Horario asignado</li></ul><p class="mt-2">El personal se representa con iconos que indican su género y rol en el equipo.</p>',
      position: 'right'
    },
    {
      element: '.map-view-button, .show-map',
      intro: '<h3 class="text-lg font-bold mb-2">Vista de Mapa</h3><p>Permite visualizar la ubicación actual de todas las unidades en un mapa interactivo.</p><p class="mt-2">En el mapa podrás:</p><ul class="list-disc pl-5 mt-1"><li>Ver la posición exacta de cada unidad</li><li>Consultar el estado en tiempo real</li><li>Calcular tiempos de respuesta</li><li>Visualizar zonas de cobertura</li><li>Planificar rutas óptimas</li></ul><p class="mt-2">Esta vista es especialmente útil durante la coordinación de emergencias.</p>',
      position: 'bottom'
    }
  ];
  
  return (
    <Steps
      enabled={activeTour === 'emergency-units'}
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

export default EmergencyUnitsTour; 