const colours = require("ansi-colors");
const prompt = require("prompt-sync")({sigint: true});
const { determineWinner, compChoose } = require("./rps.js");

let playAgain = true;

const playGame = () => {
    const userChoice = prompt("Please choose rock, paper, or scissors: ").toLowerCase();

    const compChoice = compChoose();
    
    console.log(`User chose ${userChoice}!`);
    console.log(`Computer chose ${compChoice}!`)

    return determineWinner(userChoice, compChoice);
}

const displayWinner = (result) => {
    if (result === "draw") {
        console.log(colours.yellow("The game is a draw!"));
    } else if (result === "user") {
        console.log(colours.green("User is the winner!"));
    } else {
        console.log(colours.red("Computer is the winner!"));
    }
}

while (playAgain) {

    const result = playGame();
    
    displayWinner(result);

    const answer = prompt("Enter 'y' to play again: ");
    if (answer !== "y") {
        playAgain = false;
    }
}