import React from 'react';
import Cell from './Cell';

const Row = ({ numCols, rowIndex, filledColumns }) => {
  const cells = Array.from({ length: numCols }, (_, colIndex) => {
    const isFilled = filledColumns.includes(colIndex);
    return <Cell key={colIndex} isFilled={isFilled} />;
  });

  return (
    <div className="row">
      {cells}
    </div>
  );
};

export default Row;
