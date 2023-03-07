const mongoose = require('mongoose')


const cotizacionSchema = new mongoose.Schema({
    cliente: {type: String, required: true},
    descripcion: {type: String, required: true},
    gasto: {type: Number, required: true},
    porcentajeGanancia: {type: Number, default: 1},
    precioCliente: {type: Number, default: 1},
    fechaCreacion: {type: Date, default: 1},
    gastosUnitarios: {type: Object},
    sub_descripciones :{type:Object},
    contieneArchivo: {type:Boolean, default: false},
    aceptada:{type:Boolean, default: false}
} )

module.exports = mongoose.model('cotizaciones', cotizacionSchema)