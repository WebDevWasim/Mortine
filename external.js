var shape = document.getElementById("shape");
var score = 0;
var secs = 31;

//this is PLAY Button form index.html page
function play() {
  window.open("game.html", "_self");
}

//this is RESTART Button form game.html page
function restart() {
  location.reload();
}

//this is PAUSE Button form game.html page
function pause() {
  clearTimeout(timer);
  shape.style.display = "none";
}

//this is RESUME Button form game.html page
function resume() {
  shape.style.display = "block";
  setTimeout("countDown()", 1000);
}

//this is HOME Button form over.html page
function home() {
  window.open("index.html", "_self");
}

//this is REPLAY Button form over.html page
function replay() {
  window.open("game.html", "_self");
}

// Starting the timer
function countDown() {
  secs--;
  document.getElementById("timeLeft").innerHTML = secs;

  timer = setTimeout("countDown()", 1000);
  if (secs < 1) {
    // window.open("over.html", "_self");
    $("#myModal").modal();
    clearTimeout(timer);
    $("#shape").hide();

    document.getElementById("finalScore").innerHTML = "Your Score: " + score;
  }
}

countDown();

// code to appear mosquito again and again
function appear() {
  /*
  //appering the mosquito in random direction
  var top = Math.random() * 230 + 100;
  var left = Math.random() * 200 + 50;
  shape.style.top = top + "px";
  shape.style.left = left + "px";

  */
  var h = window.innerHeight - 100;
  var w = window.innerWidth - 50;

  console.log(`H: ${h} & W: ${w}`);
  //appering the mosquito in random direction
  var top = Math.random() * (h - 150) + 150;
  var left = Math.random() * (w - 50) + 50;
  shape.style.top = top + "px";
  shape.style.left = left + "px";
  console.log(`T: ${top} & L: ${left}`);

  //appering random size mosquito
  var height = Math.random() * 20 + 40;
  shape.style.height = height + "px";
  shape.style.width = "auto";

  // circular moving mosquito with css
  shape.setAttribute("class", "alive-mosquito");

  shape.style.visibility = "visible";
}

// time delay before appering the mosquito
function delay() {
  setTimeout(appear, 300);
}
delay();

// this happen after click on the mosquito
function killMosquito() {
  // effect after killing mosquito
  shape.setAttribute("class", "dead-mosquito");
  score++;
  document.getElementById("score").innerHTML = score;
  delay();
}
