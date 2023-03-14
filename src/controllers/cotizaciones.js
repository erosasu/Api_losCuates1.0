const jwt = require('jsonwebtoken');
const modelo = require('../models/cotizacion');
require('dotenv').config()

const {descomponerMensaje} = require('../../core/funciones/descomposicionDescripcion');

module.exports={
    login:(req, res)=>{
       const data = req.body

       const credenciales={
        correo:data.correo,
        password: hashPassword(data.password)
       }

       if(credenciales.correo && credenciales.password){
       modelo.findOne(credenciales)
       .then(response =>{
        if(response){
            console.log(response);
            const {_id, nombre, correo} = response;
            const token = jwt.sign({_id, nombre}, process.env.SECRET);
            res.send({token, nombre, correo})
        }else{
            res.sendStatus(401)
        }
       })
       .catch(err=>{
            res.sendStatus(400);
       }) }
       else{
        res.sendStatus(400)
       }
    },

    registro:(req, res)=>{
        const data = req.body;

        if(!data.cliente||!data.descripciones){
            res.status(400).send('Faltaron datos')
            return;
        }else if(!/\d+.?\d? x \d+.?\d?/.test(data.descripciones)){
            res.status(401).send('Falto que especificaras las medidas o las introdujiste incorrectamente, intenta de nuevo')
            return
        }
        else if(/mosquitero/i.test(data.descripciones)&&!/corredizo?/i.test(data.descripciones)){
            res.send('Falto especificar si es corredizo o fijo el mosquitero ')
            return
        }
        var today = new Date();
        
        const cotizacion= descomponerMensaje(data.descripciones)

        console.log(cotizacion)
        
        data.fechaCreacion = `${today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}`
        data.gasto= cotizacion.g_total
        data.porcentajeGanancia= cotizacion.por_ganancia;
        data.precioCliente= cotizacion.precio;
        data.sub_descripciones=cotizacion.subdescripciones;
        data.gastosUnitarios=cotizacion.g_unitarios;
        data.descripcion = data.descripciones
       
        modelo.create(data).then(response =>{
            const {gasto, porcentajeGanancia, precioCliente, sub_descripciones, gastosUnitarios , cliente, _id} = response;
            res.render('confirmacion', {cliente, gasto, porcentajeGanancia, precioCliente, sub_descripciones, gastosUnitarios, _id} );
        }).catch(err=>{
            console.log(err)
            res.render(`confirmacion`, {error:true,  cliente: data.cliente, descripcion: data.descripcion})
        }) 
    },
    formRegistro:(req, res)=>{
        res.render('registro');
    },
    aceptarCotizacion:(req, res)=>{

        const id = req.params.id;
        const aceptada= req.body.aceptada;
        
        modelo.findOne({ _id:id})
        .then(data=>{
            console.log(data)
            data['aceptada'] = aceptada
            data.save();
            
            if(aceptada=='true'){
            res.send('Se cambio la cotizacion a ACEPTADA')
            }
            else {
            res.send('La cotizacion quedo registrada como RECHAZADA')
            }
        })
        .catch(err=>{
            res.status(400).send('No se actualizo la cotizacion por lo tanto se registro como RECHAZADA')
        })
    }
}