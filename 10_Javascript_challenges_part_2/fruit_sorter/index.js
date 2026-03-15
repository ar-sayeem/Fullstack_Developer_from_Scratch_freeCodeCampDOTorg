let fruits = ["🍎", "🍊", "🍎", "🍊", "🍎", "🍊", "🍇", "🍓", "🍌", "🍉", "🍑", "🍍", "🥭", "🍋", "🍒"];

let appleShelf  = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");
let otherShelf  = document.getElementById("other-shelf");
let fruitTray   = document.getElementById("fruit-tray");

// Populate the tray with all fruits on load
fruits.forEach(fruit => {
  let span = document.createElement("span");
  span.textContent = fruit;
  fruitTray.appendChild(span);
});

let sortBtn = document.getElementById("sort-btn");

function sortFruit() {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "🍎") {
      appleShelf.textContent += fruits[i];
    } else if (fruits[i] === "🍊") {
      orangeShelf.textContent += fruits[i];
    } else {
      otherShelf.textContent += fruits[i];
    }
  }

  // Clear the tray
  fruitTray.innerHTML = "Nothing Here!";

  // Disable Sort button after sorting
  sortBtn.disabled = true;
  sortBtn.style.cursor = "not-allowed";
  sortBtn.style.opacity = "0.5";
}