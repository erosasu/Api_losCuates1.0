import React from 'react';
import '../src/hojas-de-estilos/testimonio.css'

function Testimonio(props){
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio'
            src={require(`../src/imagenes/${props.imagen}.jpg`)}
            alt='foto de padre eh hija'/>
            <div className='contenedor-text-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.lugar}</p>
                <p className='cargo-testimonio'>{props.haciendo}</p>
                <p className='texto-testimonio'>{props.pensamiento}</p>
            </div>
            <br></br>
        </div>
        
    )
}

export default Testimonio