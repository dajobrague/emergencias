import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement } from 'chart.js';

// Importar componentes modulares
import TruckChart from '../../components/Dashboard/Charts/TruckChart';
import IncidentChart from '../../components/Dashboard/Charts/IncidentChart';
// Eliminar importaciones de gráficos que ya no se necesitan
// import AlertsChart from '../../components/Dashboard/Charts/AlertsChart';
// import IncidentsVehicleChart from '../../components/Dashboard/Charts/IncidentsVehicleChart';
// import PersonnelStatusChart from '../../components/Dashboard/Charts/PersonnelStatusChart';
// import IncidentsRouteChart from '../../components/Dashboard/Charts/IncidentsRouteChart';
import LatestAlerts from '../../components/Dashboard/LatestAlerts';
import LatestIncidents from '../../components/Dashboard/LatestIncidents';
import LatestTruckRecords from '../../components/Dashboard/LatestTruckRecords';
import MainStats from '../../components/Dashboard/MainStats';
import FilterPanel from '../../components/Dashboard/FilterPanel';
// Importar los componentes de gráficos de barras
import AlertsQuantityChart from '../../components/Dashboard/Charts/AlertsQuantityChart';
import EmergenciesQuantityChart from '../../components/Dashboard/Charts/EmergenciesQuantityChart';
// Importar los nuevos componentes de gráficos de torta
import TopIncidentsByTypeChart from '../../components/Dashboard/Charts/TopIncidentsByTypeChart';
import TopIncidentsByVehicleChart from '../../components/Dashboard/Charts/TopIncidentsByVehicleChart';
import TopIncidentsByInvolvedChart from '../../components/Dashboard/Charts/TopIncidentsByInvolvedChart';
import TopIncidentsByCompanyChart from '../../components/Dashboard/Charts/TopIncidentsByCompanyChart';
import AlertsByTypeChart from '../../components/Dashboard/Charts/AlertsByTypeChart';
// Importar el botón de generación de informes
import ReportButton from '../../components/Dashboard/ReportButton';
// Importar los nuevos gráficos
import DangerousSubstancesChart from '../../components/Dashboard/Charts/DangerousSubstancesChart';
import IncidentsActivityChart from '../../components/Dashboard/Charts/IncidentsActivityChart';

// Importar el hook para el tutorial
import { useTutorial } from '../../context/TutorialContext';
import { dashboardPanelSteps } from '../../components/Tutorial/tutorialSteps';

// Registrar los componentes de Chart.js
ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  PointElement, 
  LineElement
);

