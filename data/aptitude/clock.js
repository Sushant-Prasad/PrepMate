 export const questions = [
  {
    question: "1.What is the angle between the hour and the minute hands of a clock at 3:30?",
    options: ["75°", "90°", "105°", "60°"],
    answer: "75°",
    solution: "At 3:30, hour hand is at 3.5 hours => 3.5 * 30 = 105°, minute hand at 6 => 6 * 30 = 180°. Difference = 180 - 105 = 75°"
  },
  {
    question: "2.At what time between 4 and 5 o'clock will the hands of a clock be at right angles?",
    options: ["4:20", "4:38 2/11", "4:15", "4:50"],
    answer: "4:38 2/11",
    solution: "Use the formula: θ = |(30*H - (11/2)*M)| = 90. Solve for M when H = 4."
  },
  {
    question: "3.A clock gains 5 minutes every hour. What will be the angle gained by the minute hand in 12 hours?",
    options: ["360°", "60°", "720°", "None of the above"],
    answer: "60°",
    solution: "5 min gain/hour = 5*6 = 30° per hour => 30° * 12 = 360°, but this is incorrect. Since the clock is gaining time, we calculate actual vs gained time carefully."
  },
  {
    question: "4.How many times in a day, the hands of a clock are in a straight line but opposite in direction?",
    options: ["22", "24", "48", "12"],
    answer: "22",
    solution: "The hands are in opposite direction 22 times in 24 hours."
  },
  {
    question: "5.At what time between 6 and 7 o'clock will the hands of a clock be together?",
    options: ["6:32 8/11", "6:36 4/11", "6:34 2/11", "6:30"],
    answer: "6:32 8/11",
    solution: "Use formula: M = (60H)/(11), so for H = 6, M = 360/11 = 32 8/11 min"
  },
  {
    question: "6.How many degrees does the hour hand of a clock move in one hour?",
    options: ["60°", "30°", "15°", "45°"],
    answer: "30°",
    solution: "360° in 12 hours => 360/12 = 30° per hour"
  },
  {
    question: "7.How many degrees does the minute hand move in 45 minutes?",
    options: ["270°", "180°", "225°", "90°"],
    answer: "270°",
    solution: "6° per minute => 6 * 45 = 270°"
  },
  {
    question: "8.The hands of a clock are at right angles at 2:15. True or False?",
    options: ["True", "False"],
    answer: "False",
    solution: "At 2:15, hour hand = 2.25*30 = 67.5°, minute hand = 90°. Difference = 22.5° ≠ 90°"
  },
  {
    question: "9.How many times in a day the hands of a clock are at right angles?",
    options: ["22", "24", "44", "48"],
    answer: "44",
    solution: "Hands form right angles twice every hour => 2*12 = 24 times per 12 hrs => 48 per day"
  },
  {
    question: "10.What is the angle between the hands of a clock at 7:20?",
    options: ["120°", "130°", "100°", "110°"],
    answer: "100°",
    solution: "Hour hand = 7*30 + 20*0.5 = 210 + 10 = 220°, Minute hand = 20*6 = 120°. Difference = 100°"
  },
  {
    question: "11.At what time between 2 and 3 o'clock are the hands of a clock in the same straight line?",
    options: ["2:32 8/11", "2:49 1/11", "2:43 7/11", "2:40"],
    answer: "2:43 7/11",
    solution: "Use formula for opposite direction: (H*60 + 60*6)/(11) = time in minutes"
  },
  {
    question: "12.How many times do the hands of a clock coincide in 12 hours?",
    options: ["11", "12", "24", "22"],
    answer: "11",
    solution: "They coincide every 65 5/11 minutes, which is 11 times in 12 hours"
  },
  {
    question: "13.How many times do the hands of a clock coincide in a day?",
    options: ["11", "22", "24", "12"],
    answer: "22",
    solution: "11 in 12 hours => 22 in 24 hours"
  },
  {
    question: "14.How long will it take for the minute hand to gain 360° over the hour hand?",
    options: ["10 hours", "12 hours", "24 hours", "6 hours"],
    answer: "12 hours",
    solution: "Minute hand gains 5.5° per minute => 360° / 5.5 = 65.45 min => Happens every 12 hours"
  },
  {
    question: "15.If a clock is 10 minutes slow at 6 p.m. and 20 minutes fast at 6 a.m., when was it correct?",
    options: ["12 midnight", "3 a.m.", "12 noon", "9 a.m."],
    answer: "12 midnight",
    solution: "The error = 30 minutes over 12 hours => 2.5 minutes/hour => 10 minutes late at 6 p.m., so correct at 12 midnight"
  },
  {
    question: "16.What is the angle between the hands of a clock at 1:50?",
    options: ["95°", "115°", "125°", "130°"],
    answer: "115°",
    solution: "Hour = 1*30 + 50*0.5 = 30 + 25 = 55°, Minute = 300°. Difference = 245° => 360 - 245 = 115°"
  },
  {
    question: "17.When the time is 9:00, what is the angle between the hands?",
    options: ["90°", "180°", "270°", "120°"],
    answer: "90°",
    solution: "Hour = 9*30 = 270°, Minute = 0°. Difference = 270° => 360 - 270 = 90°"
  },
  {
    question: "18.At what time between 10 and 11 are the hands together?",
    options: ["10:54 6/11", "10:52 8/11", "10:50", "10:56 4/11"],
    answer: "10:54 6/11",
    solution: "M = 60H/11 = 600/11 = 54 6/11 minutes"
  },
  {
    question: "19.How many degrees does the hour hand turn in 15 minutes?",
    options: ["7.5°", "15°", "5°", "30°"],
    answer: "7.5°",
    solution: "30° per hour => 30 * 15 / 60 = 7.5°"
  },
  {
    question: "20.The angle traced by the hour hand in 3 hours and 40 minutes is:",
    options: ["110°", "100°", "115°", "120°"],
    answer: "110°",
    solution: "3 hrs = 90°, 40 min = (40/60)*30 = 20°. Total = 110°"
  },
  {
    question: "21.The hands of a clock are 5 minutes spaces apart. What is the angle between them?",
    options: ["30°", "25°", "35°", "40°"],
    answer: "30°",
    solution: "Each minute space = 6° => 5 * 6 = 30°"
  },
  {
    question: "22.What is the time when the hands are 120° apart between 2 and 3 o'clock?",
    options: ["2:20", "2:40", "2:49 1/11", "2:36 7/11"],
    answer: "2:49 1/11",
    solution: "Use formula: |(30H - (11/2)M)| = 120 and solve"
  },
  {
    question: "23.At what time between 7 and 8 o'clock will the hands of the clock be at 90°?",
    options: ["7:21 9/11", "7:25 5/11", "7:29 10/11", "7:34 6/11"],
    answer: "7:21 9/11",
    solution: "Use angle = |(30H - 11/2*M)| = 90 and solve"
  },
  {
    question: "24.If the minute hand is on 3 and the hour hand is between 4 and 5, what's the angle?",
    options: ["82.5°", "97.5°", "90°", "120°"],
    answer: "97.5°",
    solution: "Hour = 4*30 + x => Minute = 3*6 = 18°, angle = difference accordingly"
  },
  {
    question: "25.When are the hands of a clock together between 12 and 1?",
    options: ["12:05 5/11", "12:04", "12:06", "12:07"],
    answer: "12:05 5/11",
    solution: "Use formula: M = 60H/11, for H = 12 → M = 720/11 = 65.45 mins = 5 5/11 mins"
  }
];
