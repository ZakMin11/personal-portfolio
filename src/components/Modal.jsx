import React, { useEffect } from 'react';

const Modal = ({ show, onClose, children }) => {
  useEffect(() => {
    const header = document.querySelector('header');
    if (show) {
      document.body.classList.add('no-scroll');
      if (header) header.classList.add('hidden');
    } else {
      document.body.classList.remove('no-scroll');
      if (header) header.classList.remove('hidden');
    }

    return () => {
      document.body.classList.remove('no-scroll');
      if (header) header.classList.remove('hidden');
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-background dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl max-w-3xl w-full max-h-[90vh]">
        <div className="flex justify-end p-2 bg-background">
          <button onClick={onClose} className="bg-accent rounded-full px-3 py-1 text-black dark:text-white hover:bg-accent-dark">
            Close
          </button>
        </div>
        <div className="p-4 bg-background h-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;