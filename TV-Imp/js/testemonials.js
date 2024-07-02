const slider = document.querySelector('.slider');
const testimonials = document.querySelectorAll('.testimonial');
const testimonialWidth = 100 / 3;
let currentIndex = 0;
let startX;
let isDragging = false;

// Clone first and last slides
const firstClone = testimonials[0].cloneNode(true);
const lastClone = testimonials[testimonials.length - 1].cloneNode(true);

// Append clones to the slider
slider.appendChild(firstClone);
slider.insertBefore(lastClone, testimonials[0]);

// Adjust slider position to hide the last clone
slider.style.transform = `translateX(-${testimonialWidth}%)`;

function slide(direction) {
    currentIndex += direction;
    updateSliderPosition(true);
}

function updateSliderPosition(smooth = false) {
    if (smooth) {
        slider.style.transition = 'transform 0.3s ease-out';
    } else {
        slider.style.transition = 'none';
    }
    slider.style.transform = `translateX(-${(currentIndex + 1) * testimonialWidth}%)`;

    // If we've moved to the clone slide, wait for transition to end then jump to the real slide
    if (smooth) {
        setTimeout(() => {
            if (currentIndex === -1) {
                currentIndex = testimonials.length - 1;
                updateSliderPosition(false);
            } else if (currentIndex === testimonials.length) {
                currentIndex = 0;
                updateSliderPosition(false);
            }
        }, 300);
    }
}

function autoSlide() {
    slide(1);
}

// Set up auto-sliding every 5 seconds
const autoSlideInterval = setInterval(autoSlide, 3000);

// Mouse events for dragging
slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slider.offsetLeft;
    slider.style.cursor = 'grabbing';
});

slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) / slider.offsetWidth * 100;
    slider.style.transition = 'none';
    slider.style.transform = `translateX(${-(currentIndex + 1) * testimonialWidth + walk}%)`;
});

slider.addEventListener('mouseup', finishDragging);
slider.addEventListener('mouseleave', finishDragging);

function finishDragging(e) {
    if (!isDragging) return;
    isDragging = false;
    slider.style.cursor = 'grab';
    const x = e.type === 'mouseup' ? e.pageX : e.changedTouches[0].pageX;
    const walk = (x - startX) / slider.offsetWidth * 100;
    if (Math.abs(walk) > 10) {
        if (walk > 0) {
            slide(-1);
        } else {
            slide(1);
        }
    } else {
        updateSliderPosition(true);
    }
}

// Touch events for mobile devices
slider.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
});

slider.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) / slider.offsetWidth * 100;
    slider.style.transition = 'none';
    slider.style.transform = `translateX(${-(currentIndex + 1) * testimonialWidth + walk}%)`;
});

slider.addEventListener('touchend', finishDragging);