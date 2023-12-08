(function($) {
	'use strict';

	var nav_offset_top = $('header').height() + 10;
	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
	function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header_area').addClass('navbar_fixed');
				} else {
					$('.header_area').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();

	
	/*----------------------------------------------------*/
	/*  Testimonials Slider
    /*----------------------------------------------------*/
	

	jQuery(document).ready(function($) {
              $('.client').owlCarousel({
                center: false,
                nav: true,
                items:1,
                loop: true,
                margin: 30,
                arrows: true,
                dots: false,
                autoplay: true,
                smartSpeed: 2500,
                navText: ["<img src='images/arrow-right.png'>","<img src='images/arrow-left.png'>"],
                responsiveClass:true,
                responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:4
                }
            }
        });

              
            });

jQuery(document).ready(function($) {
              $('.blog1').owlCarousel({
                center: true,
                nav: false,
                items:1,
                loop: true,
                margin: 10,
                autoplay:true,
                dots: false,
               smartSpeed: 2500,
               navText: ["<img src='images/arrow-right.png'>","<img src='images/arrow-left.png'>"],
                responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
              });
              
            });


$(function(){
       $('.tabs').on('click',function(){
        var id = $(this).attr('id');
        $('.tabs').removeClass('tab_nav_sel ');
        $('#'+id).addClass('tab_nav_sel');
        $('.tab').hide();
        $('#tab-'+id).show();
       });
    });


})(jQuery);



 