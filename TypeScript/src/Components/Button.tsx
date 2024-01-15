import React from 'react';
import '../Styles/Button.css';

// Define the props interface for the Button component
interface ButtonProps {
  number: string;
  onClick: () => void;
}

// Function to check if a button represents an operator
const isOperator = (number: string): boolean => {
  return isNaN(Number(number)) && !['.', '%', 'AC', '+/-'].includes(number);
};

// Function to check if a button represents zero
const isZero = (number: string): boolean => {
  return number === '0';
};

// Function to check if a button should have a grey color
const isGrey = (number: string): boolean => {
  return ['AC', '+/-', '%'].includes(number);
};

// React functional component for the Button
const Button: React.FC<ButtonProps> = ({ number, onClick }) => {
  return (
    // Use dynamic classes based on button characteristics
    <div
      className={`button ${isOperator(number) ? 'operator' : ''} ${isZero(number) ? 'zero': ''} ${isGrey(number) ? 'grey': ''}`.trim()}
      onClick={onClick}
    >
      {/* Add additional class for zero alignment */}
      <div className={isZero(number) ? 'align-zero' : ''}>
        {number}
      </div>
    </div>
  );
}

export default Button;
