const welcomeEl = document.getElementById("welcome-el");
const doMath = document.getElementById("do-math");
const arrEl = document.getElementById("arr-el");

//                     parameters - in the function
function greetUser(greeting, name, emoji) {
  welcomeEl.textContent = `${greeting}, ${name} ${emoji}!`;
}
//                arguments - outside of function
greetUser("Hello", "Adnan", "🙌");

function doTheMath(num1, num2) {
  let add = num1 + num2;
  doMath.textContent = `${num1} + ${num2} = ${add}`;
}

doTheMath(31, 22);


function getFirst(arr){
    arrEl.textContent = `First element of array is ${arr[0]}`
}
getFirst([10, 11, 13])