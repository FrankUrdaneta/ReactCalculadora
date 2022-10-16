import './App.css';
import logo from './images/logofree.png'
import { Boton } from './components/Boton';
import { Pantalla } from './components/Pantalla';
import { BotonCLear } from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';//para calculos mateamticos paquete

function App() {
  const [input, setInput]= useState('');

  const agregarInput= val=>{
    setInput(input+val);
  };

  const calcularResultado= ()=>{
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Por favor ingrese valores para realizar los calculos")
    }
    
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
      <img src={logo} className="logo" alt="logo de freeecodecamp" />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
      <div className='fila'>
        <Boton manejarClick={agregarInput}>1</Boton>
        <Boton manejarClick={agregarInput}>2</Boton>
        <Boton manejarClick={agregarInput}>3</Boton>
        <Boton manejarClick={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClick={agregarInput}>4</Boton>
        <Boton manejarClick={agregarInput}>5</Boton>
        <Boton manejarClick={agregarInput}>6</Boton>
        <Boton manejarClick={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
         <Boton manejarClick={agregarInput}>7</Boton>
        <Boton manejarClick={agregarInput}>8</Boton>
        <Boton manejarClick={agregarInput}>9</Boton>
        <Boton manejarClick={agregarInput}>*</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClick={calcularResultado}>=</Boton>
        <Boton manejarClick={agregarInput}>0</Boton>
        <Boton manejarClick={agregarInput}>.</Boton>
        <Boton manejarClick={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
        <BotonCLear manejarClear={()=>setInput('')}>
          Clear
          </BotonCLear>
      </div>
      </div>
    </div>
  );
}

export default App;
