$(function(){
    $("#flip").click(function(e){
    e.preventDefault();
        $("#panel").slideToggle();
         $('html, body').animate({
        scrollTop: 15000
    }, 2500);
    });
});

