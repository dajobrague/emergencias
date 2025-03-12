import React from 'react';

const TeletracPanel = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <i className="fas fa-location-arrow text-green-500 text-3xl"></i>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Acceder a Teletrac Navman</h2>
        
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Sistema avanzado de gestión de flotas y análisis de conducción. Monitorea el comportamiento 
          de los conductores y optimiza las rutas.
        </p>
        
        <p className="text-gray-600 mb-8">
          Haga clic en el botón a continuación para acceder al sistema Teletrac Navman.
        </p>
        
        <a 
          href="https://teletracnavman.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
        >
          <i className="fas fa-external-link-alt mr-2"></i>
          Iniciar Teletrac Navman
        </a>
      </div>
    </div>
  );
};

export default TeletracPanel; 