import React from "react";
import '../stylesheet/Boton.css'

function Boton(props){
    //const {children}=props
    const esOperador=valor=>{
        return isNaN(valor) && (valor !=='.') && (valor !=='=')
    };
    return(
        <div className={`boton-contenedor ${esOperador(props.children)? 'operador': null}`.trim()}
        onClick={()=> props.manejarClick(props.children)}>
            {props.children}
        </div>
    );
}


export{
    Boton
}