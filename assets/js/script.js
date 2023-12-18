/* jshint esversion: 11 */
const resetButton = document.getElementById('reset-btn');
const nextFinishButton = document.getElementById('next-finish-btn');
const containerQuiz = document.getElementById('container-quiz');
const questionText = document.getElementById('questions');
const answerButtons = document.getElementById('answers-btns');
let img = document.getElementById('image');
let shuffledQuestions, currentQuestionIndex, questions;

resetButton.addEventListener('click', resetGame);
startGame();

/**
 * Sets URL to represent the level,
 * based on URL, selects which questions will be displayed
 * randomizes questions order
 * sets question with setNextQuestion()
 */
function startGame() {
    let currentURL = new URL(window.location.href);
    let currentLevel = currentURL.searchParams.get('level');
    document.getElementById('level').innerText = currentLevel;
    containerQuiz.classList.remove('hide');
    if (currentLevel == '1') {
        questions = questions1;
    } else if (currentLevel == '2') {
        questions = questions2;
    } else if (currentLevel == '3') {
        questions = questions3;
    }
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

/**
 * Resets question state with resetQuestion(),
 * Sets current question tracker and total question tracker, based on the total amount of questions
 * displays question based on showQuestion()
 */
function setNextQuestion () {
    resetQuestion();
    document.getElementById('current-question').innerText = currentQuestionIndex + 1;
    document.getElementById('total-questions').innerText = questions.length;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

/**
 * Displays current question, together with the corresponding image,
 * creates and displays the answer buttons in a randomized order,
 * adds dataset correct to the correct answer/button,
 * adds event listeners to buttons to run pickAnswer(),
 * if on the last question of the quiz, change innerText of nextFinishButton to finish
 */
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
    if (currentQuestionIndex >= questions.length - 1) {
        nextFinishButton.innerHTML = 'Finish';
    }
}

/**
 * Adds the .correct or .wrong class to the buttons based on dataset
 */
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

/** 
* Clears the buttons of .correct/.wrong classes
*/
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

/**
 * Disables nextFinishButton until an answer has been selected in the next question,
 * increments currentQuestionIndex if there are more questions in the quiz,
 * otherwise, it triggers endGame()
 */
nextFinishButton.addEventListener('click', () => {
    nextFinishButton.classList.add('disable');
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        setNextQuestion();
    } else {
        endGame();
    }
});

/**
 * Checks for the correct answer,
 * triggers checkAnswer()
 */
function pickAnswer(e) {
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    checkAnswer(e);
}

/** 
* Checks if the user picked the correct answer,
* Increments trackers based on if the correct answer was selected,
* removes the disable class from nextFinishButton to go to the next question.
*/
function checkAnswer(e) {
    let userAnswer = document.getElementsByClassName('correct')[0];
    if (e.target == userAnswer) {
        incrementRightAnswer();
        Array.from(answerButtons.children).forEach(button => button.removeEventListener('click', pickAnswer));
    } else {
        incrementWrongAnswer();
        Array.from(answerButtons.children).forEach(button => button.removeEventListener('click', pickAnswer));
    }
    nextFinishButton.classList.remove('disable');
}

/* Code Institutes Love Math project */
function incrementRightAnswer() {
    let oldScore = parseInt(document.getElementById('correct-answers').innerText);
    document.getElementById('correct-answers').innerText = ++oldScore;
}

/* Code Institutes Love Math project */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect-answers').innerText);
    document.getElementById('incorrect-answers').innerText = ++oldScore;
}

/**
 * Removes answer buttons.
 */
function resetQuestion() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * Reloads the quiz.
 */
function resetGame() {
    location.reload();
}

/* Built with help from youtube tutorial on localStorage() */
/**
 * Stores the tracked data in localStorage,
 * redirects to score screen.
 */
function endGame () {
    let levelData = parseInt(document.getElementById('level').innerText);
    let correctAnswers = parseInt(document.getElementById('correct-answers').innerText);
    localStorage.setItem('level-data', JSON.stringify(levelData));
    localStorage.setItem('total-questions', JSON.stringify(currentQuestionIndex + 1));
    localStorage.setItem('correct-answers', JSON.stringify(correctAnswers));
    window.location = 'score-screen.html';
}
