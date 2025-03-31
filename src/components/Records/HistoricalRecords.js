import React, { useState } from 'react';

const HistoricalRecords = ({ activeTab, onTabChange }) => {
  // Datos para los años de incidentes individuales
  const incidentYears = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  const [selectedIncidentYear, setSelectedIncidentYear] = useState(2020);

  // Datos de ejemplo para el historial de camiones (ahora solo un año seleccionado)
  const vehicleYears = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
  const [selectedVehicleYear, setSelectedVehicleYear] = useState(2024);
  
  // Datos para los archivos mensuales de camiones por año
  const vehicleMonthlyData = {
    2015: [
      { id: 1, label: '01 CONTROL CAMIONES ENERO 2015' },
      { id: 2, label: '02 CONTROL CAMIONES FEBRERO 2015' },
      { id: 3, label: '03 CONTROL CAMIONES MARZO 2015' },
      { id: 4, label: '04 CONTROL CAMIONES ABRIL 2015' },
      { id: 5, label: '05 CONTROLCAMIONES MAYO 2015' },
      { id: 6, label: '06 CONTROL CAMIONES JUNIO 2015' },
      { id: 7, label: '07 CONTROL CAMIONES JULIO 2015' },
      { id: 8, label: '08 CONTROL CAMIONES AGOSTO 2015' },
      { id: 9, label: 'Septiembre 2015 Base de datos Camiones' },
      { id: 10, label: 'Octubre 2015 Base de datos Camiones' },
      { id: 11, label: 'Noviembre 2015 Base de datos Camiones' },
      { id: 12, label: 'Diciembre 2015 Base de datos Camiones' }
    ],
    2016: [
      { id: 1, label: '01 ENERO 2016 BASE DE DATOS CAMIONES' },
      { id: 2, label: '02 FEBRERO 2016 BASE DE DATOS CAMIONES' },
      { id: 3, label: '03 MARZO 2016 BASE DE DATOS CAMIONES' },
      { id: 4, label: '04 ABRIL 2016 BASE DE DATOS CAMIONES' },
      { id: 5, label: '05 MAYO 2016 BASE DE DATOS CAMIONES' },
      { id: 6, label: '06 JUNIO 2016 BASE DE DATOS CAMIONES' },
      { id: 7, label: '07 JULIO 2016 BASE DE DATOS CAMIONES' },
      { id: 8, label: '08 AGOSTO 2016 BASE DE DATOS CAMIONES' },
      { id: 9, label: '09 BBDD SEPTIEMBRE 2016 CAMIONES' },
      { id: 10, label: '10 BBDD OCTUBRE 2016 CAMIONES' },
      { id: 11, label: '11 BBDD NOVIEMBRE 2016 CAMIONES' },
      { id: 12, label: '12 BBDD DICIEMBRE 2016 CAMIONES' },
      { id: 13, label: 'CONSOLIDADO 2016 BBDD CAMIONES' }
    ],
    2017: [
      { id: 1, label: '01 ENERO 2017 BASE DE DATOS CAMIONES' },
      { id: 2, label: '02 FEBRERO 2017 BASE DE DATOS CAMIONES' },
      { id: 3, label: '03 MARZO 2017 BASE DE DATOS CAMIONES' },
      { id: 4, label: '04 ABRIL 2017 BASE DE DATOS CAMIONES' },
      { id: 5, label: '05 MAYO 2017 BASE DE DATOS CAMIONES' },
      { id: 6, label: '06 JUNIO 2017 BASE DE DATOS CAMIONES' },
      { id: 7, label: '07 JULIO 2017 BASE DE DATOS CAMIONES' },
      { id: 8, label: '08 AGOSTO 2017 BASE DE DATOS CAMIONES' },
      { id: 9, label: '09 SEPTIEMBRE 2017 BASE DE DATOS CAMIONES' },
      { id: 10, label: '10 OCTUBRE 2017 BASE DE DATOS CAMIONES' },
      { id: 11, label: '11 NOVIEMBRE 2017 BASE DE DATOS CAMIONES' },
      { id: 12, label: '12 DICIEMBRE 2017 BASE DE DATOS CAMIONES' },
      { id: 13, label: 'CONSOLIDADO 2017 BBDD CAMIONES' }
    ],
    2018: [
      { id: 1, label: '01 ENERO 2018 BASE DE DATOS CAMIONES' },
      { id: 2, label: '02 FEBRERO 2018 BASE DE DATOS CAMIONES' },
      { id: 3, label: '03 MARZO 2018 BASE DE DATOS CAMIONES' },
      { id: 4, label: '04 ABRIL 2018 BASE DE DATOS CAMIONES' },
      { id: 5, label: '05 MAYO 2018 BASE DE DATOS CAMIONES' },
      { id: 6, label: '06 JUNIO 2018 BASE DE DATOS CAMIONES' },
      { id: 7, label: '07 JULIO 2018 BASE DE DATOS CAMIONES' },
      { id: 8, label: '08 AGOSTO 2018 BASE DE DATOS CAMIONES' },
      { id: 9, label: '09 SEPTIEMBRE 2018 BASE DE DATOS CAMIONES' },
      { id: 10, label: '10 OCTUBRE 2018 BASE DE DATOS CAMIONES' },
      { id: 11, label: '11 NOVIEMBRE 2018 BASE DE DATOS CAMIONES' },
      { id: 12, label: '12 DICIEMBRE 2018 BASE DE DATOS CAMIONES' },
      { id: 13, label: 'CONSOLIDADO 2018 BBDD CAMIONES' }
    ],
    2019: [
      { id: 1, label: '01 ENERO 2019 BASE DE DATOS CAMIONES' },
      { id: 2, label: '02 FEBRERO 2019 BASE DE DATOS CAMIONES' },
      { id: 3, label: '03 MARZO 2019 BASE DE DATOS CAMIONES' },
      { id: 4, label: '04 ABRIL 2019 BASE DE DATOS CAMIONES' },
      { id: 5, label: '05 MAYO 2019 BASE DE DATOS CAMIONES' },
      { id: 6, label: '06 JUNIO 2019 BASE DE DATOS CAMIONES' },
      { id: 7, label: '07 JULIO 2019 BASE DE DATOS CAMIONES' },
      { id: 8, label: '08 AGOSTO 2019 BASE DE DATOS CAMIONES' },
      { id: 9, label: '09 SEPTIEMBRE 2019 BASE DE DATOS CAMIONES' },
      { id: 10, label: '10 OCTUBRE 2019 BASE DE DATOS CAMIONES' },
      { id: 11, label: '11 NOVIEMBRE 2019 BASE DE DATOS CAMIONES' },
      { id: 12, label: '12 DICIEMBRE 2019 BASE DE DATOS CAMIONES' }
    ],
    2020: [
      { id: 1, label: '01 ENERO 2020 BASE DE DATOS CAMIONES' },
      { id: 2, label: '02 FEBRERO 2020 BASE DE DATOS CAMIONES' },
      { id: 3, label: '03 MARZO 2020 BASE DE DATOS CAMIONES' },
      { id: 4, label: '04 ABRIL 2020 BASE DE DATOS CAMIONES' },
      { id: 5, label: '05 MAYO 2020 BASE DE DATOS CAMIONES' },
      { id: 6, label: '06 JUNIO 2020 BASE DE DATOS CAMIONES' },
      { id: 7, label: '07 JULIO 2020 BASE DE DATOS CAMIONES' },
      { id: 8, label: '08 AGOSTO 2020 BASE DE DATOS CAMIONES' },
      { id: 9, label: '09 SEPTIEMBRE 2020 BASE DE DATOS CAMIONES' },
      { id: 10, label: '10 OCTUBRE 2020 BASE DE DATOS CAMIONES' },
      { id: 11, label: '11 NOVIEMBRE 2020 BASE DE DATOS CAMIONES' },
      { id: 12, label: '12 DICIEMBRE 2020 BASE DE DATOS CAMIONES' }
    ],
    2021: [
      { id: 1, label: '01 ENERO 2021 BASE DE DATOS CAMIONES' },
      { id: 2, label: '02 FEBRERO 2021 BASE DE DATOS CAMIONES' },
      { id: 3, label: '03 MARZO 2021 BASE DE DATOS CAMIONES' },
      { id: 4, label: '04 ABRIL 2021 BASE DE DATOS CAMIONES' },
      { id: 5, label: '05 MAYO 2021 BASE DE DATOS CAMIONES' },
      { id: 6, label: '06 JUNIO 2021 BASE DE DATOS CAMIONES' },
      { id: 7, label: '07 JULIO 2021 BASE DE DATOS CAMIONES' },
      { id: 8, label: '08 AGOSTO 2021 BASE DE DATOS CAMIONES' },
      { id: 9, label: '09 SEPTIEMBRE 2021 BASE DE DATOS CAMIONES' },
      { id: 10, label: '10 OCTUBRE 2021 BASE DE DATOS CAMIONES' },
      { id: 11, label: '11 NOVIEMBRE 2021 BASE DE DATOS CAMIONES' },
      { id: 12, label: '12 DICIEMBRE 2021 BASE DE DATOS CAMIONES' }
    ],
    2022: [
      { id: 1, label: '01 ENERO 2022 BASE DE DATOS CAMIONES' },
      { id: 2, label: '02 FEBRERO 2022 BASE DE DATOS CAMIONES' },
      { id: 3, label: '03 MARZO 2022 BASE DE DATOS CAMIONES' },
      { id: 4, label: '04 ABRIL 2022 BASE DE DATOS CAMIONES' },
      { id: 5, label: '05 MAYO 2022 BASE DE DATOS CAMIONES' },
      { id: 6, label: '06 JUNIO 2022 BASE DE DATOS CAMIONES' },
      { id: 7, label: '07 JULIO 2022 BASE DE DATOS CAMIONES' },
      { id: 8, label: '08 AGOSTO 2022 BASE DE DATOS CAMIONES' },
      { id: 9, label: '09 SEPTIEMBRE 2022 BASE DE DATOS CAMIONES' },
      { id: 10, label: '10 OCTUBRE 2022 BASE DE DATOS CAMIONES' },
      { id: 11, label: '11 NOVIEMBRE 2022 BASE DE DATOS CAMIONES' },
      { id: 12, label: '12 DICIEMBRE 2022 BASE DE DATOS CAMIONES' }
    ],
    2023: [
      { id: 1, label: '01 ENERO 2023 BASE DE DATOS CAMIONES' },
      { id: 2, label: '02 FEBRERO 2023 BASE DE DATOS CAMIONES' },
      { id: 3, label: '03 MARZO 2023 BASE DE DATOS CAMIONES' },
      { id: 4, label: '04 ABRIL 2023 BASE DE DATOS CAMIONES' },
      { id: 5, label: '05 MAYO 2023 BASE DE DATOS CAMIONES' },
      { id: 6, label: '06 JUNIO 2023 BASE DE DATOS CAMIONES' },
      { id: 7, label: '07 JULIO 2023 BASE DE DATOS CAMIONES' },
      { id: 8, label: '08 AGOSTO 2023 BASE DE DATOS CAMIONES' },
      { id: 9, label: '09 SEPTIEMBRE 2023 BASE DE DATOS CAMIONES' },
      { id: 10, label: '10 OCTUBRE 2023 BASE DE DATOS CAMIONES' },
      { id: 11, label: '11 NOVIEMBRE 2023 BASE DE DATOS CAMIONES' },
      { id: 12, label: '12 DICIEMBRE 2023 BASE DE DATOS CAMIONES' }
    ],
    2024: [
      { id: 1, label: '01 ENERO 2024 BASE DE DATOS CAMIONES' },
      { id: 2, label: '02 FEBRERO 2024 BASE DE DATOS CAMIONES' },
      { id: 3, label: '03 MARZO 2024 BASE DE DATOS CAMIONES' },
      { id: 4, label: '04 ABRIL 2024 BASE DE DATOS CAMIONES' },
      { id: 5, label: '05 MAYO 2024 BASE DE DATOS CAMIONES' },
      { id: 6, label: '06 JUNIO 2024 BASE DE DATOS CAMIONES' },
      { id: 7, label: '07 JULIO 2024 BASE DE DATOS CAMIONES' },
      { id: 8, label: '08 AGOSTO 2024 BASE DE DATOS CAMIONES' },
      { id: 9, label: '09 SEPTIEMBRE 2024 BASE DE DATOS CAMIONES' },
      { id: 10, label: '10 OCTUBRE 2024 BASE DE DATOS CAMIONES' },
      { id: 11, label: '11 NOVIEMBRE 2024 BASE DE DATOS CAMIONES' },
      { id: 12, label: '12 DICIEMBRE 2024 BASE DE DATOS CAMIONES' }
    ]
  };

  // Nombre del archivo para cada año (se puede personalizar para cada año)
  const getIncidentFileName = (year) => {
    return `BBDD accidentes e incidentes ${year} (control rutas)`;
  };

  // Maneja la descarga simulada de un archivo
  const handleDownloadIncidentFile = (year) => {
    alert(`Descargando: ${getIncidentFileName(year)}`);
    // Aquí iría la lógica real de descarga del archivo
  };

  // Maneja la descarga simulada de un archivo de camiones
  const handleDownloadVehicleFile = (year, fileLabel) => {
    alert(`Descargando: ${fileLabel} (${year})`);
    // Aquí iría la lógica real de descarga del archivo
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Pestañas */}
      <div className="flex flex-wrap border-b mb-6">
        <button
          onClick={() => onTabChange('incidents')}
          className={`py-3 px-6 text-sm font-medium rounded-t-lg transition-colors ${
            activeTab === 'incidents'
              ? 'text-blue-600 border-b-2 border-blue-500 bg-blue-50'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          Registros Históricos de Incidentes
        </button>
        <button
          onClick={() => onTabChange('vehicles')}
          className={`py-3 px-6 text-sm font-medium rounded-t-lg transition-colors ${
            activeTab === 'vehicles'
              ? 'text-blue-600 border-b-2 border-blue-500 bg-blue-50'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
          }`}
        >
          Registros Históricos de Camiones
        </button>
      </div>

      {/* Contenido de la pestaña de Incidentes */}
      {activeTab === 'incidents' && (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Registros Incidentes</h2>
          
          {/* Selector de años */}
          <div className="flex flex-wrap border rounded-lg overflow-hidden mb-6">
            {incidentYears.map(year => (
              <button
                key={year}
                onClick={() => setSelectedIncidentYear(year)}
                className={`py-2 px-4 text-sm font-medium ${
                  selectedIncidentYear === year
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
          
          {/* Archivo para el año seleccionado */}
          <div className="border rounded-lg overflow-hidden p-6">
            <div className="flex items-center">
              <i className="fas fa-file-excel text-green-500 text-xl mr-3"></i>
              <span className="text-gray-700">{getIncidentFileName(selectedIncidentYear)}</span>
              <button 
                onClick={() => handleDownloadIncidentFile(selectedIncidentYear)}
                className="ml-auto text-blue-600 hover:text-blue-800"
                title="Descargar archivo"
              >
                <i className="fas fa-download"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contenido de la pestaña de Camiones */}
      {activeTab === 'vehicles' && (
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Registros Camiones</h2>
          
          {/* Selector de años */}
          <div className="flex flex-wrap border rounded-lg overflow-hidden mb-6">
            {vehicleYears.map(year => (
              <button
                key={year}
                onClick={() => setSelectedVehicleYear(year)}
                className={`py-2 px-4 text-sm font-medium ${
                  selectedVehicleYear === year
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Tabla de archivos de camiones */}
          <div className="border rounded-lg overflow-hidden">
            {/* Encabezado del año */}
            <div className="bg-green-500 text-white p-4 font-medium text-center">
              {selectedVehicleYear}
            </div>
            
            {/* Archivos mensuales para el año seleccionado */}
            {vehicleMonthlyData[selectedVehicleYear] ? (
              <div>
                {vehicleMonthlyData[selectedVehicleYear].map((file) => (
                  <div 
                    key={file.id}
                    className="border-b last:border-b-0 p-4 hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <i className="fas fa-file-excel text-green-500 mr-3"></i>
                      <span className="text-gray-700">{file.label}</span>
                      <button
                        onClick={() => handleDownloadVehicleFile(selectedVehicleYear, file.label)}
                        className="ml-auto text-blue-600 hover:text-blue-800"
                        title="Descargar archivo"
                      >
                        <i className="fas fa-download"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500">
                No hay datos disponibles para {selectedVehicleYear}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoricalRecords;