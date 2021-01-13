$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const textInput = $("input#text1").val().toUpperCase();
    $("#story").text(textInput);
    $("#story").show();

    event.preventDefault();
  });
});