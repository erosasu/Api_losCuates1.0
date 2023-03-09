const {materiales} = require('../precios')

function cot_g_duela(alto, ancho, tipoPuertaAluminio, coloralum, vista){
    let g_duela;

    if(tipoPuertaAluminio=='soloaluminio'){
       g_duela=materiales.duela[coloralum][vista]*((alto/100)*(ancho/100)/(.12*6.06))
    }
    else if (tipoPuertaAluminio=='mitadaluminio'){
        g_duela=materiales.duela[coloralum][vista]*((alto/100)*(ancho/100)/(.12*6.06))/2
    }
    else{
        g_duela=0
    }
    console.log('gasto duela:', g_duela)

    return g_duela;
}

function cotizadorPuerta(alto, ancho, coloralum, tipoPuertaAluminio, gastoVidrio, vistas, pulgadas){

    const g_duela=cot_g_duela(alto, ancho, tipoPuertaAluminio, coloralum, vistas)

    console.log('pulgadas', pulgadas)
    console.log('color aluminio', coloralum)

    const g_perfiles=materiales.corrediza[pulgadas][coloralum].cerco460+ materiales.corrediza[pulgadas][coloralum].zoclo2venas*(ancho/600)+materiales.corrediza[pulgadas][coloralum].cabezal*(ancho*2/600)
    let g_marco;
    let herrajes;

    if(pulgadas=='2in'){
        g_marco=materiles.perfilesvarios[coloralum].silla;
        herrajes= materiales.herrajes.bisaeuro+40
    }
    else{
        g_marco=materiales.perfilesvarios[coloralum].batientedoble
        herrajes= materiales.herrajes.doblemanija+materiales.herrajes.pivote+materiales.selladores.acrilastic
    }

    console.log('gasto vidrio:',gastoVidrio)
    console.log('gasto duela:',g_duela)
    console.log('gasto perfiles:',g_perfiles)
    console.log('gasto marco:',g_marco)
    console.log('gasto herrajes:',herrajes)

    const total= gastoVidrio+g_duela+g_perfiles+g_marco+herrajes

    return total
}      

module.exports={cotizadorPuerta, cot_g_duela}