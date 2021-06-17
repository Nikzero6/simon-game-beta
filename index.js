
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

$(".game-btns").click(function() {
  var clikedBtnIndex = $(".game-btns").index(this);
  btnSound(clikedBtnIndex);
});

//button-Sound
function btnSound(index) {
  var btnAudio = $("#audio"+index)[0];
  btnAudio.play();
}

//game
$(document).keypress(function() {
  for (var i = 0, j = 1; i < j; i++)
  {
    //random game
    for(var i=0; i<j; i++)
    {
      //title change
      $(".big-heading").text("Level "+j);

      setTimeout(function game() {
        var randomNum = Math.floor(Math.random()*4); //0-3
        btnPlay(randomNum);
        // if(checkClick(randomNum)==false) {
        //   break;
        // }
        // else {
        //   j++
        // }
      }, 1000);
    }
  }
  // gameOver();
  });

//check Click
function checkClick(num) {
  $("button").click(function() {
    var clikedBtnIndex = $("button").index(this);
    if(clickedBtnIndex == num) {
      return true;
    }
    else {
      return false;
    }
  });
}

//gameOver function
function gameOver() {
  setTimeout(function() {
    $("body").css("background-color", "red");
    $(".big-heading").text("GAMEOVER!");
  }, 10000);

  location.reload();
}

//game function

//btn play
function btnPlay(num) {
  btnSound(num);
  $($("button")[num]).addClass("btn-click");
  setTimeout(function() {
        $($("button")[num]).removeClass("btn-click");
      }, 800);
}
