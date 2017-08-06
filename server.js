var express = require("express");
var db = require("./models"); 
// the above var could have been written as: var db = require("./models/index")

var port = process.env.PORT || 3000;
var app = express ();

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening to port %s", PORT)
    });
});