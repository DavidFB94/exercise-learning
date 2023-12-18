/* jshint esversion: 11 */
showHideScore();

/**
 * Retrieves the data stored in localStorage,
 * and replaces the innerText in the existing elements.
 * Shows/hides the last performance section
 * by adding/removing the .hide class on click.
 */
function showHideScore() {
    let totalQuestions = localStorage.getItem('total-questions');
    let correctAnswers = localStorage.getItem('correct-answers');
    let levelData = localStorage.getItem('level-data');

    document.getElementById('total-questions').innerText = totalQuestions;
    document.getElementById('correct-answers').innerText = correctAnswers;
    document.getElementById('level').innerText = levelData;

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