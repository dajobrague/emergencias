// Definiciones de pasos para los tutoriales de cada página del sistema
// Cada objeto de pasos debe seguir la estructura requerida por React Joyride

// Tutorial para el Panel de Seguridad Vial
export const fleetPanelSteps = [
  {
    target: '#fleet-panel',
    content: 'Bienvenido al Panel de Seguridad Vial. Esta es la página principal para gestionar la seguridad vial, monitoreo de flotas y acceso a sistemas de control de tránsito.',
    title: 'Panel de Seguridad Vial',
    disableBeacon: true,
    placement: 'center'
  },
  {
    target: '.grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-5.md\\:grid-cols-3.gap-3',
    content: 'Aquí encontrará acceso a todos los sistemas de monitoreo y control de seguridad vial disponibles.',
    title: 'Servicios Disponibles',
    placement: 'bottom',
  },
  {
    target: '#service-wisetrack',
    content: 'Sistema de Monitoreo ADAS (Advanced Driver Assistance Systems). Proporciona monitoreo del comportamiento del conductor y alertas en tiempo real.',
    title: 'Wisetrack',
    placement: 'right',
  },
  {
    target: '#service-gpschile',
    content: 'Sistema de Monitoreo de Flotas Navman. Permite realizar seguimiento GPS de vehículos y generar reportes de rutas.',
    title: 'GPSChile',
    placement: 'right',
  },
  {
    target: '#service-gauss',
    content: 'Sistema de Control y Gestión de Fatiga en la Conducción. Detecta signos de fatiga y distracción para prevenir accidentes.',
    title: 'Gauss Control',
    placement: 'right',
  },
  {
    target: '#service-webcontrol',
    content: 'Sistema de acreditación de personas y equipos. Gestiona credenciales y accesos del personal y equipamiento.',
    title: 'WebControl',
    placement: 'left',
  },
  {
    target: '#service-explork',
    content: 'Sistema de gestión y control de tránsito para operaciones mineras. Permite la gestión eficiente del tráfico en zonas de operación.',
    title: 'Explor-K',
    placement: 'left',
  },
  {
    target: '#twitter-container',
    content: 'En esta sección podrá ver las últimas actualizaciones de organismos oficiales relacionados con seguridad vial y emergencias.',
    title: 'Actualizaciones en Tiempo Real',
    placement: 'left',
  },
  {
    target: '.section-registros',
    content: 'Desde aquí puede acceder a los formularios para registrar incidentes de seguridad y controlar la circulación de camiones en las rutas.',
    title: 'Registros',
    placement: 'top',
  },
  {
    target: '.button-registro-incidente',
    content: 'Haga clic en este botón para reportar incidentes de seguridad vial.',
    title: 'Botón de Registro de Incidentes',
    placement: 'bottom',
  },
  {
    target: '#incident-modal',
    content: 'En este formulario puede registrar detalles completos como ubicación, tipo de incidente, vehículos involucrados y acciones tomadas.',
    title: 'Formulario de Registro de Incidentes',
    placement: 'center',
  },
  {
    target: '.button-control-camiones',
    content: 'Haga clic en este botón para gestionar la circulación de camiones y otros vehículos en las rutas.',
    title: 'Botón de Control de Camiones',
    placement: 'bottom',
  },
  {
    target: '#circulation-modal',
    content: 'En este formulario puede programar horarios, asignar rutas y registrar paso por puntos de control para los vehículos.',
    title: 'Formulario de Control de Camiones',
    placement: 'center',
  },
  {
    target: '.mt-6.flex-grow .font-medium.text-gray-700.mb-3.bg-white:first-child',
    content: 'Contactos de supervisores de ruta disponibles para asistencia en caso de emergencias o consultas durante los trayectos.',
    title: 'Supervisores',
    placement: 'top',
  },
  {
    target: '.mt-6.flex-grow .font-medium.text-gray-700.mb-3.bg-white:last-child',
    content: 'Contactos de los centros de control que monitorean las rutas y pueden asistir en situaciones de emergencia.',
    title: 'Centros de Control',
    placement: 'top',
  },
];

