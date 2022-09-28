


const express = require('express');
require('./config/conexion');
const router = require('../API/routes/rutas');
const cors = require('cors');


const port = ( 3000);

//express
const app = express();
//Admitir
app.use(express.json());

app.use(cors());


//config

app.set('port',port);

//rutas
app.use('/api',router);


//Inciar exress
app.listen(app.get('port'), (err) => {
   
   if(err){
    console.log('Error en el servidor');
   }else{
    console.log('servidor :',port);
   }
   
});



