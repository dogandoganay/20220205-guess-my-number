'use strict'; //let me learn eliminating the silent errors, prevent js mistakes

// SELECTING ALL THE ELEMENTS AND ASSIGNING THEM TO VARIABLES
let htmlBody = document.querySelector('body');
let between = document.querySelector('.between');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let scoreBoard = document.querySelector('.number');
let btnPlayAgain = document.querySelector('.again');
let btnCheck = document.querySelector('.check');
let txtGuess = document.querySelector('.guess');
let highScore = document.querySelector('.highscore');

let highScoreValue = Number(highScore.textContent);
let guessRange = {
  min: 1,
  max: 20,
};
score.textContent = guessRange.max;

btnPlayAgain.style.visibility = 'hidden';
between.textContent = `(Between ${guessRange.min} and ${guessRange.max})`;

let secretNumber = Math.trunc(Math.random() * guessRange.max) + 1; //to prevent having 0

// JUST CHECKING IF EVERYTHING IS GOING IN THE WAY I INTENDED
console.log(`Secret Number: ${secretNumber}`);
console.log(`Guess Range: ${guessRange.min} - ${guessRange.max}`);

/* CHECKING IF THE LOGIC WORKS */
// let counter = 1;
// while (secretNumber < 21) {
//   if (secretNumber !== 20) {
//     console.log(counter, secretNumber);
//     secretNumber = Math.trunc(Math.random() * 20 + 1);
//     counter++;
//   } else {
//     console.log(`GOTCHA at ${counter}th try! | ${secretNumber}`);
//     break;
//   }
// }

/* THIS CHECKS BETTER */
// for (let i = 1; i <= guessRange.max; i++) {
//   if (secretNumber === i) {
//     console.log(`GOTHCA at ${i}th try! | ${secretNumber} `);
//   }
// }

let decreaseScore = function () {
  let tempScore = Number(score.textContent);
  tempScore -= 1;

  if (tempScore > 0) {
    score.textContent = tempScore;
  } else {
    score.textContent = tempScore;
    message.textContent = `You LOST the game! 😞`;
    showGameLost();
  }
};

let showGameLost = function () {
  btnCheck.style.visibility = 'hidden';
  btnPlayAgain.style.visibility = 'visible';
  scoreBoard.style.width = '30rem';
  htmlBody.style.backgroundColor = '#B23E3E';
};

let showGameWon = function () {
  btnCheck.style.visibility = 'hidden';
  btnPlayAgain.style.visibility = 'visible';
  scoreBoard.style.width = '30rem';
  htmlBody.style.backgroundColor = '#3EB595';
};

btnCheck.addEventListener('click', function () {
  const guess = Number(txtGuess.value);
  if (guess < guessRange.min || guess > guessRange.max || guess === 0) {
    // all out of numbers
    message.textContent = `Please enter a value between ${guessRange.min} and ${guessRange.max} ⚠️`;
  } else if (!guess) {
    // no number, nothing provided
    message.textContent = 'No number given! ⛔';
  } else if (guess < secretNumber) {
    // now we are able to check if it lower..
    message.textContent = `Your guess is low! 👇`;
    decreaseScore();
  } else if (guess > secretNumber) {
    // ..or it is higher
    message.textContent = `Your guess is high 👆`;
    decreaseScore();
  } else if (guess === secretNumber) {
    // hooray, finally!
    message.textContent = `🏆🏆🏆 You have WON!`;
    scoreBoard.textContent = guess; //let them see the number, obviously!
    if (Number(score.textContent) > highScoreValue) {
      //is this lad or gal really good? if so, update the high score. we have a new champion
      highScoreValue = Number(score.textContent);
      highScore.textContent = highScoreValue;
    }
    showGameWon();
  } else {
    // just checking if anything is leaking. I am learning, I might miss some of the logic, but will get it here
    console.log('this is the ELSE block');
  }
});

btnPlayAgain.addEventListener('click', function () {
  this.style.visibility = 'hidden';
  btnCheck.style.visibility = 'visible';
  htmlBody.style.backgroundColor = '#222222';
  scoreBoard.textContent = '?';
  scoreBoard.style.width = '15rem';
  message.textContent = 'Start guessing...';
  score.textContent = guessRange.max;
  txtGuess.value = '';
  secretNumber = Math.trunc(Math.random() * guessRange.max) + guessRange.min;
});
