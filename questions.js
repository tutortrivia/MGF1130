const allQuestions = {
    grammar: [
        {
            question: "Which of the following is a proper noun?",
            answers: ["Dog", "Paris", "Happy", "Run"],
            correct: 1
        },
        {
            question: "What is the past tense of 'eat'?",
            answers: ["Eated", "Ate", "Eaten", "Eating"],
            correct: 1
        },
        {
            question: "Which word is an adverb?",
            answers: ["Quick", "Quickly", "Quickness", "Quicken"],
            correct: 1
        },
        {
            question: "What is the plural of 'child'?",
            answers: ["Childs", "Childen", "Children", "Childres"],
            correct: 2
        },
        {
            question: "Which sentence uses the correct form of 'there'?",
            answers: ["Their going to the store.", "There going to the store.", "They're going to the store.", "Theyre going to the store."],
            correct: 2
        },
        {
            question: "What is the comparative form of 'good'?",
            answers: ["Gooder", "Better", "Best", "More good"],
            correct: 1
        },
        {
            question: "Which word is a conjunction?",
            answers: ["Quickly", "However", "Jumping", "Excited"],
            correct: 1
        },
        {
            question: "What is the possessive form of 'it'?",
            answers: ["Its", "It's", "Itses", "Itse"],
            correct: 0
        },
        {
            question: "Which sentence is in the passive voice?",
            answers: ["The cat chased the mouse.", "The mouse was chased by the cat.", "The mouse ran from the cat.", "The cat and mouse played."],
            correct: 1
        },
        {
            question: "What part of speech is 'beautifully'?",
            answers: ["Adjective", "Noun", "Verb", "Adverb"],
            correct: 3
        }
    ],
    trigFunctions: [
        {
            question: "What is the sine of 30 degrees?",
            answers: ["1/2", "√3/2", "√2/2", "1"],
            correct: 0
        },
        {
            question: "What is the cosine of 60 degrees?",
            answers: ["1/2", "√3/2", "√2/2", "1"],
            correct: 0
        },
        {
            question: "What is the tangent of 45 degrees?",
            answers: ["0", "1", "√3", "Undefined"],
            correct: 1
        },
        {
            question: "Which trig function is equal to the opposite side divided by the hypotenuse?",
            answers: ["Sine", "Cosine", "Tangent", "Secant"],
            correct: 0
        },
        {
            question: "What is the cosine of 0 degrees?",
            answers: ["0", "1", "-1", "1/2"],
            correct: 1
        },
        {
            question: "What is the sine of 90 degrees?",
            answers: ["0", "1", "-1", "1/2"],
            correct: 1
        },
        {
            question: "What is the tangent of 0 degrees?",
            answers: ["0", "1", "-1", "Undefined"],
            correct: 0
        },
        {
            question: "Which trig function is equal to sine divided by cosine?",
            answers: ["Tangent", "Cotangent", "Secant", "Cosecant"],
            correct: 0
        },
        {
            question: "What is the period of the sine function?",
            answers: ["π", "2π", "π/2", "4π"],
            correct: 1
        },
        {
            question: "What is the cosine of 180 degrees?",
            answers: ["0", "1", "-1", "1/2"],
            correct: 2
        }
    ],
    periodicTable: [
        {
            question: "What is the atomic number of Carbon?",
            answers: ["5", "6", "7", "8"],
            correct: 1
        },
        {
            question: "Which element has the chemical symbol 'Na'?",
            answers: ["Nitrogen", "Neon", "Sodium", "Nickel"],
            correct: 2
        },
        {
            question: "What is the most abundant element in the Earth's atmosphere?",
            answers: ["Oxygen", "Carbon", "Nitrogen", "Hydrogen"],
            correct: 2
        },
        {
            question: "Which of these is a noble gas?",
            answers: ["Chlorine", "Helium", "Fluorine", "Bromine"],
            correct: 1
        },
        {
            question: "What is the atomic number of Gold?",
            answers: ["47", "79", "118", "29"],
            correct: 1
        },
        {
            question: "Which element is liquid at room temperature?",
            answers: ["Mercury", "Aluminum", "Copper", "Neon"],
            correct: 0
        },
        {
            question: "What is the chemical symbol for Iron?",
            answers: ["Ir", "Fe", "In", "I"],
            correct: 1
        },
        {
            question: "Which element is essential for life and is found in all organic compounds?",
            answers: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
            correct: 2
        },
        {
            question: "What is the most electronegative element?",
            answers: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
            correct: 2
        },
        {
            question: "Which of these is an alkali metal?",
            answers: ["Magnesium", "Aluminum", "Potassium", "Calcium"],
            correct: 2
        }
    ],
    physicsVocabulary: [
        {
            question: "What is the SI unit of force?",
            answers: ["Watt", "Joule", "Newton", "Pascal"],
            correct: 2
        },
        {
            question: "What is the term for the resistance of an object to a change in its motion?",
            answers: ["Momentum", "Inertia", "Acceleration", "Velocity"],
            correct: 1
        },
        {
            question: "What is the measure of the amount of matter in an object?",
            answers: ["Weight", "Density", "Volume", "Mass"],
            correct: 3
        },
        {
            question: "What is the term for the transfer of heat through direct contact?",
            answers: ["Conduction", "Convection", "Radiation", "Insulation"],
            correct: 0
        },
        {
            question: "What is the SI unit of electric current?",
            answers: ["Volt", "Watt", "Ampere", "Ohm"],
            correct: 2
        },
        {
            question: "What is the term for the change in velocity over time?",
            answers: ["Speed", "Acceleration", "Distance", "Displacement"],
            correct: 1
        },
        {
            question: "What is the SI unit of energy and work?",
            answers: ["Watt", "Joule", "Newton", "Pascal"],
            correct: 1
        },
        {
            question: "What is the term for the force that opposes the relative motion of surfaces in contact?",
            answers: ["Tension", "Friction", "Gravity", "Pressure"],
            correct: 1
        },
        {
            question: "What is the SI unit of power?",
            answers: ["Watt", "Joule", "Newton", "Volt"],
            correct: 0
        },
        {
            question: "What is the term for the ability to do work?",
            answers: ["Force", "Energy", "Momentum", "Velocity"],
            correct: 1
        }
    ],
    numberSets: [
        {
            question: "Which set does the number 5 belong to?",
            answers: ["Natural Numbers", "Irrational Numbers", "Complex Numbers", "All of the above"],
            correct: 3
        },
        {
            question: "Which set does the number -3 belong to?",
            answers: ["Natural Numbers", "Whole Numbers", "Integers", "Rational Numbers"],
            correct: 2
        },
        {
            question: "Which set does the number 0 belong to?",
            answers: ["Natural Numbers", "Whole Numbers", "Integers", "All of the above"],
            correct: 3
        },
        {
            question: "Which set does the number 1/2 belong to?",
            answers: ["Natural Numbers", "Whole Numbers", "Rational Numbers", "Irrational Numbers"],
            correct: 2
        },
        {
            question: "Which set does the number √2 belong to?",
            answers: ["Rational Numbers", "Irrational Numbers", "Complex Numbers", "Real Numbers"],
            correct: 1
        },
        {
            question: "Which set does the number π belong to?",
            answers: ["Rational Numbers", "Irrational Numbers", "Complex Numbers", "Imaginary Numbers"],
            correct: 1
        },
        {
            question: "Which set does the number i (imaginary unit) belong to?",
            answers: ["Real Numbers", "Irrational Numbers", "Complex Numbers", "Imaginary Numbers"],
            correct: 2
        },
        {
            question: "Which is the smallest set that contains all integers?",
            answers: ["Natural Numbers", "Whole Numbers", "Integers", "Rational Numbers"],
            correct: 2
        },
        {
            question: "Which is the largest set among the following?",
            answers: ["Natural Numbers", "Rational Numbers", "Irrational Numbers", "Real Numbers"],
            correct: 3
        },
        {
            question: "Which set does the number 2.5 belong to?",
            answers: ["Natural Numbers", "Whole Numbers", "Integers", "Rational Numbers"],
            correct: 3
        }
    ]
};
