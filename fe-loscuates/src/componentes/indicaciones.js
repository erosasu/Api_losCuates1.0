import React from "react"
import '../hojas-de-estilos/indicaciones.css'

const Indicacion =({texto})=>{
    return(
        <div className="indicacion">
            {texto}
        </div>
    )
}

export default Indicacion;