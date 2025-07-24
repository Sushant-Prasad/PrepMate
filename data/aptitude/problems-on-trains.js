// File: data/aptitude/problems-on-trains.js

 export const questions= [
  {
    question: "A train 150 meters long is running at 45 km/hr. In what time will it pass a platform 150 meters long?",
    options: ["10 sec", "15 sec", "20 sec", "24 sec"],
    answer: 2,
    solution: "Total distance = 150 + 150 = 300 meters. Speed = 45 km/hr = 12.5 m/s. Time = 300 / 12.5 = 24 sec."
  },
  {
    question: "A train passes a man standing on a platform in 10 seconds and passes the platform in 30 seconds. The length of the platform is 400 meters. Find the length of the train.",
    options: ["100 m", "150 m", "200 m", "300 m"],
    answer: 2,
    solution: "Let length of train be x. Then, x/10 = (x + 400)/30 ⇒ 3x = x + 400 ⇒ 2x = 400 ⇒ x = 200 m."
  },
  {
    question: "A 300 meter long train crosses a pole in 15 seconds. Find its speed.",
    options: ["60 km/hr", "72 km/hr", "90 km/hr", "100 km/hr"],
    answer: 2,
    solution: "Speed = Distance / Time = 300 / 15 = 20 m/s = 20 × 18/5 = 72 km/hr."
  },
  {
    question: "Two trains of lengths 100 m and 200 m run on parallel tracks in the same direction at speeds of 30 km/hr and 45 km/hr. How long will the faster train take to pass the slower one?",
    options: ["36 sec", "48 sec", "72 sec", "60 sec"],
    answer: 1,
    solution: "Relative speed = 45 - 30 = 15 km/hr = 4.17 m/s. Distance = 100 + 200 = 300 m. Time = 300 / 4.17 ≈ 72 sec."
  },
  {
    question: "Two trains are moving in opposite directions at 60 km/hr and 90 km/hr. Their lengths are 1.1 km and 0.9 km. Find the time taken by the faster train to cross the slower one.",
    options: ["36 sec", "30 sec", "24 sec", "48 sec"],
    answer: 0,
    solution: "Relative speed = 60 + 90 = 150 km/hr = 41.67 m/s. Distance = 1.1 + 0.9 = 2 km = 2000 m. Time = 2000 / 41.67 ≈ 48 sec."
  },
  // Add 20 more questions here in same format...

  {
    question: "A train takes 18 seconds to pass a platform 162 m long. It takes 6 seconds to pass a man. What is the length of the train?",
    options: ["70 m", "90 m", "110 m", "120 m"],
    answer: 3,
    solution: "Let length of train be x. Speed = x/6. Total length = x + 162. Time = 18 sec. ⇒ (x + 162)/18 = x/6 ⇒ x = 120 m."
  },

  {
    question: "How long will a train 100 meters long take to cross a platform 200 meters long if it is running at 72 km/hr?",
    options: ["10 sec", "15 sec", "20 sec", "18 sec"],
    answer: 3,
    solution: "Total length = 300 m. Speed = 72 km/hr = 20 m/s. Time = 300 / 20 = 15 sec."
  },

  {
    question: "Two trains are running at 60 km/hr and 40 km/hr in opposite directions. They cross each other in 6 seconds. If the length of the first train is 120 m, what is the length of the second train?",
    options: ["80 m", "100 m", "120 m", "140 m"],
    answer: 1,
    solution: "Relative speed = 60 + 40 = 100 km/hr = 27.78 m/s. Total length = 27.78 × 6 ≈ 166.7 m. Second train = 166.7 - 120 ≈ 47 m."
  },

  {
    question: "A train 360 m long is running at a speed of 45 km/hr. In what time will it cross a man standing on the platform?",
    options: ["28 sec", "30 sec", "36 sec", "40 sec"],
    answer: 2,
    solution: "Speed = 45 km/hr = 12.5 m/s. Time = 360 / 12.5 = 28.8 sec ≈ 29 sec."
  },

  {
    question: "A train covers a distance of 200 m in 10 sec and another 300 m in 15 sec. What is the average speed of the train?",
    options: ["20 m/s", "22 m/s", "25 m/s", "30 m/s"],
    answer: 0,
    solution: "Total distance = 500 m. Total time = 25 sec. Average speed = 500 / 25 = 20 m/s."
  },
];
