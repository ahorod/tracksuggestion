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
    var nameInput = $("#name").val();
    var frontbackendInput = $("#front-back-end").val();
    // var focusInput = $("input:radio[name=focus]:checked").val();
    // var companysizeInput = $("#companysize").val();
    var webappsInput = $("input:radio[name=ruby]:checked").val();
    var typeofsoftwareInput = $("#type-of-software").val();
    $("#ruby").hide();
    $("#c").hide();
    $("#java").hide();
    $("#php").hide();
    $("#css").hide();

    if (frontbackendInput === "Back-end") {
      if (webappsInput === "yes"){
      $("#ruby").prepend(nameInput + ",");
      $("#ruby").show();
      }
      else {
        if (typeofsoftwareInput === "Internal or business software"){
          $("#c").prepend(nameInput + ",");
          $("#c").show(); }
        else if (typeofsoftwareInput === "Android applications") {
          $("#java").prepend(nameInput + ",");
          $("#java").show(); }
        else {
          $("#php").prepend(nameInput + ",");
          $("#php").show();}
      }

    }
    else {
      $("#css").prepend(nameInput + ",");
      $("#css").show();
    }
    event.preventDefault();
  });
});
