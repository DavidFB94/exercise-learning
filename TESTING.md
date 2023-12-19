# Testing

Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdavidfb94.github.io%2Fexercise-learning%2Findex.html) | ![screenshot](documentation/validation/html-validation-index.png) | Section lacks header h2-h6 warning and missing alt attribute for image (fixed).|
| Quiz | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2FDavidFB94.github.io%2Fexercise-learning%2Fcontact.html) | ![screenshot](documentation/validation/html-validation-quiz.png) | Section lacks header h2-h6 warning |
| Score Screen | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdavidfb94.github.io%2Fexercise-learning%2Fscore-screen.html) | ![screenshot](documentation/validation/html-validation-score-screen.png) | Pass: No Errors |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdavidfb94.github.io%2Fexercise-learning%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) | ![screenshot](documentation/validation/css-validation-style.png) | Pass: No Errors |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| File | Screenshot | Notes |
| --- | --- | --- |
| index.js | ![screenshot](documentation/validation/js-validation-index.png) | Pass |
| questions.js | ![screenshot](documentation/validation/js-validation-questions.png) | Unused variables, used in external file|
| score-screen.js | ![screenshot](documentation/validation/js-validation-score-screen.png) | Pass |
| script.js | ![screenshot](documentation/validation/js-validation-script.png) | Undefined variables from external files |

## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Index | Quiz | Score screen | Notes |
| --- | --- | --- | --- | --- |
| Chrome | ![screenshot](documentation/browsers/chrome-index.png) | ![screenshot](documentation/browsers/chrome-quiz.png) | ![screenshot](documentation/browsers/chrome-score-screen.png) | Works as expected |
| Edge| ![screenshot](documentation/browsers/edge-index.png) | ![screenshot](documentation/browsers/edge-quiz.png) | ![screenshot](documentation/browsers/edge-score-screen.png) | Works as expected |
| Firefox| ![screenshot](documentation/browsers/firefox-index.png) | ![screenshot](documentation/browsers/firefox-quiz.png) | ![screenshot](documentation/browsers/firefox-score-screen.png) | Button styles slightly different inside quiz |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Index | Quiz | Score Screen | Notes |
| --- | --- | --- | --- | --- |
| Mobile (DevTools) | ![screenshot](documentation/responsiveness/mobile-index.png) | ![screenshot](documentation/responsiveness/mobile-quiz.png) | ![screenshot](documentation/responsiveness/mobile-score-screen.png) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/responsiveness/tablet-index.png) | ![screenshot](documentation/responsiveness/tablet-quiz.png) | ![screenshot](documentation/responsiveness/tablet-score-screen.png) | Works as expected |
| Desktop | ![screenshot](documentation/browsers/chrome-index.png) | ![screenshot](documentation/browsers/chrome-quiz.png) | ![screenshot](documentation/browsers/chrome-score-screen.png) | Works as expected |
| Sony Xperia 10 | ![screenshot](documentation/responsiveness/xperia-index.jpg) | ![screenshot](documentation/responsiveness/xperia-quiz.jpg) | ![screenshot](documentation/responsiveness/xperia-score-screen.jpg) | Works as expected |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Home | ![screenshot](documentation/lighthouse/lighthouse-mobile-index.png) | ![screenshot](documentation/lighthouse/lighthouse-desktop-index.png) | Some minor warnings. Accessibility fixed. |
| Quiz | ![screenshot](documentation/lighthouse/lighthouse-mobile-quiz.png) | ![screenshot](documentation/lighthouse/lighthouse-desktop-quiz.png) | Some minor warnings. Accessibility fixed. |
| Score Screen | ![screenshot](documentation/lighthouse/lighthouse-mobile-score-screen.png) | ![screenshot](documentation/lighthouse/lighthouse-desktop-score-screen.png) | Some minor warnings. Accessibility fixed. |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page | Expectation | Test | Result | Fix | Screenshot |
| --- | --- | --- | --- | --- | --- |
| Index | | | | | |
| | Feature is expected to direct the user to index-page when clicked | Tested the feature by clicking | The feature behaved as expected, I got directed to index-page | Test concluded and passed | ![screenshot](documentation/features/feature01.png) |
| | Feature is expected to take the user to the selected level when the button is clicked | Tested the feature clicking the buttons | The feature behaved as expected, I got directed to the selected quiz | Test concluded and passed | ![screenshot](documentation/features/feature03.png) |
| | Feature is expected to show/hide the last performance box when the button is pressed | Tested the feature clicking the button | The feature behaved as expected, it toggled the last performance box | Test concluded and passed | ![screenshot](documentation/features/feature04-1.png) ![screenshot](documentation/features/feature04-2.png) |
| Quiz | | | | | |
| | Feature is expected to let the user go back to home page, reset the current quiz, move on to the next question/end the game when an answer has been selected, on button click | Tested the feature by clicking the buttons, and trying to go to next question/end game before I had selected an answer | The feature behaved as expected, the home button redirected me to index-page, reset button restarted the current quiz, and I could not press next/finish until an answer has been selected | Test concluded and passed | ![screenshot](documentation/features/feature05-1.png)![screenshot](documentation/features/feature05-2.png) |
| | Feature is expected to show a question + image in a randomized order, with answer buttons for each question | Tested the feature by running and completing 2 quizzes | The feature behaved as expected, I was shown a question + image in a randomized order | Test concluded and passed | ![screenshot](documentation/features/feature06-1.png) |
| | Feature is expected to display the correct/wrong answers with color feedback | Tested the feature by selecting correct and wrong answers in a quiz | The feature behaved as expected, the correct answer turned green, while the incorrect answers turned red | Test concluded and passed | ![screenshot](documentation/features/feature06-2.png) |
| | Feature is expected to track and display the users progress | Tested the feature by running a quiz | The feature behaved as expected, the progress was tracked and displayed | Test concluded and passed | ![screenshot](documentation/features/feature07.png) |
| Score Screen | | | | | |
| | Feature is expected to display a summary of the quiz, and let the user go back to the index-page when the "home" button is clicked. It also stores the progress in localStorage() for use in the index-page | Tested the feature by completing a quiz, and clicking the "home" button | The feature behaved as expected, it displayed a summary of my score, the "home" button returned me to the index-page, and the score was tracked in the last performance box | Test concluded and passed | ![screenshot](documentation/features/feature08.png) |
| | Feature is expected to redirect the user to GitHub (in a new page) when the link is pressed | Tested the feature by pressing the link | The feature behaved as expected, it opened the GitHub profile in a new tab | Test concluded and passed | ![screenshot](documentation/features/feature09.png) |

