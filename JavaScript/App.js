import './App.css';
import redeveloperlogo from './Assets/relogo.png';
import Button from './Components/Button';
import Screen from './Components/Screen';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {

    if(val == 'AC'){
      setInput('');
    }else if(val=='='){
      setInput(evaluate(input));
    }else if(val=='+/-'){
      if(input>0){
        setInput('-' + input)
      }else{
        setInput(input*-1)
      }
    }else{
      setInput(input + val);
    }
    
  };

  return (
    <div className='App'>

      <div className='redeveloper-logo-container'>
        <img
          className='redeveloper-logo'
          src={redeveloperlogo}
          alt='RE Developer Logo'
        />
      </div>

      <div className='calculator-container'>
      <Screen
        input = {input}
      />
      <div className='buttons-container'>
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

export default App;
