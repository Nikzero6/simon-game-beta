
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

  if(player == "computer") {
    computerPress.push(clickedBtnIndex);
  }
  else if(player == "human") {
    humanPress.push(clickedBtnIndex);
    checkClick(computerPress, humanPress, level);  //checkClick
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

//game function
function game(level) {

  //title change
  $(".big-heading").text("Level "+level);

  //random game
  var randomNum = 0;

  player = "computer";

  var i=1;
  var handle = setInterval( function() {

    randomNum = Math.floor(Math.random()*4); //0-3
    btnPlay(randomNum);
    computerPress.push(randomNum);
    console.log(computerPress[i-1]);
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
function checkClick(computerPress, humanPress, num) {

  if(humanPress.length < computerPress.length) {
    for(var i=0; i<humanPress.length; i++) {
      if(computerPress[i] != humanPress[i]) {
        gameOver(level);
      }
    }
  }
  else {
    if(computerPress[num-1] != humanPress[num-1]) {
        gameOver(level);
    }
    else {
      level++;
      setTimeout(function() {
        game(level);
      }, 1000);
    }
  }
}

//gameOver function
function gameOver(num) {
  $(".main-container").css("background-color", "red");
  $(".big-heading").html("GAMEOVER!<br>SCORE: "+num*100);

  setTimeout(function() {
    location.reload();
  }, 5000);
}
