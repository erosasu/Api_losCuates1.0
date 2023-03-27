const jwt = require('jsonwebtoken');
const modelo = require('../models/cotizacion');
require('dotenv').config()

const {descomponerMensaje} = require('../../core/funciones/descomposicionDescripcion');

let contadorCotizaciones=0;

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

    cotizar:(req, res)=>{
        contadorCotizaciones=contadorCotizaciones+1;
        const data = req.body;

        if(!data.cliente||!data.descripcion){
            res.status(400).send('Faltaron datos, regresa a la pagina anterior para completar la información')
            return;
        }else if(!/\d+.?\d? x \d+.?\d?/.test(data.descripcion)){
            res.status(400).send('Falto que especificaras las medidas o las introdujiste incorrectamente, intenta de nuevo')
            return
        }
        
        const today = new Date()
        
        const Productos= descomponerMensaje(data.descripcion)
        
        console.log(Productos)

    let sumatoriaPorcentajes=0;
    let gasto=0;
    let totalsinIva=0;
    //sumar gastos unitarios
    for(let i=0;i< Productos.length;i++){
        gasto+=Productos[i].gastomaterial
        totalsinIva+=Productos[i].importe
        sumatoriaPorcentajes+=Productos[i].porcientoganancia 
    }
    
    


    const porcentajeGananciaPromedio=sumatoriaPorcentajes/(Productos.length)

        
        data.fechaCreacion = `${today.getDate()}/${(today.getMonth()+1)}/${today.getFullYear()}`
        data.Gasto= gasto
        data.porcentajeGanancia= porcentajeGananciaPromedio;
        data.precioCliente= totalsinIva;  
        data.productos=Productos 
        data.noCotizacion=contadorCotizaciones

        if(data.descuento==null){
            console.log('entro a descuento null')
            data.descuento=0;
        }    
       
        modelo.create(data).then(response =>{
            const {productos, fechaCreacion, cliente, precioCliente, domicilio, celular, descuento, noCotizacion} = response; 
            res.json({productos, fechaCreacion,cliente, precioCliente, domicilio, celular, descuento, noCotizacion} );
        }).catch(err=>{
            console.log(err)
            res.render(`confirmacion`, {error:true,  cliente: data.cliente, descripcion: data.descripcion})
        }) 
    },
    formCotizar:(req, res)=>{
        res.render('cotizacion');
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
    },
    registrarCotizacion:(req, res)=>{

    },
    formRegistrarCotizacion:(req, res)=>{
        res.render('registroCotizacion')
    }
}