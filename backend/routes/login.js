const express = require("express")
const router = express.Router()

const {login} = require("../controllers/Users")
require("dotenv").config()

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login.html');
});

router.post("/", login) 

module.exports = router