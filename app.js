let userChosen;
let computerChosen;
let result;
const displayResult = document.getElementById("result");
const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll(".choices");
const restart = document.getElementById("restart");
const randomNumber = Math.ceil(Math.random() * 3);

//Get user choice
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", function response(element) {
    userChosen = element.target.id;
    generateComputerChoice();
    results();
    userChoice.src = chosenPicture(userChosen);
    userChoice.alt = chosenPicture(userChosen);
    computerChoice.src = chosenPicture(computerChosen);
    computerChoice.alt = chosenPicture(computerChosen);
    displayResult.innerText = result;
    if (userChosen === "rock") {
      document.getElementById("paper").style.visibility = "hidden";
      document.getElementById("scissors").style.visibility = "hidden";
    } else if (userChosen === "paper") {
      document.getElementById("rock").style.visibility = "hidden";
      document.getElementById("scissors").style.visibility = "hidden";
    } else if (userChosen === "scissors") {
      document.getElementById("rock").style.visibility = "hidden";
      document.getElementById("paper").style.visibility = "hidden";
    }
  })
);

//Get restart button to refresh the page
restart.addEventListener("click", () => {
  location.reload(false);
});

//Assign picture of chosen choice
function chosenPicture(choice) {
  return `images/${choice}.png`;
}

//Generate random computer choice
function generateComputerChoice() {
  if (randomNumber === 1) {
    return (computerChosen = "rock");
  } else if (randomNumber === 2) {
    return (computerChosen = "paper");
  } else if (randomNumber === 3) {
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
