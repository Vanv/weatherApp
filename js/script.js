//Ajax call to get Latitude and Longitude
$.ajax({
    url: "https://ipapi.co/json",
    dataType: "json", 
    success: function ( data, status, XHR ) {
        latlong(data);
    }
});

function latlong(responseData ) {

    var lat = responseData.latitude;
    var long = responseData.longitude;
    console.log("Latitude & longitude " + lat + ", "+long);

    // return lat, long;
}
