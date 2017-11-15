var express     = require("express");
var router      = express.Router();
// var passport    = require("passport");

// ROOT ROUTE
router.get("/", function(req, res){
    res.render('index');
});
// END ROOT ROUTE

module.exports = router;
