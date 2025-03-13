import React from 'react';

const ExplorkPanel = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
            <i className="fas fa-map-marked-alt text-blue-500 text-3xl"></i>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-4">Acceder a Explor-K</h2>
        
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Plataforma de evaluación y certificación para la obtención de licencia interna. 
          Gestiona el proceso de acreditación para conducir en operaciones.
        </p>
        
        <p className="text-gray-600 mb-8">
          Haga clic en el botón a continuación para acceder al sistema Explor-K.
        </p>
        
        <a 
          href="https://explor-k.com/procesoClientes.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          <i className="fas fa-external-link-alt mr-2"></i>
          Iniciar Explor-K
        </a>
      </div>
    </div>
  );
};

export default ExplorkPanel; 