const startResetButton = document.getElementById('start-reset-btn')
const nextFinishButton = document.getElementById('next-finish-btn')
const containerQuiz = document.getElementById('container-quiz')

const questionText = document.getElementById('questions')
const answerButtons = document.getElementById('answers-btns')

let shuffledQuestions, currentQuestionIndex

startResetButton.addEventListener('click', startGame)

function startGame() {
    console.log('Start/reset')
    containerQuiz.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}
