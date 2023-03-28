const express = require("express")
const router = express.Router()

const {login, createUser} = require("../controllers/Users")
require("dotenv").config()

// LOGIN PAGE - START
router.get('/login', function(req, res, next) {
    res.render('login.html');
});

router.post("/login", login) 
// LOGIN PAGE - END

// REGISTER PAGE - START
router.get('/register', function(req, res, next) {
    res.render('register.html');
});

router.post("/register", createUser) 
// REGISTER PAGE - END

module.exports = router