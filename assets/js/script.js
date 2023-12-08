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

function setNextQuestion () {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionText.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btns-quiz')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtons.appendChild(button)
    })
}

function resetQuestion() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {

}

const questions = [
    {
        question: 'What is the name of this exercise?',
        answers: [
            { text: 'Deadlift', correct: false},
            { text: 'Squat', correct: true},
            { text: 'Front Squat', correct: false},
            { text: 'Goblet Squat', correct: false}
        ]
    }
]