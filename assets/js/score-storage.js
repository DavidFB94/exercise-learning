/* jshint esversion: 11 */
setScoreScreen();
showHideScore();

function setScoreScreen() {
    let totalQuestions = localStorage.getItem('total-questions');
    let correctAnswers = localStorage.getItem('correct-answers');
    let levelData = localStorage.getItem('level-data');

    document.getElementById('total-questions').innerText = totalQuestions;
    document.getElementById('correct-answers').innerText = correctAnswers;
    document.getElementById('level').innerText = levelData;
}

function showHideScore() {
    const score = document.getElementById('last-performance');
    const scoreToggle = document.getElementById('show-hide');

    scoreToggle.addEventListener('click', () => {
        if (score.classList.contains('hide')) {
            score.classList.remove('hide')
        } else {
            score.classList.add('hide')
        }
    });
};
