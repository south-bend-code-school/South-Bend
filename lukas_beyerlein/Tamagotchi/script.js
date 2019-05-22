window.onload = function(){

    var food = localStorage.getItem('foodTrack');
    var water = localStorage.getItem('waterTrack');
    var exercise = localStorage.getItem('exerciseTrack');
    var randomNumber

    var timerVar = setInterval(function(){
        timer();
    }, 3000);

    document.getElementById("messageDead").setAttribute("style", "visibility:hidden;");
    document.getElementById("messageDead").innerHTML=("You killed the cat");
    // document.getElementById("messageThrive").setAttribute("style", "visibility:hidden;");
    // document.getElementById("messageThrive").innerHTML=("You have satisfied the cat...for now");


    document.getElementById("foodValue").innerHTML=(food);
    document.getElementById("waterValue").innerHTML=(water);
    document.getElementById("exerciseValue").innerHTML=(exercise);


    document.getElementById("foodButton").onclick = clickFood;
    document.getElementById("waterButton").onclick = clickWater;
    document.getElementById("exerciseButton").onclick = clickExercise;
    document.getElementById("resetButton").onclick = clickReset;

    checkFood();
    checkWater();
    checkExercise();

    function checkFood(){
        if (food==undefined) {
            localStorage.setItem("foodTrack", 50);
            food = localStorage.getItem('foodTrack');
        }
        else {
            food = localStorage.getItem('foodTrack');
        }
    }
    function checkWater(){
        if (water==undefined) {
            localStorage.setItem("waterTrack", 50);
            water = localStorage.getItem('waterTrack');
        }
        else {
            water = localStorage.getItem('waterTrack');
        }
    }
    function checkExercise(){
        if (exercise==undefined) {
            localStorage.setItem("exerciseTrack", 50);
            exercise = localStorage.getItem('exerciseTrack');
        }
        else {
            exercise = localStorage.getItem('exerciseTrack');
        }
    }

    function clickFood(){
        food = Number(food) + 10
        if (exercise < 5) {
            exercise = 0
        }
        else {
            exercise = exercise - 5
        }
        checkHealth();
    }

    function clickWater(){
        water = Number(water) + 10
        if (exercise < 5) {
            exercise = 0
        }
        else {
            exercise = exercise - 5
        }
        checkHealth();
    }

    function clickExercise(){
        exercise = Number(exercise) + 15
        if (food < 5) {
            food = 0
        }
        else {
            food = food - 10
        }
        if (water < 5) {
            water = 0
        }
        else {
            water = water - 10
        }
        checkHealth();
    }

    function clickReset(){
        document.getElementById("messageDead").setAttribute("style", "visibility:hidden;");
        // document.getElementById("messageThrive").setAttribute("style", "visibility:hidden;");
        document.getElementById("foodButton").setAttribute("style", "visibility:visible;");
        document.getElementById("waterButton").setAttribute("style", "visibility:visible;");
        document.getElementById("exerciseButton").setAttribute("style", "visibility:visible;");
        localStorage.setItem("foodTrack", 50);
        food = localStorage.getItem('foodTrack');
        localStorage.setItem("waterTrack", 50);
        water = localStorage.getItem('waterTrack');
        localStorage.setItem("exerciseTrack", 50);
        exercise = localStorage.getItem('exerciseTrack');
        checkHealth();
        clearInterval(timerVar);
        timerVar = setInterval(function(){
            timer();
        }, 3000);
    }

    function checkHealth(){
        localStorage.setItem("foodTrack", food)
        localStorage.setItem("waterTrack", water)
        localStorage.setItem("exerciseTrack", exercise)

        document.getElementById("foodValue").innerHTML=(food);
        document.getElementById("waterValue").innerHTML=(water);
        document.getElementById("exerciseValue").innerHTML=(exercise);
        if (food < 1) {
            dead();
        }
        else if (water < 1) {
            dead();
        }
        else if (exercise < 1) {
            dead();
        }
        else {
            if (food < 21) {
                almostDead();
            }
            else if (water < 21) {
                almostDead();
            }
            else if (exercise < 21) {
                almostDead();
            }
            else {
                if (food < 51) {
                    content();
                }
                else if (water < 51) {
                    content();
                }
                else if (exercise < 51) {
                    content();
                }
                else {
                    if (food < 96) {
                        happy();
                    }
                    else if (water < 96) {
                        happy();
                    }
                    else if (exercise < 96) {
                        happy();
                    }
                    else {
                        if (food > 99) {
                            ecstatic();
                        }
                        else if (water > 99) {
                            ecstatic();
                        }
                        else if (exercise > 99) {
                            ecstatic();
                        }
                        else {

                        }
                    }
                }
            }
        }
    }


    function dead(){
        clearInterval(timerVar);
        document.getElementById("foodValue").innerHTML=("0");
        document.getElementById("waterValue").innerHTML=("0");
        document.getElementById("exerciseValue").innerHTML=("0");
        localStorage.setItem("foodTrack", Number(0))
        localStorage.setItem("waterTrack", Number(0))
        localStorage.setItem("exerciseTrack", Number(0))
        document.getElementById("foodButton").setAttribute("style", "visibility:hidden;");
        document.getElementById("waterButton").setAttribute("style", "visibility:hidden;");
        document.getElementById("exerciseButton").setAttribute("style", "visibility:hidden;");
        document.getElementById("messageDead").setAttribute("style", "visibility:visible;");
        document.getElementById("petImageDiv").innerHTML=("<img class='petImage' src='deadCat.png'>");

    }


    function almostDead(){
        document.getElementById("petImageDiv").innerHTML=("<img class='petImage' src='catAlmostDead.jpg'>")
    }
    function content(){
        document.getElementById("petImageDiv").innerHTML=("<img class='petImage' src='contentCat.jpg'>")
    }
    function happy(){
        document.getElementById("petImageDiv").innerHTML=("<img class='petImage' src='happyCat.png'>")
    }
    function ecstatic(){
        document.getElementById("petImageDiv").innerHTML=("<img class='petImage' src='ecstaticCat.jpg'>")
        // document.getElementById("messageThrive").setAttribute("style", "visibility:visible;");
    }
    function timer(){
        console.log("hello");
    }
}
