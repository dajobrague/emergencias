import React, { useState, useEffect } from 'react';
import Modal from '../UI/Modal';

const AlertForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'fire',
    description: '',
    location: '',
    severity: 'medium',
    contactList: 'all'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedChannels, setSelectedChannels] = useState({
    whatsapp: true,
    email: true,
    sms: false,
    app: true
  });

  // Opciones para los selectores
  const alertTypes = [
    { value: 'fire', label: 'Incendio' },
    { value: 'traffic', label: 'Accidente de Tráfico' },
    { value: 'medical', label: 'Emergencia Médica' },
    { value: 'natural', label: 'Desastre Natural' },
    { value: 'other', label: 'Otro' }
  ];
  
  const severityLevels = [
    { value: 'low', label: 'Baja' },
    { value: 'medium', label: 'Media' },
    { value: 'high', label: 'Alta' },
    { value: 'critical', label: 'Crítica' }
  ];
  
  const contactLists = [
    { value: 'all', label: 'Todos los contactos' },
    { value: 'emergency', label: 'Equipo de Emergencia' },
    { value: 'medical', label: 'Personal Médico' },
    { value: 'fire', label: 'Bomberos' },
    { value: 'police', label: 'Policía' },
    { value: 'custom', label: 'Lista Personalizada' }
  ];

  // Manejadores de eventos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleChannelToggle = (channel) => {
    setSelectedChannels(prev => ({
      ...prev,
      [channel]: !prev[channel]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío de alerta
    try {
      // Aquí iría la lógica real para enviar la alerta por los canales seleccionados
      console.log('Enviando alerta:', {
        ...formData,
        channels: selectedChannels,
        timestamp: new Date().toISOString()
      });
      
      // Simular un retraso en la respuesta
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        // Resetear el formulario
        setFormData({
          title: '',
          type: 'fire',
          description: '',
          location: '',
          severity: 'medium',
          contactList: 'all'
        });
        setSelectedChannels({
          whatsapp: true,
          email: true,
          sms: false,
          app: true
        });
      }, 2000);
    } catch (error) {
      console.error('Error al enviar la alerta:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Función para obtener el color según la severidad
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Función para obtener el icono según el tipo de alerta
  const getAlertTypeIcon = (type) => {
    switch (type) {
      case 'fire': return 'fa-fire';
      case 'traffic': return 'fa-car-crash';
      case 'medical': return 'fa-ambulance';
      case 'natural': return 'fa-cloud-showers-heavy';
      default: return 'fa-exclamation-triangle';
    }
  };

  // Efecto para asegurar visibilidad del modal
  useEffect(() => {
    if (isOpen) {
      // Hacer scroll al inicio de la página para asegurar visibilidad del modal
      window.scrollTo(0, 0);
    }
  }, [isOpen]);

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Nueva Alerta"
      size="xl"
      verticalPosition="center"
    >
      {showSuccess ? (
        <div className="text-center py-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
            <i className="fas fa-check text-green-500 text-xl"></i>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">¡Alerta Enviada!</h3>
          <p className="text-sm text-gray-600">La alerta ha sido enviada correctamente.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Vista previa de la alerta - versión más compacta */}
          <div className="bg-white border rounded-lg p-2 mb-2 shadow-sm">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-2">
                <i className={`fas ${getAlertTypeIcon(formData.type)} text-gray-500 text-sm`}></i>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold">{formData.title || 'Título de la Alerta'}</h3>
                <p className="text-xs text-gray-600 mt-0.5">{formData.description || 'Descripción de la emergencia...'}</p>
                {formData.location && (
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <i className="fas fa-map-marker-alt mr-1"></i>
                    <span>{formData.location}</span>
                  </div>
                )}
                {formData.severity && (
                  <div className="mt-1">
                    <span className={`inline-block px-1.5 py-0.5 rounded-full text-xs ${getSeverityColor(formData.severity)}`}>
                      Severidad: {severityLevels.find(s => s.value === formData.severity)?.label || 'Media'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Campos del formulario - más compactos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label htmlFor="title" className="block text-xs font-medium text-gray-700 mb-0.5">Título*</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Ej: Incendio en Zona Residencial"
                required
              />
            </div>
            
            <div>
              <label htmlFor="type" className="block text-xs font-medium text-gray-700 mb-0.5">Tipo*</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              >
                {alertTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="description" className="block text-xs font-medium text-gray-700 mb-0.5">Descripción*</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="1"
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Describa los detalles de la emergencia..."
              required
            ></textarea>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label htmlFor="location" className="block text-xs font-medium text-gray-700 mb-0.5">Ubicación*</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Ej: Av. Principal #123"
                required
              />
            </div>
            
            <div>
              <label htmlFor="severity" className="block text-xs font-medium text-gray-700 mb-0.5">Severidad*</label>
              <select
                id="severity"
                name="severity"
                value={formData.severity}
                onChange={handleInputChange}
                className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              >
                {severityLevels.map(level => (
                  <option key={level.value} value={level.value}>{level.label}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="contactList" className="block text-xs font-medium text-gray-700 mb-0.5">Lista de Contactos*</label>
            <select
              id="contactList"
              name="contactList"
              value={formData.contactList}
              onChange={handleInputChange}
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            >
              {contactLists.map(list => (
                <option key={list.value} value={list.value}>{list.label}</option>
              ))}
            </select>
          </div>
          
          {/* Canales de envío - más compactos */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-0.5">Canales de Envío*</label>
            <div className="grid grid-cols-4 gap-1">
              <button
                type="button"
                onClick={() => handleChannelToggle('whatsapp')}
                className={`flex items-center justify-center p-1 rounded-lg border text-xs ${
                  selectedChannels.whatsapp 
                    ? 'bg-green-50 border-green-200 text-green-700' 
                    : 'bg-gray-50 border-gray-200 text-gray-500'
                }`}
              >
                <i className="fab fa-whatsapp mr-0.5"></i>
                <span>WhatsApp</span>
              </button>
              
              <button
                type="button"
                onClick={() => handleChannelToggle('email')}
                className={`flex items-center justify-center p-1 rounded-lg border text-xs ${
                  selectedChannels.email 
                    ? 'bg-blue-50 border-blue-200 text-blue-700' 
                    : 'bg-gray-50 border-gray-200 text-gray-500'
                }`}
              >
                <i className="fas fa-envelope mr-0.5"></i>
                <span>Email</span>
              </button>
              
              <button
                type="button"
                onClick={() => handleChannelToggle('sms')}
                className={`flex items-center justify-center p-1 rounded-lg border text-xs ${
                  selectedChannels.sms 
                    ? 'bg-purple-50 border-purple-200 text-purple-700' 
                    : 'bg-gray-50 border-gray-200 text-gray-500'
                }`}
              >
                <i className="fas fa-sms mr-0.5"></i>
                <span>SMS</span>
              </button>
              
              <button
                type="button"
                onClick={() => handleChannelToggle('app')}
                className={`flex items-center justify-center p-1 rounded-lg border text-xs ${
                  selectedChannels.app 
                    ? 'bg-orange-50 border-orange-200 text-orange-700' 
                    : 'bg-gray-50 border-gray-200 text-gray-500'
                }`}
              >
                <i className="fas fa-mobile-alt mr-0.5"></i>
                <span>App</span>
              </button>
            </div>
            {Object.values(selectedChannels).every(v => !v) && (
              <p className="text-red-500 text-xs mt-0.5">Seleccione al menos un canal</p>
            )}
          </div>
          
          {/* Botones de acción */}
          <div className="flex justify-end space-x-2 pt-2 border-t mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors"
              disabled={isSubmitting}
            >
              Cancelar
            </button>
            
            <button
              type="submit"
              className="px-3 py-1.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors flex items-center"
              disabled={isSubmitting || Object.values(selectedChannels).every(v => !v)}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-1 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane mr-1"></i>
                  Enviar Alerta
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default AlertForm; 