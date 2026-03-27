let data = [
    {
        player: "Adnan",
        score: 31
    },
    {
        player: "Rahman",
        score: 0
    }
]

const adnanBtn = document.getElementById("adnan-btn")

adnanBtn.addEventListener("click", function(){
    console.log(data[0].score)
})