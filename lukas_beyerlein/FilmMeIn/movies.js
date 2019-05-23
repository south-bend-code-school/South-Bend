(function () {

    $(document).ready(initalize);

    var genreIDs = localStorage.getItem('genreID').replace(/,/g, "%2C");

    function initalize(){
        console.log(genreIDs);
        findMovies();
        $(".movie .topMovie .movieMovieDescriptionPreview p").shave(100);
        $("#showMoreButton1").click(expandClose1);
        $("#showMoreButton2").click(expandClose2);
        $(".movie").on("click", ".topMovie", expandClose1);
    }

    function findMovies() {
        var url = `https://api.themoviedb.org/3/discover/movie?api_key=691e11bf1edaf1a1129cb9525d3a923e&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=${genreIDs}`;
        console.log(url);
        $.ajax({
            url: url,
            dataType: 'jsonp',
            success: function(results){
                console.log(results.results)
                var x = 0
                $(results.results).each(function(i){
                    x = x + 1
                    var moviePop = results.results[i].vote_average
                    var movieID = results.results[i].id
                    var movieTitle = results.results[i].title
                    var movieYear = results.results[i].release_date
                    var movieGenreID = results.results[i].genre_ids
                    var movieDescription = results.results[i].overview
                    var movieDescriptionPreview = results.results[i].overview
                    if ((movieDescription).length == " "){
                        movieDescription = "The plot is unknown";
                    }
                    if ((movieYear).length != " "){
                        movieYear = movieYear.substring(0, 4);
                    }
                    if ((movieYear).length == " "){
                        movieYear = "unknown";
                    }
                    $('.movie').append(`<div class="topMovie show">
                    <div class="showHideButton">
                    <button class="showMoreButton pointer" id="showMoreButton${x}"><image class="downButton show" id="downButton${x}" src="expandButtonImage.png"><image class="upButton displayNone" id="upButton${x}" src="closeButtonImage.png"></button>
                    </div>
                    <div class="movieMovieTitle">
                    <p>${movieTitle} (${movieYear})</p>
                    </div>
                    <div class="movieMovieDescriptionPreview show">
                    <p>${moviePop}/10 Average Rating</p>
                    </div>
                    <div class="movieMovieRatings displayNone">
                    <p>${moviePop}/10 Average Rating</p>
                    </div>
                    <div class="movieMoviePlatform">
                    <p>Platform(s)</p>
                    </div>
                    </div>
                    <div class="bottomMovie displayNone">
                    <div class="movieMovieDescription">
                    <p>${movieDescription}</p>
                    </div>
                    </div>
                    </div>`)
                })

            }
        });
    }
    function expandClose1(){
        console.log(this)
        if($(this).find('.bottomMovie').hasClass("displayNone")){
            $(this).find('.bottomMovie').removeClass("displayNone");
            $(this).find('.bottomMovie').addClass("show");
        }
        else{
            $(this).find('.bottomMovie').removeClass("show");
            $(this).find('.bottomMovie').addClass("displayNone");
        }
        // if($("#bottomMovie1").hasClass("displayNone")){
        // $("#bottomMovie1").removeClass("displayNone");
        // $("#bottomMovie1").addClass("show");
        // }
        // else{
        // $("#bottomMovie1").removeClass("show");
        // $("#bottomMovie1").addClass("displayNone");
        // }
    }
    function expandClose2(){
        if($("#bottomMovie2").hasClass("displayNone")){
            $("#bottomMovie2").removeClass("displayNone");
            $("#bottomMovie2").addClass("show");
        }
        else{
            $("#bottomMovie2").removeClass("show");
            $("#bottomMovie2").addClass("displayNone");
        }
    }


})();
