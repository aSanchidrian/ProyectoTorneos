const express = require("express")
const router=express.Router()

const {login}=require("../controllers/Users")
require("dotenv").config()

router.post("/",login) 

    module.exports=router;