// Tutorial modal para Registro de Incidentes
export const incidentFormSteps = [
  {
    target: '#incident-modal',
    content: 'Este formulario le permite registrar incidentes de seguridad vial. Complete todos los campos requeridos para un registro preciso.',
    title: 'Formulario de Registro de Incidentes',
    disableBeacon: true,
    placement: 'center'
  },
  {
    target: '#incident-modal form .form-group:nth-child(1)',
    content: 'Seleccione la fecha y hora en que ocurrió el incidente.',
    title: 'Fecha y Hora',
    placement: 'bottom',
  },
  {
    target: '#incident-modal form .form-group:nth-child(2)',
    content: 'Seleccione el tipo de incidente entre las opciones disponibles.',
    title: 'Tipo de Incidente',
    placement: 'bottom',
  },
  {
    target: '#incident-modal form .form-group:nth-child(3)',
    content: 'Indique la ubicación exacta donde ocurrió el incidente. Puede utilizar coordenadas GPS o referencias del kilómetro de la ruta.',
    title: 'Ubicación',
    placement: 'bottom',
  },
  {
    target: '#incident-modal form .form-group:nth-child(4)',
    content: 'Describa brevemente lo sucedido, incluyendo detalles relevantes para la evaluación y seguimiento del incidente.',
    title: 'Descripción',
    placement: 'bottom',
  },
  {
    target: '#incident-modal form .form-group:nth-child(5)',
    content: 'Si hay vehículos involucrados, ingrese sus placas patentes para el registro.',
    title: 'Vehículos Involucrados',
    placement: 'top',
  },
  {
    target: '#incident-modal form .form-group:nth-child(6)',
    content: 'Seleccione la severidad del incidente para priorizar la respuesta adecuada.',
    title: 'Severidad',
    placement: 'top',
  },
  {
    target: '#incident-modal .modal-footer',
    content: 'Una vez completado el formulario, haga clic en "Guardar" para registrar el incidente o "Cancelar" para descartar los cambios.',
    title: 'Guardar o Cancelar',
    placement: 'top',
  }
];

// Tutorial modal para Control de Camiones
export const circulationFormSteps = [
  {
    target: '#circulation-modal',
    content: 'Este formulario le permite registrar y controlar la circulación de camiones en las rutas. Complete todos los campos necesarios para el seguimiento.',
    title: 'Formulario de Control de Camiones',
    disableBeacon: true,
    placement: 'center'
  },
  {
    target: '#circulation-modal form .form-group:nth-child(1)',
    content: 'Seleccione la fecha y hora de salida programada para el vehículo.',
    title: 'Fecha y Hora de Salida',
    placement: 'bottom',
  },
  {
    target: '#circulation-modal form .form-group:nth-child(2)',
    content: 'Ingrese la patente del vehículo para su identificación en el sistema.',
    title: 'Patente del Vehículo',
    placement: 'bottom',
  },
  {
    target: '#circulation-modal form .form-group:nth-child(3)',
    content: 'Seleccione la ruta que seguirá el vehículo entre las opciones disponibles.',
    title: 'Ruta',
    placement: 'bottom',
  },
  {
    target: '#circulation-modal form .form-group:nth-child(4)',
    content: 'Ingrese el nombre del conductor asignado para este viaje.',
    title: 'Conductor',
    placement: 'bottom',
  },
  {
    target: '#circulation-modal form .form-group:nth-child(5)',
    content: 'Seleccione el tipo de carga que transporta el vehículo.',
    title: 'Tipo de Carga',
    placement: 'top',
  },
  {
    target: '#circulation-modal form .form-group:nth-child(6)',
    content: 'Agregue observaciones relevantes como condiciones especiales, restricciones o información adicional.',
    title: 'Observaciones',
    placement: 'top',
  },
  {
    target: '#circulation-modal .modal-footer',
    content: 'Una vez completado el formulario, haga clic en "Guardar" para registrar la circulación o "Cancelar" para descartar los cambios.',
    title: 'Guardar o Cancelar',
    placement: 'top',
  }
];

