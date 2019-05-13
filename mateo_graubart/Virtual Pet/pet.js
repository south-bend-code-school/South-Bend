window.onload=function(){

var food=localStorage.getItem('foodTrack');
var water=localStorage.getItem('waterTrack');
var lift=localStorage.getItem('liftTrack');

checkFood();
checkWater();
checkLift();
checkHealth();
timer();

setInterval(timer, 10000);

function checkFood(){
  if (food==undefined)
  {
    localStorage.setItem('foodTrack', 50);
    food=localStorage.getItem('foodTrack');
  }
  else{
    food=localStorage.getItem('foodTrack');
  }
}

function checkWater(){
  if (water==undefined)
  {
    localStorage.setItem('waterTrack', 50);
    water=localStorage.getItem('waterTrack');
  }
  else{
    water=localStorage.getItem('waterTrack');
  }
  console.log("e");

}

function checkLift(){
  if (lift==undefined)
  {
    localStorage.setItem('liftTrack', 50);
    lift=localStorage.getItem('liftTrack');
  }
  else{
    lift=localStorage.getItem('liftTrack');
  }
  console.log("e");
}


var food;
var water;
var lift;


document.getElementById('foodButton').onclick = doEat;
document.getElementById('waterButton').onclick = doDrink;
document.getElementById('liftButton').onclick = doLift;
document.getElementById('reset').onclick = resetFunction;


// // Hard - Food and water +10 to self, -10 to lift,
//           lift +15 to self, - 10 to food and water
  // Easy - food and water +10 to self, -10 to lift,
//         lift +25 to self, -10 to food and water
// Very Easy (Demo) - food and water +15 to self, -10 to lift,
      //              lift +15 to self, -5 to food and water

function doEat(){
food = Number(food) + 10;
lift = Number(lift) - 10;
console.log(food);
checkHealth();
}

function doDrink(){
water = Number(water) + 10;
lift = Number(lift) - 10;
console.log(water);
checkHealth();
}

function doLift(){
lift = Number(lift) + 25;
food = Number(food) - 10;
water = Number(water) - 10;
console.log(lift);
checkHealth();
}

function checkHealth(){
  localStorage.setItem("waterTrack", water);
  localStorage.setItem("foodTrack", food);
  localStorage.setItem("liftTrack", lift);
document.getElementById('food').innerHTML=(food);
document.getElementById('water').innerHTML=(water);
document.getElementById('lift').innerHTML=(lift);
if (food < 1) {
  dead();
}
else if (water < 1) {
  dead();
}
else if (lift < 1) {
  dead();
}
else if (lift > 60 && water > 60 && food > 60) {
  document.getElementById('petImage').innerHTML=('<img class="betterImage" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c78d4f0-29ab-40fa-846f-393a3b3ba1fb/dcn8632-262f1cd2-ee35-4d28-8939-fe068f23d9f8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjNzhkNGYwLTI5YWItNDBmYS04NDZmLTM5M2EzYjNiYTFmYlwvZGNuODYzMi0yNjJmMWNkMi1lZTM1LTRkMjgtODkzOS1mZTA2OGYyM2Q5ZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tsopHLb6uxxwHvY1CSFlf8m_VrLjtNPxzOjWJH3w-2s"</img>');

  if (lift > 70 && water > 70 && food > 70) {
    document.getElementById('petImage').innerHTML=('<img class="betterImage" src="https://i.kym-cdn.com/photos/images/newsfeed/001/293/670/b7d.jpg"</img>');
  }

  if (lift > 80 && water > 80 && food > 80) {
    document.getElementById('petImage').innerHTML=('<img class="betterImage" src="https://i.kym-cdn.com/photos/images/original/001/383/953/0c2.jpeg"</img>')

  }
}
else if (lift == 50 && water == 50 && food == 50) {
  document.getElementById('petImage').innerHTML=('<img class="betterImage" src="https://vignette.wikia.nocookie.net/emojimovie/images/0/07/Gene.png/revision/latest?cb=20180916170226"</img>');
}
else if (lift < 40 && water < 40 && food < 40) {
  document.getElementById('petImage').innerHTML=('<img class="betterImage" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/51/disappointed-but-relieved-face_1f625.png"</img>')
}
else {

}
}

function dead(){
  clearInterval()
  document.getElementById('foodButton').setAttribute('style', 'visibility:hidden');
  document.getElementById('waterButton').setAttribute('style', 'visibility:hidden');
  document.getElementById('liftButton').setAttribute('style', 'visibility:hidden');
  document.getElementById('food').setAttribute('style', 'visibility:hidden');
  document.getElementById('water').setAttribute('style', 'visibility:hidden');
  document.getElementById('lift').setAttribute('style', 'visibility:hidden');
  document.getElementById('petImage').innerHTML=('<img class="betterImage" src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/skull-and-crossbones.png"</img>');
}



function resetFunction(){
  localStorage.setItem('foodTrack', 50);
  food=localStorage.getItem('foodTrack');

  localStorage.setItem('waterTrack', 50);
  water=localStorage.getItem('waterTrack');

  localStorage.setItem('liftTrack', 50);
  lift=localStorage.getItem('liftTrack');

  document.getElementById('foodButton').setAttribute('style', 'visibility:visible');
  document.getElementById('waterButton').setAttribute('style', 'visibility:visible');
  document.getElementById('liftButton').setAttribute('style', 'visibility:visible');
  document.getElementById('food').setAttribute('style', 'visibility:visible');
  document.getElementById('water').setAttribute('style', 'visibility:visible');
  document.getElementById('lift').setAttribute('style', 'visibility:visible');
  checkHealth();
  }

function timer(){
  lift = Number(lift - 5);
  water = Number(water - 5);
  food = Number(food - 5);
  console.log("we workin");
  checkHealth();
}

}
