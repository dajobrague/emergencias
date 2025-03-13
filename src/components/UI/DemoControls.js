import React from 'react';
import { useTour } from '../../context/TourContext';

const DemoControls = () => {
  const { demoMode, startTour } = useTour();
  
  if (!demoMode) return null;
  
  // Estructura de tours organizados por secciones
  const tourGroups = [
    {
      title: "Tour General",
      tours: [
        { id: 'main', name: 'Tour Completo', color: 'blue' }
      ]
    },
    {
      title: "Seguridad Vial",
      tours: [
        { id: 'fleet', name: 'Visión General', color: 'green' },
        { id: 'road-safety', name: 'Detalle Seguridad Vial', color: 'emerald' },
        { id: 'wisetrack', name: 'Wisetrack', color: 'indigo' },
        { id: 'gpschile', name: 'GPSChile', color: 'teal' },
        { id: 'gauss', name: 'Gauss Control', color: 'orange' },
        { id: 'explork', name: 'Explor-K', color: 'pink' }
      ]
    },
    {
      title: "Gestión",
      tours: [
        { id: 'records', name: 'Registros', color: 'gray' },
        { id: 'simulators', name: 'Simuladores', color: 'cyan' }
      ]
    },
    {
      title: "Emergencias",
      tours: [
        { id: 'emergency', name: 'Emergencias', color: 'red' },
        { id: 'emergency-units', name: 'Unidades', color: 'amber' },
        { id: 'personnel', name: 'Personal', color: 'yellow' },
        { id: 'dashboard', name: 'Dashboard', color: 'lime' }
      ]
    }
  ];
  
  // Función para obtener la clase de color según el color especificado
  const getColorClass = (color) => {
    const colorMap = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      green: 'bg-green-600 hover:bg-green-700',
      emerald: 'bg-emerald-600 hover:bg-emerald-700',
      red: 'bg-red-600 hover:bg-red-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      orange: 'bg-orange-600 hover:bg-orange-700',
      yellow: 'bg-yellow-600 hover:bg-yellow-700',
      indigo: 'bg-indigo-600 hover:bg-indigo-700',
      teal: 'bg-teal-600 hover:bg-teal-700',
      pink: 'bg-pink-600 hover:bg-pink-700',
      gray: 'bg-gray-600 hover:bg-gray-700',
      cyan: 'bg-cyan-600 hover:bg-cyan-700',
      amber: 'bg-amber-600 hover:bg-amber-700',
      lime: 'bg-lime-600 hover:bg-lime-700'
    };
    
    return colorMap[color] || 'bg-blue-600 hover:bg-blue-700';
  };
  
  return (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50 border border-gray-200 max-h-[90vh] overflow-y-auto">
      <h3 className="text-lg font-bold mb-3">Modo Demo</h3>
      <p className="text-sm text-gray-600 mb-3">Selecciona un tour para comenzar:</p>
      
      {tourGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-4">
          <h4 className="text-md font-semibold text-gray-700 mb-2 border-b pb-1">{group.title}</h4>
          <div className="flex flex-col space-y-2">
            {group.tours.map((tour, tourIndex) => (
              <button 
                key={tourIndex}
                onClick={() => startTour(tour.id)}
                className={`px-4 py-2 ${getColorClass(tour.color)} text-white rounded-lg text-sm transition-colors`}
              >
                {tour.name}
              </button>
            ))}
          </div>
        </div>
      ))}
      
      <p className="text-xs text-gray-500 mt-4 border-t pt-2">
        Nota: El "Tour Completo" te guiará a través de todas las secciones del sistema en orden.
      </p>
    </div>
  );
};

export default DemoControls; 