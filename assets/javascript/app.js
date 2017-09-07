// Google API Key
var apiKey = 'AIzaSyAEgVTABuoJteYHqrlpGO1aQ1TehkBg8X0';
function initialize(location)
		{
				console.log(location);
				// var for circle image
				var im = 'http://www.robotwoods.com/dev/misc/bluecircle.png';
				// Create variable for map options
				var mapOptions = {
					center: new google.maps.LatLng(location.coords.latitude, location.coords.longitude),
					zoom: 12,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};

				// Create ne wmap in jumbotron with id 'map-canvas'
				map = new google.maps.Map(document.getElementById("map-canvas"),
						mapOptions);

				var userMarker = new google.maps.Marker({
			            position: mapOptions.center,
			            map: map,
			            icon: im
			        });
				
				// API call for the weather
				var weatherURL = "api.openweathermap.org/data/2.5/weather?lat={" + location.coords.latitude + "}&lon={" + location.coords.longitude + "}";
        		// Performing our AJAX GET request
      $.ajax({
          url: weatherURL,
          method: "GET"
        })
        // After the data comes back from the API
        .done(function(response) {
				console.log(response);


        });
    	}
      

		


$(document).ready(function()
		{
				navigator.geolocation.getCurrentPosition(initialize);

		});



// Grab input value from ***City Search*** bar and store as a variable ***Global***

// Convert var into proper string to search Google Maps Api

// Display new map with marker

// Use same variable to search Eventful API

// Append the results to the 'events' div






