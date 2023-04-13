const {materiales, Indalum} = require('../precios')

function cot_g_duela(alto, ancho, tipoPuertaAluminio, coloralum, vista, pulgadas){
    let g_duela;
    console.log(vista)

    if(tipoPuertaAluminio=='soloaluminio'){
       g_duela=materiales.duela[coloralum][vista]*((alto-10/100)*(ancho-10/100)/(.12*6.06))+(materiales.corrediza[pulgadas][coloralum].intermedio/600)*(ancho-10)
    }
    else if (tipoPuertaAluminio=='mitadaluminio'){
        g_duela=materiales.duela[coloralum][vista]*((alto/100)*(ancho/100)/(.12*6.06))/2+(materiales.corrediza[pulgadas][coloralum].intermedio/600)*(ancho-10)
    }
    else{
        g_duela=0
    }
    console.log('gasto duela:', g_duela)

    return g_duela;
}

function cotizadorPuerta3in(alto, ancho, coloralum, tipoPuertaAluminio, gastoVidrio, vistas, pulgadas){

    const g_duela=cot_g_duela(alto, ancho, tipoPuertaAluminio, coloralum, vistas, pulgadas)

    console.log('pulgadas', pulgadas)
    console.log('color aluminio', coloralum)
    
    const g_perfiles=materiales.corrediza[pulgadas][coloralum].cerco460+ materiales.corrediza[pulgadas][coloralum].zoclo2venas*(ancho/600)+materiales.corrediza[pulgadas][coloralum].cabezal*(ancho*2/600)
    let g_marco;
    let herrajes;

    if(pulgadas=='2in'){
        g_marco=materiales.perfilesvarios[coloralum].silla;
        herrajes= materiales.herrajes.bisaeuro+40
    }
    else{
        g_marco=(materiales.fija['2in'][coloralum].canalliso/600+materiales.perfilesvarios[coloralum].batientetrescuartos/600)*(alto*2+ancho)
        herrajes= materiales.herrajes.doblemanija+materiales.herrajes.pivote+materiales.selladores.acrilastic+materiales.herrajes.vinil11/2
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

function cot_PuertaSerie(alto, ancho, coloralum, intermedios, serie, g_vidrio){
    console.log('color aluminio:', coloralum)
    console.log(serie)
    const g_aluminio=(Indalum[serie][coloralum].cerco['chapa']/605)*(2*(alto+(ancho-10))+intermedios*(ancho-10))+Indalum[serie][coloralum].contramarco+
    (materiales.perfilesvarios.anguloEscuadra/600)*(5*(4+intermedios*2))+(Indalum[serie][coloralum].junquillo/600)*(4*(ancho+alto))

    const g_herrajes=(materiales.vinilrollo.vinil11/60)*(2*(alto/100+ancho/100))+materiales.selladores.acrilastic+materiales.herrajes.chaparesidencial
    +materiales.herrajes.bisagrasresidencial

    console.log('aluminio:', g_aluminio)
    console.log('herrajes:', g_herrajes)
    console.log('vidrio:', g_vidrio)
    const total = g_aluminio+g_herrajes+g_vidrio;

    return  g_aluminio+g_herrajes+g_vidrio;
}

function cot_puertamosquitero(alto, ancho, coloralum, tipoMalla){
    let g_malla;
    if(tipoMalla=='mosquired'){g_malla=materiales.mallas.mosquired}
    else if(tipoMalla=='metalica'){g_malla=materiales.mallas.mosquiterometal*(alto/100)*(ancho/100)}
    else{
        g_malla=materiales.mallas.mosquitero*(alto/100)*(ancho/100)
    }

    const g_aluminio=(materiales.mosquitero[coloralum].colgante/600)*(alto*2+ancho*3)+(materiales.perfilesvarios[coloralum].silla/600)*(alto*2+ancho)
    const g_herrajes=materiales.herrajes.bisaeuro+50

    const total= g_aluminio+g_malla+g_herrajes
    return total;
}

module.exports={cotizadorPuerta3in, cot_g_duela , cot_Puertaunatrescuartos, cot_puertasduela, cot_PuertaSerie, cot_puertamosquitero}