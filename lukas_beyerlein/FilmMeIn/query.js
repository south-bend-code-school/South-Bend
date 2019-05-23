window.onload=function (){
$(document).ready(initalize);
  function initalize(){
    loadApi()
    spotlightMovie();
    $("#genres").click(showHide);
    $("#platforms").click(showHide);
    $(".expandAll").click(expandClose);
    // $("#showMoreButton1").click(expandClose1);
    // $("#showMoreButton2").click(expandClose2);
    $(".submitSearchButton").on('click', showResults);
    $('.genres').on('change', "input[type='checkbox']", checkboxSwitch);
    $(".selectAll").click(selectAllCheckboxes);
  }
  function loadApi(){
    $.ajax({
      url: "https://api.themoviedb.org/3/genre/movie/list?api_key=691e11bf1edaf1a1129cb9525d3a923e&language=en-US",
      dataType: 'jsonp',
      success: function(results){
          // console.log(results.genres);
          var x = 0
          var y = 1
          $(results.genres).each(function(i){
            // console.log(results.genres[i].name);
            var genreName = results.genres[i].name
            var genreID = results.genres[i].id
            $(".allGenreCheckboxes").append(`<div class="checkbox" id="genreCheckboxID${y}"><input type="checkbox" class="pointer" name="genre" value="${genreID}">${genreName}</div>`)
            x = x + 1
            y = y + 1
          })
      }
    });
  }
  function spotlightMovie(){

  }
  function selectAllCheckboxes(){
    // $(".checkbox").each(function() {
    //   if(!($(this).hasClass('checkMe'))){
    //     $(this).addClass('checkMe')
    //   }
    // });
  }
  function checkboxSwitch(){
    if($(this).hasClass('checkMe')){
      $(this).removeClass('checkMe')
    }
    else {
      $(this).addClass('checkMe')
    }
  }

  function showResults(){
    var movieIdArray = [];

    var checked = $('.genres').find(".checkMe")
    $(checked).each(function(i){
      console.log($(checked[i]).val());
      movieIdArray.push($(checked[i]).val());
      // console.log(movieIdArray)
    })
    localStorage.setItem('genreID', movieIdArray);
    window.location.replace(`./movies.html`)
  }

  function showHide(){
    var thisType = $(this).attr('id');
    $(".searchFilters").removeClass("show");
    $(".searchFilters").addClass("hide");
    $("."+thisType).addClass("show");
    $("."+thisType).removeClass("hide");
  }
  function expandClose(){
    if($(".bottomMovie").hasClass("displayNone")){
    $(".bottomMovie").removeClass("displayNone");
    $(".bottomMovie").addClass("show");
    $(".movieMovieDescriptionPreview").removeClass("show");
    $(".movieMovieDescriptionPreview").addClass("displayNone");
    $(".movieMovieGenre").removeClass("displayNone");
    $(".movieMovieGenre").addClass("show");
    $(".movieMovieRatings").removeClass("displayNone");
    $(".movieMovieRatings").addClass("show");
    }
    else{
    $(".bottomMovie").removeClass("show");
    $(".bottomMovie").addClass("displayNone");
    $(".movieMovieDescriptionPreview").removeClass("displayNone");
    $(".movieMovieDescriptionPreview").addClass("show");
    $(".movieMovieGenre").removeClass("show");
    $(".movieMovieGenre").addClass("displayNone");
    $(".movieMovieRatings").removeClass("show");
    $(".movieMovieRatings").addClass("displayNone");
    }
}
}
