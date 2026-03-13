let cards = [];
let sum = 0;
let message = "";

let hasBlackJack = false;
let isAlive = false;

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
  name: "ARS",
  chips: 149,
};

// Event Listener way
document.getElementById("new-card-btn").addEventListener("click", newCard);

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1; // return random between 1 to 13
  if (randomNum === 1) {
    // ACE => 1 / 11
    return sum + 11 <= 21 ? 11 : 1; // checks whether 11 is safe before committing to it
  } else if (randomNum > 10) {
    // if K(13) / Q(12) / J(11) => 10
    return 10;
  } else {
    // 2 - 10
    return randomNum;
  }
}

function startGame() {
if (isAlive && !hasBlackJack) {
    return;
}
  hasBlackJack = false; // reset
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

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
  if (!isAlive || hasBlackJack) {
    if (!isAlive) messageEl.textContent = "Please start a game first!";
    return;
  }

  let card = getRandomCard();
  sum += card;
  cards.push(card);

  renderGame();
}

// document.getElementById("new-card-btn").disabled = true;
