$(document).ready(function() {
  $("form#application").submit(function(event) {
    event.preventDefault();


    var numberGiven = parseInt($("input#application").val());
    var result = application(number);
    $("#result").text(result);

    $("#application").text(application);

    var application
      if ("numberGiven <= "4") {
        return ["0", "Beep!","Boop!","I'm sorry, Dave. I'm afraid I can't do that", "4"]
      }
        else {
          return result;
      }



  });
});