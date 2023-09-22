const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEL = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEL = document.getElementById('computerChoice');
const resultTect = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
    rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
    paper: { name: 'Paper', defeats: ['rock', 'spock'] },
    scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
    lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
    spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
  };

let computerChoice = '';

// Reset all 'selected' icons
function resetSelected() {
 allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
 });
}

// Random computer choice
function computerRandomChoice() {
    const computerChoiceNumber = Math.random();
    //console.log(computerChoiceNumber)
    if (computerChoiceNumber < 0.2) {
        computerChoice = 'rock';
    } else if (computerChoiceNumber <= 0.4) {
        computerChoice = 'paper'
    } else if (computerChoiceNumber <= 0.6) {
        computerChoice = 'scissors'
    } else if (computerChoiceNumber <= 0.8) {
        computerChoice = 'lizard'
    } else {
        computerChoice = 'spock'
    }
}

// Call function to process the turn
function checkResult() {
    resetSelected();
    computerRandomChoice();
    displayComputerChoice();
    
}

// Passing player selection value and styling icons
function select(playerChoice) {
    checkResult() //check the result
    // Add 'selected' styling & playerChoice
    switch(playerChoice) {
        case 'rock':
            playerRock.classList.add('selected');
            playerChoiceEL.textContent = ' --- Rock';
            break;
        case 'paper':
            playerPaper.classList.add('selected');
            playerChoiceEL.textContent = ' --- Paper';
            break;
        case 'scissors':
            playerScissors.classList.add('selected');
            playerChoiceEL.textContent = ' --- Scissors';
            break;
        case 'lizard':
            playerLizard.classList.add('selected');
            playerChoiceEL.textContent = ' --- Lizard';
            break;
        case 'spock':
            playerSpock.classList.add('selected');
            playerChoiceEL.textContent = ' --- Spock';
            break;
        default:
            break;
    } 
}

// Passing computer selection and styling icons
function displayComputerChoice() {
    switch(computerChoice) {
        case 'rock':
            computerRock.classList.add('selected');
            computerChoiceEL.textContent = ' --- Rock';
            break;
        case 'paper':
            computerPaper.classList.add('selected');
            computerChoiceEL.textContent = ' --- Paper';
            break;
        case 'scissors':
            computerScissors.classList.add('selected');
            computerChoiceEL.textContent = ' --- Scissors';
            break;
        case 'lizard':
            computerLizard.classList.add('selected');
            computerChoiceEL.textContent = ' --- Lizard';
            break;
        case 'spock':
            computerSpock.classList.add('selected');
            computerChoiceEL.textContent = ' --- Spock';
            break;
        default:
            break;
    } 
}

// Event Listeners
// See in the html onclick property!!!