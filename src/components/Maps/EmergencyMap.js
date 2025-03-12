import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const EmergencyMap = ({ emergencies = [] }) => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const expandButtonRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [savedZoom, setSavedZoom] = useState(() => {
    const saved = localStorage.getItem('mapZoom');
    return saved ? parseFloat(saved) : 5;
  });
  const [savedCenter, setSavedCenter] = useState(() => {
    const saved = localStorage.getItem('mapCenter');
    return saved ? JSON.parse(saved) : [-33.4489, -70.6693]; // Santiago, Chile
  });
  const [isMapReady, setIsMapReady] = useState(false);

  // Coordenadas centrales de Chile
  const chileCenter = [-33.4489, -70.6693];
  
  // Rutas de ejemplo (coordenadas para simular rutas)
  const routes = [
    {
      name: 'Ruta Norte',
      color: '#FF5733', // Rojo
      path: [
        [-33.4372, -70.6506], // Santiago
        [-32.9503, -71.5231], // Valparaíso
        [-29.9027, -71.2525]  // La Serena
      ]
    },
    {
      name: 'Ruta Sur',
      color: '#3498DB', // Azul
      path: [
        [-33.4372, -70.6506], // Santiago
        [-35.4264, -71.6553], // Talca
        [-36.8201, -73.0440]  // Concepción
      ]
    },
    {
      name: 'Ruta Cordillera',
      color: '#27AE60', // Verde
      path: [
        [-33.4372, -70.6506], // Santiago
        [-34.1708, -70.7444], // Rancagua
        [-35.4264, -71.6553]  // Talca
      ]
    }
  ];

  // Función para guardar el estado actual del mapa
  const saveMapState = () => {
    try {
      if (mapRef.current && isMapReady) {
        const zoom = mapRef.current.getZoom();
        const center = mapRef.current.getCenter();
        
        setSavedZoom(zoom);
        setSavedCenter([center.lat, center.lng]);
        
        localStorage.setItem('mapZoom', zoom);
        localStorage.setItem('mapCenter', JSON.stringify([center.lat, center.lng]));
      }
    } catch (error) {
      console.error('Error al guardar el estado del mapa:', error);
    }
  };

  // Efecto para capturar la posición del botón (ya no necesario)
  useEffect(() => {
    // Ya no es necesario capturar la posición del botón
    // Mantenemos el efecto solo para redimensionar el mapa cuando cambia el tamaño de la ventana
    const handleResize = () => {
      if (mapRef.current && isMapReady) {
        mapRef.current.invalidateSize();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMapReady]);

  // Función para alternar la expansión del mapa
  const toggleMapExpansion = (e) => {
    if (e) e.stopPropagation();
    
    // Ya no necesitamos capturar la posición del botón
    // Simplemente alternamos el estado
    setIsExpanded(prev => !prev);
    
    // Actualizar el tamaño del mapa después de un breve retraso
    setTimeout(() => {
      if (mapRef.current && isMapReady) {
        mapRef.current.invalidateSize();
        
        // Si estamos expandiendo, vamos a centrar el mapa en su posición guardada
        if (!isExpanded) {
          mapRef.current.setView(savedCenter, savedZoom);
        }
      }
    }, 300);
  };

  // Función para alternar el modo de pantalla completa
  const toggleFullScreen = (e) => {
    if (e) e.stopPropagation();
    
    setIsFullScreen(prev => !prev);
    
    // Prevenir scroll del body cuando está en pantalla completa
    if (!isFullScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // Función para cerrar el mapa expandido
  const closeExpandedMap = (e) => {
    if (e) e.stopPropagation();
    setIsExpanded(false);
  };

  // Función para cerrar el modo pantalla completa
  const closeFullScreen = (e) => {
    if (e) e.stopPropagation();
    setIsFullScreen(false);
    document.body.style.overflow = '';
  };

  // Efecto para manejar la tecla Escape para salir del modo pantalla completa
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        if (isFullScreen) {
          closeFullScreen();
        } else if (isExpanded) {
          closeExpandedMap();
        }
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      // Asegurarse de restaurar el scroll del body al desmontar
      document.body.style.overflow = '';
    };
  }, [isFullScreen, isExpanded]);

  // Efecto para inicializar el mapa
  useEffect(() => {
    if (!mapRef.current) {
      try {
        // Inicializar el mapa con opciones
        mapRef.current = L.map(mapContainerRef.current, {
          center: savedCenter,
          zoom: savedZoom,
          zoomControl: true,
          attributionControl: false
        });

        // Añadir capa de mapa base
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(mapRef.current);

        // Marcar el mapa como listo después de un breve retraso
        setTimeout(() => {
          setIsMapReady(true);
        }, 500);

        // Evento para guardar el estado del mapa cuando cambia
        mapRef.current.on('moveend', saveMapState);
        mapRef.current.on('zoomend', saveMapState);
      } catch (error) {
        console.error('Error al inicializar el mapa:', error);
      }
    }

    // Ajustar el tamaño del mapa cuando cambia su contenedor
    if (mapRef.current && isMapReady) {
      setTimeout(() => {
        try {
          mapRef.current.invalidateSize();
        } catch (error) {
          console.error('Error al ajustar el tamaño del mapa:', error);
        }
      }, 300);
    }

    // Limpiar al desmontar
    return () => {
      if (mapRef.current) {
        mapRef.current.off('moveend', saveMapState);
        mapRef.current.off('zoomend', saveMapState);
        mapRef.current.remove();
        mapRef.current = null;
        setIsMapReady(false);
      }
    };
  }, [isExpanded, isFullScreen]); // Dependencias reducidas

  // Efecto para añadir marcadores y rutas cuando el mapa está listo
  useEffect(() => {
    if (mapRef.current && isMapReady) {
      try {
        // Limpiar marcadores y rutas existentes
        mapRef.current.eachLayer((layer) => {
          if (layer instanceof L.Marker || layer instanceof L.Polyline) {
            mapRef.current.removeLayer(layer);
          }
        });

        // Añadir marcador de emergencia
        const emergencyIcon = L.divIcon({
          className: 'emergency-marker',
          html: '<i class="fas fa-exclamation-triangle" style="color: red; font-size: 24px;"></i>',
          iconSize: [30, 30]
        });

        L.marker(chileCenter, { icon: emergencyIcon })
          .bindPopup('<b>Emergencia Activa</b><br>Accidente de tránsito')
          .addTo(mapRef.current);

        // Añadir rutas con colores específicos
        routes.forEach(route => {
          const polyline = L.polyline(route.path, { 
            color: route.color, 
            weight: 5, 
            opacity: 0.7 
          }).addTo(mapRef.current);
          
          // Añadir tooltip al pasar el mouse
          polyline.bindTooltip(route.name, { 
            permanent: false, 
            direction: 'top',
            className: 'route-tooltip'
          });
        });
      } catch (error) {
        console.error('Error al añadir elementos al mapa:', error);
      }
    }
  }, [isMapReady]);

  // Calcular los estilos para la expansión
  const getExpandedMapStyle = () => {
    if (!isExpanded) return {};
    
    const windowWidth = window.innerWidth;
    const isMobile = windowWidth < 768;
    
    if (isMobile) return {}; // En móvil usamos las clases CSS normales
    
    // Mantenemos el mapa en su posición actual, solo aumentando su altura
    return {
      position: 'relative', // Cambiado de 'absolute' a 'relative'
      width: '100%',
      zIndex: 900,
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
    };
  };

  // Calcular los estilos para el modo pantalla completa
  const getFullScreenStyle = () => {
    if (!isFullScreen) return {};
    
    return {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      height: '90vh',
      maxWidth: '1200px',
      zIndex: 1000
    };
  };

  return (
    <>
      {/* Modo pantalla completa */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div 
            className="bg-white rounded-lg w-full h-full max-w-6xl max-h-[90vh] p-4 relative map-fullscreen-container"
            style={getFullScreenStyle()}
          >
            <button 
              className="map-close-button"
              onClick={closeFullScreen}
              title="Cerrar pantalla completa"
            >
              <i className="fas fa-times"></i>
            </button>
            <div 
              ref={mapContainerRef} 
              className="map-fullscreen"
            ></div>
          </div>
        </div>
      )}
      
      {/* Modo normal */}
      {!isFullScreen && (
        <div className="relative w-full">
          <div 
            ref={mapContainerRef} 
            className={`map-container border rounded-lg ${isExpanded ? 'map-expanded' : 'h-[300px]'}`}
            style={isExpanded ? getExpandedMapStyle() : {}}
          ></div>
          
          {/* Botones de control siempre visibles */}
          <div className="map-buttons-container">
            <button 
              ref={expandButtonRef}
              className="map-expand-button"
              onClick={toggleMapExpansion}
              title={isExpanded ? "Contraer mapa" : "Expandir mapa"}
            >
              <i className={`fas ${isExpanded ? 'fa-compress-alt' : 'fa-expand-alt'}`}></i>
            </button>
            
            <button 
              className="map-expand-button"
              onClick={toggleFullScreen}
              title="Ver en pantalla completa"
            >
              <i className="fas fa-expand"></i>
            </button>
          </div>
          
          {/* Botón para cerrar el mapa expandido */}
          {isExpanded && (
            <button 
              className="map-close-button"
              onClick={closeExpandedMap}
              title="Cerrar mapa expandido"
            >
              <i className="fas fa-times"></i>
            </button>
          )}
          
          {/* Leyenda de rutas */}
          {isExpanded && isMapReady && (
            <div className="absolute top-10 right-10 route-legend">
              <div className="font-bold mb-2">Rutas</div>
              {routes.map(route => (
                <div key={route.name} className="route-legend-item">
                  <div 
                    className="route-legend-color" 
                    style={{ backgroundColor: route.color }}
                  ></div>
                  <div>{route.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default EmergencyMap; 