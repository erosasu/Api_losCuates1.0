const { materiales } = require('../precios')


function cot_fija(alto, ancho, coloralum, tipo, g_vidrio, divicion){

    console.log(coloralum)
    console.log(tipo)

    let g_aluminio=(materiales.fija[tipo][coloralum].bolsa/600)*(ancho+2*alto)+ancho*((materiales.fija[tipo][coloralum].escalonado/600)+(materiales.fija[tipo][coloralum].junquillo2/600))
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

function cot_FijaEspañola(alto, ancho, coloralum, g_vidrio, serie){
    const g_aluminio=((materiales.fija[serie][coloralum].marcobatiente/600)+
    (materiales.fija[serie][coloralum].junquillo/600))*(alto*2+ancho*2);
    const g_herrajes=materiales.fija[serie][coloralum].escuadra*4+materiales.herrajes.vinil11

    const total= g_aluminio+g_herrajes+g_vidrio
    return total;
}

function cot_fijaSifon(alto, ancho, coloralum, g_vidrio){

    const g_aluminio=(materiales.tubular[coloralum]['2x1']/600)*(alto*2+ancho*2)+30
    const g_mosquitero=(materiales.mosquitero[coloralum].solera/600)*(alto+ancho*2)+60
    const g_adesivos = materiales.selladores.acrilastic+(materiales.selladores.norton/3000)*(alto*2+ancho*2)

    console.log('gasto alumini', g_aluminio);
    console.log('gasto mosquitero', g_mosquitero)
    console.log('gasto adesivos', g_adesivos)
    console.log('gasto vidrio', g_vidrio)
    total=g_aluminio+g_mosquitero+g_adesivos+g_vidrio
    return total;
}

module.exports= {cot_fija, cot_FijaEspañola, cot_fijaSifon}