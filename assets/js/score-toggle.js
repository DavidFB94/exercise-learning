/* jshint esversion: 11 */
showHideScore();

/**
 * Shows/hides the last performance section
 * by adding/removing the .hide class on click.
 */
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