const DashboardPanel = () => {
  // Estado para los filtros globales
  const [timeFilter, setTimeFilter] = useState('day'); // Cambiado a 'day' para mostrar grupos horarios por defecto
  const [vehicleFilter, setVehicleFilter] = useState('all');
  const [incidentFilter, setIncidentFilter] = useState('all');

  // Acceder al contexto del tutorial
  const { startTutorial } = useTutorial();
  
  // Función para iniciar el tutorial
  const handleStartTutorial = () => {
    startTutorial('dashboard', dashboardPanelSteps);
  };

  // Función para manejar el cambio de filtro de tiempo
  const handleTimeFilterChange = (e) => {
    setTimeFilter(e.target.value);
    // Aquí podrías agregar lógica adicional si es necesario
  };

  return (
    <div className="p-6" id="dashboard-panel">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <select
            value={timeFilter}
            onChange={handleTimeFilterChange}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 time-filter"
          >
            <option value="day">Hoy</option>
            <option value="week">Esta Semana</option>
            <option value="month">Este Mes</option>
            <option value="year">Este Año</option>
          </select>
          
          {/* Botón de ayuda para iniciar el tutorial */}
          <button 
            onClick={handleStartTutorial}
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all text-blue-700 bg-blue-100 hover:bg-blue-200"
            aria-label="Iniciar tutorial"
          >
            <i className="fas fa-question-circle mr-2"></i>
            <span>Ayuda</span>
          </button>
          
          {/* Botón de generación de informes */}
          <ReportButton 
            timeFilter={timeFilter} 
            vehicleFilter={vehicleFilter} 
            incidentFilter={incidentFilter}
            className="report-button"
          />
        </div>
      </div>
      
      {/* Filtros */}
      <FilterPanel 
        vehicleFilter={vehicleFilter} 
        setVehicleFilter={setVehicleFilter} 
        incidentFilter={incidentFilter} 
        setIncidentFilter={setIncidentFilter} 
      />
      
      {/* Estadísticas Principales */}
      <MainStats />
      
      {/* Gráficos Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Gráfico de Camiones */}
        <div className="truck-chart">
          <TruckChart 
            timeFilter={timeFilter} 
            onTruckTypeChange={(type) => setVehicleFilter(type)} 
          />
          
          {/* Gráfico de Sustancias Peligrosas asociado a Cantidad de Camiones */}
          <div className="mt-6 dangerous-substances-chart">
            <DangerousSubstancesChart 
              timeFilter={timeFilter} 
              truckType={vehicleFilter} 
            />
          </div>
        </div>
        
        {/* Gráfico de Incidentes con gráfico de actividad por período asociado */}
        <div className="incident-chart">
          <IncidentChart timeFilter={timeFilter} />
          
          {/* Cantidad de Incidentes (Actividad por Período) */}
          <div className="mt-6 incidents-activity-chart">
            <IncidentsActivityChart timeFilter={timeFilter} />
          </div>
        </div>
      </div>
      
      {/* Gráficos de Alertas y Emergencias */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Gráfico de Cantidad de Alertas */}
        <div className="alerts-quantity-chart">
          <AlertsQuantityChart timeFilter={timeFilter} />
        </div>
        
        {/* Gráfico de Cantidad de Emergencias */}
        <div className="emergencies-quantity-chart">
          <EmergenciesQuantityChart timeFilter={timeFilter} />
        </div>
      </div>
      
      {/* Gráficos de Torta - Primera Fila */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Top 5 de Incidentes por Tipo */}
        <div className="top-incidents-by-type-chart">
          <TopIncidentsByTypeChart timeFilter={timeFilter} />
        </div>
        
        {/* Top 5 de Incidentes por Tipo de Vehículo */}
        <div className="top-incidents-by-vehicle-chart">
          <TopIncidentsByVehicleChart timeFilter={timeFilter} />
        </div>
        
        {/* Top 5 de Incidentes por Tipo de Involucrado */}
        <div className="top-incidents-by-involved-chart">
          <TopIncidentsByInvolvedChart timeFilter={timeFilter} />
        </div>
      </div>
      
      {/* Gráficos de Torta - Segunda Fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Top 5 de Incidentes por Empresa */}
        <div className="top-incidents-by-company-chart">
          <TopIncidentsByCompanyChart timeFilter={timeFilter} />
        </div>
        
        {/* Alertas por Tipo de Alertas */}
        <div className="alerts-by-type-chart">
          <AlertsByTypeChart timeFilter={timeFilter} />
        </div>
      </div>
      
      {/* Se elimina el gráfico de Incidentes por Ruta */}
      {/* <IncidentsRouteChart /> */}
      
      {/* Últimas Alertas, Incidentes y Registros de Camiones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 latest-panels">
        {/* Últimas Alertas */}
        <LatestAlerts />
        
        {/* Últimos Incidentes */}
        <LatestIncidents />
        
        {/* Últimos Registro de Camiones */}
        <LatestTruckRecords />
      </div>
      
      {/* Información de pie de página para el informe (solo visible al imprimir) */}
      <div className="hidden print:block mt-8 text-sm text-gray-500">
        <p>Este informe contiene información basada en los siguientes filtros:</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Período: {timeFilter === 'day' ? 'Hoy' : timeFilter === 'week' ? 'Esta Semana' : timeFilter === 'month' ? 'Este Mes' : 'Este Año'}</li>
          <li>Vehículo: {vehicleFilter === 'all' ? 'Todos' : vehicleFilter}</li>
          <li>Incidente: {incidentFilter === 'all' ? 'Todos' : incidentFilter}</li>
        </ul>
        <p className="mt-4">La información presentada en este informe es confidencial y de uso exclusivo para el personal autorizado.</p>
      </div>
    </div>
  );
};

export default DashboardPanel; 