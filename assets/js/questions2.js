/* jshint esversion: 11 */
const questions = [
    {
        question: 'What is the name for this muscle?',
        image: 'biceps-brachii.webp',
        answers: [
            { text: 'Triceps Brachii', correct: false},
            { text: 'Deltoideus', correct: false},
            { text: 'Gluteus Maximus', correct: false},
            { text: 'Biceps Brachii', correct: true}
        ]
    },
    {
        question: 'What is the name for this muscle?',
        image: 'deltoideus.webp',
        answers: [
            { text: 'Deltoideus', correct: true},
            { text: 'Trapezius', correct: false},
            { text: 'Latissimus Dorsi', correct: false},
            { text: 'Biceps Brachii', correct: false}
        ]
    },
    {
        question: 'What is the name for this muscle?',
        image: 'erector-spinae.webp',
        answers: [
            { text: 'Pectoralis Major', correct: false},
            { text: 'Quadriceps Femoris', correct: false},
            { text: 'Erector Spinae', correct: true},
            { text: 'Trapezius', correct: false}
        ]
    },
    {
        question: 'What is the name for this muscle?',
        image: 'gluteus-maximus.webp',
        answers: [
            { text: 'Gluteus Maximus', correct: true},
            { text: 'Latissimus Dorsi', correct: false},
            { text: 'Triceps Surae', correct: false},
            { text: 'Hamstrings', correct: false}
        ]
    },
    {
        question: 'What is the name for this muscle?',
        image: 'hamstrings.webp',
        answers: [
            { text: 'Deltoideus', correct: false},
            { text: 'Hamstrings', correct: true},
            { text: 'Erector Spinae', correct: false},
            { text: 'Triceps Brachii', correct: false}
        ]
    },
    {
        question: 'What is the name for this muscle?',
        image: 'latissimus-dorsi.webp',
        answers: [
            { text: 'Biceps Brachii', correct: false},
            { text: 'Erector Spinae', correct: false},
            { text: 'Latissimus Dorsi', correct: true},
            { text: 'Pectoralis Major', correct: false}
        ]
    },
    {
        question: 'What is the name for this muscle?',
        image: 'pectoralis-major.webp',
        answers: [
            { text: 'Quadriceps Femoris', correct: false},
            { text: 'Triceps Brachii', correct: false},
            { text: 'Deltoideus', correct: false},
            { text: 'Pectoralis Major', correct: true}
        ]
    },
    {
        question: 'What is the name for this muscle?',
        image: 'quadriceps-femoris.webp',
        answers: [
            { text: 'Triceps Surae', correct: false},
            { text: 'Gluteus Maximus', correct: false},
            { text: 'Trapezius', correct: false},
            { text: 'Quadriceps Femoris', correct: true}
        ]
    },
    {
        question: 'What is the name for this muscle?',
        image: 'rectus-abdominis.webp',
        answers: [
            { text: 'Gluteus Maximus', correct: false},
            { text: 'Triceps Brachii', correct: false},
            { text: 'Rectus Abdominis', correct: true},
            { text: 'Latissimus Dorsi', correct: false}
        ]
    },
    {
        question: 'What is the name for this muscle?',
        image: 'trapezius.webp',
        answers: [
            { text: 'Deltoideus', correct: false},
            { text: 'Latissimus Dorsi', correct: false},
            { text: 'Hamstrings', correct: false},
            { text: 'Trapezius', correct: true}
        ]
    },
    {
        question: 'What is the name for this muscle?',
        image: 'triceps-brachii.webp',
        answers: [
            { text: 'Trapezius', correct: false},
            { text: 'Triceps Brachii', correct: true},
            { text: 'Deltoideus', correct: false},
            { text: 'Rectus Abdominis', correct: false}
        ]
    },
    {
        question: 'What is the name for this muscle?',
        image: 'triceps-surae.webp',
        answers: [
            { text: 'Triceps Surae', correct: true},
            { text: 'Quadriceps Femoris', correct: false},
            { text: 'Pectoralis Major', correct: false},
            { text: 'Trapezius', correct: false}
        ]
    }
];