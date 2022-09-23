document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function clearText() {
	document.getElementById("location").innerHTML = " ";
	document.getElementById("coordinates").innerHTML = " ";
	document.getElementById("temperature").innerHTML = " ";
	document.getElementById("description").innerHTML = " ";
	document.getElementById("humidity").innerHTML = " ";
	document.getElementById("windspeed").innerHTML = " ";
}

function getWeather() {
	
	let location = document.getElementById("location");
	let coordinates = document.getElementById("coordinates");
	let temperature = document.getElementById("temperature");
	let description = document.getElementById("description");
	let humidity = document.getElementById("humidity");
	let windspeed = document.getElementById("windspeed");
	let api = "https://api.openweathermap.org/data/2.5/weather";
	let apiKey = "12160cb04e3f62c6ac2ef7e63ab1e43d";
	
	location.innerHTML = "Locating...";
				
	navigator.geolocation.getCurrentPosition(success, error);
				
	function success(position) {
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;
		
		let url =
			api +
			"?lat=" +
			latitude +
			"&lon=" +
			longitude +
			"&appid=" +
			apiKey +
			"&units=metric";
		
		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				location.innerHTML = "Location: " + data.name + " " + data.sys.country;
				coordinates.innerHTML = "Latitude: " + latitude + "° | Longitude: " + longitude + "°";
				let temp = data.main.temp;
				temperature.innerHTML = "Temperature: " + temp + "° C";
				description.innerHTML = "Description: " + data.weather[0].main;
				let hum = data.main.humidity;
				humidity.innerHTML = "Humidity: " + hum + "%";
				let wind = data.wind.speed;
				windspeed.innerHTML = "Wind speed: " + wind + " m/s";
			});
	}
				
	function error() {
		location.innerHTML = "Unable to detect your location";
	}
}

getWeather();