// Tutorial para la página de Emergencias
export const emergencyPanelSteps = [
  {
    target: '#emergency-panel',
    content: 'Bienvenido al Sistema de Gestión de Emergencias. Aquí podrá gestionar los incidentes y coordinar la respuesta a emergencias.',
    title: 'Sistema de Emergencias',
    disableBeacon: true,
    placement: 'center'
  },
  {
    target: '.emergency-map',
    content: 'Este mapa muestra todas las emergencias activas en tiempo real. Puede hacer clic en cada marcador para ver detalles.',
    title: 'Mapa de Emergencias',
    placement: 'bottom',
  },
  {
    target: '.emergency-form',
    content: 'Utilice este formulario para reportar nuevas emergencias y proporcionar toda la información relevante sobre el incidente.',
    title: 'Reporte de Emergencias',
    placement: 'right',
  },
  {
    target: '.emergency-timeline',
    content: 'La línea de tiempo muestra la secuencia de eventos asociados a cada emergencia, con marcas de tiempo y responsables.',
    title: 'Timeline de Eventos',
    placement: 'left',
  },
  {
    target: '.resources-panel',
    content: 'Gestione los recursos disponibles para la atención de emergencias, incluyendo personal, vehículos y equipamiento.',
    title: 'Gestión de Recursos',
    placement: 'top',
  },
  {
    target: '.protocol-section',
    content: 'Consulte y active los protocolos establecidos para diferentes tipos de emergencias según la naturaleza del incidente.',
    title: 'Protocolos de Actuación',
    placement: 'bottom',
  },
  {
    target: '.notification-panel',
    content: 'Configure y envíe notificaciones automatizadas a todo el personal involucrado en la gestión de emergencias.',
    title: 'Sistema de Notificaciones',
    placement: 'left',
  }
];

// Tutorial para la página de Simuladores
export const simulatorsPanelSteps = [
  {
    target: '#simulators-panel',
    content: 'Bienvenido a la Plataforma de Simulación. Aquí podrá realizar entrenamientos y pruebas en entornos virtuales controlados.',
    title: 'Simuladores',
    disableBeacon: true,
    placement: 'center'
  },
  {
    target: '.scenario-selector',
    content: 'Seleccione el escenario que desea simular entre las diferentes opciones disponibles, desde emergencias rutinarias hasta situaciones críticas.',
    title: 'Selector de Escenarios',
    placement: 'bottom',
  },
  {
    target: '.simulation-controls',
    content: 'Utilice estos controles para iniciar, pausar, reiniciar o detener la simulación en cualquier momento.',
    title: 'Controles de Simulación',
    placement: 'right',
  },
  {
    target: '.parameters-panel',
    content: 'Configure los parámetros específicos de la simulación como duración, intensidad, recursos disponibles y condiciones ambientales.',
    title: 'Parámetros Configurables',
    placement: 'left',
  },
  {
    target: '.results-section',
    content: 'Al finalizar la simulación, podrá revisar los resultados y métricas de desempeño para evaluar la efectividad de la respuesta.',
    title: 'Resultados y Métricas',
    placement: 'top',
  },
  {
    target: '.history-log',
    content: 'Consulte el historial de simulaciones anteriores para comparar resultados y analizar el progreso en el tiempo.',
    title: 'Historial de Simulaciones',
    placement: 'bottom',
  },
];

// Tutorial para la página de Wisetrack
export const wisetrackPanelSteps = [
  {
    target: '#wisetrack-panel',
    content: 'Este sistema proporciona monitoreo avanzado del comportamiento de conducción mediante tecnología ADAS (Advanced Driver Assistance Systems). ADAS permite detectar conductas de riesgo, fatiga y distracciones del conductor en tiempo real, generando alertas automáticas y reportes detallados. Para acceder a todas las funcionalidades de Wisetrack, haga clic en el botón "Ingresar a la plataforma".',
    title: 'Wisetrack - Sistema de Monitoreo ADAS',
    disableBeacon: true,
    placement: 'center'
  }
];

// Tutorial para la página de GPSChile
export const gpsChilePanelSteps = [
  {
    target: '#gpschile-panel',
    content: 'GPSChile utiliza tecnología Navman para proporcionar seguimiento GPS preciso de todos los vehículos en tiempo real. El sistema permite visualizar rutas, generar reportes de recorridos, configurar geocercas y recibir alertas de eventos como excesos de velocidad. Para acceder a todas las funcionalidades de GPSChile Navman, haga clic en el botón "Ingresar a la plataforma".',
    title: 'GPSChile - Monitoreo de Flotas Navman',
    disableBeacon: true,
    placement: 'center'
  }
];

