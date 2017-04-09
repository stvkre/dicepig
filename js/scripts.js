//transition to game page
$(document).ready(function() {
  $("button#slide").click(function() {
    $(".jumbotron").hide(1000);
    $("#pitch").slideDown();
  });
  //end transition


  $(document).ready(function() {
    // functions
    function Player(userName, score, turnTotal) {
      this.userName = userName;
      this.score = score;
      this.turnTotal = turnTotal;
    };

    Player.prototype.addScore = function(dice) {
      this.score += dice;
    };
  });

});

//ui logic
var nameOne;
var nameTwo;
var score = 0;
var turn_total = 0;
var playerOne = new Player(nameOne, score, turn_total);
var playerTwo = new Player(nameTwo, score, turn_total);
var holdScoreOne = [];
var holdScoreTwo = [];
