const colours = require("ansi-colors");
const prompt = require("prompt-sync")({sigint: true});
const { determineWinner, compChoose } = require("./rps.js");

const userChoice = prompt("Please choose rock, paper, or scissors: ").toLowerCase();

const compChoice = compChoose();

console.log(`User chose ${userChoice}!`);
console.log(`Computer chose ${compChoice}!`)

const result = determineWinner(userChoice, compChoice);

if (result === "draw") {
    console.log("The game is a draw!");
} else {
    console.log(`${result} is the winner!`);
}