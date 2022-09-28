require('dotenv').config();
const mysql = require('mysql');


const conexion  = mysql.createConnection({

    host : process.env.host || 'localhost',
    user : process.env.user || 'root',
    password : process.env.password || '123',
    port : process.env.port || 3306,
    database : process.env.database || 'klaussebas'

});


conexion.connect((err)=>{
    if(err){
        console.log('Error : '+err);
    }else{
        console.log('BD conectada');
    }
   // console.log('connected as id ' + conexion.threadId);
});





module.exports =  conexion ;



