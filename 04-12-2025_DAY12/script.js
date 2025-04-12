const currentScore = document.querySelector('.currentScore');
const highScoreRec = document.querySelector('.highScore');
const history = document.getElementById('history');
const input = document.querySelector('input');
const btn = document.getElementById('check');
const msg = document.querySelector('.response');

// ? Declaring variables here using 'let' to store the random number after every reset
let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
let score = 10;
let highScore = 0;
let guessHistory = [];

currentScore.textContent = `Current Score: ${score}`;
highScoreRec.textContent = `High Score: ${highScore}`;

btn.addEventListener('click', () => {
  console.log(input.value);

  const guess = Number(input.value);

  // ! This is to check if the value is empty, or if it's truly not a number
  if (input.value === '' || isNaN(guess)) {
    return (msg.textContent = 'Please type your guess in the text box.');
  }

  // ! This is to check if inputted value is not a Number
  if (!guess) {
    return (msg.textContent = 'Invalid type of input. Needs to be a number.');
  }

  // * If the inputted value is actually a number...
  if (typeof guess === 'number') {
    // & if the value guesses the given number correctly
    if (guess === randomNumber) {
      msg.textContent = 'Hooray! You guessed the number correctly!';
      highScore = score;
      return (highScoreRec.textContent = `High Score: ${highScore}`);
      // ^ If the inputted value is greater than the given number
    } else if (guess > randomNumber) {
      msg.textContent = 'Your guess is too high! Try again.';
      score--;
      return (currentScore.textContent = `Current Score: ${score}`);
      // ^ If the inputted value is lower than the given number
    } else if (guess < randomNumber) {
      msg.textContent = 'Your guess is too low. Try again!';
      score--;
      return (currentScore.textContent = `Current Score: ${score}`);
    }
  }
});
