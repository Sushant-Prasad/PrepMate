class MyNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
                <nav class="navbar">
                <div class="logo">
                    <a href="index.html">PrepMate</a>
                </div>

                <ul class="nav-links">
                    <li><a href="study-rooms.html">Study Rooms</a></li>
                    <li><a href="dsa.html">DSA</a></li>
                    <li><a href="aptitude.html">Aptitude</a></li>
                    <li><a href="companies.html">Company Prep</a></li>
                </ul>

                <div class="right-nav">
                    <div class="search-bar">
                    <input type="text" placeholder="Search topics or questions..." />
                    </div>

                    <div class="streaks">
                    <a href="dsa-streak.html"
                        ><span title="DSA Streak 🔥">🔥</span></a
                    >
                    <a href="aptitude-streak.html"
                        ><span title="Aptitude Streak 📈">📈</span></a
                    >
                    </div>

                    <div class="profile">
                    <a href="login.html">Login</a>
                    </div>
                </div>
                </nav>
      </header>
    `;
  }
}
customElements.define('my-nav', MyNav);




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
    const footer = this.querySelector('footer .copyright');

    function adjustFooter() {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      if (docHeight <= winHeight) {
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
        footer.style.left = '0';
      } else {
        footer.style.position = 'static';
        footer.style.bottom = '';
        footer.style.left = '';
        footer.style.width = '';
      }
    }

    // Run on load and resize
    window.addEventListener('load', adjustFooter);
    window.addEventListener('resize', adjustFooter);
  }
}
customElements.define('my-foot', MyFoot);




