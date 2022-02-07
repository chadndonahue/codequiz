const username = document.querySelector("#name");
const scoreBtn = document.querySelector("#scoreBtn");
const finalScore = document.querySelector("#finalScore");
const recentScore = JSON.parse(localStorage.getItem("recentScore"))

const scores = JSON.parse(localStorage.getItem("scores")) || []

const MAX_SCORES = 3

finalScore.innerText = recentScore

const saveScore = i => {
    i.preventDefault()
    const score = {
        score: recentScore,
        name: username.value
    }
    scores.push(score)
    scores.sort((a,b) => {
        return b.score - a.score
    })
    scores.splice(3)
    localStorage.setItem("scores", JSON.stringify(scores))
    window.location.assign("./scores.html")
}

scoreBtn.addEventListener("click", saveScore)