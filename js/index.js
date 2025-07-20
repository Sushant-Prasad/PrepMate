const slides = document.querySelectorAll('.hero-slider-large .slide');
const prevBtn = document.querySelector('.hero-slider-large .prev');
const nextBtn = document.querySelector('.hero-slider-large .next');
let currentSlide = 0;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
    if (i === idx) {
      // Restart animation
      const content = slide.querySelector('.slide-content');
      content.style.animation = 'none';
      void content.offsetWidth; // trigger reflow
      content.style.animation = '';
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

showSlide(currentSlide);