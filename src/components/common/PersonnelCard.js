import React from 'react';

const PersonnelCard = ({ person, viewMode }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:-translate-y-1 transition-transform">
        <div className="flex items-center p-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1">
            <h3 className="font-medium text-gray-800">{person.name}</h3>
            <p className="text-sm text-primary">{person.position}</p>
          </div>
          
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center hover:bg-blue-100">
              <i className="fas fa-envelope text-sm"></i>
            </button>
            <button className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-100">
              <i className="fas fa-phone text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:-translate-y-1 transition-transform">
      <div className="flex">
        <div className="w-24 overflow-hidden">
          <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
        </div>
        
        <div className="p-4 flex-1">
          <h3 className="font-medium text-gray-800 mb-1">{person.name}</h3>
          <p className="text-sm text-primary mb-3">{person.position}</p>
          
          <div className="text-sm text-gray-600 mb-1 flex items-center">
            <i className="fas fa-building w-4 text-gray-400 mr-2"></i>
            {person.department}
          </div>
          
          <div className="text-sm text-gray-600 mb-1 flex items-center">
            <i className="fas fa-envelope w-4 text-gray-400 mr-2"></i>
            {person.email}
          </div>
          
          <div className="text-sm text-gray-600 mb-1 flex items-center">
            <i className="fas fa-phone w-4 text-gray-400 mr-2"></i>
            {person.phone}
          </div>
          
          <div className="text-sm text-gray-600 flex items-center">
            <i className="fas fa-map-marker-alt w-4 text-gray-400 mr-2"></i>
            {person.location}
          </div>
          
          <div className="flex gap-2 mt-4">
            <button className="flex-1 py-2 text-xs bg-blue-50 text-primary rounded hover:bg-blue-100">
              <i className="fas fa-envelope mr-1"></i> Email
            </button>
            <button className="flex-1 py-2 text-xs bg-green-50 text-green-600 rounded hover:bg-green-100">
              <i className="fas fa-phone mr-1"></i> Llamar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonnelCard; 