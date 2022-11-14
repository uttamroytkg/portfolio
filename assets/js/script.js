

$(window).on('load', function(){
	$('.preloader').fadeOut()
})





$(document).ready(function(){


	// Fixed Menu Show Hide jquery
	$(".menu-icon").click(function(){
		$(".menu-area").toggleClass("open-menu")
	});
	// $(window).scroll(function(){
	// 	if($(".menu-area").toggleClass("open-menu")){
	// 		$(".menu-area").removeClass("open-menu")
	// 	}
	// })





	// Counter Up jquery
	$('.counter').counterUp({
        delay: 10,
        time: 1000,
      });

	

	// Text Typing Animation jquery
	$('.selector7').animatedHeadline({
	    animationType: 'clip',
  		revealDuration: 1000,
  		revealAnimationDelay: 5000,
	  });



	// MixitUp jquery 
	// var mixer = mixitup($('#mixitupId'), {
	// 	    load: {
	// 	       filter: 'all',
	// 	   },
	//    });



  // Isotop for Mixitup 
  var $grid = $('#isotop-filter').isotope({
    // options
    });
    // filter items on button click
    $('.isotop-controls').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });
  
    // Active Class add for isotope mixitup
    $('.isotop-controls li').click(function(e) {
    $('.isotop-controls li').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
      $this.addClass('active');
    }
    //e.preventDefault();
  });
  

	// Progressbar jquery
	$('.html').rProgressbar({
        percentage: 90,
        fillBackgroundColor: '#2F7DEF'
    });

    $('.css').rProgressbar({
        percentage: 90,
        fillBackgroundColor: '#2ecc71'
    });

    $('.bootstrap').rProgressbar({
        percentage: 80,
        fillBackgroundColor: '#9b59b6'
    });

    $('.javascript').rProgressbar({
        percentage: 75,
        fillBackgroundColor: '#FF6D36'
    });

    $('.jquery').rProgressbar({
        percentage: 75,
        fillBackgroundColor: '#e67e22',
        // backgroundColor: '#e67e22'
    });
    
    $('.php').rProgressbar({
      percentage: 70,
      fillBackgroundColor: '#e7ad04'
    });

    $('.wordpress').rProgressbar({
      percentage: 80,
      fillBackgroundColor: '#1abc9c'
    });

    $('.mysql').rProgressbar({
      percentage: 80,
      fillBackgroundColor: '#00cff9'
    });

})

	



// Start WithOut Document Ready


// Client Review Script
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
	  1: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    }
});


// Bolg Pagination Script
var swiper = new Swiper(".second-swiper", {
		slidesPerView: 3,
    	spaceBetween: 20,
      loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
        breakpoints: {
		  1: {
	        slidesPerView: 1,
	      },
	      576: {
	        slidesPerView: 2,
	      },
	      768: {
	        slidesPerView: 3,
	      },
	    }
      });



new WOW().init();




// Start Fixed Scroll Button jQuery
$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
	if(scrollTop > 300){
		$('#scrollBtn').fadeIn();
	}else{
		$('#scrollBtn').fadeOut();
	}

})

$('#scrollBtn').click(function(){
	$('html , body').animate({
		scrollTop : 0
	},2000);
})
// End Fixed Scroll Button jQuery




