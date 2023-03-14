const { materiales } = require('../precios')


function cot_fija(alto, ancho, coloralum, tipo, g_vidrio, divicion){

    console.log(coloralum)
    console.log(tipo)

    let g_aluminio=(materiales.fija[tipo][coloralum].bolsa/600)*(ancho+2*alto)+(ancho*(materiales.fija[tipo][coloralum].escalonado/600)+(materiales.fija[tipo][coloralum].junquillo2/600))
    if(divicion==1){
        g_aluminio+=((materiales.fija[tipo][coloralum].bolsa/600)+(materiales.fija[tipo][coloralum].tapabolsa/600))*(alto)
    }
    else if(divicion==2){
        g_aluminio+=((materiales.fija[tipo][coloralum].bolsa/600)+(materiales.fija[tipo][coloralum].tapabolsa/600))*(alto)*2
    }

    const g_herrajes= materiales.selladores.acrilastic+80

    const total= g_aluminio+g_vidrio+g_herrajes
    return total;
}

module.exports= {cot_fija}