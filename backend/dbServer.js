const express = require("express")
const app = express()
const path = require('path')
const mysql = require("mysql")
const conection=require("./connection")
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser');

require("dotenv").config()

app.use(express.json())

// CONEXIÓN BD - START
db = conection

db.getConnection( (err, connection)=> {
   if (err) throw (err)
   console.log ("DB connected successful: " + connection.threadId)
})
// CONEXIÓN BD - END

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CONFIG DE VISTAS - START
app.set('views', path.join(__dirname, 'views'))

nunjucks.configure('views', {
   autoescape: true,
   express: app
});

var indexRouter = require('./routes/index')
var authRouter = require('./routes/auth')
app.use('/', indexRouter)
app.use('/auth', authRouter)
// CONFIG DE VISTAS - END

const port = process.env.PORT
<<<<<<< HEAD
app.listen(port,  
()=> console.log(`Server Started on port ${port}...`))


//module.exports={db}
//middleware to read req.body.<params>
=======
app.listen(port, () => console.log(`Server Started on port ${port}...`))
>>>>>>> 5eb4c472729c6f25b0e1c165c726e3b22304eb06
