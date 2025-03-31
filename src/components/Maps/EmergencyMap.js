import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Polyline } from '@react-google-maps/api';

// Defino las bibliotecas como una constante fuera del componente
// para evitar recrear el array en cada renderizado
const libraries = ["places"];

const EmergencyMap = ({ emergencies = [] }) => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  // Usamos useJsApiLoader en lugar de useLoadScript y definimos la API key directamente
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCAPP9_yfPANo-5eXwkKm9MDCwjUuwid90",
    libraries,
  });
  
  // Coordenadas especificadas por el cliente
  const mapCenter = { lat: -33.25, lng: -70.55 };
  const defaultZoom = 11;
  
  // Coordenadas de los puntos de interés según la imagen
  const locations = {
    lasTortolas: { lat: -33.45, lng: -70.87, name: "Las Tórtolas" },
    losBronces: { lat: -33.14, lng: -70.27, name: "Los Bronces" }
  };
  
  // Ruta del mineroducto (aproximada según la imagen)
  const mineroductRoute = [
    { lat: -33.45, lng: -70.87 }, // Las Tórtolas
    { lat: -33.35, lng: -70.75 },
    { lat: -33.30, lng: -70.65 },
    { lat: -33.25, lng: -70.55 },
    { lat: -33.20, lng: -70.45 },
    { lat: -33.14, lng: -70.27 }  // Los Bronces
  ];
  
  // Configuración del estilo del mapa
  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeId: 'satellite',
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: 2,
      position: 9 // POSITION_TOP_RIGHT
    },
    // Bloquear los controles para evitar que los usuarios muevan el mapa
    draggable: false,
    scrollwheel: false,
    keyboardShortcuts: false,
    disableDoubleClickZoom: true,
    gestureHandling: 'none'
  };
  
  // Estilos para los contenedores del mapa
  const mapContainerStyle = {
    width: '100%',
    height: isFullScreen ? '100vh' : isExpanded ? '800px' : '700px',
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden'
  };
  
  // Estilo para los botones de ubicación
  const locationButtonStyle = {
    position: 'absolute',
    padding: '8px 12px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
    zIndex: 1000
  };
  
  // Función para manejar clic en los botones de ubicación
  const handleLocationClick = (location) => {
    console.log(`Clic en ${location.name}`);
    // Aquí se implementará la funcionalidad futura para estos botones
    
    // Por ahora, centrar el mapa en la ubicación seleccionada
    if (mapRef.current) {
      mapRef.current.panTo({ lat: location.lat, lng: location.lng });
      mapRef.current.setZoom(13);
    }
  };
  
  // Función para alternar la expansión del mapa
  const toggleMapExpansion = (e) => {
    if (e) e.stopPropagation();
    setIsExpanded(prev => !prev);
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
      document.body.style.overflow = '';
    };
  }, [isFullScreen, isExpanded]);

  // Estilo para el contenedor cuando el mapa está expandido
  const getExpandedMapStyle = () => {
    return {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      height: '80%',
      zIndex: 1000,
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      borderRadius: '8px',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column'
    };
  };

  // Estilo para el mapa en modo pantalla completa
  const getFullScreenStyle = () => {
    return {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1050,
      backgroundColor: 'white'
    };
  };

  // Guardar la referencia al mapa
  const onMapLoad = (map) => {
    mapRef.current = map;
    console.log("Mapa cargado correctamente");
  };

  // Renderizar mensaje de carga o error cuando sea necesario
  if (loadError) {
    console.error("Error al cargar el mapa:", loadError);
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-2">
            <i className="fas fa-exclamation-circle mr-2"></i>
            Error al cargar el mapa
          </div>
          <p className="text-gray-600 text-sm">
            {loadError.message || "Verifique su conexión a Internet o contacte al administrador."}
          </p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <div className="text-center">
          <div className="text-blue-500 text-xl mb-2">
            <i className="fas fa-spinner fa-spin mr-2"></i>
            Cargando mapa...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden h-full w-full">
      {/* Mapa Expandido */}
      {isExpanded && !isFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeExpandedMap}></div>
      )}
      
      {/* Mapa en Pantalla Completa */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black z-50">
          <button
            className="absolute top-4 right-4 z-50 bg-white p-2 rounded-full shadow-lg"
            onClick={closeFullScreen}
          >
            <i className="fas fa-times text-gray-700"></i>
          </button>
        </div>
      )}
      
      <div
        ref={mapContainerRef}
        className={`relative ${!isExpanded && !isFullScreen ? 'rounded-lg shadow-md' : ''}`}
        style={isFullScreen ? getFullScreenStyle() : isExpanded ? getExpandedMapStyle() : {}}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={mapCenter}
          zoom={defaultZoom}
          options={mapOptions}
          onLoad={onMapLoad}
        >
          {/* Ruta del mineroducto */}
          <Polyline
            path={mineroductRoute}
            options={{
              strokeColor: '#FFFF00',
              strokeOpacity: 0.8,
              strokeWeight: 3
            }}
          />
          
          {/* Marcadores para las ubicaciones - usando Marker estándar en lugar de AdvancedMarkerElement */}
          <Marker 
            position={locations.lasTortolas}
            title={locations.lasTortolas.name}
          />
          
          <Marker 
            position={locations.losBronces}
            title={locations.losBronces.name}
          />
          
          {/* Div personalizado para el botón de Las Tórtolas */}
          <div 
            style={{
              ...locationButtonStyle,
              top: '20%',
              left: '25%',
            }}
            onClick={() => handleLocationClick(locations.lasTortolas)}
          >
            Las Tórtolas
          </div>
          
          {/* Div personalizado para el botón de Los Bronces */}
          <div 
            style={{
              ...locationButtonStyle,
              top: '25%',
              right: '25%',
            }}
            onClick={() => handleLocationClick(locations.losBronces)}
          >
            Los Bronces
          </div>
          
          {/* Div personalizado para el botón del mineroducto */}
          <div 
            style={{
              ...locationButtonStyle,
              top: '35%',
              left: '40%',
            }}
          >
            Ruta Mineroducto
          </div>
        </GoogleMap>
        
        {/* Controles del mapa */}
        {!isFullScreen && (
          <div className="absolute top-2 right-2 flex space-x-2">
            <button
              className="bg-white p-1 rounded-full shadow-md text-gray-700 hover:bg-gray-100"
              onClick={toggleMapExpansion}
              title={isExpanded ? 'Reducir mapa' : 'Expandir mapa'}
            >
              <i className={`fas ${isExpanded ? 'fa-compress-alt' : 'fa-expand-alt'} p-1`}></i>
            </button>
            <button
              className="bg-white p-1 rounded-full shadow-md text-gray-700 hover:bg-gray-100"
              onClick={toggleFullScreen}
              title="Pantalla completa"
            >
              <i className="fas fa-expand p-1"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmergencyMap; 