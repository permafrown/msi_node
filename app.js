// =============================
//      GENERAL CONFIG
// =============================
// MODULE VARIABLES
var express                 = require("express");
var bodyParser              = require("body-parser");
var flash                   = require("connect-flash");
var passport                = require("passport");
var LocalStrat              = require("passport-local");
var methodOverride          = require("method-override");
var mysql                   = require("mysql");
// END MODULE VARIABLES

// REQUIRING ROUTES
var indexRoutes             = require("./routes/index");
// END REQUIRING ROUTES

// MODELS
// END MODELS

// APP CONFIG
var app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(flash());
app.locals.moment = require("moment");
// END APP CONFIG

// DB CONFIG
var db = mysql.createConnection({
    host: 'localhost:3306',
    user: 'bolt_dbU',
    password: 'eJ4%7y4x',

});

db.connect();

db.query('SELECT * FROM users', function(err, rows, fields) {
    if (err) {
        console.log(err);
    }
    console.log(rows[0]);
});
connection.end();
// END DB CONFIG

// PASSPORT CONFIG
// app.use(require("express-session")({
//     secret: "monkeygerbil piratemeat pantherdestiny",
//     resave: false,
//     saveUninitialized: false
// }));
//
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrat(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
// END PASSPORT CONFIG

// GLOBALS
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   // res.locals.error = req.flash("error");
   // res.locals.success = req.flash("success");
   next();
});
// END GLOBALS


// USE ROUTES
app.use("/", indexRoutes);
// END USE ROUTES

// SEED THE DB
// seedDB();
// END SEED



// =============================
//      LISTENER
// =============================
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("msi_node server is up...");
});
// END LISTENER
