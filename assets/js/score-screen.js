setScoreScreen();

function setScoreScreen() {
    let totalQuestions = localStorage.getItem('total-questions');
    let correctAnswers = localStorage.getItem('correct-answers');
    let difficultyData = localStorage.getItem('difficulty-data')

    document.getElementById('total-questions').innerText = totalQuestions;
    document.getElementById('correct-answers').innerText = correctAnswers;
    document.getElementById('difficulty').innerText = difficultyData;
}