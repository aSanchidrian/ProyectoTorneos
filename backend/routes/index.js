var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // if (req.session.loggedin)
    //     res.render('index.html');
    // else
    //     res.redirect('/login');

    res.render('index.html');
    // res.end();
});

module.exports=router