slideArr = document.getElementsByClassName('slide')
const prevButton = document.querySelector('slider-wrapper_button-left');
const nextButton = document.querySelector('slider-wrapper_button-right');
slideCount= slideArr.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }
  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }
  
  function updateSlider() {
    slideArr.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }
  
  updateSlider();