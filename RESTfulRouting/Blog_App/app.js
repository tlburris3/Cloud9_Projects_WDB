var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");
var app = express();

// App Config.
mongoose.connect("mongodb://localhost/restful_blog_app");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Mongoose/Model Config.
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Test Blog",
//     image: "https://farm9.staticflickr.com/8525/8546357078_fc1929a4d6.jpg",
//     body: "Hello this is a blog post!",
// }); 

/** RESTful Routes **/
// Root Route
app.get("/", function(req, res) {
   res.redirect("/blogs");
});

// INDEX route - List all blogs
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err)
            console.log(err);
        else
            res.render("index", {blogs: blogs});
    });
});

// NEW route - Show new blog form
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

// CREATE route - Add new blog to DB
app.post("/blogs", function(req, res) {
   // Create the blog
   Blog.create(req.body.blog, function(err, newBlog) {
       if (err)
           res.render("new");
       else
           // Redirect to index
           res.redirect("/blogs");
   });
});

// SHOW route - Shows more about one blog
app.get("/blogs/:id", function(req, res) {
    // Find the blog in DB
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err)
            res.redirect("/blogs");
        else
            // Render the show page!
            res.render("show", {blog: foundBlog});
    });
});

/** Starting the server **/
app.listen(process.env.PORT, process.env.ID, function() {
   console.log("Server for Blog App started..."); 
});