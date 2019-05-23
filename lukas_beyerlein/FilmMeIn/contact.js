window.onload=function(){

// Initialize Firebase
var config = {
apiKey: "AIzaSyDDKb56x5vnaDiZfQiiPOeeQItJ7c1sN_A",
authDomain: "filmmeincontactinformation.firebaseapp.com",
databaseURL: "https://filmmeincontactinformation.firebaseio.com",
projectId: "filmmeincontactinformation",
storageBucket: "filmmeincontactinformation.appspot.com",
messagingSenderId: "368611260686"
};
firebase.initializeApp(config);
// End of Firebase



// Firebase starts again
var database = firebase.database();

document.getElementById("inputSubmitid").onclick = set;

function set(){
    var inputNameid = document.getElementById("inputNameid").value;
    var inputEmailid = document.getElementById("inputEmailid").value;
    var inputMessageid = document.getElementById("inputMessageid").value;
    database.ref("users/" + inputNameid).set({
        name: inputNameid,
        email: inputEmailid,
        message: inputMessageid
    });
}

// End of Firebase again
}
