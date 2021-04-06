
function changeSlide(direction) {
    const slides = document.querySelectorAll('.mainMobileSlider__container');
    let newSlide, actualSlide;
    if (slides && Array.from(slides) && slides.length) {
        slides.forEach((slide, position) => {
            if (slide.classList && slide.classList.length > 1) {
                actualSlide = position;
                if (direction === "next") {
                    if (slides.length - 1 !== position) { 
                        newSlide = position + 1;
                    } else {
                        newSlide = 0;
                    }
                } else if (direction === "previous") {
                    if (position === 0) {
                        newSlide = slides.length - 1; 
                    } else {
                        newSlide = position - 1;
                    }
                }
            }
        });
    }
      
    if (newSlide || newSlide === 0) {
        slides[newSlide].className = 'mainMobileSlider__container mainMobileSlider__container--active';
        slides[actualSlide].className = 'mainMobileSlider__container';
    }
}


