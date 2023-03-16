
get20Countries()

$("#get20Countries").click(get20Countries());
function get20Countries() {
	$.get("/getCountries").done(function(countries) {
		let table = $("<table>");

		table.append("<thead><tr><th>Country</th><th>Capital</th><th class='coast'>Coastline</th><th>Continent</th><th>Currency</th><th>Domain</th><th>Flag</th></tr></thead>");

		for(let country of Object.keys(countries).sort().slice(0,20)) {
			table.append(`<tr><td><p tabindex="0">`+country+`</p></td><td>`+countries[country][0]+`</td><td class="coast">`+countries[country][1]+`</td><td>`+countries[country][2]+`</td><td>`+countries[country][3]+`</td><td>`+countries[country][4]+`</td><td class="flag"><img src="`+countries[country][5]+`" height="100%" width="100%" alt="`+country+` flag"></td></tr>`);
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
	if($("#toggleCoast").val() == "Hide Coast") {
		console.log("Hiding Coastlines");
		$(".coast").css("display","none");
		$("#toggleCoast").val("Show Coast");
	}
	else {
		console.log("Showing Coastlines");
		$(".coast").css("display","inline");
		$("#toggleCoast").val("Hide Coast");
	}
});

$("#toggleDarkMode").click(function() {
	if($("#toggleDarkMode").val() == "Enable Dark Mode") {
		console.log("Enabeling Dark Mode");
		$("body").css({"background-color":"black","color":"white"});
		//Checks to see if the table borders are enabled and if so changes their color to math the theme
		if($("#toggleTableBorders").val() == "Hide Table Borders") {
			$("td").css({"border":"1px solid white"});
		}
		$("#toggleDarkMode").val("Disable Dark Mode");
	}
	else {
		console.log("Disabling Dark Mode");
		$("body").css({"background-color":"white","color":"black"});
		//Checks to see if the table borders are enabled and if so changes their color to math the theme
		if($("#toggleTableBorders").val() == "Hide Table Borders") {
			$("td").css({"border":"1px solid black"});
		}
		$("#toggleDarkMode").val("Enable Dark Mode");
	}
});

$("#toggleTableBorders").click(function() {
	if($("#toggleTableBorders").val() == "Show Table Borders") {
		console.log("Showing Borders");
		if($("#toggleDarkMode").val() == "Enable Dark Mode") {
			$("td").css({"border":"1px solid black"});
		}
		else {
			$("td").css({"border":"1px solid white"});
		}
		$("table").css({"border-collapse":"collapse"});
		$("#toggleTableBorders").val("Hide Table Borders");
	}
	else {
		console.log("Hiding Borders");
		$("td").css({"border":"none"});
		$("#toggleTableBorders").val("Show Table Borders");
	}
});

$("#toggleHeadingStyle").click(function() {
	if($("#toggleHeadingStyle").val() == "Enable Underline On Table Headings") {
		$("th").css({"text-decoration":"underline"});
		$("#toggleHeadingStyle").val("Disable Underline On Table Headings")
	}
	else {
		$("th").css({"text-decoration":"none"});
		$("#toggleHeadingStyle").val("Enable Underline On Table Headings")
	}
});
