const express = require('express')
const router = require('express').Router()

const auth = require('./middlewares/auth')
const {upload} = require('./middlewares/imageStorage.js')

const contactoControlles = require('./controllers/contactos.js')
const cotizacionesControlles = require('./controllers/cotizaciones.js');


router.post('/confirmacion/:id', express.json(), cotizacionesControlles.aceptarCotizacion )

//usuario
router.post('/cotizar',upload.single('archivo'), express.json(), cotizacionesControlles.cotizar)
router.get('/cotizar',  cotizacionesControlles.formCotizar)

router.post('/registrocotizacion',upload.single('archivo'), express.json(), cotizacionesControlles.registrarCotizacion)
router.get('/registrocotizacion',  cotizacionesControlles.formRegistrarCotizacion)

router.get('/api', (req, res)=>{
    res.json({'users':['Userone', 'userTwo','usertree']})
})

module.exports = router;