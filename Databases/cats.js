var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app"); // can't find it then will make it.

var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB
// var george = new Cat ({
//   name: "Mrs. Norris",
//   age: 7,
//   temperament: "Evil"
// });

// george.save(function(error, cat) {
//     if (error) {
//         console.log("Error inputing a new cat into the DB...");
        
//     } else {
//         console.log("We just put a cat into the DB: " + cat);
//     }
// });

Cat.create({
    name: "Snow White",
    age: 7,
    temperament: "Bland"
}, function(err, cat) {
    if (err) {
        console.log("ERROR: " + err);
    } else {
        console.log("Adding a cat to the DB: " + cat);
    }
});

// retrieve all cats from the DB and console.log them
Cat.find({}, function(err, cats) {
    if (err) {
        console.log("ERROR: " + err);
    } else {
        console.log("All the cats in the DB: " + cats);
    }
});