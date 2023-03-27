import React, { useState } from "react";
import Select from 'react-select'
import '../hojas-de-estilos/tiposervicio.css'
import IndexServicios from "./indexservicios"

const servicios =  [{label:'Vidrio al corte', value: 'Vidrio al corte'},
                    {label:'Vidrio instalado',value: 'Vidrio instalado'},
                    {label:'Vidrio para mesa/ Cubierta',value: 'Vidrio para mesa'},
                    {label:'Ventana de aluminio',value:'Ventana'}, 
                    {label: 'Puerta de aluminio ',value: 'Puerta aluminio'},
                    {label: 'Puerta de cristal templado',value: 'Puerta templado'},
                    {label:'Domo',value: 'Domo'},
                    {label:'Mosquitero',value: 'Mosquitero'},
                    {label:'Cancel de baño',value: 'Cancel de baño'},
                    {label:'Reparación',value: 'Reparación'},
                    {label:'Espejo',value:'Espejo'}];


const SelectorTipoServicio =()=>{
    const [ selectedServicio, setSelectedServicio ]=useState('') 
    const handleSelectchange=( event )=>{
        
        setSelectedServicio(event)

    }

    

    return(
        <>
            <p>Servicio: { selectedServicio.value }</p>
            <br/>
            <Select
                defaultValue={{label:'selecciona el servicio a cotizar', value: null}}
                options={servicios}
                onChange={handleSelectchange}
            />
            <IndexServicios
                servicioSeleccionado={selectedServicio.value}
                onSubmit={handleSelectchange}/>
        </>
   
        
 
        
    );
}

export default SelectorTipoServicio;