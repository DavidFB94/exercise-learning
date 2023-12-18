/* jshint esversion: 11 */
setScoreScreen();

/**
 * Sets the score screen by retrieving the data stored in localStorage,
 * and replacing the innerText in the existing elements.
 */
function setScoreScreen() {
    let totalQuestions = localStorage.getItem('total-questions');
    let correctAnswers = localStorage.getItem('correct-answers');
    let levelData = localStorage.getItem('level-data');

    document.getElementById('total-questions').innerText = totalQuestions;
    document.getElementById('correct-answers').innerText = correctAnswers;
    document.getElementById('level').innerText = levelData;
}