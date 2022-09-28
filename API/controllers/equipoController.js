const conexion = require('../config/conexion');


const getEquipos = (req,res) =>{
    let sql = 'select * from equipo';
     conexion.query(sql,(error,rows,fields)=>{
        if(error){
            throw error;
        }else{
            res.json(rows);
        }
    });
}

const getEquipo = (req,res) =>{

    const {id} = req.params;
    let sql = 'select * from equipo where id_equipo = ?';
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err){
            throw err;
        }else{
            res.json(rows);
        }
    });
}

const addEquipo = (req,res) =>{

    const {nombre,entrenador,logo} = req.body;
    
    let sql = `insert into equipo(nombre,entrenador,logo) values('${nombre}','${entrenador}','${logo}')`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err){
            throw err;
        }else{
            res.json({status:'equipo agregado'});
         
        }
    });
}


const deleteEquipo = (req,res) =>{
    const {id} = req.params;

    let sql = `DELETE FROM equipo WHERE ID_EQUIPO = '${id}'`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err){
            throw err;
        }else{
            res.json({status:'equipo eliminado'});
        }
    });
}

const editEquipo = (req,res) =>{
    const {id} = req.params;
    const {nombre,entrenador,logo} = req.body;

    let sql = `UPDATE equipo SET NOMBRE = '${nombre}',
                                 ENTRENADOR = '${entrenador}',
                                 LOGO = '${logo}'
                                 WHERE ID_EQUIPO = '${id}'`;

    conexion.query(sql,(err,rows,fields)=>{
        if(err){
            throw err;
        }else{
            res.json({status:'equipo modificado'});
        }
    })
}

module.exports = {
    getEquipos,
    getEquipo,
    addEquipo,
    deleteEquipo,
    editEquipo
}