import Select from "react-select";
import { useState } from "react";
import SelectGrosor from "./gruesovidrio";


const vidriostipos =  [{label:'Claro/Trasparente', value: 'claro'},
                    {label:'Tintex/verde',value: 'tintex'},
                    {label:'Filtrasol/humo',value: 'filtrasol'},
                    {label:'Satinado',value:'satinado'}, 
                    {label: 'Esmerilado',value: 'esmerilado'},
                    {label: 'Japones/Hojas',value: 'japones'},];

const SelectorVidrio=()=>{
    const [ selectedVidrio, setSelectedVidrio ]=useState('') 

    const handleSelectchange=( event )=>{
        console.log(event);
        setSelectedVidrio(event)
}
    
return(
    <>
        <p>Tipo de vidrio: { selectedVidrio.value }</p>
        
        <Select
            defaultValue={{label:'selecciona el tipo de vidrio', value: null}}
            options={vidriostipos}
            onChange={handleSelectchange}
        />
        <SelectGrosor 
                vidrioSeleccionado={selectedVidrio.value}
                onSubmit={handleSelectchange}/>
        
    </>

)}

export default SelectorVidrio;