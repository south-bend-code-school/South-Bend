// (function (){
   $(document).ready(initialize);

   function initialize(){
     GetCollegeById();
   $('.carousel').carousel();
   $('.carousel.carousel-slider').carousel({
   fullWidth: true
 });
}
// })();
function GetCollegeById(){
  var id = getUrlParameter("id");
  console.log("id code = "+id);
  var url = "https://api.data.gov/ed/collegescorecard/v1/schools?id="+id+"&api_key=Z6caR22DhCUgTXaXn6hfSaXz3VZfl0qbokZFuVIp"

  $.ajax({
    url: url,
    // dataType: 'jsonp',
    success: function(results){

      var thisSchool = results.results[0];
      $("#schooln").text(thisSchool.school.name);
      $("#tuition").text("$"+thisSchool["2016"].cost.tuition.in_state);
      var allPrograms = thisSchool["2016"].academics.program_percentage;
      for (program in allPrograms){
        if (allPrograms[program] > 0){
          $("#programs").append(program+"<br>");
        }
      }
      $("#location").text(thisSchool.school.city+", "+thisSchool.school.state);
    }
  });
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}
