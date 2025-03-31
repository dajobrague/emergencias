import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/print.css'; // Importar estilos de impresión
import './styles/modal.css'; // Importar estilos de modales
import './styles/dropdown.css'; // Importar estilos de menú desplegable
import App from './App';

// Configuración para integración con Softr
const SoftrIntegration = () => {
  // Estado para almacenar datos de Softr
  const [softrData, setSoftrData] = React.useState(null);
  
  React.useEffect(() => {
    // Detectar si estamos en un iframe
    const isInIframe = window !== window.parent;
    
    // Si estamos en un iframe, notificar a Softr que la aplicación está lista
    if (isInIframe) {
      window.parent.postMessage({ type: 'reactAppReady' }, '*');
    }
    
    // Escuchar mensajes de Softr
    const handleMessage = (event) => {
      const { type, data } = event.data || {};
      if (type === 'softrData') {
        setSoftrData(data);
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);
  
  // Configurar atributo para la fecha de impresión
  React.useEffect(() => {
    // Establecer la fecha actual como atributo de data-print-date en el body
    document.body.setAttribute('data-print-date', new Date().toLocaleDateString());
  }, []);
  
  // Pasar los datos de Softr a tu aplicación
  return <App softrData={softrData} />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SoftrIntegration />
  </React.StrictMode>
); 