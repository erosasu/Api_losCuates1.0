
const {materiales} =  require('../precios')

function cot_serie4000(alto, ancho, gastovidrio, mosquitero, cant_hojas, coloralum,serie){

    const  cant_riel2=0, cant_riel3=0, cant_mos=0, cant_adapt= 0;
    let g_mosquitero=0;
    let viasriel='2'

    if(cant_hojas==2&&mosquitero==false){
        viasriel='2';
    }
    else if(cant_hojas==2&&mosquitero==true){
        viasriel='3';
    }
    else if(cant_hojas==3&&mosquitero==false){
        viasriel='3';
    }
    else if(cant_hojas==3&&mosquitero==true){
        viasriel='3';
    }

    const g_perimetro=(materiales.corrediza[serie][coloralum].riel[viasriel]/600)*(alto*2+ancho*2)
    const g_hojas=(materiales.corrediza[serie][coloralum].hojaventana/600)*(ancho*2+alto*2*cant_hojas)+
    (materiales.corrediza[serie][coloralum].traslape/600)*(alto*(cant_hojas+1))
    let g_herrajes=materiales.corrediza[serie][coloralum].carrehoja*cant_hojas*2+
    materiales.corrediza[serie][coloralum].escuadrahoja*cant_hojas*4+
    materiales.corrediza[serie][coloralum].escuadrariel*8+materiales.herrajes.vinil11+materiales.selladores.acrilastic*2+materiales.herrajes.embutir4000

    if(mosquitero){
    g_mosquitero=(materiales.corrediza[serie][coloralum].hojamosqui/600)*(alto*2+(ancho/cant_hojas)*2);
    g_herrajes+=materiales.corrediza[serie][coloralum].carremosqui*2+materiales.corrediza['serie4000']['blanco'].escuadrahoja*4
    }

    console.log('perimetro:', g_perimetro)
    console.log('hojas', g_hojas)
    console.log('mosquitero', g_mosquitero),
    console.log('herrajes:', g_herrajes)
    const total = g_herrajes+g_hojas+g_perimetro+gastovidrio+g_mosquitero
    return total;
}

module.exports= {cot_serie4000}