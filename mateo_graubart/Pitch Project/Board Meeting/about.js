(function (){

  $(document).ready(initialize);

  function initialize(){

        // Initialize Firebase
          var config = {
            apiKey: "AIzaSyA-EXFLH75xh8dmC9DYpb4M51pqGfGQEP8",
            authDomain: "boardmeeting-e2f67.firebaseapp.com",
            databaseURL: "https://boardmeeting-e2f67.firebaseio.com",
            projectId: "boardmeeting-e2f67",
            storageBucket: "boardmeeting-e2f67.appspot.com",
            messagingSenderId: "488946626088"
          };
          firebase.initializeApp(config);

    var database = firebase.database();
    document.getElementById('submit').onclick=set;

    function set(){
      var name=document.getElementById('name').value;
      var email=document.getElementById('email').value;
      var phone=document.getElementById('phone').value;
      var message=document.getElementById('message').value;
      database.ref('ContactInfo/' + name).set({
        name: name,
        email: email,
        phone: phone,
        message: message
      })
    }

    // Event triggers
  $(".dropdown-trigger").dropdown();
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
