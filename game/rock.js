const buttons = document.querySelectorAll('button');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result');
const playAgainButton = document.getElementById('play-again');
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
 button.addEventListener('click', () => {
  const playerSelection = button.id;
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  updateScore(result);
  showResult(result, playerSelection, computerSelection);
 });
});

playAgainButton.addEventListener('click', resetGame);

function computerPlay() {
 const options = ['rock', 'paper', 'scissors'];
 const randomIndex = Math.floor(Math.random() * options.length);
 return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
 if (playerSelection === computerSelection) {
  return 'tie';

 } else if (
  (playerSelection === 'rock' && computerSelection === 'scissors') ||
  (playerSelection === 'paper' && computerSelection === 'rock') ||
  (playerSelection === 'scissors' && computerSelection === 'paper')
 ) {
  return 'win';

 } else {
  return 'lose';
 }
}

function updateScore(result) {
 if (result === 'win') {
  playerScore++;
  playerScoreDisplay.textContent = playerScore;
 } else if (result === 'lose') {
  computerScore++;
  
  computerScoreDisplay.textContent = computerScore;
 }
}

function showResult(result, playerSelection, computerSelection) {
 resultDisplay.textContent = result.toUpperCase();
 const playerSelectionDisplay = document.createElement('span');
 playerSelectionDisplay.classList.add('player-selection');
 playerSelectionDisplay.textContent = `You chose ${playerSelection}. `;
 const computerSelectionDisplay = document.createElement('span');
 computerSelectionDisplay.classList.add('computer-selection');
 computerSelectionDisplay.textContent = `Computer chose ${computerSelection}.`;
 resultDisplay.appendChild(playerSelectionDisplay);
 resultDisplay.appendChild(computerSelectionDisplay);
 showPlayAgainButton();
}

function showPlayAgainButton() {
 const resultContainer = document.querySelector('.result-container');
 resultContainer.style.display = 'block';
}

function resetGame() {
 playerScore = 0;
 playerScoreDisplay.textContent = '0';
 computerScore = 0;
 computerScoreDisplay.textContent = '0';
 resultDisplay.textContent = '';
 const resultContainer = document.querySelector('.result-container');
 resultContainer.style.display = 'none';
}