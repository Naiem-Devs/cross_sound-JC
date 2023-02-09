(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".test_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
        margin:0
      },
      767: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });


  $('.selectOne').niceSelect();
  $('.selectTwo').niceSelect();
  $('.selectThree').niceSelect();


  document.querySelector('html').classList.remove('no-js');
            if (!window.Cypress) {
      
              AOS.init({
                mirror: true,
                duration: 1500,
                initClassName: 'aos-init'
              });
      
              document.addEventListener('aos:in', function(e) {
                console.log('in!', e.detail);
              });
      
              window.addEventListener('scroll', function() {
                scrollCounter.innerHTML = window.pageYOffset;
              });
            }
 
})(jQuery);
