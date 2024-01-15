import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import '../Styles/Calculator.css';
import Button from '../Components/Button';

const Calculator: React.FC = () => {
  // State to store the current operation on the screen
  const [operation, setOperation] = useState<string>('');

  // Function to handle operations when buttons are clicked
  const manageOperation = (buttonValue: string): void => {
    // Logic to handle different buttons
    if (buttonValue === 'AC') {
      // AC button: Clears the current operation
      setOperation('');
    } else if (buttonValue === '=') {
      // Equal button: Evaluates the current operation
      try {
        setOperation(evaluate(operation).toString());
      } catch (error) {
        setOperation('Error');
      }
    } else if (buttonValue === '+/-') {
      // +/- button: Toggles the sign of the current number
      setOperation((prevOperation) => {
        if (prevOperation.charAt(0) === '-') {
          return prevOperation.slice(1);
        } else {
          return '-' + prevOperation;
        }
      });
    } else {
      // Other buttons: Appends the button value to the current operation
      setOperation((prevOperation) => prevOperation + buttonValue);
    }
  };

  return (
    <div className='calculator-general-container'>
      {/* Display the current operation on the screen */}
      <div className='screen-container'>{operation}</div>
      {/* Container for buttons */}
      <div className='buttons-container'>
        {/* Button rows with the Button component */}
        <div className='row'>
          <Button number={'AC'} onClick={() => manageOperation('AC')} />
          <Button number={'+/-'} onClick={() => manageOperation('+/-')} />
          <Button number={'%'} onClick={() => manageOperation('%')} />
          <Button number={'/'} onClick={() => manageOperation('/')} />
        </div>
        <div className='row'>
          <Button number={'7'} onClick={() => manageOperation('7')} />
          <Button number={'8'} onClick={() => manageOperation('8')} />
          <Button number={'9'} onClick={() => manageOperation('9')} />
          <Button number={'X'} onClick={() => manageOperation('*')} />
        </div>
        <div className='row'>
          <Button number={'4'} onClick={() => manageOperation('4')} />
          <Button number={'5'} onClick={() => manageOperation('5')} />
          <Button number={'6'} onClick={() => manageOperation('6')} />
          <Button number={'-'} onClick={() => manageOperation('-')} />
        </div>
        <div className='row'>
          <Button number={'1'} onClick={() => manageOperation('1')} />
          <Button number={'2'} onClick={() => manageOperation('2')} />
          <Button number={'3'} onClick={() => manageOperation('3')} />
          <Button number={'+'} onClick={() => manageOperation('+')} />
        </div>
        <div className='row'>
          <Button number={'0'} onClick={() => manageOperation('0')} />
          <Button number={'.'} onClick={() => manageOperation('.')} />
          <Button number={'='} onClick={() => manageOperation('=')} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
