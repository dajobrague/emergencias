import React from 'react';

const DocumentItem = ({ document }) => {
  const getIconClass = (fileType) => {
    switch (fileType) {
      case 'pdf':
        return 'fas fa-file-pdf text-red-500';
      case 'excel':
        return 'fas fa-file-excel text-green-600';
      case 'word':
        return 'fas fa-file-word text-blue-600';
      default:
        return 'fas fa-file text-gray-500';
    }
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mr-4">
        <i className={getIconClass(document.type)}></i>
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-800">{document.name}</h4>
        <p className="text-xs text-gray-400 flex items-center mt-1">
          <i className="fas fa-clock mr-1"></i> {document.updatedAt}
        </p>
      </div>
      <button className="px-3 py-1 text-xs bg-gray-100 hover:bg-blue-50 text-primary rounded transition-colors">
        {document.action}
      </button>
    </div>
  );
};

export default DocumentItem; 