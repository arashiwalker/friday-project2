$(document).ready(function() {

$("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
    $(".C-showing").fadeToggle();
    $(".react-showing").hide();
    $(".rails-showing").hide()
    $(".ruby-showing").hide()
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
    $(".react-showing").fadeToggle();
    $(".C-showing").hide();
    $(".rails-showing").hide()
    $(".ruby-showing").hide()
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
    $(".ruby-showing").fadeToggle();
    $(".react-showing").hide();
    $(".rails-showing").hide()
    $(".C-showing").hide()
});

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
    $(".rails-showing").fadeToggle();
    $(".react-showing").hide();
    $(".C-showing").hide()
    $(".ruby-showing").hide()
  });

});
// $(".clickable").click(function() {
//     $(".walrus-showing").fadeToggle();
//     $(".walrus-hidden").fadeToggle();
//   });
//
//   $(".clickable2").click(function() {
//     $(".cat-showing").fadeToggle();
//     $(".cat-hidden").fadeToggle();
//   });
