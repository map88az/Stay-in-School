// Google API Key
var apiKey = 'AIzaSyAEgVTABuoJteYHqrlpGO1aQ1TehkBg8X0';
function initialize(location)
		{
				console.log(location);
				// var for circle image
				var im = "assets/images/bluecircle.png";
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
				var weatherURL = "api.openweathermap.org/data/2.5/weather?lat=" + location.coords.latitude.toFixed(2) + "&lon=" + location.coords.longitude.toFixed(2) + "&APPID=ad2049df345f2733661921d3ca7a05f5";
        		// Performing our AJAX GET request
      $.ajax({
      	  method: "GET",
          dataType: "json",
          url: "http://api.openweathermap.org/data/2.5/weather?lat=33.36&lon=-111.79&APPID=ad2049df345f2733661921d3ca7a05f5",
          
        	})
        // After the data comes back from the API
        .done(function(response) {
				console.log(response);


        	})
        .fail(function(error){
        	console.log("error", error.responseText);
        	});
    		

    	// Eventful API

		var eventfulApiKey = "wwBJT6fHmcLQCH4G";
    		
    $.ajax({
              method: "GET",
              dataType: "json",
              url: "http://api.eventful.com/rest/events/search?location=phoenix" + "&app_key=" + eventfulApiKey,
           }).done(function(result){
                    
                    console.log(result);

           }).fail(function(error){
        	
        			console.log("error", error.statusText);
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






