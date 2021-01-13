const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: rhino@rhino.com");
});

app.get("/about", function(req, res){
    res.send("<h2>I'm an albino Rhino!</h2>");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Code</li><li>Coding</li><li>Beer</li></ul>");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});