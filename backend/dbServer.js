const express = require("express")
const app = express()
const mysql = require("mysql")
const conection=require("./connection")
require("dotenv").config()

db=conection

db.getConnection( (err, connection)=> {
   if (err) throw (err)
   console.log ("DB connected successful: " + connection.threadId)
})
app.use(express.json())
app.use("/api", require("./routes")) 

const port = process.env.PORT
app.listen(port, 
()=> console.log(`Server Started on port ${port}...`))


//module.exports={db}
//middleware to read req.body.<params>
