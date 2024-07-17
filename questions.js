const allQuestions = [
    {
        question: "What is the chemical symbol for water?",
        answers: ["HO", "H2O", "OH", "H2"],
        correct: 1
    },
    {
        question: "What is the atomic number of carbon?",
        answers: ["6", "8", "12", "14"],
        correct: 0
    },
    {
        question: "What is the most abundant gas in Earth's atmosphere?",
        answers: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
        correct: 3
    },
    {
        question: "What element does 'O' represent on the periodic table?",
        answers: ["Osmium", "Oxygen", "Oxide", "Oganesson"],
        correct: 1
    },
    {
        question: "What is the chemical formula for table salt?",
        answers: ["NaCl", "KCl", "CaCl2", "MgCl2"],
        correct: 0
    },
    {
        question: "Who is known as the father of modern chemistry?",
        answers: ["Albert Einstein", "Isaac Newton", "Antoine Lavoisier", "Dmitri Mendeleev"],
        correct: 2
    },
    {
        question: "What is the pH of pure water?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "Which element is a noble gas?",
        answers: ["Hydrogen", "Oxygen", "Chlorine", "Argon"],
        correct: 3
    },
    {
        question: "What is the main component of natural gas?",
        answers: ["Methane", "Ethane", "Propane", "Butane"],
        correct: 0
    },
    {
        question: "What is the molar mass of water (H2O)?",
        answers: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"],
        correct: 1
    },
    {
        question: "Which element has the highest electronegativity?",
        answers: ["Fluorine", "Oxygen", "Nitrogen", "Chlorine"],
        correct: 0
    },
    {
        question: "What type of bond involves the sharing of electron pairs between atoms?",
        answers: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
        correct: 1
    },
    {
        question: "What is the process of converting a liquid into a gas called?",
        answers: ["Condensation", "Evaporation", "Sublimation", "Deposition"],
        correct: 2
    },
    {
        question: "Which of the following is an alkaline earth metal?",
        answers: ["Sodium", "Calcium", "Iron", "Copper"],
        correct: 1
    },
    {
        question: "What is the chemical name for baking soda?",
        answers: ["Sodium chloride", "Sodium bicarbonate", "Calcium carbonate", "Potassium chloride"],
        correct: 1
    },
    {
        question: "Which element is liquid at room temperature?",
        answers: ["Mercury", "Bromine", "Gallium", "Francium"],
        correct: 0
    },
    {
        question: "What is the charge of an electron?",
        answers: ["+1", "0", "-1", "-2"],
        correct: 2
    },
    {
        question: "What is the common name for the chemical compound H2SO4?",
        answers: ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
        correct: 1
    },
    {
        question: "Which element has the atomic number 1?",
        answers: ["Helium", "Hydrogen", "Lithium", "Beryllium"],
        correct: 1
    },
    {
        question: "What is the chemical formula for ammonia?",
        answers: ["NH3", "NO2", "N2O", "NO3"],
        correct: 0
    },
    {
        question: "What is the hardest naturally occurring substance on Earth?",
        answers: ["Quartz", "Topaz", "Corundum", "Diamond"],
        correct: 3
    },
    {
        question: "What is the name of the compound with the formula CO2?",
        answers: ["Carbon monoxide", "Carbon dioxide", "Carbon trioxide", "Carbide"],
        correct: 1
    },
    {
        question: "What is the main acid found in vinegar?",
        answers: ["Citric acid", "Acetic acid", "Lactic acid", "Sulfuric acid"],
        correct: 1
    },
    {
        question: "Which scientist developed the periodic table?",
        answers: ["Niels Bohr", "Marie Curie", "Dmitri Mendeleev", "Albert Einstein"],
        correct: 2
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: ["Au", "Ag", "Pb", "Pt"],
        correct: 0
    },
    {
        question: "What is the main gas found in the air we breathe?",
        answers: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
        correct: 2
    },
    {
        question: "Which of the following elements is a halogen?",
        answers: ["Lithium", "Magnesium", "Fluorine", "Neon"],
        correct: 2
    },
    {
        question: "What is the name of the reaction where two substances combine to form a new compound?",
        answers: ["Decomposition", "Combination", "Single displacement", "Double displacement"],
        correct: 1
    },
    {
        question: "Which compound is commonly known as laughing gas?",
        answers: ["Nitrous oxide", "Nitric oxide", "Nitrogen dioxide", "Ammonia"],
        correct: 0
    },
    {
        question: "What is the process of a solid changing directly to a gas called?",
        answers: ["Evaporation", "Condensation", "Sublimation", "Deposition"],
        correct: 2
    },
    {
        question: "Which element is known as the 'king of chemicals'?",
        answers: ["Oxygen", "Hydrogen", "Sulfur", "Carbon"],
        correct: 3
    },
    {
        question: "What is the chemical name for rust?",
        answers: ["Iron sulfate", "Iron chloride", "Iron oxide", "Iron nitrate"],
        correct: 2
    },
    {
        question: "Which element is used in pencils?",
        answers: ["Lead", "Carbon", "Graphite", "Sulfur"],
        correct: 2
    },
    {
        question: "What is the formula for calculating the number of moles?",
        answers: ["Mass/Volume", "Volume/Number of Particles", "Mass/Molar Mass", "Number of Particles/Molar Mass"],
        correct: 2
    },
    {
        question: "What is the primary element found in organic compounds?",
        answers: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon"],
        correct: 3
    },
    {
        question: "Which of the following is a transition metal?",
        answers: ["Sodium", "Magnesium", "Iron", "Chlorine"],
        correct: 2
    },
    {
        question: "What is the molecular geometry of methane (CH4)?",
        answers: ["Linear", "Trigonal planar", "Tetrahedral", "Bent"],
        correct: 2
    },
    {
        question: "What is the common name for NaOH?",
        answers: ["Baking soda", "Bleach", "Lye", "Salt"],
        correct: 2
    },
    {
        question: "Which acid is commonly found in car batteries?",
        answers: ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Phosphoric acid"],
        correct: 1
    },
     {
        question: "What is the atomic number of oxygen?",
        answers: ["6", "7", "8", "9"],
        correct: 2
    },
    {
        question: "Which of the following is not a state of matter?",
        answers: ["Solid", "Liquid", "Gas", "Energy"],
        correct: 3
    },
    {
        question: "What is the chemical symbol for silver?",
        answers: ["Si", "Ag", "Au", "Sr"],
        correct: 1
    },
    {
        question: "Which element is essential for life and is found in all organic compounds?",
        answers: ["Hydrogen", "Oxygen", "Nitrogen", "Carbon"],
        correct: 3
    },
    {
        question: "What is the pH of a neutral solution?",
        answers: ["0", "7", "14", "10"],
        correct: 1
    },
    {
        question: "Which of these is not a noble gas?",
        answers: ["Neon", "Argon", "Krypton", "Nitrogen"],
        correct: 3
    },
    {
        question: "What is the chemical formula for glucose?",
        answers: ["C6H12O6", "C12H22O11", "CH3COOH", "NaHCO3"],
        correct: 0
    },
    {
        question: "Which element has the chemical symbol 'Fe'?",
        answers: ["Iron", "Fluorine", "Francium", "Iodine"],
        correct: 0
    },
    {
        question: "What is the most abundant element in the Earth's crust?",
        answers: ["Silicon", "Aluminum", "Iron", "Oxygen"],
        correct: 3
    },
    {
        question: "Which of these is an alkali metal?",
        answers: ["Magnesium", "Calcium", "Potassium", "Aluminum"],
        correct: 2
    }
];

