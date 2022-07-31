import React from 'react';

const Overlay = ({ setShowTaskWizard }) => {
  return (
    <div
      onClick={() => setShowTaskWizard(false)}
      className="absolute top-0 left-0 z-10 w-full h-full bg-gray-800 opacity-50"
    ></div>
  );
};

export default Overlay;
