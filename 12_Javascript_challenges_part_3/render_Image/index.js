const imgs = [
    "images/Omen.png",
    "images/Sage.png",
    "images/Chamber.png"
]

const container = document.getElementById("container")

function renderImages(){
    let imageDOM = ""
    for(let i = 0; i < imgs.length; i++){
        imageDOM += `<img class="team-img" alt="top 3 pick agent in valorant" src="${imgs[i]}">`
    }
    container.innerHTML = imageDOM
}

renderImages()