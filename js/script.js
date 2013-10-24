$(document).ready(function() {
  $("#navigation span").on('click',function() {
        $('.container div').removeClass("opaque");
        $('#navigation span').removeClass("selected");

        var $input = $(this);
        $('.'+$input.attr( "id" )).addClass("opaque");
        $(this).addClass("selected");

  });
});