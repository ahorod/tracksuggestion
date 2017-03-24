$(document).ready(function() {
  $("#front-back-end").change (function(event) {
  if ($("#front-back-end").val() === "Front-end"){
    $("#design").show();
  }
  else {
    $("#design").hide();
  }
});
  $("#form").submit(function(event) {
    var companysizeInput = $("#companysize").val();
    var webappsInput = $("input:radio[name=ruby]:checked").val();
    var typeofsoftwareInput = $("#type-of-software").val();


    if (ratingInput >= 0 && ratingInput <= 10) {
      var scale = ratingInput;
      if (animalInput === "Donkey") {
        scale -= 3;
      } else {
        scale += 3;
      }
      if (regionInput === "coast") {
        scale -= 3;
      } else {
        scale += 3;
      }
      $("#result").text(scale);
    } else {
      $("div.must-be-number").addClass("has-error");
    }
    event.preventDefault();
  });
});
