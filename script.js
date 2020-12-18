$(document).ready(function () {
//------------Current Stats------------------
var covidURL = 'https://api.covidtracking.com/v1/us/current.json'
$.ajax({
  url: covidURL,
  method: "GET"
}).then(function(response){
  var fixedDate = moment(response[0].lastModified).format("M/D/YYYY")
  var dailyUp = $('<h6>').text('Daily Death Increase: ' + response[0].deathIncrease)
  var recovered = $('<h6>').text('Total Recovered Cases: ' + response[0].recovered)
  var positive = $('<h6>').text('Total Positives: ' + response[0].positive)
  var lastMod = $('<h6>').text('Last updated: ' + fixedDate)
  $('#tracker').append(dailyUp, recovered, positive, lastMod)
})

//-------------Search States----------------------------
function userSearch (){
var stateURL = 'https://api.covidtracking.com/v1/states/' + stateSearch + '/info.json'
var stateSearch = $().attr("")

  $.ajax({
    url: stateURL,
    method: "GET"
  }).then(function(response){
    console.log(response)


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

  // Search Button
  $('#searchbtn').on('click', function(){

  })

// Modal Listener
$('.modal').modal();


});
