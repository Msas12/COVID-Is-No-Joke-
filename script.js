var covidURL = 'https://api.covidtracking.com/v1/us/current.json'
$.ajax({
  url: covidURL,
  method: "GET"
}).then(function(response){
  var dailyUp = $('<h6>').text('Daily Death Increase: ' + response[0].deathIncrease)
  var recovered = $('<h6>').text('Total Recovered Cases: ' + response[0].recovered)
  var positive = $('<h6>').text('Total Positives: ' + response[0].positive)
  var lastMod = $('<h6>').text('Last updated: ' + response[0].lastModified)
  $('#tracker').append(dailyUp, recovered, positive, lastMod)
})

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

// Event Listeners
$('#blonde-button').on('click', function () {
  blondeJoke()
})

//JOD Joke
function blondeJoke() {
  // Sets Variables for jod joke API
  var queryURL = "https://api.jokes.one/jod?category=jod&apiid=77bb87454dmsh74b81baa5edac7cp174c22jsn897e53317c87"

  // Calls jod joke API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)

    $('.blonde-title').text(response.contents.jokes[0].joke.title)
    $('.blonde-content').text(response.contents.jokes[0].joke.text)

  })
}

// Event Listeners
$('#blonde-button').on('click', function () {
  blondeJoke()
})

//Animal Joke
function blondeJoke() {
  // Sets Variables for animal joke API
  var queryURL = "https://api.jokes.one/jod?category=blonde&apiid=77bb87454dmsh74b81baa5edac7cp174c22jsn897e53317c87"

  // Calls animal joke API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)

    $('.blonde-title').text(response.contents.jokes[0].joke.title)
    $('.blonde-content').text(response.contents.jokes[0].joke.text)

  })
}

// Event Listeners
$('#blonde-button').on('click', function () {
  blondeJoke()
})

//Knock Knock Joke
function blondeJoke() {
  // Sets Variables for knock knock joke API
  var queryURL = "https://api.jokes.one/jod?category=blonde&apiid=77bb87454dmsh74b81baa5edac7cp174c22jsn897e53317c87"

  // Calls knock knock joke API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)

    $('.blonde-title').text(response.contents.jokes[0].joke.title)
    $('.blonde-content').text(response.contents.jokes[0].joke.text)

  })
}

// Event Listeners
$('#blonde-button').on('click', function () {
  blondeJoke()
})



$(document).ready(function () {
  $('.modal').modal();
});
