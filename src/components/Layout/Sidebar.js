import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isCollapsed, toggleSidebar, activePanel, setActivePanel }) => {
  // Estado para controlar qué secciones están expandidas
  const [expandedSections, setExpandedSections] = useState({
    'fleet-panel': true,
    'emergency-panel': true
  });

  // Referencias para los contenedores de subelementos
  const subItemsRefs = useRef({});

  // Función para alternar la expansión de una sección
  const toggleSection = (sectionId, e) => {
    e.stopPropagation(); // Evitar que el clic se propague al elemento padre
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Función para determinar si un elemento está activo
  const isActive = (panelId) => activePanel === panelId;

  // Función para determinar si un elemento principal está activo (él o alguno de sus hijos)
  const isMainActive = (mainId, subItems) => {
    if (isActive(mainId)) return true;
    return subItems.some(item => isActive(item));
  };

  // Estructura del menú
  const menuStructure = [
    {
      id: 'fleet-panel',
      title: 'Seguridad Vial',
      icon: 'fa-traffic-light',
      subItems: [
        { id: 'wisetrack-panel', title: 'Wisetrack', icon: 'fa-satellite' },
        { id: 'teletrac-panel', title: 'GPSChile', icon: 'fa-location-arrow' },
        { id: 'gauss-panel', title: 'Gauss', icon: 'fa-compass' },
        { id: 'explork-panel', title: 'Explor-K', icon: 'fa-map-marked-alt' },
        { id: 'document-panel', title: 'Repositorio', icon: 'fa-file-alt' },
        { id: 'records-panel', title: 'Registros', icon: 'fa-clipboard-list' },
        { id: 'simulators-panel', title: 'Simuladores', icon: 'fa-video' }
      ]
    },
    {
      id: 'emergency-panel',
      title: 'Emergencias',
      icon: 'fa-ambulance',
      subItems: [
        { id: 'emergency-units-panel', title: 'Unidades', icon: 'fa-car-side' },
        { id: 'personnel-panel', title: 'Personal', icon: 'fa-users' },
        { id: 'dashboard-graphics-panel', title: 'Dashboard', icon: 'fa-chart-line' }
      ]
    }
  ];

  return (
    <div 
      className={`bg-white h-screen shadow-sm flex flex-col transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Header con logo y botón de colapso */}
      <div className="flex items-center justify-between p-4 border-b relative">
        {/* Logo */}
        <div className={`flex items-center ${isCollapsed ? 'justify-center w-full' : ''}`}>
          <img 
            src="/images/logo-flota.png" 
            alt="Logo Seguridad Vial" 
            className={`${isCollapsed ? 'w-14 h-14' : 'w-40 h-16'}`}
            style={{ 
              objectFit: 'contain',
              transition: 'all 0.2s ease'
            }}
          />
        </div>
        
        {/* Botón de colapso (visible cuando está expandido) */}
        {!isCollapsed && (
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
        )}
        
        {/* Botón de expansión (visible cuando está colapsado) */}
        {isCollapsed && (
          <button 
            onClick={toggleSidebar}
            className="absolute -right-4 top-6 bg-white p-2 rounded-full shadow-md text-gray-500 hover:bg-gray-100 hover:text-blue-600 z-10"
            style={{ boxShadow: '0 0 5px rgba(0,0,0,0.2)' }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        )}
      </div>
      
      {/* Menú de navegación */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 sidebar">
        <ul className="space-y-2">
          {menuStructure.map(mainItem => (
            <React.Fragment key={mainItem.id}>
              {/* Elemento principal */}
              <li>
                <a
                  href="#"
                  data-panel={mainItem.id}
                  className={`flex items-center py-3 px-4 rounded-lg transition-colors ${
                    isMainActive(mainItem.id, mainItem.subItems.map(sub => sub.id)) 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePanel(mainItem.id);
                    // Si la sección está colapsada, la expandimos automáticamente
                    if (!expandedSections[mainItem.id]) {
                      setExpandedSections(prev => ({
                        ...prev,
                        [mainItem.id]: true
                      }));
                    }
                  }}
                >
                  {/* Icono para todos los items del menú principal */}
                  <i className={`fas ${mainItem.icon} text-xl ${
                    isMainActive(mainItem.id, mainItem.subItems.map(sub => sub.id)) 
                      ? 'text-blue-600' 
                      : 'text-gray-500'
                  }`}></i>
                  
                  {/* Título (visible cuando el menú no está colapsado) */}
                  {!isCollapsed && <span className="ml-3">{mainItem.title}</span>}
                  
                  {/* Botón de colapso/expansión para la sección */}
                  {!isCollapsed && (
                    <button 
                      className="ml-auto text-gray-500 hover:text-gray-700 focus:outline-none transition-all duration-200"
                      onClick={(e) => toggleSection(mainItem.id, e)}
                      aria-label={expandedSections[mainItem.id] ? "Colapsar sección" : "Expandir sección"}
                    >
                      <i className={`fas ${expandedSections[mainItem.id] ? 'fa-chevron-down' : 'fa-chevron-right'} text-sm transition-transform duration-200`}></i>
                    </button>
                  )}
                </a>
              </li>
              
              {/* Subelementos - con animación de expansión/colapso */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isCollapsed ? 'mt-2' : ''}`}
                style={{ 
                  maxHeight: (expandedSections[mainItem.id] || isCollapsed) ? '500px' : '0',
                  opacity: (expandedSections[mainItem.id] || isCollapsed) ? 1 : 0
                }}
                ref={el => subItemsRefs.current[mainItem.id] = el}
              >
                {mainItem.subItems.map(subItem => (
                  <li key={subItem.id} className={isCollapsed ? 'flex justify-center' : ''}>
                    <a
                      href="#"
                      data-panel={subItem.id}
                      className={`flex items-center py-3 px-4 rounded-lg transition-colors ${
                        isActive(subItem.id) ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                      } ${!isCollapsed ? 'pl-10' : 'px-2'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActivePanel(subItem.id);
                      }}
                    >
                      <i className={`fas ${subItem.icon} text-xl ${isActive(subItem.id) ? 'text-blue-600' : 'text-gray-500'}`}></i>
                      {!isCollapsed && <span className="ml-3">{subItem.title}</span>}
                    </a>
                  </li>
                ))}
              </div>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 