var val0 = -10,
    val1 = 0,
    val2 = 5,
    val3 = 10;

$(".fa").transition({ scale:1, opacity:0.5, y:val2 } );
$("h3").transition({ scale:1.2, opacity:0, y:val3 }, 300);
$("small").transition({ scale:1.2, opacity:0, y:val3 }, 150);

var bigIcon = $(".actionIcon");
$.each(bigIcon, function (index, value) {

  var fa = $(this).find(".fa"),
      h3 = $(this).find("h3"),
      small = $(this).find("small");
	
	$(this).hover(function() {			
			fa.transition({ scale:1.2, opacity:1, y:val0 }, 200 );
			h3.transition({ scale:1, opacity:1, y:val1 }, 150);
			small.transition({ scale:1, opacity:1, y:val1 }, 300);
		}, function() {
			fa.transition({ scale:1, opacity:0.5, y:val2 });
			h3.transition({ scale:1.2, opacity:0, y:val3 }, 300);
			small.transition({ scale:1.2, opacity:0, y:val3 }, 150);
		}
	);
});