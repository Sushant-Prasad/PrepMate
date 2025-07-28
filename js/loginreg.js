

document.addEventListener("DOMContentLoaded", () => {
  const passwordToggles = document.querySelectorAll(".password-toggle")

  passwordToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target")
      const passwordInput = document.getElementById(targetId)
      const eyeOpenIcon = this.querySelector(".eye-open")
      const eyeClosedIcon = this.querySelector(".eye-closed")

      if (passwordInput.type === "password") {
        // Show password
        passwordInput.type = "text"
        eyeOpenIcon.style.display = "none"
        eyeClosedIcon.style.display = "block"
      } else {
        // Hide password
        passwordInput.type = "password"
        eyeOpenIcon.style.display = "block"
        eyeClosedIcon.style.display = "none"
      }
    })
  })
})
