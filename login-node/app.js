import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();


import mogoose from 'mongoose';
/* const uri = 'mongodb://localhost:27017/distribucion-carnicos'; */
const uri = 'mongodb+srv://user_jadt:Julio9502@comienzomongo.ibuqh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const options = {useNewUrlParser:true, useUnifiedTopology:true};

mogoose.connect(uri,options)
    .then(
        ()=>{console.log("Conectado a la DB");},
        err=>{console.log(err);}
    )


app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/users', require('./routes/users'));
app.use('/login', require('./routes/login'));
app.use('/producto', require('./routes/producto'));

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));

app.set('puerto',process.env.PORT || 3000);
app.listen(app.get('puerto'),function(){
    console.log('Example app listening'+ app.get('puerto'));
})