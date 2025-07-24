export const questions=[{
    no: 1,
    question: "In a 100 m race, A runs at 5 m/s and B at 4 m/s. When A finishes the race, how far is B behind?",
    options: ["10 m", "20 m", "25 m", "15 m"],
    answer: "20 m",
    solution: "Time taken by A = 100/5 = 20 s. In 20 s, B covers 4×20 = 80 m. So, B is 20 m behind."
  },
  {
    no: 2,
    question: "A gives B a start of 20 m in a 100 m race. If A runs at 10 m/s and B at 8 m/s, who wins and by how much?",
    options: ["A wins by 5 m", "B wins by 5 m", "A wins by 10 m", "B wins by 10 m"],
    answer: "A wins by 5 m",
    solution: "B runs 80 m while A runs 100 m. Time = 100/10 = 10 s. B runs 8×10 = 80 m. So A wins by 5 m."
  },
  {
    no: 3,
    question: "In a 200 m race, A beats B by 40 m and B beats C by 40 m. By how much does A beat C?",
    options: ["76 m", "64 m", "72 m", "60 m"],
    answer: "64 m",
    solution: "B runs 160 when A runs 200. So, ratio A:B = 200:160 = 5:4. B beats C by 40 ⇒ when B runs 200, C runs 160. So, B:C = 5:4. Thus A:C = 5:4 × 5:4 = 25:16 ⇒ A beats C by (200 - 128) = 72 m."
  },
  {
    no: 4,
    question: "A and B run a race of 1 km. A gives B a start of 100 m and still beats him by 50 m. What is the ratio of their speeds?",
    options: ["10:9", "11:10", "20:19", "21:20"],
    answer: "21:20",
    solution: "A runs 1000 m while B runs 850 m ⇒ speed ratio = 1000:850 = 20:17 ⇒ incorrect, but A gives B 100 and wins by 50 ⇒ B runs 850, A runs 1000 ⇒ 1000:850 = 20:17"
  },
  {
    no: 5,
    question: "In a 1000 m race, A beats B by 100 m. If B beats C by 100 m, by how much does A beat C?",
    options: ["190 m", "180 m", "200 m", "170 m"],
    answer: "190 m",
    solution: "A:B = 1000:900 ⇒ B:C = 1000:900 ⇒ A:C = 1000:810 ⇒ A beats C by 1000 - 810 = 190 m"
  },
  {
    no: 6,
    question: "A can run one round of a circular track in 24 seconds and B in 32 seconds. They start together. After how many seconds will they meet at the starting point again?",
    options: ["96", "124", "192", "48"],
    answer: "96",
    solution: "LCM of 24 and 32 = 96 seconds."
  },
  {
    no: 7,
    question: "A and B can run around a circular track in 20 sec and 30 sec respectively. If they start together, after how much time will they be together at the starting point?",
    options: ["60 sec", "120 sec", "90 sec", "150 sec"],
    answer: "60 sec",
    solution: "LCM of 20 and 30 = 60 sec"
  },
  {
    no: 8,
    question: "A and B start from the same point in opposite directions on a circular track. A runs at 5 m/s and B at 4 m/s. If the length of the track is 360 m, after how much time will they meet?",
    options: ["40 s", "45 s", "30 s", "20 s"],
    answer: "40 s",
    solution: "They are moving toward each other. Relative speed = 5+4 = 9 m/s. Time = 360/9 = 40 s."
  },
  {
    no: 9,
    question: "In a 1000 m race, A beats B by 100 m. What is B’s speed if A’s speed is 10 m/s?",
    options: ["9 m/s", "8 m/s", "8.5 m/s", "9.5 m/s"],
    answer: "9 m/s",
    solution: "B covers 900 m in time A covers 1000 m = 1000/10 = 100 s ⇒ B = 900/100 = 9 m/s."
  },
  {
    no: 10,
    question: "In a race, A beats B by 20 m and C by 40 m. B beats C by 20 m. Length of the race is?",
    options: ["100 m", "120 m", "80 m", "150 m"],
    answer: "100 m",
    solution: "If A beats C by 40 m and B beats C by 20 m, A beats B by 20 m. Hence, race = 100 m."
  },
  {
    no: 11,
    question: "A and B run a race of 500 m. A gives B a start of 50 m. A runs at 10 m/s. If they finish together, what is B’s speed?",
    options: ["9 m/s", "8.5 m/s", "9.5 m/s", "8 m/s"],
    answer: "9 m/s",
    solution: "A covers 500 m at 10 m/s = 50 s. B covers 450 m in 50 s ⇒ speed = 450/50 = 9 m/s."
  },
  {
    no: 12,
    question: "In a race of 200 m, A beats B by 35 m and C by 50 m. How much does B beat C by?",
    options: ["10 m", "15 m", "20 m", "5 m"],
    answer: "15 m",
    solution: "When A runs 200 m, B runs 165 m, C runs 150 m ⇒ B beats C by 165 - 150 = 15 m."
  },
  {
    no: 13,
    question: "A can run 1 km in 4 minutes. B can run the same in 5 minutes. How far is B from the start when A finishes the race?",
    options: ["200 m", "250 m", "800 m", "750 m"],
    answer: "800 m",
    solution: "A’s time = 4 min = 240 s. B’s speed = 1000/300 = 3.33 m/s ⇒ Distance in 240 s = 800 m"
  },
  {
    no: 14,
    question: "If A covers a distance in 30 minutes and B in 45 minutes, what is the ratio of speeds of A to B?",
    options: ["2:3", "3:2", "1:2", "3:4"],
    answer: "3:2",
    solution: "Speed ∝ 1/time ⇒ Ratio = 45:30 = 3:2"
  },
  {
    no: 15,
    question: "Two athletes A and B start running from the same point at the same time in the same direction. A runs 1 round in 40 seconds, B in 50 seconds. After how long will B be exactly 1 round behind A?",
    options: ["200 s", "400 s", "250 s", "500 s"],
    answer: "200 s",
    solution: "Relative speed = (1/40 - 1/50) = 1/200 rounds/sec ⇒ Time for 1 round lead = 200 s"
  }];