// Tutorial para la página de Gauss Control
export const gaussPanelSteps = [
  {
    target: '#gauss-panel',
    content: 'Gauss Control es un sistema especializado en la detección y gestión de fatiga en la conducción. Mediante algoritmos avanzados, analiza patrones de conducción, monitorea signos vitales y detecta micro-sueños para prevenir accidentes causados por fatiga o somnolencia. El sistema genera alertas preventivas y reportes de descanso para optimizar la seguridad. Para acceder a todas las funcionalidades de Gauss Control, haga clic en el botón "Ingresar a la plataforma".',
    title: 'Gauss Control - Gestión de Fatiga',
    disableBeacon: true,
    placement: 'center'
  }
];

// Tutorial para la página de WebControl
export const webControlPanelSteps = [
  {
    target: '#webcontrol-panel',
    content: 'WebControl es un sistema integral para la acreditación de personas y equipos. Permite gestionar credenciales, verificar documentación, controlar accesos y mantener un registro centralizado de permisos y certificaciones del personal y equipamiento. El sistema asegura que solo personal autorizado y equipos certificados accedan a áreas restringidas. Para acceder a todas las funcionalidades de WebControl, haga clic en el botón "Ingresar a la plataforma".',
    title: 'WebControl - Acreditación y Control de Acceso',
    disableBeacon: true,
    placement: 'center'
  }
];

// Tutorial para la página de Explor-K
export const explorkPanelSteps = [
  {
    target: '#explork-panel',
    content: 'Explor-K es un sistema especializado en la gestión y control de tránsito para operaciones mineras. Proporciona herramientas para planificar rutas, evaluar conductores, gestionar licencias internas y controlar el flujo de vehículos en zonas operativas. El sistema optimiza la circulación y mejora la seguridad vial en áreas de trabajo. Para acceder a todas las funcionalidades de Explor-K, haga clic en el botón "Ingresar a la plataforma".',
    title: 'Explor-K - Control de Tránsito Minero',
    disableBeacon: true,
    placement: 'center'
  }
];