## Bugs

- JS continues setting next question after questions.length has been reached.

    ![screenshot](documentation/bugs/bug01-1.png)
    ![screenshot](documentation/bugs/bug01-2.png)
    ![screenshot](documentation/bugs/bug01-3.png)

    - To fix this, I had to take into account that the array starts at 0, so adding - 1 fixed the issue.

- JS incrementing currentQuestionIndex in an unintended way, which led to the quiz skipping questions, the question-tracker incrementing more than +1, and the endGame function triggering before all the questions had been answered.

    ![screenshot](documentation/bugs/bug04-1.png)
    ![screenshot](documentation/bugs/bug04-2.png)
    ![screenshot](documentation/bugs/bug04-3.png)
    ![screenshot](documentation/bugs/bug04-4.png)

    - To fix this, I had to move the eventListener which triggers the incrementation/ends the game outside the pickAnswer function.

- Uncaught TypeError in console when triggering the score screen, because the showHideScore function was trying to run.

    ![screenshot](documentation/bugs/bug02.png)

    - To fix this, I moved the showHideScore function into a separate file, which is only called in the home screen.

- GET 404 when loading the quiz page, because the index HTML still had the old file path from before I started using template literal variables to display different images for the questions.

    ![screenshot](documentation/bugs/bug03.png)

    - To fix this, I removed the squat.jpeg from the file path, so the template literal variables fill in the empty space using the showQuestion function.

## Unfixed Bugs

- Warning for unused variables. The variables are used in a different js file.

    ![screenshot](documentation/validation/js-validation-questions.png)

    - Attempted fix: this is a known warning and acceptable.

- Warning for undefined variables The variables are in a different js file.

    ![screenshot](documentation/validation/js-validation-script.png)

    - Attempted fix: this is a known warning and acceptable.

- When validating HTML with a semantic `section` element, the validator warns about lacking a header `h2-h6`.

    ![screenshot](documentation/validation/html-validation-index.png)
    ![screenshot](documentation/validation/html-validation-quiz.png)

    - Attempted fix: this is a known warning and acceptable.

- Level tracker cant be fully centered in index/score screen page (1-2pixels off).

    ![screenshot](documentation/bugs/unfixed-bug01.png)

    - Attempted fix: I tried different options to center: centering with the help of flexbox, setting static box size and centering text. It did not work.