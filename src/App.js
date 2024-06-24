import React, { useState, useEffect } from 'react';
import './App.css';

const numRows = 15;
const numCols = 20;

const createEmptyGrid = () => {
  return Array(numRows)
    .fill(null)
    .map(() => Array(numCols).fill(0));
};

const App = () => {
  const [grid, setGrid] = useState(createEmptyGrid());
 
// Function to generate non-repeating random numbers
function generateNonRepeatingRandom(numCols) {
    if (!generateNonRepeatingRandom.previousNumbers) {
        generateNonRepeatingRandom.previousNumbers = [];
    }

    // Generate a random index
    let randIndex;
    do {
        randIndex = Math.floor(Math.random() * numCols);
    } while (generateNonRepeatingRandom.previousNumbers.includes(randIndex));

    // Add the generated index to the list of previous numbers
    generateNonRepeatingRandom.previousNumbers.push(randIndex);

    // Limit the number of previous numbers stored to 5
    if (generateNonRepeatingRandom.previousNumbers.length > 15) {
        generateNonRepeatingRandom.previousNumbers.shift(); // Remove the oldest number
    }
    return randIndex;
}

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid(prevGrid => {
        const newGrid = createEmptyGrid();
        // Move rain drops down by one row
        for (let i = numRows - 1; i > 0; i--) {
          // console.log(prevGrid[i-1])

          newGrid[i] = prevGrid[i - 1];
        }
        // Randomly add new rain drops at the top
        const length =  Math.floor(Math.random() * 3) + 1;
        const skip = Math.floor(Math.random() * 6) + 1;
        const newRainDrops = Array(numCols).fill(0);
        if (skip==1) {
          for (let j = 0; j <length ; j++) {

            const randIndex = generateNonRepeatingRandom(numCols)
               newRainDrops[randIndex] = 1;
          }
          newGrid[0] = newRainDrops;
        }
        return newGrid;
      });
    }, 50); // Adjust the speed of the animation here

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Falling Rain Pattern</h1>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`cell ${cell ? 'filled' : ''}`}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
