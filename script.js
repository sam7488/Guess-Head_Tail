const Score = JSON.parse(localStorage.getItem('score')) || {wins: 0, losses: 0};
updateScore();

function updateScore() {
  document.querySelector('.js-score').innerHTML = `Wins: ${Score.wins}, Losses: ${Score.losses}`
}

function reset() {
  Score.wins = Score.losses = 0;
  document.querySelector('.js-move').innerHTML = 'Score Reset.';
  updateScore();
  localStorage.removeItem('score');
}

function playGame(playerMove) {
  const random = Math.random()
  let computerMove = '';

  if(random < 0.5) {
    ComputerMove = 'Head';
  }
  else {
    ComputerMove = 'Tail';
  }

  let result = '';
  if(playerMove === ComputerMove) 
  {
    result = 'You win.';
    Score.wins++;
  } else {
    result = 'You lose.';
    Score.losses++;
  }

  updateScore();
  document.querySelector('.js-move').innerHTML = `It's a ${ComputerMove}.`;
  document.querySelector('.js-result').innerHTML = result

  localStorage.setItem('score', JSON.stringify(Score));
}
