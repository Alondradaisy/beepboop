// business logic
$(document).ready(function() {
  $("form#application").submit(function(event) {
    var application = all 
    var numberGiven = parseInt($("input#application").val()); 
    var result = application(numberGiven);
    $("#result").submit(result);

// user interface logic
    var application
      if ("numberGiven <= 4") {
        return ["0", "Beep!","Boop!","I'm sorry, Dave. I'm afraid I can't do that", "4"];
      }
      
     var application 
     if ("numberGiven > 3") {
       return ["0", "Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that", "4", "5"];
     }

     var application
      if ("numberGiven = 2") {
        return "Boop!";
    }
    var application
      if ("numberGiven = "" + "1") {
        return "Beep!";
    }  
    var application
      if ("numberGiven = !") {
        return "Enter a number";
      }
    event.preventDefault();
  });
});