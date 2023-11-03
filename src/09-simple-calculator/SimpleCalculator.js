import { useReducer, useState } from 'react';
import { } from './SimpleCalculator.css';

const initialState = {
  firstNumber: 0,
  secondNumber: 0,
  value: 'No result yet'
};

function initResultFunction(initialResult) {
  console.log(initialResult)
  return initialResult;
}
function reducer(calculatorVar, action) {
  var result = 0;
  switch (action.type) {
    case 'SET_FIRST_NUMBER':
      calculatorVar.firstNumber = action.value;
      break;
    case 'SET_SECOND_NUMBER':
      calculatorVar.secondNumber = action.value;
      break;
    case '+':
      result = Number(calculatorVar.firstNumber) + Number(calculatorVar.secondNumber);
      break;
    case '-':
      result = Number(calculatorVar.firstNumber) - Number(calculatorVar.secondNumber)
      break;
    case 'c':
      return initResultFunction({ firstNumber: 0, secondNumber: 0, value: 0 });
  }
  calculatorVar.value = result;
  console.log(
    'Type: ' + action.type +
    '\nFirstNumber: ' + calculatorVar.firstNumber +
    '\nSecondNumber: ' + calculatorVar.secondNumber +
    '\nResult.value: ' + calculatorVar.value
  );
  return { ...calculatorVar, firstNumber: calculatorVar.firstNumber, secondNumber: calculatorVar.secondNumber, value: calculatorVar.value };
}

export default function SimpleCalculator() {
  const [selectedValue, setSelectedValue] = useState(0);
  const [selectedValue2, setSelectedValue2] = useState(0);
  const INITIAL_NUMBER = 0;
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [calculator, calculateFunction] = useReducer(reducer, initialState, initResultFunction);
  const handleFirstNumberClick = (event) => {
    const number = event.target.value;
    setSelectedValue(number);
    calculateFunction({ type: 'SET_FIRST_NUMBER', value: number });
  }
  const handleSecondNumberClick = (event) => {
    const number = event.target.value;
    setSelectedValue2(number);
    calculateFunction({ type: 'SET_SECOND_NUMBER', value: number });
  }
  const handleClear = () => {
    setSelectedValue(0);
    setSelectedValue2(0);
    calculateFunction({ type: 'c' });
  }
  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number} className={selectedValue == number ? 'isSelected' : 'notSelected'} onClick={handleFirstNumberClick} value={number}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number} className={selectedValue2 == number ? 'isSelected' : 'notSelected'} onClick={handleSecondNumberClick} value={number} >
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => calculateFunction({ type: '+' })}>+</button>
        <button onClick={() => calculateFunction({ type: '-' })}>-</button>
        <button onClick={handleClear}>c</button>
      </div>
      <div><h2>Result:</h2>{calculator.value}</div>
    </div>
  )
}
