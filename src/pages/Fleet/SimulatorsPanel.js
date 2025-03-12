import React from 'react';

const SimulatorsPanel = () => {
  // Lista de videos de simulación
  const simulationVideos = [
    {
      id: 1,
      title: 'Simulador de Conducción Segura',
      description: 'Aprenda técnicas de conducción segura para camiones de carga pesada en diferentes condiciones climáticas.',
      youtubeId: 'jB-xDvBQuL0', // Video de seguridad vial
      category: 'Conducción'
    },
    {
      id: 2,
      title: 'Simulador de Respuesta a Emergencias',
      description: 'Procedimientos de respuesta ante situaciones de emergencia durante el transporte de carga.',
      youtubeId: 'jB-xDvBQuL0', // Video de seguridad vial
      category: 'Emergencias'
    },
    {
      id: 3,
      title: 'Simulador de Carga y Descarga',
      description: 'Técnicas adecuadas para la carga y descarga segura de mercancías en diferentes tipos de vehículos.',
      youtubeId: 'jB-xDvBQuL0', // Video de seguridad vial
      category: 'Operaciones'
    },
    {
      id: 4,
      title: 'Simulador de Mantenimiento Preventivo',
      description: 'Aprenda a realizar verificaciones de mantenimiento preventivo para garantizar la seguridad y eficiencia de los vehículos.',
      youtubeId: 'jB-xDvBQuL0', // Video de seguridad vial
      category: 'Mantenimiento'
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-dark mb-6">Simuladores y Videos Instructivos</h2>
      <p className="text-gray-600 mb-8">
        Explore nuestra colección de videos instructivos y simuladores para mejorar sus habilidades y conocimientos en la operación de vehículos de flota.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {simulationVideos.map(video => (
          <div key={video.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {video.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <p className="text-gray-600 mb-4">{video.description}</p>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center">
                  <i className="fas fa-play-circle mr-2"></i>
                  Ver Completo
                </button>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center">
                  <i className="fas fa-download mr-2"></i>
                  Descargar Material
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 rounded-xl p-8">
        <h3 className="text-xl font-semibold mb-4">Recursos Adicionales</h3>
        <p className="text-gray-600 mb-6">
          Además de los videos de simulación, ofrecemos los siguientes recursos para mejorar su capacitación:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <i className="fas fa-book text-blue-500"></i>
            </div>
            <h4 className="font-medium mb-2">Manuales PDF</h4>
            <p className="text-sm text-gray-500">Documentación detallada para consulta</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <i className="fas fa-laptop text-blue-500"></i>
            </div>
            <h4 className="font-medium mb-2">Cursos Online</h4>
            <p className="text-sm text-gray-500">Formación interactiva a su ritmo</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <i className="fas fa-users text-blue-500"></i>
            </div>
            <h4 className="font-medium mb-2">Webinars</h4>
            <p className="text-sm text-gray-500">Sesiones en vivo con expertos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulatorsPanel; 