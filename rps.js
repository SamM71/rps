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

const compChoose = () => {
    const num = Math.floor(Math.random() * 3);
    console.log(num);

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