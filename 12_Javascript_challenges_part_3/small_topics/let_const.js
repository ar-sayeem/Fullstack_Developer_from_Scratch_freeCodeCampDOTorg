const player = "Adnan";
const opponent = "Nick";
const game = "Amaizing Fighter";

let points = 0;
let hasWon = true;

points += 100;
hasWon = false;

if (hasWon) {
  console.log(`${player} got ${points} and won the ${game} game!`);
} else {
  console.log(`The winner is ${opponent}! ${player} lost the ${game} game.`);
}
