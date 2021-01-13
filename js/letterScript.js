function main() {
  $("#formOne").submit(function(event) {
    const letterName = $("input#letterName").val();
    event.preventDefault();


    $(".letterName").text(letterName);
    $("#letter").show();
  });


}


$(document).ready(main);

