const {materiales}= require('../precios')

function cot_mosquiteroZ(alto, ancho, coloralum, tipoMalla){
 let g_malla;
    if(tipoMalla=='mosquired'){g_malla=materiales.mallas.mosquired/2}
    else if(tipoMalla=='metalica'){g_malla=materiales.mallas.mosquiterometal*(alto/100)*(ancho/100)}
    else{
        g_malla=materiales.mallas.mosquitero*(alto/100)*(ancho/100)
    }

    const g_aluminio= (materiales.mosquitero[coloralum].mosquiteroZ/600)*2*(alto+ancho)

    const total= g_aluminio+g_malla

    return total;

}

module.exports= {cot_mosquiteroZ}