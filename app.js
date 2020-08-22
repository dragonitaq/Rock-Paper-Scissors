/*
Things to do:
- Generate question mark picture before result picture show up.
- To have a restart button
*/

let userChosen;
let computerChosen;
let result;
const displayResult = document.getElementById("result");
const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll(".choices");

const randomNumber = Math.round(Math.random() * 3);

//Get user choice
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (element) => {
    userChosen = element.target.id;
    generateComputerChoice();
    results();
    userChoice.src = chosenPictures(userChosen);
    computerChoice.src = chosenPictures(computerChosen);
    displayResult.innerText = result;
  })
);

function chosenPictures(choice) {
  return `images/${choice}.png`;
}

function generateComputerChoice() {
  if (randomNumber === 1) {
    return (computerChosen = "rock");
  } else if (randomNumber === 2) {
    return (computerChosen = "paper");
  } else if (computerChosen === "rock") {
    return (computerChosen = "scissors");
  }
}

//Compare result
function results() {
  if (userChosen === computerChosen) {
    return (result = "Tie!");
  } else if (userChosen === "rock" && computerChosen === "paper") {
    return (result = "You lose!");
  } else if (userChosen === "rock" && computerChosen === "scissors") {
    return (result = "You win!");
  } else if (userChosen === "paper" && computerChosen === "rock") {
    return (result = "You win!");
  } else if (userChosen === "paper" && computerChosen === "scissors") {
    return (result = "You lose!");
  } else if (userChosen === "scissors" && computerChosen === "rock") {
    return (result = "You lose!");
  } else if (userChosen === "scissors" && computerChosen === "paper") {
    return (result = "You win!");
  }
}
