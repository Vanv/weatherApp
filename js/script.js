//Call to get Latitude and Longitude

var latitude, longitude;

$.getJSON('http://ip-api.com/json', {}).done(function(location) {

	latitude = location.lat;
	longitude = location.lon;
	
	onGettingCoords();
})

//Passing Latitude and Longitude
function onGettingCoords() {
    console.log("test " + latitude, longitude);
    $.ajax({
    url : "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=e04539b40b013f15e67b723be6769496",
    dataType: "json", 
    success: function ( data, status, XHR ) {
        weather(data);
    }
});
} 
//Weather Data
function weather(data) {
	$(".temp").text(data.main.temp);
	$(".clouds").text(data.weather[0].description);
	$(".city").text(data.name);
	$(".country").text(data.sys.country);
	
	$(".humid").text(data.main.humidity);
	$(".wind").text(data.wind.speed);
	
	sunriseValue = data.sys.sunrise;
	sunriseTime1 = new Date(sunriseValue*1000);
	sunriseTime2 = sunriseTime1.getHours() + ":" + sunriseTime1.getMinutes();
	// var today = get Hourstime();
	$(".sunrise").text(sunriseTime2);
	
	$(".sunset").text(data.sys.sunset);
	sunsetValue = data.sys.sunset
	sunsetTime1 = new Date(sunsetValue*1000);
	sunsetTime2 = sunsetTime1.getHours() + ":" + sunsetTime1.getMinutes();
	$(".sunset").text(sunsetTime2);
	
	//Unit Conversion - Celsius to Fahrenheit
	var temp = Math.round(JSON.stringify(data.main.temp));
     //cel to Ferenheit
     var fh = temp * 9 / 5 + 32;
     //fh to cel1
     var cel = (fh - 32) * 5 / 9;
	  $('.cel').on('click', function() {
      	$('.temp').html(cel + " <sup>0</sup>C");
     });

     $('.fh').on('click', function() {
      	$('.temp').html(fh + " F");
     });
}

