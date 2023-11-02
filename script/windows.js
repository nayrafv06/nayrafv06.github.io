$(document).ready(function () {


    // summer program windows
    $("#syt").click(function () {
      $("#syt-window").toggleClass("hidden");
    });


    $("#cosmos").click(function () {
      $("#cosmos-window").toggleClass("hidden");
    });


    $("#ucsd").click(function () {
      $("#ucsd-window").toggleClass("hidden");
    });


    $("#firstgen").click(function () {
      $(this).toggleClass("expanded");
      $("#firstgen-window").toggleClass("hidden");
    });




   });
