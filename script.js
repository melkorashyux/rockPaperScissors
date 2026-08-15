let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  let n = Math.random() * 3
  let i = Math.floor(n)
  if (i === 0) {
    return("Rock");
  } else if (i === 1) {
    return("Paper");
  } else if (i === 2) {
    return("Scissors")
  }
    }


function getHumanChoice () {
  let answer = prompt("Write Rock, Paper, or Scissors", "Write here").toLowerCase()
if (answer === "rock") {
  return ("Rock");
 } else if (answer === "paper") {
    return("Paper");
} else if (answer === "scissors") {
    return("Scissors")
  }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice()

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (humanSelection === "Rock" && computerSelection === "Scissors") {
    humanScore++
    console.log("You win! Your", humanSelection, "beats", computerSelection)
  } else if (humanSelection === "Paper" && computerSelection === "Rock") {
    humanScore++
    console.log("You win! Your", humanSelection, "beats", computerSelection)
  } else if (humanSelection === "Scissors" && computerSelection === "Paper") {
    humanScore++
    console.log("You win! Your", humanSelection, "beats", computerSelection)
  } else {
    computerScore++
  console.log("You lost :(", computerSelection, "beats", humanSelection)
  }
}
playRound(humanSelection, computerSelection)

console.log("Human score:", humanScore);
console.log("Computer score:", computerScore);