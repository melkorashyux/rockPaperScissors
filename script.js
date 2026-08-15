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

console.log(getComputerChoice())

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
console.log(getHumanChoice());