//CREATE USER
const express = require("express")
const router=express.Router()
const {createUser}=require("../controllers/Users")
require("dotenv").config()


router.post("/", createUser)
   

    module.exports=router;