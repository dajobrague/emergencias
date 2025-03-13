import React from 'react';
import { Steps } from 'intro.js-react';
import { useTour } from '../../context/TourContext';

const DocumentTour = () => {
  const { activeTour, endTour } = useTour();
  
  const steps = [
    {
      element: '#document-panel h1, #document-panel h2',
      intro: '<h3 class="text-lg font-bold mb-2">Repositorio</h3><p>Esta es la biblioteca digital centralizada de toda la documentación relevante para la operación.</p><p class="mt-2">Aquí encontrarás documentos organizados por categorías, con potentes herramientas de búsqueda y filtrado para localizar rápidamente la información que necesitas.</p>',
      position: 'bottom'
    },
    {
      element: '.grid-cols-2.sm\\:grid-cols-3.md\\:grid-cols-6',
      intro: '<h3 class="text-lg font-bold mb-2">Categorías de Documentos</h3><p>Estas tarjetas te permiten filtrar documentos por categoría con un solo clic.</p><p class="mt-2"><strong>Categorías disponibles:</strong></p><ul class="list-disc pl-5 mt-1"><li><span class="text-blue-600">Estudios Técnicos</span>: Informes técnicos, estudios de impacto, análisis</li><li><span class="text-green-600">Reglamentos y Procedimientos</span>: Normativas internas y procedimientos operativos</li><li><span class="text-red-600">Alertas de Seguridad</span>: Comunicados urgentes sobre riesgos</li><li><span class="text-yellow-600">FAQ\'s del Operador</span>: Preguntas frecuentes para operadores</li><li><span class="text-purple-600">Recursos de Aprendizaje</span>: Material de capacitación y formación</li></ul><p class="mt-2">La tarjeta seleccionada se resaltará y filtrará automáticamente los documentos.</p>',
      position: 'bottom'
    },
    {
      element: '[data-panel="document-panel"] .bg-indigo-600, [data-filter="all"]',
      intro: '<h3 class="text-lg font-bold mb-2">Todos los Documentos</h3><p>Esta opción muestra todos los documentos disponibles sin aplicar filtros por categoría.</p><p class="mt-2">Es útil cuando necesitas una visión general de toda la documentación o cuando buscas documentos que podrían estar en múltiples categorías.</p><p class="mt-2">El contador muestra el número total de documentos en el repositorio.</p>',
      position: 'bottom'
    },
    {
      element: '.bg-white.rounded-xl.shadow-sm.p-4.mb-6',
      intro: '<h3 class="text-lg font-bold mb-2">Búsqueda y Filtros Avanzados</h3><p>Panel de herramientas para encontrar documentos específicos de forma rápida.</p><p class="mt-2"><strong>Opciones disponibles:</strong></p><ul class="list-disc pl-5 mt-1"><li><span class="font-medium">Barra de búsqueda</span>: Busca por título, autor o contenido</li><li><span class="font-medium">Filtro por categoría</span>: Selecciona una categoría específica</li><li><span class="font-medium">Filtro por fecha</span>: Acota resultados a un rango de fechas</li><li><span class="font-medium">Botón de limpiar filtros</span>: Restablece todos los criterios de búsqueda</li></ul><p class="mt-2">Combina estos filtros para encontrar exactamente lo que necesitas.</p>',
      position: 'top'
    },
    {
      element: '.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4',
      intro: '<h3 class="text-lg font-bold mb-2">Visualización de Documentos</h3><p>Aquí se muestran todos los documentos que coinciden con los filtros aplicados.</p><p class="mt-2">Los documentos se presentan en un formato de tarjetas que facilita la visualización de la información clave de cada uno.</p><p class="mt-2">Si no hay resultados que coincidan con tus criterios de búsqueda, se mostrará un mensaje indicándolo y ofreciendo la opción de limpiar los filtros.</p>',
      position: 'top'
    },
    {
      element: '.bg-white.rounded-xl.shadow-sm.overflow-hidden:first-child',
      intro: '<h3 class="text-lg font-bold mb-2">Tarjeta de Documento</h3><p>Cada tarjeta contiene información detallada sobre un documento específico.</p><p class="mt-2"><strong>Elementos de la tarjeta:</strong></p><ul class="list-disc pl-5 mt-1"><li><span class="font-medium">Icono y tipo</span>: Indica el formato del archivo (PDF, DOCX, etc.)</li><li><span class="font-medium">Categoría</span>: Etiqueta con el color correspondiente a su categoría</li><li><span class="font-medium">Título</span>: Nombre completo del documento</li><li><span class="font-medium">Autor y fecha</span>: Quién lo creó y cuándo se actualizó</li><li><span class="font-medium">Etiquetas</span>: Palabras clave para facilitar la búsqueda</li><li><span class="font-medium">Botones de acción</span>: Para ver o descargar el documento</li></ul>',
      position: 'right'
    },
    {
      element: '.px-4.py-2.bg-blue-600.hover\\:bg-blue-700.text-white.rounded-lg',
      intro: '<h3 class="text-lg font-bold mb-2">Subir Documento</h3><p>Este botón te permite agregar nuevos documentos al repositorio.</p><p class="mt-2">Al hacer clic, se abrirá un formulario donde podrás:</p><ul class="list-disc pl-5 mt-1"><li>Ingresar el título y autor del documento</li><li>Seleccionar la categoría apropiada</li><li>Especificar el tipo de archivo</li><li>Agregar etiquetas para facilitar búsquedas futuras</li><li>Incluir una descripción detallada</li></ul><p class="mt-2">Los documentos subidos estarán inmediatamente disponibles para todos los usuarios.</p>',
      position: 'left'
    },
    {
      element: '.px-2.py-0.5.bg-gray-100.text-gray-600.rounded-full.text-xs',
      intro: '<h3 class="text-lg font-bold mb-2">Etiquetas (Tags)</h3><p>Las etiquetas son palabras clave que describen el contenido del documento.</p><p class="mt-2">Beneficios de las etiquetas:</p><ul class="list-disc pl-5 mt-1"><li>Facilitan la búsqueda de documentos relacionados</li><li>Permiten categorizar con mayor precisión</li><li>Ayudan a identificar rápidamente la temática</li><li>Mejoran la organización del repositorio</li></ul><p class="mt-2">Puedes agregar múltiples etiquetas a cada documento al momento de subirlo.</p>',
      position: 'top'
    },
    {
      element: '.flex.items-center.px-3.py-1.bg-blue-50.hover\\:bg-blue-100.text-blue-600',
      intro: '<h3 class="text-lg font-bold mb-2">Acciones de Documento</h3><p>Cada documento tiene botones de acción para interactuar con él.</p><p class="mt-2"><strong>Acciones disponibles:</strong></p><ul class="list-disc pl-5 mt-1"><li><span class="text-blue-600">Ver</span>: Abre el documento para visualizarlo directamente en el navegador</li><li><span class="text-green-600">Descargar</span>: Guarda una copia local del documento en tu dispositivo</li></ul><p class="mt-2">Estas opciones te permiten acceder rápidamente a la información sin necesidad de descargar archivos cuando solo necesitas consultarlos.</p>',
      position: 'bottom'
    }
  ];
  
  return (
    <Steps
      enabled={activeTour === 'document'}
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

export default DocumentTour; 