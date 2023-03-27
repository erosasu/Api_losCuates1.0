import '../hojas-de-estilos/contador.css'

function Contador({ numclics }){

    return(
        <div className="contador">
            {numclics}
        </div>
    )
}

export default Contador