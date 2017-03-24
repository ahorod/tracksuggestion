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
    var frontbackendInput = $("#front-back-end").val();
    var designInput = $("input:radio[name=focus]:checked").val();
    var companysizeInput = $("#companysize").val();
    var webappsInput = $("input:radio[name=ruby]:checked").val();
    var typeofsoftwareInput = $("#type-of-software").val();

    if (frontbackendInput === "Front-end") {
      $("#design-course").show();
    }
    else if (frontbackendInput === "Back-end" && webappsInput === "yes") {
      $("#ruby").show();
    }
    //   if (animalInput === "Donkey") {
    //     scale -= 3;
    //   } else {
    //     scale += 3;
    //   }
    //   if (regionInput === "coast") {
    //     scale -= 3;
    //   } else {
    //     scale += 3;
    //   }
    //   $("#result").text(scale);
    // } else {
    //   $("div.must-be-number").addClass("has-error");
    // }
    event.preventDefault();
  });
});
