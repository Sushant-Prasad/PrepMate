document.addEventListener("DOMContentLoaded", () => {
  const questionBox = document.getElementById("questionBox");
  const optionsBox = document.getElementById("optionsBox");
  const solutionBox = document.getElementById("solutionBox");
  const solutionText = document.getElementById("solutionText");
  const submitBtn = document.getElementById("submitBtn");
  const toggleSolutionBtn = document.getElementById("toggleSolution");

  let selectedOption = null;
  let streak = parseInt(localStorage.getItem("aptitudeStreak")) || 0;

  // Pick a random question
  const randomIndex = Math.floor(Math.random() * questionData.length);
  const currentQuestion = questionData[randomIndex];

  // Load selected question
  function loadQuestion() {
    questionBox.innerHTML = `Q. ${currentQuestion.statement}`;
    optionsBox.innerHTML = "";

    for (let key in currentQuestion.options) {
      const btn = document.createElement("button");
      btn.className =
        "w-full text-left border px-4 py-2 rounded hover:bg-green-100";
      btn.textContent = `${key}. ${currentQuestion.options[key]}`;

      btn.onclick = () => {
        document
          .querySelectorAll("#optionsBox button")
          .forEach((el) => el.classList.remove("bg-green-200"));
        btn.classList.add("bg-green-200");
        selectedOption = key;
      };

      optionsBox.appendChild(btn);
    }
  }

  // Handle submit
  submitBtn.onclick = () => {
    if (!selectedOption) {
      alert("⚠️ Please select an option before submitting.");
      return;
    }

    if (selectedOption === currentQuestion.answer) {
      streak += 1;
      localStorage.setItem("aptitudeStreak", streak);
      alert(
        `✅ Correct!\n🎯 Current Streak: ${streak} day(s)\n💪 Keep up the consistency!`
      );
    } else {
      streak = 0;
      localStorage.setItem("aptitudeStreak", streak);
      alert(`❌ Incorrect!\n😓 Streak reset. Try again tomorrow!`);
    }
  };

  // Toggle solution visibility
  toggleSolutionBtn.onclick = () => {
    solutionBox.classList.toggle("hidden");
    solutionText.innerHTML = currentQuestion.explanation;
  };

  loadQuestion();
});
