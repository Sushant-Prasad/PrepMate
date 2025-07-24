export const questions=[{
    id: 1,
    question: "In how many ways can the letters of the word 'LEADER' be arranged?",
    options: ["720", "360", "180", "240"],
    answer: "720",
    solution: "The word 'LEADER' has 6 letters with E repeating twice. So total arrangements = 6! / 2! = 720 / 2 = 360."
  },
  {
    id: 2,
    question: "How many 3-digit numbers can be formed using the digits 1, 2, 3, 4, 5 without repetition?",
    options: ["60", "100", "120", "80"],
    answer: "60",
    solution: "Number of 3-digit numbers = 5P3 = 5 × 4 × 3 = 60."
  },
  {
    id: 3,
    question: "From a group of 7 men and 6 women, five persons are to be selected to form a committee so that at least 3 men are there. In how many ways can it be done?",
    options: ["756", "812", "792", "824"],
    answer: "756",
    solution: "We calculate combinations with at least 3 men: (3M,2W) + (4M,1W) + (5M,0W) = 7C3×6C2 + 7C4×6C1 + 7C5×6C0 = 35×15 + 35×6 + 21×1 = 525 + 210 + 21 = 756."
  },
  {
    id: 4,
    question: "How many words can be formed with the letters of the word ‘APPLE’?",
    options: ["60", "120", "240", "150"],
    answer: "60",
    solution: "APPLE has 5 letters with P repeating twice. So total arrangements = 5! / 2! = 120 / 2 = 60."
  },
  {
    id: 5,
    question: "In how many ways can a team of 3 boys and 2 girls be selected from 5 boys and 4 girls?",
    options: ["60", "100", "80", "120"],
    answer: "60",
    solution: "Ways = 5C3 × 4C2 = 10 × 6 = 60."
  },
  {
    id: 6,
    question: "How many different 4-letter codes can be formed using the letters A, B, C, D, E if no letter is repeated?",
    options: ["120", "60", "360", "240"],
    answer: "120",
    solution: "4-letter code from 5 letters = 5P4 = 5×4×3×2 = 120."
  },
  {
    id: 7,
    question: "How many ways can 4 boys and 3 girls sit in a row such that no two girls sit together?",
    options: ["1440", "2880", "720", "5760"],
    answer: "1440",
    solution: "Place boys first: 4! = 24. Girls can sit in 5 gaps between/ends of boys. Choose 3 of those: 5C3 = 10. So total = 24×10×3! = 24×10×6 = 1440."
  },
  {
    id: 8,
    question: "How many combinations of 5 letters can be made from the word 'INDEPENDENT'?",
    options: ["756", "252", "5040", "Cannot be determined"],
    answer: "Cannot be determined",
    solution: "INDEPENDENT has repeated letters, so we need to account for repetitions. Cannot be determined without full enumeration."
  },
  {
    id: 9,
    question: "From a pack of 52 cards, how many ways can 4 cards be selected?",
    options: ["270725", "234256", "187600", "285625"],
    answer: "270725",
    solution: "4 cards from 52: 52C4 = (52×51×50×49)/(4×3×2×1) = 270725."
  },
  {
    id: 10,
    question: "How many 4-digit numbers can be formed using digits 2, 3, 5, 7, 9 without repetition?",
    options: ["120", "240", "60", "360"],
    answer: "120",
    solution: "4-digit numbers = 5P4 = 5×4×3×2 = 120."
  },
  {
    id: 11,
    question: "If all the permutations of the word ‘SILENT’ are arranged in dictionary order, what will be the rank of the word ‘SILENT’?",
    options: ["335", "276", "345", "289"],
    answer: "276",
    solution: "Dictionary rank is computed by counting permutations before ‘SILENT’ alphabetically. After stepwise counting, we get 276."
  },
  {
    id: 12,
    question: "How many permutations are there of the word 'MISSISSIPPI'?",
    options: ["34650", "34600", "34500", "34700"],
    answer: "34650",
    solution: "MISSISSIPPI: 11 letters with M=1, I=4, S=4, P=2 → 11!/(1!4!4!2!) = 34650."
  },
  {
    id: 13,
    question: "In how many ways can a committee of 4 be formed from 8 men and 6 women including at least 2 women?",
    options: ["510", "540", "630", "610"],
    answer: "540",
    solution: "At least 2 women: (2W,2M) + (3W,1M) + (4W,0M) = 6C2×8C2 + 6C3×8C1 + 6C4 = 15×28 + 20×8 + 15 = 420 + 160 + 15 = 595."
  },
  {
    id: 14,
    question: "How many different necklaces can be made using 7 different colored beads?",
    options: ["360", "720", "3600", "5040"],
    answer: "360",
    solution: "Circular permutations with rotation and reflection: (n-1)!/2 = 6!/2 = 720/2 = 360."
  },
  {
    id: 15,
    question: "How many ways are there to arrange the letters of the word 'STATISTICS'?",
    options: ["50400", "5040", "504000", "30240"],
    answer: "50400",
    solution: "STATISTICS has 10 letters, S=3, T=3, I=2 → 10! / (3!×3!×2!) = 3628800 / (6×6×2) = 50400."
  }];