(function($) {
  
  "use strict";

  // Preloader
  function stylePreloader() {
    $('body').addClass('preloader-deactive');
  }

  // Background Image
  $('[data-bg-img]').each(function() {
    $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
  });
  // Background Color
  $('[data-bg-color]').each(function() {
    $(this).css('background-color', $(this).data("bg-color"));
  });

  // Off Canvas JS
  var canvasWrapper = $(".off-canvas-wrapper");
  $(".btn-menu").on('click', function() {
    canvasWrapper.addClass('active');
  });
  $(".close-action > .btn-close, .off-canvas-overlay").on('click', function() {
    canvasWrapper.removeClass('active');
  });

  //Responsive Slicknav JS
  $('.main-menu').slicknav({
    appendTo: '.res-mobile-menu',
    closeOnClick: true,
    removeClasses: true,
    closedSymbol: '<i class="icofont-plus"></i>',
    openedSymbol: '<i class="icofont-minus"></i>'
  });

  // Off Canvas JS
  var quickViewModal = $(".product-quick-view-modal");
  $(".product-action .action-quick-view").on('click', function() {
    quickViewModal.addClass('active');
    $("body").addClass('fix');
  });
  $(".btn-close, .canvas-overlay").on('click', function() {
    quickViewModal.removeClass('active');
    $("body").removeClass('fix');
  });

  // Off Canvas JS
  var sidebarCartModal = $(".sidebar-cart-modal");
  $(".header-action-cart .cart-icon").on('click', function() {
    sidebarCartModal.addClass('sidebar-cart-active');
  });
  $(".sidebar-cart-content .cart-close").on('click', function() {
    sidebarCartModal.removeClass('sidebar-cart-active');
  });

  // Swipper JS
  var homeSlider = new Swiper('.home-slider-container', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 0,
    effect: 'fade',
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  // Swipper JS
  var teamSlider = new Swiper('.team-slider-container', {
    slidesPerView: 3,
    loop: true,
    spaceBetween : 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1200:{
          slidesPerView : 3
      },

      992:{
          slidesPerView : 3
      },

      768:{
          slidesPerView : 2

      },

      576:{
          slidesPerView : 2
      },

      0:{
          slidesPerView : 1
      }
    }
  });

  // Swipper JS
  var testimonialSlider = new Swiper('.testimonial-slider-container', {
    slidesPerView: 2,
    loop: true,
    spaceBetween : 30,
    breakpoints: {
      1200:{
          slidesPerView : 2
      },

      992:{
          slidesPerView : 2
      },

      768:{
          slidesPerView : 2

      },

      576:{
          slidesPerView : 1
      },

      0:{
          slidesPerView : 1
      }
    }
  });

  // Swipper JS
  var teamSlider = new Swiper('.product4-slider-container', {
    slidesPerView: 4,
    loop: true,
    spaceBetween : 30,
    autoplay: {
      delay: 4000,
    },
    breakpoints: {
      1200:{
          slidesPerView : 4
      },

      992:{
          slidesPerView : 3
      },

      768:{
          slidesPerView : 2

      },

      576:{
          slidesPerView : 2
      },

      0:{
          slidesPerView : 1
      }
    }
  });

  var brandLogoSlider = new Swiper('.brand-logo-slider-container', {
    slidesPerView : 6,
    loop: true,
    speed: 1000,
    spaceBetween : 30,
    autoplay: false,
    breakpoints: {
      992:{
          slidesPerView : 6
      },

      768:{
          slidesPerView : 3

      },

      576:{
          slidesPerView : 3
      },

      380:{
          slidesPerView : 3
      },

      0:{
          slidesPerView : 2
      }
    }
  });

  $('.single-product-thumb-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.single-product-nav-slider'
  });

  $('.single-product-nav-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      vertical:true,
      asNavFor: '.single-product-thumb-slider',
      arrows: true,
      prevArrow: '<span class="slider-icon slider-icon-prev"><i class="icofont-simple-up"></i></span>',
      nextArrow: '<span class="slider-icon slider-icon-next"><i class="icofont-simple-down"></i></span>',
      dots: false,
      focusOnSelect: true,
      verticalSwiping:true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            verticalSwiping: false,
            vertical: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            verticalSwiping: false,
            vertical: false,
          }
        }
      ]
  });

  // Fancybox Js
  $('.lightbox-image').fancybox();

  //Video Popup
  $('.play-video-popup').fancybox();

  //Shop review btn
  $(".review-write-btn").on('click', function() {
    $(".product-review-form").toggle('active');
  });

  // Images Zoom Js
  $('.zoom-hover').zoom();


  // Countdown Js
  //jQuery(document).ready(function($) {
  // Countdown JS
    /*var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear() + 1;

    var nextyear = month + '/' + day + '/' + year + ' 07:07:07';

    $('.countdown-timer').countdown({
      date: '4/12/2022 23:59:59', // TODO Date format: 07/27/2017 17:00:00
      offset: +2, // TODO Your Timezone Offset
      day: 'Day',
      days: 'Days',
      hideOnComplete: true
    }, function (container) {
      alert('Done!');
    });
  });*/

  // Product Qty
  var proQty = $(".pro-qty");
  proQty.append('<a href="#" class="inc qty-btn">+</a>');
  proQty.append('<a href="#" class= "dec qty-btn">-</a>');
  $('.qty-btn').on('click', function(e) {
    e.preventDefault();
    var $button = $(this);
    var oldValue = $button.parent().find('input').val();
    if ($button.hasClass('inc')) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find('input').val(newVal);
  });

  // Product Qty
  var proQty2 = $(".pro-qty2");
  proQty2.append('<a href="#" class= "dec qty-btn">(-)</a>');
  proQty2.append('<a href="#" class="inc qty-btn">(+)</a>');
  $('.qty-btn').on('click', function(e) {
    e.preventDefault();
    var $button2 = $(this);
    var oldValue2 = $button2.parent().find('input').val();
    if ($button2.hasClass('inc')) {
      var newVal2 = parseFloat(oldValue2) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue2 > 1) {
        var newVal2 = parseFloat(oldValue2) - 1;
      } else {
        newVal2 = 1;
      }
    }
    $button2.parent().find('input').val(newVal2);
  });

  // Scroll Top Hide Show
  var varWindow = $(window);
  varWindow.on('scroll', function(){
    if ($(this).scrollTop() > 250) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }

    // Sticky Header
    if($('.sticky-header').length){
      var windowpos = $(this).scrollTop();
      if (windowpos >= 5) {
        $('.sticky-header').addClass('sticky');
        $('.header-wrapper').addClass('menu-top');
      } else {
        $('.sticky-header').removeClass('sticky');
        $('.header-wrapper').removeClass('menu-top');

      }
    }
  });

  // Search Box  JS
  $(".search-icon").on('click', function() {
    $(".btn-search").addClass('show');
    $(".btn-search-content").addClass("show").focus();
  });
  $(".search-icon-close").on('click', function() {
      $(".btn-search").removeClass("show");
      $(".btn-search-content").removeClass("show");
  });
  $(".search-icon-close").on('click', function() {
    $(".btn-search-toggle").addClass('search-show');
  });
  $(".search-icon").on('click', function() {
      $(".btn-search-toggle").removeClass("search-show");
  });

  // Ajax Contact Form JS
  var form = $('#contact-form');
  var formMessages = $('.form-message');

  $(form).submit(function(e) {
    e.preventDefault();
    var formData = form.serialize();
    $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: formData
    }).done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('alert alert-danger');
        $(formMessages).addClass('alert alert-success fade show');

        // Set the message text.
        formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
        formMessages.append(response);

        // Clear the form.
        $('#contact-form input,#contact-form textarea').val('');
    }).fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('alert alert-success');
        $(formMessages).addClass('alert alert-danger fade show');

        // Set the message text.
        if (data.responseText !== '') {
            formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
            formMessages.append(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occurred and your message could not be sent.');
        }
    });
  });

  //Scroll To Top
  $('.scroll-to-top').on('click', function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  // Reveal Footer JS
  let revealId = $(".reveal-footer"),
    footerHeight = revealId.outerHeight(),
    windowWidth = $(window).width(),
    windowHeight = $(window).outerHeight();

  if (windowWidth > 991 && windowHeight > footerHeight) {
    $(".site-wrapper-reveal").css({
      'margin-bottom': footerHeight + 'px'
    });
  }
  
  
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
  
  varWindow.on('load', function() {
    AOS.init({
      once: true,
    });
    stylePreloader();
  });

})(window.jQuery);

