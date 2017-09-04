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
					       
        }
      

		


$(document).ready(function()
		{
				navigator.geolocation.getCurrentPosition(initialize);

		});

// Google API Key
var apiKey = 'AIzaSyAEgVTABuoJteYHqrlpGO1aQ1TehkBg8X0';








