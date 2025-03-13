import React, { useState, useRef, useEffect } from 'react';
import { useTour } from '../../context/TourContext';

const HelpButton = () => {
  const { startTour, resetTourHistory } = useTour();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  
  // Cerrar el menú cuando se hace clic fuera de él
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-50">
      {showMenu && (
        <div ref={menuRef} className="bg-white rounded-lg shadow-lg p-3 mb-2 border border-gray-200 w-64">
          <h3 className="text-md font-bold mb-2 text-gray-800">Tours de ayuda</h3>
          <div className="space-y-2">
            <button 
              onClick={() => {
                startTour('main');
                setShowMenu(false);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm transition-colors"
            >
              Tour Completo
            </button>
            <button 
              onClick={() => {
                startTour('road-safety');
                setShowMenu(false);
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded text-sm transition-colors"
            >
              Tour Seguridad Vial
            </button>
            <button 
              onClick={() => {
                startTour('emergency');
                setShowMenu(false);
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-sm transition-colors"
            >
              Tour Emergencias
            </button>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setShowMenu(!showMenu)}
        className="help-button bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all"
        aria-label="Mostrar guía de ayuda"
        title="Mostrar guía de ayuda"
      >
        <i className="fas fa-question"></i>
      </button>
      
      <button 
        onClick={resetTourHistory}
        className="bg-gray-600 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all"
        aria-label="Reiniciar tour"
        title="Reiniciar tour"
      >
        <i className="fas fa-redo-alt"></i>
      </button>
    </div>
  );
};

export default HelpButton; 