window.onload=function(){


  // Initialize Firebase
  var config = {
  apiKey: "AIzaSyDSyfxwgImWXhclVV62ki8Y_TBvQSSnfAU",
  authDomain: "dominic-online.firebaseapp.com",
  databaseURL: "https://dominic-online.firebaseio.com",
  projectId: "dominic-online",
  storageBucket: "dominic-online.appspot.com",
  messagingSenderId: "735089590794",
  appId: "1:735089590794:web:41bc6d5b44a383ce"
};
    firebase.initializeApp(config);


var database = firebase.database();


document.getElementById('start').onclick=setUserData;
document.getElementById('domcom').onclick=get;

function setUserData(){
  console.log('run pls')
  var username=document.getElementById('username').value;
  var password=document.getElementById('password').value;
  var secretdominickey=document.getElementById('Secret Dominic Key').value;
  database.ref('Users/' + username).set({
    username: username,
    password: password,
    secretdominickey: secretdominickey
  });
}
function get(){
  database.ref('Users').once('value',function(snapshot){
snapshot.forEach(function(childSnapshot){
  var childData = childSnapshot.val();
  var name = document.createElement("p");
  var nameNode = document.createTextNode(childData.username);
  name.appendChild(nameNode);
  document.getElementById('big').appendChild(name);
});

    console.log(snapshot.val());
  });
}

















}
