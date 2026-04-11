// const mark = 65;

// const message = mark < 30 ? "Try harder" : "Good work";
// console.log(message)

// const message =
//   mark < 30 ? "Try harder!" : mark < 60 ? "Good work!" : "Excellent!";
// console.log(message);

const playerGuess = 5;
const correctAns = 6;

const msg =
  playerGuess === correctAns
    ? "Correct!"
    : playerGuess < correctAns
      ? "Less"
      : "More";
console.log(msg);
