$( document ).ready(function() {
  var zip = getUrlParameter("zip");
  console.log("zip code = "+zip);
  var url = "https://api.data.gov/ed/collegescorecard/v1/schools?_zip="+zip+"&_distance=5mi&api_key=Z6caR22DhCUgTXaXn6hfSaXz3VZfl0qbokZFuVIp"

  $.ajax({
    url: url,
    // dataType: 'jsonp',
    success: function(results){
      console.log(results.results);
      $(results.results).each(function(i){
        var name = results.results[i].school.name;
        $("#SearchResults").append(`<a href="./page.html?id=`+results.results[i].id+`"><div class='option'>
           <div class= 'schoolname'>
            <h4>`+name+`</h4>
           </div>
           <div class= 'location'>
           <h5>`+results.results[i].school.city+`, `+results.results[i].school.state+`</h5>
         </div>
         </div></a>`
        );
      });
    }
  });
});

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
};
