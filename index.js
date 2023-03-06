const { json } = require("express");
const express = require("express");
const fs = require("fs/promises");

//Sets up express server
const app = express();

//Tells the server what port to listen on
app.listen(3000, function() {
	console.log('Server running on port 3000');
});


//This serves the home page
app.get("/",function(req,res) {
	res.sendFile(__dirname+"/index.html");
});

//This route will handle getting a list of all countries and sending it back to the front ent to be displayed
app.post("/getCountries",async function(req,res) {
	let countryList = await fs.readFile(__dirname+"country-objects/country-capitals.json");
	console.log("Country List");
	console.log(countryList);
	res.send("working");
});