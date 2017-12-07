var config = {
    apiKey: "AIzaSyDmxAjMi9ItnbRG2Dg9ajZ1KbvJHAbR01Y",
    authDomain: "train-scheduler-431b5.firebaseapp.com",
    databaseURL: "https://train-scheduler-431b5.firebaseio.com",
    projectId: "train-scheduler-431b5",
    storageBucket: "train-scheduler-431b5.appspot.com",
    messagingSenderId: "640678413855"
  };

  firebase.initializeApp(config);


var database = firebase.database();

 $(document).ready(function() {

$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var firstTrainTime = $('#time-input').val().trim();
  var trainFrequency = $("#frequency-input").val().trim();


  var newTrain = {
    name: trainName,
    destination: trainDestination,
    firstTrainTime: firstTrainTime,
    frequency: trainFrequency,
    nextTrainFormatted: nextTrainFormatted,
    trainMinutesAway: trainMinutesAway
  };

  database.ref().push(newTrain);

  
})