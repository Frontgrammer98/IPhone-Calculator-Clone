// Import React and the button styles
import React from 'react';
import '../Styles/Button.css';

// Button component function
function Button(props) {
  // Function to check if the value is an operator
  const isOperator = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '%') && (valor !== 'AC') && (valor !== '+/-');
  }

  // Function to check if the value is zero
  const isZero = valor => {
    return valor === '0';
  }

  // Function to check if the value should have a grey background
  const isGrey = valor => {
    return valor === 'AC' || valor === '+/-' || valor === '%';
  }

    // Render the button component
  return (
    <div
      // Apply dynamic classes based on conditions
      className={`button ${isOperator(props.children) ? 'operator' : ''} ${isZero(props.children) ? 'zero' : ''} ${isGrey(props.children) ? 'grey' : ''}`.trim()}
      // Handle click event and call the manageClick function from props
      onClick={() => props.manageClick(props.children)}
    >
      {/* Text container inside the button */}
      <div className='text-container'>
        {/* Display the button's content */}
        {props.children}
      </div>
    </div>
  );
}

// Export the Button component as the default export
export default Button;
