var express     = require("express");
var router      = express.Router();
// var passport    = require("passport");

// ROOT ROUTE
router.get("/", function(req, res){
    res.render('index');
});
// END ROOT ROUTE

// ABOUT ROUTE
router.get("/about", function(req, res) {
    res.render('about');
});
// END ABOUT ROUTE

module.exports = router;
