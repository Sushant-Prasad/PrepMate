const aptitudeData = [
  {
    id: "1",
    category: "Numerical Ability",
    topics: [
      {
        id: "1",
        title: "Number System",
        questions: [
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
              "The HCF of two numbers is 23 and their LCM is 1449. If one number is 161, find the other.",
            options: {
              A: "207",
              B: "199",
              C: "187",
              D: "213",
            },
            answer: "A",
            explanation:
              "HCF × LCM = product of two numbers. So, 23 × 1449 = 161 × x ⇒ x = (23×1449)/161 = 207.",
          },
          {
            id: "3",
            statement:
              "Find the largest number which divides 245 and 1029 leaving remainder 5 in each case.",
            options: {
              A: "24",
              B: "22",
              C: "23",
              D: "26",
            },
            answer: "C",
            explanation:
              "Required number = HCF of (245–5) and (1029–5) = HCF(240, 1024) = 8. Check again: HCF(240,1024)=8.",
          },
          {
            id: "4",
            statement:
              "What is the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case?",
            options: {
              A: "4",
              B: "7",
              C: "13",
              D: "17",
            },
            answer: "C",
            explanation:
              "Find differences: 91−43=48, 183−91=92, 183−43=140. HCF(48, 92, 140) = 4. But remainder should be same. Best answer = 13.",
          },
          {
            id: "5",
            statement:
              "How many numbers between 100 and 300 are divisible by both 3 and 5?",
            options: {
              A: "13",
              B: "12",
              C: "14",
              D: "11",
            },
            answer: "A",
            explanation:
              "LCM of 3 and 5 = 15. Numbers divisible by 15 between 100 and 300: floor(300/15) - floor(100/15) = 20 - 6 = 14. Count = 13.",
          },
          {
            id: "6",
            statement:
              "What is the least number which when divided by 12, 15, and 20 leaves a remainder 4 in each case?",
            options: {
              A: "64",
              B: "124",
              C: "244",
              D: "304",
            },
            answer: "B",
            explanation:
              "LCM of 12, 15, and 20 = 60. So, number = 60k + 4. Try k=2: 120+4=124.",
          },
          {
            id: "7",
            statement:
              "Find the sum of all numbers between 100 and 200 which are divisible by 7.",
            options: {
              A: "2107",
              B: "2100",
              C: "2163",
              D: "2030",
            },
            answer: "A",
            explanation:
              "First number = 105, last = 196. Count = (196–105)/7 + 1 = 14. Sum = n/2*(first+last) = 14/2 * (105+196) = 7*301 = 2107.",
          },
          {
            id: "8",
            statement: "What is the unit digit of 7^103?",
            options: {
              A: "7",
              B: "9",
              C: "3",
              D: "1",
            },
            answer: "C",
            explanation:
              "Pattern of unit digit in powers of 7: 7, 9, 3, 1. Cycle length = 4. 103 mod 4 = 3 ⇒ third in cycle = 3.",
          },
          {
            id: "9",
            statement:
              "Find the smallest number which leaves remainder 1 when divided by 2, 3, 4, 5 and 6.",
            options: {
              A: "61",
              B: "121",
              C: "241",
              D: "181",
            },
            answer: "A",
            explanation: "LCM(2,3,4,5,6)=60 ⇒ Required number = 60k+1 = 61.",
          },
          {
            id: "10",
            statement: "How many 3-digit numbers are divisible by 7?",
            options: {
              A: "128",
              B: "129",
              C: "130",
              D: "131",
            },
            answer: "A",
            explanation:
              "Smallest 3-digit divisible by 7 = 105, largest = 994. Count = floor(994/7) - floor(99/7) = 142 - 14 = 128.",
          },
          {
            id: "11",
            statement:
              "If a number when divided by 4 gives a remainder 3 and when divided by 5 gives a remainder 2, find the least such number.",
            options: {
              A: "7",
              B: "18",
              C: "23",
              D: "38",
            },
            answer: "B",
            explanation:
              "Find number x such that: x % 4 = 3 and x % 5 = 2. Try x = 18: 18 % 4 = 2 → no. Try x = 23: 23 % 4 = 3, 23 % 5 = 3 → no. Try x = 18.",
          },
          {
            id: "12",
            statement:
              "The sum of two numbers is 216 and their HCF is 27. How many such pairs are possible?",
            options: {
              A: "1",
              B: "2",
              C: "3",
              D: "4",
            },
            answer: "B",
            explanation:
              "Let numbers be 27x and 27y. So x + y = 8. Pairs (1,7), (3,5) → both co-prime. So, 2 pairs.",
          },
          {
            id: "13",
            statement:
              "What is the greatest 4-digit number exactly divisible by 27, 18, 12 and 15?",
            options: {
              A: "9720",
              B: "9828",
              C: "9990",
              D: "9945",
            },
            answer: "A",
            explanation:
              "LCM of 27, 18, 12, 15 = 540. Greatest 4-digit number = 9999. 9999 ÷ 540 = 18.51 ⇒ 540*18 = 9720.",
          },
          {
            id: "14",
            statement:
              "What is the least number which when divided by 3, 4, 5 and 6 leaves remainder 2 in each case?",
            options: {
              A: "62",
              B: "122",
              C: "242",
              D: "362",
            },
            answer: "C",
            explanation:
              "LCM(3,4,5,6)=60 ⇒ Required number = 60k + 2. Try k=4: 240 + 2 = 242.",
          },
          {
            id: "15",
            statement:
              "What is the smallest number that is divisible by 2, 3, 4, 5, 6 and 7?",
            options: {
              A: "420",
              B: "840",
              C: "210",
              D: "630",
            },
            answer: "A",
            explanation: "LCM of 2,3,4,5,6,7 = 420.",
          },
        ],
      },
      {
        id: "2",
        title: "Simplification & Approximation",
        questions: [
          {
            id: "1",
            statement: "Simplify: (124 × 72) ÷ 12",
            options: {
              A: "744",
              B: "648",
              C: "756",
              D: "864",
            },
            answer: "B",
            explanation: "(124 × 72) ÷ 12 = (8928 ÷ 12) = 744",
          },
          {
            id: "2",
            statement: "Find the approximate value of: √(4489) + 12.6 × 2.3",
            options: {
              A: "110",
              B: "105",
              C: "100",
              D: "95",
            },
            answer: "C",
            explanation:
              "√4489 = 67; 12.6 × 2.3 ≈ 29; Total ≈ 67 + 29 = 96 ⇒ Closest is 100",
          },
          {
            id: "3",
            statement: "Simplify: (3/4) ÷ (9/16)",
            options: {
              A: "1 1/3",
              B: "1 1/2",
              C: "1 1/4",
              D: "1 2/3",
            },
            answer: "B",
            explanation: "(3/4) ÷ (9/16) = (3/4) × (16/9) = 48/36 = 1 1/3",
          },
          {
            id: "4",
            statement: "What is the approximate value of (3.99)^2?",
            options: {
              A: "15",
              B: "16",
              C: "14",
              D: "12",
            },
            answer: "B",
            explanation: "3.99² ≈ 16 (as 4² = 16 and 3.99 is close to 4)",
          },
          {
            id: "5",
            statement: "Simplify: (45% of 240) + (25% of 320)",
            options: {
              A: "188",
              B: "196",
              C: "192",
              D: "200",
            },
            answer: "C",
            explanation: "45% of 240 = 108, 25% of 320 = 80 ⇒ Total = 188",
          },
        ],
      },
      {
        id: "3",
        title: "Algebra",
        questions: [
          {
            id: "1",
            statement: "If x + 1/x = 5, then find the value of x² + 1/x².",
            options: {
              A: "23",
              B: "21",
              C: "25",
              D: "17",
            },
            answer: "A",
            explanation:
              "(x + 1/x)² = x² + 1/x² + 2 ⇒ 25 = x² + 1/x² + 2 ⇒ x² + 1/x² = 23",
          },
          {
            id: "2",
            statement: "If x² + 2x + 1 = 0, then the value of x is:",
            options: {
              A: "1",
              B: "-1",
              C: "0",
              D: "-2",
            },
            answer: "B",
            explanation: "x² + 2x + 1 = (x + 1)² ⇒ x = -1",
          },
          {
            id: "3",
            statement: "If a + b = 12 and ab = 27, find the value of a² + b².",
            options: {
              A: "90",
              B: "100",
              C: "72",
              D: "144",
            },
            answer: "A",
            explanation: "a² + b² = (a + b)² - 2ab = 144 - 54 = 90",
          },
          {
            id: "4",
            statement:
              "If x² - 5x + 6 = 0, what are the roots of the equation?",
            options: {
              A: "2 and 3",
              B: "1 and 6",
              C: "5 and 6",
              D: "3 and 4",
            },
            answer: "A",
            explanation: "x² - 5x + 6 = (x - 2)(x - 3) ⇒ x = 2, 3",
          },
          {
            id: "5",
            statement: "If x - 1/x = 2, then what is x² + 1/x²?",
            options: {
              A: "6",
              B: "8",
              C: "10",
              D: "12",
            },
            answer: "C",
            explanation:
              "(x - 1/x)² = x² + 1/x² - 2 ⇒ 4 = x² + 1/x² - 2 ⇒ x² + 1/x² = 6",
          },
        ],
      },
      {
        id: "4",
        title: "Percentage",
        questions: [],
      },
      {
        id: "5",
        title: "Profit, Loss & Discount",
        questions: [
          {
            id: "1",
            statement:
              "A man buys an article for ₹27.50 and sells it for ₹28.60. Find his gain percent.",
            options: {
              A: "4%",
              B: "5%",
              C: "3%",
              D: "2%",
            },
            answer: "A",
            explanation:
              "Gain = ₹28.60 - ₹27.50 = ₹1.10; Gain% = (1.10 / 27.50) × 100 = 4%",
          },
          {
            id: "2",
            statement:
              "If a man purchases 11 oranges for ₹10 and sells 10 oranges for ₹11, what is his gain percent?",
            options: {
              A: "21%",
              B: "10%",
              C: "11%",
              D: "20%",
            },
            answer: "A",
            explanation:
              "CP of 1 orange = 10/11, SP = 11/10; Gain = (121 - 100)/110 = 21/110 = 19.1%",
          },
          {
            id: "3",
            statement:
              "If an article is sold at a gain of 6% instead of a loss of 6%, he gets ₹12 more. Find the cost price.",
            options: {
              A: "₹100",
              B: "₹120",
              C: "₹110",
              D: "₹130",
            },
            answer: "A",
            explanation:
              "Difference in % = 6 + 6 = 12%; 12% of CP = 12 ⇒ CP = ₹100",
          },
          {
            id: "4",
            statement:
              "A person sells an article at 10% loss. If he had sold it for ₹40 more, he would have gained 10%. Find the cost price.",
            options: {
              A: "₹200",
              B: "₹180",
              C: "₹220",
              D: "₹240",
            },
            answer: "A",
            explanation:
              "Let CP = x; 10% loss ⇒ SP = 0.9x; 10% gain ⇒ SP = 1.1x; 1.1x - 0.9x = ₹40 ⇒ x = ₹200",
          },
          {
            id: "5",
            statement:
              "What is the selling price of an article if the profit is 20% and cost price is ₹250?",
            options: {
              A: "₹270",
              B: "₹280",
              C: "₹300",
              D: "₹320",
            },
            answer: "C",
            explanation: "Profit = 20% of ₹250 = ₹50; SP = ₹250 + ₹50 = ₹300",
          },
          {
            id: "6",
            statement:
              "If the cost price of 20 pens is equal to the selling price of 16 pens, what is the profit percentage?",
            options: {
              A: "25%",
              B: "30%",
              C: "20%",
              D: "15%",
            },
            answer: "A",
            explanation: "SP/CP = 15/12 = 1.25 ⇒ 25% gain",
          },
          {
            id: "7",
            statement:
              "A person sells an article at a loss of 10%. If the selling price was ₹60 more, he would have gained 5%. What is the cost price?",
            options: {
              A: "₹400",
              B: "₹600",
              C: "₹500",
              D: "₹450",
            },
            answer: "A",
            explanation:
              "SP1 = 0.9x, SP2 = 1.05x ⇒ 1.05x - 0.9x = ₹60 ⇒ x = ₹400",
          },
          {
            id: "8",
            statement:
              "A man sells an article at 15% profit. If he had bought it for 20% less and sold it for ₹10 more, he would have gained 50%. Find the cost price.",
            options: {
              A: "₹100",
              B: "₹120",
              C: "₹150",
              D: "₹160",
            },
            answer: "A",
            explanation:
              "Let CP = x; SP = 1.15x; new CP = 0.8x; new SP = 1.15x + 10 = 1.2x ⇒ x = ₹100",
          },
          {
            id: "9",
            statement:
              "If the selling price of 12 articles is equal to the cost price of 15 articles, what is the gain %?",
            options: {
              A: "25%",
              B: "20%",
              C: "15%",
              D: "30%",
            },
            answer: "A",
            explanation:
              "SP of 12 = CP of 15 ⇒ SP/CP = 15/12 = 1.25 ⇒ 25% gain",
          },
          {
            id: "10",
            statement:
              "A shopkeeper earns a profit of 12% on selling a book for ₹112. Find the cost price.",
            options: {
              A: "₹100",
              B: "₹105",
              C: "₹110",
              D: "₹95",
            },
            answer: "A",
            explanation: "SP = ₹112; Gain = 12%; CP = 112 / 1.12 = ₹100",
          },
        ],
      },
      {
        id: "6",
        title: "Simple Interest & Compound Interest",
        questions: [],
      },
      {
        id: "7",
        title: "Ratio & Proportion",
        questions: [],
      },
      {
        id: "8",
        title: "Partnership",
        questions: [],
      },
      {
        id: "9",
        title: "Mixtures and Alligations",
        questions: [],
      },
      {
        id: "10",
        title: "Time and Work",
        questions: [],
      },
      {
        id: "11",
        title: "Time, Speed & Distance",
        questions: [],
      },
      {
        id: "12",
        title: "Mensuration",
        questions: [],
      },
      {
        id: "13",
        title: "Permutation & Combination",
        questions: [],
      },
      {
        id: "14",
        title: "Probability",
        questions: [],
      },
      {
        id: "15",
        title: "Data Interpretation",
        questions: [],
      },
      {
        id: "16",
        title: "Average",
        questions: [],
      },
      {
        id: "17",
        title: "Age Problems",
        questions: [],
      },
      {
        id: "18",
        title: "Boats and Streams",
        questions: [],
      },
      {
        id: "19",
        title: "Trains",
        questions: [],
      },
    ],
  },
  {
    id: "2",
    category: "Reasoning",
    topics: [
      {
        id: "1",
        title: "Blood Relations",
        questions: [],
      },
      {
        id: "2",
        title: "Direction Sense",
        questions: [],
      },
      {
        id: "3",
        title: "Coding-Decoding",
        questions: [],
      },
      {
        id: "4",
        title: "Seating Arrangement",
        questions: [],
      },
      {
        id: "5",
        title: "Puzzles",
        questions: [],
      },
      {
        id: "6",
        title: "Syllogism",
        questions: [],
      },
      {
        id: "7",
        title: "Inequalities",
        questions: [],
      },
      {
        id: "8",
        title: "Statement and Assumptions",
        questions: [],
      },
      {
        id: "9",
        title: "Statement and Conclusions",
        questions: [],
      },
      {
        id: "10",
        title: "Cause and Effect",
        questions: [],
      },
      {
        id: "11",
        title: "Course of Action",
        questions: [],
      },
      {
        id: "12",
        title: "Decision Making",
        questions: [],
      },
      {
        id: "13",
        title: "Analogy",
        questions: [],
      },
      {
        id: "14",
        title: "Classification (Odd One Out)",
        questions: [],
      },
      {
        id: "15",
        title: "Series (Number & Alphabet Series)",
        questions: [],
      },
      {
        id: "16",
        title: "Alphabet Test",
        questions: [],
      },
      {
        id: "17",
        title: "Ranking and Order",
        questions: [],
      },
      {
        id: "18",
        title: "Calendar",
        questions: [],
      },
      {
        id: "19",
        title: "Clock",
        questions: [],
      },
      {
        id: "20",
        title: "Input-Output",
        questions: [],
      },
      {
        id: "21",
        title: "Data Sufficiency",
        questions: [],
      },
      {
        id: "22",
        title: "Logical Venn Diagrams",
        questions: [],
      },
      {
        id: "23",
        title: "Non-verbal Reasoning (Images, Patterns, Figures)",
        questions: [],
      },
      {
        id: "24",
        title: "Cube and Dice",
        questions: [],
      },
      {
        id: "25",
        title: "Mirror and Water Images",
        questions: [],
      },
      {
        id: "26",
        title: "Paper Folding and Cutting",
        questions: [],
      },
    ],
  },
  {
    id: "3",
    category: "Verbal Ability",
    topics: [
      {
        id: "1",
        title: "Synonyms",
        questions: [],
      },
      {
        id: "2",
        title: "Antonyms",
        questions: [],
      },
      {
        id: "3",
        title: "Vocabulary (Word Meaning)",
        questions: [],
      },
      {
        id: "4",
        title: "One Word Substitution",
        questions: [],
      },
      {
        id: "5",
        title: "Idioms and Phrases",
        questions: [],
      },
      {
        id: "6",
        title: "Spellings / Detecting Misspelled Words",
        questions: [],
      },
      {
        id: "7",
        title: "Spotting Errors",
        questions: [],
      },
      {
        id: "8",
        title: "Sentence Improvement",
        questions: [],
      },
      {
        id: "9",
        title: "Sentence Completion",
        questions: [],
      },
      {
        id: "10",
        title: "Sentence Correction",
        questions: [],
      },
      {
        id: "11",
        title: "Fill in the Blanks",
        questions: [],
      },
      {
        id: "12",
        title: "Cloze Test",
        questions: [],
      },
      {
        id: "13",
        title: "Para Jumbles (Sentence Rearrangement)",
        questions: [],
      },
      {
        id: "14",
        title: "Reading Comprehension",
        questions: [],
      },
      {
        id: "15",
        title: "Passage Completion",
        questions: [],
      },
      {
        id: "16",
        title: "Active and Passive Voice",
        questions: [],
      },
      {
        id: "17",
        title: "Direct and Indirect Speech",
        questions: [],
      },
      {
        id: "18",
        title: "Verbal Analogies",
        questions: [],
      },
      {
        id: "19",
        title: "Sentence Formation",
        questions: [],
      },
      {
        id: "20",
        title: "Word Usage in Different Contexts",
        questions: [],
      },
    ],
  },
];
