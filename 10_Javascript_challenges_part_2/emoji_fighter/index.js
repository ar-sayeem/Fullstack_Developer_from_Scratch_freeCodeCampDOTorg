const fighters = [
  "🥊",
  "👊",
  "🤜",
  "🤛",
  "😡",
  "🤬",
  "😤",
  "⚔️",
  "🗡️",
  "🛡️",
  "💥",
  "🔥",
  "⚡",
];

let stageEl = document.getElementById("stage");
stageEl.textContent = "❓ vs ❓";
let fightButton = document.getElementById("fight-btn");

function getRandomFighter() {
  let randomFighterIndex = Math.floor(Math.random() * fighters.length);
  return fighters[randomFighterIndex];
}

fightButton.addEventListener("click", function () {
  let f1 = getRandomFighter();
  let f2 = getRandomFighter();

  stageEl.textContent = f1 + "vs" + f2;
});
