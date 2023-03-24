const express = require("express")
const app = express()
const path = require('path')
const mysql = require("mysql")
const conection=require("./connection")
const nunjucks = require('nunjucks')

require("dotenv").config()

app.use(express.json())

// CONEXIÓN BD - START
db = conection

db.getConnection( (err, connection)=> {
   if (err) throw (err)
   console.log ("DB connected successful: " + connection.threadId)
})
// CONEXIÓN BD - END

// CONFIG DE VISTAS - START
app.set('views', path.join(__dirname, 'views'))

nunjucks.configure('views', {
   autoescape: true,
   express: app
});

var indexRouter = require('./routes/index')
var loginRouter = require('./routes/login')
app.use('/', indexRouter)
app.use('/login', loginRouter)
// CONFIG DE VISTAS - END

const port = process.env.PORT
app.listen(port, () => console.log(`Server Started on port ${port}...`))
