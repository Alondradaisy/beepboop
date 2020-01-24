// business logic 

$(document).ready(function() {
  var inputtedNumber = ("application");
  application(submit);



});
function application() {
  $("id").submit("application");
}



// user interface logic



$(document).ready(function() {
  $("form#application").submit(function(event) {
    event.preventDefault();
    var application = $("input#application").val();
    var result = application(inputtedNumber);
    $("#result").submit(result);
  
  });
});