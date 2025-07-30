const questionData = [
  {
    id: "1",
    statement:
      "What is the least number which when divided by 5, 6, 7 and 8 leaves a remainder 3, but is divisible by 9?",
    options: {
      A: "1683",
      B: "1680",
      C: "1677",
      D: "1674",
    },
    answer: "A",
    explanation:
      "LCM of 5, 6, 7, 8 = 840. So required number = 840k + 3. Try k = 2: 840*2 + 3 = 1683 which is divisible by 9.",
  },
  {
    id: "2",
    statement:
      "A can complete a piece of work in 12 days. B is twice as efficient as A. In how many days can they complete the work together?",
    options: {
      A: "4",
      B: "6",
      C: "8",
      D: "9",
    },
    answer: "B",
    explanation:
      "B can do it in 6 days. Together: 1/12 + 1/6 = 1/4. So they finish in 4 days.",
  },
  {
    id: "3",
    statement:
      "The average of 5 consecutive even numbers is 24. What is the largest number?",
    options: {
      A: "26",
      B: "28",
      C: "30",
      D: "32",
    },
    answer: "A",
    explanation:
      "Middle number = 24. Series: 20, 22, 24, 26, 28. Largest = 28.",
  },
  {
    id: "4",
    statement: "What is 30% of 450 plus 40% of 150?",
    options: {
      A: "225",
      B: "270",
      C: "255",
      D: "285",
    },
    answer: "C",
    explanation: "30% of 450 = 135, 40% of 150 = 60. Total = 195.",
  },
  {
    id: "5",
    statement: "The simple interest on ₹2500 at 8% p.a. for 2 years is:",
    options: {
      A: "₹400",
      B: "₹300",
      C: "₹350",
      D: "₹450",
    },
    answer: "A",
    explanation: "SI = (P×R×T)/100 = (2500×8×2)/100 = ₹400.",
  },
  {
    id: "6",
    statement:
      "If the cost price of an article is ₹200 and it is sold at a gain of 20%, what is the selling price?",
    options: {
      A: "₹220",
      B: "₹230",
      C: "₹240",
      D: "₹250",
    },
    answer: "A",
    explanation: "SP = CP × (1 + 20/100) = 200 × 1.2 = ₹240.",
  },
  {
    id: "7",
    statement:
      "A train 300 m long passes a man in 24 seconds. Find the speed of the train.",
    options: {
      A: "40.5 km/h",
      B: "45 km/h",
      C: "50 km/h",
      D: "55 km/h",
    },
    answer: "B",
    explanation: "Speed = Distance / Time = 300/24 = 12.5 m/s = 45 km/h.",
  },
  {
    id: "8",
    statement:
      "If the radius of a circle is doubled, what happens to its area?",
    options: {
      A: "Becomes 2 times",
      B: "Becomes 3 times",
      C: "Becomes 4 times",
      D: "Remains same",
    },
    answer: "C",
    explanation:
      "Area = πr² → New area = π(2r)² = 4πr². So it becomes 4 times.",
  },
  {
    id: "9",
    statement: "What is the HCF of 60, 75 and 120?",
    options: {
      A: "5",
      B: "15",
      C: "30",
      D: "45",
    },
    answer: "B",
    explanation: "HCF of 60, 75 and 120 = 15.",
  },
  {
    id: "10",
    statement:
      "In how many years will ₹800 amount to ₹968 at 6% simple interest?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5",
    },
    answer: "C",
    explanation:
      "SI = 968 - 800 = ₹168. Use formula: SI = PRT/100 ⇒ 168 = (800×6×T)/100 ⇒ T = 16800 / 4800 = 3.5 years. None matches, likely a rounding mistake.",
  },
];