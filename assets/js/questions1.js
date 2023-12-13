/* jshint esversion: 11 */
const questions = [
    {
        question: 'What is the name of this exercise?',
        image: 'back-squat.webp',
        answers: [
            { text: 'Deadlift', correct: false},
            { text: 'Front Squat', correct: false},
            { text: 'Goblet Squat', correct: false},
            { text: 'Back Squat', correct: true}
        ]
    },
    {
        question: 'What is the name of this exercise?',
        image: 'deadlift.webp',
        answers: [
            { text: 'Deadlift', correct: true},
            { text: 'Front Squat', correct: false},
            { text: 'Back Squat', correct: false},
            { text: 'Goblet Squat', correct: false}
        ]
    },
    {
        question: 'What is the name of this exercise?',
        image: 'front-squat.webp',
        answers: [
            { text: 'Goblet Squat', correct: false},
            { text: 'Back Squat', correct: false},
            { text: 'Front Squat', correct: true},
            { text: 'Deadlift', correct: false}
        ]
    },
    {
        question: 'What is the name of this exercise?',
        image: 'goblet-squat.webp',
        answers: [
            { text: 'Goblet Squat', correct: true},
            { text: 'Back Squat', correct: false},
            { text: 'Deadlift', correct: false},
            { text: 'Front Squat', correct: false}
        ]
    },
    {
        question: 'What is the name of this exercise?',
        image: 'bench-press.webp',
        answers: [
            { text: 'Dips', correct: false},
            { text: 'Bench Press', correct: true},
            { text: 'Tricep pushdown', correct: false},
            { text: 'Dumbbell Shoulder press', correct: false}
        ]
    },
    {
        question: 'What is the name of this exercise?',
        image: 'dumbbell-shoulder-press.webp',
        answers: [
            { text: 'Bench Press', correct: false},
            { text: 'Tricep pushdown', correct: false},
            { text: 'Dumbbell Shoulder press', correct: true},
            { text: 'Dips', correct: false}
        ]
    },
    {
        question: 'What is the name of this exercise?',
        image: 'tricep-pushdown.webp',
        answers: [
            { text: 'Dumbbel Shoulder press', correct: false},
            { text: 'Dips', correct: false},
            { text: 'Bench Press', correct: false},
            { text: 'Tricep Pushdown', correct: true}
        ]
    },
    {
        question: 'What is the name of this exercise?',
        image: 'dips.webp',
        answers: [
            { text: 'Tricep pushdown', correct: false},
            { text: 'Bench Press', correct: false},
            { text: 'Dumbbell Shoulder Press', correct: false},
            { text: 'Dips', correct: true}
        ]
    },
];