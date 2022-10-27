//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var items = ["buy Food", "Cook Food", "Eat Food"];

app.get("/", (req, res)=> {

var today = new Date();


var options = {
  weekday : 'long',
  day : 'numeric',
  month : 'long'
};  
    var day = today.toLocaleDateString("en-US", options);
      res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", (req, res)=> {
 item = req.body.newItem;

 items.push(item);

 res.redirect("/");
});

app.listen(3000, ()=>{ 
    console.log("Server is running on port 3000");
});