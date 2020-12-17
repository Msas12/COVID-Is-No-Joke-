var date = "2020-04-16"
var city = "Chicago"
var state = "Illinois"

function searchCity(city, date, state) {
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-statistics.p.rapidapi.com/reports?region_name=US&city_name=" + city + "&date=" + date + "&q=US%20" + state,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d7c407139dmsh3168e98d3071accp1df2d1jsncf860db85460",
		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com"
	}
};




$.ajax(settings).then(function (response) {

    console.log(response);
    


});

}

searchCity(city, date, state)

/*
// Event listener for all button elements
$("button").on("click", function() {
  // In this case, the "this" keyword refers to the button that was clicked
  var person = $(this).attr("data-person");

  // Constructing a URL to search Giphy for the name of the person who said the quote
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=dc6zaTOxFJmzC&limit=10";

  // Performing our AJAX GET request
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After the data comes back from the API
    .then(function(response) {
      // Storing an array of results in the results variable
      var results = response.data;

      // Looping over every result item
      for (var i = 0; i < results.length; i++) {

        // Only taking action if the photo has an appropriate rating
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          // Creating a div for the gif
          var gifDiv = $("<div>");

          // Storing the result item's rating
          var rating = results[i].rating;

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + rating);

          // Creating an image tag
          var personImage = $("<img>");

          // Giving the image tag an src attribute of a proprty pulled off the
          // result item
          personImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(personImage);

          // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
          $("#gifs-appear-here").prepend(gifDiv);
        }
      }
    });
});

*/
