$("a[href^='#']").on("click", function(event){
  event.preventDefault();
  $("html, body").animate({
      scrollTop: $( $.attr(this, "href") ).offset().top
  }, 5000);
});



