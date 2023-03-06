

if(document.readyState) {
	let countryList;
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.open("post","/getCountries");
	xmlhttp.onreadystatechange(function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			countryList = xmlhttp.response;
			console.log(countryList);
		}
	});
}