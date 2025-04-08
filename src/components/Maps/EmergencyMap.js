import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// Defino las bibliotecas como una constante fuera del componente
// para evitar recrear el array en cada renderizado
const libraries = ["places"];

const EmergencyMap = ({ emergencies = [] }) => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [activeLocation, setActiveLocation] = useState(null); // Estado para controlar la ubicación activa
  
  // Usamos useJsApiLoader en lugar de useLoadScript y definimos la API key directamente
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCAPP9_yfPANo-5eXwkKm9MDCwjUuwid90",
    libraries,
  });
  
  // Coordenadas especificadas por el cliente
  const mapCenter = useMemo(() => ({ lat: -33.25, lng: -70.55 }), []);
  const defaultZoom = 11;
  
  // Coordenadas de los puntos de interés según las URLs proporcionadas
  const locations = useMemo(() => ({
    lasTortolas: { lat: -33.1297282, lng: -70.7073804, name: "Las Tórtolas", zoom: 14 },
    losBronces: { lat: -33.1480029, lng: -70.2863799, name: "Los Bronces", zoom: 13 },
    mineroducto: { lat: -33.145, lng: -70.52, name: "Mineroducto", zoom: 12 }
  }), []);
  
  // Ruta real entre Las Tórtolas y Los Bronces basada en el enlace proporcionado
  // https://maps.app.goo.gl/Z5qm2tA7y1VpWJW96
  const realRoute = useMemo(() => [
    { lat: -33.1297282, lng: -70.7073804 }, // Las Tórtolas
    { lat: -33.1280000, lng: -70.6950000 }, // Punto en ruta G-25
    { lat: -33.1320000, lng: -70.6650000 }, // Punto en ruta G-25
    { lat: -33.1390000, lng: -70.6250000 }, // Punto en intersección con G-21
    { lat: -33.1410000, lng: -70.5850000 }, // Punto en ruta G-21
    { lat: -33.1430000, lng: -70.5450000 }, // Punto en ruta G-21
    { lat: -33.1470000, lng: -70.5050000 }, // Punto en ruta G-21
    { lat: -33.1490000, lng: -70.4650000 }, // Punto en ruta G-21
    { lat: -33.1520000, lng: -70.4250000 }, // Punto en ruta G-21
    { lat: -33.1550000, lng: -70.3850000 }, // Punto en ruta G-21
    { lat: -33.1560000, lng: -70.3450000 }, // Punto en ruta G-21
    { lat: -33.1530000, lng: -70.3050000 }, // Punto de acceso a Los Bronces
    { lat: -33.1480029, lng: -70.2863799 }  // Los Bronces
  ], []);
  
  // Configuración del estilo del mapa
  const mapOptions = useMemo(() => ({
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeId: 'satellite',
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: 2,
      position: 9 // POSITION_TOP_RIGHT
    },
    // Permitir zoom pero mantener bloqueo de movimiento lateral
    draggable: false,
    scrollwheel: true,      // Permitir zoom con rueda del mouse
    keyboardShortcuts: false,
    disableDoubleClickZoom: false, // Permitir doble clic para zoom
    gestureHandling: 'cooperative', // Permitir gestos de zoom en móviles
    minZoom: defaultZoom, // Establecer zoom mínimo global
    zoomControlOptions: {
      position: 3 // POSITION_TOP_RIGHT
    }
  }), [defaultZoom]);
  
  // Función para actualizar las opciones del mapa según el estado actual
  const updateMapOptions = useCallback(() => {
    if (!mapRef.current) return;
    
    // Determinar el zoom mínimo según la ubicación activa
    let minZoomLevel = defaultZoom;
    if (activeLocation) {
      const location = activeLocation === "mineroducto" 
        ? locations.mineroducto 
        : activeLocation === "lasTortolas" 
          ? locations.lasTortolas 
          : locations.losBronces;
      
      minZoomLevel = location.zoom;
    }
    
    // Aplicar opciones según la ubicación actual
    mapRef.current.setOptions({
      ...mapOptions,
      minZoom: minZoomLevel
    });
  }, [activeLocation, locations, defaultZoom, mapOptions]);
  
  // Estilos para los contenedores del mapa
  const mapContainerStyle = {
    width: '100%',
    height: '700px',
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
  
  // Definición de los tipos de POI con sus iconos correspondientes
  const poiTypes = useMemo(() => ({
    MEDICAL: {
      name: "Servicio médico Pérez Caldera",
      description: "Servicio médico Pérez Caldera y sala de primeros auxilios 220.",
      icon: "fas fa-ambulance"
    },
    BRIGADE: {
      name: "Equipo de brigadistas",
      description: "Equipo de brigadistas de emergencia externos.",
      icon: "fas fa-hard-hat"
    },
    GEOLOCATION: {
      name: "Punto de geolocalización",
      description: "Signo de geolocalización.",
      icon: "fas fa-map-marker-alt"
    },
    ROUTE_ACCESS: {
      name: "Acceso a ruta",
      description: "Signo de ingreso y salida hacia la ruta G-21 y G-245.",
      icon: "fas fa-exchange-alt"
    },
    HELIPORT: {
      name: "Helipista",
      description: "Helipistas de aterrizaje Km 42,5 y Perez Caldera.",
      icon: "fas fa-helicopter"
    }
  }), []);

  // Función para renderizar un marcador personalizado con icono
  const renderCustomMarker = (position, poiType, index, customName = null) => {
    if (!mapRef.current) return null;
    
    // Usar el nombre personalizado si está disponible
    const pointName = customName || poiType.name;
    
    // Crear el marcador usando marcadores estándar
    const marker = new window.google.maps.Marker({
      position: position,
      map: mapRef.current,
      title: pointName,
      // Usar un icono SVG personalizado para crear el efecto deseado
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: 'white',
        fillOpacity: 1,
        strokeColor: '#cccccc',
        strokeWeight: 1,
        scale: 12,
      },
      zIndex: 1000
    });
    
    // Crear el contenido de la infoWindow con el icono
    const contentString = `
      <div style="padding: 5px 10px; text-align: center;">
        <div style="margin-bottom: 5px;">
          <i class="${poiType.icon}" style="color: #b91c1c; font-size: 24px;"></i>
        </div>
        <div style="font-weight: bold; font-size: 12px;">${pointName}</div>
        <div style="font-size: 11px; color: #666;">${poiType.description}</div>
      </div>
    `;
    
    // Crear infoWindow con la información del POI
    const infoWindow = new window.google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });
    
    // Variable para controlar si la ventana de información debe permanecer abierta
    let keepInfoWindowOpen = false;
    
    // Función para abrir la ventana de información
    const openInfoWindow = () => {
      infoWindow.open({
        anchor: marker,
        map: mapRef.current
      });
    };
    
    // Función para cerrar la ventana de información
    const closeInfoWindow = () => {
      if (!keepInfoWindowOpen) {
        infoWindow.close();
      }
    };
    
    // Evento para mostrar InfoWindow al pasar el mouse
    marker.addListener('mouseover', openInfoWindow);
    
    // Evento para ocultar InfoWindow al quitar el mouse (si no está fija)
    marker.addListener('mouseout', closeInfoWindow);
    
    // Evento para fijar/desfijar InfoWindow al hacer clic
    marker.addListener('click', () => {
      if (keepInfoWindowOpen) {
        // Si ya está fijada, al hacer clic la desfijamos y cerramos
        keepInfoWindowOpen = false;
        infoWindow.close();
      } else {
        // Si no está fijada, la fijamos y aseguramos que esté abierta
        keepInfoWindowOpen = true;
        openInfoWindow();
      }
    });
    
    // Guardar referencia al marcador e infoWindow para limpieza posterior
    window.currentPOIMarkers = window.currentPOIMarkers || [];
    window.currentPOIMarkers.push({ marker, infoWindow });
    
    // Crear una superposición personalizada para mostrar el icono
    const customOverlay = new window.google.maps.OverlayView();
    
    customOverlay.draw = function() {
      // Crear un div para el icono si aún no existe
      if (!this.iconDiv) {
        this.iconDiv = document.createElement('div');
        this.iconDiv.style.position = 'absolute';
        this.iconDiv.style.cursor = 'pointer';
        
        // Crear el elemento del icono
        const iconElement = document.createElement('i');
        iconElement.className = poiType.icon;
        iconElement.style.color = '#b91c1c'; // Rojo
        iconElement.style.fontSize = '16px';
        iconElement.style.position = 'relative';
        iconElement.style.left = '-8px'; // Alinear al centro
        iconElement.style.top = '-8px'; // Alinear al centro
        
        // Añadir el icono al div
        this.iconDiv.appendChild(iconElement);
        
        // Eventos para el icono personalizado
        this.iconDiv.addEventListener('mouseover', openInfoWindow);
        this.iconDiv.addEventListener('mouseout', closeInfoWindow);
        this.iconDiv.addEventListener('click', () => {
          if (keepInfoWindowOpen) {
            keepInfoWindowOpen = false;
            infoWindow.close();
          } else {
            keepInfoWindowOpen = true;
            openInfoWindow();
          }
        });
        
        // Añadir al mapa
        const panes = this.getPanes();
        panes.overlayMouseTarget.appendChild(this.iconDiv);
      }
      
      // Posicionar el icono
      const point = this.getProjection().fromLatLngToDivPixel(marker.getPosition());
      if (point) {
        this.iconDiv.style.left = point.x + 'px';
        this.iconDiv.style.top = point.y + 'px';
      }
    };
    
    customOverlay.onRemove = function() {
      if (this.iconDiv) {
        this.iconDiv.parentNode.removeChild(this.iconDiv);
        delete this.iconDiv;
      }
    };
    
    customOverlay.setMap(mapRef.current);
    window.currentPOIOverlays = window.currentPOIOverlays || [];
    window.currentPOIOverlays.push(customOverlay);
    
    return marker;
  };
  
  // Función para limpiar los marcadores de POI
  const clearPOIMarkers = useCallback(() => {
    // Limpiar marcadores de POI
    if (window.currentPOIMarkers) {
      window.currentPOIMarkers.forEach(item => {
        if (item.marker) item.marker.setMap(null);
        if (item.infoWindow) item.infoWindow.close();
      });
      window.currentPOIMarkers = [];
    }
    
    // Limpiar superposiciones personalizadas
    if (window.currentPOIOverlays) {
      window.currentPOIOverlays.forEach(overlay => {
        overlay.setMap(null);
      });
      window.currentPOIOverlays = [];
    }
  }, []);
  
  // Actualizar la función clearMarkers para limpiar también los POI
  const clearMarkers = useCallback(() => {
    // Limpiar marcadores regulares
    if (window.currentMarkers) {
      window.currentMarkers.forEach(marker => marker.setMap(null));
      window.currentMarkers = [];
    }
    
    // Limpiar polylines
    if (window.currentPolylines) {
      window.currentPolylines.forEach(polyline => polyline.setMap(null));
      window.currentPolylines = [];
    }
    
    // Limpiar los marcadores de POI
    clearPOIMarkers();
  }, [clearPOIMarkers]);
  
  // Datos de ejemplo para los puntos de interés por ubicación
  // Estos serán reemplazados con las ubicaciones reales cuando se proporcionen
  const poiData = {
    lasTortolas: [
      // Ubicaciones basadas en la imagen del Plano de Emergencia Sitio Las Tórtolas
      { lat: -33.1297282 - 0.005, lng: -70.7073804 - 0.008, type: 'GEOLOCATION', name: 'Tranque' },
      { lat: -33.1297282 + 0.002, lng: -70.7073804 + 0.005, type: 'GEOLOCATION', name: 'Plantas' },
      { lat: -33.1297282 + 0.003, lng: -70.7073804 + 0.009, type: 'GEOLOCATION', name: 'Área administrativa' },
      { lat: -33.1297282 + 0.008, lng: -70.7073804 + 0.015, type: 'GEOLOCATION', name: 'Control carretera' },
      
      // Servicios de emergencia
      { lat: -33.1297282 + 0.003, lng: -70.7073804 + 0.008, type: 'MEDICAL', name: 'Servicio médico Las Tórtolas' },
      { lat: -33.1297282 + 0.003, lng: -70.7073804 + 0.007, type: 'BRIGADE', name: 'Equipo de brigadistas de emergencia externos' },
      { lat: -33.1297282 + 0.004, lng: -70.7073804 + 0.010, type: 'ROUTE_ACCESS', name: 'Ingreso y salida hacia la ruta Del mineroducto (STP)' },
      { lat: -33.1297282 - 0.002, lng: -70.7073804 + 0.012, type: 'HELIPORT', name: 'Helipista de aterrizaje' }
    ],
    losBronces: [
      // Coordenadas aproximadas basadas en la imagen para Los Bronces
      // Puntos de geolocalización
      { lat: -33.1550000, lng: -70.2800000, type: 'GEOLOCATION', name: 'Sector Riecillos' },
      { lat: -33.1470000, lng: -70.2750000, type: 'GEOLOCATION', name: 'Edificio Titán' },
      { lat: -33.1460000, lng: -70.2680000, type: 'GEOLOCATION', name: 'Interior Mina' },
      { lat: -33.1520000, lng: -70.2900000, type: 'GEOLOCATION', name: 'Planta Confluencia' },
      { lat: -33.1580000, lng: -70.2930000, type: 'GEOLOCATION', name: 'Planta Cátodos' },
      { lat: -33.1650000, lng: -70.2930000, type: 'GEOLOCATION', name: 'Campamento Pérez Caldera' },
      
      // Servicios médicos
      { lat: -33.1470000, lng: -70.2720000, type: 'MEDICAL', name: 'Refugio 220' },
      { lat: -33.1650000, lng: -70.2950000, type: 'MEDICAL', name: 'Pérez Caldera' },
      
      // Equipos de brigadistas
      { lat: -33.1460000, lng: -70.2730000, type: 'BRIGADE', name: 'Brigadistas Refugio' },
      { lat: -33.1510000, lng: -70.2920000, type: 'BRIGADE', name: 'Brigadistas Planta' },
      { lat: -33.1640000, lng: -70.2910000, type: 'BRIGADE', name: 'Brigadistas Pérez Caldera' },
      
      // Helipistas
      { lat: -33.1590000, lng: -70.3000000, type: 'HELIPORT', name: 'Helipista Cátodos' },
      { lat: -33.1670000, lng: -70.2950000, type: 'HELIPORT', name: 'Helipista Pérez Caldera' },
      
      // Acceso a ruta
      { lat: -33.1630000, lng: -70.2880000, type: 'ROUTE_ACCESS', name: 'Acceso Pérez Caldera' }
    ]
  };
  
  useEffect(() => {
    // Este efecto se ejecutará cada vez que cambie activeLocation
    if (mapRef.current && activeLocation) {
      const location = activeLocation === "mineroducto" 
        ? locations.mineroducto 
        : activeLocation === "lasTortolas" 
          ? locations.lasTortolas 
          : locations.losBronces;
      
      // Limpiar cualquier elemento previo del mapa
      clearMarkers();
      
      // Transición suave al nuevo centro y zoom
      // Primero centramos el mapa en la ubicación manteniendo el zoom actual
      mapRef.current.panTo({ lat: location.lat, lng: location.lng });
      
      // Luego aplicamos el zoom de forma suave
      setTimeout(() => {
        mapRef.current.setZoom(location.zoom);
      }, 300);
      
      if (activeLocation === "mineroducto") {
        // Dibujar la ruta real
        const polyline = new window.google.maps.Polyline({
          path: realRoute,
          map: mapRef.current,
          strokeColor: '#FFFF00',
          strokeOpacity: 0.8,
          strokeWeight: 3
        });
        
        window.currentPolylines.push(polyline);
        
        // Añadir marcadores para ambos extremos
        const marker1 = new window.google.maps.Marker({
          position: locations.lasTortolas,
          map: mapRef.current,
          title: locations.lasTortolas.name
        });
        
        const marker2 = new window.google.maps.Marker({
          position: locations.losBronces,
          map: mapRef.current,
          title: locations.losBronces.name
        });
        
        window.currentMarkers.push(marker1, marker2);
      } else if (activeLocation) {
        // Añadir un solo marcador para la ubicación seleccionada
        const marker = new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: mapRef.current,
          title: location.name
        });
        
        window.currentMarkers.push(marker);
        
        // Añadir los puntos de interés para esta ubicación
        if (activeLocation === "lasTortolas" && poiData.lasTortolas) {
          poiData.lasTortolas.forEach((poi, index) => {
            renderCustomMarker(
              { lat: poi.lat, lng: poi.lng },
              poiTypes[poi.type],
              index,
              poi.name
            );
          });
        } else if (activeLocation === "losBronces" && poiData.losBronces) {
          poiData.losBronces.forEach((poi, index) => {
            renderCustomMarker(
              { lat: poi.lat, lng: poi.lng },
              poiTypes[poi.type],
              index,
              poi.name
            );
          });
        }
      }
    } else if (mapRef.current && !activeLocation) {
      // Volver a la vista general
      clearMarkers();
      
      // Transición suave a la vista general
      mapRef.current.panTo(mapCenter);
      setTimeout(() => {
        mapRef.current.setZoom(defaultZoom);
      }, 300);
      
      // Mostrar la ruta real
      const polyline = new window.google.maps.Polyline({
        path: realRoute,
        map: mapRef.current,
        strokeColor: '#FFFF00',
        strokeOpacity: 0.8,
        strokeWeight: 3
      });
      
      window.currentPolylines.push(polyline);
      
      // Añadir marcadores para las ubicaciones
      const marker1 = new window.google.maps.Marker({
        position: locations.lasTortolas,
        map: mapRef.current,
        title: locations.lasTortolas.name
      });
      
      const marker2 = new window.google.maps.Marker({
        position: locations.losBronces,
        map: mapRef.current,
        title: locations.losBronces.name
      });
      
      window.currentMarkers.push(marker1, marker2);
    }
  }, [activeLocation, locations, mapCenter, defaultZoom, clearMarkers, poiData.lasTortolas, poiData.losBronces, poiTypes, realRoute]);

  // Función simplificada para manejar clic en los botones de ubicación
  const handleLocationClick = (locationName) => {
    console.log(`Clic en ${locationName}`);
    setActiveLocation(locationName);
  };
  
  // Función simplificada para mostrar la ruta del mineroducto
  const handleShowMineroducto = () => {
    console.log("Mostrando ruta del mineroducto");
    setActiveLocation("mineroducto");
  };
  
  // Función simplificada para volver al mapa principal
  const handleBackToMainMap = (e) => {
    if (e) e.stopPropagation();
    setActiveLocation(null);
  };

  // Efecto para actualizar las opciones del mapa según la ubicación activa
  useEffect(() => {
    updateMapOptions();
  }, [updateMapOptions]);

  /* NOTA: Se eliminó un useEffect que intentaba usar funciones no definidas 
   * (createMarkers, createPolyline, iconMapping) que duplicaba la funcionalidad
   * del efecto existente que ya maneja correctamente los marcadores y polilíneas
   * basándose en el estado activeLocation 
   */

  // Efecto para manejar la tecla Escape para salir del modo pantalla completa
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Guardar la referencia al mapa
  const onMapLoad = (map) => {
    mapRef.current = map;
    console.log("Mapa cargado correctamente");
    
    // Inicializar los arreglos para almacenar referencias
    window.currentMarkers = [];
    window.currentPolylines = [];
    window.currentPOIMarkers = [];
    window.currentPOIOverlays = [];
    
    // Dibujar la ruta real basada en el enlace proporcionado
    const polyline = new window.google.maps.Polyline({
      path: realRoute,
      map: map,
      strokeColor: '#FFFF00',
      strokeOpacity: 0.8,
      strokeWeight: 3
    });
    
    window.currentPolylines.push(polyline);
    window.realRoutePoints = realRoute; // Guardar para uso posterior
    
    // Cargar los marcadores directamente
    const marker1 = new window.google.maps.Marker({
      position: locations.lasTortolas,
      map: map,
      title: locations.lasTortolas.name
    });
    
    const marker2 = new window.google.maps.Marker({
      position: locations.losBronces,
      map: map,
      title: locations.losBronces.name
    });
    
    window.currentMarkers.push(marker1, marker2);
    
    // Aplicar las opciones iniciales según el estado
    updateMapOptions();
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
      <div
        ref={mapContainerRef}
        className="relative rounded-lg shadow-md"
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={mapCenter}
          zoom={defaultZoom}
          options={mapOptions}
          onLoad={onMapLoad}
        >
          {/* Los botones se manejan mediante elementos HTML, no componentes de Google Maps */}
          
          {/* Div personalizado para el botón de Las Tórtolas - visible solo cuando no está expandido */}
          {!activeLocation && (
          <div 
            style={{
              ...locationButtonStyle,
              top: '20%',
              left: '25%',
            }}
              onClick={() => handleLocationClick("lasTortolas")}
          >
            Las Tórtolas
          </div>
          )}
          
          {/* Div personalizado para el botón de Los Bronces - visible solo cuando no está expandido */}
          {!activeLocation && (
          <div 
            style={{
              ...locationButtonStyle,
              top: '25%',
              right: '20%',  // Cambiado de 25% a 20% para moverlo más a la derecha
            }}
              onClick={() => handleLocationClick("losBronces")}
          >
            Los Bronces
          </div>
          )}
          
          {/* Div personalizado para el botón del mineroducto - visible solo cuando no está expandido */}
          {!activeLocation && (
          <div 
            style={{
              ...locationButtonStyle,
              top: '22%',  // Cambiado de 35% a 15% para moverlo mucho más arriba
              left: '42%', 
            }}
              onClick={handleShowMineroducto}
          >
            Ruta Mineroducto
          </div>
          )}
          
          {/* Botón para volver al mapa principal (sólo visible cuando se está viendo una ubicación) */}
          {activeLocation && (
            <div 
              style={{
                ...locationButtonStyle,
                top: '10px',
                left: '10px',
                backgroundColor: '#1e40af', // Azul más oscuro
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                padding: '10px 15px',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                border: 'none'
              }}
              onClick={handleBackToMainMap}
            >
              <i className="fas fa-arrow-left mr-2"></i> Volver al mapa principal
            </div>
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

export default EmergencyMap; 