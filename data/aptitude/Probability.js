export const questions=[{
    id: 1,
    question: "What is the probability of getting a head when a coin is tossed once?",
    options: ["1/4", "1/3", "1/2", "1"],
    answer: "1/2",
    solution: "There are 2 possible outcomes: Head or Tail. Only one favorable outcome (Head), so probability = 1/2."
  },
  {
    id: 2,
    question: "What is the probability of getting an even number when a die is thrown once?",
    options: ["1/6", "1/2", "1/3", "2/3"],
    answer: "1/2",
    solution: "Even numbers on a die are 2, 4, 6. So 3 favorable outcomes out of 6 = 3/6 = 1/2."
  },
  {
    id: 3,
    question: "Two coins are tossed simultaneously. What is the probability of getting exactly one head?",
    options: ["1/2", "1/4", "1/3", "2/3"],
    answer: "1/2",
    solution: "Possible outcomes: HH, HT, TH, TT. Exactly one head: HT, TH. So 2 favorable out of 4 = 1/2."
  },
  {
    id: 4,
    question: "A card is drawn from a pack of 52 cards. What is the probability of drawing a king?",
    options: ["1/13", "1/4", "1/26", "4/13"],
    answer: "1/13",
    solution: "There are 4 kings in a pack of 52 cards. So, probability = 4/52 = 1/13."
  },
  {
    id: 5,
    question: "A bag contains 3 red and 2 black balls. One ball is drawn. What is the probability it is red?",
    options: ["3/5", "2/5", "1/2", "1/3"],
    answer: "3/5",
    solution: "Total balls = 5, Red = 3. Probability = 3/5."
  },
  {
    id: 6,
    question: "What is the probability of getting a sum of 7 when two dice are thrown?",
    options: ["1/6", "1/12", "1/9", "1/36"],
    answer: "1/6",
    solution: "Pairs giving sum 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). Total = 6, so probability = 6/36 = 1/6."
  },
  {
    id: 7,
    question: "A letter is chosen at random from the word 'MATHEMATICS'. What is the probability that it is a vowel?",
    options: ["4/11", "5/11", "3/11", "2/11"],
    answer: "4/11",
    solution: "'MATHEMATICS' has 11 letters, vowels = A, E, A, I → 4 vowels. So probability = 4/11."
  },
  {
    id: 8,
    question: "What is the probability of drawing a spade or a king from a deck of cards?",
    options: ["4/13", "2/13", "17/52", "13/52"],
    answer: "17/52",
    solution: "Spades = 13, Kings = 4, but 1 King of Spade is common. So total = 13 + 4 - 1 = 16 → 16/52 = 4/13."
  },
  {
    id: 9,
    question: "What is the probability of getting at least one tail when two coins are tossed?",
    options: ["1/4", "3/4", "1/2", "1"],
    answer: "3/4",
    solution: "At least one tail: HT, TH, TT → 3 outcomes out of 4 = 3/4."
  },
  {
    id: 10,
    question: "If a number is chosen randomly from 1 to 100, what is the probability it is divisible by 5?",
    options: ["1/10", "1/5", "1/2", "1/3"],
    answer: "1/5",
    solution: "Numbers divisible by 5 from 1–100 = 20. So, probability = 20/100 = 1/5."
  },
  {
    id: 11,
    question: "What is the probability of selecting a leap year randomly from years 2001 to 2100?",
    options: ["1/4", "1/5", "24/100", "25/100"],
    answer: "24/100",
    solution: "Leap years in 100 years = 24. So probability = 24/100."
  },
  {
    id: 12,
    question: "A bag contains 6 red and 4 green balls. One ball is picked at random. Probability it is green?",
    options: ["2/5", "1/2", "3/5", "1/3"],
    answer: "2/5",
    solution: "Total = 10, Green = 4. So, probability = 4/10 = 2/5."
  },
  {
    id: 13,
    question: "What is the probability of getting all heads in 3 coin tosses?",
    options: ["1/6", "1/8", "1/4", "3/8"],
    answer: "1/8",
    solution: "Total outcomes = 2^3 = 8. Only 1 is HHH. So, probability = 1/8."
  },
  {
    id: 14,
    question: "If 2 dice are thrown, what is the probability of getting a doublet?",
    options: ["1/6", "1/12", "1/36", "1/18"],
    answer: "1/6",
    solution: "Doublets = (1,1), (2,2)...(6,6) → 6 out of 36 outcomes. So = 6/36 = 1/6."
  },
  {
    id: 15,
    question: "From a group of 3 boys and 2 girls, one is chosen at random. What is the probability that the person is a girl?",
    options: ["1/2", "1/3", "2/5", "3/5"],
    answer: "2/5",
    solution: "Total = 5, girls = 2. So, probability = 2/5."
  }];