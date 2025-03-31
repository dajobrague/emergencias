import React, { useState, useEffect } from 'react';

const TwitterTimeline = ({ height = 600 }) => {
  const [currentAccount, setCurrentAccount] = useState('sernageomincl');
  const [isLoading, setIsLoading] = useState(true);
  
  // Lista de cuentas disponibles con los nombres de usuario correctos
  const accounts = [
    { id: 'sernageomincl', name: 'SERNAGEOMIN' },
    { id: 'Senapred', name: 'SENAPRED' },
    { id: 'conaf_rm', name: 'CONAF RM' }
  ];

  // Cambiar de cuenta
  const switchAccount = (accountId) => {
    if (currentAccount !== accountId) {
      setIsLoading(true);
      setCurrentAccount(accountId);
    }
  };

  // Generar el HTML para el timeline de Twitter
  const getTwitterTimelineHTML = (username) => {
    return `
      <a class="twitter-timeline" 
         data-height="${height}" 
         data-theme="light" 
         data-tweet-limit="15"
         data-chrome="noheader nofooter noborders"
         href="https://twitter.com/${username}?ref_src=twsrc%5Etfw">
         Tweets de @${username}
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    `;
  };

  // Efecto para cargar el script de Twitter cuando cambia la cuenta
  useEffect(() => {
    // Limpiar cualquier script anterior de Twitter
    const existingScripts = document.querySelectorAll('script[src*="platform.twitter.com"]');
    existingScripts.forEach(script => script.remove());
    
    // Cargar el nuevo script
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
    
    // Establecer un timeout para ocultar el spinner si tarda demasiado
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    
    return () => {
      clearTimeout(timeout);
    };
  }, [currentAccount]);

  return (
    <div className="twitter-timeline-container">
      {/* Selector de cuentas */}
      <div className="flex flex-wrap gap-2 mb-4">
        {accounts.map(account => (
          <button
            key={account.id}
            onClick={() => switchAccount(account.id)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              currentAccount === account.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <i className="fa-brands fa-x-twitter mr-1"></i>
            {account.name}
          </button>
        ))}
      </div>
      
      {/* Contenedor del timeline */}
      <div className="w-full h-full min-h-[300px] relative">
        {/* Usar el código de incrustación oficial de Twitter */}
        <div 
          className="twitter-embed-container"
          style={{ height: `${height}px`, overflow: 'auto' }}
          dangerouslySetInnerHTML={{ __html: getTwitterTimelineHTML(currentAccount) }}
        />
        
        {/* Indicador de carga */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-2"></div>
              <p className="text-sm text-gray-500">Cargando tweets...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TwitterTimeline; 