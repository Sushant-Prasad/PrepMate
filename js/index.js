const sliderImages = document.querySelectorAll('.hero-slider .hero-img');
      const prevBtn = document.querySelector('.hero-slider .prev');
      const nextBtn = document.querySelector('.hero-slider .next');
      let currentIndex = 0;

      function showSlide(index) {
        sliderImages.forEach((img, i) => {
          img.classList.toggle('active', i === index);
        });
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % sliderImages.length;
        showSlide(currentIndex);
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
        showSlide(currentIndex);
      }

      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);

      // Auto-slide every 4 seconds
      setInterval(nextSlide, 4000);

      showSlide(currentIndex);