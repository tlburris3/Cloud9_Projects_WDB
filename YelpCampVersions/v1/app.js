var express = require('express');
var app = express();

app.set("view engine", "ejs");

/** ROUTES **/
// Root Route - Landing Page
app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
   var campgrounds = [
       {name: "Salmon Creek", image: "https://pixabay.com/get/ec31b90f2af61c22d2524518b7444795ea76e5d004b0144390f3c67aa3ebb3_340.jpg"},
       {name: "Granite Hill", image: "https://pixabay.com/get/ea36b40a2efd083ed1584d05fb1d4e97e07ee3d21cac104497f5c27ea4e9b3be_340.jpg"},
       {name: "Billy Goat Escavade", image: "https://pixabay.com/get/ea36b7062bf6093ed1584d05fb1d4e97e07ee3d21cac104497f5c27ea4e9b3be_340.jpg"}
   ]; 
   res.render('campgrounds', {campgrounds: campgrounds});
});

/** Starting the Server **/
app.listen(process.env.PORT, process.env.ID, function() {
    console.log("Server for YelpCamp_Versions started...");
});