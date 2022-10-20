//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", (req, res)=>{
    
    var today = new Date();

    (today.getDay() === 0 || today.getDay() === 6)?(res.send("Yay! its weekend")):(res.send("No! its " + today.getDay() + " I gotta work"))
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});