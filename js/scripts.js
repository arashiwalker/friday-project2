//Functions for language description buttons// 
$(document).ready(function() {

$("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
    $(".C-showing").slideToggle();
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
    $(".ruby-showing").slideToggle();
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
//functions for track suggestions//
var nameInput;
var signInput;
var ageInput;

function choose(){
  if (ageInput > 20 && ageInput) {
    $("#match").show();
    $("#name").text(nameInput);
    $("#unmatch").hide();
    if(signInput === "front end" && ageInput <= 35) {
      $("#code1").show();
      $("#code2").hide();
      $("#code3").hide();
      $("#code4").hide();
      }
    else if(signInput === "back end" && ageInput <= 35) {
      $("#code2").show();
      $("#code1").hide();
      $("#code3").hide();
      $("#code4").hide();
    }
    else if(signInput === "Mobile" && ageInput <= 35) {
      $("#code3").show();
      $("#code1").hide();
      $("#code2").hide();
      $("#code4").hide();
    }
    else {
      $("#code4").show();
      $("#code1").hide();
      $("#code2").hide();
      $("#code3").hide();
    }
  }
  else if (ageInput < 20 && ageInput) {
    $("#unmatch").show();
    $("#name1").text(nameInput);
    $("#match").hide();
    $("#code4").hide();
    $("#code1").hide();
    $("#code2").hide();
    $("#code3").hide();
  }
}
//functions for appointments //
$(document).ready(function() {
$("#detailsform").submit(function(event) {
  event.preventDefault();
  nameInput = $("input#addName").val();
  signInput = $("select#addSign").val();
  ageInput = parseInt($("input#addAge").val());
  event.preventDefault();
  choose(nameInput, signInput, ageInput);
  });
});

$(function(){
  $('#appointment').submit(function(event){
    event.preventDefault();
    var name = $("#name1").val();
    var DoA =  $("#DoA1").val();
    var date = $("#date1").val();
    var time = $("#time1").val();
    $("#name").text(name);
    $("#date").text(date);
    $("#time").text(time);
    $("#DoA").text(DoA);
    $("#appointment-modal").toggle();
  });
});
