import React from "react";
import '../components/stylesheets/contador.css'

function Contador({numClics}){
    return (
        <div className="contador">
            {numClics}
        </div>
    )
}


export {
    Contador
}