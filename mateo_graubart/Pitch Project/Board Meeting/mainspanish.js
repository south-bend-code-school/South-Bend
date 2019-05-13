(function (){

  $(document).ready(initialize);

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA-EXFLH75xh8dmC9DYpb4M51pqGfGQEP8",
    authDomain: "boardmeeting-e2f67.firebaseapp.com",
    databaseURL: "https://boardmeeting-e2f67.firebaseio.com",
    projectId: "boardmeeting-e2f67",
    storageBucket: "",
    messagingSenderId: "488946626088"
  };


function initialize(){
  firebase.initializeApp(config);
  var ref = firebase.database().ref("Entries/PurplePorch");
  ref.on("child_added", (snapshot) => {
     var data = snapshot.val();
     console.log(data.Name);
// deleting function
     var intervalID = window.setInterval(myCallback, 86400000);
function myCallback() {
var refdelete = firebase.database().ref("Entries");
refdelete.remove();
 }

     //Table div
     var table = document.createElement("table");
     //Table tr
     var tr = document.createElement("tr");
     table.appendChild(tr);
     //Table th
     // var titleTh1 = document.createElement("th");
     // titleTh1.textContent = ("Place");
     // tr.appendChild(titleTh1);

     var titleTh2 = document.createElement("th");
     titleTh2.textContent = ("Name");
     tr.appendChild(titleTh2);

     var titleTh3 = document.createElement("th");
     titleTh3.textContent = ("Game");
     tr.appendChild(titleTh3);

     var titleTh4 = document.createElement("th");
     titleTh4.textContent = ("Time");
     tr.appendChild(titleTh4);

     var tr1 = document.createElement("tr");
     table.appendChild(tr1);

     var td1 = document.createElement("td");
     td1.textContent = data.Name;
     tr1.appendChild(td1);

     var td2 = document.createElement("td");
     td2.textContent = data.Game;
     tr1.appendChild(td2);

     var td3 = document.createElement("td");
     td3.textContent = data.Time;
     tr1.appendChild(td3);
     //Append th to tr
     $(".tabledivpp").append(table);
   });

   var ref = firebase.database().ref("Entries/ChocolateCafe");
   ref.on("child_added", (snapshot) => {
      var data = snapshot.val();
      // console.log(data.Game);
      //Table div
      var table = document.createElement("table");
      //Table tr
      var tr = document.createElement("tr");
      table.appendChild(tr);
      //Table th
      // var titleTh1 = document.createElement("th");
      // titleTh1.textContent = ("Place");
      // tr.appendChild(titleTh1);

      var titleTh2 = document.createElement("th");
      titleTh2.textContent = ("Name");
      tr.appendChild(titleTh2);

      var titleTh3 = document.createElement("th");
      titleTh3.textContent = ("Game");
      tr.appendChild(titleTh3);

      var titleTh4 = document.createElement("th");
      titleTh4.textContent = ("Time");
      tr.appendChild(titleTh4);

      var tr1 = document.createElement("tr");
      table.appendChild(tr1);

      var td1 = document.createElement("td");
      td1.textContent = data.Name;
      tr1.appendChild(td1);

      var td2 = document.createElement("td");
      td2.textContent = data.Game;
      tr1.appendChild(td2);

      var td3 = document.createElement("td");
      td3.textContent = data.Time;
      tr1.appendChild(td3);
      //Append th to tr
      $(".tabledivchoc").append(table);
    });


      var ref = firebase.database().ref("Entries/Chicory");
      ref.on("child_added", (snapshot) => {
         var data = snapshot.val();
         // console.log(data.Game);
         //Table div
         var table = document.createElement("table");
         //Table tr
         var tr = document.createElement("tr");
         table.appendChild(tr);
         //Table th
         // var titleTh1 = document.createElement("th");
         // titleTh1.textContent = ("Place");
         // tr.appendChild(titleTh1);

         var titleTh2 = document.createElement("th");
         titleTh2.textContent = ("Name");
         tr.appendChild(titleTh2);

         var titleTh3 = document.createElement("th");
         titleTh3.textContent = ("Game");
         tr.appendChild(titleTh3);

         var titleTh4 = document.createElement("th");
         titleTh4.textContent = ("Time");
         tr.appendChild(titleTh4);

         var tr1 = document.createElement("tr");
         table.appendChild(tr1);

         var td1 = document.createElement("td");
         td1.textContent = data.Name;
         tr1.appendChild(td1);

         var td2 = document.createElement("td");
         td2.textContent = data.Game;
         tr1.appendChild(td2);

         var td3 = document.createElement("td");
         td3.textContent = data.Time;
         tr1.appendChild(td3);
         //Append th to tr
         $(".tabledivchic").append(table);
       });

         var ref = firebase.database().ref("Entries/BrewWerks");
         ref.on("child_added", (snapshot) => {
            var data = snapshot.val();
            // console.log(data.Game);
            //Table div
            var table = document.createElement("table");
            //Table tr
            var tr = document.createElement("tr");
            table.appendChild(tr);
            //Table th
            // var titleTh1 = document.createElement("th");
            // titleTh1.textContent = ("Place");
            // tr.appendChild(titleTh1);

            var titleTh2 = document.createElement("th");
            titleTh2.textContent = ("Name");
            tr.appendChild(titleTh2);

            var titleTh3 = document.createElement("th");
            titleTh3.textContent = ("Game");
            tr.appendChild(titleTh3);

            var titleTh4 = document.createElement("th");
            titleTh4.textContent = ("Time");
            tr.appendChild(titleTh4);

            var tr1 = document.createElement("tr");
            table.appendChild(tr1);

            var td1 = document.createElement("td");
            td1.textContent = data.Name;
            tr1.appendChild(td1);

            var td2 = document.createElement("td");
            td2.textContent = data.Game;
            tr1.appendChild(td2);

            var td3 = document.createElement("td");
            td3.textContent = data.Time;
            tr1.appendChild(td3);
            //Append th to tr
            $(".tabledivbw").append(table);
          });


    // Event trigers
  $(".dropdown-trigger").dropdown();
  $('.submit').click(submit);
}

// function writeData(){
//   document.getElementById("pporch").innerHTML = data;
//
// }

function submit(){
  // writeData();
  var value = $(this).attr("value");
  // console.log(value);


  var namepp = $("#namepp").val();
  var gamepp = $("#gamepp").val();
  var timepp = $("#timepp").val();

  var namecc = $("#namecc").val();
  var gamecc = $("#gamecc").val();
  var timecc = $("#timecc").val();

  var namebw = $("#namebw").val();
  var gamebw = $("#gamebw").val();
  var timebw = $("#timebw").val();

  var namechoc = $("#namechoc").val();
  var gamechoc = $("#gamechoc").val();
  var timechoc = $("#timechoc").val();

  //console.log(name, game, time);

  if(value === "purplePorch"){
    // Make specific reference to firebase
    var ref = firebase.database().ref("Entries/PurplePorch");
    // Send data to firebase using a randomly generated uid with "push()"
    ref.push({
      Name:namepp,
      Game:gamepp,
      Time:timepp,
    });
  }else if(value === "chicory"){
    var ref = firebase.database().ref("Entries/Chicory")
    ref.push({
      Name:namecc,
      Game:gamecc,
      Time:timecc,
    });
  }else if(value === "brew"){
    var ref = firebase.database().ref("Entries/BrewWerks")
    ref.push({
      Name:namebw,
      Game:gamebw,
      Time:timebw,
    });
  }else if(value === "chocolate"){
    var ref = firebase.database().ref("Entries/ChocolateCafe")
    ref.push({
      Name:namechoc,
      Game:gamechoc,
      Time:timechoc,
    });
  }else{
    return;
  }
}

  $('#navigation a, #fixedbar a').on('click', function(e) { e.preventDefault();
  });

  $(window).on('load',function() { var scrolltop = $(this).scrollTop();
     if(scrolltop >= 0) { $('#fixedbar').fadeIn(250); }
    // else if(scrolltop <= 210) { $('#fixedbar').fadeOut(250); }
   });

  $(document).ready(function(){
     $('.modal').modal();
   });



 })();
