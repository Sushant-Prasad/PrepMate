export const questions=[{
    no: 1,
    question: "The sum of two numbers is 2490. If 6.5% of one number is equal to 8.5% of the other, find the numbers.",
    options: ["1410, 1080", "1500, 990", "1440, 1050", "1360, 1130"],
    answer: "1440, 1050",
    solution: "Let the numbers be x and 2490 - x. Given, 6.5% of x = 8.5% of (2490 - x). So, 6.5x = 8.5(2490 - x). Solve: 6.5x + 8.5x = 8.5*2490 → 15x = 21165 → x = 1411. Hence, x = 1440, other = 2490 - 1440 = 1050."
  },
  {
    no: 2,
    question: "If 40% of a number is equal to two-thirds of another number, what is the ratio between the first and second numbers?",
    options: ["3:5", "5:3", "2:3", "3:2"],
    answer: "5:3",
    solution: "Let first number be x and second be y. 40% of x = 2/3 of y → 0.4x = 2y/3 → 4x/10 = 2y/3 → 6x = 20y → x/y = 10/3 = 5:3."
  },
  {
    no: 3,
    question: "A number is as much greater than 31 as it is less than 75. What is the number?",
    options: ["45", "53", "63", "52"],
    answer: "53",
    solution: "Let the number be x. Then, x - 31 = 75 - x → 2x = 106 → x = 53."
  },
  {
    no: 4,
    question: "The difference between a number and its three-fifth is 50. What is the number?",
    options: ["100", "120", "125", "150"],
    answer: "125",
    solution: "Let the number be x. Then, x - (3/5)x = 50 → (2/5)x = 50 → x = (50 * 5) / 2 = 125."
  },
  {
    no: 5,
    question: "Which is the smallest number that when increased by 17 is exactly divisible by 49?",
    options: ["32", "39", "80", "30"],
    answer: "32",
    solution: "Let the number be x. x + 17 divisible by 49 → (x + 17) % 49 = 0 → x = 49k - 17. Try k = 1 → x = 32."
  },
  {
    no: 6,
    question: "The sum of three consecutive even numbers is 138. What is the largest number?",
    options: ["44", "46", "48", "50"],
    answer: "48",
    solution: "Let the numbers be x, x+2, x+4. Sum = x + x+2 + x+4 = 3x + 6 = 138 → 3x = 132 → x = 44. Largest = x+4 = 48."
  },
  {
    no: 7,
    question: "If 1/4 of a number is 15 more than 1/6 of it, what is the number?",
    options: ["90", "120", "150", "180"],
    answer: "180",
    solution: "Let the number be x. Then, (1/4)x = (1/6)x + 15 → Multiply by 12: 3x = 2x + 180 → x = 180."
  },
  {
    no: 8,
    question: "What is the number whose 25% is 12.5?",
    options: ["25", "30", "40", "50"],
    answer: "50",
    solution: "25% of x = 12.5 → x = (12.5 * 100) / 25 = 50."
  },
  {
    no: 9,
    question: "The product of two numbers is 120 and their HCF is 6. Find their LCM.",
    options: ["10", "20", "30", "24"],
    answer: "20",
    solution: "HCF × LCM = Product of two numbers → 6 × LCM = 120 → LCM = 120 / 6 = 20."
  },
  {
    no: 10,
    question: "If a number is divided by 5, 6, 7 and leaves remainder 3 in each case, find the least number.",
    options: ["213", "218", "423", "423"],
    answer: "213",
    solution: "LCM of 5,6,7 = 210. Required number = 210 + 3 = 213."
  },
  {
    no: 11,
    question: "A number divided by 3 leaves 2, by 4 leaves 3, by 5 leaves 4. What is the number?",
    options: ["59", "119", "39", "None"],
    answer: "59",
    solution: "The number leaves one less than each divisor → Number = LCM(3,4,5) - 1 = 60 - 1 = 59."
  },
  {
    no: 12,
    question: "The difference between a number and its square is 132. What is the number?",
    options: ["11", "12", "13", "14"],
    answer: "12",
    solution: "x² - x = 132 → x² - x - 132 = 0 → Solve: x = 12."
  },
  {
    no: 13,
    question: "What number should be added to 4458 so that it becomes divisible by 6?",
    options: ["2", "3", "4", "None"],
    answer: "None",
    solution: "Divisible by 6 ⇒ divisible by 2 and 3. 4458 is even ⇒ divisible by 2. Sum of digits = 4+4+5+8 = 21 (div by 3) ⇒ already divisible by 6."
  },
  {
    no: 14,
    question: "How many three-digit numbers are divisible by 7?",
    options: ["128", "129", "130", "131"],
    answer: "128",
    solution: "Smallest 3-digit divisible by 7: 105. Largest: 994. Count = (994 - 105)/7 + 1 = 128."
  },
  {
    no: 15,
    question: "Find the number which is exactly divisible by 9 and 12 and lies between 100 and 200.",
    options: ["108", "120", "144", "180"],
    answer: "108",
    solution: "LCM(9,12)=36. 36×3 = 108, lies between 100 and 200. Valid."
  }];