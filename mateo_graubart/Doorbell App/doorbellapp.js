window.onload=function(){

  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBDuzGWChCgi81vHG-I9qaHyAzNpHWn84o",
      authDomain: "doorbell-app-38ed7.firebaseapp.com",
      databaseURL: "https://doorbell-app-38ed7.firebaseio.com",
      projectId: "doorbell-app-38ed7",
      storageBucket: "doorbell-app-38ed7.appspot.com",
      messagingSenderId: "781541961776"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
    document.getElementById('submit-button').onclick=set;

    function set(){
      var name=document.getElementById('name').value;
      var appointment=document.getElementById('appointment').value;
      database.ref('Doorbell/' + name).set({
        name: name,
        appointment: appointment,
      })
    }











}
