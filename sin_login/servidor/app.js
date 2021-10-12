import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import path from 'path';

const app = express();

//Conexion a la base de datos

const mongoose = require('mongoose');

const uri = 'mongodb+srv://user_jadt:Julio9502@comienzomongo.ibuqh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; 
const options = {useNewUrlParser: true, useUnifiedTopology: true};
//Conexion a base de datos
mongoose.connect(uri, options).then( 
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */ 
    () => { console.log('Conectado a DB') }, 
    /** handle initial connection error */ 
    err => { console.log(err) 
} );


//Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Rutas
app.use('/chatas', require('./routes/rutas-usuario'));

const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public')));

//Puerto servidor
app.set('puerto', process.env.PORT || 3000); 
app.listen(app.get('puerto'), function () { 
    console.log('Example app listening on port'+ app.get('puerto')); 
});