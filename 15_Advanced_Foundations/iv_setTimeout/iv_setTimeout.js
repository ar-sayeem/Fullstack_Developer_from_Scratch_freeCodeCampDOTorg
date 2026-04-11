// function displayTrafficLight(light){
//     console.log(light)
// }

// setTimeout(displayTrafficLight, 3000, '🟢')
// displayTrafficLight('🔴')

function logAnswer(answer, points) {
  document.getElementById("output").textContent =
    `The answer is ${answer} of course! If you get that right, give yourself ${points} points.`;
}

let questionTimer;

document.getElementById("ask").addEventListener("click", function () {
  document.getElementById("question").textContent =
    "What is the capital of Peru?";

  document.getElementById("output").textContent = "";

  questionTimer = setTimeout(logAnswer, 3000, "Lima", 10);
});

document.getElementById("stop").addEventListener("click", function () {
  clearTimeout(questionTimer);
  document.getElementById("output").textContent = "Cancelling...";
});
