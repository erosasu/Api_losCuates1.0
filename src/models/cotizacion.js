const mongoose = require('mongoose')


const cotizacionSchema = new mongoose.Schema({
    cliente: {type: String, required: true},
    descripcion: {type: String, },
    productos:{type:Object},
    Gasto: {type:Number},
    porcentajeGanancia: {type: Number, default: 1},
    precioCliente: {type: Number },
    fechaCreacion: {type: String, default: 1},
    gastosUnitarios: {type: Object},
    contieneArchivo: {type:Boolean, default: false},
    domicilio:{type:String},
    celular:{type: Number},
    aceptada:{type:Boolean, default: false},
    descuento:{type:Number, default:0},
    noCotizacion:{type:Number,require:true},
} )

module.exports = mongoose.model('cotizaciones', cotizacionSchema)