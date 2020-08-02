$(document).ready(function(){

$(document).ready(function() { 
$("a.two").fancybox(); 
});

  $('.flexslider2').flexslider({
  	 selector: ".sliders > .slider",
    animation: "slide",
        minItems: 1,                 
    maxItems: 1,                 
    move: 1, 
  });

$('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: true,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 0,
   //sync: "#slider",
   asNavFor: '#slider',
    maxItems: 3,
    minItems: 3,
    directionNav: false,

  });

setInterval(function(){
	if ( $('#carousel .slides li.flex-active-slide').index() == 0 )
		$('#carousel .slides').css('transform', 'translate3d(0px, 0px, 0px)');
}, 100);
 
  $('#slider').flexslider({
  	selector: ".sliders > .slider",
    animation: "slide",
    controlNav: true,
    animationLoop: false,
    slideshow: false,
   sync: "#carousel",
    //asNavFor: '#carousel',
    directionNav: true,
  });


	var tabs = $('#tabs');
	$('.tabs-content > div').hide();
	$('.tabs-content > div').eq(2).show();
	// $('.tabs a').click(function() {
	//   var tabId = $(this).attr('href');
	//   $('.tabs a').removeClass('active');
	//   $(this).addClass('active');
	//   $('.tabs-content > div').hide();
	//   $(tabId).show();
	// return false;
	// });
	// $('.tabs a').eq(2).click();

	$('.tabs a').hover(function() {
	  var tabId = $(this).attr('href');
	  $('.tabs a').removeClass('active');
	  $(this).addClass('active');
	  $('.tabs-content > div').stop().hide();
	  $(tabId).fadeIn(5000);
	  return false;
	}, function(){
		var tabId = $(this).attr('href');
	  
	  // $('.tabs-content > div').fadeOut(1000);
	  return false;
	});



	$('.tabs a').click(function() {
		if ( $(window).width() < 641 ) {
			var href = $(this).attr('href');
			var item = $(this).parent();

			$('.undertext').remove();

			item.after('<li class="undertext">'+$(href).html()+'</li>');

		}
		return false;
	});
			$('.tabs a').eq(2).click();

	var tabs = $('#tabs2');
	$('.tabs-content2 > div').hide();
	$('.tabs2 a').click(function() {
	  var tabId = $(this).attr('href');
	  $('.tabs2 a').removeClass('active');
	  $(this).addClass('active');
	  $('.tabs-content2 > div').hide();
	  $(tabId).show();
	return false;
	});

	$('.tabs2 a').eq(0).click();

	var tabs = $('#tabs3');
	$('.tabs-content3 > div').hide();
	$('.tabs3 a').click(function() {
	  var tabId = $(this).attr('href');
	  $('.tabs3 a').removeClass('active');
	  $(this).addClass('active');
	  $('.tabs-content3 > div').hide();
	  $(tabId).show();
	return false;
	});

	$('.tabs3 a').eq(0).click();

	var tabs = $('#tabs4');
	$('.tabs-content4 > div').hide();
	$('.tabs4 a').click(function() {
	  var tabId = $(this).attr('href');
	  $('.tabs4 a').removeClass('active');
	  $(this).addClass('active');
	  $('.tabs-content4 > div').hide();
	  $(tabId).show();
	return false;
	});
	
	$('.tabs4 a.active').click();

      new WOW().init();

      $.validator.addMethod("defaultInvalid", function(value, element) {
      return !(element.value == element.defaultValue);
    });

   $('.form').validate({
        rules: {
            phone: {
                required:true,
                defaultInvalid: true,
                minlength:1
            }
        },
        submitHandler: function(form) {
            $.ajax({
               type: "POST",
               url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {

                   if(data == 'Спасибо за заявку!') {

                        form.reset();
                        thanks();
                    }
                }
            });
            return false;
        }
    });
   $('.form2').validate({
        rules: {
        	   reminders:{
                required: true,
                defaultInvalid: true,
                minlength:1
            }, 
            email: {
                required:true,
                defaultInvalid: true,
                minlength:1
            },
        },
        submitHandler: function(form) {
            $.ajax({
               type: "POST",
               url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {

                   if(data == 'Спасибо за заявку!') {

                        form.reset();
                        thanks();
                    }
                }
            });
            return false;
        }
    });

   $(".phone").mask("+7(999) 999-99-99");

});
