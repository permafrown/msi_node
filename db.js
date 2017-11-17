var express = require("express");
var mysql   = require("mysql");

// DB CONFIG
var connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'bolt_dbU',
    password: 'eJ4%7y4x',
    database: 'bolt_DB'
})

connection.connect(function(err) {
    if (err) {
        console.log("the db connection failed");
    }
    console.log("the db connection was successful");
});

// connection.query('SELECT * FROM users', function(err, rows, fields) {
//     if (err) {
//         console.log("something broke with the query...");
//         console.log(err);
//     }
//     console.log(rows[0]);
// });

connection.end();
// END DB CONFIG
