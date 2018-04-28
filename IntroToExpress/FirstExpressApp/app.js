var express = require("express");
var app = express();

app.get("/", function(req, res) {
    console.log("REACHED / LINK!");
   res.send("Hello there!"); 
});

app.get("/bye", function(req, res) {
    console.log("REACHED /bye LINK!");
  res.send("Goodbye for now!"); 
});

app.get("/dog", function(req, res) {
    console.log("REACHED /dog LINK!");
  res.send("WOOF!"); 
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started...");
});