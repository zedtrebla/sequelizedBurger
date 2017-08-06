var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models/");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
}):

router.get("/burgers", function(req, res) {
db.Burger.findAll ()
  .then(function(dbBurger) {
    console.log(dbBurger);
    var hbsObject = { burgers: dbBurger };
    return res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  })
    .then(function(dbBurger) {
      console.log(dbBurger;
      res.redirect("/");
  });
});


router.put("/burgers/update", function(req, res) {
  db.Burger.update({
    devoured: true 
  },
   {
     where: {
       id: req.body.burger_id
     }
   }
  ).then(function(dbBurger) {
    res.redirect("/")
    });
  });

// Export routes for server.js to use.
module.exports = router;