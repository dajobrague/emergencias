import React, { useState, useEffect, useMemo } from 'react';
import { documentosEstudiosTecnicos } from '../../data/documentData';
import { documentosConThumbnail } from '../../data/documentosConThumbnail';
import { documentosAuditorias } from '../../data/documentData';
import { useTutorial } from '../../context/TutorialContext';
import { documentPanelSteps } from '../../components/Tutorial/tutorialSteps';

const DocumentPanel = () => {
  const [filter, setFilter] = useState('all');
  const [tagFilter, setTagFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState({
    startDate: '',
    endDate: ''
  });

  // Acceder al contexto del tutorial
  const { startTutorial } = useTutorial();

  // Manejar el inicio del tutorial
  const handleStartTutorial = () => {
    startTutorial('document-panel', documentPanelSteps);
  };

  // Filtrar documentos con valores NaN en título o autor
  const validDocumentosConThumbnail = useMemo(() => 
    documentosConThumbnail.filter(doc => 
      doc.title && doc.title !== "NaN" && !Number.isNaN(doc.title) && 
      doc.author && doc.author !== "NaN" && !Number.isNaN(doc.author)
    ), []);
  
  // Combinar ambas fuentes de documentos usando useMemo para evitar recalculos innecesarios
  const documents = useMemo(() => 
    [...validDocumentosConThumbnail, ...documentosEstudiosTecnicos, ...documentosAuditorias], 
    [validDocumentosConThumbnail]);

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

  // Función para formatear fechas en formato DD-MM-YYYY
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  };

  // Filtrar documentos según los criterios seleccionados
  const filteredDocuments = documents.filter(doc => {
    // Filtro por categoría
    if (filter !== 'all' && doc.category !== filter) return false;
    
    // Filtro por etiqueta
    if (tagFilter !== 'all' && (!doc.tags || !doc.tags.includes(tagFilter))) return false;
    
    // Filtro por búsqueda
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const titleMatch = doc.title.toLowerCase().includes(searchLower);
      const authorMatch = doc.author.toLowerCase().includes(searchLower);
      const tagsMatch = doc.tags && doc.tags.some(tag => tag.toLowerCase().includes(searchLower));
      if (!titleMatch && !authorMatch && !tagsMatch) return false;
    }
    
    // Filtro por fecha
    if (dateFilter.startDate && dateFilter.endDate) {
      const docDate = new Date(doc.date);
      const startDate = new Date(dateFilter.startDate);
      const endDate = new Date(dateFilter.endDate);
      if (docDate < startDate || docDate > endDate) return false;
    }
    
    return true;
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
    <div className="p-6" id="document-panel">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Repositorio</h1>
          <p className="text-gray-600">Biblioteca de documentos y recursos</p>
        </div>
        <button 
          onClick={handleStartTutorial}
          className="ml-2 flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          aria-label="Iniciar tutorial"
        >
          <i className="fas fa-question-circle mr-2"></i>
          <span>Ayuda</span>
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
                    {doc.category === 'tecnicos' && (
                      <div className="flex items-center space-x-2">
                        <i className="fas fa-calendar text-gray-400"></i>
                        <span>{formatDate(doc.date)}</span>
                      </div>
                    )}
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
    </div>
  );
};

export default DocumentPanel; 