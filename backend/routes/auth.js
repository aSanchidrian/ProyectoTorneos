const express = require("express");

const router = express.Router()

const {login, createUser,getUsers,deleteUser} = require("../controllers/Users")
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

router.get("/getUsers", getUsers);
router.get("/delete/:nickname",deleteUser);

router.post("/register", createUser) 
// REGISTER PAGE - END

module.exports = router