document.addEventListener("DOMContentLoaded", () => {
  // --- FAQ Accordion Logic ---
  const faqQuestions = document.querySelectorAll(".faq-question")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling // The answer div is the next sibling
      const isExpanded = question.getAttribute("aria-expanded") === "true"

      // Toggle aria-expanded attribute
      question.setAttribute("aria-expanded", !isExpanded)
      // Toggle hidden attribute for accessibility
      answer.toggleAttribute("hidden", isExpanded)
      // Toggle a class for CSS transitions
      answer.setAttribute("aria-hidden", isExpanded)

      // Adjust max-height for smooth transition
      if (!isExpanded) {
        answer.style.maxHeight = answer.scrollHeight + "px" // Set to actual height
      } else {
        answer.style.maxHeight = "0" // Collapse
      }
    })
  })

  // Initialize FAQ items: ensure only the ones marked as expanded are open
  faqQuestions.forEach((question) => {
    const answer = question.nextElementSibling
    const isExpanded = question.getAttribute("aria-expanded") === "true"

    if (isExpanded) {
      answer.style.maxHeight = answer.scrollHeight + "px"
      answer.removeAttribute("hidden")
      answer.setAttribute("aria-hidden", "false")
    } else {
      answer.style.maxHeight = "0"
      answer.setAttribute("hidden", "true")
      answer.setAttribute("aria-hidden", "true")
    }
  })
})
