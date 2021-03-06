var $ = jQuery.noConflict();
var deviceWidth = $(window).width();
var mobileDeviceWidth = 720;

// Find out top offsets for scrolling function
var homePos;
var aboutPos;
var hoerPos;
var referPos;
var berufsPos;
var kontaktPos;



// Changes active class of Navigation Links
function changeMenuActiveClass(activeClass){
  $('.nav-link').removeClass('selected').addClass('not-selected');
  $(activeClass).removeClass('not-selected').addClass('selected');
}

// Check current position and corresponding active menu class
function checkActiveMenuClass(currentPosition){

  // Find out top offsets for scrolling function
  homePos = $('.home-row').offset().top;
  aboutPos = $('.about-row').offset().top;
  hoerPos = $('.hoerbeispiele-row').offset().top;
  referPos = $('.references-row').offset().top;
  berufsPos = $('.berufsdetails-row').offset().top;
  kontaktPos = $('.kontakt-row').offset().top;

  // change active classes
  if(currentPosition >= homePos && currentPosition <= aboutPos){
    changeMenuActiveClass('#home-link');
  }else if(currentPosition >= aboutPos && currentPosition <= hoerPos){
    changeMenuActiveClass('#about-link');
  }else if(currentPosition >= hoerPos && currentPosition <= referPos){
    changeMenuActiveClass('#hoerbeispiele-link');
  }else if(currentPosition >= referPos && currentPosition <= berufsPos){
    changeMenuActiveClass('#references-link');
  }else if(currentPosition >= berufsPos && currentPosition <= kontaktPos){
    changeMenuActiveClass('#berufsdetails-link');
  }else if(currentPosition >= kontaktPos){
    changeMenuActiveClass('#kontakt-link');
  }
}

// Sets Height of Flexslider Container
function setContainerHeight(){
  $('.home-row .flexslider_views_slideshow_slide, .home-row').css('height', $('.home-row .views-field-field-slider-bild').css('height'));
}

// Toggles visibility of Navigation Bar (CSS)
function toggleNavigationVisibility(status){
  if(status == true){
    $('#navigation-bar').css('display','block');
  }else if(status == false){
    $('#navigation-bar').css('display','none');
  }
}

// Used for window resizing
function refreshSizes(){
  setContainerHeight();

  // Find out device width
  deviceWidth = $(window).width();

  if($(window).width() > mobileDeviceWidth){
    toggleNavigationVisibility(true);
  }else{
    toggleNavigationVisibility(false);
  }
}

// Resize height of Slider Element when window is resized
$(window).resize(refreshSizes);


//After images are loaded
$(window).load(function(){

  // Check if mobile device is used
  var isMobileDevice = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));

  if(isMobileDevice){
    FastClick.attach(document.body);
  }

  // Set height for container after all images are loaded
  setContainerHeight();

  var headerWrapperHeight = $('#header-wrapper').height();

  // Find out top offsets for scrolling function
  homePos = document.getElementsByClassName('home-row').offsetTop;
  aboutPos = document.getElementsByClassName('about-row').offsetTop;
  hoerPos = document.getElementsByClassName('hoerbeispiele-row').offsetTop;
  referPos = document.getElementsByClassName('references-row').offsetTop;
  berufsPos = document.getElementsByClassName('berufsdetails-row').offsetTop;
  kontaktPos = document.getElementsByClassName('kontakt-row').offsetTop;

  // Array with link IDs and matching row classes
  var array = [['#home-link', '.home-row'],
              ['#about-link', '.about-row'],
              ['#hoerbeispiele-link', '.hoerbeispiele-row'],
              ['#references-link', '.references-row'],
              ['#berufsdetails-link', '.berufsdetails-row'],
              ['#kontakt-link', '.kontakt-row']
            ];
  // Set first menu entry as selected when page loads
  $('.nav-link').first().addClass('selected');


  // Create Click Function for mobile menu link
  $('.mobile-menu-link').click(function(e) {
    e.preventDefault(); // Prevents Slidetoggle from scrolling back to the top
    $('#navigation-bar').slideToggle('slow/400/fast');
  });

  // Create click function for each link/row
  array.forEach(function(entry) {
      $(entry[0]).click(function() {
        if (deviceWidth <= mobileDeviceWidth) {
          $('#navigation-bar').slideToggle('slow/400/fast');
        }

        // Scroll to position of row, minus size of the header (overlapping)
        $('html, body').animate({
          scrollTop: ($(entry[1]).offset().top - headerWrapperHeight + 10)
        }, 800, function(){
          $('html,body').clearQueue();
        });
      });
  });


  // Menu links reacts to scrolling
  $(window).scroll(function() {
    var currentPosition = 0;
    currentPosition= window.pageYOffset;
    currentPosition += $('#header-wrapper').height();

    checkActiveMenuClass(currentPosition);
  });

  // iPad/iPhone support
  $('body').bind('touchmove', function(e) {
    var currentPosition = 0;
    currentPosition= window.pageYOffset;
    currentPosition += $('#header-wrapper').height();

    checkActiveMenuClass(currentPosition);
  });

  // Initialize Stellar.js
  $(window).stellar();

});
