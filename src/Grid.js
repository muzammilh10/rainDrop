import React from 'react';
import Row from './Row';

const Grid = ({ numRows, numCols, filledColumns }) => {
  // Create an array to hold rows
  const rows = Array.from({ length: numRows }, (_, rowIndex) => (
    <Row key={rowIndex} numCols={numCols} rowIndex={rowIndex} filledColumns={filledColumns} />
  ));

  return (
    <div className="grid">
      {rows}
    </div>
  );
};

export default Grid;
