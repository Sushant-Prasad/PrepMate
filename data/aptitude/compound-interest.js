// data/aptitude/compound-interest.js

export const questions = [
  {
    question: "Find the compound interest on ₹10,000 for 2 years at 5% per annum, compounded annually.",
    options: ["₹1025", "₹1000", "₹1102.5", "₹1050"],
    answer: "₹1025",
    solution: "CI = P[(1 + r/100)^n - 1] = 10000[(1 + 5/100)^2 - 1] = 10000[(1.1025) - 1] = ₹1025"
  },
  {
    question: "What is the compound interest on ₹8000 at 10% per annum for 2 years, compounded annually?",
    options: ["₹1600", "₹1680", "₹1620", "₹1640"],
    answer: "₹1680",
    solution: "CI = 8000[(1 + 10/100)^2 - 1] = 8000[(1.21) - 1] = 8000 × 0.21 = ₹1680"
  },
  {
    question: "Find the compound interest on ₹5000 for 3 years at 4% per annum compounded annually.",
    options: ["₹624.32", "₹625.50", "₹620.80", "₹640.60"],
    answer: "₹624.32",
    solution: "CI = 5000[(1 + 4/100)^3 - 1] = 5000 × (1.124864 - 1) = ₹624.32"
  },
  {
    question: "The compound interest on ₹10,000 for 1 year is ₹525. What is the rate of interest per annum?",
    options: ["5%", "5.5%", "6%", "6.5%"],
    answer: "5.25%",
    solution: "CI = P[(1 + r/100)^n - 1], solve for r: 10000[(1 + r/100)^1 - 1] = 525 ⇒ r = 5.25%"
  },
  {
    question: "If the compound interest on ₹1200 for 2 years is ₹129.60, find the rate.",
    options: ["5%", "6%", "8%", "10%"],
    answer: "6%",
    solution: "CI = P[(1 + r/100)^n - 1] ⇒ 1200[(1 + r/100)^2 - 1] = 129.60. Solving, r = 6%"
  },
  {
    question: "What is the compound interest on ₹4000 at 5% for 2 years compounded annually?",
    options: ["₹400", "₹410", "₹410.25", "₹415"],
    answer: "₹410",
    solution: "CI = 4000 × (1.05)^2 - 4000 = 4000 × 1.1025 - 4000 = ₹410"
  },
  {
    question: "If ₹5000 becomes ₹5832 in 2 years compounded annually, what is the rate?",
    options: ["7%", "8%", "9%", "10%"],
    answer: "8%",
    solution: "5832 = 5000 × (1 + r/100)^2 ⇒ (1 + r/100)^2 = 1.1664 ⇒ r = 8%"
  },
  {
    question: "A sum of money becomes double in 5 years at compound interest. In how many years will it become four times?",
    options: ["10", "15", "8", "12.5"],
    answer: "10",
    solution: "If it doubles in 5 years, it will double again (become 4x) in another 5 years ⇒ Total = 10 years"
  },
  {
    question: "Find the amount on ₹6000 for 3 years at 10% compounded annually.",
    options: ["₹7926", "₹7992", "₹8000", "₹8050"],
    answer: "₹7926",
    solution: "A = 6000 × (1.1)^3 = 6000 × 1.331 = ₹7986; CI = ₹7986 - 6000 = ₹1986"
  },
  {
    question: "₹10,000 is invested for 2 years at 8% p.a. compounded semi-annually. What is the compound interest?",
    options: ["₹1648.64", "₹1600", "₹1625", "₹1650"],
    answer: "₹1648.64",
    solution: "r = 4%, n = 4 ⇒ A = 10000 × (1 + 4/100)^4 = ₹11648.64; CI = ₹1648.64"
  },

  // 15 more questions below

  {
    question: "What will be the compound interest on ₹2000 at 5% p.a. for 3 years compounded annually?",
    options: ["₹315.25", "₹300", "₹320", "₹325"],
    answer: "₹315.25",
    solution: "CI = 2000 × (1.05)^3 - 2000 = ₹315.25"
  },
  {
    question: "Find the amount on ₹7500 at 6% p.a. compounded yearly for 2 years.",
    options: ["₹8418", "₹8436", "₹8427", "₹8460"],
    answer: "₹8436",
    solution: "A = 7500 × (1.06)^2 = ₹8436"
  },
  {
    question: "A sum of ₹6400 amounts to ₹7290 in 2 years at compound interest. Find the rate per annum.",
    options: ["6%", "7%", "8%", "9%"],
    answer: "7%",
    solution: "7290 = 6400 × (1 + r/100)^2 ⇒ (1 + r/100)^2 = 1.140625 ⇒ r = 7%"
  },
  {
    question: "What is the compound interest on ₹2500 for 2 years at 12% per annum?",
    options: ["₹636", "₹672", "₹640", "₹650"],
    answer: "₹636",
    solution: "CI = 2500 × (1.12)^2 - 2500 = ₹636"
  },
  {
    question: "Find the compound interest on ₹4000 at 10% for 3 years.",
    options: ["₹1324", "₹1340", "₹1320", "₹1300"],
    answer: "₹1324",
    solution: "CI = 4000 × (1.1)^3 - 4000 = ₹1324"
  },
  {
    question: "A sum becomes ₹12100 in 2 years at 10% compounded annually. Find the principal.",
    options: ["₹10000", "₹11000", "₹10500", "₹10200"],
    answer: "₹10000",
    solution: "A = P × (1.1)^2 ⇒ 12100 = P × 1.21 ⇒ P = ₹10000"
  },
  {
    question: "Compound interest on ₹12000 at 5% for 2 years is?",
    options: ["₹1230", "₹1225", "₹1236", "₹1210"],
    answer: "₹1230",
    solution: "CI = 12000 × (1.05)^2 - 12000 = ₹1230"
  },
  {
    question: "₹15000 becomes ₹17325 in 2 years. Find the rate if interest is compounded annually.",
    options: ["7%", "8%", "9%", "10%"],
    answer: "7.5%",
    solution: "A = P(1 + r/100)^2 ⇒ 17325 = 15000 × (1 + r/100)^2 ⇒ r = 7.5%"
  },
  {
    question: "CI on ₹10,000 in 1 year is ₹1100. Find the rate of interest compounded yearly.",
    options: ["10%", "11%", "12%", "13%"],
    answer: "11%",
    solution: "10000 × (1 + r/100) = 11100 ⇒ r = 11%"
  },
  {
    question: "What is the CI on ₹9000 for 2 years at 6% p.a.?",
    options: ["₹1101.6", "₹1088.6", "₹1095", "₹1100"],
    answer: "₹1101.6",
    solution: "CI = 9000 × (1.06)^2 - 9000 = ₹1101.6"
  },
  {
    question: "What will be the CI on ₹3500 at 8% p.a. for 2 years?",
    options: ["₹582.4", "₹580", "₹576", "₹590"],
    answer: "₹582.4",
    solution: "CI = 3500 × (1.08)^2 - 3500 = ₹582.4"
  },
  {
    question: "If the compound interest on ₹2400 in 2 years is ₹504, find the rate of interest.",
    options: ["10%", "12%", "14%", "15%"],
    answer: "10%",
    solution: "CI = P[(1 + r/100)^2 - 1] ⇒ 2400 × (1.1)^2 - 2400 = ₹504 ⇒ r = 10%"
  },
  {
    question: "The compound interest on ₹5000 in 3 years is ₹1575. Find the rate.",
    options: ["9%", "10%", "11%", "12%"],
    answer: "10%",
    solution: "CI = 5000 × (1.1)^3 - 5000 = ₹1575 ⇒ r = 10%"
  },
  {
    question: "If ₹6400 becomes ₹7290 in 2 years compounded annually, what is the rate?",
    options: ["7%", "8%", "9%", "10%"],
    answer: "7%",
    solution: "A = P(1 + r/100)^2 ⇒ r = 7%"
  },
  {
    question: "Find the compound interest on ₹1000 at 5% p.a. for 3 years.",
    options: ["₹157.63", "₹157.50", "₹160", "₹162"],
    answer: "₹157.63",
    solution: "CI = 1000 × (1.05)^3 - 1000 = ₹157.63"
  }
];
