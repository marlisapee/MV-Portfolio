import React from 'react';

import './Button.css';

const Button = ({ text, size, onClick }) => {
  return (
    <div
      className={size == 'sm' ? 'btn-small-container' : 'btn-large-container'}
      onClick={onClick}
    >
      <div>{text}</div>
    </div>
  );
};

export default Button;
