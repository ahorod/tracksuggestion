$(document).ready(function(){

  $("#front-back-end").change (function(event) {
  if ($("#front-back-end").val() === "Front-end"){
    $("#focus").show();
  }
  else {
    $("#focus").hide();
  }
  });


  $("#form").submit(function(event) {
    var frontbackendInput = $("#front-back-end").val();
    var focusInput = $("input:radio[name=focus]:checked").val();
    var companysizeInput = $("#companysize").val();
    var webappsInput = $("input:radio[name=ruby]:checked").val();
    var typeofsoftwareInput = $("#type-of-software").val();

    if (frontbackendInput === "Back-end") {
      if (webappsInput === "yes"){
        $("#ruby").show();
      }
      else {
        if (typeofsoftwareInput === "Internal or business software"){ $("#c").show(); }
        else if (typeofsoftwareInput === "Android applications") { $("#java").show(); }
        else {$("#php").show();}
      }

    }
    else {
      $("#css").show();
    }
    event.preventDefault();
  });
});
