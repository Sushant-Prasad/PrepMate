class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Navbar -->
  <nav class="bg-white shadow-sm fixed top-0 inset-x-0 z-50" id="nav">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Left: Logo & Desktop Nav -->
        <div class="flex items-center">
          <a href="index.html" class="">
            <img src="assets/logo.png" alt="PrepMate Logo" id="logo"/>
          </a>
          <div class="hidden lg:flex space-x-8 ml-6">
            <a href="study-rooms.html" class="text-green-600 hover:text-green-800 hover:border-b-2 border-green-500">Study Rooms</a>
            <a href="dsa.html" class="text-green-600 hover:text-green-800 hover:border-b-2 border-green-500">DSA</a>
            <a href="aptitude.html" class="text-green-600 hover:text-green-800 hover:border-b-2 border-green-500">Aptitude</a>
            <a href="companies.html" class="text-green-600 hover:text-green-800 hover:border-b-2 border-green-500">Company Prep</a>
          </div>
        </div>

        <!-- Right: Search, Icons, Login, Menu -->
        <div class="flex items-center">
          <!-- Search - Desktop -->
          <div class="hidden lg:block mr-4">
            <input type="text" id="searchInput" placeholder="Search topics or questions..."
              class="w-64 pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
          </div>

          <!-- Streak Icons - Desktop -->
          <div class="hidden lg:flex items-center space-x-4 mr-4">
            <div class="flex items-center text-yellow-600">
              <span class="text-xl mr-1"><a href="dsa-streak.html"><i class="fa-solid fa-fire"></i></a></span><span class="text-sm font-medium">5</span>
            </div>
            <div class="flex items-center text-blue-600">
              <span class="text-xl mr-1"><a href="aptitude-streak.html"><i class="fa-solid fa-brain"></i>
</a></span><span class="text-sm font-medium">3</span>
            </div>
          </div>

          <!-- Login - Desktop -->
          <div class="hidden lg:block">
            <button class="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md" id="loginButton"><a href="login.html">Login</a></button>
            <a href="profile.html"><img src="assets/profile.jpg" class="h-10 w-10 rounded-full hidden" id="profile"/></a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="lg:hidden">
            <button id="menuToggle" class="text-green-600 p-2 hover:bg-green-50 rounded-md">
              <svg id="menuIcon" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobileMenu" class="hidden lg:hidden inset-0 bg-white z-40 pt-2  absolute top-0 h-max">
      <div class="space-y-4 h-max bg-white px-5 pb-4">
        <!-- Close Button -->
        <div class="flex justify-end">
          <a href="index.html" class="absolute left-0 -mt-10">
            <img src="assets/logo.png" alt="PrepMate Logo" id="logo"/>
          </a>
          <button id="menuClose" class="text-green-600 hover:bg-green-50 p-2 rounded-md text-xl">❌</button>
        </div>

        <!-- Nav Links -->
        <a href="study-rooms.html" class="block text-lg text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg">Study Rooms</a>
        <a href="dsa.html" class="block text-lg text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg">DSA</a>
        <a href="aptitude.html" class="block text-lg text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg">Aptitude</a>
        <a href="companies.html" class="block text-lg text-green-600 hover:bg-grlgn-50 px-4 py-2 rounded-lg">Company Prep</a>

        <!-- Search -->
        <input type="text" placeholder="Search topics or questions..."
          class="w-full pl-3 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">

        <!-- Streak Icons -->
        <div class="flex justify-center space-x-6 py-4">
          <div class="flex items-center text-yellow-600">
            <span class="text-xl mr-2"><a href="dsa-streak.html"><i class="fa-solid fa-fire"></i></a></span><span class="text-base font-medium">5 day streak</span>
          </div>
          <div class="flex items-center text-blue-600">
            <span class="text-xl mr-2"><a href="aptitude-streak.html"><i class="fa-solid fa-brain"></i>
</a></span><span class="text-base font-medium">3 day streak</span>
          </div>
        </div>

        <!-- Login -->
       <a href="login.html"> <button class="w-full bg-green-500 hover:bg-green-700 text-white py-3 rounded-md">Login</button></a>
      </div>
    </div>
  </nav>

  <!-- Spacer -->
  <div class="pt-20"></div>
    `;

    // Check login status and update UI accordingly
    if (sessionStorage.getItem("isLoggedIn") === "true") {
      this.showProfile();
    }
  }
  showProfile() {
    const profile = this.querySelector("#profile");
    const loginButton = this.querySelector("#loginButton");

    if (profile && loginButton) {
      profile.classList.remove("hidden");
      loginButton.classList.add("hidden");
    }
  }
}
customElements.define("my-nav", MyNav);

class MyFoot extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
  <!-- <div class="footer"> -->
  <div class="footer-container">
    <div class="footer-section">
      <h2>We are also available </h2>
      <ul class="social-media">
          <li><i id="facebook" class="fa-brands fa-facebook"></i><a href="#">Facebook</a></li>
          <li><i id="x" class="fa-brands fa-x-twitter"></i><a href="#">Twitter</a></li>
          <li><i id="youtube" class="fa-brands fa-youtube"></i><a href="#">Youtube</a></li>
          <li><i id="instagram" class="fa-brands fa-instagram"></i><a href="#">Instagram</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <ul class="foot-info">
        <li><a href="contactFaq.html">Contact Us</a></li>
        <p>|</p>
        <li><a href="contactFaq.html">FAQ</a></li>
        <p>|</p>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
  <!-- </div> -->
</footer>
<p class="copyright">&copy; 2025 PrepMate. Built by students, for students.</p>
    `;

    if (!this.isConnected) {
      document.body.appendChild(this);
    }

    // Select the <footer> inside this element
    const footer = this.querySelector("footer .copyright");

    function adjustFooter() {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      if (docHeight <= winHeight) {
        footer.style.position = "absolute";
        footer.style.bottom = "0";
        footer.style.left = "0";
      } else {
        footer.style.position = "static";
        footer.style.bottom = "";
        footer.style.left = "";
        footer.style.width = "";
      }
    }

    // Run on load and resize
    // window.addEventListener("load", adjustFooter);
    // window.addEventListener("resize", adjustFooter);
  }
}
customElements.define("my-foot", MyFoot);

// toggle to hamburger menu

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuClose = document.getElementById("menuClose");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

menuClose.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});
