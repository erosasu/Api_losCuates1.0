const {materiales} = require('../precios.js')


const cot_vidrio=(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula, procesPerimetros)=>{
    const g_perimetros=(alto*2/100+ancho*2/100)*procesPerimetros
    return (alto/100*ancho/100)*(materiales.cristal[tipo_vidrio][grosor_vidrio][proceso_vidrio]+pelicula)+g_perimetros
    
}

function cot_espejoflotado(alto, ancho, gasto_vidrio, emerilado, biselado, led, touch){
    const g_aluminio=(materiales.tubular['natural']['1.25']/600)*(alto*2+ancho*2)
    const g_pegamento=materiales.selladores.fijaset/5

    let g_esmerilado= 0;
    let g_biselado=0;
    let g_led=0;
    let g_touch=0;

    if(emerilado){
        g_esmerilado=((ancho*2+alto*2)/100)*50
    }

    if(biselado){
        g_biselado=((ancho*2+alto*2)/100)*50
    }

    if(led){
        g_led=150;
    }
    if(touch){
        g_touch=100;
    }

    const total=g_aluminio+g_biselado+g_esmerilado+g_led+g_pegamento+g_touch+gasto_vidrio

    return total
}

module.exports = { cot_vidrio, cot_espejoflotado }