// Tutorial para la página de Repositorio (Document Panel)
export const documentPanelSteps = [
  {
    target: '#document-panel',
    content: 'Bienvenido al Repositorio Documental. Esta herramienta centraliza todos los documentos relevantes para las operaciones de seguridad vial y emergencias.',
    title: 'Repositorio Documental',
    disableBeacon: true,
    placement: 'center'
  },
  {
    target: '#document-panel .text-2xl.font-bold.text-gray-800',
    content: 'Desde este panel podrá acceder a todos los documentos oficiales, organizados por categorías, con opciones avanzadas de búsqueda y filtrado.',
    title: 'Centro de Documentación',
    placement: 'bottom',
  },
  {
    target: '#document-panel .grid.grid-cols-2.sm\\:grid-cols-2.md\\:grid-cols-4.lg\\:grid-cols-8',
    content: 'Seleccione entre las diferentes categorías para filtrar los documentos según su tipo. Cada categoría muestra el número de documentos disponibles.',
    title: 'Categorías de Documentos',
    placement: 'bottom',
  },
  {
    target: '#document-panel [data-filter="all"]',
    content: 'La opción "Todos" muestra todos los documentos disponibles en el repositorio sin aplicar ningún filtro por categoría.',
    title: 'Ver Todos los Documentos',
    placement: 'right',
  },
  {
    target: '#document-panel .bg-blue-600',
    content: 'Los Estudios Técnicos incluyen informes especializados, análisis de riesgos y evaluaciones técnicas de rutas y operaciones.',
    title: 'Estudios Técnicos',
    placement: 'right',
  },
  {
    target: '#document-panel .bg-indigo-600:not([data-filter="all"])',
    content: 'Los Estándares son documentos que definen los requisitos mínimos y mejores prácticas para distintos aspectos de la operación.',
    title: 'Estándares',
    placement: 'bottom',
  },
  {
    target: '#document-panel .bg-cyan-600',
    content: 'Los Procedimientos y Planes incluyen protocolos detallados y guías paso a paso para diferentes operaciones y contingencias.',
    title: 'Procedimientos y Planes',
    placement: 'left',
  },
  {
    target: '#document-panel .bg-green-600',
    content: 'Los Reglamentos contienen las normativas oficiales, tanto internas como externas, que deben cumplirse durante las operaciones.',
    title: 'Reglamentos',
    placement: 'left',
  },
  {
    target: '#document-panel .bg-orange-600',
    content: 'Las Auditorías Viales incluyen reportes de inspección, evaluaciones de seguridad y recomendaciones para rutas y operaciones.',
    title: 'Auditorías Viales',
    placement: 'bottom',
  },
  {
    target: '#document-panel .bg-red-600',
    content: 'Las Alertas son notificaciones importantes sobre riesgos recientes, cambios en rutas o condiciones que requieren atención inmediata.',
    title: 'Alertas',
    placement: 'bottom',
  },
  {
    target: '#document-panel .bg-yellow-600',
    content: 'La sección FAQ\'s contiene respuestas a preguntas frecuentes sobre operaciones, seguridad y procedimientos.',
    title: 'Preguntas Frecuentes',
    placement: 'left',
  },
  {
    target: '#document-panel .bg-white.rounded-xl.shadow-sm.p-4.mb-6',
    content: 'Esta área contiene todas las herramientas para buscar y filtrar documentos según sus necesidades específicas.',
    title: 'Herramientas de Búsqueda',
    placement: 'top',
  },
  {
    target: '#document-panel input[placeholder="Buscar documentos..."]',
    content: 'Utilice la barra de búsqueda para encontrar documentos por título, autor o contenido de las etiquetas.',
    title: 'Búsqueda por Texto',
    placement: 'bottom',
  },
  {
    target: '#document-panel select',
    content: 'Filtre documentos por etiquetas específicas para encontrar rápidamente documentos relacionados con temas particulares.',
    title: 'Filtro por Etiquetas',
    placement: 'bottom',
  },
  {
    target: '#document-panel input[name="startDate"]',
    content: 'Especifique una fecha de inicio para filtrar documentos creados o actualizados a partir de esa fecha.',
    title: 'Fecha Desde',
    placement: 'bottom',
  },
  {
    target: '#document-panel input[name="endDate"]',
    content: 'Especifique una fecha final para filtrar documentos creados o actualizados hasta esa fecha.',
    title: 'Fecha Hasta',
    placement: 'bottom',
  },
  {
    target: '#document-panel .flex.flex-col.md\\:flex-row.gap-4.items-end button',
    content: 'Utilice este botón para resetear todos los filtros y volver a ver todos los documentos disponibles.',
    title: 'Limpiar Filtros',
    placement: 'left',
  },
  {
    target: '#document-panel .grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4',
    content: 'Esta sección muestra todos los documentos que coinciden con sus criterios de búsqueda, organizados en tarjetas informativas.',
    title: 'Lista de Documentos',
    placement: 'top',
  },
  {
    target: '#document-panel .bg-white.rounded-xl.shadow-sm.overflow-hidden.h-full.flex.flex-col',
    content: 'Cada tarjeta muestra la información esencial del documento: tipo, categoría, título, autor y fecha de publicación o actualización.',
    title: 'Tarjeta de Documento',
    placement: 'right',
  },
  {
    target: '#document-panel .bg-gray-100.text-gray-600.rounded-full.text-xs',
    content: 'Las etiquetas son interactivas. Puede hacer clic en cualquier etiqueta para filtrar automáticamente todos los documentos con esa misma etiqueta.',
    title: 'Etiquetas Interactivas',
    placement: 'top',
  },
  {
    target: '#document-panel .bg-blue-50.text-blue-600.rounded-lg',
    content: 'Utilice el botón "Ver" para abrir el documento directamente en el navegador y revisarlo sin necesidad de descargarlo.',
    title: 'Visualizar Documento',
    placement: 'top',
  },
  {
    target: '#document-panel .bg-green-50.text-green-600.rounded-lg',
    content: 'Utilice el botón "Descargar" para guardar una copia local del documento en su computadora para acceso sin conexión.',
    title: 'Descargar Documento',
    placement: 'top',
  }
];

