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
   image: String,
   description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//    {
//       name: "Granite Hill",
//       image: "https://farm5.staticflickr.com/4100/4798314980_bc31231984.jpg",
//       description: "A place that is terrifying to look at, but brings you freedom when at the top!" 
//    }, 
//    function (err, cg) {
//       if (err)
//          console.log("ERROR: " + err);
//       else
//          console.log("Added a new campground: " + cg);
//    }
// );

/** ROUTES **/
// Root Route - Landing Page
app.get("/", function(req, res) {
    res.render("landing");
});

// INDEX route - show all campgrounds
app.get("/campgrounds", function(req, res) {
   // Get all campgrounds from DB, then render file.
   Campground.find({}, function(err, allCampgrounds) {
      if (err)
         console.log("ERROR: " + err);
      else
         res.render('index', {campgrounds: allCampgrounds});
   });
   
   // Show the campgrounds
   // res.render('campgrounds', {campgrounds: campgrounds});
});

// CREATE route - add new campground to DB
app.post("/campgrounds", function(req, res) { /** RESTful Routing - just the basics so far **/
   // get data from form
   var campName = req.body.name;
   var campImage = req.body.image;
   var campDesc = req.body.description;
   var newCampGround = {name: campName, image: campImage, description: campDesc};
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

// NEW route - show form to create new campground
app.get("/campgrounds/new", function(req, res) {
   // show form to submit the post request
   res.render("new");
});

// SHOW - shows info about one campground
app.get("/campgrounds/:id", function(req, res) {
   // find the campground with provided ID
   Campground.findById(req.params.id, function(err, foundCampground) {
      if (err) {
         console.log(err);
      } else {
         // render show template with that campground
         res.render("show", {campground: foundCampground});
      }
   });
});

/** Starting the Server **/
app.listen(process.env.PORT, process.env.ID, function() {
    console.log("Server for YelpCamp_Versions v2 started...");
});