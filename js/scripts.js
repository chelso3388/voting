$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('#voter').show();
  } else if (age === 18) {
    alert('Make sure you are registered to vote!');
    $('#voter').show();
  }
    else {
      $('#under-18').show();
  }
});
