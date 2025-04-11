import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const ReportButton = ({ timeFilter, vehicleFilter, incidentFilter }) => {
  // Función para imprimir la página actual
  const handlePrint = () => {
    window.print();
  };

  // Función para generar un informe basado en los filtros actuales
  const generateReport = () => {
    // En una implementación real, aquí se generaría un informe personalizado
    // basado en los filtros seleccionados
    console.log('Generando informe con filtros:', { timeFilter, vehicleFilter, incidentFilter });
    
    // Por ahora, simplemente imprimimos la página
    handlePrint();
  };

  return (
    <div className="print:hidden">
      <button
        onClick={generateReport}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
      >
        <FaFilePdf className="text-lg" />
        <span>Generar Informe</span>
      </button>
      
      {/* Menú desplegable (se podría implementar en el futuro) */}
      {/* 
      <div className="relative group">
        <button
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
        >
          <FaFilePdf className="text-lg" />
          <span>Generar Informe</span>
        </button>
        
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-10">
          <div className="py-1">
            <button
              onClick={generateReport}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <FaFilePdf className="text-gray-500" />
              <span>Informe con filtros actuales</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <FaPrint className="text-gray-500" />
              <span>Imprimir dashboard</span>
            </button>
          </div>
        </div>
      </div>
      */}
    </div>
  );
};

export default ReportButton; 