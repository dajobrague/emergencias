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
    category: 'procedures',
    author: '',
    type: 'PDF',
    size: '',
    description: ''
  });

  // Datos de ejemplo para documentos
  const [documents, setDocuments] = useState([
    {
      id: 'DOC-001',
      title: 'Manual de Procedimientos de Emergencia',
      category: 'procedures',
      date: '2023-05-15',
      author: 'Departamento de Operaciones',
      type: 'PDF',
      size: '2.4 MB',
      thumbnail: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'DOC-002',
      title: 'Protocolo de Atención a Víctimas',
      category: 'protocols',
      date: '2023-06-22',
      author: 'Departamento Médico',
      type: 'DOCX',
      size: '1.8 MB',
      thumbnail: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'DOC-003',
      title: 'Plan de Contingencia para Desastres Naturales',
      category: 'plans',
      date: '2023-04-10',
      author: 'Comité de Emergencias',
      type: 'PDF',
      size: '5.2 MB',
      thumbnail: 'https://images.unsplash.com/photo-1614036417651-efe5912149d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'DOC-004',
      title: 'Guía de Mantenimiento de Vehículos',
      category: 'guides',
      date: '2023-07-05',
      author: 'Departamento de Mantenimiento',
      type: 'PDF',
      size: '3.7 MB',
      thumbnail: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'DOC-005',
      title: 'Normativa de Seguridad para Personal',
      category: 'regulations',
      date: '2023-03-18',
      author: 'Departamento de Recursos Humanos',
      type: 'PDF',
      size: '1.5 MB',
      thumbnail: 'https://images.unsplash.com/photo-1607968565043-36af90dde238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'DOC-006',
      title: 'Formularios de Reporte de Incidentes',
      category: 'forms',
      date: '2023-08-01',
      author: 'Departamento de Calidad',
      type: 'XLSX',
      size: '0.8 MB',
      thumbnail: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
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
      'procedures': 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      'protocols': 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'plans': 'https://images.unsplash.com/photo-1614036417651-efe5912149d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'guides': 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'regulations': 'https://images.unsplash.com/photo-1607968565043-36af90dde238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      'forms': 'https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRvY3VtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    };
    
    // Crear nuevo documento
    const documentToAdd = {
      id: newId,
      title: newDocument.title,
      category: newDocument.category,
      date: currentDate,
      author: newDocument.author,
      type: newDocument.type,
      size: newDocument.size || '1.0 MB',
      thumbnail: thumbnails[newDocument.category] || thumbnails.procedures,
      description: newDocument.description
    };
    
    // Agregar a la lista de documentos
    setDocuments([documentToAdd, ...documents]);
    
    // Cerrar modal y resetear formulario
    setIsModalOpen(false);
    setNewDocument({
      title: '',
      category: 'procedures',
      author: '',
      type: 'PDF',
      size: '',
      description: ''
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
      case 'procedures': return 'bg-blue-100 text-blue-800';
      case 'protocols': return 'bg-green-100 text-green-800';
      case 'plans': return 'bg-purple-100 text-purple-800';
      case 'guides': return 'bg-yellow-100 text-yellow-800';
      case 'regulations': return 'bg-red-100 text-red-800';
      case 'forms': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Función para obtener el texto según la categoría
  const getCategoryText = (category) => {
    switch (category) {
      case 'procedures': return 'Procedimiento';
      case 'protocols': return 'Protocolo';
      case 'plans': return 'Plan';
      case 'guides': return 'Guía';
      case 'regulations': return 'Normativa';
      case 'forms': return 'Formulario';
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
                <option value="procedures">Procedimientos</option>
                <option value="protocols">Protocolos</option>
                <option value="plans">Planes</option>
                <option value="guides">Guías</option>
                <option value="regulations">Normativas</option>
                <option value="forms">Formularios</option>
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
          <h2 className="text-xl font-semibold">Últimos documentos cargados</h2>
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
          {latestDocuments.length > 0 ? (
            latestDocuments.map(doc => (
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
                    <option value="procedures">Procedimiento</option>
                    <option value="protocols">Protocolo</option>
                    <option value="plans">Plan</option>
                    <option value="guides">Guía</option>
                    <option value="regulations">Normativa</option>
                    <option value="forms">Formulario</option>
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