const companyList = document.getElementById("companyList");
const dsaContent = document.getElementById("dsaContent");
const aptitudeContent = document.getElementById("aptitudeContent");
const tabSection = document.getElementById("tabSection");
const placeholderMessage = document.getElementById("placeholderMessage");
companyQues = [
  {
    id: 1,
    companyName: "Amazon",
    dsa: {
      Arrays: [
        {
          title: "Two Sum",
          difficulty: "Easy",
          link: "https://example.com/amazon/dsa/two-sum",
        },
        {
          title: "Maximum Subarray",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/max-subarray",
        },
      ],
      "Dynamic Programming": [
        {
          title: "0/1 Knapsack",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/knapsack",
        },
        {
          title: "Longest Palindromic Substring",
          difficulty: "Hard",
          link: "https://example.com/amazon/dsa/longest-palindrome",
        },
      ],
    },
    aptitude: {
      "Numerical Ability": [
        {
          title: "Profit and Loss",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/profit-loss",
        },
        {
          title: "Simple Interest",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/simple-interest",
        },
      ],
      Reasoning: [
        {
          title: "Blood Relations",
          difficulty: "Medium",
          link: "https://example.com/amazon/aptitude/blood-relations",
        },
      ],
      "Verbal Ability": [
        {
          title: "Synonyms",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/synonyms",
        },
      ],
    },
  },
  {
    id: 2,
    companyName: "Google",
    dsa: {
      Arrays: [
        {
          title: "Two Sum",
          difficulty: "Easy",
          link: "https://example.com/amazon/dsa/two-sum",
        },
        {
          title: "Maximum Subarray",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/max-subarray",
        },
      ],
      "Dynamic Programming": [
        {
          title: "0/1 Knapsack",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/knapsack",
        },
        {
          title: "Longest Palindromic Substring",
          difficulty: "Hard",
          link: "https://example.com/amazon/dsa/longest-palindrome",
        },
      ],
    },
    aptitude: {
      "Numerical Ability": [
        {
          title: "Profit and Loss",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/profit-loss",
        },
        {
          title: "Simple Interest",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/simple-interest",
        },
      ],
      Reasoning: [
        {
          title: "Blood Relations",
          difficulty: "Medium",
          link: "https://example.com/amazon/aptitude/blood-relations",
        },
      ],
      "Verbal Ability": [
        {
          title: "Synonyms",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/synonyms",
        },
      ],
    },
  },
  {
    id: 3,
    companyName: "Microsoft",
    dsa: {
      Arrays: [
        {
          title: "Two Sum",
          difficulty: "Easy",
          link: "https://example.com/amazon/dsa/two-sum",
        },
        {
          title: "Maximum Subarray",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/max-subarray",
        },
      ],
      "Dynamic Programming": [
        {
          title: "0/1 Knapsack",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/knapsack",
        },
        {
          title: "Longest Palindromic Substring",
          difficulty: "Hard",
          link: "https://example.com/amazon/dsa/longest-palindrome",
        },
      ],
    },
    aptitude: {
      "Numerical Ability": [
        {
          title: "Profit and Loss",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/profit-loss",
        },
        {
          title: "Simple Interest",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/simple-interest",
        },
      ],
      Reasoning: [
        {
          title: "Blood Relations",
          difficulty: "Medium",
          link: "https://example.com/amazon/aptitude/blood-relations",
        },
      ],
      "Verbal Ability": [
        {
          title: "Synonyms",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/synonyms",
        },
      ],
    },
  },
  {
    id: 4,
    companyName: "TCS",
    dsa: {
      Arrays: [
        {
          title: "Two Sum",
          difficulty: "Easy",
          link: "https://example.com/amazon/dsa/two-sum",
        },
        {
          title: "Maximum Subarray",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/max-subarray",
        },
      ],
      "Dynamic Programming": [
        {
          title: "0/1 Knapsack",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/knapsack",
        },
        {
          title: "Longest Palindromic Substring",
          difficulty: "Hard",
          link: "https://example.com/amazon/dsa/longest-palindrome",
        },
      ],
    },
    aptitude: {
      "Numerical Ability": [
        {
          title: "Profit and Loss",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/profit-loss",
        },
        {
          title: "Simple Interest",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/simple-interest",
        },
      ],
      Reasoning: [
        {
          title: "Blood Relations",
          difficulty: "Medium",
          link: "https://example.com/amazon/aptitude/blood-relations",
        },
      ],
      "Verbal Ability": [
        {
          title: "Synonyms",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/synonyms",
        },
      ],
    },
  },
  {
    id: 5,
    companyName: "Infosys",
    dsa: {
      Arrays: [
        {
          title: "Two Sum",
          difficulty: "Easy",
          link: "https://example.com/amazon/dsa/two-sum",
        },
        {
          title: "Maximum Subarray",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/max-subarray",
        },
      ],
      "Dynamic Programming": [
        {
          title: "0/1 Knapsack",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/knapsack",
        },
        {
          title: "Longest Palindromic Substring",
          difficulty: "Hard",
          link: "https://example.com/amazon/dsa/longest-palindrome",
        },
      ],
    },
    aptitude: {
      "Numerical Ability": [
        {
          title: "Profit and Loss",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/profit-loss",
        },
        {
          title: "Simple Interest",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/simple-interest",
        },
      ],
      Reasoning: [
        {
          title: "Blood Relations",
          difficulty: "Medium",
          link: "https://example.com/amazon/aptitude/blood-relations",
        },
      ],
      "Verbal Ability": [
        {
          title: "Synonyms",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/synonyms",
        },
      ],
    },
  },
  {
    id: 6,
    companyName: "Wipro",
    dsa: {
      Arrays: [
        {
          title: "Two Sum",
          difficulty: "Easy",
          link: "https://example.com/amazon/dsa/two-sum",
        },
        {
          title: "Maximum Subarray",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/max-subarray",
        },
      ],
      "Dynamic Programming": [
        {
          title: "0/1 Knapsack",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/knapsack",
        },
        {
          title: "Longest Palindromic Substring",
          difficulty: "Hard",
          link: "https://example.com/amazon/dsa/longest-palindrome",
        },
      ],
    },
    aptitude: {
      "Numerical Ability": [
        {
          title: "Profit and Loss",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/profit-loss",
        },
        {
          title: "Simple Interest",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/simple-interest",
        },
      ],
      Reasoning: [
        {
          title: "Blood Relations",
          difficulty: "Medium",
          link: "https://example.com/amazon/aptitude/blood-relations",
        },
      ],
      "Verbal Ability": [
        {
          title: "Synonyms",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/synonyms",
        },
      ],
    },
  },
  {
    id: 7,
    companyName: "Capgemini",
    dsa: {
      Arrays: [
        {
          title: "Two Sum",
          difficulty: "Easy",
          link: "https://example.com/amazon/dsa/two-sum",
        },
        {
          title: "Maximum Subarray",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/max-subarray",
        },
      ],
      "Dynamic Programming": [
        {
          title: "0/1 Knapsack",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/knapsack",
        },
        {
          title: "Longest Palindromic Substring",
          difficulty: "Hard",
          link: "https://example.com/amazon/dsa/longest-palindrome",
        },
      ],
    },
    aptitude: {
      "Numerical Ability": [
        {
          title: "Profit and Loss",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/profit-loss",
        },
        {
          title: "Simple Interest",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/simple-interest",
        },
      ],
      Reasoning: [
        {
          title: "Blood Relations",
          difficulty: "Medium",
          link: "https://example.com/amazon/aptitude/blood-relations",
        },
      ],
      "Verbal Ability": [
        {
          title: "Synonyms",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/synonyms",
        },
      ],
    },
  },
  {
    id: 8,
    companyName: "Accenture",
    dsa: {
      Arrays: [
        {
          title: "Two Sum",
          difficulty: "Easy",
          link: "https://example.com/amazon/dsa/two-sum",
        },
        {
          title: "Maximum Subarray",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/max-subarray",
        },
      ],
      "Dynamic Programming": [
        {
          title: "0/1 Knapsack",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/knapsack",
        },
        {
          title: "Longest Palindromic Substring",
          difficulty: "Hard",
          link: "https://example.com/amazon/dsa/longest-palindrome",
        },
      ],
    },
    aptitude: {
      "Numerical Ability": [
        {
          title: "Profit and Loss",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/profit-loss",
        },
        {
          title: "Simple Interest",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/simple-interest",
        },
      ],
      Reasoning: [
        {
          title: "Blood Relations",
          difficulty: "Medium",
          link: "https://example.com/amazon/aptitude/blood-relations",
        },
      ],
      "Verbal Ability": [
        {
          title: "Synonyms",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/synonyms",
        },
      ],
    },
  },
  {
    id: 9,
    companyName: "Flipkart",
    dsa: {
      Arrays: [
        {
          title: "Two Sum",
          difficulty: "Easy",
          link: "https://example.com/amazon/dsa/two-sum",
        },
        {
          title: "Maximum Subarray",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/max-subarray",
        },
      ],
      "Dynamic Programming": [
        {
          title: "0/1 Knapsack",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/knapsack",
        },
        {
          title: "Longest Palindromic Substring",
          difficulty: "Hard",
          link: "https://example.com/amazon/dsa/longest-palindrome",
        },
      ],
    },
    aptitude: {
      "Numerical Ability": [
        {
          title: "Profit and Loss",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/profit-loss",
        },
        {
          title: "Simple Interest",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/simple-interest",
        },
      ],
      Reasoning: [
        {
          title: "Blood Relations",
          difficulty: "Medium",
          link: "https://example.com/amazon/aptitude/blood-relations",
        },
      ],
      "Verbal Ability": [
        {
          title: "Synonyms",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/synonyms",
        },
      ],
    },
  },
  {
    id: 10,
    companyName: "Uber",
    dsa: {
      Arrays: [
        {
          title: "Two Sum",
          difficulty: "Easy",
          link: "https://example.com/amazon/dsa/two-sum",
        },
        {
          title: "Maximum Subarray",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/max-subarray",
        },
      ],
      "Dynamic Programming": [
        {
          title: "0/1 Knapsack",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/knapsack",
        },
        {
          title: "Longest Palindromic Substring",
          difficulty: "Hard",
          link: "https://example.com/amazon/dsa/longest-palindrome",
        },
      ],
    },
    aptitude: {
      "Numerical Ability": [
        {
          title: "Profit and Loss",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/profit-loss",
        },
        {
          title: "Simple Interest",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/simple-interest",
        },
      ],
      Reasoning: [
        {
          title: "Blood Relations",
          difficulty: "Medium",
          link: "https://example.com/amazon/aptitude/blood-relations",
        },
      ],
      "Verbal Ability": [
        {
          title: "Synonyms",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/synonyms",
        },
      ],
    },
  },
  {
    id: 11,
    companyName: "Paytn",
    dsa: {
      Arrays: [
        {
          title: "Two Sum",
          difficulty: "Easy",
          link: "https://example.com/amazon/dsa/two-sum",
        },
        {
          title: "Maximum Subarray",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/max-subarray",
        },
      ],
      "Dynamic Programming": [
        {
          title: "0/1 Knapsack",
          difficulty: "Medium",
          link: "https://example.com/amazon/dsa/knapsack",
        },
        {
          title: "Longest Palindromic Substring",
          difficulty: "Hard",
          link: "https://example.com/amazon/dsa/longest-palindrome",
        },
      ],
    },
    aptitude: {
      "Numerical Ability": [
        {
          title: "Profit and Loss",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/profit-loss",
        },
        {
          title: "Simple Interest",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/simple-interest",
        },
      ],
      Reasoning: [
        {
          title: "Blood Relations",
          difficulty: "Medium",
          link: "https://example.com/amazon/aptitude/blood-relations",
        },
      ],
      "Verbal Ability": [
        {
          title: "Synonyms",
          difficulty: "Easy",
          link: "https://example.com/amazon/aptitude/synonyms",
        },
      ],
    },
  },

  {
    id: 12,
    companyName: "Oracle",
    dsa: {
      "Linked List": [
        {
          title: "Detect Loop in Linked List",
          difficulty: "Easy",
          link: "https://example.com/tcs/dsa/loop-detect",
        },
      ],
      Sorting: [
        {
          title: "Merge Sort",
          difficulty: "Medium",
          link: "https://example.com/tcs/dsa/merge-sort",
        },
      ],
    },
    aptitude: {
      "Numerical Ability": [
        {
          title: "Time and Work",
          difficulty: "Medium",
          link: "https://example.com/tcs/aptitude/time-work",
        },
      ],
      Reasoning: [
        {
          title: "Number Series",
          difficulty: "Medium",
          link: "https://example.com/tcs/aptitude/number-series",
        },
      ],
      "Verbal Ability": [
        {
          title: "Reading Comprehension",
          difficulty: "Medium",
          link: "https://example.com/tcs/aptitude/reading-comprehension",
        },
      ],
    },
  },
];
const companyContent = document.getElementById("companyContent");
companyContent.style.backgroundImage = "url('./image/img3.png')";

