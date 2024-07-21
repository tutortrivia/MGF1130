const startButton = document.getElementById('start-button');
const gameContent = document.getElementById('game-content');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const startMenu = document.getElementById('start-menu');
const volumeToggle = document.getElementById('volume-toggle');
const backgroundMusic = document.getElementById('backgroundMusic');
const correctSound = document.getElementById('correctSound');
const incorrectSound = document.getElementById('incorrectSound');
const personalBestSound = new Audio('personalBest.mp3');
let librarySelect = document.getElementById('library-select');
let gameTitle = document.getElementById('game-title');

let currentQuestionIndex = 0;
let score = 0;
let incorrectAnswers = 0;
let timer;
let timeLeft = 90;
let isMuted = false;
let isTransitioning = false;
let sessionBest = {
    attempted: 0,
    correct: 0,
    incorrect: 0,
    percentage: 0
};
let currentLibrary = 'Python';
let currentQuestions = [];

function getAvailableLibraries() {
    return Object.keys(allQuestions);
}

function populateLibrarySelect() {
    const libraries = getAvailableLibraries();
    librarySelect.innerHTML = libraries.map(lib => `<option value="${lib}">${lib.charAt(0).toUpperCase() + lib.slice(1)}</option>`).join('');
    librarySelect.value = currentLibrary;
    librarySelect.addEventListener('change', updateGameTitle);
}

function updateGameTitle() {
    currentLibrary = librarySelect.value;
    gameTitle.textContent = `Who Wants To Be A ${currentLibrary.charAt(0).toUpperCase() + currentLibrary.slice(1)} Buff?`;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

async function startGame() {
    currentLibrary = librarySelect.value;
    currentQuestions = await loadQuestionLibrary(currentLibrary);
    if (!currentQuestions) {
        alert("Failed to load questions. Please try again.");
        return;
    }
    shuffleArray(currentQuestions);
    currentQuestionIndex = 0;
    score = 0;
    incorrectAnswers = 0;
    updateScore();
    timeLeft = 90;
    startMenu.classList.add('hidden');
    gameContent.classList.remove('hidden');
    displayQuestion();
    startTimer();
    if (!isMuted) {
        backgroundMusic.play();
    }
}

function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length || timeLeft <= 0) {
        endGame();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    answersElement.innerHTML = '';

    // Shuffle the answers
    const shuffledAnswers = [...question.answers];
    shuffleArray(shuffledAnswers);

    shuffledAnswers.forEach((answer) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('bg-blue-500', 'hover:bg-blue-600', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'w-full');
        button.addEventListener('click', () => {
            if (!isTransitioning) {
                checkAnswer(answer, question.correct);
            }
        });
        answersElement.appendChild(button);
    });

    // Set neutral placeholder text
    resultElement.textContent = 'Good Luck!';
    resultElement.classList.add('text-blue-500');
}

function checkAnswer(selectedAnswer, correctAnswer) {
    isTransitioning = true;
    const buttons = answersElement.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        if (buttons[i].textContent === correctAnswer) {
            buttons[i].classList.remove('bg-blue-500', 'hover:bg-blue-600');
            buttons[i].classList.add('bg-green-500');
        } else if (buttons[i].textContent === selectedAnswer) {
            buttons[i].classList.remove('bg-blue-500', 'hover:bg-blue-600');
            buttons[i].classList.add('bg-red-500');
        }
    }

    if (selectedAnswer === correctAnswer) {
        score++;
        resultElement.textContent = 'Correct!';
        resultElement.classList.remove('text-blue-500');
        resultElement.classList.add('text-green-500');
        if (!isMuted) correctSound.play();
    } else {
        incorrectAnswers++;
        resultElement.textContent = 'Incorrect!';
        resultElement.classList.remove('text-blue-500');
        resultElement.classList.add('text-red-500');
        if (!isMuted) incorrectSound.play();
    }

    updateScore();

    setTimeout(() => {
        resultElement.textContent = 'Good Luck!';
        resultElement.classList.remove('text-green-500', 'text-red-500');
        resultElement.classList.add('text-blue-500');
        currentQuestionIndex++;
        displayQuestion();
        isTransitioning = false;
    }, 1500);
}

