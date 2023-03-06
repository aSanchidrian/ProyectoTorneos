//CREATE USER
const express = require("express")
const bcrypt = require("bcrypt")
const router=express.Router()
const mysql = require("mysql")
const conection=require("../connection")
require("dotenv").config()

db=conection


console.log("llego a create user")
router.post("/", async (req,res) => {
    //console.log(req)
    const nombre = req.body.nombre;
    const email = req.body.email;
    const nickname = req.body.nickname;
    const deporte=req.body.deporte;
    const horario=req.body.horario;
    const tooken=req.body.tooken;
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    db.getConnection( async (err, connection) => {
       if (err) throw (err)
       const sqlSearch = "SELECT * FROM Usuario WHERE email = ?"
       const search_query = mysql.format(sqlSearch,[email])
       const sqlInsert = "INSERT INTO `Usuario`(`nombre`, `email`, `nickname`, `deporte`, `horario_disponibilidad`, `permisos`, `PASSWORD`) VALUES (?,?,?,?,?,?,?)"
       const insert_query = mysql.format(sqlInsert,[nombre,email,nickname,deporte,horario,"0", hashedPassword])
       // ? will be replaced by values
       // ?? will be replaced by string
     await connection.query (search_query, async (err, result) => {
      if (err) throw (err)
      console.log("------> Search Results")
      console.log(result.length)
      if (result.length != 0) {
       connection.release()
       console.log("------> User already exists")
       res.sendStatus(409) 
      } 
      else {
       await connection.query (insert_query, (err, result)=> {
       connection.release()
       if (err) throw (err)
       console.log ("--------> Created new User")
       console.log(result.insertId)
       res.sendStatus(201)
      })
     }
    }) //end of connection.query()
    }) //end of db.getConnection()
    }) //end of app.post()

    module.exports=router;