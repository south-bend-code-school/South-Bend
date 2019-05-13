window.onload=function(){
  var config = {
     apiKey: "AIzaSyBA16aZCGTe-lDJ9hT8ripRczUOLjL1Ydo",
     authDomain: "fir-test-7b9d1.firebaseapp.com",
     databaseURL: "https://fir-test-7b9d1.firebaseio.com",
     projectId: "fir-test-7b9d1",
     storageBucket: "fir-test-7b9d1.appspot.com",
     messagingSenderId: "678024357386"
   };
   firebase.initializeApp(config);

   var database = firebase.database();
   document.getElementById('submit-button').onclick=set;
   document.getElementById('submit-button-two').onclick=get

   function set(){
     var some=document.getElementById('some').value;
     var once=document.getElementById('once').value;
     database.ref('Test/' + some).set({
       some: some,
       once: once,
     })


}
    function get(){
database.ref('Test/').on('value', function(snapshot){
  console.log(snapshot.val());
  snapshot.forEach(function(childSnapshot) {
    //some pull
    var childData = childSnapshot.val();
    var sometag = document.createElement("p")
    var somenode = document.createTextNode(childData.some)
    sometag.appendChild(somenode);
    document.getElementById('display').appendChild(sometag)
    //once pull
    var childData = childSnapshot.val();
    var oncetag = document.createElement("p")
    var oncenode = document.createTextNode(childData.once)
    oncetag.appendChild(oncenode);
    document.getElementById('display').appendChild(oncetag)
  });


})
}

}
