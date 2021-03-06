var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var campgrounds = [
   {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2015/07/10/17/24/night-839807_960_720.jpg"},
   {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2018/04/27/19/52/snow-3355699_960_720.jpg"},
   {name: "Billy Goat Escavade", image: "https://cdn.pixabay.com/photo/2018/05/02/18/36/tent-3369328_960_720.jpg"},
   {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2015/07/10/17/24/night-839807_960_720.jpg"},
   {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2018/04/27/19/52/snow-3355699_960_720.jpg"},
   {name: "Billy Goat Escavade", image: "https://cdn.pixabay.com/photo/2018/05/02/18/36/tent-3369328_960_720.jpg"}
]; 

/** ROUTES **/
// Root Route - Landing Page
app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
   // Show the campgrounds
   res.render('campgrounds', {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) { /** RESTful Routing - just the basics so far **/
   // get data from form and add to campgrounds array
   var campName = req.body.name;
   var campImage = req.body.image;
   var newCampGround = {name: campName, image: campImage};
   campgrounds.push(newCampGround);
   // redirect back to campgrounds page - automatically redirected to the app.get() route!
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
   // show form to submit the post request
   res.render("new");
});

/** Starting the Server **/
app.listen(process.env.PORT, process.env.ID, function() {
    console.log("Server for YelpCamp_Versions v1 started...");
});