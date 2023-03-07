const express = require('express')
const router = require('express').Router()

const connected = require('../database')

router.get('/add', (req, res)=>{
    res.send('form')
})

module.exports = router