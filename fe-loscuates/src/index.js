import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const express = require('express');
const apiRoutes = require('../../src/api')
const  mongoose  = require('mongoose');

app.use(apiRoutes)

const {composicion_producto } = require('../../core/funciones/descomp_sub.js')

const app = express();

app.use(express.urlencoded());
app.use(express.json());

uri ='mongodb+srv://ernierous:cuantum47@cluster0.3m7828i.mongodb.net/clientes?retryWrites=true&w=majority'

mongoose.connect(uri, async (err,)=>{
   //error-first callback
   if(err){
       console.log('No se pudo conectar a mi base de datos')
   }else{
       console.log('se conecto a base de datos '+port)
      
   }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

