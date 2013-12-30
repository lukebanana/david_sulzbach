var $ = jQuery.noConflict();

function changeMenuActiveClass(activeClass){
  $(".nav-link").removeClass("selected").addClass("not-selected");
  $(activeClass).removeClass("not-selected").addClass("selected");
}

function setContainerHeight(){
  $(".home-row .flexslider_views_slideshow_slide, .home-row").css("height", $(".home-row .views-field-field-slider-bild").css("height"));

}

// Resize height of Slider Element when window is resized
$(window).resize(setContainerHeight);


//After images are loaded
$(window).load(function(){

  // Set height for container after all images are loaded
  setContainerHeight();

  // Find out top offsets for scrolling function
  var homePos = $(".home-row").offset().top;
  var aboutPos = $(".about-row").offset().top;
  var referPos = $(".references-row").offset().top;
  var hoerPos = $(".hoerbeispiele-row").offset().top;
  var berufsPos = $(".berufsdetails-row").offset().top;
  var kontaktPos = $(".kontakt-row").offset().top;

  // Array with link IDs and matching row classes
  var array = [["#home-link", ".home-row"],
              ["#about-link", ".about-row"],
              ["#references-link", ".references-row"],
              ["#hoerbeispiele-link", ".hoerbeispiele-row"],
              ["#berufsdetails-link", ".berufsdetails-row"],
              ["#kontakt-link", ".kontakt-row"]
            ];
  //
  $(".nav-link").first().addClass("selected");


  // Create click function for each link/row
  array.forEach(function(entry) {
      $(entry[0]).click(function() {
        // Scroll to position of row, minus size of the header (overlapping)
        $("html, body").animate({
          scrollTop: ($(entry[1]).offset().top - $("#header-wrapper").height() + 10)
        }, 800);
      });
  });



  // Menu links reacts to scrolling
  $(window).scroll(function() {
    var currentPosition = $(window).scrollTop();
    currentPosition += $("#header-wrapper").height();

    // change active classes
    if(currentPosition >= homePos && currentPosition <= aboutPos){
      changeMenuActiveClass("#home-link");
    }else if(currentPosition >= aboutPos && currentPosition <= referPos){
      changeMenuActiveClass("#about-link");
    }else if(currentPosition >= referPos && currentPosition <= hoerPos){
      changeMenuActiveClass("#references-link");
    }else if(currentPosition >= hoerPos && currentPosition <= berufsPos){
      changeMenuActiveClass("#hoerbeispiele-link");
    }else if(currentPosition >= berufsPos && currentPosition <= kontaktPos){
      changeMenuActiveClass("#berufsdetails-link");
    }else if(currentPosition >= kontaktPos){
      changeMenuActiveClass("#kontakt-link");
    }

  });

  // Initialize Stellar.js
  $(window).stellar();

});
