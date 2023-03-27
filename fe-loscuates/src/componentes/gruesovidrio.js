import Select from "react-select";
import { useState } from "react";

const grosores = [{label:'3mm', value: '3'},
{label:'4mm',value: '4'},
{label:'6mm',value: '6'},
{label:'9mm',value:'9'}, 
{label: '12mm',value: '12'},
{label: '19mm',value: '19'},];

function SelectGrosor({vidrioSeleccionado}){
    const [ selectedGrosor, setSelectedGrosor ]=useState('') 

    const handleSelectchange=( event )=>{
        console.log(event);
        setSelectedGrosor(event)
}
 
if(vidrioSeleccionado==='claro'){
  return(
    <>
        <p>grosor del Vidrio: { selectedGrosor.value }</p>
        
        <Select
            defaultValue={{label:'selecciona el grueso del vidrio', value: null}}
            options={grosores}
            onChange={handleSelectchange}
        />
        
    </>

    )}
if(vidrioSeleccionado==='tintex'){
    return(
        <>
            <p>grosor del Vidrio: { selectedGrosor.label }</p>
            
            <Select
                defaultValue={{label:'selecciona el grueso del vidrio', value: null}}
                options={grosores}
                onChange={handleSelectchange}
            />
            
        </>
    
        )}

}




export default SelectGrosor;
