// Datos de documentos extraídos de los archivos CSV

// Función para generar thumbnails según categoría
export const getThumbnail = (category) => {
  const thumbnails = {
    'tecnicos': 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'estandar': 'https://images.unsplash.com/photo-1607968565043-36af90dde238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'procedimientos': 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'reglamentos': 'https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'auditorias': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'alertas': 'https://images.unsplash.com/photo-1614036417651-efe5912149d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'faqs': 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  };
  return thumbnails[category] || thumbnails.tecnicos;
};

// Estudios Técnicos (con fechas)
const documentosEstudiosTecnicos = [
  {
    id: 'ET-001',
    title: 'Estandar Centro Control deTráfico',
    category: 'tecnicos',
    date: '2022-03-08',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '2.4 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estándar', 'Tráfico', 'Operación']
  },
  {
    id: 'ET-002',
    title: 'Plan Operacion Invierno Rutas de Acceso',
    category: 'tecnicos',
    date: '2022-06-08',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '3.1 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estándar', 'Invierno', 'Operación']
  },
  {
    id: 'ET-003',
    title: 'Estandar Controlador de Transporte',
    category: 'tecnicos',
    date: '2022-12-08',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '1.8 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estándar', 'Tráfico', 'Operación']
  },
  {
    id: 'ET-004',
    title: 'Estudio Riesgos Viales Transporte Agua',
    category: 'tecnicos',
    date: '2022-04-08',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '4.2 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'Transporte']
  },
  {
    id: 'ET-005',
    title: 'Plan Operacional Inspección de Origen',
    category: 'tecnicos',
    date: '2022-05-10',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '2.9 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estándar', 'Tráfico', 'Operación']
  },
  {
    id: 'ET-006',
    title: 'Estudio Riesgos Viales Rutas Acceso a LB',
    category: 'tecnicos',
    date: '2022-10-10',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '5.3 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'Transporte', 'Tráfico']
  },
  {
    id: 'ET-007',
    title: 'Estudio Riesgos Viales Rutas Quilapilun CST',
    category: 'tecnicos',
    date: '2022-03-11',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '3.6 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'Transporte', 'Tráfico']
  },
  {
    id: 'ET-008',
    title: 'Movilidad Segura Fase 2 ISO 39001',
    category: 'tecnicos',
    date: '2022-05-11',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '2.7 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'ISO39001']
  },
  {
    id: 'ET-009',
    title: 'Proceso Movilidad Segura Fase 1 ISO 3900',
    category: 'tecnicos',
    date: '2022-10-11',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '3.2 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'ISO39001']
  },
  {
    id: 'ET-010',
    title: 'Estudio Rutas Autopista RM 250 KM',
    category: 'tecnicos',
    date: '2022-14-11',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '4.1 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'Transporte', 'Tráfico']
  },
  {
    id: 'ET-011',
    title: 'Estudio Rutas Los Libertadores Los Andes',
    category: 'tecnicos',
    date: '2022-02-12',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '3.7 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'Transporte', 'Tráfico']
  },
  {
    id: 'ET-012',
    title: 'Plan de Control y Gestion Vial LB',
    category: 'tecnicos',
    date: '2022-03-12',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '2.5 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estándar', 'Tráfico', 'Operación']
  },
  {
    id: 'ET-013',
    title: 'Estudio Traficos Modos Transporte LB-LT',
    category: 'tecnicos',
    date: '2022-10-12',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '3.9 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'Transporte', 'Tráfico']
  },
  {
    id: 'ET-014',
    title: 'Estudio Movilidad Segura ISO 39001',
    category: 'tecnicos',
    date: '2022-15-12',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '2.8 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'ISO39001']
  },
  {
    id: 'ET-015',
    title: 'Estudio Trafico Iso 39001 F3 F4',
    category: 'tecnicos',
    date: '2023-11-01',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '3.3 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'ISO39001', 'Tráfico']
  },
  {
    id: 'ET-016',
    title: 'Estudio Trafico ISO 39001 Fase 1 Fase 2',
    category: 'tecnicos',
    date: '2023-07-01',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '2.9 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'ISO39001', 'Tráfico']
  },
  {
    id: 'ET-017',
    title: 'Estudio Traficos ISO 39001 F5 F6 F7',
    category: 'tecnicos',
    date: '2023-02-03',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '3.4 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'ISO39001', 'Tráfico']
  },
  {
    id: 'ET-018',
    title: 'Auditorias Viales LB -LT (Caminos KM)',
    category: 'tecnicos',
    date: '2023-05-03',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '4.5 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'ISO39001', 'Tráfico']
  },
  {
    id: 'ET-019',
    title: 'Seguridad Vial Transporte Agua_Trafico C',
    category: 'tecnicos',
    date: '2023-04-06',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '3.2 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'Transporte', 'Tráfico']
  },
  {
    id: 'ET-020',
    title: 'Auditori Seguridad Trans AguaRiesgoVial',
    category: 'tecnicos',
    date: '2023-15-07',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '4.3 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'Transporte', 'Tráfico']
  },
  {
    id: 'ET-021',
    title: 'Análisis Caminos Transporte Rutas Los Bronces',
    category: 'tecnicos',
    date: '2023-20-07',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '3.8 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'Transporte', 'Tráfico']
  },
  {
    id: 'ET-022',
    title: 'Estudio Traficos Modos Transporte LB-LT',
    category: 'tecnicos',
    date: '2023-20-12',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '4.1 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'Transporte', 'Tráfico']
  },
  {
    id: 'ET-023',
    title: 'Estudio Riesgos Viales Rutas Acceso a Lo',
    category: 'tecnicos',
    date: '2023-22-12',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '3.9 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'Transporte', 'Tráfico']
  },
  {
    id: 'ET-024',
    title: 'Estudio de Ruta Autopistas RM_250KM',
    category: 'tecnicos',
    date: '2023-15-12',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '4.2 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'Transporte', 'Tráfico']
  },
  {
    id: 'ET-025',
    title: 'Mediciones y estudios de riesgos viales',
    category: 'tecnicos',
    date: '2024-02-07',
    author: 'Superintendencia de Seguridad Vial',
    area: 'Control y Gestión Vial',
    type: 'PDF',
    size: '3.7 MB',
    thumbnail: getThumbnail('tecnicos'),
    tags: ['Estudio', 'Análisis', 'Transporte', 'Tráfico']
  }
];

export { documentosEstudiosTecnicos }; 