import React, { useState, useEffect } from 'react';
import { getThumbnail, documentosEstudiosTecnicos } from '../../data/documentData';
import { documentosConThumbnail } from '../../data/documentosConThumbnail';

const DocumentPanel = () => {
  const [filter, setFilter] = useState('all');
  const [tagFilter, setTagFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState({
    startDate: '',
    endDate: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDocument, setNewDocument] = useState({
    title: '',
    category: 'tecnicos',
    author: '',
    type: 'PDF',
    size: '',
    description: '',
    tags: []
  });

  // Filtrar documentos con valores NaN en título o autor
  const validDocumentosConThumbnail = documentosConThumbnail.filter(doc => 
    doc.title && doc.title !== "NaN" && !Number.isNaN(doc.title) && 
    doc.author && doc.author !== "NaN" && !Number.isNaN(doc.author)
  );
  
  // Combinar ambas fuentes de documentos
  const [documents, setDocuments] = useState([...validDocumentosConThumbnail, ...documentosEstudiosTecnicos]);

  // Extraer todas las etiquetas únicas de todos los documentos
  const [uniqueTags, setUniqueTags] = useState([]);
  
  useEffect(() => {
    // Recopilar todas las etiquetas únicas
    const allTags = new Set();
    documents.forEach(doc => {
      if (doc.tags && Array.isArray(doc.tags)) {
        doc.tags.forEach(tag => allTags.add(tag));
      }
    });
    setUniqueTags(Array.from(allTags).sort());
  }, [documents]);

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
      thumbnail: getThumbnail(newDocument.category),
      description: newDocument.description,
      tags: tags
    };
    
    // Agregar a la lista de documentos
    setDocuments([documentToAdd, ...documents]);
    
    // Cerrar modal y resetear formulario
    setIsModalOpen(false);
    setNewDocument({
      title: '',
      category: 'tecnicos',
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
    setTagFilter('all');
    setSearchTerm('');
    setDateFilter({
      startDate: '',
      endDate: ''
    });
  };

  // Filtrar documentos según la categoría, etiqueta, término de búsqueda y rango de fechas
  const filteredDocuments = documents.filter(doc => {
    if (!doc) return false;
    
    // Filtro por categoría
    const matchesCategory = filter === 'all' || doc.category === filter;
    
    // Filtro por etiqueta
    const matchesTag = tagFilter === 'all' || (doc.tags && doc.tags.includes(tagFilter));
    
    // Filtro por término de búsqueda (con verificación de seguridad)
    const matchesSearch = !searchTerm || (
      (doc.title && doc.title.toString().toLowerCase().includes(searchTerm.toLowerCase())) || 
      (doc.author && doc.author.toString().toLowerCase().includes(searchTerm.toLowerCase()))
    );
    
    // Filtro por rango de fechas
    let matchesDateRange = true;
    
    if (doc.date) {
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
    }
    
    return matchesCategory && matchesTag && matchesSearch && matchesDateRange;
  });

  // Función para obtener el color según la categoría
  const getCategoryColor = (category) => {
    switch (category) {
      case 'tecnicos': return 'bg-blue-100 text-blue-800';
      case 'estandar': return 'bg-indigo-100 text-indigo-800';
      case 'procedimientos': return 'bg-cyan-100 text-cyan-800';
      case 'reglamentos': return 'bg-green-100 text-green-800';
      case 'auditorias': return 'bg-orange-100 text-orange-800';
      case 'alertas': return 'bg-red-100 text-red-800';
      case 'faqs': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Función para obtener el texto según la categoría
  const getCategoryText = (category) => {
    switch (category) {
      case 'tecnicos': return 'Estudio Técnico';
      case 'estandar': return 'Estándar';
      case 'procedimientos': return 'Procedimientos - Planes';
      case 'reglamentos': return 'Reglamentos';
      case 'auditorias': return 'Auditorias Viales';
      case 'alertas': return 'Alertas';
      case 'faqs': return 'FAQ\'s';
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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
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
            className={`bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm p-4 cursor-pointer transition-all ${filter === 'tecnicos' ? 'ring-2 ring-blue-300' : ''}`}
            onClick={() => setFilter('tecnicos')}
          >
            <div className="flex flex-col items-center text-center">
              <i className="fas fa-file-alt text-2xl mb-2"></i>
              <h3 className="font-medium text-sm">Estudios Técnicos</h3>
              <p className="text-blue-100 text-xs mt-1">{documents.filter(doc => doc.category === 'tecnicos').length}</p>
            </div>
          </div>
          
          <div 
            className={`bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm p-4 cursor-pointer transition-all ${filter === 'estandar' ? 'ring-2 ring-indigo-300' : ''}`}
            onClick={() => setFilter('estandar')}
          >
            <div className="flex flex-col items-center text-center">
              <i className="fas fa-ruler text-2xl mb-2"></i>
              <h3 className="font-medium text-sm">Estándar</h3>
              <p className="text-indigo-100 text-xs mt-1">{documents.filter(doc => doc.category === 'estandar').length}</p>
            </div>
          </div>
          
          <div 
            className={`bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg shadow-sm p-4 cursor-pointer transition-all ${filter === 'procedimientos' ? 'ring-2 ring-cyan-300' : ''}`}
            onClick={() => setFilter('procedimientos')}
          >
            <div className="flex flex-col items-center text-center">
              <i className="fas fa-clipboard-list text-2xl mb-2"></i>
              <h3 className="font-medium text-sm">Procedimientos - Planes</h3>
              <p className="text-cyan-100 text-xs mt-1">{documents.filter(doc => doc.category === 'procedimientos').length}</p>
            </div>
          </div>
          
          <div 
            className={`bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-sm p-4 cursor-pointer transition-all ${filter === 'reglamentos' ? 'ring-2 ring-green-300' : ''}`}
            onClick={() => setFilter('reglamentos')}
          >
            <div className="flex flex-col items-center text-center">
              <i className="fas fa-book text-2xl mb-2"></i>
              <h3 className="font-medium text-sm">Reglamentos</h3>
              <p className="text-green-100 text-xs mt-1">{documents.filter(doc => doc.category === 'reglamentos').length}</p>
            </div>
          </div>
          
          <div 
            className={`bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-sm p-4 cursor-pointer transition-all ${filter === 'auditorias' ? 'ring-2 ring-orange-300' : ''}`}
            onClick={() => setFilter('auditorias')}
          >
            <div className="flex flex-col items-center text-center">
              <i className="fas fa-tasks text-2xl mb-2"></i>
              <h3 className="font-medium text-sm">Auditorias Viales</h3>
              <p className="text-orange-100 text-xs mt-1">{documents.filter(doc => doc.category === 'auditorias').length}</p>
            </div>
          </div>
          
          <div 
            className={`bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-sm p-4 cursor-pointer transition-all ${filter === 'alertas' ? 'ring-2 ring-red-300' : ''}`}
            onClick={() => setFilter('alertas')}
          >
            <div className="flex flex-col items-center text-center">
              <i className="fas fa-exclamation-triangle text-2xl mb-2"></i>
              <h3 className="font-medium text-sm">Alertas</h3>
              <p className="text-red-100 text-xs mt-1">{documents.filter(doc => doc.category === 'alertas').length}</p>
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
              <i className="fas fa-tags text-gray-400"></i>
              <select
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={tagFilter}
                onChange={(e) => setTagFilter(e.target.value)}
              >
                <option value="all">Todas las etiquetas</option>
                {uniqueTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
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
            {tagFilter === 'all' 
              ? 'Todos los documentos' 
              : `Documentos etiquetados con "${tagFilter}"`}
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
                        <span 
                          key={index} 
                          className="px-2 py-0.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full text-xs cursor-pointer transition-colors"
                          onClick={() => {
                            setTagFilter(tag);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
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
                    <option value="tecnicos">Estudio Técnico</option>
                    <option value="estandar">Estándar</option>
                    <option value="procedimientos">Procedimientos - Planes</option>
                    <option value="reglamentos">Reglamentos</option>
                    <option value="auditorias">Auditorias Viales</option>
                    <option value="alertas">Alertas</option>
                    <option value="faqs">FAQ's</option>
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