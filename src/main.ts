import chalk from "chalk";
import chalkAnimation from "chalk-animation";

// Players Score: x/10
let playerScore = 0;

// 1. fetch data from API
async function fetchAPIData() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple"
  );
  const data = await response.json();
  return data.results;
}

interface dataStructure {
  incorrect_answers: string[];
  correct_answer: string;
}

// 2. Create the console.table
function createTable(data: dataStructure) {
  console.table({
    // // Player Score: 10/10
    // "Player Score": playerScore,
    // // Question
    // Question: data[index].question,
    // 3 possible answers
    "Option 1": data.incorrect_answers[0],
    "Option 2": data.incorrect_answers[1],
    "Option 3": data.correct_answer,
  });
}

async function fetchAndDisplayData() {
  const data = await fetchAPIData();
  // console.log(data);
  createTable(data);
  const playerAnswer = prompt("What is your answer?");
  console.log(chalk.bgCyan(playerAnswer));
  // check if the answer is correct
  if (playerAnswer === "3") {
    console.log("Correct Answer");
  } else {
    console.log("Wrong Answer");
  }
}
// fetchAndDisplayData();

// create the game logic
const dataResult1 = {
  question: "In Dota 2, Wraith King was previously known as...",
  incorrect_answers: ["Reaper King", "Skull King"],
  correct_answer: "Skeleton King",
};

const dataResult2 = {
  question: "What is Mr. Newell favorite class in Team Fortress 2?",
  incorrect_answers: ["Heavy", "Medic"],
  correct_answer: "Spy",
};

const dataResult3 = {
  question: "What was the name of the cancelled sequel of Team Fortress?",
  incorrect_answers: ["Desert Mercenaries", "Operation Gear Grinder"],
  correct_answer: "Brotherhood of Arms",
};

const array = [dataResult1, dataResult2, dataResult3];

async function runGame() {
  //makes API call
  // const data = await fetchAPIData();
  const data = array;
  alert("Welcome to the most amazing quiz you'll ever do!");
  //start a loop to display questions and answers one by one ----- for (let i = 0; i<data.length ; i++) {}
  for (let i = 0; i < data.length; i++) {
    console.clear();
    console.log(
      chalk.bgMagenta(
        "         CURRENT SCORE: ",
        playerScore,
        `/ ${i}                 `
      )
    );
    console.log(
      chalk.bgBlue.redBright(
        `             QUESTION  ${i + 1}:                            `
      )
    );
    console.log(chalk.bgRedBright.blue(data[i].question));
    // Passes api data into createTable function
    // this displays current questions adn answers
    createTable(data[i]);
    // Run a prompt to get user input
    const userAnswer: string | null = prompt("Which answer is correct?");
    //user input compared to the correctAnswer variable
    if (userAnswer === "3") {
      //if correct => playerScore ++
      playerScore++;
    }
    // else continue loop
  }

  console.clear();
  console.log(
    chalk.bgRed.greenBright(
      "                  FINAL SCORE:   ",
      playerScore,
      `/${data.length}               `
    )
  );
  //once loop is over Alert with total score and a congratulations message.
  alert(
    `GAME OVER\nYour total score was ${playerScore} out of a possible ${data.length}!`
  );
}
addEventListener("DOMContentLoaded", runGame);

//STRETCH: play again option

// Stretch goal: randomize the answers
