const express = require("express")
const router=express.Router()
const {changeParams}=require("../controllers/Users")
const authMiddleware = require("../middleware/session");
require("dotenv").config()


router.post("/", authMiddleware,changeParams);

module.exports=router;