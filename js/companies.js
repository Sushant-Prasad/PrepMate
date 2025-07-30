const companyList = document.getElementById("companyList");
const dsaContent = document.getElementById("dsaContent");
const aptitudeContent = document.getElementById("aptitudeContent");
const tabSection = document.getElementById("tabSection");
const placeholderMessage = document.getElementById("placeholderMessage");
const companyContent = document.getElementById("companyContent");
const featuredCompaniesDiv = document.getElementById("featuredCompanies");
const viewAllBtn = document.getElementById("viewAllBtn");

companyContent.style.backgroundImage = "url('assets/img3.png')";

// Helper: Render company links
function renderCompanyLinks(list, container) {
  container.innerHTML = "";
  list.forEach((companyObj) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = companyObj.companyName;

    // Add shared styling class
    a.className = "featured-company-link";

    a.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll("#companyList a").forEach((link) => {
        link.classList.remove("active-company");
      });
      a.classList.add("active-company");
      showCompanyData(companyObj);
    });

    li.appendChild(a);
    container.appendChild(li);
  });
}

// Responsive logic
function handleCompanySidebarDisplay() {
  if (window.innerWidth <= 768) {
    featuredCompaniesDiv.style.display = "block";
    viewAllBtn.style.display = "block";
    companyList.style.display = "none";
  } else {
    featuredCompaniesDiv.style.display = "none";
    viewAllBtn.style.display = "none";
    companyList.style.display = "flex";
  }
}

// Featured Companies
const featuredCompanies = companyQues.slice(0, 4);
featuredCompaniesDiv.innerHTML = "<h5>Featured</h5>";
const featuredList = document.createElement("ul");
featuredList.className = "featured-list";
renderCompanyLinks(featuredCompanies, featuredList);
featuredCompaniesDiv.appendChild(featuredList);

// All Companies
renderCompanyLinks(companyQues, companyList);

// View All Button
viewAllBtn.addEventListener("click", () => {
  featuredCompaniesDiv.style.display = "none";
  viewAllBtn.style.display = "none";
  companyList.style.display = "flex";
});

// Handle screen size on load and resize
handleCompanySidebarDisplay();
window.addEventListener("resize", handleCompanySidebarDisplay);

// Show company data

function showCompanyData(companyObj) {
  
if (window.innerWidth <= 768) {
  featuredCompaniesDiv.style.display = "none";
  viewAllBtn.style.display = "none";
  companyList.style.display = "flex";
}

  companyContent.style.backgroundImage = "url('./image/img5.webp')";
  placeholderMessage.style.display = "none";
  tabSection.style.display = "block";
  dsaContent.innerHTML = "";
  aptitudeContent.innerHTML = "";

  for (const topic in companyObj.dsa) {
    companyObj.dsa[topic].forEach((q) => {
      dsaContent.innerHTML += createQuestionCard(q);
    });
  }

  companyObj.aptitude.forEach((section) => {
    const wrapper = document.createElement("div");
    wrapper.className = "aptitude-item";

    const header = document.createElement("div");
    header.className = "aptitude-header";
    header.addEventListener("click", () => {
      header.classList.toggle("open");
      const body = header.nextElementSibling;
      const isOpen = body.style.display === "block";
      body.style.display = isOpen ? "none" : "block";

      if (!isOpen) {
        const allQuestions = body.querySelectorAll(".aptitude-question");
        allQuestions.forEach((qDiv) => {
          qDiv.querySelectorAll("li[data-option]").forEach((option) => {
            option.classList.remove("correct", "wrong");
          });
          const solution = qDiv.querySelector(".solution");
          if (solution) solution.style.display = "none";
          qDiv.classList.remove("solution-shown");
        });
      }
    });

    const categoryClassMap = {
      "Numerical Ability": "numerical",
      Reasoning: "reasoning",
      "Verbal Ability": "verbal",
    };
    const badgeClass = categoryClassMap[section.category] || "default";

    header.innerHTML = `
      <i class="fa-solid fa-chevron-down dropdown-icon"></i>
      <span class="aptitude-title">${section.title}</span>
      <span class="category-badge ${badgeClass}">${section.category}</span>
    `;

    const body = document.createElement("div");
    body.className = "aptitude-body";
    body.style.display = "none";

    section.questions.forEach((question, index) => {
      const qDiv = document.createElement("div");
      qDiv.className = "aptitude-question";

      const optionsHtml = Object.entries(question.options)
        .map(([key, value]) => {
          return `<li data-option="${key}">${key}. ${value}</li>`;
        })
        .join("");

      qDiv.innerHTML = `
        <p><strong>Q${index + 1}:</strong> ${question.statement}</p>
        <ul class="option-list">${optionsHtml}</ul>
        <button class="check-btn">Check Solution</button>
        <div class="solution" style="display: none;">
          <p><strong>Correct Answer:</strong> ${question.answer}</p>
          <p><strong>Explanation:</strong> ${question.explanation || "No explanation available."}</p>
        </div>
      `;

      const options = qDiv.querySelectorAll("li[data-option]");
      options.forEach((optionEl) => {
        optionEl.addEventListener("click", () => {
          if (qDiv.classList.contains("solution-shown")) return;

          options.forEach((el) => el.classList.remove("correct", "wrong"));
          const selected = optionEl.getAttribute("data-option");
          const correct = question.answer;
          optionEl.classList.add(selected === correct ? "correct" : "wrong");
        });
      });

      const checkBtn = qDiv.querySelector(".check-btn");
      const solutionDiv = qDiv.querySelector(".solution");
      checkBtn.addEventListener("click", () => {
        solutionDiv.style.display = solutionDiv.style.display === "block" ? "none" : "block";
        qDiv.classList.add("solution-shown");
      });

      body.appendChild(qDiv);
    });

    wrapper.appendChild(header);
    wrapper.appendChild(body);
    aptitudeContent.appendChild(wrapper);
  });

  switchTab("dsaTab");
}

