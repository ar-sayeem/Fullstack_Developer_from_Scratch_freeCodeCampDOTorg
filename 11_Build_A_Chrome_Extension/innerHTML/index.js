let divEl = document.getElementById("container")

divEl.innerHTML = "<button onclick='buy()'>Buy!</button>"

function buy(){
    divEl.innerHTML += "<p>Thank you for buying!</p>"
}