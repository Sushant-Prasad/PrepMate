export const questions = [
  {
    question: "A can complete a work in 15 days and B in 20 days. If they work together, in how many days will the work be completed?",
    options: ["8 days", "10 days", "12 days", "17.5 days"],
    solution: "A's 1 day work = 1/15, B's 1 day work = 1/20. Combined 1 day work = 1/15 + 1/20 = 7/60. So, total days = 60/7 = 8.57 days ≈ 8 days."
  },
  {
    question: "A is twice as efficient as B. If A can complete a job in 12 days, in how many days can B do it?",
    options: ["24 days", "18 days", "30 days", "36 days"],
    solution: "If A is twice efficient, B takes 2× time. So B = 12×2 = 24 days."
  },
  {
    question: "A and B together can do a work in 6 days. A alone can do it in 9 days. How long will B take to complete the work alone?",
    options: ["18 days", "12 days", "15 days", "10 days"],
    solution: "1/A = 1/9, 1/(A+B) = 1/6 → 1/B = 1/6 - 1/9 = (3-2)/18 = 1/18 → B takes 18 days."
  },
  {
    question: "If 10 men can complete a work in 8 days, how many days will 16 men take to complete the same work?",
    options: ["4 days", "5 days", "6 days", "7 days"],
    solution: "More men → less days. 10×8 = 80 man-days. So, 80/16 = 5 days."
  },
  {
    question: "A, B, and C can complete a work in 12, 15, and 20 days respectively. If all work together, in how many days will the work be done?",
    options: ["5 days", "6 days", "4 days", "10 days"],
    solution: "1/A + 1/B + 1/C = 1/12 + 1/15 + 1/20 = (5+4+3)/60 = 12/60 = 1/5 → 5 days."
  },
  {
    question: "B can do a work in 25 days. He worked for 5 days and left. A completed the rest in 10 days. How long would A take alone?",
    options: ["15 days", "20 days", "25 days", "30 days"],
    solution: "B's 5-day work = 5/25 = 1/5. Remaining = 4/5. A did 4/5 in 10 days → Full = 10 × 5/4 = 12.5 days."
  },
  {
    question: "A and B can finish a work in 10 days. B and C in 12 days, C and A in 15 days. How long will all three take together?",
    options: ["8 days", "9 days", "10 days", "7.5 days"],
    solution: "1/(A+B) = 1/10, 1/(B+C)=1/12, 1/(C+A)=1/15 → Adding all: 2(A+B+C)=1/10+1/12+1/15= (6+5+4)/60=15/60=1/4 → A+B+C=1/8 → 8 days."
  },
  {
    question: "If 5 women can complete a work in 8 days, how many women are needed to finish it in 4 days?",
    options: ["10", "12", "16", "8"],
    solution: "Work = 5×8 = 40 woman-days. For 4 days: 40/4 = 10 women."
  },
  {
    question: "A does 60% of a work in 10 days. How much more time will he need to complete the rest?",
    options: ["6 days", "8 days", "4 days", "10 days"],
    solution: "60% in 10 days → full = 10/0.6 = 16.67 → remaining = 6.67 days ≈ 7 days."
  },
  {
    question: "Two men and 3 boys can do a job in 10 days. 3 men and 2 boys can do it in 8 days. One man alone will do it in?",
    options: ["30 days", "25 days", "40 days", "24 days"],
    solution: "Let 1 man's work = M, 1 boy's work = B → 2M+3B=1/10, 3M+2B=1/8 → Solving gives M=1/24 → 1 man = 24 days."
  },
  {
    question: "A is thrice as efficient as B. Working together, they can complete a task in 12 days. In how many days can A do it alone?",
    options: ["15 days", "18 days", "16 days", "20 days"],
    solution: "A=3B → A+B = 4B → 4B × 12 = 48 → B = 48, A = 48/3 = 16 days."
  },
  {
    question: "A can do a job in 5 days, B in 15 days. They work on alternate days starting with A. How many days to finish the job?",
    options: ["7 days", "6 days", "8 days", "5 days"],
    solution: "In 2 days: A+B = 1/5+1/15=4/15 → In 6 days = 12/15. Remaining = 3/15 = 1/5 → A will complete on 7th day."
  },
  {
    question: "If 12 men can build a wall in 9 days, how many days will 18 men take?",
    options: ["6", "8", "5", "7"],
    solution: "Work = 12×9=108 man-days. 108/18 = 6 days."
  },
  {
    question: "A and B can complete a work in 20 days. They worked for 8 days together, then A left. B finished in 12 more days. B alone can do it in?",
    options: ["30 days", "32 days", "36 days", "28 days"],
    solution: "A+B = 1/20, → 8×1/20 = 2/5 done. Remaining 3/5 by B in 12 days → B's rate = (3/5)/12 = 1/20 → B = 20 days."
  },
  {
    question: "A can complete a work in 10 days. B takes 4 days more than A. Together, they will take?",
    options: ["6 days", "5.71 days", "5 days", "4.5 days"],
    solution: "A = 10, B = 14 → 1/A + 1/B = 1/10 + 1/14 = 12/70 = 6/35 → Days = 35/6 ≈ 5.83 days."
  },
  {
    question: "3 men or 6 women can do a job in 12 days. How many days will 4 men and 6 women take?",
    options: ["6", "8", "5", "7"],
    solution: "3 men = 6 women → 4 men + 6 women = 8 women → 6 women = 12 days → 8 women = 9 days."
  },
  {
    question: "If 6 men or 9 women can do a work in 12 days, how many days will 3 men and 6 women take?",
    options: ["6", "8", "5", "7"],
    solution: "6M=9W→1M=1.5W→3M=4.5W→Total=4.5+6=10.5W. 9W=12 days→9×12=108 → 108/10.5 = ~10.3 days."
  },
  {
    question: "A and B can do a work in 30 and 45 days respectively. How many days will they take to do it together?",
    options: ["18", "20", "25", "15"],
    solution: "1/30 + 1/45 = (3+2)/90 = 5/90 = 1/18 → 18 days."
  },
  {
    question: "A can do a work in 18 days. B takes 3 days more than A. Together, they will take?",
    options: ["9.8", "10", "10.29", "11"],
    solution: "A=18, B=21 → Combined = 1/18 + 1/21 = (7+6)/126 = 13/126 → 126/13 ≈ 9.69 days."
  },
  {
    question: "A alone can do a piece of work in 6 days. B is 50% more efficient than A. Together they can do it in?",
    options: ["2.4", "2.5", "3", "4"],
    solution: "A = 1/6, B = 1.5/6 = 1/4 → Total = 1/6 + 1/4 = 5/12 → 12/5 = 2.4 days."
  },
  {
    question: "A, B, C complete a work in 10, 12, and 15 days. Working together, they earn ₹7200. What is B's share?",
    options: ["₹2000", "₹2400", "₹2500", "₹3000"],
    solution: "Work: A=1/10, B=1/12, C=1/15 → LCM=60 → A=6, B=5, C=4 → Total=15 → B=5/15 = 1/3 → ₹2400."
  },
  {
    question: "A does half work in 6 days. B completes remaining in 4 days. Together time?",
    options: ["3.4", "5", "4", "6"],
    solution: "A's rate = 0.5/6 = 1/12, B = 0.5/4 = 1/8 → Total = 1/12 + 1/8 = 5/24 → Full = 24/5 = 4.8 days."
  },
  {
    question: "A can do a job in 6 days, B in 8 days. They work 3 days together, A leaves. Remaining job by B in?",
    options: ["1 day", "2 days", "1.5 days", "2.5 days"],
    solution: "A+B = 1/6+1/8=7/24. In 3 days = 21/24 = 7/8 → Left = 1/8 → B = (1/8)/(1/8) = 1 day."
  },
  {
    question: "If A takes 20 days and B takes 30 days, and they work alternatively starting with A, how many days to complete work?",
    options: ["25", "26", "28", "27"],
    solution: "1 day A = 1/20, B = 1/30 → 2 days = 1/20+1/30 = 1/12. So in 24 days = 2 days x 12 = 1 → Done."
  },
  {
    question: "If 15 men complete work in 12 days, how many men needed for same in 10 days?",
    options: ["16", "18", "20", "22"],
    solution: "Total work = 15×12 = 180 man-days → 180/10 = 18 men."
  }
];
