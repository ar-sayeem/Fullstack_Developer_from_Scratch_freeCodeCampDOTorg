let alertMsg = document.getElementById("alert-msg");
let convertBtn = document.getElementById("btn");
let calLength = document.getElementById("len-cal");
let calVolumn = document.getElementById("vol-cal");
let calMass = document.getElementById("mass-cal");

convertBtn.addEventListener("click", Calculation);
function Calculation() {
  let inputNum = parseFloat(document.getElementById("input-num").value);

  if (isNaN(inputNum)) {
    alertMsg.textContent = `Please enter a valid number!`;
    return;
  }

  alertMsg.textContent = "";

  let toFeet = Number(inputNum * 3.28084).toFixed(3);
  let toMeter = Number(inputNum * 0.3048).toFixed(3);
  calLength.innerHTML = `${inputNum} meters = ${toFeet} feet | ${inputNum} feet = ${toMeter} meters`;

  let toGallons = Number(inputNum * 0.264172).toFixed(3);
  let toLiters = Number(inputNum * 3.78541).toFixed(3);
  calVolumn.innerHTML = `${inputNum} liters = ${toGallons} gallons | ${inputNum} gallons = ${toLiters} liters`;

  let toPounds = Number(inputNum * 2.20462).toFixed(3);
  let toKilograms = Number(inputNum * 0.453592).toFixed(3);
  calMass.innerHTML = `${inputNum} kilograms = ${toPounds} pounds | ${inputNum} pounds = ${toKilograms} kilograms`;
}
