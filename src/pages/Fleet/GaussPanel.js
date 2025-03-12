import React from 'react';

const GaussPanel = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
            <i className="fas fa-compass text-purple-500 text-3xl"></i>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Acceder a Gauss Control</h2>
        
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Solución integral para control de combustible y mantenimiento. Optimiza el consumo y 
          programa mantenimientos preventivos.
        </p>
        
        <p className="text-gray-600 mb-8">
          Haga clic en el botón a continuación para acceder al sistema Gauss Control.
        </p>
        
        <a 
          href="https://gausscontrol.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
        >
          <i className="fas fa-external-link-alt mr-2"></i>
          Iniciar Gauss Control
        </a>
      </div>
    </div>
  );
};

export default GaussPanel; 