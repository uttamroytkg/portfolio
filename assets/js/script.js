

$(window).on('load', function(){
	$('.preloader').fadeOut()
})





$(document).ready(function(){

  
	// Fixed Menu Show Hide jquery
	$(".menu-icon").click(function(){
		$(".menu-area").toggleClass("open-menu")
	});


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


    // For Skin Color
        $('.skin-color span').click(function(e) {
          $('.skin-color span').removeClass('active');
          var $this = $(this);
          if (!$this.hasClass('active')) {
            $this.addClass('active');
          }
        });

        $(".world-icon img").click(function(){
          $(".theme-option-bar").toggleClass("active")
        });
        
    // For Skin Color


    // Start Fixed Scroll Button jQuery
    function backtotop() {
      $(window).scroll(function(){
          if ($(this).scrollTop() > 50) {
              $('#backtotop').addClass('activate');
          } else {
              $('#backtotop').removeClass('activate');
          }
      });
      $('#backtotop, #backtotop02').on('click', function () {
          $("html, body").animate({scrollTop: 0}, 600);
          return false;
      });
  }
  backtotop();
    // End Fixed Scroll Button jQuery



})

// Start WithOut Document Ready


// For Skin Color
window.addEventListener("scroll", () => {
  if(document.querySelector(".theme-option-bar").classList.contains("active")) 
  {
      document.querySelector(".theme-option-bar").classList.remove("active"); 
  }
})
// For Skin Color



// mixitup plugin
var containerEl = document.querySelector('.portfolios'); 
var mixer = mixitup(containerEl, {
    load: {
        filter: 'all'
    },
    animation: {
        effectsIn: 'fade translateY(-100%)',
        effects: 'fade translateZ(-100px)'
    }
});



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



// Skin Color 
let skinButtons = document.querySelectorAll('.skin-button');
skinButtons.forEach(color =>{
  color.addEventListener('click', () =>{
    let dataColor = color.getAttribute('data-color');
    document.querySelector(':root').style.setProperty('--skinColor', dataColor);
  });
})
// Theme Option 

