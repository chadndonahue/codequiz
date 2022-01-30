const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

let questions = [
    {
        question: "Inside which Html element would you write Javascript",
        choice1: "js",
        choice2: "script",
        choice3: "div",
        choice4: "javascript",
        answer: 2,
    },
    {
        question: "Where do you link Javascript inside the html",
        choice1: "Right before the last Body Tag",
        choice2: "Somewhere in the head",
        choice3: "It can be linked anywhere",
        choice4: "Wait, you have to link it?!?!?!?!",
        answer: 1,
    },
    {
        question: "What is the proper way to comment in Javascript",
        choice1: "You cannot comment in Javascript",
        choice2: "<!-- -->",
        choice3: "//",
        choice4: "#",
        answer: 3,
    },
    {
        question: "How would you create a function?",
        choice1: "function Bunger()",
        choice2: "function=Bunger",
        choice3: "make function Bunger",
        choice4: "You are not able to make functions in Javascript it's a useless language and I hate it.",
        answer: 1,
    },
    {
        question: "How would you call a function that was named Bunger",
        choice1: "call funtion Bunger",
        choice2: "YO BUNGER YOU WANNA COME OUT HERE",
        choice3: "Bunger",
        choice4: "Bunger()",
        answer: 4,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem("recentScore", score)
        return window.location.assign("/end.html")
    }
    // This is what keeps track of progress and increments it
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`

    const questionIndex = Math.floor(Math.random()* availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionIndex, 1)
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener("click", i => {
    if(!acceptingAnswers) return
    acceptingAnswers = false
    const selectedChoice = i.target
    const selectedAnswer = selectedChoice.dataset["number"]
    let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

    if(classToApply === "correct"){
        incrementScore(SCORE_POINTS)
    }
    selectedChoice.parentElement.classList.add(classToApply)
    setTimeout (() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
    }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()