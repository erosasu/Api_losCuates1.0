const {materiales} = require('../precios.js')
const { cot_vidrio } = require('./vidrio')


function cotizarcancelbañocorreizo(alto, ancho, color, tipo, pelicula){
    
    let gastovidrio= cot_vidrio('claro', '6mm', 'templado', alto, ancho, pelicula)
    let gastokit=0;

        if(tipo=='sencillo'){
            if(ancho<=130){
                 gastokit=materiales.herrajes.kittemplado6mm[color]['130']
            }
            else if(ancho<=150){
                gastokit=materiales.herrajes.kittemplado6mm[color]['150']

            }
            else if(ancho<=200){
                gastokit=materiales.herrajes.kittemplado6mm[color]['200']
            }
            else{
                return 'Exedente de medidas'
            }
        }
        else if(tipo=='escuadra'){
            if(ancho<=75){
                gastokit=materiales.herrajes.kittemplado6mm[color]['150']
            }
            else if(ancho<=100){
                gastokit=materiales.herrajes.kittemplado6mm[color]['200']
            }
            else if (ancho<130){
                gastokit=materiales.herrajes.kittemplado6mm[color]['130']*2
            }
            else{
                return 'Excedente de medidas'
            }
           
        }
        let total = gastokit+gastovidrio
        return total
}

module.exports= { cotizarcancelbañocorreizo }