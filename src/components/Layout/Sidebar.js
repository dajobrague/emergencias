import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isCollapsed, toggleSidebar, activePanel, setActivePanel }) => {
  // Estado para controlar qué secciones están expandidas
  const [expandedSections, setExpandedSections] = useState({
    'fleet-panel': true,
    'emergency-panel': true,
    'road-safety-panel': true
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
      title: 'Flota',
      useLogoInstead: true,
      icon: 'fa-truck',
      subItems: [
        { id: 'wisetrack-panel', title: 'Wisetrack', icon: 'fa-satellite' },
        { id: 'teletrac-panel', title: 'Teletrac', icon: 'fa-location-arrow' },
        { id: 'gauss-panel', title: 'Gauss', icon: 'fa-compass' },
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
    },
    {
      id: 'road-safety-panel',
      title: 'Seguridad Vial',
      icon: 'fa-road',
      subItems: [
        { id: 'document-panel', title: 'Repositorio', icon: 'fa-file-alt' }
      ]
    }
  ];

  return (
    <div 
      className={`bg-white h-screen shadow-sm flex flex-col transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Botón de colapso */}
      <div className="flex justify-end p-4 border-b">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
        >
          <i className={`fas ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
        </button>
      </div>
      
      {/* Menú de navegación */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-2">
          {menuStructure.map(mainItem => (
            <React.Fragment key={mainItem.id}>
              {/* Elemento principal */}
              <li>
                <a
                  href="#"
                  className={`flex items-center py-3 px-4 rounded-lg transition-colors ${
                    isMainActive(mainItem.id, mainItem.subItems.map(sub => sub.id)) 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    // Si es "Seguridad Vial", solo expandir/colapsar sin cambiar el panel activo
                    if (mainItem.id === 'road-safety-panel') {
                      toggleSection(mainItem.id, e);
                    } else {
                      setActivePanel(mainItem.id);
                      // Si la sección está colapsada, la expandimos automáticamente
                      if (!expandedSections[mainItem.id]) {
                        setExpandedSections(prev => ({
                          ...prev,
                          [mainItem.id]: true
                        }));
                      }
                    }
                  }}
                >
                  {mainItem.useLogoInstead ? (
                    <div className="flex items-center">
                      <img 
                        src="/images/logo-flota.png" 
                        alt="Logo Flota" 
                        className={`${
                          isCollapsed ? 'w-10 h-10' : 'w-12 h-12'
                        } ${isMainActive(mainItem.id, mainItem.subItems.map(sub => sub.id)) ? 'filter-none' : 'opacity-80'}`}
                        style={{ 
                          objectFit: 'contain',
                          transition: 'all 0.2s ease'
                        }}
                      />
                    </div>
                  ) : (
                    <i className={`fas ${mainItem.icon} text-xl ${
                      isMainActive(mainItem.id, mainItem.subItems.map(sub => sub.id)) 
                        ? 'text-blue-600' 
                        : 'text-gray-500'
                    }`}></i>
                  )}
                  {!isCollapsed && !mainItem.useLogoInstead && <span className="ml-3">{mainItem.title}</span>}
                  
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