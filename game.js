let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let timeLeft = 90;
let timerInterval;
let isSoundOn = true;

let startMenu;
let gameContent;
let startButton;
let getTutoringButton;
let backgroundMusic;
let correctSound;
let incorrectSound;
let volumeToggle;

function initializeGame() {
    startMenu = document.getElementById('start-menu');
    gameContent = document.getElementById('game-content');
    startButton = document.getElementById('start-button');
    getTutoringButton = document.getElementById('get-tutoring-button');
    backgroundMusic = document.getElementById('backgroundMusic');
    correctSound = document.getElementById('correctSound');
    incorrectSound = document.getElementById('incorrectSound');
    volumeToggle = document.getElementById('volume-toggle');

    startButton.addEventListener('click', startGame);
    getTutoringButton.addEventListener('click', openTutoringPage);
    volumeToggle.addEventListener('click', toggleSound);
}

function openTutoringPage() {
    window.open('https://www.palmbeachstate.edu/slc/', '_blank');
}

function startGame() {
    startMenu.classList.add('hidden');
    gameContent.classList.remove('hidden');
    if (isSoundOn) {
        backgroundMusic.play();
    }
    shuffleArray(allQuestions);
    loadQuestion();
    startTimer();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    const question = allQuestions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.className = 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded fade-in';
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(index) {
    const question = allQuestions[currentQuestion];
    const resultElement = document.getElementById('result');
    const selectedButton = document.getElementById('answers').children[index];
    
    if (index === question.correct) {
        resultElement.textContent = "Correct!";
        resultElement.className = 'text-green-600 fade-in';
        selectedButton.classList.remove('bg-blue-500', 'hover:bg-blue-600');
        selectedButton.classList.add('bg-green-500', 'hover:bg-green-600');
        if (isSoundOn) {
            correctSound.play();
        }
        correctAnswers++;
    } else {
        resultElement.textContent = "Incorrect. The correct answer was: " + question.answers[question.correct];
        resultElement.className = 'text-red-600 fade-in';
        selectedButton.classList.remove('bg-blue-500', 'hover:bg-blue-600');
        selectedButton.classList.add('bg-red-500', 'hover:bg-red-600');
        if (isSoundOn) {
            incorrectSound.play();
        }
        incorrectAnswers++;
    }
    
    document.getElementById('score').textContent = `Correct: ${correctAnswers} | Incorrect: ${incorrectAnswers}`;
    currentQuestion++;
    
    setTimeout(() => {
        if (timeLeft > 0 && currentQuestion < allQuestions.length) {
            loadQuestion();
        } else if (timeLeft > 0) {
            endGame();
        }
    }, 1000);
}

function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = `Time left: ${timeLeft} seconds`;
    
    if (timeLeft <= 17) {
        timerElement.classList.add('timer-warning');
    } else {
        timerElement.classList.remove('timer-warning');
    }
}

function endGame() {
    clearInterval(timerInterval);
    if (isSoundOn) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    }
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h1 class="text-3xl font-bold text-center mb-6 text-blue-600">Quiz Completed!</h1>
        <p class="text-xl text-center mb-2">Time's up!</p>
        <p class="text-lg text-center mb-4">Your final score:</p>
        <p class="text-center mb-2">Correct answers: ${correctAnswers}</p>
        <p class="text-center mb-4">Incorrect answers: ${incorrectAnswers}</p>
        <button id="get-tutoring-button" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded block mx-auto mb-4 w-full md:w-1/2">Get Free Tutoring</button>
        <button id="restart-button" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block mx-auto w-full md:w-1/2">Play Again</button>
    `;
    document.getElementById('get-tutoring-button').addEventListener('click', openTutoringPage);
    document.getElementById('restart-button').addEventListener('click', restartGame);
}

function restartGame() {
    currentQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    timeLeft = 90;
    const container = document.getElementById('game-container');
    container.innerHTML = `
        <h1 class="text-3xl font-bold text-center mb-6 text-blue-600">Who Wants To Be A Chemistry Buff?</h1>
        <div id="volume-control" class="text-right mb-4">
            <button id="volume-toggle" class="text-2xl">
                <i class="fas fa-volume-${isSoundOn ? 'up' : 'mute'}"></i>
            </button>
        </div>
        <div id="start-menu" class="text-center">
            <button id="get-tutoring-button" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4 w-full md:w-1/2 mx-auto">Get Free Tutoring</button>
            <br>
            <button id="start-button" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full md:w-1/2 mx-auto">Start Game</button>
        </div>
        <div id="game-content" class="hidden">
            <div id="timer" class="text-2xl font-bold text-center mb-4"></div>
            <div id="question-container" class="mb-6">
                <p id="question" class="text-xl font-semibold mb-4"></p>
                <div id="answers" class="grid grid-cols-1 gap-4"></div>
            </div>
            <div id="result" class="text-center mb-4 font-bold"></div>
            <p id="score" class="text-center font-semibold"></p>
        </div>
    `;
    initializeGame();
}

function toggleSound() {
    isSoundOn = !isSoundOn;
    const icon = volumeToggle.querySelector('i');
    if (isSoundOn) {
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
        backgroundMusic.play();
    } else {
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
        backgroundMusic.pause();
    }
}

// Initialize the game when the script loads
document.addEventListener('DOMContentLoaded', initializeGame);
