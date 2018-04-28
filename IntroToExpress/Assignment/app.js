var express = require("express");
var app = express();

/*=============*/
/*    ROUTES   */
/*=============*/
/* Route 1 - "/" */
app.get("/", function(req, res) {
   res.send("Hi there, welcome to my assignment!"); 
});
/* Route 2 - "/speak/:animal" */
app.get("/speak/:animal", function(req, res) {
   var animal = req.params.animal.toLowerCase();
   var sounds = {
       pig: "Oink!",
       cow: "Moo!",
       dog: "Woof!",
       cat: "I hate you...",
       fish: "blup.."
   };
   
   res.send("The " + animal + " says " + sounds[animal]);
});
/* Route 3 - "/repeat/:word/:number" */
app.get("/repeat/:word/:number", function(req, res) {
    var str = "";
    
    for (var i = 0; i < req.params.number; i++) {
       str += req.params.word + " ";
    }
    
    res.send(str);
});

/* Default Route */
app.get("*", function(req, res) {
    res.send("Sorry, page not found!");
})

/* Starting Server */
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started...");
});