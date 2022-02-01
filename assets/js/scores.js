const scoresList = document.querySelector("#scoresList")
const scores = JSON.parse(localStorage.getItem("scores")) || []

scoresList.innerHTML = scores.map(score => {
    return `<li>${score.name} - ${score.score}</li>`
}).join("")
