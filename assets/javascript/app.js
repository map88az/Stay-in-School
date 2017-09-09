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

		



// Grab input value from ***City Search*** bar and store as a variable ***Global***

// Convert var into proper string to search Google Maps Api

// Display new map with marker

// Use same variable to search Eventful API

// Append the results to the 'events' div

//Firebase entry of recent user searches

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCWK0pIiNd4lVSgBUbuU6-B-FargYoYPyo",
    authDomain: "apiproject1-dad7d.firebaseapp.com",
    databaseURL: "https://apiproject1-dad7d.firebaseio.com",
    projectId: "apiproject1-dad7d",
    storageBucket: "",
    messagingSenderId: "703597396756"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
// Store user input in firebase
  $("#add-city").on("click", function() {
        var city = $("#city-input").val().trim();
        database.ref().push({
            city: city,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        })
        //Return input to original placeholder
        $("#city-input").val("City...");
          // prevent page from refreshing when user hits enter
        return false;

        // API call for the weather
		var weatherURL = "api.openweathermap.org/data/2.5/weather?q=" + $("#city-input").val().trim() + "&APPID=ad2049df345f2733661921d3ca7a05f5";
        
        // Performing our AJAX GET request
	    $.ajax({
	       	  method: "GET",
	          dataType: "json",
	          url: weatherURL,
	          
	        	})
	        // After the data comes back from the API
	        .done(function(response) {
					console.log(response);


	        	})
	        .fail(function(error){
	        	console.log("error", error.responseText);
	        	});
	    });
// when user input is added to Firebase, append the stored values to the page
    database.ref().on("child_added", function(childSnapshot) {
<<<<<<< HEAD

    	$(".added-city").append("<tr>+<td>" + childSnapshot.val().city + "<td>" + childSnapshot.val().dateAdded + "<td>");


    });

});

/* var cityWeather = [];

var city = $(this).attr("data-name");
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=fa395f95eca5e15cd961266c92175840";

        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

         var weatherDiv = $("#weather");

         weatherDiv.attr("data-name", cityWeather);

            // Storing the rating data
          var weather = response.main.temp;

          // Creating an element to have the rating displayed
          var pOne = $(weatherDiv).html("Weather: " + parseInt((1.8*(weather - 273) + 32)) + "&#8457");

          weatherDiv.append(pOne);
=======

    	$(".added-city").append("<tr>+<td>" + childSnapshot.val().city + "<td>" + childSnapshot.val().dateAdded + "<td>");
>>>>>>> f3b3f4644f9ed0897acddf76b2059b6645d9c4b4

          $("#weather").text(weatherDiv);  
        });

<<<<<<< HEAD
        $(".btn-secondary").on("click", function(event) {
        event.preventDefault();

        //$("#movie-input").val().trim();
        
=======
    });

});
>>>>>>> f3b3f4644f9ed0897acddf76b2059b6645d9c4b4

        cityWeather.push(city);

        });  
 */