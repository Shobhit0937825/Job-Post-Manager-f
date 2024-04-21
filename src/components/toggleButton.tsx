import React, { useState } from 'react';

function ToggleButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={handleClick}
      className={`transition-all duration-300 ${isActive ? 'bg-green-500 transform translate-x-6' : 'bg-red-500'}`}
    >
      Toggle
    </button>
  );
}

export default ToggleButton;
