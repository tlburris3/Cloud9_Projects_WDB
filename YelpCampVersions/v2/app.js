var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yelp_camp');
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Schema setup
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

/** ROUTES **/
// Root Route - Landing Page
app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
   // Get all campgrounds from DB, then render file.
   Campground.find({}, function(err, allCampgrounds) {
      if (err)
         console.log("ERROR: " + err);
      else
         res.render('campgrounds', {campgrounds: allCampgrounds});
   });
   
   // Show the campgrounds
   // res.render('campgrounds', {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) { /** RESTful Routing - just the basics so far **/
   // get data from form
   var campName = req.body.name;
   var campImage = req.body.image;
   var newCampGround = {name: campName, image: campImage};
   // Add a campground to the campgrounds array
   // campgrounds.push(newCampGround);
   
   // Create a new campground and save to the database
   Campground.create(newCampGround, function (err, cg) {
      if (err)
         console.log("ERROR: " + err);
      else
         // redirect back to campgrounds page - automatically redirected to the app.get() route!
         res.redirect("/campgrounds");
   });
});

app.get("/campgrounds/new", function(req, res) {
   // show form to submit the post request
   res.render("new");
});

/** Starting the Server **/
app.listen(process.env.PORT, process.env.ID, function() {
    console.log("Server for YelpCamp_Versions v2 started...");
});