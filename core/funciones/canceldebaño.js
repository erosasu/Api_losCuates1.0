const {materiales}= require('../precios')
const { cot_vidrio }= require('./vidrio')

function g_plastico(ancho){
    let g_plastico;
    if(ancho<107){
        g_plastico=materiales.laminas.plastico.pla100x180
    }
    else if(ancho<127){
        g_plastico=materiales.laminas.plastico.pla120x180
    }
    else if(ancho<157){
        g_plastico=materiales.laminas.plastico.pla150x180
    }else if(ancho<170){
        g_plastico=materiales.laminas.plastico.pla80x180*2
    }
    return g_plastico

}

function g_acrilico(alto, ancho){
    let g_acrilico;
    if(ancho<96&&alto<190){
        g_acrilico=materiales.laminas.acrilico.acri90x180}

    else if(ancho<126&&alto<190){
        g_acrilico=materiales.laminas.acrilico.acri120x180}

    else if(ancho<156&&alto<190){
        g_acrilico=materiales.laminas.acrilico.acri150x180}

    else if((ancho<186&&alto<250)||(ancho<246&&alto<190)){
        
        g_acrilico=materiales.laminas.acrilico.acri180x240}

        return g_acrilico;
}




const cot_cancelbaño = (coloralum, alto, ancho, g_lamina, tipocancel)=>{
    let g_aluminio
    let g_herrajes
    let total
   
    if(tipocancel='escruadra'){        
    g_aluminio=(alto/550)*(materiales.cancel_baño[coloralum].marco_semilujo*4+materiales.cancel_baño[coloralum].jambabaño)+
    (ancho/607)*(materiales.cancel_baño[coloralum].riel+materiales.cancel_baño[coloralum].guia+materiales.cancel_baño[coloralum].marco_semilujo*2)
    }else{
        g_aluminio=(alto/550)*(materiales.cancel_baño[coloralum].marco_semilujo*4+materiales.cancel_baño[coloralum].jambabaño*2)+
        (ancho/607)*(materiales.cancel_baño[coloralum].riel+materiales.cancel_baño[coloralum].guia+materiales.cancel_baño[coloralum].marco_semilujo*2)
    }
    g_herrajes=materiales.herrajes.carrecancel*4+materiales.herrajes.tornillo*8+materiales.selladores.silicon
    console.log('gasto aluminio:'+g_aluminio)
    console.log('gasto lamina:'+g_lamina)
    console.log('gasto herrajes:'+g_herrajes)
    total=g_aluminio+g_lamina+g_herrajes
    return total
}

module.exports={cot_cancelbaño, g_acrilico, g_plastico}