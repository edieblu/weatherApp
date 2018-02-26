function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    var url = "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude;
    var request = new XMLHttpRequest();
		request.open("GET", url, false);
		request.send();

		request = JSON.parse(request.responseText);

		console.log(request);
		console.log(request.weather[0].description);
		console.log(request.main.temp)
		var img = new Image();
		document.getElementById("description").innerHTML = "Weather report: " + request.weather[0].description;
		document.getElementById("temp").innerHTML = "Temperature: " + request.main.temp.toFixed(1) +"°C";
		document.getElementById("name").innerHTML = "Location: " + request.name;
    img.src = request.weather[0].icon;
    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }
  navigator.geolocation.getCurrentPosition(success, error);
}

  
