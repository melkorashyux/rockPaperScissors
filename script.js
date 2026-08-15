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