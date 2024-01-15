import React from 'react';
import  '../Styles/Button.css';

function Button (props){

    const isOperator = valor =>{
        return isNaN(valor) && (valor !== '.')  && (valor !== '%') && (valor !== 'AC') && (valor !== '+/-');
    }
    const isZero = valor =>{
        return valor=='0';
    }
    const isGrey = valor =>{
        return valor=='AC' || valor=='+/-' || valor=='%';
    }
    return(
        <div className={`button ${isOperator(props.children) ? 'operator' : ''} ${isZero(props.children) ? 'zero': ''} ${isGrey(props.children) ? 'grey': ''}`.trim()}
        onClick={() => props.manageClick(props.children)}>
            <div className='text-container'>
            {props.children}
            </div>
        </div>
    );
}

export default Button;