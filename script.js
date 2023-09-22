// DOM
const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEL = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEL = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

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


// Game Logic
const choices = {
    rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
    paper: { name: 'Paper', defeats: ['rock', 'spock'] },
    scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
    lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
    spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
  };

// Global Variables
let playerScoreNumber = 0
let computerScoreNumber = 0;
let computerChoice = '';

// Reset all 'selected' icons
function resetSelected() {
 allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
 });
}

// Reset Score & playerChoice & computerChoice
function resetAll() {
    playerScoreNumber = 0;
    computerScoreNumber = 0;
    playerScoreEl.textContent = playerScoreNumber;
    computerScoreEl.textContent = computerScoreNumber;
    playerChoiceEL.textContent = '';
    computerChoiceEL.textContent = '';
    resultText.textContent = '';
    resetSelected(); //reset icons
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

// Check result, incrase scores, update resultText
function updateScore(playerChoice) {
    //Check functionality of params: console.log(playerChoice, computerChoice)
    //Logic of game
    if (playerChoice === computerChoice) {
        resultText.textContent = 'It\'s a tie.' 
    } else {
        const choice = choices[playerChoice]; //grab the array's object of the corresponding object
        console.log(choice.defeats.indexOf(computerChoice));
        if (choice.defeats.indexOf(computerChoice) > -1) {
            resultText.textContent = 'You Won!';
            playerScoreNumber++;
            playerScoreEl.textContent = playerScoreNumber; //Update the dom
        } else {
            resultText.textContent = 'You Lost!'
            computerScoreNumber++;
            computerScoreEl.textContent = computerScoreNumber;
        }
    }


}

// Call function to process the turn
function checkResult(playerChoice) {
    resetSelected();
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerChoice)
    
}

// Passing player selection value and styling icons
function select(playerChoice) {
    checkResult(playerChoice) //check the result
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
// See in the html onclick="function('title')" property!!!

// On Load, set initial values
resetAll() 