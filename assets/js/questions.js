/* jshint esversion: 11 */
const questions1 = [
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

const questions2 = [
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

const questions3 = [
    {
        question: 'Which muscle group is one of the prime movers in this exercise?',
        image: 'back-squat.webp',
        answers: [
            { text: 'Deltoideus', correct: false},
            { text: 'Latissimus Dorsi', correct: false},
            { text: 'Rectus Abdominis', correct: false},
            { text: 'Quadriceps Femoris', correct: true}
        ]
    },
    {
        question: 'Which muscle group is one of the prime movers in this exercise?',
        image: 'deadlift.webp',
        answers: [
            { text: 'Hamstrings', correct: true},
            { text: 'Pectoralis Major', correct: false},
            { text: 'Biceps Brachii', correct: false},
            { text: 'Triceps Surae', correct: false}
        ]
    },
    {
        question: 'Which muscle group is one of the prime movers in this exercise?',
        image: 'front-squat.webp',
        answers: [
            { text: 'Rectus Abdominis', correct: false},
            { text: 'Trapezius', correct: false},
            { text: 'Quadriceps Femoris', correct: true},
            { text: 'Deltoideus', correct: false}
        ]
    },
    {
        question: 'Which muscle group is one of the prime movers in this exercise?',
        image: 'goblet-squat.webp',
        answers: [
            { text: 'Gluteus Maximus', correct: true},
            { text: 'Triceps Brachii', correct: false},
            { text: 'Erector Spinae', correct: false},
            { text: 'Latissimus Dorsi', correct: false}
        ]
    },
    {
        question: 'Which muscle group is one of the prime movers in this exercise?',
        image: 'bench-press.webp',
        answers: [
            { text: 'Hamstrings', correct: false},
            { text: 'Pectoralis Major', correct: true},
            { text: 'Latissimus Dorsi', correct: false},
            { text: 'Trapezius', correct: false}
        ]
    },
    {
        question: 'Which muscle group is one of the prime movers in this exercise?',
        image: 'dumbbell-shoulder-press.webp',
        answers: [
            { text: 'Biceps Brachii', correct: false},
            { text: 'Quadriceps Femoris', correct: false},
            { text: 'Deltoideus', correct: true},
            { text: 'Triceps Surae', correct: false}
        ]
    },
    {
        question: 'Which muscle group is one of the prime movers in this exercise?',
        image: 'tricep-pushdown.webp',
        answers: [
            { text: 'Erector Spinae', correct: false},
            { text: 'Pectoralis Major', correct: false},
            { text: 'Gluteus Maximus', correct: false},
            { text: 'Triceps Brachii', correct: true}
        ]
    },
    {
        question: 'Which muscle group is one of the prime movers in this exercise?',
        image: 'dips.webp',
        answers: [
            { text: 'Biceps Brachii', correct: false},
            { text: 'Hamstrings', correct: false},
            { text: 'Rectus Abdominis', correct: false},
            { text: 'Pectoralis Major', correct: true}
        ]
    }
];
