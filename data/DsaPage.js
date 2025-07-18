// DsaPage.js

const topics = {
  fundamentals: {
    title: "Programming Fundamentals",
    subtopics: [
      {
        key: "number-system",
        name: "Number System",
        questions: generateQuestions("Number System", "https://www.geeksforgeeks.org/tag/number-system/")
      },
      {
        key: "loops-conditions",
        name: "Loops & Conditions",
        questions: generateQuestions("Loop & Condition", "https://www.geeksforgeeks.org/tag/loops/")
      },
      {
        key: "functions",
        name: "Functions",
        questions: generateQuestions("Function", "https://www.geeksforgeeks.org/tag/functions/")
      },
      {
        key: "recursion",
        name: "Recursion",
        questions: generateQuestions("Recursion", "https://www.geeksforgeeks.org/tag/recursion/")
      },
      {
        key: "complexity",
        name: "Time & Space Complexity",
        questions: generateQuestions("Complexity", "https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/")
      }
    ]
  },

  "basic-ds": {
    title: "Basic Data Structures",
    subtopics: [
      {
        key: "arrays",
        name: "Arrays",
        questions: generateQuestions("Array", "https://www.geeksforgeeks.org/tag/arrays/")
      },
      {
        key: "strings",
        name: "Strings",
        questions: generateQuestions("String", "https://www.geeksforgeeks.org/tag/strings/")
      },
      {
        key: "linkedlist",
        name: "Linked List",
        questions: generateQuestions("Linked List", "https://www.geeksforgeeks.org/data-structures/linked-list/")
      },
      {
        key: "stack",
        name: "Stack",
        questions: generateQuestions("Stack", "https://www.geeksforgeeks.org/tag/stack/")
      },
      {
        key: "queue",
        name: "Queue",
        questions: generateQuestions("Queue", "https://www.geeksforgeeks.org/tag/queue/")
      }
    ]
  },

  trees: {
    title: "Trees",
    subtopics: [
      {
        key: "binary-trees",
        name: "Binary Trees",
        questions: generateQuestions("Binary Tree", "https://www.geeksforgeeks.org/binary-tree-data-structure/")
      },
      {
        key: "advanced-trees",
        name: "Advanced Trees",
        questions: generateQuestions("Advanced Tree", "https://www.geeksforgeeks.org/tag/binary-search-tree/")
      }
    ]
  },

  recursion_backtracking: {
    title: "Recursion & Backtracking",
    subtopics: [
      {
        key: "backtracking",
        name: "Backtracking",
        questions: generateQuestions("Backtracking", "https://www.geeksforgeeks.org/backtracking-algorithms/")
      }
    ]
  },

  hashing: {
    title: "Hashing",
    subtopics: [
      {
        key: "hashing",
        name: "Hashing",
        questions: generateQuestions("Hashing", "https://www.geeksforgeeks.org/tag/hashing/")
      }
    ]
  },

  sw_tp: {
    title: "Sliding Window & Two Pointer",
    subtopics: [
      {
        key: "sliding-window",
        name: "Sliding Window",
        questions: generateQuestions("Sliding Window", "https://www.geeksforgeeks.org/window-sliding-technique/")
      },
      {
        key: "two-pointer",
        name: "Two Pointer",
        questions: generateQuestions("Two Pointer", "https://www.geeksforgeeks.org/two-pointers-technique/")
      }
    ]
  },

  searching_sorting: {
    title: "Searching & Sorting",
    subtopics: [
      {
        key: "searching",
        name: "Searching",
        questions: generateQuestions("Searching", "https://www.geeksforgeeks.org/searching-algorithms/")
      },
      {
        key: "sorting",
        name: "Sorting",
        questions: generateQuestions("Sorting", "https://www.geeksforgeeks.org/sorting-algorithms/")
      }
    ]
  },

  greedy: {
    title: "Greedy Algorithms",
    subtopics: [
      {
        key: "greedy",
        name: "Greedy Algorithms",
        questions: generateQuestions("Greedy", "https://www.geeksforgeeks.org/greedy-algorithms/")
      }
    ]
  },

  dp: {
    title: "Dynamic Programming",
    subtopics: [
      {
        key: "dp",
        name: "Dynamic Programming",
        questions: generateQuestions("DP", "https://www.geeksforgeeks.org/dynamic-programming/")
      }
    ]
  },

  graph: {
    title: "Graph Algorithms",
    subtopics: [
      {
        key: "graph",
        name: "Graph Algorithms",
        questions: generateQuestions("Graph", "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/")
      }
    ]
  },

  cp: {
    title: "Competitive Programming",
    subtopics: [
      {
        key: "bit-manipulation",
        name: "Bit Manipulation",
        questions: generateQuestions("Bit Manipulation", "https://www.geeksforgeeks.org/tag/bitwise-operations/")
      },
      {
        key: "dsu",
        name: "Disjoint Set Union (DSU)",
        questions: generateQuestions("DSU", "https://www.geeksforgeeks.org/disjoint-set-data-structures/")
      },
      {
        key: "adv-graph",
        name: "Advanced Graphs",
        questions: generateQuestions("Advanced Graph", "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/")
      }
    ]
  }
};

// Helper to create question array
function generateQuestions(prefix, link) {
  return Array.from({ length: 40 }, (_, i) => ({
    text: `Q${i + 1}: ${prefix} Problem ${i + 1}`,
    link
  }));
}

// Load subtopics when topic is clicked
function loadTopic(topicKey) {
  const topic = topics[topicKey];
  const container = document.getElementById("topic-content");

  if (!topic) return;
  container.innerHTML = `<h2>${topic.title}</h2>`;

  topic.subtopics.forEach((sub) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h4>${sub.name}</h4>
      <button onclick="loadSubtopic('${topicKey}', '${sub.key}')">📚 View Questions</button>
    `;
    container.appendChild(card);
  });
}

// Load questions when subtopic is clicked
function loadSubtopic(topicKey, subKey) {
  const topic = topics[topicKey];
  const sub = topic.subtopics.find((s) => s.key === subKey);
  const container = document.getElementById("topic-content");

  if (!sub) return;

  container.innerHTML = `
    <div class="subtopic-header">
      <h2>All Important Questions - ${sub.name}</h2>
      <button class="mark-btn">✅ Mark as Done</button>
    </div>
    <ul class="question-list">
      ${sub.questions
        .map(
          (q) => `
        <li>
          ${q.text}
          <a href="${q.link}" target="_blank">
            <button class="solve-btn">🧠 Solve Now</button>
          </a>
        </li>`
        )
        .join("")}
    </ul>
  `;
}


function motivateMe() {
  const quotes = [
    "Every MCQ solved is a step closer to your dream company ",
    "You're not just preparing for interviews, you're building a legacy ",
    "Aptitude + DSA + Confidence = Unstoppable ",
    "Consistency beats talent, every single time ",
    "You're not behind. You're in the making. Trust the grind ",
    "Debug your doubts — build logic, clarity, and confidence ",
    "Crack one question. Crack one mock. Win one day at a time ",
    "Your resume opens doors. Your prep walks you in. Keep going "
  ];
  const line = quotes[Math.floor(Math.random() * quotes.length)];
  const target = document.getElementById("motivation-line");
  if (target) target.textContent = line;
}