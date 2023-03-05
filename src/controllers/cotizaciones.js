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
        }
        var today = new Date();
        
        const cotizacion= descomponerMensaje(data.descripciones)

        console.log(cotizacion)
        
        data.fecha = `${today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()}`
        data.gasto= cotizacion.g_total
        data.porcentajeGanancia= cotizacion.por_ganancia;
        data.precioCliente= cotizacion.precio;
        data.sub_descripciones=cotizacion.subdescripciones;
        data.gastosUnitarios=cotizacion.g_unitarios;
        data.descripcion = data.descripciones
        
       
        modelo.create(data).then(response =>{
            const {gasto, porcentajeGanancia, precioCliente, sub_descripciones, gastosUnitarios , cliente} = response;
            res.render('confirmacion', {cliente, gasto, porcentajeGanancia, precioCliente, sub_descripciones, gastosUnitarios} );
        }).catch(err=>{
            console.log(err)
            res.render('confirmacion', {error:true,  cliente: data.cliente, descripcion: data.descripcion})
        })
    },
    formRegistro:(req, res)=>{
        res.render('registro');
    }   

}