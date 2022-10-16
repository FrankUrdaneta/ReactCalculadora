import React from "react";
import '../stylesheet/BotonClear.css'

const BotonCLear=(props)=>(//si en vez de la llave coloco parentesis significa que estoy retornando 
    <div className="boton-clear" onClick={props.manejarClear}>
        {props.children}
    </div>
)


export{
    BotonCLear
}