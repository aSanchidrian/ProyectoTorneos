const express = require("express")
const router=express.Router()
const {changeParams}=require("../controllers/Users")
require("dotenv").config()


router.post("/", changeParams)

module.exports=router;