import './App.css';
import logo from '../src/images/logo.png';
import { Boton } from './components/Boton';

import { Contador } from './components/contador';
import {useState} from 'react'//aca importamos el paquete hook useState

function App() {

  const [numClics, setNumClics]= useState(0);

  const manejarClick= ()=>{
    setNumClics(numClics+1);
  }

  const restarContador=()=>{
    if(numClics>0){
    setNumClics(numClics-1);
  }else{
    alert("No Bebe menos de 0 No")
  }
  }

  const reiniciarContador= ()=>{
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        className='logo'
        src={logo}
        alt='logo' />
      </div>
      <div className='contenedor-principal'>
        <Contador 
        numClics={numClics}
        />
        <Boton
          texto="Sumar"
          esBotonDeClick={true}
          manejarClick={manejarClick} />

        <Boton
          texto="Restar"
          manejarClick={restarContador} />
           

        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador } />
      </div>
    </div>
  );
}

export default App;
