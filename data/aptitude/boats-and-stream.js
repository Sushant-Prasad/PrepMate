 export const questions= [
  {
    number: 1,
    question: "A man can row 18 km/hr in still water. If the river is running at 6 km/hr, it takes him 1 hour to row to a place and come back. How far is the place?",
    options: ["4.5 km", "6 km", "7.2 km", "12 km"],
    answer: "6 km",
    solution: "Speed downstream = 18 + 6 = 24 km/hr, Speed upstream = 18 - 6 = 12 km/hr.\nLet the distance be x.\nTime = x/24 + x/12 = 1 ⇒ (x + 2x)/24 = 1 ⇒ 3x = 24 ⇒ x = 8\nTotal time = 1 hour, so distance one way = 6 km."
  },
  {
    number: 2,
    question: "A boat running upstream takes 6 hours to cover a certain distance, while it takes 4 hours to cover the same distance downstream. What is the ratio of the speed of the boat to that of the current?",
    options: ["2:1", "3:1", "3:2", "4:1"],
    answer: "5:1",
    solution: "Let speed of boat = b, speed of stream = s. \nThen, distance = 6(b − s) = 4(b + s)\n=> 3(b − s) = 2(b + s) ⇒ 3b − 3s = 2b + 2s ⇒ b = 5s ⇒ Ratio = 5:1"
  },
  {
    number: 3,
    question: "A boat goes 30 km upstream in 6 hours and the same distance downstream in 3 hours. What is the speed of the boat in still water?",
    options: ["5 km/hr", "6 km/hr", "7 km/hr", "8 km/hr"],
    answer: "7.5 km/hr",
    solution: "Speed upstream = 30/6 = 5 km/hr, Speed downstream = 30/3 = 10 km/hr\nSpeed in still water = (5 + 10)/2 = 7.5 km/hr"
  },
  {
    number: 4,
    question: "In one hour, a boat goes 11 km along the stream and 5 km against the stream. Find the speed of the boat in still water.",
    options: ["6 km/hr", "7 km/hr", "8 km/hr", "9 km/hr"],
    answer: "8 km/hr",
    solution: "Speed downstream = 11 km/hr, Speed upstream = 5 km/hr\nSpeed of boat = (11 + 5)/2 = 8 km/hr"
  },
  {
    number: 5,
    question: "A boat takes 2 hours to travel 8 km upstream and 1 hour to travel the same distance downstream. What is the speed of the stream?",
    options: ["2 km/hr", "3 km/hr", "4 km/hr", "1 km/hr"],
    answer: "2 km/hr",
    solution: "Upstream speed = 8/2 = 4 km/hr, Downstream speed = 8/1 = 8 km/hr\nSpeed of stream = (8 − 4)/2 = 2 km/hr"
  },
  {
    number: 6,
    question: "If a man rows at 5 km/hr in still water and the speed of the current is 2 km/hr, how long will he take to row 12 km downstream?",
    options: ["1 hour", "1.5 hours", "2 hours", "2.5 hours"],
    answer: "1.2 hours",
    solution: "Speed downstream = 5 + 2 = 7 km/hr\nTime = 12 / 7 ≈ 1.714 ≈ 1.2 hours"
  },
  {
    number: 7,
    question: "The speed of a boat in still water is 15 km/hr. It can go 30 km downstream and return in 4.5 hours. What is the speed of the stream?",
    options: ["3 km/hr", "4 km/hr", "5 km/hr", "6 km/hr"],
    answer: "5 km/hr",
    solution: "Let stream speed = x\nThen downstream speed = 15 + x, upstream = 15 − x\nTime = 30/(15 + x) + 30/(15 − x) = 4.5\nSolve to get x = 5 km/hr"
  },
  {
    number: 8,
    question: "A boat moves with a speed of 10 km/hr in still water. It goes 12 km downstream and comes back in 3 hours. What is the speed of the stream?",
    options: ["2 km/hr", "3 km/hr", "4 km/hr", "5 km/hr"],
    answer: "2 km/hr",
    solution: "Let speed of stream = x\nTime = 12/(10 + x) + 12/(10 − x) = 3\nSolve the equation to get x = 2"
  },
  {
    number: 9,
    question: "A boat covers 32 km upstream and 36 km downstream in 7 hours. It covers 40 km upstream and 48 km downstream in 8.5 hours. What is the speed of the boat in still water?",
    options: ["10 km/hr", "11 km/hr", "12 km/hr", "13 km/hr"],
    answer: "12 km/hr",
    solution: "Let boat speed = b, stream speed = s\n(32/(b−s) + 36/(b+s) = 7), (40/(b−s) + 48/(b+s) = 8.5)\nSolving these, b = 12 km/hr"
  },
  {
    number: 10,
    question: "A boat can travel 10 km downstream in 20 minutes. If the speed of the stream is 3 km/hr, what is the speed of the boat in still water?",
    options: ["27 km/hr", "28 km/hr", "29 km/hr", "30 km/hr"],
    answer: "27 km/hr",
    solution: "Speed downstream = 10 / (20/60) = 30 km/hr\nBoat speed = 30 − 3 = 27 km/hr"
  },
  {
    number: 11,
    question: "A man rows to a place 48 km distant and back in 14 hours. He finds that he can row 4 km with the stream in the same time as 3 km against the stream. What is the speed of the stream?",
    options: ["1 km/hr", "2 km/hr", "3 km/hr", "4 km/hr"],
    answer: "2 km/hr",
    solution: "Let speed upstream = x, downstream = y. Then y/x = 4/3 ⇒ y = 4x/3\nDistance equation: 48/x + 48/y = 14 ⇒ 48/x + 48/(4x/3) = 14 ⇒ Solve for x = 4 ⇒ Stream speed = (y−x)/2 = (16/3 − 4)/2 = 2"
  },
  {
    number: 12,
    question: "A man can row 12 km/hr in still water. If in a river running at 4 km/hr it takes him 45 minutes to row to a place and back, how far is the place?",
    options: ["4 km", "5 km", "6 km", "7 km"],
    answer: "5 km",
    solution: "Speed downstream = 16, upstream = 8\nTime = x/16 + x/8 = 45/60 ⇒ x = 5 km"
  },
  {
    number: 13,
    question: "If the speed of a boat in still water is 9 km/hr and speed of stream is 3 km/hr, how long will it take to travel 54 km downstream?",
    options: ["4 hours", "5 hours", "6 hours", "7 hours"],
    answer: "4 hours",
    solution: "Downstream speed = 9 + 3 = 12 km/hr\nTime = 54 / 12 = 4.5 hours"
  },
  {
    number: 14,
    question: "A man rows downstream 20 km in 2 hours and upstream 4 km in 1 hour. What is the speed of the current?",
    options: ["1 km/hr", "2 km/hr", "3 km/hr", "4 km/hr"],
    answer: "2 km/hr",
    solution: "Downstream speed = 10 km/hr, Upstream speed = 4 km/hr\nStream speed = (10 − 4)/2 = 3 km/hr"
  },
  {
    number: 15,
    question: "A man can row at 8 km/hr in still water. If the speed of the current is 2 km/hr, what is the time taken to row 24 km upstream?",
    options: ["3 hours", "4 hours", "5 hours", "6 hours"],
    answer: "4 hours",
    solution: "Upstream speed = 8 − 2 = 6 km/hr\nTime = 24 / 6 = 4 hours"
  }
];
