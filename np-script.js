var startButton = document.getElementById("start-btn")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")

let currentQuestionIndex

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("started");
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    nextQuestion()

}
function nextQuestion() {
    showQuestion(currentQuestionIndex);
}
function showQuestion(question){
    questionElement.innerHTML = question.question;
    question.answers.forEach(answer)
        const button = document.createElement()
}
function selectAnswer() {
    
}
var questions= [
    {
    question: "How many National Parks are there in the US? (Using the official 'National Park' designation only)",
    answers: [
        text = "108", correct = false ,
        text = "94", correct = false ,
        text = "62", correct = true ,
        text = "76", correct = false ,
    ]},
    
    {
    question: "Which National Park was the first to be established?",
    answers: [
	    text= "Yosemite National Park, California", correct = false,
	    text= "Yellowstone National Park, Montana/Wyoming/Idaho", correct = true,
        text= "Everglades National Park, Florida", correct = false,
        text= "Acadia National Park, Maine", correct = false,
]},

    {
    question: "Which state has the most National Parks?",
	
    answers: [
	    text= "Utah", correct = false,
	    text= "Alaska", correct = false,
        text= "California", correct = false,
        text= "B & C", correct = true,
]},

{
    question: "Which National Park is fully contained on an island?",
    answers: [
	    text= "Dry Torguas National Park, Florida", correct = true,
	    text= "Congaree National Park, South Carolina", correct = false,
        text= "Capitol Reef National Park, Utah", correct = false,
        text= "	Kenai Fjords National Park, Alaska ", correct = false,
]},

{
    question: "How many National Trails are there in the US?",
    answers: [
	    text= "15", correct = false,
	    text= "6", correct = false,
        text= "22", correct = false,
        text= "11", correct = true,
]},

{
    question: "What National Park had the most visitors in 2018?",
    answers: [
	    text= "Zion National Park, Utah", correct = false,
	    text= "Great Smoky Mountains National Park", correct = true,
        text= "Yosemite National Park", correct = false,
        text= "Grand Canyon National Park", correct = false,
]},

{
    question: "Which National Park was used in the filming of Star Wars: Episode IV (A New Hope)?",
    answers: [
	    text= "Joshua Tree National Park, California", correct = false,
	    text= "Canyonlands National Park, Colorado", correct = false,
        text= "White Sands National Park, New Mexico", correct = false,
        text= "Death Valley National Park, California", correct = true,
]},

{
    question: "Which National Park is the largest in area?",
    answers: [
	    text= "Grand Canyon National Park, Arizona", correct = false,
	    text= "Glacier National Park, Montana", correct = false,
        text= "Wrangell-St. Elias National Park, Alaska", correct = true,
        text= "Denali National Park, Alaska", correct = false,
]},
    ]
// Add a timer that subtracts time when an incorrect button is selected
// Add a counter that adds up questions that are correct