// Tutorial para la página de Registros (Records Panel)
export const recordsPanelSteps = [
  {
    target: '#records-panel',
    content: 'Bienvenido al Panel de Registros. Esta sección centraliza el acceso a todos los registros históricos de incidentes y control de camiones.',
    title: 'Panel de Registros',
    disableBeacon: true,
    placement: 'center'
  },
  {
    target: '#records-panel h1.text-2xl.font-bold',
    content: 'Desde este panel podrá consultar, filtrar y exportar registros históricos, así como crear nuevos registros de incidentes y control de camiones.',
    title: 'Sistema de Registros',
    placement: 'bottom',
  },
  {
    target: '#records-panel .relative button',
    content: 'Utilice este botón para crear nuevos registros. Al hacer clic, se desplegará un menú con las opciones disponibles.',
    title: 'Crear Nuevo Registro',
    placement: 'left',
  },
  {
    target: '#records-panel .dropdown-menu',
    content: 'Seleccione el tipo de registro que desea crear: Registro de Incidentes o Control de Camiones.',
    title: 'Opciones de Registro',
    placement: 'left',
  },
  {
    target: '#records-panel .grid.grid-cols-1.lg\\:grid-cols-2',
    content: 'En esta sección se muestran los registros más recientes, organizados en dos categorías: Incidentes y Camiones.',
    title: 'Registros Recientes',
    placement: 'top',
  },
  {
    target: '#records-panel .bg-white.rounded-xl.shadow-sm.p-6:nth-child(1)',
    content: 'Aquí se muestran los últimos incidentes registrados, con detalles como tipo, ubicación, fecha y hora.',
    title: 'Últimos Incidentes',
    placement: 'right',
  },
  {
    target: '#records-panel .bg-white.rounded-xl.shadow-sm.p-6:nth-child(2)',
    content: 'Esta sección muestra los últimos registros de camiones con información como operador, compañía, patente y dirección.',
    title: 'Últimos Registros de Camiones',
    placement: 'left',
  },
  {
    target: '#records-panel .bg-white.rounded-xl.shadow-sm.p-6.mb-8',
    content: 'Utilice esta barra de filtros para buscar y filtrar los registros históricos según diferentes criterios.',
    title: 'Filtros de Búsqueda',
    placement: 'top',
  },
  {
    target: '#records-panel input[placeholder="Buscar registro"]',
    content: 'Introduzca términos de búsqueda para encontrar registros específicos por palabras clave.',
    title: 'Búsqueda por Texto',
    placement: 'bottom',
  },
  {
    target: '#records-panel select.block.w-full.rounded-md',
    content: 'Filtre por tipo de registro para ver solo incidentes, camiones o alertas según necesite.',
    title: 'Filtro por Tipo',
    placement: 'bottom',
  },
  {
    target: '#records-panel input[name="startDate"]',
    content: 'Especifique la fecha de inicio para filtrar registros a partir de una fecha determinada.',
    title: 'Fecha Desde',
    placement: 'bottom',
  },
  {
    target: '#records-panel input[name="endDate"]',
    content: 'Especifique la fecha final para filtrar registros hasta una fecha determinada.',
    title: 'Fecha Hasta',
    placement: 'bottom',
  },
  {
    target: '#records-panel button.bg-blue-50',
    content: 'Utilice este botón para resetear todos los filtros y volver a ver todos los registros disponibles.',
    title: 'Limpiar Filtros',
    placement: 'bottom',
  },
  {
    target: '#records-panel .flex.flex-wrap.border-b',
    content: 'Utilice estas pestañas para alternar entre los registros históricos de incidentes y camiones.',
    title: 'Pestañas de Registros Históricos',
    placement: 'bottom',
  },
  {
    target: '#records-panel .flex.flex-wrap.border-b button:first-child',
    content: 'Esta pestaña muestra los archivos históricos de incidentes organizados por año.',
    title: 'Registros de Incidentes',
    placement: 'bottom',
  },
  {
    target: '#records-panel .flex.flex-wrap.border-b button:last-child',
    content: 'Esta pestaña muestra los archivos históricos de control de camiones organizados por año y mes.',
    title: 'Registros de Camiones',
    placement: 'bottom',
  },
  {
    target: '#records-panel .flex.flex-wrap.border.rounded-lg',
    content: 'Seleccione el año para ver los registros históricos correspondientes a ese período.',
    title: 'Selector de Año',
    placement: 'bottom',
  },
  {
    target: '#records-panel .border.rounded-lg.overflow-hidden.p-6',
    content: 'Aquí se muestran los archivos disponibles para el año seleccionado. Puede descargarlos haciendo clic en el botón correspondiente.',
    title: 'Archivos Disponibles',
    placement: 'top',
  },
  {
    target: '#records-panel .fa-download',
    content: 'Utilice este botón para descargar el archivo seleccionado y guardarlo en su dispositivo.',
    title: 'Descargar Archivo',
    placement: 'left',
  }
];

