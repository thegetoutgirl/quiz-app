var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    nextQuestion()
})

function startGame() {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    nextQuestion()

}
function nextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}
function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

var questions = [
    {
        question: "How many National Parks are there in the US? (Using the official 'National Park' designation only)",
        answers: [
            { text: "108", correct: false },
            { text: "94", correct: false },
            { text: "62", correct: true },
            { text: "76", correct: false },
        ]
    },

    {
        question: "Which National Park was the first to be established?",
        answers: [
            { text: "Yosemite National Park, California", correct: false },
            { text: "Yellowstone National Park, Montana/Wyoming/Idaho", correct: true },
            { text: "Everglades National Park, Florida", correct: false },
            { text: "Acadia National Park, Maine", correct: false },
        ]
    },

    {
        question: "Which state has the most National Parks?",

        answers: [
            { text: "Utah", correct: false },
            { text: "Alaska", correct: false },
            { text: "California", correct: false },
            { text: "B & C", correct: true },
        ]
    },

    {
        question: "Which National Park is fully contained on an island?",
        answers: [
            { text: "Dry Torguas National Park, Florida", correct: true },
            { text: "Congaree National Park, South Carolina", correct: false },
            { text: "Capitol Reef National Park, Utah", correct: false },
            { text: "Kenai Fjords National Park, Alaska ", correct: false },
        ]
    },

    {
        question: "How many National Trails are there in the US?",
        answers: [
            { text: "15", correct: false },
            { text: "6", correct: false },
            { text: "22", correct: false },
            { text: "11", correct: true },
        ]
    },

    {
        question: "What National Park had the most visitors in 2018?",
        answers: [
            { text: "Zion National Park, Utah", correct: false },
            { text: "Great Smoky Mountains National Park, Tennessee", correct: true },
            { text: "Yosemite National Park, California", correct: false },
            { text: "Grand Canyon National Park, Arizona", correct: false },
        ]
    },

    {
        question: "Which National Park was used in the filming of Star Wars: Episode IV (A New Hope)?",
        answers: [
            { text: "Joshua Tree National Park, California", correct: false },
            { text: "Canyonlands National Park, Utah", correct: false },
            { text: "White Sands National Park, New Mexico", correct: false },
            { text: "Death Valley National Park, California", correct: true },
        ]
    },

    {
        question: "Which National Park is the largest in area?",
        answers: [
            { text: "Grand Canyon National Park, Arizona", correct: false },
            { text: "Glacier National Park, Montana", correct: false },
            { text: "Wrangell-St. Elias National Park, Alaska", correct: true },
            { text: "Denali National Park, Alaska", correct: false },
        ]
    },
]
// Add a timer that subtracts time when an incorrect button is selected
// Add a counter that adds up questions that are correct