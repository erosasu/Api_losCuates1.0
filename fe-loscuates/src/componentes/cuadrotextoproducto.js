import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function CuadrotextoDescripcionProductos(){

    const [input, setInput] = useState('');

    const manejarCambio = e => {
    setInput(e.target.value);
  }

    const manejarEnvio = e => {
        e.preventDefault();
        
        const nuevaCotizacion = {
          id: uuidv4(),
          descipcionProducto: input,
          
        }
    
        props.onSubmit(nuevaCotizacion);
      }
    return(
        <form 
        className='descriptor-texto-cotizacion'
        onSubmit={manejarEnvio}
        method='POST'>
        <input 
          className='tarea-input'
          type='text'
          placeholder='Ingresa el producto que deseas cotizar'
          name='descripcionProducto'
          onChange={manejarCambio}
        />
        <button className='boton-enviar'>
          Enviar
        </button>
      </form>


    )

}

export default CuadrotextoDescripcionProductos;