// Tutorial para la página de Unidades de Emergencia
export const emergencyUnitsPanelSteps = [
  {
    target: '#emergency-units-panel',
    content: 'Bienvenido al Panel de Gestión de Unidades de Emergencia. Aquí podrá gestionar, monitorear y asignar personal a todas las unidades operativas.',
    title: 'Gestión de Unidades',
    disableBeacon: true,
    placement: 'center'
  },
  {
    target: '.units-filters',
    content: 'Utilice estos filtros para buscar unidades específicas por tipo, estado, zona o estado del checklist.',
    title: 'Filtros de Búsqueda',
    placement: 'bottom',
  },
  {
    target: '.units-grid',
    content: 'En esta sección se muestran todas las unidades disponibles con su información básica y estado actual.',
    title: 'Listado de Unidades',
    placement: 'top',
    disableScrolling: true,
  },
  {
    target: '.unit-card',
    content: 'Cada tarjeta muestra la información esencial de una unidad, incluyendo su tipo, estado operativo y última revisión.',
    title: 'Tarjeta de Unidad',
    placement: 'right',
  },
  {
    target: '.status-indicator',
    content: 'Este indicador muestra el estado actual de la unidad: Activo, En ruta, En mantenimiento o En espera.',
    title: 'Estado de la Unidad',
    placement: 'left',
  },
  {
    target: '.checklist-status',
    content: 'Aquí puede verificar el estado del último checklist realizado a la unidad y la fecha de la última revisión.',
    title: 'Estado del Checklist',
    placement: 'right',
  },
  {
    target: '.view-profile-btn',
    content: 'Haga clic en este botón para ver información detallada y gestionar la unidad seleccionada.',
    title: 'Ver Perfil de Unidad',
    placement: 'bottom',
  },
  {
    target: '.checklist-table',
    content: 'Esta tabla muestra el historial de checklists recientes para todas las unidades, organizado por fecha.',
    title: 'Historial de Checklists',
    placement: 'top',
    spotlightClicks: false,
  }
];

// Tutorial para la página de Personal
export const personnelPanelSteps = [
  {
    target: '#personnel-panel',
    content: 'Bienvenido al Panel de Gestión de Personal. Aquí podrá administrar, monitorear y asignar personal a las diferentes áreas operativas y emergencias.',
    title: 'Gestión de Personal',
    disableBeacon: true,
    placement: 'center'
  },
  {
    target: '.search-filters',
    content: 'Utilice estas herramientas para buscar personal específico por nombre, cargo o departamento, y filtrar según su estado o área.',
    title: 'Búsqueda y Filtros',
    placement: 'bottom',
  },
  {
    target: '.stats-panel',
    content: 'Este panel muestra las estadísticas actualizadas del personal: total de empleados, activos, con permisos, licencias e inactivos.',
    title: 'Estadísticas de Personal',
    placement: 'top',
    disableScrolling: true,
  },
  {
    target: '.personnel-grid',
    content: 'En esta sección se muestra todo el personal disponible con su información básica y estado actual.',
    title: 'Listado de Personal',
    placement: 'top',
    disableScrolling: true,
  },
  {
    target: '.personnel-card',
    content: 'Cada tarjeta muestra la información esencial de un empleado, incluyendo su nombre, cargo, departamento y datos de contacto.',
    title: 'Tarjeta de Personal',
    placement: 'right',
  },
  {
    target: '.status-badge',
    content: 'Este indicador muestra el estado actual del empleado: Activo, En permiso, Con licencia o Inactivo.',
    title: 'Estado del Personal',
    placement: 'left',
  },
  {
    target: '.view-profile-button',
    content: 'Haga clic en este botón para ver el perfil detallado del empleado, incluyendo certificaciones, historial y asignaciones.',
    title: 'Ver Perfil Completo',
    placement: 'bottom',
  },
  {
    target: '.add-personnel-button',
    content: 'Utilice este botón para agregar nuevo personal al sistema, incluyendo toda su información profesional y de contacto.',
    title: 'Agregar Personal',
    placement: 'left',
    spotlightClicks: false,
  }
];

