const determineWinner = (userChoice, compChoice) => {
    if (userChoice === "rock") {
        if (compChoice === "rock") {
            return "draw"
        } else if (compChoice === "paper") {
            return "computer"
        } else {
            return "user"
        }
    } else if (userChoice === "paper") {
        if (compChoice === "paper") {
            return "draw"
        } else if (compChoice === "scissors") {
            return "computer"
        } else {
            return "user"
        }
    } else {
        if (compChoice === "scissors") {
            return "draw"
        } else if (compChoice === "rock") {
            return "computer"
        } else {
            return "user"
        }
    }
}

module.exports = determineWinner;