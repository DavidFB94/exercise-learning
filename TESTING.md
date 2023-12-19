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
| Firefox| ![screenshot](documentation/browsers/firefox-index.png) | ![screenshot](documentation/browsers/firefox-quiz.png) | ![screenshot](documentation/browsers/firefox-score-screen.png) | Button styles slightly different |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Index | Quiz | Score Screen | Notes |
| --- | --- | --- | --- | --- |
| Mobile (DevTools) | ![screenshot](documentation/responsiveness/mobile-index.jpg) | ![screenshot](documentation/responsiveness/mobile-quiz.jpg) | ![screenshot](documentation/responsiveness/mobile-score-screen.jpg) | Works as expected |
| Tablet (DevTools) | ![screenshot](documentation/responsiveness/tablet-index.jpg) | ![screenshot](documentation/responsiveness/tablet-quiz.jpg) | ![screenshot](documentation/responsiveness/tablet-score-screen.jpg) | Works as expected |
| Desktop | ![screenshot](documentation/browsers/chrome-index.jpg) | ![screenshot](documentation/browsers/chrome-quiz.jpg) | ![screenshot](documentation/browsers/chrome-score-screen.jpg) | Works as expected |
| Sony Xperia 10 | ![screenshot](documentation/responsiveness/xperia-home.jpg) | ![screenshot](documentation/responsiveness/xperia-quiz.jpg) | ![screenshot](documentation/responsiveness/xperia-score-screen.jpg) | Works as expected |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| Home | ![screenshot](documentation/lighthouse/lighthouse-mobile-index.png) | ![screenshot](documentation/lighthouse/lighthouse-desktop-index.png) | Some minor warnings. Accessibility fixed. |
| Quiz | ![screenshot](documentation/lighthouse/lighthouse-mobile-quiz.png) | ![screenshot](documentation/lighthouse/lighthouse-desktop-quiz.png) | Some minor warnings. Accessibility fixed. |
| Score Screen | ![screenshot](documentation/lighthouse/lighthouse-mobile-score-screen.png) | ![screenshot](documentation/lighthouse/lighthouse-desktop-score-screen.png) | Some minor warnings. Accessibility fixed. |