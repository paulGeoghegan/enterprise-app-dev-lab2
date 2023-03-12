const express = require("express");
const fs = require("fs");

//Sets up express server
const app = express();
app.use(express.static(__dirname+"/public"));

//Tells the server what port to listen on
app.listen(3000, function() {
	console.log('Server running on port 3000');
});


//This serves the home page
app.get("/",function(req,res) {
	res.sendFile(__dirname+"/index.html");
});

//This route will handle getting a list of all countries and sending it back to the front ent to be displayed
app.get("/getCountries",async function(req,res) {
	let countries = {};
	let countryCapitals = JSON.parse(fs.readFileSync(__dirname+"/country-objects/country-capital.json"));
	let countryCoastlines = JSON.parse(fs.readFileSync(__dirname+"/country-objects/country-coastline.json"));
	let countryContinents = JSON.parse(fs.readFileSync(__dirname+"/country-objects/country-continent.json"));
	let countryCurrencies = JSON.parse(fs.readFileSync(__dirname+"/country-objects/country-currency.json"));
	let countryDomains = JSON.parse(fs.readFileSync(__dirname+"/country-objects/country-domain.json"));
	let countryFlags = JSON.parse(fs.readFileSync(__dirname+"/country-objects/country-flag.json"));
	//This will loop through and create the object
	for(let element of countryCapitals) {
		countries[element.country] = [element.city];
	}
	for(let element of countryCoastlines) {
		if(element.country in countries) {
			countries[element.country].push(element.costline);
		}
		else {
			countries[element.country] = ["NULL",element.costline]
		}
	}
	for(let element of countryContinents) {
		if(element.country in countries) {
			countries[element.country].push(element.continent);
		}
		else {
			countries[element.country] = ["NULL",element.continent]
		}
	}
	for(element of countryCurrencies) {
		if(element.country in countries) {
			countries[element.country].push(element.currency_name);
		}
		else {
			countries[element.country] = ["NULL","NULL",element.currency_name]
		}
	}
	for(element of countryDomains) {
		if(element.country in countries) {
			countries[element.country].push(element.tld);
		}
		else {
			countries[element.country] = ["NULL","NULL","NULL",element.tld]
		}
	}
	for(element of countryFlags) {
		if(element.country in countries) {
			countries[element.country].push(element.flag_base64);
		}
		else {
			countries[element.country] = ["NULL","NULL","NULL","NULL",element.flag_base64]
		}
	}

	res.send(countries);
});