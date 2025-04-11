import React, { useState } from 'react';
// Importar el hook para el tutorial
import { useTutorial } from '../../context/TutorialContext';
import { personnelPanelSteps } from '../../components/Tutorial/tutorialSteps';

const PersonnelPanel = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  
  // Acceder al contexto del tutorial
  const { startTutorial } = useTutorial();
  
  // Función para iniciar el tutorial
  const handleStartTutorial = () => {
    startTutorial('personnel', personnelPanelSteps);
  };
  
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    position: '',
    department: '',
    status: 'active',
    email: '',
    phone: '',
    joinDate: '',
    certifications: [],
    rut: '',
    gender: 'male' // 'male' o 'female'
  });

  // Datos de ejemplo para el personal
  const [personnel, setPersonnel] = useState([
    {
      id: "190665",
      name: "Jaime Astroza",
      position: "Jefe de Turno Riesgos Naturales y Red Vial",
      department: "Servicios a la Operación",
      location: "Los Bronces",
      status: "active",
      email: "Por Confirmar",
      phone: "Por Confirmar",
      joinDate: "2020-03-14",
      lastActivity: "2023-11-09",
      rut: "10032774-0",
      gender: "male"
    },
    {
      id: "191508",
      name: "Francisco Cortés",
      position: "Operaciones Mina",
      department: "Mina",
      location: "Los Bronces",
      status: "license",
      email: "Por Confirmar",
      phone: "Por Confirmar",
      joinDate: "2019-06-21",
      lastActivity: "2023-11-11",
      rut: "10357956-0",
      gender: "male"
    },
    {
      id: "1915475",
      name: "José Riquelme",
      position: "Operador Filtros Hipertérmicos Planta 1",
      department: "Plantas",
      location: "Las Tórtolas",
      status: "active",
      email: "Por Confirmar",
      phone: "Por Confirmar",
      joinDate: "2021-01-09",
      lastActivity: "2023-11-07",
      rut: "10365231-0",
      gender: "male"
    },
    {
      id: "191200",
      name: "Paolo Gima",
      position: "Planificación Mantención",
      department: "Mantención",
      location: "Las Tórtolas",
      status: "license",
      email: "Por Confirmar",
      phone: "Por Confirmar",
      joinDate: "2022-02-17",
      lastActivity: "2023-11-10",
      rut: "10419138-1",
      gender: "male"
    },
    {
      id: "190799",
      name: "Luis Cuello",
      position: "Jefe Turno Mina",
      department: "Mina",
      location: "Los Bronces",
      status: "leave",
      email: "Por Confirmar",
      phone: "Por Confirmar",
      joinDate: "2018-09-04",
      lastActivity: "2023-10-24",
      rut: "10771956-3",
      gender: "male"
    },
    {
      id: "600997",
      name: "Luis Carrasco",
      position: "Operaciones Mina",
      department: "Mina",
      location: "Los Bronces",
      status: "inactive",
      email: "Por Confirmar",
      phone: "Por Confirmar",
      joinDate: "2020-11-29",
      lastActivity: "2023-09-14",
      rut: "11224697-5",
      gender: "male"
    }
  ]);

  // Función para abrir el modal de perfil
  const openProfileModal = (person) => {
    setSelectedPerson(person);
    setIsProfileModalOpen(true);
  };

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prev => ({ ...prev, [name]: value }));
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generar ID único
    const newId = `EMP-${String(personnel.length + 1).padStart(3, '0')}`;
    
    // Obtener fecha actual
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Crear nuevo empleado
    const employeeToAdd = {
      id: newId,
      name: newEmployee.name,
      position: newEmployee.position,
      department: newEmployee.department,
      status: newEmployee.status,
      email: newEmployee.email,
      phone: newEmployee.phone,
      joinDate: newEmployee.joinDate || currentDate,
      avatar: '', // Ya no usamos imágenes
      certifications: newEmployee.certifications.length > 0 ? newEmployee.certifications.split(',').map(cert => cert.trim()) : [],
      lastActivity: currentDate,
      address: '',
      emergencyContact: '',
      bio: '',
      skills: [],
      rut: newEmployee.rut,
      gender: newEmployee.gender
    };
    
    // Agregar a la lista de personal
    setPersonnel([...personnel, employeeToAdd]);
    
    // Cerrar modal y resetear formulario
    setIsModalOpen(false);
    setNewEmployee({
      name: '',
      position: '',
      department: '',
      status: 'active',
      email: '',
      phone: '',
      joinDate: '',
      certifications: [],
      rut: '',
      gender: 'male'
    });
  };

  // Filtrar personal según el departamento y término de búsqueda
  const filteredPersonnel = personnel.filter(person => {
    const matchesFilter = filter === 'all' || person.department === filter || person.status === filter;
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          person.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          person.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Función para obtener el color según el estado
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'leave': return 'bg-yellow-100 text-yellow-800';
      case 'license': return 'bg-orange-100 text-orange-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Función para obtener el texto según el estado
  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Activo';
      case 'leave': return 'Permiso';
      case 'license': return 'Con Licencia';
      case 'inactive': return 'Inactivo';
      default: return status;
    }
  };

  // Función para obtener el color según el departamento
  const getDepartmentColor = (department) => {
    switch (department) {
      case 'medical': return 'bg-green-100 text-green-800';
      case 'fire': return 'bg-red-100 text-red-800';
      case 'rescue': return 'bg-blue-100 text-blue-800';
      case 'dispatch': return 'bg-yellow-100 text-yellow-800';
      case 'air': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Función para obtener el texto según el departamento
  const getDepartmentText = (department) => {
    switch (department) {
      case 'medical': return 'Médico';
      case 'fire': return 'Bomberos';
      case 'rescue': return 'Rescate';
      case 'dispatch': return 'Despacho';
      case 'air': return 'Aéreo';
      case 'Servicios a la Operación': return 'Servicios a la Operación';
      case 'Mina': return 'Mina';
      case 'Plantas': return 'Plantas';
      case 'Mantención': return 'Mantención';
      default: return department;
    }
  };

  // Función para formatear fechas al formato español (DD-MM-YYYY)
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
  };

  return (
    <div className="p-6" id="personnel-panel">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Gestión de Personal</h1>
          <p className="text-gray-600">Administración de personal y equipos de emergencia</p>
        </div>
        <div className="flex space-x-3">
          {/* Botón de ayuda para iniciar el tutorial */}
          <button 
            onClick={handleStartTutorial}
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all text-blue-700 bg-blue-100 hover:bg-blue-200"
            aria-label="Iniciar tutorial"
          >
            <i className="fas fa-question-circle mr-2"></i>
            <span>Ayuda</span>
          </button>
          
          <button 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors add-personnel-button"
            onClick={() => setIsModalOpen(true)}
          >
            <i className="fas fa-user-plus mr-2"></i> Agregar Personal
          </button>
        </div>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 search-filters">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Buscar personal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <i className="fas fa-filter text-gray-400"></i>
            <select
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Todos</option>
              <option value="medical">Médico</option>
              <option value="fire">Bomberos</option>
              <option value="dispatch">Despacho</option>
              <option value="air">Aéreo</option>
              <option value="active">Activos</option>
              <option value="leave">En Permiso</option>
              <option value="license">Con Licencia</option>
              <option value="inactive">Inactivos</option>
            </select>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6 stats-panel">
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
            <i className="fas fa-users text-blue-500 text-xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{personnel.length}</h3>
            <p className="text-sm text-gray-600">Total de Personal</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
            <i className="fas fa-user-check text-green-500 text-xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{personnel.filter(p => p.status === 'active').length}</h3>
            <p className="text-sm text-gray-600">Personal Activo</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
          <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
            <i className="fas fa-user-clock text-yellow-500 text-xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{personnel.filter(p => p.status === 'leave').length}</h3>
            <p className="text-sm text-gray-600">En Permiso</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
            <i className="fas fa-file-medical text-orange-500 text-xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{personnel.filter(p => p.status === 'license').length}</h3>
            <p className="text-sm text-gray-600">Con Licencia</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
            <i className="fas fa-user-times text-red-500 text-xl"></i>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">{personnel.filter(p => p.status === 'inactive').length}</h3>
            <p className="text-sm text-gray-600">Inactivos</p>
          </div>
        </div>
      </div>

      {/* Lista de personal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 personnel-grid">
        {filteredPersonnel.map(person => (
          <div key={person.id} className="bg-white rounded-xl shadow-sm overflow-hidden personnel-card">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <i className={`fas ${person.gender === 'male' ? 'fa-male text-blue-500' : 'fa-female text-pink-500'} text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{person.name}</h3>
                    <p className="text-sm text-gray-600 truncate max-w-[180px]">{person.position}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(person.status)} status-badge`}>
                  {getStatusText(person.status)}
                </span>
              </div>
              
              <div className="flex items-center mb-3">
                <i className="fas fa-building text-gray-400 w-5"></i>
                <span className="text-sm text-gray-600">{person.department}</span>
              </div>

              <div className="flex items-center mb-3">
                <i className="fas fa-map-marker-alt text-gray-400 w-5"></i>
                <span className="text-sm text-gray-600">{person.location}</span>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <i className="fas fa-id-card text-gray-400 w-5"></i>
                  <span className="text-gray-600">SAP: {person.id}</span>
                </div>
                
                <div className="flex items-center text-sm">
                  <i className="fas fa-address-card text-gray-400 w-5"></i>
                  <span className="text-gray-600">RUT: {person.rut}</span>
                </div>
                
                <div className="flex items-center text-sm">
                  <i className="fas fa-envelope text-gray-400 w-5"></i>
                  <span className="text-gray-600 mr-2">{person.email}</span>
                  {person.email !== "Por Confirmar" && (
                    <a 
                      href={`mailto:${person.email}`} 
                      className="text-blue-500 hover:text-blue-700"
                      title="Enviar email"
                    >
                      <i className="fas fa-paper-plane"></i>
                    </a>
                  )}
                </div>
                
                <div className="flex items-center text-sm">
                  <i className="fas fa-phone text-gray-400 w-5"></i>
                  <span className="text-gray-600 mr-2">{person.phone}</span>
                  {person.phone !== "Por Confirmar" && (
                    <a 
                      href={`tel:${person.phone.replace(/\D/g, '')}`} 
                      className="text-green-500 hover:text-green-700"
                      title="Llamar"
                    >
                      <i className="fas fa-phone-alt"></i>
                    </a>
                  )}
                </div>
                
                <div className="flex items-center text-sm">
                  <i className="fas fa-calendar-alt text-gray-400 w-5"></i>
                  <span className="text-gray-600">Ingreso: {formatDate(person.joinDate)}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-100 mt-4 pt-4">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <i className="fas fa-history mr-1"></i>
                    Última actividad: {formatDate(person.lastActivity)}
                  </div>
                  <button 
                    className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm transition-colors view-profile-button"
                    onClick={() => openProfileModal(person)}
                  >
                    Ver perfil
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para agregar personal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Agregar Nuevo Personal</h2>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newEmployee.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cargo*
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={newEmployee.position}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Departamento
                  </label>
                  <select
                    name="department"
                    value={newEmployee.department}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Seleccionar departamento</option>
                    <option value="medical">Médico</option>
                    <option value="fire">Bomberos</option>
                    <option value="dispatch">Despacho</option>
                    <option value="air">Aéreo</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Estado
                  </label>
                  <select
                    name="status"
                    value={newEmployee.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="active">Activo</option>
                    <option value="leave">Permiso</option>
                    <option value="license">Con Licencia</option>
                    <option value="inactive">Inactivo</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={newEmployee.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={newEmployee.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha de Ingreso
                  </label>
                  <input
                    type="date"
                    name="joinDate"
                    value={newEmployee.joinDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    RUT*
                  </label>
                  <input
                    type="text"
                    name="rut"
                    value={newEmployee.rut}
                    onChange={handleInputChange}
                    placeholder="Ej: 12.345.678-9"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Género
                  </label>
                  <select
                    name="gender"
                    value={newEmployee.gender}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Certificaciones (separadas por comas)
                </label>
                <input
                  type="text"
                  name="certifications"
                  value={newEmployee.certifications}
                  onChange={handleInputChange}
                  placeholder="Ej: RCP Avanzado, ACLS, PHTLS"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Guardar Personal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de perfil detallado */}
      {isProfileModalOpen && selectedPerson && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Perfil de Personal</h2>
              <div className="flex items-center gap-3">
                <button 
                  className="px-3 py-1.5 border border-yellow-600 text-yellow-600 hover:bg-yellow-50 rounded-lg flex items-center"
                >
                  <i className="fas fa-edit mr-1.5"></i>
                  Editar
                </button>
                <button 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setIsProfileModalOpen(false)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Columna izquierda - Información básica */}
              <div className="md:col-span-1">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <i className={`fas ${selectedPerson.gender === 'male' ? 'fa-male text-blue-500' : 'fa-female text-pink-500'} text-5xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-center">{selectedPerson.name}</h3>
                  <p className="text-gray-600 text-center mb-2">{selectedPerson.position}</p>
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedPerson.status)}`}>
                      {getStatusText(selectedPerson.status)}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDepartmentColor(selectedPerson.department)}`}>
                      {getDepartmentText(selectedPerson.department)}
                    </span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-700 mb-3">Información de Contacto</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <i className="fas fa-envelope text-gray-400 w-6"></i>
                      <span className="text-gray-600 mr-2">{selectedPerson.email}</span>
                      <a 
                        href={`mailto:${selectedPerson.email}`} 
                        className="ml-auto text-blue-500 hover:text-blue-700"
                        title="Enviar email"
                      >
                        <i className="fas fa-paper-plane"></i>
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <i className="fas fa-phone text-gray-400 w-6"></i>
                      <span className="text-gray-600 mr-2">{selectedPerson.phone}</span>
                      <a 
                        href={`tel:${selectedPerson.phone.replace(/\D/g, '')}`} 
                        className="ml-auto text-green-500 hover:text-green-700"
                        title="Llamar"
                      >
                        <i className="fas fa-phone-alt"></i>
                      </a>
                    </div>
                    
                    {selectedPerson.address && (
                      <div className="flex items-start">
                        <i className="fas fa-map-marker-alt text-gray-400 w-6 mt-1"></i>
                        <span className="text-gray-600">{selectedPerson.address}</span>
                      </div>
                    )}
                    
                    {selectedPerson.emergencyContact && (
                      <div className="flex items-start">
                        <i className="fas fa-exclamation-circle text-gray-400 w-6 mt-1"></i>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Contacto de emergencia:</div>
                          <span className="text-gray-600">{selectedPerson.emergencyContact}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-700 mb-3">Información Laboral</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <i className="fas fa-id-card text-gray-400 w-6"></i>
                      <span className="text-gray-600">SAP: {selectedPerson.id}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <i className="fas fa-address-card text-gray-400 w-6"></i>
                      <span className="text-gray-600">RUT: {selectedPerson.rut}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <i className="fas fa-building text-gray-400 w-6"></i>
                      <span className="text-gray-600">{getDepartmentText(selectedPerson.department)}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <i className="fas fa-map-marker-alt text-gray-400 w-6"></i>
                      <span className="text-gray-600">{selectedPerson.location}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <i className="fas fa-calendar-alt text-gray-400 w-6"></i>
                      <span className="text-gray-600">Ingreso: {formatDate(selectedPerson.joinDate)}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <i className="fas fa-history text-gray-400 w-6"></i>
                      <span className="text-gray-600">Última actividad: {formatDate(selectedPerson.lastActivity)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Columna derecha - Detalles profesionales */}
              <div className="md:col-span-2">
                {selectedPerson.bio && (
                  <div className="bg-white rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-gray-700 mb-3">Biografía</h4>
                    <p className="text-gray-600">{selectedPerson.bio}</p>
                  </div>
                )}
                
                {selectedPerson.certifications && selectedPerson.certifications.length > 0 && (
                  <div className="bg-white rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-gray-700 mb-3">Certificaciones</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPerson.certifications.map((cert, index) => (
                        <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedPerson.skills && selectedPerson.skills.length > 0 && (
                  <div className="bg-white rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-gray-700 mb-3">Habilidades</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPerson.skills.map((skill, index) => (
                        <span key={index} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-700 mb-3">Acciones</h4>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href={`mailto:${selectedPerson.email}`}
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <i className="fas fa-envelope mr-2"></i>
                      Enviar Email
                    </a>
                    
                    <a 
                      href={`tel:${selectedPerson.phone.replace(/\D/g, '')}`}
                      className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                    >
                      <i className="fas fa-phone-alt mr-2"></i>
                      Llamar
                    </a>
                    
                    <button className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                      <i className="fas fa-calendar-plus mr-2"></i>
                      Programar Reunión
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonnelPanel; 