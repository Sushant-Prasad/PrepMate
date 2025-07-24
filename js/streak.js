// Import questions from multiple files
import { questions as profitLoss } from "../data/aptitude/profit-and-loss.js";
import { questions as si } from "../data/aptitude/simple-interest.js";
import { questions as ci } from "../data/aptitude/compound-interest.js";
// Add more topics as needed...

const allQuestions = [...profitLoss, ...si, ...ci]; // Add more here
const selectedQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);

const quizContainer = document.getElementById("quiz-container");
const resultDiv = document.getElementById("result");
const form = document.getElementById("quiz-form");

let score = 0;

// Render questions
selectedQuestions.forEach((q, index) => {
  const qDiv = document.createElement("div");
  qDiv.className = "question-block";
  qDiv.innerHTML = `
    <p><strong>Q${index + 1}:</strong> ${q.question}</p>
    ${q.image ? `<img src="${q.image}" alt="question image">` : ""}
    ${q.options.map((opt, i) => `
      <label>
        <input type="radio" name="q${index}" value="${opt}">
        ${opt}
      </label><br>
    `).join("")}
    <div class="feedback" id="f${index}"></div>
  `;
  quizContainer.appendChild(qDiv);
});

// Streak logic
function updateStreak() {
  const today = new Date().toISOString().split('T')[0];
  let streak = JSON.parse(localStorage.getItem("streakData")) || {
    currentStreak: 0,
    longestStreak: 0,
    lastDate: "",
    daysPracticed: [],
  };

  if (!streak.daysPracticed.includes(today)) {
    streak.daysPracticed.push(today);
    if (streak.lastDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (streak.lastDate === yesterday.toISOString().split('T')[0]) {
        streak.currentStreak += 1;
      } else {
        streak.currentStreak = 1;
      }
    } else {
      streak.currentStreak = 1;
    }
    streak.lastDate = today;
    if (streak.currentStreak > streak.longestStreak) {
      streak.longestStreak = streak.currentStreak;
    }
    localStorage.setItem("streakData", JSON.stringify(streak));
  }

  document.getElementById("current-streak").textContent = streak.currentStreak;
  document.getElementById("longest-streak").textContent = streak.longestStreak;
  document.getElementById("practice-days").textContent = streak.daysPracticed.length;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  score = 0;

  selectedQuestions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const feedback = document.getElementById(`f${index}`);
    if (selected && selected.value === q.answer) {
      score++;
      feedback.innerHTML = `<span class="correct">✔ Correct</span><br><em>Explanation: ${q.solution}</em>`;
    } else {
      feedback.innerHTML = `<span class="wrong">✘ Wrong</span><br><strong>Correct:</strong> ${q.answer}<br><em>Explanation: ${q.solution}</em>`;
    }
  });

  resultDiv.innerHTML = `<h2>Your Score: ${score} / ${selectedQuestions.length}</h2>`;
  updateStreak();
});
