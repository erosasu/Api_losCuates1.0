const express = require('express')
const router = require('express').Router()

const auth = require('./middlewares/auth')
const {upload} = require('./middlewares/imageStorage.js')

const contactoControlles = require('./controllers/contactos.js')
const cotizacionesControlles = require('./controllers/cotizaciones.js');


router.post('/confirmacion/:id', express.json(), cotizacionesControlles.aceptarCotizacion )

//usuario
router.post('/cotizar',upload.single('archivo'), express.json(), cotizacionesControlles.registro)
router.get('/cotizar',  cotizacionesControlles.formRegistro)

module.exports = router;