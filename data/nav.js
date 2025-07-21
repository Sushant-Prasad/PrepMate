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
            <footer>&copy; 2025 PrepMate. Built by students, for students.</footer>
    `;

    if (!this.isConnected) {
      document.body.appendChild(this);
    }

    // Select the <footer> inside this element
    const footer = this.querySelector('footer');

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




