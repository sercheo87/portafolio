$(document).ready(function() {
    $("#navigation span").on('click',function() {
        $('.container div').removeClass("opaque");
        $('#navigation span').removeClass("selected");
        
        var $container = $(this);
        
        
        $('.'+$container.attr("id")+' h1').css('margin-left','100%')
        $('.'+$container.attr("id")+' h1').animate({
            marginLeft: "0px"
        }, 700);
        
        $('.'+$container.attr("id")).addClass("opaque");
        $(this).addClass("selected");
        
    });
});