//jshint esversion:6let

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.use(express.static('public'));

let items = ["buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", (req, res)=> {

let today = new Date();

 
let options = {
  weekday : 'long',
  day : 'numeric',
  month : 'long'
};  
    let day = today.toLocaleDateString("en-US", options);
      res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", (req, res)=> {

  let item = req.body.newItem;

  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  } else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res)=>{
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.listen(3000, ()=>{ 
    console.log("Server is running on port 3000");
});