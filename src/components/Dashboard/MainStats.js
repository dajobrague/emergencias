import React from 'react';

const MainStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
          <i className="fas fa-truck text-blue-500 text-xl"></i>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">24</h3>
          <p className="text-sm text-gray-600">Vehículos Activos</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
          <i className="fas fa-exclamation-triangle text-red-500 text-xl"></i>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">12</h3>
          <p className="text-sm text-gray-600">Incidentes Hoy</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
        <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
          <i className="fas fa-bell text-yellow-500 text-xl"></i>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">8</h3>
          <p className="text-sm text-gray-600">Alertas Activas</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
          <i className="fas fa-user-check text-green-500 text-xl"></i>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">42</h3>
          <p className="text-sm text-gray-600">Personal Activo</p>
        </div>
      </div>
    </div>
  );
};

export default MainStats; 