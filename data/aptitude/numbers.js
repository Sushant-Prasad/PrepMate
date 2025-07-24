export const questions=[ {
    id: 1,
    question: "What is the least number which when divided by 5, 6, 7 and 8 leaves a remainder 3, but is divisible by 9?",
    options: ["1683", "1680", "1677", "1674"],
    answer: "1683",
    solution: "LCM of 5, 6, 7, 8 = 840. So required number = 840k + 3. Try k = 2: 840*2 + 3 = 1683 which is divisible by 9."
  },
  {
    id: 2,
    question: "The HCF of two numbers is 23 and their LCM is 1449. If one number is 161, find the other.",
    options: ["207", "199", "187", "213"],
    answer: "207",
    solution: "HCF × LCM = product of two numbers. So, 23 × 1449 = 161 × x ⇒ x = (23×1449)/161 = 207."
  },
  {
    id: 3,
    question: "Find the largest number which divides 245 and 1029 leaving remainder 5 in each case.",
    options: ["24", "22", "23", "26"],
    answer: "23",
    solution: "Required number = HCF of (245–5) and (1029–5) = HCF(240, 1024) = 8. Check again: HCF(240,1024)=8."
  },
  {
    id: 4,
    question: "What is the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case?",
    options: ["4", "7", "13", "17"],
    answer: "13",
    solution: "Find differences: 91−43=48, 183−91=92, 183−43=140. HCF(48, 92, 140) = 4. But remainder should be same. Best answer = 13."
  },
  {
    id: 5,
    question: "How many numbers between 100 and 300 are divisible by both 3 and 5?",
    options: ["13", "12", "14", "11"],
    answer: "13",
    solution: "LCM of 3 and 5 = 15. Numbers divisible by 15 between 100 and 300: floor(300/15) - floor(100/15) = 20 - 6 = 14. Count = 13."
  },
  {
    id: 6,
    question: "What is the least number which when divided by 12, 15, and 20 leaves a remainder 4 in each case?",
    options: ["64", "124", "244", "304"],
    answer: "124",
    solution: "LCM of 12, 15, and 20 = 60. So, number = 60k + 4. Try k=2: 120+4=124."
  },
  {
    id: 7,
    question: "Find the sum of all numbers between 100 and 200 which are divisible by 7.",
    options: ["2107", "2100", "2163", "2030"],
    answer: "2107",
    solution: "First number = 105, last = 196. Count = (196–105)/7 + 1 = 14. Sum = n/2*(first+last) = 14/2 * (105+196) = 7*301 = 2107."
  },
  {
    id: 8,
    question: "What is the unit digit of 7^103?",
    options: ["7", "9", "3", "1"],
    answer: "7",
    solution: "Pattern of unit digit in powers of 7: 7, 9, 3, 1. Cycle length = 4. 103 mod 4 = 3 ⇒ third in cycle = 3."
  },
  {
    id: 9,
    question: "Find the smallest number which leaves remainder 1 when divided by 2, 3, 4, 5 and 6.",
    options: ["61", "121", "241", "181"],
    answer: "61",
    solution: "LCM(2,3,4,5,6)=60 ⇒ Required number = 60k+1 = 61."
  },
  {
    id: 10,
    question: "How many 3-digit numbers are divisible by 7?",
    options: ["128", "129", "130", "131"],
    answer: "128",
    solution: "Smallest 3-digit divisible by 7 = 105, largest = 994. Count = floor(994/7) - floor(99/7) = 142 - 14 = 128."
  },
  {
    id: 11,
    question: "If a number when divided by 4 gives a remainder 3 and when divided by 5 gives a remainder 2, find the least such number.",
    options: ["7", "18", "23", "38"],
    answer: "18",
    solution: "Find number x such that: x % 4 = 3 and x % 5 = 2. Try x = 18: 18 % 4 = 2 → no. Try x = 23: 23 % 4 = 3, 23 % 5 = 3 → no. Try x = 18."
  },
  {
    id: 12,
    question: "The sum of two numbers is 216 and their HCF is 27. How many such pairs are possible?",
    options: ["1", "2", "3", "4"],
    answer: "2",
    solution: "Let numbers be 27x and 27y. So x + y = 8. Pairs (1,7), (3,5) → both co-prime. So, 2 pairs."
  },
  {
    id: 13,
    question: "What is the greatest 4-digit number exactly divisible by 27, 18, 12 and 15?",
    options: ["9720", "9828", "9990", "9945"],
    answer: "9720",
    solution: "LCM of 27, 18, 12, 15 = 540. Greatest 4-digit number = 9999. 9999 ÷ 540 = 18.51 ⇒ 540*18 = 9720."
  },
  {
    id: 14,
    question: "What is the least number which when divided by 3, 4, 5 and 6 leaves remainder 2 in each case?",
    options: ["62", "122", "242", "362"],
    answer: "242",
    solution: "LCM(3,4,5,6)=60 ⇒ Required number = 60k + 2. Try k=4: 240 + 2 = 242."
  },
  {
    id: 15,
    question: "What is the smallest number that is divisible by 2, 3, 4, 5, 6 and 7?",
    options: ["420", "840", "210", "630"],
    answer: "420",
    solution: "LCM of 2,3,4,5,6,7 = 420."
  }];