// Add event listener to each company link dynamically
companyQues.forEach((companyObj) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = companyObj.companyName;
  a.addEventListener("click", () => showCompanyData(companyObj));
  li.appendChild(a);
  companyList.appendChild(li);
});

function showCompanyData(companyObj) {
  companyContent.style.backgroundImage = "url('./image/img4.jpg')";
  // Hide placeholder and show tabs
  placeholderMessage.style.display = "none";
  tabSection.style.display = "block";

  // Clear previous data
  dsaContent.innerHTML = "";
  aptitudeContent.innerHTML = "";

  // Flatten DSA questions and display
  for (const topic in companyObj.dsa) {
    companyObj.dsa[topic].forEach((q) => {
      dsaContent.innerHTML += createQuestionCard(q);
    });
  }

  // Flatten Aptitude questions and display
  for (const topic in companyObj.aptitude) {
    companyObj.aptitude[topic].forEach((q) => {
      aptitudeContent.innerHTML += createQuestionCard(q);
    });
  }

  // Default to DSA tab
  switchTab("dsaTab");
}


// Toggle tab functionality
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
        <a href="${question.link}" target="_blank" class="question-title">${index ? index + '. ' : ''}${question.title}</a>
      </div>
      <div class="question-right">
        <span class="accuracy">${question.accuracy || ''}</span>
        <span class="difficulty ${getDifficultyClass(question.difficulty)}">${question.difficulty}</span>
      </div>
    </div>
  `;
}

function getDifficultyClass(difficulty) {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'easy';
    case 'medium':
    case 'med.':
      return 'med';
    case 'hard':
      return 'hard';
    default:
      return '';
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
