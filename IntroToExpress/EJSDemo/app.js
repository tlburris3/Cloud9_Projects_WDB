var express = require("express");
var app = express();

/** ROUTES **/
app.get("/", function(req, res) {
   res.send("<h1>Welcome to the homepage!</h1>" +
            "<h2>New line</h2>");
            
    res.render("home.ejs");
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Server started...");
});