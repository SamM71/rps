const determineWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        return "draw"
    } else if (userChoice === "rock") {
        if (compChoice === "paper") {
            return "computer"
        } else {
            return "user"
        }
    } else if (userChoice === "paper") {
        if (compChoice === "scissors") {
            return "computer"
        } else {
            return "user"
        }
    } else {
        if (compChoice === "rock") {
            return "computer"
        } else {
            return "user"
        }
    }
}

const compChoose = () => {
    const num = Math.floor(Math.random() * 3);

    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

module.exports = {
    determineWinner,
    compChoose
}