const questions = [
  {
    title: "1. Two Sum Problem",
    desc: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    
Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]`,
  },
  {
    title: "2. Reverse a Linked List",
    desc: `Reverse a singly linked list.
    
Example:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL`,
  },
  {
    title: "3. Valid Parentheses",
    desc: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

Example:
Input: s = "()[]{}"
Output: true`,
  }
];

let currentQuestion = {};
let streak = localStorage.getItem("streak") || 0;

document.getElementById("streak-count").innerText = streak;
loadRandomQuestion();

function loadRandomQuestion() {
  const randIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[randIndex];
  document.getElementById("question-title").innerText = currentQuestion.title;
  document.getElementById("question-desc").innerText = currentQuestion.desc;
}

function openEditor() {
  document.getElementById("editor-box").style.display = "block";
}

function submitSolution() {
  const code = document.getElementById("code-editor").value.trim();
  if (code.length < 10) {
    alert("Please write a valid solution before submitting.");
    return;
  }

  // Increment streak
  streak++;
  localStorage.setItem("streak", streak);
  document.getElementById("streak-count").innerText = streak;

  // Reset UI
  alert("✅ Solution submitted successfully!");
  document.getElementById("code-editor").value = "";
  document.getElementById("editor-box").style.display = "none";
  loadRandomQuestion();
}
