import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, title, children, size = 'md', contentClass = '' }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  // Control del scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      // Guardar la posición actual del scroll
      const scrollY = window.scrollY;
      
      // Deshabilitar el scroll y fijar la posición del body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        // Restaurar el estado del body al cerrar
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.overflow = '';
        document.body.style.width = '';
        
        // Restaurar la posición del scroll
        window.scrollTo(0, scrollY);
      };
    }
    
    return () => {
      // Limpiar los estilos si el componente se desmonta
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Si el modal no está abierto, no renderizar nada
  if (!isOpen) return null;

  // Determinar el tamaño del modal
  const getMaxWidth = () => {
    switch (size) {
      case 'sm': return '28rem';
      case 'md': return '42rem';
      case 'lg': return '56rem';
      case 'xl': return '80rem';
      case 'full': return '100%';
      default: return '42rem';
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backdropFilter: 'blur(4px)' }}>
      {/* Overlay (fondo oscuro) */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
      />
      
      {/* Contenedor del Modal */}
      <div 
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl z-50 overflow-hidden flex flex-col"
        style={{ 
          maxWidth: getMaxWidth(),
          width: '100%',
          maxHeight: '90vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del modal */}
        <div className="flex items-center justify-between p-4 border-b bg-white sticky top-0 z-10">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Cerrar"
          >
            <i className="fas fa-times text-gray-500"></i>
          </button>
        </div>
        
        {/* Contenido del modal */}
        <div 
          ref={contentRef}
          className={`overflow-y-auto p-6 flex-1 ${contentClass}`}
          style={{ maxHeight: '70vh' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;