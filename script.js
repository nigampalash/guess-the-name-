let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.textContent = '';
  guessInput.value = '';
  guessInput.disabled = false;
  guessBtn.disabled = false;
  restartBtn.style.display = 'none';
}

guessBtn.addEventListener('click', function() {
  const guess = Number(guessInput.value);
  attempts++;
  if (!guess || guess < 1 || guess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }
  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} tries.`;
    guessInput.disabled = true;
    guessBtn.disabled = true;
    restartBtn.style.display = 'inline-block';
  } else if (guess < secretNumber) {
    message.textContent = 'Too low! Try again.';
  } else if (guess > secretNumber) {
    message.textContent = 'Too high! Try again.';
  }
});

restartBtn.addEventListener('click', resetGame);

// Optional: Pressing Enter triggers the guess
guessInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    guessBtn.click();
  }
});