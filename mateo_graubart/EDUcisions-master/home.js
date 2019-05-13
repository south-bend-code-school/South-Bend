(function(){

  $(document).ready(initialize);

  // Initialize Firebase
   var config = {
     apiKey: "AIzaSyCzbYkkfd89sKYRrWP5MNVcpKkG-25y0Gs",
     authDomain: "educisions-aae12.firebaseapp.com",
     databaseURL: "https://educisions-aae12.firebaseio.com",
     projectId: "educisions-aae12",
     storageBucket: "educisions-aae12.appspot.com",
     messagingSenderId: "960261677493"
   };

function initialize(){
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible();
  $('.carousel.carousel-slider').carousel({fullWidth: true}, {duration: 5000});
  window.setInterval(function(){$('.carousel').carousel('next')},4500)
  firebase.initializeApp(config);
  

    $('.dropdown-button').dropdown('dropdown');

  }

 // Move next n times.
 //
 //    $(document).ready(function(){
 //      $('.carousel').carousel();
 //      $('.carousel.carousel-slider').carousel({fullWidth: true});
 //
 //    }










})();
