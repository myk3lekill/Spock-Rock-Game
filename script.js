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

const allGameIcons = document.querySelectorAll('.far');

const choices = {
    rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
    paper: { name: 'Paper', defeats: ['rock', 'spock'] },
    scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
    lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
    spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
  };


// Reset all 'selected' icons
function resetSelected() {
 allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
 });
}

// Passing player selection value and styling icons
function select(playerChoice) {
    resetSelected();
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

// Event Listeners
// See in the html onclick property!!!