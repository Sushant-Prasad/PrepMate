export const questions=[{
    no: 1,
    question: "A pipe can fill a tank in 6 hours. A second pipe can fill it in 8 hours. If both pipes are opened together, how long will it take to fill the tank?",
    options: ["3 hours", "3 hours 15 minutes", "3 hours 20 minutes", "3 hours 30 minutes"],
    answer: "3 hours 25 minutes",
    solution: "1/6 + 1/8 = 7/24. So, time = 24/7 hours = 3 hours 25 minutes approx."
  },
  {
    no: 2,
    question: "Pipe A can fill a tank in 20 minutes and pipe B in 30 minutes. If both are opened together, how much time will they take to fill the tank?",
    options: ["10 min", "12 min", "15 min", "18 min"],
    answer: "12 min",
    solution: "1/20 + 1/30 = 5/60 = 1/12. So, time = 12 min."
  },
  {
    no: 3,
    question: "A cistern has two inlet pipes which can fill it in 12 and 15 minutes respectively. A waste pipe can empty it in 10 minutes. If all three are opened together, how long will it take to fill the cistern?",
    options: ["20 min", "24 min", "30 min", "Cannot be filled"],
    answer: "Cannot be filled",
    solution: "1/12 + 1/15 - 1/10 = -1/60 → Net emptying, so it can’t be filled."
  },
  {
    no: 4,
    question: "Pipe A can fill a tank in 10 hours while Pipe B can empty it in 15 hours. If both are opened together, how long will it take to fill the tank?",
    options: ["25 hours", "30 hours", "40 hours", "50 hours"],
    answer: "30 hours",
    solution: "1/10 - 1/15 = 1/30. So, time = 30 hours."
  },
  {
    no: 5,
    question: "Three pipes can fill a tank in 6 hours. After working at it together for 2 hours, one pipe gets blocked. If the remaining two pipes take 7 hours to fill the rest, how long would the blocked pipe take to fill the tank alone?",
    options: ["12 hrs", "18 hrs", "14 hrs", "15 hrs"],
    answer: "14 hrs",
    solution: "Let total work = 1. Work done in 2 hrs = 2/6 = 1/3. Remaining work = 2/3 filled by 2 pipes in 7 hrs → rate = 2/3 ÷ 7 = 2/21. So, 3-pipe rate = 1/6. Blocked pipe rate = 1/6 - 2/21 = 1/14."
  },
  {
    no: 6,
    question: "A tank is filled in 5 hours by three pipes A, B, and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
    options: ["30 hours", "25 hours", "35 hours", "40 hours"],
    answer: "35 hours",
    solution: "Let A = x, B = 2x, C = 4x. Total = 7x. 7x × 5 = 1 → x = 1/35 → A alone = 35 hrs."
  },
  {
    no: 7,
    question: "If a pipe fills a tank in 12 hours, but due to a leak it takes 16 hours to fill the tank, how long will the leak alone take to empty the full tank?",
    options: ["36 hours", "48 hours", "60 hours", "64 hours"],
    answer: "48 hours",
    solution: "1/12 - 1/x = 1/16 → x = 48 hours."
  },
  {
    no: 8,
    question: "Pipe A can fill a tank in 10 hours, and pipe B can fill it in 20 hours. If both are opened, but after 4 hours pipe A is closed, how much time will B take to fill the rest?",
    options: ["3 hrs", "4 hrs", "5 hrs", "2 hrs"],
    answer: "3 hrs",
    solution: "4 hrs work = (1/10 + 1/20)×4 = 3/5. Remaining = 2/5. B alone = 20×2/5 = 8 hrs."
  },
  {
    no: 9,
    question: "A cistern is normally filled in 8 hours, but takes 2 hours longer because of a leak. How long would the leak alone take to empty the cistern?",
    options: ["20 hrs", "28 hrs", "32 hrs", "40 hrs"],
    answer: "32 hrs",
    solution: "1/8 - 1/x = 1/10 → x = 40."
  },
  {
    no: 10,
    question: "Two inlet pipes can fill a tank in 24 and 36 minutes respectively. An outlet pipe can empty it in 12 minutes. If all are opened together, how much time will it take to fill the tank?",
    options: ["72 min", "90 min", "Never", "Cannot be filled"],
    answer: "Never",
    solution: "1/24 + 1/36 - 1/12 = -1/72 → Net emptying, so tank will never fill."
  },
  {
    no: 11,
    question: "A tank can be filled by pipe A in 6 hours and by pipe B in 8 hours. Pipe C can empty the full tank in 12 hours. If all pipes are opened, how long will it take to fill the tank?",
    options: ["4 hours", "4.8 hours", "5 hours", "6 hours"],
    answer: "4.8 hours",
    solution: "1/6 + 1/8 - 1/12 = (4 + 3 - 2)/24 = 5/24 → Time = 24/5 = 4.8 hours."
  },
  {
    no: 12,
    question: "Pipe A fills a tank in 10 minutes and pipe B in 15 minutes. If both are opened together but pipe B is closed after 5 minutes, how long will it take to fill the tank?",
    options: ["8 min", "9 min", "10 min", "12 min"],
    answer: "9 min",
    solution: "In 5 min: A+B = 1/10 + 1/15 = 1/6 → 5/6 filled. Remaining 1/6 by A = 1/10 → time = 1/6 ÷ 1/10 = 10/6 = 1.67 mins → Total = 6.67 mins ≈ 9 mins."
  },
  {
    no: 13,
    question: "A pipe can fill 1/3rd of a tank in 1 hour. How long will it take to fill the tank?",
    options: ["2 hrs", "2.5 hrs", "3 hrs", "3.5 hrs"],
    answer: "3 hrs",
    solution: "If 1/3 in 1 hour, full tank = 3 hours."
  },
  {
    no: 14,
    question: "Pipe A fills a tank in 12 hrs. Pipe B fills it in 15 hrs. If both are opened for 4 hrs, then closed, what part of tank is still empty?",
    options: ["1/5", "1/4", "1/3", "1/6"],
    answer: "1/3",
    solution: "Work in 4 hrs = (1/12 + 1/15)×4 = (9/60)×4 = 36/60 = 3/5 → Empty = 2/5."
  },
  {
    no: 15,
    question: "Two pipes A and B can fill a tank in 36 minutes and 45 minutes respectively. A is turned on for 10 minutes and then B is also turned on. Find the total time to fill the tank.",
    options: ["26 min", "28 min", "30 min", "25 min"],
    answer: "30 min",
    solution: "A in 10 min = 10/36 = 5/18. Remaining = 13/18. A+B = 1/36 + 1/45 = 9/180 = 1/20. Time = 13/18 ÷ 1/20 = 13/18×20 = 14.44 ≈ 20 min → total = 30 min."
  }];