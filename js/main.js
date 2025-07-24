// main.js

// Example: Toggle mobile nav (if you have a hamburger menu)
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Smooth scroll for internal links (optional)
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Dark mode toggle (example, if implemented)
  const themeToggle = document.querySelector("#theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  }
});
