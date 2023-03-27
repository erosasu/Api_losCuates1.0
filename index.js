const express = require('express');
const  mongoose  = require('mongoose');
const {engine} = require('express-handlebars')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config();

//initializations
const app = express();


//configuraciones handlebars
app.engine('handlebars', engine({
    partialsDir: __dirname+'/src/views/partials',
    helpers: require('./src/lib/handlebars')
}))
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/src/views')
app.use(cors())
app.use( express.static(__dirname + './src/public'))
app.use('/fotos', express.static(__dirname + '/archivos'))
app.use('/assets', express.static(__dirname + '/assets'))

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routes
app.use(require('./src/routes'))
app.use(require('./src/api.js'))
app.use(require('./src/routes/authentication'))
app.use('/links', require('./src/routes/links'))

const port = process.env.PORT||3000;

app.get('', (req, res)=>{
    //res.sendFile(__dirname+'/src/views/index.html')
    res.render('index')
})

const uri = process.env.MONGODB

mongoose.set('strictQuery', true);
mongoose.connect(uri, async (err,)=>{
    //error-first callback
    
    if(err){
        console.log('No se pudo conectar a mi base de datos')
    }else{
        console.log('se conecto a base de datos '+port)
        app.listen(port, ()=>{
            console.log('app is runnin in port ' +port)
        });
    }
 });





