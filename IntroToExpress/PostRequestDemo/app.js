var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true})); // go to the docs to understand this.
app.set("view engine", "ejs");

var friends = ["Tony", "Alyssa", "Fernando", "Frank", "Naila", "John", "Jorge"];

/** ROUTES - Gets **/
app.get("/", function(req, res) {
   res.render("home"); 
});

app.get("/friends", function(req, res) {
   res.render("friends", {friends: friends}); 
});

/** ROUTES - Posts **/
app.post("/addfriend", function(req, res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

/** Starting the Server **/
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started...");
});