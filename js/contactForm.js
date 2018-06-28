$(function(){
    $("#flip").click(function(e){
    e.preventDefault();
        $("#panel").slideToggle();
         $('html, body').animate({
        scrollTop: 10000
    }, 2500);
    });
});

