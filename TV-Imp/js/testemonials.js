document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const items = document.querySelectorAll(".testimonial-item");
    const totalItems = items.length;

    function showNextItem() {
        items[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % totalItems;
        items[currentIndex].classList.add("active");
    }

    setInterval(showNextItem, 5000); // Change slide every 5 seconds
});


$(document).ready(function(){
    console.log("Document ready");
    
    var $carousel = $(".projects .owl-carousel");
    
    if ($carousel.length === 0) {
      console.error("Carousel element not found");
      return;
    }
    
    console.log("Initializing carousel");
    
    $carousel.owlCarousel({
      items: 4,
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 2 }
      },
      onInitialized: function() {
        console.log("Carousel initialized callback");
      },
      onTranslated: function() {
        console.log("Slide changed");
      }
    });
    
    console.log("Carousel initialized");
    
    // Force autoplay to start
    $carousel.trigger('play.owl.autoplay', [3000]);
    
    console.log("Autoplay triggered");
    
    // Attempt to force a slide change
    setTimeout(function() {
      console.log("Forcing next slide");
      $carousel.trigger('next.owl.carousel');
    }, 1000);
    
    // Check carousel state every second
    setInterval(function() {
      var totalItems = $carousel.find('.owl-item').length;
      var currentIndex = $carousel.find('.owl-item.active').index();
      console.log("Current slide index: " + currentIndex + " / Total items: " + totalItems);
    }, 1000);
  });