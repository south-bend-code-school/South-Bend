window.onload=function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBaZTXIBzqafhHk07hyWoGjlIyw600CIzE",
    authDomain: "hellooo-d1d89.firebaseapp.com",
    databaseURL: "https://hellooo-d1d89.firebaseio.com",
    projectId: "hellooo-d1d89",
    storageBucket: "hellooo-d1d89.appspot.com",
    messagingSenderId: "157606299424"
  };
  firebase.initializeApp(config);
// user variables
  var database = firebase.database();
  function set(){
    var name = document.getElementById("name")
    var icecream = document.getElementById("icecream")
    var deathofchoice = document.getElementById("deathofchoice")
    database.ref("users/" + name ).set({
      name:name,
      icecream:icecream,
      deathofchoice:deathofchoice,
    })
  }












}
