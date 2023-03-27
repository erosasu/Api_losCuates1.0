const {materiales} = require('../precios')

function cot_g_duela(alto, ancho, tipoPuertaAluminio, coloralum, vista){
    let g_duela;
    console.log(vista)
    console.log(materiales.duela['natural']['unavista'])

    if(tipoPuertaAluminio=='soloaluminio'){
       g_duela=materiales.duela[coloralum][vista]*((alto-10/100)*(ancho-10/100)/(.12*6.06))
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

function cotizadorPuerta3in(alto, ancho, coloralum, tipoPuertaAluminio, gastoVidrio, vistas, pulgadas){

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

function cot_Puertaunatrescuartos(alto, ancho, coloralum, tipoPuertaAluminio, gastoVidrio, vistas, intermedios){
    const g_duela=cot_g_duela(alto, ancho, tipoPuertaAluminio, coloralum, vistas)
    let g_puerta;
    let g_intermedios=0;
    const g_marco = ((materiales.tubular[coloralum]['2x1']/600)+(materiales.perfilesvarios[coloralum].batientetrescuartos/600))*(alto*2+ancho)
    if(alto<230&&coloralum!='griseuropa'){
        g_puerta=materiales.puerta_unatrescuartos[coloralum].cerco460+
        ((materiales.puerta_unatrescuartos[coloralum].cabezal/600)+(materiales.puerta_unatrescuartos[coloralum].zoclo/600))*(ancho-10)
    }
    else if(alto<300){
        g_puerta=materiales.puerta_unatrescuartos[coloralum].cerco610+
        ((materiales.puerta_unatrescuartos[coloralum].cabezal/600)+(materiales.puerta_unatrescuartos[coloralum].zoclo/600))*(ancho-15)
    }else if(coloralum=='griseuropa'){
        g_puerta=materiales.puerta_unatrescuartos[coloralum].cerco610+
        ((materiales.puerta_unatrescuartos[coloralum].cabezal/600)+(materiales.puerta_unatrescuartos[coloralum].zoclo/600))*(ancho-15)
    }
    else{
        g_puerta=(materiales.puerta_unatrescuartos[coloralum].cerco610/600)*(alto*2)+
        ((materiales.puerta_unatrescuartos[coloralum].cabezal/600)+(materiales.puerta_unatrescuartos[coloralum].zoclo/600))*(ancho-15)
    }

        for(i=0;i<intermedios;i++){
        g_intermedios+=(materiales.puerta_unatrescuartos[coloralum].intermedio/600)*(ancho-15)
        }

        
    
    const g_herrajes=materiales.herrajes.pivote+materiales.herrajes.doblemanija+materiales.herrajes.vinil15
    console.log('gasto intermedios:', g_intermedios)
    console.log('gasto vidrio:',gastoVidrio)
    console.log('gasto duela:',g_duela)
    console.log('gasto puerta:',g_puerta)
    console.log('gasto marco:',g_marco)
    console.log('gasto herrajes:',g_herrajes)
    total=g_duela+g_herrajes+g_intermedios+g_marco+gastoVidrio+g_puerta
   
    return total;
}

function cot_puertasduela(alto, ancho, coloralum, tipoPuertaAluminio, vistas){

    const g_duela=cot_g_duela(alto, ancho, tipoPuertaAluminio, coloralum, vistas)
    const marcos=(materiales.cancel_baño[coloralum].marco_semilujo/600)*(alto*4+ancho*2)+(materiales.perfilesvarios[coloralum].silla/600)*(alto*2+ancho)
    const herrajes= materiales.herrajes.bisaeuro*2+materiales.selladores.acrilastic+20

    const total= g_duela+marcos+herrajes

    return total;

}

module.exports={cotizadorPuerta3in, cot_g_duela , cot_Puertaunatrescuartos, cot_puertasduela}