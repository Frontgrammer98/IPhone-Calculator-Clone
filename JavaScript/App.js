// Importing necessary styles and assets
import './App.css';
import redeveloperlogo from './Assets/relogo.png';
import Button from './Components/Button';
import Screen from './Components/Screen';
import { useState } from 'react';
import { evaluate } from 'mathjs';

// Define the main component function App
function App() {
  // State hook to manage the input value
  const [input, setInput] = useState('');

  // Function to handle button clicks and update the input value accordingly
  const addInput = val => {
    if (val === 'AC') {
      // If AC (All Clear) button is clicked, reset the input
      setInput('');
    } else if (val === '=') {
      // If equals button is clicked, evaluate the expression using mathjs
      setInput(evaluate(input));
    } else if (val === '+/-') {
      // If +/- button is clicked, toggle the sign of the current input
      if (input > 0) {
        setInput('-' + input);
      } else {
        setInput(input * -1);
      }
    } else {
      // For other buttons, append the value to the input
      setInput(input + val);
    }
  };

  // Render the component structure
  return (
    <div className='App'>
      {/* Logo container */}
      <div className='redeveloper-logo-container'>
        <img
          className='redeveloper-logo'
          src={redeveloperlogo}
          alt='RE Developer Logo'
        />
      </div>

      {/* Calculator container */}
      <div className='calculator-container'>
        {/* Display Screen component */}
        <Screen input={input} />

        {/* Buttons container */}
        <div className='buttons-container'>
          {/* Rows of buttons */}
          <div className='row'>
            <Button manageClick={addInput}>AC</Button>
            <Button manageClick={addInput}>+/-</Button>
            <Button manageClick={addInput}>%</Button>
            <Button manageClick={addInput}>/</Button>
          </div>
          <div className='row'>
            <Button manageClick={addInput}>7</Button>
            <Button manageClick={addInput}>8</Button>
            <Button manageClick={addInput}>9</Button>
            <Button manageClick={addInput}>*</Button>
          </div>
          <div className='row'>
            <Button manageClick={addInput}>4</Button>
            <Button manageClick={addInput}>5</Button>
            <Button manageClick={addInput}>6</Button>
            <Button manageClick={addInput}>-</Button>
          </div>
          <div className='row'>
            <Button manageClick={addInput}>1</Button>
            <Button manageClick={addInput}>2</Button>
            <Button manageClick={addInput}>3</Button>
            <Button manageClick={addInput}>+</Button>
          </div>
          <div className='row'>
            <Button manageClick={addInput}>0</Button>
            <Button manageClick={addInput}>.</Button>
            <Button manageClick={addInput}>=</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export the App component as the default export
export default App;
