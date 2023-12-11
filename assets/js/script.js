/* jshint esversion: 11 */
const resetButton = document.getElementById('reset-btn');
const nextFinishButton = document.getElementById('next-finish-btn');
const containerQuiz = document.getElementById('container-quiz');

const questionText = document.getElementById('questions');
const answerButtons = document.getElementById('answers-btns');
let img = document.getElementById('image');

let shuffledQuestions, currentQuestionIndex;

resetButton.addEventListener('click', resetGame);
startGame();

function startGame() {
    console.log('reset');
    let path = window.location.pathname;
    document.getElementById("difficulty").innerText = path.replace('.html', '').replace('/quiz', '');
    containerQuiz.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion () {
    resetQuestion();
    document.getElementById("current-question").innerText = currentQuestionIndex + 1;
    document.getElementById("total-questions").innerText = questions.length;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionText.innerText = question.question;
    img.src = `assets/images/${question.image}`;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btns-quiz');
      if (answer.correct) {
            img.alt = answer.text;
            button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtons.appendChild(button);
    });
}

function resetQuestion() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {

}

function resetGame() {
    location.reload();
}