// Tutorial para la página de Dashboard
export const dashboardPanelSteps = [
  {
    target: '#dashboard-panel',
    content: 'Bienvenido al Dashboard. Este panel de control le muestra información centralizada y en tiempo real sobre incidentes, alertas, vehículos y métricas clave del sistema.',
    title: 'Panel de Control',
    disableBeacon: true,
    placement: 'center'
  },
  {
    target: '.time-filter',
    content: 'Utilice este filtro para ver la información correspondiente a distintos períodos de tiempo: día, semana, mes o año.',
    title: 'Filtro de Tiempo',
    placement: 'bottom',
  },
  {
    target: '.report-button',
    content: 'Con este botón puede generar informes detallados de los datos visualizados, con las opciones de filtrado seleccionadas.',
    title: 'Generación de Informes',
    placement: 'left',
  },
  {
    target: '.filter-panel',
    content: 'Aplique filtros específicos por tipo de vehículo, incidente o ruta para analizar la información con mayor detalle.',
    title: 'Panel de Filtros',
    placement: 'top',
    disableScrolling: true,
  },
  {
    target: '.main-stats',
    content: 'Aquí puede ver las métricas más importantes del sistema: vehículos activos, incidentes del día, alertas activas y personal disponible.',
    title: 'Estadísticas Principales',
    placement: 'bottom',
    disableScrolling: true,
  },
  // Gráficos individuales
  {
    target: '.truck-chart',
    content: 'Este gráfico muestra la distribución de vehículos por tipo y estado, permitiéndole monitorear el uso de la flota.',
    title: 'Gráfico de Tipos de Vehículos',
    placement: 'right',
  },
  {
    target: '.dangerous-substances-chart',
    content: 'Visualice la distribución de sustancias peligrosas transportadas por los vehículos registrados en el sistema.',
    title: 'Gráfico de Sustancias Peligrosas',
    placement: 'right',
  },
  {
    target: '.incident-chart',
    content: 'En este gráfico puede visualizar la distribución de incidentes por tipo y severidad, identificando patrones recurrentes.',
    title: 'Gráfico de Tipos de Incidentes',
    placement: 'left',
  },
  {
    target: '.incidents-activity-chart',
    content: 'Analice la actividad de incidentes a lo largo del tiempo para identificar tendencias y patrones temporales.',
    title: 'Gráfico de Actividad de Incidentes',
    placement: 'left',
  },
  {
    target: '.alerts-quantity-chart',
    content: 'Este gráfico muestra la cantidad de alertas generadas en el período seleccionado, organizado por categorías.',
    title: 'Gráfico de Cantidad de Alertas',
    placement: 'top',
  },
  {
    target: '.emergencies-quantity-chart',
    content: 'Visualice la cantidad y distribución de emergencias registradas durante el período seleccionado.',
    title: 'Gráfico de Cantidad de Emergencias',
    placement: 'top',
  },
  {
    target: '.top-incidents-by-type-chart',
    content: 'Este gráfico muestra los 5 tipos de incidentes más frecuentes, ayudando a identificar los problemas más comunes.',
    title: 'Top 5 Incidentes por Tipo',
    placement: 'right',
  },
  {
    target: '.top-incidents-by-vehicle-chart',
    content: 'Analice los 5 tipos de vehículos más frecuentemente involucrados en incidentes para identificar patrones de riesgo.',
    title: 'Top 5 Incidentes por Vehículo',
    placement: 'top',
  },
  {
    target: '.top-incidents-by-involved-chart',
    content: 'Visualice los 5 tipos de involucrados más frecuentes en los incidentes registrados.',
    title: 'Top 5 Incidentes por Involucrado',
    placement: 'left',
  },
  {
    target: '.top-incidents-by-company-chart',
    content: 'Este gráfico muestra las 5 empresas con mayor cantidad de incidentes registrados en el sistema.',
    title: 'Top 5 Incidentes por Empresa',
    placement: 'right',
  },
  {
    target: '.alerts-by-type-chart',
    content: 'Analice la distribución de alertas por tipo para comprender mejor los riesgos más frecuentes en el sistema.',
    title: 'Alertas por Tipo',
    placement: 'left',
  },
  {
    target: '.latest-panels',
    content: 'En esta sección puede ver la información más reciente sobre alertas, incidentes y registros de vehículos en tiempo real.',
    title: 'Paneles de Actividad Reciente',
    placement: 'top',
    spotlightClicks: false,
  }
];

// Puede añadir más definiciones de pasos para otras páginas siguiendo el mismo formato 