

const prompt = require('prompt-sync')();

function getComputerChoice() {
    const choices = ["rock", "scissors", "paper"];
    const arrayIndex = Math.floor(Math.random() * choices.length);
    return choices[arrayIndex];
}

function getHumanChoice() {
    let userInput = prompt("Enter one of your choices (rock, paper, and scissors): ").toLowerCase();
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let winner;

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        winner = 'none';
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("You won this round!");
        winner = 'human';
    } else {
        console.log("You lost this round!");
        winner = 'computer';
    }

    if (winner === "computer") {
        computerScore++;
    } else if (winner === "human") {
        humanScore++;
    }

    return winner;
}

function playGame() {
    console.log("Welcome to Rock-Paper-Scissors Console Terminal Game");
    console.log("Your score is: " + humanScore);
    console.log("The opponent's score is " + computerScore);

    for (let i = 0; i < 5; i++) {
        const humanPlayerSelection = getHumanChoice();
        const computerPlayerSelection = getComputerChoice();

        console.log("Round " + (i + 1));
        const winner = playRound(humanPlayerSelection, computerPlayerSelection);

        console.log("End of Round " + (i + 1));
        console.log("Your score is: " + humanScore);
        console.log("The opponent's score is " + computerScore);
    }

    console.log("End of the game!");
    console.log("Your final score is: " + humanScore);
    console.log("The opponent's final score is: " + computerScore);
}

playGame();





/*
const choices = ["rock", "scissors", "paper"];

let humanScore = 0;
let computerScore = 0;

const roundNum = document.getElementById('roundNum');
const userChoice = document.getElementById('userChoice');
const computerDisplay = document.getElementById('computerChoice');
const user_score = document.getElementById('humanScore');
const computer_score = document.getElementById('computerScore');

function getHumanChoice(userInput) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let winner;

    if (userInput === computerChoice) {
        winner = 'none';
    } else if (
        (userInput === 'rock' && computerChoice === 'scissors') ||
        (userInput === 'paper' && computerChoice === 'rock') ||
        (userInput === 'scissors' && computerChoice === 'paper')
    ) {
        winner = 'human';
    } else {
        winner = 'computer';
    }

    if (winner === "computer") {
        computerScore++;
    } else if (winner === "human") {
        humanScore++;
    }

    for (let i = 0; i < 5; i++) {
        roundNum.textContent = `Round: ${round}`;
        

        console.log("End of Round " + (i + 1));
        console.log("Your score is: " + humanScore);
        console.log("The opponent's score is " + computerScore);
    }

    console.log("End of the game!");
    console.log("Your final score is: " + humanScore);
    console.log("The opponent's final score is: " + computerScore)


userChoice.textContent = `You choose: ${userInput}`;
computerDisplay.textContent = `Computer choose: ${computerChoice}`;
user_score.textContent = `You: ${humanScore}`;
computer_score.textContent = `Computer: ${computerScore}`;

}


























/*
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let winner;

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        winner = 'none';
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log("You won this round!");
        winner = 'human';
    } else {
        console.log("You lost this round!");
        winner = 'computer';
    }

    if (winner === "computer") {
        computerScore++;
    } else if (winner === "human") {
        humanScore++;
    }

    return winner;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanPlayerSelection = getHumanChoice();
        const computerPlayerSelection = getComputerChoice();

        const winner = playRound(humanPlayerSelection, computerPlayerSelection);

        console.log("End of Round " + (i + 1));
        console.log("Your score is: " + humanScore);
        console.log("The opponent's score is " + computerScore);
    }

    console.log("End of the game!");
    console.log("Your final score is: " + humanScore);
    console.log("The opponent's final score is: " + computerScore);
}

playGame();

*/
