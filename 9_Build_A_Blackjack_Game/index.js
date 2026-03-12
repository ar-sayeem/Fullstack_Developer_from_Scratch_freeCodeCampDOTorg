let firstCard = 10;
let secondCard = 1;
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard;
let hasBlackJack = false;
let message = "";
let isAlive = true;

let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Almost! Draw a new card?";
  } else if (sum === 21) {
    message = "Great! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "Over 21! Better luck next time!";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  let newCard = 3;
  sum += newCard;
  renderGame();
}
08:40:41