const { materiales } = require('../precios')


function cot_proyeccion(alto, ancho, coloralum, g_vidrio){

    const g_herrajes= materiales.herrajes.operador+materiales.herrajes.bisaeuro+70
    const g_aluminio=((materiales.proyeccion[coloralum].marco/600)+(materiales.proyeccion[coloralum].contramarco/600))*(alto*2+ancho*2)
    const g_mosquitero= (materiales.mosquitero[coloralum].solera/605)*(alto*2+ancho*2)+50

    const total = g_aluminio+g_herrajes+g_mosquitero+g_vidrio;

    console.log('herrajes:', g_herrajes);
    console.log('aluminio:', g_aluminio);
    console.log('mosquitero:',g_mosquitero);

    return total;
}

module.exports = {cot_proyeccion}