import React, { useState, useEffect, useMemo } from 'react';

const SimulatorsPanel = () => {
  const [activeTab, setActiveTab] = useState('simulators');
  
  // Estados para los filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  
  // Estados para los resultados filtrados
  const [filteredSimulators, setFilteredSimulators] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [filteredLearning, setFilteredLearning] = useState([]);

  // Lista de videos de simulación
  const simulationVideos = useMemo(() => [
    {
      id: 1,
      title: 'DEMO 1: Demo Control de Tráfico AA LB Versión 1',
      description: 'Simulador interactivo de conducción para entrenamiento en situaciones de emergencia y condiciones climáticas adversas.',
      oneDriveUrl: 'https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2FC11B1CBF0DFA71E1%2190959%3Fithint%3Dvideo%26e%3DpY3dmk&sw=bypassConfig&cid=C11B1CBF0DFA71E1&id=C11B1CBF0DFA71E1%2190959&authkey=%21ALOgeVnKQW%5F%5FMso&v=photos',
      category: 'Simulador',
      date: '2023-11-15',
      type: 'onedrive'
    },
    {
      id: 2,
      title: 'DEMO 2: Demo Control de Tráfico AA LB Versión 2',
      description: 'Módulo de ejercicios prácticos para mejorar técnicas de conducción segura en diferentes escenarios y condiciones.',
      oneDriveUrl: 'https://onedrive.live.com/?qt=allmyphotos&photosData=%2Fshare%2FC11B1CBF0DFA71E1%2190958%3Fithint%3Dvideo%26e%3DpIdqn2&sw=bypassConfig&cid=C11B1CBF0DFA71E1&id=C11B1CBF0DFA71E1%2190958&authkey=%21ACeIDT4QGwIbf84&v=photos',
      category: 'Simulador',
      date: '2023-11-25',
      type: 'onedrive'
    }
  ], []);

  // Contenido para la sección de Campañas
  const campaignContent = useMemo(() => [
    {
      id: 1,
      title: 'Campaña: Exceso de Velocidad',
      description: 'Conoce los riesgos del exceso de velocidad y cómo afecta a la seguridad vial. Esta campaña oficial de la CONASET resalta la importancia de respetar los límites de velocidad.',
      youtubeId: 'tXNhoRJOvnI',
      externalLink: 'https://www.conaset.cl/exceso-velocidad/',
      category: 'Seguridad Vial',
      date: '2023-09-10'
    }
  ], []);

  // Contenido para la sección de Aprendizajes
  const learningContent = useMemo(() => [
    {
      id: 1,
      title: 'Medidas de seguridad en carretera',
      description: 'Aprenda las medidas de seguridad esenciales para conducir por carretera y prevenir accidentes en diferentes condiciones.',
      youtubeId: 'A3GivkzxxJQ',
      category: 'Capacitación',
      date: '2023-07-12'
    },
    {
      id: 2,
      title: 'Técnicas de Conducción Defensiva',
      description: 'Mejore sus habilidades de conducción defensiva para prevenir accidentes y situaciones de riesgo. Serie completa de capacitación.',
      youtubeId: 'f8tcx2FEvSs',
      playlistLink: 'https://www.youtube.com/watch?v=f8tcx2FEvSs&list=PLimBShHKRwbBLjTtBZL3J3zm6wTHABGqu&index=1',
      category: 'Conducción',
      date: '2023-05-30'
    }
  ], []);
  
  // Obtener todas las categorías para el filtro
  const getAllCategories = () => {
    const simulatorCategories = simulationVideos.map(video => video.category);
    const campaignCategories = campaignContent.map(campaign => campaign.category);
    const learningCategories = learningContent.map(learning => learning.category);
    
    const allCategories = [...new Set([...simulatorCategories, ...campaignCategories, ...learningCategories])];
    return ['Todos', ...allCategories];
  };
  
  const categories = getAllCategories();
  
  // Limpiar todos los filtros
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('Todos');
    setDateFrom('');
    setDateTo('');
  };
  
  // Aplicar filtros a los simuladores
  useEffect(() => {
    // Filtrar simuladores
    const filteredSim = simulationVideos.filter(video => {
      const matchesSearch = searchTerm === '' || 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        video.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'Todos' || video.category === selectedCategory;
      
      const videoDate = new Date(video.date);
      const fromDate = dateFrom ? new Date(dateFrom) : null;
      const toDate = dateTo ? new Date(dateTo) : null;
      
      const matchesFromDate = fromDate ? videoDate >= fromDate : true;
      const matchesToDate = toDate ? videoDate <= toDate : true;
      
      return matchesSearch && matchesCategory && matchesFromDate && matchesToDate;
    });
    setFilteredSimulators(filteredSim);
    
    // Filtrar campañas
    const filteredCamp = campaignContent.filter(campaign => {
      const matchesSearch = searchTerm === '' || 
        campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'Todos' || campaign.category === selectedCategory;
      
      const campaignDate = new Date(campaign.date);
      const fromDate = dateFrom ? new Date(dateFrom) : null;
      const toDate = dateTo ? new Date(dateTo) : null;
      
      const matchesFromDate = fromDate ? campaignDate >= fromDate : true;
      const matchesToDate = toDate ? campaignDate <= toDate : true;
      
      return matchesSearch && matchesCategory && matchesFromDate && matchesToDate;
    });
    setFilteredCampaigns(filteredCamp);
    
    // Filtrar aprendizajes
    const filteredLearn = learningContent.filter(learning => {
      const matchesSearch = searchTerm === '' || 
        learning.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        learning.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'Todos' || learning.category === selectedCategory;
      
      const learningDate = new Date(learning.date);
      const fromDate = dateFrom ? new Date(dateFrom) : null;
      const toDate = dateTo ? new Date(dateTo) : null;
      
      const matchesFromDate = fromDate ? learningDate >= fromDate : true;
      const matchesToDate = toDate ? learningDate <= toDate : true;
      
      return matchesSearch && matchesCategory && matchesFromDate && matchesToDate;
    });
    setFilteredLearning(filteredLearn);
    
  }, [searchTerm, selectedCategory, dateFrom, dateTo, simulationVideos, campaignContent, learningContent]);

  // Asignar los valores iniciales al cargar el componente
  useEffect(() => {
    setFilteredSimulators(simulationVideos);
    setFilteredCampaigns(campaignContent);
    setFilteredLearning(learningContent);
  }, [simulationVideos, campaignContent, learningContent]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-dark mb-4">Centro de Simulación y Aprendizaje</h2>
      <p className="text-gray-600 mb-6">
        Explore nuestra colección de videos instructivos, simuladores y recursos educativos para mejorar sus habilidades y conocimientos en seguridad vial y operación de vehículos.
      </p>

      {/* Pestañas de navegación */}
      <div className="flex flex-wrap border-b mb-8">
        <button
          onClick={() => setActiveTab('simulators')}
          className={`py-3 px-6 text-sm font-medium rounded-t-lg transition-colors ${
            activeTab === 'simulators'
              ? 'text-blue-600 border-b-2 border-blue-500 bg-blue-50'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          Simuladores
        </button>
        <button
          onClick={() => setActiveTab('campaigns')}
          className={`py-3 px-6 text-sm font-medium rounded-t-lg transition-colors ${
            activeTab === 'campaigns'
              ? 'text-blue-600 border-b-2 border-blue-500 bg-blue-50'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          Campañas
        </button>
        <button
          onClick={() => setActiveTab('learning')}
          className={`py-3 px-6 text-sm font-medium rounded-t-lg transition-colors ${
            activeTab === 'learning'
              ? 'text-blue-600 border-b-2 border-blue-500 bg-blue-50'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          Aprendizajes
        </button>
      </div>
      
      {/* Barra de filtros */}
      <div className="bg-gray-50 p-4 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          {/* Filtro de búsqueda */}
          <div className="relative md:col-span-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
              type="text"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
              placeholder="Buscar registro"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Filtro por categoría */}
          <div className="md:col-span-2 relative">
            <select
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-8"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>{category === 'Todos' ? 'Todos los Registros' : category}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          
          {/* Filtro de fecha desde */}
          <div className="md:col-span-2">
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                Desde
              </span>
              <input
                type="date"
                className="rounded-none rounded-r-lg bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
            </div>
          </div>
          
          {/* Filtro de fecha hasta */}
          <div className="md:col-span-2">
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                Hasta
              </span>
              <input
                type="date"
                className="rounded-none rounded-r-lg bg-white border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </div>
          </div>
          
          {/* Botón para limpiar filtros */}
          <div className="md:col-span-2">
            <button
              onClick={clearFilters}
              className="w-full flex justify-center items-center px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
            >
              <i className="fas fa-times-circle mr-2"></i>
              Limpiar Filtros
            </button>
          </div>
        </div>
      </div>

      {/* Contenido de Simuladores */}
      {activeTab === 'simulators' && (
        <div className="animate-fadeIn">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Simuladores y Videos Instructivos</h3>
          
          {filteredSimulators.length === 0 ? (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <i className="fas fa-search text-gray-400 text-4xl mb-3"></i>
              <p className="text-gray-500">No se encontraron simuladores que coincidan con los criterios de búsqueda.</p>
              <button 
                onClick={clearFilters}
                className="mt-4 text-blue-500 hover:text-blue-700 font-medium"
              >
                Borrar filtros y mostrar todos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredSimulators.map(video => (
                <div key={video.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {video.type === 'onedrive' ? (
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                      <div className="text-center p-4">
                        <i className="fas fa-file-video text-blue-500 text-5xl mb-4"></i>
                        <p className="text-gray-600 mb-4">Simulador disponible en OneDrive</p>
                        <a 
                          href={video.oneDriveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors inline-flex items-center text-sm"
                        >
                          <i className="fab fa-microsoft mr-2"></i>
                          Ver en OneDrive
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.youtubeId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {video.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(video.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-4">{video.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {video.type === 'onedrive' ? (
                        <a 
                          href={video.oneDriveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center text-sm"
                        >
                          <i className="fab fa-microsoft mr-2"></i>
                          Abrir Simulador
                        </a>
                      ) : (
                        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center text-sm">
                          <i className="fas fa-play-circle mr-2"></i>
                          Ver Completo
                        </button>
                      )}
                      <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center text-sm">
                        <i className="fas fa-download mr-2"></i>
                        Descargar Material
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Contenido de Campañas */}
      {activeTab === 'campaigns' && (
        <div className="animate-fadeIn">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Campañas de Seguridad</h3>
          
          {filteredCampaigns.length === 0 ? (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <i className="fas fa-search text-gray-400 text-4xl mb-3"></i>
              <p className="text-gray-500">No se encontraron campañas que coincidan con los criterios de búsqueda.</p>
              <button 
                onClick={clearFilters}
                className="mt-4 text-blue-500 hover:text-blue-700 font-medium"
              >
                Borrar filtros y mostrar todos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {filteredCampaigns.map(campaign => (
                <div key={campaign.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={`https://www.youtube.com/embed/${campaign.youtubeId}`}
                        title={campaign.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                            {campaign.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(campaign.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                        <p className="text-gray-600 mb-4">{campaign.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <a 
                          href={campaign.externalLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors flex items-center text-sm"
                        >
                          <i className="fas fa-external-link-alt mr-2"></i>
                          Visitar Sitio Oficial
                        </a>
                        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center text-sm">
                          <i className="fas fa-info-circle mr-2"></i>
                          Más Información
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 bg-green-50 rounded-xl p-6">
            <h4 className="font-semibold mb-3">¿Por qué son importantes las campañas de seguridad?</h4>
            <p className="text-gray-700 mb-4">
              Las campañas de seguridad vial son fundamentales para crear conciencia sobre los riesgos en la carretera
              y promover comportamientos responsables que pueden salvar vidas.
            </p>
            <div className="flex items-center text-green-600">
              <i className="fas fa-lightbulb mr-2"></i>
              <span className="text-sm font-medium">¿Tiene sugerencias para nuevas campañas? Contáctenos</span>
            </div>
          </div>
        </div>
      )}

      {/* Contenido de Aprendizajes */}
      {activeTab === 'learning' && (
        <div className="animate-fadeIn">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Recursos de Aprendizaje</h3>
          
          {filteredLearning.length === 0 ? (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <i className="fas fa-search text-gray-400 text-4xl mb-3"></i>
              <p className="text-gray-500">No se encontraron recursos de aprendizaje que coincidan con los criterios de búsqueda.</p>
              <button 
                onClick={clearFilters}
                className="mt-4 text-blue-500 hover:text-blue-700 font-medium"
              >
                Borrar filtros y mostrar todos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredLearning.map(learning => (
                <div key={learning.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={`https://www.youtube.com/embed/${learning.youtubeId}`}
                      title={learning.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                        {learning.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(learning.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{learning.title}</h3>
                    <p className="text-gray-600 mb-4">{learning.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {learning.playlistLink ? (
                        <a 
                          href={learning.playlistLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors flex items-center text-sm"
                        >
                          <i className="fas fa-list mr-2"></i>
                          Ver Lista Completa
                        </a>
                      ) : (
                        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center text-sm">
                          <i className="fas fa-play-circle mr-2"></i>
                          Ver Video
                        </button>
                      )}
                      <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center text-sm">
                        <i className="fas fa-file-alt mr-2"></i>
                        Material Complementario
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mt-12 bg-blue-50 rounded-xl p-8">
        <h3 className="text-xl font-semibold mb-4">Recursos Adicionales</h3>
        <p className="text-gray-600 mb-6">
          Además de los videos de simulación, ofrecemos los siguientes recursos para mejorar su capacitación:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-book text-blue-500 text-xl"></i>
            </div>
            <h4 className="font-medium mb-2">Manuales PDF</h4>
            <p className="text-sm text-gray-500 mb-4">Documentación detallada para consulta</p>
            <button className="mt-auto text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center">
              <span>Acceder</span>
              <i className="fas fa-arrow-right ml-1 text-xs"></i>
            </button>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-laptop text-blue-500 text-xl"></i>
            </div>
            <h4 className="font-medium mb-2">Cursos Online</h4>
            <p className="text-sm text-gray-500 mb-4">Formación interactiva a su ritmo</p>
            <button className="mt-auto text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center">
              <span>Explorar Cursos</span>
              <i className="fas fa-arrow-right ml-1 text-xs"></i>
            </button>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-users text-blue-500 text-xl"></i>
            </div>
            <h4 className="font-medium mb-2">Webinars</h4>
            <p className="text-sm text-gray-500 mb-4">Sesiones en vivo con expertos</p>
            <button className="mt-auto text-blue-500 hover:text-blue-700 text-sm font-medium flex items-center">
              <span>Ver Calendario</span>
              <i className="fas fa-arrow-right ml-1 text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulatorsPanel; 