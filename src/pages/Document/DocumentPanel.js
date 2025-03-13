import React, { useState } from 'react';

const DocumentPanel = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState({
    startDate: '',
    endDate: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDocument, setNewDocument] = useState({
    title: '',
    category: 'technical',
    author: '',
    type: 'PDF',
    size: '',
    description: '',
    tags: []
  });

  // Datos de ejemplo para documentos
  const [documents, setDocuments] = useState([
    {
      id: 'DOC-001',
      title: 'Estudio de Impacto Ambiental Mina Norte',
      category: 'technical',
      date: '2023-05-15',
      author: 'Departamento de Ingeniería',
      type: 'PDF',
      size: '2.4 MB',
      thumbnail: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      tags: ['estudio', 'ambiental', 'mina']
    },
    {
      id: 'DOC-002',
      title: 'Procedimiento de Evacuación en Emergencias',
      category: 'regulations',
      date: '2023-06-22',
      author: 'Departamento de Seguridad',
      type: 'DOCX',
      size: '1.8 MB',
      thumbnail: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      tags: ['procedimiento', 'evacuación', 'emergencia']
    },
    {
      id: 'DOC-003',
      title: 'Alerta de Seguridad: Actualización de Protocolos COVID-19',
      category: 'alerts',
      date: '2023-04-10',
      author: 'Comité de Seguridad',
      type: 'PDF',
      size: '5.2 MB',
      thumbnail: 'https://images.unsplash.com/photo-1614036417651-efe5912149d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      tags: ['alerta', 'covid', 'protocolo']
    },
    {
      id: 'DOC-004',
      title: 'Preguntas Frecuentes sobre Operación de Maquinaria Pesada',
      category: 'faqs',
      date: '2023-07-05',
      author: 'Departamento de Operaciones',
      type: 'PDF',
      size: '3.7 MB',
      thumbnail: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      tags: ['FAQ', 'maquinaria', 'operación']
    },
    {
      id: 'DOC-005',
      title: 'Curso de Capacitación: Primeros Auxilios',
      category: 'learning',
      date: '2023-03-18',
      author: 'Departamento de Recursos Humanos',
      type: 'PDF',
      size: '1.5 MB',
      thumbnail: 'https://images.unsplash.com/photo-1607968565043-36af90dde238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      tags: ['curso', 'primeros auxilios', 'capacitación']
    },
    {
      id: 'DOC-006',
      title: 'Reglamento Interno de Seguridad Minera',
      category: 'regulations',
      date: '2023-08-01',
      author: 'Departamento Legal',
      type: 'PDF',
      size: '0.8 MB',
      thumbnail: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      tags: ['reglamento', 'seguridad', 'minería']
    },
    {
      id: 'DOC-007',
      title: 'Estudio Geológico Zona Sur',
      category: 'technical',
      date: '2023-09-12',
      author: 'Departamento de Geología',
      type: 'PDF',
      size: '4.2 MB',
      thumbnail: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      tags: ['estudio', 'geología', 'exploración']
    },
    {
      id: 'DOC-008',
      title: 'Alerta: Condiciones Climáticas Adversas',
      category: 'alerts',
      date: '2023-10-05',
      author: 'Centro de Monitoreo',
      type: 'PDF',
      size: '1.1 MB',
      thumbnail: 'https://images.unsplash.com/photo-1614036417651-efe5912149d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      tags: ['alerta', 'clima', 'seguridad']
    },
    {
      id: 'DOC-009',
      title: 'Manual de Capacitación para Operadores',
      category: 'learning',
      date: '2023-07-22',
      author: 'Departamento de Capacitación',
      type: 'PDF',
      size: '3.5 MB',
      thumbnail: 'https://images.unsplash.com/photo-1607968565043-36af90dde238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      tags: ['manual', 'capacitación', 'operadores']
    },
    {
      id: 'DOC-010',
      title: 'FAQ: Preguntas Frecuentes sobre Protocolos de Seguridad',
      category: 'faqs',
      date: '2023-08-15',
      author: 'Departamento de Seguridad',
      type: 'PDF',
      size: '2.0 MB',
      thumbnail: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      tags: ['FAQ', 'seguridad', 'protocolos']
    }
  ]);

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewDocument(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generar ID único
    const newId = `DOC-${String(documents.length + 1).padStart(3, '0')}`;
    
    // Obtener fecha actual
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Seleccionar una imagen de vista previa según la categoría
    const thumbnails = {
      'technical': 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      'regulations': 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'alerts': 'https://images.unsplash.com/photo-1614036417651-efe5912149d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'faqs': 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'learning': 'https://images.unsplash.com/photo-1607968565043-36af90dde238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    };
    
    // Procesar etiquetas
    const tags = newDocument.tags.length > 0 
      ? (typeof newDocument.tags === 'string' 
          ? newDocument.tags.split(',').map(tag => tag.trim()) 
          : newDocument.tags)
      : [];
    
    // Crear nuevo documento
    const documentToAdd = {
      id: newId,
      title: newDocument.title,
      category: newDocument.category,
      date: currentDate,
      author: newDocument.author,
      type: newDocument.type,
      size: newDocument.size || '1.0 MB',
      thumbnail: thumbnails[newDocument.category] || thumbnails.technical,
      description: newDocument.description,
      tags: tags
    };
    
    // Agregar a la lista de documentos
    setDocuments([documentToAdd, ...documents]);
    
    // Cerrar modal y resetear formulario
    setIsModalOpen(false);
    setNewDocument({
      title: '',
      category: 'technical',
      author: '',
      type: 'PDF',
      size: '',
      description: '',
      tags: []
    });
  };

  // Manejar cambios en el filtro de fecha
  const handleDateFilterChange = (e) => {
    const { name, value } = e.target;
    setDateFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Resetear filtros
  const resetFilters = () => {
    setFilter('all');
    setSearchTerm('');
    setDateFilter({
      startDate: '',
      endDate: ''
    });
  };

  // Filtrar documentos según la categoría, término de búsqueda y rango de fechas
  const filteredDocuments = documents.filter(doc => {
    // Filtro por categoría
    const matchesFilter = filter === 'all' || doc.category === filter;
    
    // Filtro por término de búsqueda
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filtro por rango de fechas
    let matchesDateRange = true;
    const docDate = new Date(doc.date);
    
    if (dateFilter.startDate) {
      const startDate = new Date(dateFilter.startDate);
      matchesDateRange = matchesDateRange && docDate >= startDate;
    }
    
    if (dateFilter.endDate) {
      const endDate = new Date(dateFilter.endDate);
      // Ajustar la fecha final para incluir todo el día
      endDate.setHours(23, 59, 59, 999);
      matchesDateRange = matchesDateRange && docDate <= endDate;
    }
    
    return matchesFilter && matchesSearch && matchesDateRange;
  });

  // Obtener los últimos 4 documentos filtrados
  const latestDocuments = [...filteredDocuments].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);

  // Función para obtener el color según la categoría
  const getCategoryColor = (category) => {
    switch (category) {
      case 'technical': return 'bg-blue-100 text-blue-800';
      case 'regulations': return 'bg-green-100 text-green-800';
      case 'alerts': return 'bg-red-100 text-red-800';
      case 'faqs': return 'bg-yellow-100 text-yellow-800';
      case 'learning': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Función para obtener el texto según la categoría
  const getCategoryText = (category) => {
    switch (category) {
      case 'technical': return 'Estudio Técnico';
      case 'regulations': return 'Reglamento/Procedimiento';
      case 'alerts': return 'Alerta de Seguridad';
      case 'faqs': return 'FAQ';
      case 'learning': return 'Recurso de Aprendizaje';
      default: return category;
    }
  };

  // Función para obtener el icono según el tipo de documento
  const getTypeIcon = (type) => {
    switch (type) {
      case 'PDF': return 'fas fa-file-pdf text-red-500';
      case 'DOCX': return 'fas fa-file-word text-blue-500';
      case 'XLSX': return 'fas fa-file-excel text-green-500';
      default: return 'fas fa-file text-gray-500';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Repositorio</h1>
          <p className="text-gray-600">Biblioteca de documentos y recursos</p>
        </div>
        <button 
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          onClick={() => setIsModalOpen(true)}
        >
          <i className="fas fa-plus mr-2"></i> Subir Documento
        </button>
      </div>

      {/* Categorías de documentos */}
      <div className="mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          <div 
            className={`bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm p-4 cursor-pointer transition-all ${filter === 'all' ? 'ring-2 ring-indigo-300' : ''}`}
            onClick={() => setFilter('all')}
            data-filter="all"
          >
            <div className="flex flex-col items-center text-center">
              <i className="fas fa-folder-open text-2xl mb-2"></i>
              <h3 className="font-medium text-sm">Todos</h3>
              <p className="text-indigo-100 text-xs mt-1">{documents.length}</p>
            </div>
          </div>
          
          <div 
            className={`bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm p-4 cursor-pointer transition-all ${filter === 'technical' ? 'ring-2 ring-blue-300' : ''}`}
            onClick={() => setFilter('technical')}
          >
            <div className="flex flex-col items-center text-center">
              <i className="fas fa-file-alt text-2xl mb-2"></i>
              <h3 className="font-medium text-sm">Estudios Técnicos</h3>
              <p className="text-blue-100 text-xs mt-1">{documents.filter(doc => doc.category === 'technical').length}</p>
            </div>
          </div>
          
          <div 
            className={`bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-sm p-4 cursor-pointer transition-all ${filter === 'regulations' ? 'ring-2 ring-green-300' : ''}`}
            onClick={() => setFilter('regulations')}
          >
            <div className="flex flex-col items-center text-center">
              <i className="fas fa-file-medical text-2xl mb-2"></i>
              <h3 className="font-medium text-sm">Reglamentos</h3>
              <p className="text-green-100 text-xs mt-1">{documents.filter(doc => doc.category === 'regulations').length}</p>
            </div>
          </div>
          
          <div 
            className={`bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm p-4 cursor-pointer transition-all ${filter === 'alerts' ? 'ring-2 ring-red-300' : ''}`}
            onClick={() => setFilter('alerts')}
          >
            <div className="flex flex-col items-center text-center">
              <i className="fas fa-exclamation-triangle text-2xl mb-2"></i>
              <h3 className="font-medium text-sm">Alertas</h3>
              <p className="text-red-100 text-xs mt-1">{documents.filter(doc => doc.category === 'alerts').length}</p>
            </div>
          </div>
          
          <div 
            className={`bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg shadow-sm p-4 cursor-pointer transition-all ${filter === 'faqs' ? 'ring-2 ring-yellow-300' : ''}`}
            onClick={() => setFilter('faqs')}
          >
            <div className="flex flex-col items-center text-center">
              <i className="fas fa-question-circle text-2xl mb-2"></i>
              <h3 className="font-medium text-sm">FAQ's</h3>
              <p className="text-yellow-100 text-xs mt-1">{documents.filter(doc => doc.category === 'faqs').length}</p>
            </div>
          </div>
          
          <div 
            className={`bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-sm p-4 cursor-pointer transition-all ${filter === 'learning' ? 'ring-2 ring-purple-300' : ''}`}
            onClick={() => setFilter('learning')}
          >
            <div className="flex flex-col items-center text-center">
              <i className="fas fa-book text-2xl mb-2"></i>
              <h3 className="font-medium text-sm">Aprendizaje</h3>
              <p className="text-purple-100 text-xs mt-1">{documents.filter(doc => doc.category === 'learning').length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-search text-gray-400"></i>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Buscar documentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-filter text-gray-400"></i>
              <select
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">Todos los tipos</option>
                <option value="technical">Estudio Técnico</option>
                <option value="regulations">Reglamento/Procedimiento</option>
                <option value="alerts">Alerta de Seguridad</option>
                <option value="faqs">FAQ</option>
                <option value="learning">Recurso de Aprendizaje</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fecha desde
              </label>
              <input
                type="date"
                name="startDate"
                value={dateFilter.startDate}
                onChange={handleDateFilterChange}
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fecha hasta
              </label>
              <input
                type="date"
                name="endDate"
                value={dateFilter.endDate}
                onChange={handleDateFilterChange}
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              onClick={resetFilters}
              className="py-2 px-4 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 flex items-center"
            >
              <i className="fas fa-times-circle mr-2"></i>
              Limpiar filtros
            </button>
          </div>
        </div>
      </div>

      {/* Documentos */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {filter === 'all' 
              ? 'Todos los documentos' 
              : filter === 'procedures' 
                ? 'Procedimientos' 
                : filter === 'protocols' 
                  ? 'Protocolos' 
                  : filter === 'plans' 
                    ? 'Planes' 
                    : filter === 'guides' 
                      ? 'Guías' 
                      : filter === 'regulations' 
                        ? 'Normativas' 
                        : 'Formularios'}
          </h2>
          <span className="text-sm text-gray-500">
            {filteredDocuments.length === 0 ? (
              'No se encontraron documentos'
            ) : filteredDocuments.length === 1 ? (
              '1 documento encontrado'
            ) : (
              `${filteredDocuments.length} documentos encontrados`
            )}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDocuments.length > 0 ? (
            filteredDocuments.map(doc => (
              <div key={doc.id} className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col">
                <div className="h-40 bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center p-4">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-2">
                      <i className={`${getTypeIcon(doc.type)} text-2xl`}></i>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(doc.category)}`}>
                      {getCategoryText(doc.category)}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{doc.title}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <span>{doc.author}</span>
                    <span>{new Date(doc.date).toLocaleDateString()}</span>
                  </div>
                  {doc.tags && doc.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {doc.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="border-t border-gray-100 p-3 bg-gray-50">
                  <div className="flex justify-between">
                    <button className="flex items-center px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm transition-colors">
                      <i className="fas fa-eye mr-1"></i>
                      Ver
                    </button>
                    <button className="flex items-center px-3 py-1 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg text-sm transition-colors">
                      <i className="fas fa-download mr-1"></i>
                      Descargar
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-4 py-8 text-center">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-search text-gray-400 text-xl"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">No se encontraron documentos</h3>
              <p className="text-gray-500">Intenta con otros criterios de búsqueda o limpia los filtros</p>
              <button
                onClick={resetFilters}
                className="mt-4 py-2 px-4 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 inline-flex items-center"
              >
                <i className="fas fa-times-circle mr-2"></i>
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal para agregar documento */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Subir Nuevo Documento</h2>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Título del Documento*
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={newDocument.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Autor/Departamento*
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={newDocument.author}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Categoría
                  </label>
                  <select
                    name="category"
                    value={newDocument.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="technical">Estudio Técnico</option>
                    <option value="regulations">Reglamento/Procedimiento</option>
                    <option value="alerts">Alerta de Seguridad</option>
                    <option value="faqs">FAQ del Operador</option>
                    <option value="learning">Recurso de Aprendizaje</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Archivo
                  </label>
                  <select
                    name="type"
                    value={newDocument.type}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="PDF">PDF</option>
                    <option value="DOCX">DOCX</option>
                    <option value="XLSX">XLSX</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tamaño del Archivo
                  </label>
                  <input
                    type="text"
                    name="size"
                    value={newDocument.size}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Ej: 1.5 MB"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Etiquetas (separadas por comas)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={typeof newDocument.tags === 'string' ? newDocument.tags : newDocument.tags.join(', ')}
                  onChange={(e) => setNewDocument({...newDocument, tags: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ej: seguridad, minería, procedimiento"
                />
                <p className="text-xs text-gray-500 mt-1">Añade palabras clave para facilitar la búsqueda del documento</p>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descripción
                </label>
                <textarea
                  name="description"
                  value={newDocument.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Guardar Documento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentPanel; 