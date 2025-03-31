import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, title, children, size = 'md', verticalPosition = 'center', contentClass = '' }) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Asegurar que el modal se ajuste correctamente
      const checkSize = () => {
        if (contentRef.current && modalRef.current) {
          // Resetear el scroll
          modalRef.current.scrollTop = 0;
          contentRef.current.scrollTop = 0;
        }
      };
      
      // Verificar el tamaño después de un breve retraso para asegurar que todo se ha renderizado
      setTimeout(checkSize, 100);
      
      return () => {
        document.body.style.overflow = 'auto';
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  // Determinar si necesitamos aplicar estilos especiales para el modal de Nueva Alerta
  const isNuevaAlertaModal = title === "Nueva Alerta";
  
  // Efecto para centrar horizontalmente el modal de Nueva Alerta
  useEffect(() => {
    if (isOpen && isNuevaAlertaModal && modalRef.current) {
      // Centrar modal horizontalmente
      const centerModal = () => {
        modalRef.current.style.margin = '0 auto';
        modalRef.current.style.left = '50%';
        modalRef.current.style.transform = 'translate(-50%, -50%)';
      };
      
      // Aplicar centrado después de renderizar
      setTimeout(centerModal, 100);
    }
  }, [isOpen, isNuevaAlertaModal]);

  // Si el modal no está abierto, no renderizar nada
  if (!isOpen) return null;

  // Determinar el tamaño del modal
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-full'
  };

  // Manejar el cierre al hacer clic en el fondo
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Determinar las clases de posicionamiento vertical
  const getVerticalPositionClasses = () => {
    switch (verticalPosition) {
      case 'top':
        return 'items-start pt-10';
      case 'button-level':
        return 'items-start emergency-modal-position'; // Clase específica para el modal de emergencia
      case 'bottom':
        return 'items-end pb-20';
      case 'lower':
        return 'items-center pt-20'; // Para posicionar más abajo que el centro
      default:
        return 'items-center'; // Centro (default)
    }
  };
  
  // Clase especial solo para el modal de Nueva Alerta
  const nuevaAlertaClass = isNuevaAlertaModal ? 'nueva-alerta-modal-container-centered' : '';

  return (
    <div 
      className={`modal-backdrop ${getVerticalPositionClasses()}`}
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className={`modal-container ${sizeClasses[size]} ${nuevaAlertaClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera del modal */}
        <div className="modal-header flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <button 
            onClick={onClose}
            className="modal-btn p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Cerrar"
          >
            <i className="fas fa-times text-gray-500"></i>
          </button>
        </div>
        
        {/* Contenido del modal */}
        <div ref={contentRef} className={`modal-form-container ${contentClass}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;