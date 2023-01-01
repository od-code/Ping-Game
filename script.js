'use strict';
// Select items from the DOM \
const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
// Selecting the players
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
// Store the buttons in a variable
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
// Assigning default values
scoreEl0.textContent = 0;
scoreEl1.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// When the player rolls the dice
rollDice.addEventListener('click', function () {
  // 1.User generates a  sice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2.Displays dice roll
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // Adding the current dice number to the current score
  if (dice !== 1) {
    // Add the dice value to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Switch player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    // Change the bg color of the active player
    playerEl0.classList.toggle('player--active');
    playerEl1.classList.toggle('player--active');
  }
});

// When the player holds the score
holdScore.addEventListener('click', function () {});
