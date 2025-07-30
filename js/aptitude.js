const categoryList = document.getElementById("categoryList");
const topicsContainer = document.getElementById("topicsContainer");
const categoryTitle = document.getElementById("categoryTitle");

function renderCategories() {
  aptitudeData.forEach((section, index) => {
    const li = document.createElement("li");
    li.textContent = section.category;
    li.dataset.index = index;

    li.addEventListener("click", () => {
      document.querySelectorAll("#categoryList li").forEach(li => li.classList.remove("active"));
      li.classList.add("active");
      displayTopics(section);
    });

    categoryList.appendChild(li);
  });
}

function displayTopics(section) {
  categoryTitle.textContent = section.category;
  topicsContainer.innerHTML = "";

  section.topics.forEach((topic) => {
    const wrapper = document.createElement("div");
    wrapper.className = "topic-wrapper";

    const card = document.createElement("div");
    card.className = "topic-card flex justify-between items-center";

    const title = document.createElement("h3");
    title.textContent = topic.title;

    const icon = document.createElement("span");
    icon.className = "toggle-icon";
    icon.innerHTML = `<i class="fas fa-chevron-down"></i>`; // Default icon (closed)

    card.appendChild(title);
    card.appendChild(icon);
    wrapper.appendChild(card);

    const questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    questionContainer.style.display = "none";
    wrapper.appendChild(questionContainer);

    card.addEventListener("click", () => {
      const isOpen = questionContainer.style.display === "block";
      if (isOpen) {
        questionContainer.style.display = "none";
        icon.innerHTML = `<i class="fas fa-chevron-down"></i>`;
      } else {
        questionContainer.innerHTML = "";
        icon.innerHTML = `<i class="fas fa-chevron-up"></i>`;
        topic.questions.forEach((q, index) => {
          const qDiv = createQuestionCard(q, index);
          questionContainer.appendChild(qDiv);
        });
        questionContainer.style.display = "block";
      }
    });

    topicsContainer.appendChild(wrapper);
  });
}

function createQuestionCard(q, index) {
  const questionDiv = document.createElement("div");
  questionDiv.className = "question-card";

  const optionsHTML = Object.entries(q.options)
    .map(([key, value]) => `<li data-option="${key}">${key}. ${value}</li>`)
    .join("");

  questionDiv.innerHTML = `
    <p><strong>Q${index + 1}:</strong> ${q.statement}</p>
    <ul class="option-list">${optionsHTML}</ul>
    <button class="check-btn">Check Solution</button>
    <div class="solution" style="display:none;">
      <p><strong>Correct Answer:</strong> ${q.answer}</p>
      <p><strong>Explanation:</strong> ${q.explanation || "No explanation available."}</p>
    </div>
  `;

  const options = questionDiv.querySelectorAll("li[data-option]");
  options.forEach((opt) => {
    opt.addEventListener("click", () => {
      const selected = opt.getAttribute("data-option");

      if (opt.classList.contains("correct") || opt.classList.contains("wrong")) {
        opt.classList.remove("correct", "wrong");
        return;
      }

      if (selected === q.answer) {
        opt.classList.add("correct");
      } else {
        opt.classList.add("wrong");
      }
    });
  });

  const checkBtn = questionDiv.querySelector(".check-btn");
  const solutionDiv = questionDiv.querySelector(".solution");

  checkBtn.addEventListener("click", () => {
    const isVisible = solutionDiv.style.display === "block";
    solutionDiv.style.display = isVisible ? "none" : "block";
    checkBtn.textContent = isVisible ? "Check Solution" : "Hide Solution";
  });

  return questionDiv;
}

document.addEventListener("DOMContentLoaded", renderCategories);
