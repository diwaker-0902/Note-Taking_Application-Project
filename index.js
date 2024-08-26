
const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());                                        // inhi dono lines ko hum parsers kehh rahe hain
app.use(express.urlencoded({ extended: true }));                // inhi dono lines ko hum parsers kehh rahe hain

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    res.render("index");        // yaha par koyi sa bhi page likhenge jo ki views main ho. (index.ejs wala index likha hain ye)
})

app.get("/profile/:username", function (req, res) {
    res.send(req.params.username);
})

app.get("/profile/:username/:25", function (req, res) {
    res.send(req.params); // req.params is an object
    // or  res.send(req.params.username), (req.params.age);
});

app.listen(3000, function () {              // The error EADDRINUSE indicates that port 3000 is already in use.
    console.log("Server is running")
});



