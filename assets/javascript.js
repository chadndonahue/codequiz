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
        question: "What is going on",
        choice1: "Cao ni ma",
        choice2: "Sha Bi",
        choice3: "DA jiba",
        choice4: "idk dog i dont speak mandarin",
    },
    {
        question: "What is going on",
        choice1: "Cao ni ma",
        choice2: "Sha Bi",
        choice3: "DA jiba",
        choice4: "idk dog i dont speak mandarin",
    },
    {
        question: "What is going on",
        choice1: "Cao ni ma",
        choice2: "Sha Bi",
        choice3: "DA jiba",
        choice4: "idk dog i dont speak mandarin",
    },
    {
        question: "What is going on",
        choice1: "Cao ni ma",
        choice2: "Sha Bi",
        choice3: "DA jiba",
        choice4: "idk dog i dont speak mandarin",
    },
    {
        question: "What is going on",
        choice1: "Cao ni ma",
        choice2: "Sha Bi",
        choice3: "DA jiba",
        choice4: "idk dog i dont speak mandarin",
    },
]