/*
Simple Rock, Paper, Scissors game that interacts with the DOM
*/

const winConditions = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}

const emojis = {
  rock: '🪨',
  paper: '📄',
  scissors: '✂️'
}

let playerScore = 0
let computerScore = 0

const choiceButtons = document.querySelectorAll('button')
choiceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.id
    game(playerSelection)
  })
})

function getComputerChoice () {
  const choices = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * choices.length)
  const computerSelection = choices[randomIndex]
  console.log(`Computer chose: ${computerSelection}`)
  return computerSelection
}

function displayChoice (playerSelection, computerSelection) {
  const playerSelectionDiv = document.querySelector('#player-choice')
  playerSelectionDiv.textContent = emojis[playerSelection]

  const computerSelectionDiv = document.querySelector('#computer-choice')
  computerSelectionDiv.textContent = emojis[computerSelection]
}

function playRound (playerSelection, computerSelection) {
  displayChoice(playerSelection, computerSelection)

  return winConditions[playerSelection] === computerSelection
    ? 'win'
    : playerSelection === computerSelection
      ? 'tie'
      : 'lose'
}

function game (playerSelection) {
  const computerSelection = getComputerChoice()
  const result = playRound(playerSelection, computerSelection)

  displayResult(result, playerSelection, computerSelection)
}

function displayResult (result, playerSelection, computerSelection) {
  const resultDiv = document.querySelector('#result')
  const messages = {
    win: `You win! ${playerSelection} beats ${computerSelection}`,
    tie: 'It\'s a tie!',
    lose: `You lose! ${computerSelection} beats ${playerSelection}`
  }
  resultDiv.textContent = messages[result]

  if (result !== 'tie') {
    result === 'win' ? playerScore++ : computerScore++
  }

  displayScore()
}

function displayScore () {
  const playerScoreDiv = document.querySelector('#player-score')
  const computerScoreDiv = document.querySelector('#computer-score')

  playerScoreDiv.textContent = playerScore
  computerScoreDiv.textContent = computerScore
}
