
// bgm
function playbgm() {
  var vAudio = document.getElementById("bgmAudio");
  if (document.getElementById('sound-check').checked) {
    vAudio.play();
  }
  else {
    vAudio.pause();
  }
}

//btn click
var player = "NoPLayer"
var computerPress = [];
var humanPress = [];
var level = 1;

$(".game-btns").click(function() {
  var clickedBtnIndex = $(".game-btns").index(this);
  btnSound(clickedBtnIndex);

  if(player == "human") {
    humanPress.push(clickedBtnIndex);
    console.log(humanPress);
    checkClick(computerPress, humanPress);  //checkClick
  }
});


//button-Sound
function btnSound(index) {
  var btnAudio = $("#audio"+index)[0];
  btnAudio.play();
}


//global variables

//gameStart
$(document).keypress(function() {
  game(level);
});

//mobile START
$(".clickMe").click(function() {
  game(level);
});

//game function
function game(level) {

  setTimeout(function(){
    //title change
    $(".big-heading").text("Level "+level);
    //mobile title change
    $(".mob-heading").text("Level "+level);
  }, 500);

  //random game
  var randomNum = 0;

  player = "computer";

  var i=1;
  var handle = setInterval( function() {

    randomNum = Math.floor(Math.random()*4); //0-3
    btnPlay(randomNum);
    computerPress.push(randomNum);
    console.log(computerPress);
    i++;

    if (i>level) clearInterval(handle);

  }, 800 );


  player = "human";
  //record click

}

//btn play
function btnPlay(num) {
  btnSound(num);
  $($("button")[num]).addClass("btn-click");
  setTimeout(function() {
    $($("button")[num]).removeClass("btn-click");
  }, 500);
}

//check Click
function checkClick(computerPress, humanPress) {

  if(humanPress.length < computerPress.length) {
    for(var i=0; i<humanPress.length; i++) {
      if(computerPress[i] != humanPress[i]) {
        gameOver(level);
      }
    }
  }
  else if (humanPress[humanPress.length-1]==computerPress[computerPress.length-1]){
    level++;
    setTimeout(function() {
    game(level);
    }, 1000);
  }
  else {
    gameOver(level);
  }
}

//gameOver function
function gameOver(num) {
  var gameOv = document.getElementById("gameOv");
  gameOv.play();
  $(".main-container").css("background-color", "red");
  $(".big-heading").html("GAMEOVER!<br>SCORE: "+num*100);
  $(".big-heading").css("color", "yellow");

  //mobile gameOver
  $(".mob-heading").html("GAMEOVER!<br>SCORE: "+num*100);
  $(".mob-heading").css("color", "yellow");

  setTimeout(function() {
    location.reload();
  }, 5000);
}
