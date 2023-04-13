
const {materiales, Indalum} =  require('../precios')

function cot_serie4000(alto, ancho, gastovidrio, mosquitero, cant_hojas, coloralum,serie){

    let g_mosquitero=0;
    
    const g_perimetro=(Indalum[2500].griseuropa.riel/600)*(alto*2+ancho*2)
    const g_hojas=(Indalum[2500].griseuropa.hoja/600)*(ancho*2+alto*2*cant_hojas)+
    (Indalum[2500].griseuropa.tapatraslape/600)*(alto*(cant_hojas))
    let g_herrajes=Indalum[2500].griseuropa.carretilla*2+Indalum[2500].griseuropa.escuadra*cant_hojas*4+Indalum[2500].griseuropa.escuadra*8+
    materiales.selladores.acrilastic+materiales.herrajes.embutir4000

    if(mosquitero){
    g_mosquitero=(Indalum[2500].griseuropa.mosquitero/600)*(alto*2+(ancho/cant_hojas)*2);
    g_herrajes+=Indalum[2500].griseuropa.carretilla*2+Indalum[2500].griseuropa.escuadra*4
    }

    console.log('perimetro:', g_perimetro)
    console.log('hojas', g_hojas)
    console.log('mosquitero', g_mosquitero),
    console.log('herrajes:', g_herrajes)
    const total = g_herrajes+g_hojas+g_perimetro+gastovidrio+g_mosquitero
    return total;
}

module.exports= {cot_serie4000}