//Call to get Latitude and Longitude

var latitude, longitude;

$.getJSON('http://ip-api.com/json', {}).done(function(location) {

	latitude = location.lat;
	longitude = location.lon;
	
	onGettingCoords();
})

function onGettingCoords() {
    console.log("test " + latitude, longitude);
    $.ajax({
    url : "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=e04539b40b013f15e67b723be6769496",
    dataType: "json", 
    success: function ( data, status, XHR ) {
        weather(data);
        console.log(data.name, data.id);
    }
});
} 

function weather(data) {
	console.log(data.main.humidity);
	$(".temp").text(data.main.temp);
	$(".clouds").text(data.weather[0].description);
	$(".city").text(data.name);
	$(".country").text(data.sys.country);
	
	$(".humid").text(data.main.humidity);
	$(".wind").text(data.wind.speed);
	$(".sunrise").text(data.sys.sunrise);
	$(".sunset").text(data.sys.sunset);
	
}
