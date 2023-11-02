$(document).ready(function () {


    // ******close window******
    $(".close-container").click(function () {
      $(".modal-bg").addClass("hidden");
    });


    // open windows
    $(".card2").click(function () {
      $("#modal-mhe").removeClass("hidden");
    });


    $(".card3").click(function () {
      $("#modal-firstgen").removeClass("hidden");
    });


    $(".card4").click(function () {
      $("#modal-eng").removeClass("hidden");
    });


   });