/*--Mobile Menu--*/
      // on document ready
    $(document).ready(function() {
    
        // show/hide the mobile menu based on class added to container
        $('.menu-icon').click(function() {
            $(this).parent().toggleClass('is-tapped');
            $('#hamburger').toggleClass('open');
        });
    
        // handle touch device events on drop down, first tap adds class, second navigates
        $('.touch .mobile-header-navigation-area li.nav-dropdown > a').on('touchend',
            function(e) {
                if ($('.menu-icon').is(':hidden')) {
                    var parent = $(this).parent();
                    $(this).find('.clicked').removeClass('clicked');
                    if (parent.hasClass('clicked')) {
                        window.location.href = $(this).attr('href');
                    } else {
                        $(this).addClass('linkclicked');
    
                        // close other open menus at this level
                        $(this).parent().parent().find('.clicked').removeClass('clicked');
    
                        parent.addClass('clicked');
                        e.preventDefault();
                    }
                }
            });
    
        // handle the expansion of mobile menu drop down nesting
        $('.mobile-header-navigation-area li.nav-dropdown').click(
            function(event) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else {
                    event.cancelBubble = true;
                }
    
                if ($('.menu-icon').is(':visible')) {
                    $(this).find('> ul').toggle();
                    $(this).toggleClass('expanded');
                }
            }
        );
    
        // prevent links for propagating click/tap events that may trigger hiding/unhiding
        $('.mobile-header-navigation-area a.nav-dropdown, .mobile-header-navigation-area li.nav-dropdown a').click(
            function(event) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else {
                    event.cancelBubble = true;
                }
            }
        );
    
        // javascript fade in and out of dropdown menu
        $('.no-touch .mobile-header-navigation-area li').hover(
            function() {
                if (!$('.menu-icon').is(':visible')) {
                    $(this).find('> ul').fadeIn(100);
                }
            },
            function() {
                if (!$('.menu-icon').is(':visible')) {
                    $(this).find('> ul').fadeOut(100);
                }
            }
        );
    });  
    
    
    //owl carousel
    
     (function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      autoplay: true,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();


    //testimonial
    
 $('.hero-slider, .testimonial').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
    $('.client-slid01').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    })
    $('.client-slid02').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    })
    
    function openNavSer() {
      document.getElementById("service-menu").style.display = "block";
      document.getElementById("industries-menu").style.display = "none";
      document.getElementById("careers-menu").style.display = "none";
    }

    function closeNavSer() {
      document.getElementById("service-menu").style.display = "none";
    }
   
    // ----------------------
    function openNavInd() {
      document.getElementById("industries-menu").style.display = "block";
      document.getElementById("service-menu").style.display = "none";
      document.getElementById("careers-menu").style.display = "none";
    }

    function closeNavInd() {
      document.getElementById("industries-menu").style.display = "none";
    }
    
    function openNavCar() {
      document.getElementById("careers-menu").style.display = "block";
      document.getElementById("service-menu").style.display = "none";
      document.getElementById("industries-menu").style.display = "none";
    }
    
    function closeNavCar() {
      document.getElementById("careers-menu").style.display = "none";
    }
    
    /*industries home*/
    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
