const characters = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z",

  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",

  "0","1","2","3","4","5","6","7","8","9",

  "!","@","#","$","%","^","&","*",
  "(",")","-","_","=","+",
  "[","]","{","}",
  ";",":","'","\"",
  ",",".","<",">",
  "/","?","\\","|",
  "`","~"
];


let generateButton = document.getElementById("generate-btn");
let passOne = document.getElementById("pass1");
let passTwo = document.getElementById("pass2");

function getRandom() {
  let passChar = Math.floor(Math.random() * characters.length);
  return characters[passChar];
}

generateButton.addEventListener("click", function () {
  let inputNum = document.getElementById("input-num").value;
  let errorMsg = document.getElementById("error");

  passOne.textContent = "";
  passTwo.textContent = "";
  errorMsg.textContent = "";

  let passLen = parseInt(inputNum);
  if (isNaN(passLen) || !Number.isInteger(Number(inputNum))) {
    errorMsg.textContent = "Please enter numbers only!";
    return;
  }
  if (passLen < 8) {
    errorMsg.textContent = "Password must be more than 8 characters!";
    return;
  }

  for (let i = 0; i < passLen; i++) {
    passOne.textContent += getRandom();
    passTwo.textContent += getRandom();
  }
});

passOne.addEventListener("click", function () {
  if (passOne.textContent.trim() !== "") {
    navigator.clipboard.writeText(passOne.textContent);
    alert("Password copied!");
  } else {
    alert("First generate a password!");
  }
});

passTwo.addEventListener("click", function () {
  if (passTwo.textContent.trim() !== "") {
    navigator.clipboard.writeText(passTwo.textContent);
    alert("Password copied!");
  } else {
    alert("First generate a password!");
  }
});
