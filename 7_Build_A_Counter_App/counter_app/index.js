// document.getElementById("count-up").innerText = 5

let resetAll = document.getElementById("reset-btn")
let saveUp = document.getElementById("save-count")
let countUp = document.getElementById("count-up")
let count = 0

function increment() {
    count += 1
    countUp.innerText = count
}

function save() {
    let countStr = " " + count + " - "
    saveUp.innerText += countStr

    countUp.innerText = 0
    count = 0
}

function reset() {
    countUp.innerText = 0
    count = 0
    saveUp.textContent = "Previous Entries:"
}