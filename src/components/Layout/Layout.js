import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children, activePanel, setActivePanel }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activePanel={activePanel} setActivePanel={setActivePanel} />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout; 