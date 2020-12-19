$(document).ready(function () {


//------------Current Stats------------------
var covidURL = 'https://api.covidtracking.com/v1/us/current.json'
$.ajax({
  url: covidURL,
  method: "GET"
}).then(function(response){
  var fixedDate = moment(response[0].lastModified).format("M/D/YYYY")
  var dailyUp = $('<h6>').text('Daily Death Increase: ' + response[0].deathIncrease)
  var recovered = $('<h6>').text('Total Recovered Cases: ' + response[0].recovered).addClass('middle')
  var positive = $('<h6>').text('Total Positives: ' + response[0].positive)
  var lastMod = $('<p>').text('Last updated: ' + fixedDate).addClass('lastMod')
  $('#tracker').append(dailyUp, recovered, positive)
  $('#us-last-update').append(lastMod)

  //Playing with commas
 //dailyUp=parseInt().toLocaleString()
})

//-------------Search States----------------------------
function userSearch(input) {
var stateCurrentURL = 'https://api.covidtracking.com/v1/states/' + input + '/current.json'

  $.ajax({
    url: stateCurrentURL,
    method: "GET"
  }).then(function(response){
    console.log(response)

    // Adding Content to HTML
    $('#data-user-card').html(`<p>Date Checked: ${moment(response.dateChecked).format("M/D/YYYY")}</p>`)
    $('#data-user-card').append(`<p>Currently Hospitalized: ${response.hospitalizedCurrently}</p>`)
    $('#data-user-card').append(`<p>Positive Cases: ${response.positive}</p>`)
    $('#data-user-card').append(`<p>Positive Increases: ${response.positiveIncrease}</p>`)
    $('#data-user-card').append(`<p>Total Negatives: ${response.negative}</p>`)
    $('#data-user-card').append(`<p>Negative Increase: ${response.negativeIncrease}</p>`)
    $('#data-user-card').append(`<p>Total Deaths: ${response.death}</p>`)
    $('#data-user-card').append(`<p>Death Increase: ${response.deathIncrease}</p>`)
    $('#data-user-card').append(`<p>Total: ${response.total}</p>`)

  })

  var stateInfoURL = 'https://api.covidtracking.com/v1/states/' + input + '/info.json'

  $.ajax({
    url: stateInfoURL,
    method: "GET"
  }).then(function(response){
    console.log(response)

    // Adding Content to HTML
    $('.title-user-card').text(response.name)
    $('#state-webpage').attr('href', response.covid19Site)
    $('#twitter').attr('href', 'https://twitter.com/' + response.twitter)

  })


}
   


//___________________________JOKES______________________________________________
//Blonde Joke
function blondeJoke() {
  // Sets Variables for blonde joke API
  var queryURL = "https://api.jokes.one/jod?category=blonde&apiid=77bb87454dmsh74b81baa5edac7cp174c22jsn897e53317c87"

  // Calls blonde joke API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)

    $('.blonde-title').text(response.contents.jokes[0].joke.title)
    $('.blonde-content').text(response.contents.jokes[0].joke.text)

  })
}



//JOD Joke
function jodJoke() {
  // Sets Variables for jod joke API
  var queryURL = "https://api.jokes.one/jod?category=jod&apiid=77bb87454dmsh74b81baa5edac7cp174c22jsn897e53317c87"

  // Calls jod joke API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)

    $('.jod-title').text(response.contents.jokes[0].joke.title)
    $('.jod-content').text(response.contents.jokes[0].joke.text)

  })
}


//Animal Joke
function animalJoke() {
  // Sets Variables for animal joke API
  var queryURL = "https://api.jokes.one/jod?category=animal&apiid=77bb87454dmsh74b81baa5edac7cp174c22jsn897e53317c87"

  // Calls animal joke API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)

    $('.animal-title').text(response.contents.jokes[0].joke.title)
    $('.animal-content').text(response.contents.jokes[0].joke.text)

  })
}


//Knock Knock Joke
function knockJoke() {
  // Sets Variables for knock knock joke API
  var queryURL = "https://api.jokes.one/jod?category=knock-knock&apiid=77bb87454dmsh74b81baa5edac7cp174c22jsn897e53317c87"

  // Calls knock knock joke API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)

    $('.knock-title').text(response.contents.jokes[0].joke.title)
    $('.knock-content').text(response.contents.jokes[0].joke.text)

  })
}


// Event Listeners
  // Joke Buttons
  $('#knock-button').on('click', function () {
    knockJoke()
  })
  $('#blonde-button').on('click', function () {
    blondeJoke()
  })
  $('#animal-button').on('click', function () {
    animalJoke()
  })
  $('#jod-button').on('click', function () {
    jodJoke()
  })

  var stateList = []

  // State Dropdown Search
  $(document).on('click', '.state-clicked', function(){
    var listedState = $(this).text()

    // Variable to store user search
    var stateButton = $('<button>').addClass("btn waves-effect waves-light list-group-item")
    var addButton = stateButton.text(listedState)
    $('.list-group').append(addButton)

    // Save search to local storage
    stateList.push(listedState)
    localStorage.setItem("states", JSON.stringify(stateList))
    console.log(listedState)
    
    // Un-hides User Search Card
    $('#user-search-card').removeClass('hide')

    // Calles userSearch Function
    userSearch(listedState)

  })

// Pushes clicked saved item through searchCity Function to retrieve info on that city again
$(document).on('click', '.list-group-item', function(){
  var stateButtonListed = $(this).text()
  console.log(stateButtonListed)

    // Un-hides User Search Card
    $('#user-search-card').removeClass('hide')
  
    // Calls userSearch Function
    userSearch(stateButtonListed) 

})

// Pulls Local Storage on page load
function getSavedStates() {
  var savedStates = JSON.parse(localStorage.getItem("states"))

  if (savedStates !== null) {
    stateList = savedStates

    // Display Saved Staes in list
    for (var i=0; i<stateList.length; i++) {
      var savedStateButton = $('<button>').addClass("btn waves-effect waves-light list-group-item")
      var addSavedButton = savedStateButton.text(stateList[i])
      $('.list-group').append(addSavedButton)

      // Calls userSearch Function
      userSearch(stateList[i]) 
    }

  }

}

// Calls getSavedStates on page load
getSavedStates()

// Materialize listeners
$('.modal').modal();
$('.dropdown-trigger').dropdown();


});

