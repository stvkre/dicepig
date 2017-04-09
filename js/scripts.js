function run() {
  var die1 = document.getElementById("die1");
  var span1 = document.getElementById("span1");

  var core = Math.floor(Math.random() * 6) + 1;

  die1.innerHTML = core;
  span1.innerHTML = core;



}
//transition to game page
$(document).ready(function() {
  $("button#slide").click(function() {
    $(".jumbotron").hide(1000);
    $("#pitch").slideDown();
  });
});
//end transition
