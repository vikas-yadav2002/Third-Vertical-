// // slider 
// const slides = document.querySelectorAll('.slide');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// let currentSlide = 0;

// function showSlide(n) {
//   slides.forEach((slide, index) => {
//     if (index === n) {
//       slide.classList.add('active');
//     } else {
//       slide.classList.remove('active');
//     }
//   });
// }

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// function prevSlide() {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
// }

// prevButton.addEventListener('click', prevSlide);
// nextButton.addEventListener('click', nextSlide);

// showSlide(currentSlide);

// document.addEventListener('DOMContentLoaded', function() {
//     const slider = document.querySelector('.testimonial-slider');
//     const items = slider.querySelectorAll('.testimonial-item');
//     const prevBtn = document.querySelector('.prev-btn');
//     const nextBtn = document.querySelector('.next-btn');
//     let currentIndex = 0;

//     function showTestimonial(index) {
//         items.forEach(item => item.style.display = 'none');
//         items[index].style.display = 'block';
//     }

//     prevBtn.addEventListener('click', function() {
//         currentIndex = (currentIndex - 1 + items.length) % items.length;
//         showTestimonial(currentIndex);
//     });

//     nextBtn.addEventListener('click', function() {
//         currentIndex = (currentIndex + 1) % items.length;
//         showTestimonial(currentIndex);
//     });

//     showTestimonial(currentIndex);
// });

$(document).ready(function(){
    var owl = $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,  // Disable default nav
        dots: false, // Disable dots if you don't want them
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            1000:{
                items: 1
            }
        }
    });

    // Custom navigation
    $('.custom-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.custom-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });
});