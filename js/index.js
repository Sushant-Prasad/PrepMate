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

document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 60; // smaller = faster

  counters.forEach(counter => {
    const target = +counter.textContent.replace(/[^0-9]/g, '');
    let count = 0;
    const increment = Math.ceil(target / speed);

    function updateCounter() {
      if (count < target) {
        count += increment;
        if (count > target) count = target;
        counter.textContent = count.toLocaleString() + '+';
        setTimeout(updateCounter, 20);
      } else {
        counter.textContent = target.toLocaleString() + '+';
      }
    }

    // Only animate if number is not already zero
    if (target > 0) {
      counter.textContent = '0+';
      updateCounter();
    }
  });
});
