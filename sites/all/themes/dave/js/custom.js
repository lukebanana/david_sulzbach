var $ = jQuery.noConflict();

function changeMenuActiveClass(activeClass){
  $(".nav-link").removeClass("selected").addClass("not-selected");
  $(activeClass).removeClass("not-selected").addClass("selected");
}

jQuery(document).ready(function() {

  // "#home-link", ".home-row"
  // "#about-link", ".about-row"

  // Find out top offsets for scrolling function
  var homePos = $(".home-row").offset().top;
  var aboutPos = $(".about-row").offset().top;
  var referPos = $(".references-row").offset().top;
  var berufsPos = $(".berufsdetails-row").offset().top;
  var hoerPos = $(".hoerbeispiele-row").offset().top;
  var kontaktPos = $(".kontakt-row").offset().top;


  var array = [["#home-link", ".home-row"],
              ["#about-link", ".about-row"],
              ["#references-link", ".references-row"],
              ["#berufsdetails-link", ".berufsdetails-row"],
              ["#hoerbeispiele-link", ".hoerbeispiele-row"],
              ["#kontakt-link", ".kontakt-row"]
            ];

  // Create Click function for each link/row
  array.forEach(function(entry) {
      $(entry[0]).click(function() {
        // Scroll to position of row, minus size of the header (overlapping)
        $("html, body").animate({
          scrollTop: ($(entry[1]).offset().top - $("#header-wrapper").height())
        }, 800);
      });
  });




  // Menu links reagiert auf scrolling
  $(window).scroll(function() {
    var currentPosition = $(window).scrollTop();

    // change active classes
    if(currentPosition >= homePos && currentPosition <= aboutPos){
      changeMenuActiveClass("#home-link");
      console.log("Holycrap, #home-link is selected!");
    }else if(currentPosition >= aboutPos && currentPosition <= referPos){
      changeMenuActiveClass("#about-link");
      console.log("Holycrap, #about-link is selected!");
    }else if(currentPosition >= referPos && currentPosition <= berufsPos){
      changeMenuActiveClass("#about-link");
      console.log("Holycrap, #about-link is selected!");
    }else if(currentPosition >= berufsPos && currentPosition <= hoerPos){
      changeMenuActiveClass("#about-link");
      console.log("Holycrap, #about-link is selected!");
    }else if(currentPosition >= hoerPos && currentPosition <= kontaktPos){
      changeMenuActiveClass("#about-link");
      console.log("Holycrap, #about-link is selected!");
    }else if(currentPosition >= kontaktPos){
      changeMenuActiveClass("#about-link");
      console.log("Holycrap, #about-link is selected!");
    }

  });


});
