
get20Countries()

$("#get20Countries").click(get20Countries());
function get20Countries() {
	$.get("/getCountries").done(function(countries) {
		let table = $("<table>");

		table.append("<thead><tr><th>Country</th><th>Capital</th><th class='coast'>Coastline</th><th>Continent</th><th>Currency</th><th>Domain</th><th>Flag</th></tr></thead>");

		for(let country of Object.keys(countries).sort().slice(0,20)) {
			table.append(`<tr><td>`+country+`</td><td>`+countries[country][0]+`</td><td class="coast">`+countries[country][1]+`</td><td>`+countries[country][2]+`</td><td>`+countries[country][3]+`</td><td>`+countries[country][4]+`</td><td class="flag"><img src="`+countries[country][5]+`" height="100%" width="100%" alt="`+country+` flag"></td></tr>`);
		}

		$("#countryTable").empty();
		$("#countryTable").append(table);

	});
}



$("#getAllCountries").click(function() {
	$.get("/getCountries").done(function(countries) {
		let table = $("<table>");

		table.append("<thead><tr><th>Country</th><th>Capital</th><th class='coast'>Coastline</th><th>Continent</th><th>Currency</th><th>Domain</th><th>Flag</th></tr></thead>");

		for(let country of Object.keys(countries).sort()) {
			table.append(`<tr><td>`+country+`</td><td>`+countries[country][0]+`</td><td class="coast>`+countries[country][1]+`</td><td>`+countries[country][2]+`</td><td>`+countries[country][3]+`</td><td>`+countries[country][4]+`</td><td class="flag"><img src="`+countries[country][5]+`" height="100%" width="100%" alt="`+country+` flag"></td></tr>`);
		}

		$("#countryTable").empty();
		$("#countryTable").append(table);

	});
});

$("#toggleCoast").click(function() {
	console.log("Hiding Countries");
	$(".coast").css("display","none");

});