const companyList = document.getElementById("companyList");
const dsaContent = document.getElementById("dsaContent");
const aptitudeContent = document.getElementById("aptitudeContent");
const companyTitle = document.getElementById("companyTitle");

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

// ✅ Clear any previous entries
companyList.innerHTML = "";

// ✅ Create unique sidebar links with event listeners
companyQues.forEach((companyObj) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = companyObj.companyName;
  a.addEventListener("click", () => showCompanyData(companyObj.companyName));
  li.appendChild(a);
  companyList.appendChild(li);
});

//Function to show DSA & Aptitude
function showCompanyData(companyName) {
  const companyData = companyQues.find((c) => c.companyName === companyName);
  if (!companyData) return;

  companyTitle.textContent = companyName;
  dsaContent.innerHTML = "";
  aptitudeContent.innerHTML = "";

  //DSA
  for (const topic in companyData.dsa) {
    const topicBlock = document.createElement("div");
    topicBlock.innerHTML = `<h4>${topic}</h4>`;
    companyData.dsa[topic].forEach((q) => {
      topicBlock.innerHTML += `
        <div class="question-card">
          <a href="${q.link}" target="_blank">${q.title}</a>
          <span>Difficulty: ${q.difficulty}</span>
        </div>`;
    });
    dsaContent.appendChild(topicBlock);
  }

  //Aptitude
  for (const topic in companyData.aptitude) {
    const topicBlock = document.createElement("div");
    topicBlock.innerHTML = `<h4>${topic}</h4>`;
    companyData.aptitude[topic].forEach((q) => {
      topicBlock.innerHTML += `
        <div class="question-card">
          <a href="${q.link}" target="_blank">${q.title}</a>
          <span>Difficulty: ${q.difficulty}</span>
        </div>`;
    });
    aptitudeContent.appendChild(topicBlock);
  }
}
