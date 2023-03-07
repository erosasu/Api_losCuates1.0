const {materiales} = require('../precios.js')


const cot_vidrio=(tipo_vidrio, grosor_vidrio, proceso_vidrio, alto, ancho, pelicula)=>{

    return (alto/100*ancho/100)*(materiales.cristal[tipo_vidrio][grosor_vidrio][proceso_vidrio]+pelicula)
    
}

module.exports = { cot_vidrio }
