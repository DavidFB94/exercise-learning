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
    let path = window.location.pathname;
    document.getElementById('level').innerText = path.replace('.html', '').replace('/exercise-learning', '').replace('/quiz', '');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion () {
    resetQuestion();
    document.getElementById('current-question').innerText = currentQuestionIndex + 1;
    document.getElementById('total-questions').innerText = questions.length;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionText.innerText = question.question;
    img.src = `assets/images/${question.image}`;
    question.answers.sort(() => Math.random() - 0.5);
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btns-quiz');
        if (answer.correct) {
            img.alt = answer.text;
            button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', pickAnswer);
      answerButtons.appendChild(button);
    });
}

function resetQuestion() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function pickAnswer(e) {
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    checkAnswer(e);
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function checkAnswer(e) {
    let userAnswer = document.getElementsByClassName('correct')[0];
    if (e.target == userAnswer) {
        incrementRightAnswer();
        Array.from(answerButtons.children).forEach(button => button.removeEventListener('click', pickAnswer));
    } else {
        incrementWrongAnswer();
        Array.from(answerButtons.children).forEach(button => button.removeEventListener('click', pickAnswer));
    }
    nextFinishButton.classList.remove("disable");
}

nextFinishButton.addEventListener('click', () => {
    nextFinishButton.classList.add("disable");
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        setNextQuestion();
    } else {
        endGame();
    }
});

function incrementRightAnswer() {
    let oldScore = parseInt(document.getElementById('correct-answers').innerText);
    document.getElementById('correct-answers').innerText = ++oldScore;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect-answers').innerText);
    document.getElementById('incorrect-answers').innerText = ++oldScore;
}

function resetGame() {
    location.reload();
}

function endGame () {
    let levelData = parseInt(document.getElementById('level').innerText);
    let correctAnswers = parseInt(document.getElementById('correct-answers').innerText);
    localStorage.setItem('level-data', JSON.stringify(levelData));
    localStorage.setItem('total-questions', JSON.stringify(currentQuestionIndex + 1));
    localStorage.setItem('correct-answers', JSON.stringify(correctAnswers));
    window.location = 'score-screen.html';
}