function updateScore() {
    scoreElement.textContent = `Score: ${score} | Incorrect: ${incorrectAnswers}`;
}

function startTimer() {
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerElement.textContent = `Time left: ${timeLeft}s`;
    if (timeLeft <= 17) {
        timerElement.classList.add('timer-warning');
        timerElement.style.animation = 'timerPulse 1s ease-in-out infinite';
    } else {
        timerElement.classList.remove('timer-warning');
        timerElement.style.animation = 'none';
    }
}

function endGame() {
    clearInterval(timer);
    gameContent.classList.add('hidden');
    startMenu.classList.remove('hidden');

    const attempted = score + incorrectAnswers;
    const percentageCorrect = attempted > 0 ? (score / attempted * 100).toFixed(2) : 0;

    let resultsHTML = `
        <h2 class="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p>Topics Covered: ${currentLibrary.charAt(0).toUpperCase() + currentLibrary.slice(1)} Trivia</p>
        <p>Questions Attempted: ${attempted}</p>
        <p>Correct Answers: ${score}</p>
        <p>Incorrect Answers: ${incorrectAnswers}</p>
        <p>Percentage Correct: ${percentageCorrect}%</p>
    `;

    let personalBestAchieved = false;

    if (attempted > sessionBest.attempted) {
        sessionBest.attempted = attempted;
        resultsHTML += `<p class="text-green-500 font-bold outline-gold">Personal Best For This Session: Questions Attempted!</p>`;
        personalBestAchieved = true;
    }
    if (score > sessionBest.correct) {
        sessionBest.correct = score;
        resultsHTML += `<p class="text-green-500 font-bold outline-gold">Personal Best For This Session: Correct Answers!</p>`;
        personalBestAchieved = true;
    }
    if (incorrectAnswers > sessionBest.incorrect) {
        sessionBest.incorrect = incorrectAnswers;
    }
    if (parseFloat(percentageCorrect) > sessionBest.percentage) {
        sessionBest.percentage = parseFloat(percentageCorrect);
        resultsHTML += `<p class="text-green-500 font-bold outline-gold">Personal Best For This Session: Percentage Correct!</p>`;
        personalBestAchieved = true;
    }

    if (personalBestAchieved && !isMuted) {
        personalBestSound.play();
    }

    resultsHTML += `
        <button id="play-again" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Play Again</button>
    `;

    startMenu.innerHTML = resultsHTML;

    document.getElementById('play-again').addEventListener('click', showStartMenu);

    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}

function showStartMenu() {
    startMenu.innerHTML = `
        <select id="library-select" class="bg-white border border-gray-300 rounded-md py-2 px-4 mb-4 w-full md:w-1/2 mx-auto"></select>
        <button id="get-tutoring-button" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4 w-full md:w-1/2 mx-auto">Learn Through Games</button>
        <br>
        <button id="start-button" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full md:w-1/2 mx-auto">Start Game</button>
    `;
    
    librarySelect = document.getElementById('library-select');
    gameTitle = document.getElementById('game-title');
    
    populateLibrarySelect();
    updateGameTitle();
    
    document.getElementById('start-button').addEventListener('click', startGame);
    document.getElementById('get-tutoring-button').addEventListener('click', getTutoring);
}

function toggleVolume() {
    isMuted = !isMuted;
    backgroundMusic.muted = isMuted;
    correctSound.muted = isMuted;
    incorrectSound.muted = isMuted;
    personalBestSound.muted = isMuted;
    volumeToggle.innerHTML = isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
}

function getTutoring() {
    window.open('https://mindcraftmagazine.beehiiv.com/subscribe', '_blank');
}



// Initialize the game
showStartMenu();

// Event listeners
volumeToggle.addEventListener('click', toggleVolume);
