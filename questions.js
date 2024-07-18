const allQuestions = {
    grammar: [
        {
            questionId: "GR0000001",
            question: "Which of the following is a proper noun?",
            answers: ["Dog", "Paris", "Happy", "Run"],
            correct: "Paris"
        },
        {
            questionId: "GR0000002",
            question: "What is the past tense of 'eat'?",
            answers: ["Eated", "Ate", "Eaten", "Eating"],
            correct: "Ate"
        },
        {
            questionId: "GR0000003",
            question: "Which word is an adverb?",
            answers: ["Quick", "Quickly", "Quickness", "Quicken"],
            correct: "Quickly"
        },
        {
            questionId: "GR0000004",
            question: "What is the plural of 'child'?",
            answers: ["Childs", "Childen", "Children", "Childres"],
            correct: "Children"
        },
        {
            questionId: "GR0000005",
            question: "Which sentence uses the correct form of 'there'?",
            answers: ["Their going to the store.", "There going to the store.", "They're going to the store.", "Theyre going to the store."],
            correct: "They're going to the store."
        },
        {
            questionId: "GR0000006",
            question: "What is the comparative form of 'good'?",
            answers: ["Gooder", "Better", "Best", "More good"],
            correct: "Better"
        },
        {
            questionId: "GR0000007",
            question: "Which word is a conjunction?",
            answers: ["Quickly", "However", "Jumping", "Excited"],
            correct: "However"
        },
        {
            questionId: "GR0000008",
            question: "What is the possessive form of 'it'?",
            answers: ["Its", "It's", "Itses", "Itse"],
            correct: "Its"
        },
        {
            questionId: "GR0000009",
            question: "Which sentence is in the passive voice?",
            answers: ["The cat chased the mouse.", "The mouse was chased by the cat.", "The mouse ran from the cat.", "The cat and mouse played."],
            correct: "The mouse was chased by the cat."
        },
        {
            questionId: "GR0000010",
            question: "What part of speech is 'beautifully'?",
            answers: ["Adjective", "Noun", "Verb", "Adverb"],
            correct: "Adverb"
        }
    ],
    trigFunctions: [
        {
            questionId: "TF0000001",
            question: "What is the sine of 30 degrees?",
            answers: ["1/2", "√3/2", "√2/2", "1"],
            correct: "1/2"
        },
        {
            questionId: "TF0000002",
            question: "What is the cosine of 60 degrees?",
            answers: ["1/2", "√3/2", "√2/2", "1"],
            correct: "1/2"
        },
        {
            questionId: "TF0000003",
            question: "What is the tangent of 45 degrees?",
            answers: ["0", "1", "√3", "Undefined"],
            correct: "1"
        },
        {
            questionId: "TF0000004",
            question: "Which trig function is equal to the opposite side divided by the hypotenuse?",
            answers: ["Sine", "Cosine", "Tangent", "Secant"],
            correct: "Sine"
        },
        {
            questionId: "TF0000005",
            question: "What is the cosine of 0 degrees?",
            answers: ["0", "1", "-1", "1/2"],
            correct: "1"
        },
        {
            questionId: "TF0000006",
            question: "What is the sine of 90 degrees?",
            answers: ["0", "1", "-1", "1/2"],
            correct: "1"
        },
        {
            questionId: "TF0000007",
            question: "What is the tangent of 0 degrees?",
            answers: ["0", "1", "-1", "Undefined"],
            correct: "0"
        },
        {
            questionId: "TF0000008",
            question: "Which trig function is equal to sine divided by cosine?",
            answers: ["Tangent", "Cotangent", "Secant", "Cosecant"],
            correct: "Tangent"
        },
        {
            questionId: "TF0000009",
            question: "What is the period of the sine function?",
            answers: ["π", "2π", "π/2", "4π"],
            correct: "2π"
        },
        {
            questionId: "TF0000010",
            question: "What is the cosine of 180 degrees?",
            answers: ["0", "1", "-1", "1/2"],
            correct: "-1"
        }
    ],
    periodicTable: [
        {
            questionId: "PT0000001",
            question: "What is the atomic number of Carbon?",
            answers: ["5", "6", "7", "8"],
            correct: "6"
        },
        {
            questionId: "PT0000002",
            question: "Which element has the chemical symbol 'Na'?",
            answers: ["Nitrogen", "Neon", "Sodium", "Nickel"],
            correct: "Sodium"
        },
        {
            questionId: "PT0000003",
            question: "What is the most abundant element in the Earth's atmosphere?",
            answers: ["Oxygen", "Carbon", "Nitrogen", "Hydrogen"],
            correct: "Nitrogen"
        },
        {
            questionId: "PT0000004",
            question: "Which of these is a noble gas?",
            answers: ["Chlorine", "Helium", "Fluorine", "Bromine"],
            correct: "Helium"
        },
        {
            questionId: "PT0000005",
            question: "What is the atomic number of Gold?",
            answers: ["47", "79", "118", "29"],
            correct: "79"
        },
        {
            questionId: "PT0000006",
            question: "Which element is liquid at room temperature?",
            answers: ["Mercury", "Aluminum", "Copper", "Neon"],
            correct: "Mercury"
        },
        {
            questionId: "PT0000007",
            question: "What is the chemical symbol for Iron?",
            answers: ["Ir", "Fe", "In", "I"],
            correct: "Fe"
        },
        {
            questionId: "PT0000008",
            question: "Which element is essential for life and is found in all organic compounds?",
            answers: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
            correct: "Carbon"
        },
        {
            questionId: "PT0000009",
            question: "What is the most electronegative element?",
            answers: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
            correct: "Fluorine"
        },
        {
            questionId: "PT0000010",
            question: "Which of these is an alkali metal?",
            answers: ["Magnesium", "Aluminum", "Potassium", "Calcium"],
            correct: "Potassium"
        }
    ],
    physicsVocabulary: [
        {
            questionId: "PV0000001",
            question: "What is the SI unit of force?",
            answers: ["Watt", "Joule", "Newton", "Pascal"],
            correct: "Newton"
        },
        {
            questionId: "PV0000002",
            question: "What is the term for the resistance of an object to a change in its motion?",
            answers: ["Momentum", "Inertia", "Acceleration", "Velocity"],
            correct: "Inertia"
        },
        {
            questionId: "PV0000003",
            question: "What is the measure of the amount of matter in an object?",
            answers: ["Weight", "Density", "Volume", "Mass"],
            correct: "Mass"
        },
        {
            questionId: "PV0000004",
            question: "What is the term for the transfer of heat through direct contact?",
            answers: ["Conduction", "Convection", "Radiation", "Insulation"],
            correct: "Conduction"
        },
        {
            questionId: "PV0000005",
            question: "What is the SI unit of electric current?",
            answers: ["Volt", "Watt", "Ampere", "Ohm"],
            correct: "Ampere"
        },
        {
            questionId: "PV0000006",
            question: "What is the term for the change in velocity over time?",
            answers: ["Speed", "Acceleration", "Distance", "Displacement"],
            correct: "Acceleration"
        },
        {
            questionId: "PV0000007",
            question: "What is the SI unit of energy and work?",
            answers: ["Watt", "Joule", "Newton", "Pascal"],
            correct: "Joule"
        },
        {
            questionId: "PV0000008",
            question: "What is the term for the force that opposes the relative motion of surfaces in contact?",
            answers: ["Tension", "Friction", "Gravity", "Pressure"],
            correct: "Friction"
        },
        {
            questionId: "PV0000009",
            question: "What is the SI unit of power?",
            answers: ["Watt", "Joule", "Newton", "Volt"],
            correct: "Watt"
        },
        {
            questionId: "PV0000010",
            question: "What is the term for the ability to do work?",
            answers: ["Force", "Energy", "Momentum", "Velocity"],
            correct: "Energy"
        }
    ],
    numberSets: [
        {
            questionId: "NS0000001",
            question: "Which set does the number 5 belong to?",
            answers: ["Natural Numbers", "Irrational Numbers", "Complex Numbers", "All of the above"],
            correct: "All of the above"
        },
        {
            questionId: "NS0000002",
            question: "Which set does the number -3 belong to?",
            answers: ["Natural Numbers", "Whole Numbers", "Integers", "Rational Numbers"],
            correct: "Integers"
        },
        {
            questionId: "NS0000003",
            question: "Which set does the number 0 belong to?",
            answers: ["Natural Numbers", "Whole Numbers", "Integers", "All of the above"],
            correct: "All of the above"
        },
        {
            questionId: "NS0000004",
            question: "Which set does the number 1/2 belong to?",
            answers: ["Natural Numbers", "Whole Numbers", "Rational Numbers", "Irrational Numbers"],
            correct: "Rational Numbers"
        },
        {
            questionId: "NS0000005",
            question: "Which set does the number √2 belong to?",
            answers: ["Rational Numbers", "Irrational Numbers", "Complex Numbers", "Real Numbers"],
            correct: "Irrational Numbers"
        },
        {
            questionId: "NS0000006",
            question: "Which set does the number π belong to?",
            answers: ["Rational Numbers", "Irrational Numbers", "Complex Numbers", "Imaginary Numbers"],
            correct: "Irrational Numbers"
        },
        {
            questionId: "NS0000007",
            question: "Which set does the number i (imaginary unit) belong to?",
            answers: ["Real Numbers", "Irrational Numbers", "Complex Numbers", "Imaginary Numbers"],
            correct: "Complex Numbers"
        },
        {
            questionId: "NS0000008",
            question: "Which is the smallest set that contains all integers?",
            answers: ["Natural Numbers", "Whole Numbers", "Integers", "Rational Numbers"],
            correct: "Integers"
        },
        {
            questionId: "NS0000009",
            question: "Which is the largest set among the following?",
            answers: ["Natural Numbers", "Rational Numbers", "Irrational Numbers", "Real Numbers"],
            correct: "Real Numbers"
        },
        {
            questionId: "NS0000010",
            question: "Which set does the number 2.5 belong to?",
            answers: ["Natural Numbers", "Whole Numbers", "Integers", "Rational Numbers"],
            correct: "Rational Numbers"
        }
    ]
};
