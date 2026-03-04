let sumEl = document.getElementById("sum-el")

function add(){
    let num1 = Number(document.getElementById("num1-el").value)
    let num2 = Number(document.getElementById("num2-el").value)
    sumEl.textContent = "Result: " + (num1 + num2)
}

function sub(){
    let num1 = Number(document.getElementById("num1-el").value)
    let num2 = Number(document.getElementById("num2-el").value)
    sumEl.textContent = "Result: " + (num1 - num2)
}

function div(){
    let num1 = Number(document.getElementById("num1-el").value)
    let num2 = Number(document.getElementById("num2-el").value)
    if(num2 === 0){
        sumEl.textContent = "Result: Cannot divide by zero!"
    } else {
        sumEl.textContent = "Result: " + (num1 / num2)
    }
}

function mul(){
    let num1 = Number(document.getElementById("num1-el").value)
    let num2 = Number(document.getElementById("num2-el").value)
    sumEl.textContent = "Result: " + (num1 * num2)
}