// Tabs
document.getElementById("dsaTab").addEventListener("click", () => switchTab("dsaTab"));
document.getElementById("aptitudeTab").addEventListener("click", () => switchTab("aptitudeTab"));

function switchTab(tabId) {
  const dsaTab = document.getElementById("dsaTab");
  const aptitudeTab = document.getElementById("aptitudeTab");

  if (tabId === "dsaTab") {
    dsaContent.style.display = "block";
    aptitudeContent.style.display = "none";
    dsaTab.classList.add("active");
    aptitudeTab.classList.remove("active");
  } else {
    dsaContent.style.display = "none";
    aptitudeContent.style.display = "block";
    aptitudeTab.classList.add("active");
    dsaTab.classList.remove("active");
  }
}

function createQuestionCard(question, index = "") {
  const isComplete = localStorage.getItem(question.title) === "true";
  const checkIcon = isComplete
    ? `<i class="fas fa-check check-icon"></i>`
    : `<i class="far fa-circle check-icon" style="color: gray;"></i>`;

  return `
    <div class="question-item" onclick="toggleComplete(this.querySelector('i'), '${question.title}')">
      <div class="question-left">
        ${checkIcon}
        <a href="${question.link}" target="_blank" class="question-title">${index ? index + ". " : ""}${question.title}</a>
      </div>
      <div class="question-right">
        <span class="accuracy">${question.accuracy || ""}</span>
        <span class="difficulty ${getDifficultyClass(question.difficulty)}">${question.difficulty}</span>
      </div>
    </div>
  `;
}

function getDifficultyClass(difficulty) {
  switch (difficulty.toLowerCase()) {
    case "easy": return "easy";
    case "medium":
    case "med.": return "med";
    case "hard": return "hard";
    default: return "";
  }
}

function toggleComplete(iconElem, title) {
  const isComplete = localStorage.getItem(title) === "true";
  if (isComplete) {
    localStorage.setItem(title, "false");
    iconElem.classList.remove("fa-check-circle");
    iconElem.classList.add("fa-circle");
    iconElem.style.color = "gray";
  } else {
    localStorage.setItem(title, "true");
    iconElem.classList.remove("fa-circle");
    iconElem.classList.add("fa-check-circle");
    iconElem.style.color = "green";
  }
}
