var express = require("express");
var app = express();

app.use(express.static("public")); // Now including the "public" directory's files.
app.set("view engine", "ejs");  // Assumes every file rendered will be a .ejs file,
                                // Unless otherwise noted.

/** ROUTES **/
app.get("/", function(req, res) {
    var type = req.params.type;
    res.render("home.ejs");
});

app.get("/fallinlovewith/:dog", function(req, res) {
   var dogType = req.params.dog;
   res.render("love.ejs", {dogType, dogType});
});

app.get("/posts", function(req, res) {
   var posts = [{title: "post 1", author: "Susy"},
                {title: "Simple Addition to Life", author: "Charlie"},
                {title: "Finding the Answer", author: "Terry"}
                ];
   res.render("posts.ejs", {posts, posts});
});

/** Starting the server **/
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Server started...");
});