import React from 'react';

const Cell = ({ isFilled }) => {
  return (
    <div className={`cell ${isFilled ? 'filled' : ''}`}></div>
  );
};

export default Cell;
