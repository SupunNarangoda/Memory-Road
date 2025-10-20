/**
 * Memory Road - Game Logic
 *
 * Core game mechanics including player movement, dice rolling,
 * quiz management, and score tracking.
 */

/**
 * Game State Object
 * Tracks all current game progress and player statistics
 */
let gameState = {
    position: 0,
    score: 0,
    questionsAnswered: 0,
    correctAnswers: 0,
    currentDiceRoll: 0,
    isMoving: false,
    hasAnsweredQuestion: false
};

/**
 * Initialize game board
 * Creates all tiles with appropriate styling and labels
 */
function createBoard() {
    const board = document.getElementById('gameBoard');
    board.innerHTML = '';

    for (let i = 1; i <= TOTAL_TILES; i++) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.id = `tile-${i}`;

        if (MEMORY_TILES.includes(i)) {
            tile.classList.add('special');
            tile.innerHTML = `<div class="tile-number">${i}</div><div class="tile-label">🌟 Milestone</div>`;
        } else if (i % 3 === 0) {
            tile.classList.add('memory');
            tile.innerHTML = `<div class="tile-number">${i}</div><div class="tile-label">💭 Memory</div>`;
        } else {
            tile.innerHTML = `<div class="tile-number">${i}</div><div class="tile-label">Path</div>`;
        }

        board.appendChild(tile);
    }

    updatePlayerPosition();
}

/**
 * Start a new game
 * Resets all game state and initializes the board
 */
function startGame() {
    gameState = {
        position: 0,
        score: 0,
        questionsAnswered: 0,
        correctAnswers: 0,
        currentDiceRoll: 0,
        isMoving: false,
        hasAnsweredQuestion: false
    };

    updateUI();
    switchScreen('gameScreen');
    createBoard();
    updatePlayerPosition();
}

/**
 * Roll the dice
 * Animates dice roll and initiates player movement
 */
function rollDice() {
    if (gameState.isMoving) return;

    const rollButton = document.getElementById('rollButton');
    const diceDisplay = document.getElementById('diceDisplay');

    rollButton.disabled = true;
    diceDisplay.classList.add('rolling');

    // Simulate dice roll animation
    let rollCount = 0;
    const rollInterval = setInterval(() => {
        diceDisplay.textContent = Math.floor(Math.random() * 6) + 1;
        rollCount++;

        if (rollCount >= 10) {
            clearInterval(rollInterval);
            const finalRoll = Math.floor(Math.random() * 6) + 1;
            diceDisplay.textContent = finalRoll;
            diceDisplay.classList.remove('rolling');

            gameState.currentDiceRoll = finalRoll;
            movePlayer(finalRoll);
        }
    }, 100);
}

/**
 * Move player token across the board
 * @param {number} spaces - Number of spaces to move
 */
function movePlayer(spaces) {
    gameState.isMoving = true;
    const newPosition = Math.min(gameState.position + spaces, TOTAL_TILES);

    let currentPos = gameState.position;
    const moveInterval = setInterval(() => {
        if (currentPos < newPosition) {
            currentPos++;
            gameState.position = currentPos;
            updatePlayerPosition();
            updateUI();
        } else {
            clearInterval(moveInterval);
            gameState.isMoving = false;

            // Check if game is complete
            if (gameState.position >= TOTAL_TILES) {
                setTimeout(() => showResults(), 1000);
            } else {
                // Show quiz for this tile
                setTimeout(() => showQuiz(), 500);
            }
        }
    }, 300);
}

/**
 * Update player token visual position on the board
 */
function updatePlayerPosition() {
    const token = document.getElementById('playerToken');
    const tile = document.getElementById(`tile-${Math.max(1, gameState.position)}`);

    if (tile) {
        const rect = tile.getBoundingClientRect();
        const boardRect = document.getElementById('gameBoard').getBoundingClientRect();

        token.style.left = (rect.left - boardRect.left + rect.width / 2 - 15) + 'px';
        token.style.top = (rect.top - boardRect.top + rect.height / 2 - 15) + 'px';
    }
}

/**
 * Display a random quiz question
 */
function showQuiz() {
    const modal = document.getElementById('quizModal');

    // Load questions from localStorage if available, otherwise use defaults
    const storedQuestions = localStorage.getItem('memoryRoad_customQuestions');
    const questionsToUse = storedQuestions ? JSON.parse(storedQuestions) : quizQuestions;

    const question = questionsToUse[Math.floor(Math.random() * questionsToUse.length)];

    document.getElementById('quizCategory').textContent = question.category;
    document.getElementById('quizQuestion').textContent = question.question;

    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';

    // Store current question for answer checking
    window.currentQuestion = question;

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = option;
        optionDiv.setAttribute('data-index', index);
        optionDiv.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(optionDiv);
    });

    document.getElementById('quizFeedback').classList.remove('show', 'correct', 'incorrect');
    document.getElementById('continueButton').style.display = 'none';
    gameState.hasAnsweredQuestion = false;

    modal.classList.add('active');
}

/**
 * Handle quiz answer selection
 * Provides gentle feedback and educational content
 * @param {number} selectedIndex - Index of selected answer
 */
function selectAnswer(selectedIndex) {
    if (gameState.hasAnsweredQuestion) return;

    gameState.hasAnsweredQuestion = true;
    gameState.questionsAnswered++;

    const question = window.currentQuestion;
    const correctIndex = question.correct;
    const feedback = question.feedback;

    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.style.pointerEvents = 'none');

    options[selectedIndex].classList.add('selected');

    setTimeout(() => {
        // Show the correct answer
        options[correctIndex].classList.add('correct');

        const feedbackDiv = document.getElementById('quizFeedback');
        const isCorrect = selectedIndex === correctIndex;

        if (isCorrect) {
            gameState.correctAnswers++;
            gameState.score += 10;
            feedbackDiv.innerHTML = `
                <h4>✅ That's Right!</h4>
                <p>${feedback}</p>
            `;
            feedbackDiv.classList.add('correct');
            feedbackDiv.classList.remove('incorrect');
            playSound('success');
        } else {
            // Mark wrong answer but provide gentle correction
            options[selectedIndex].classList.add('incorrect');
            feedbackDiv.innerHTML = `
                <h4>💙 Let me help you remember...</h4>
                <p>You selected: <strong>${question.options[selectedIndex]}</strong></p>
                <p>The correct answer is: <strong>${question.options[correctIndex]}</strong></p>
                <p>${feedback}</p>
                <p style="margin-top: 15px; font-style: italic; color: #666;">It's okay if you didn't remember this one. Our memories work differently, and some things are easier to recall than others.</p>
            `;
            feedbackDiv.classList.add('incorrect');
            feedbackDiv.classList.remove('correct');
        }

        feedbackDiv.classList.add('show');
        document.getElementById('continueButton').style.display = 'block';
        updateUI();
    }, 500);
}

/**
 * Close quiz modal and re-enable dice rolling
 */
function closeQuiz() {
    const modal = document.getElementById('quizModal');
    modal.classList.remove('active');
    document.getElementById('rollButton').disabled = false;
}

/**
 * Display final results screen
 * Shows therapeutic messaging based on performance
 */
function showResults() {
    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('correctAnswers').textContent = gameState.correctAnswers;
    document.getElementById('totalQuestions').textContent = gameState.questionsAnswered;

    // Generate encouraging message based on participation
    let message = '';

    if (gameState.questionsAnswered >= 10) {
        message = `Wonderful job today! You've shared ${gameState.questionsAnswered} precious memories from your life. Each memory you recalled shows the richness of your experiences. Your story matters, and taking time to remember these moments is valuable and therapeutic.`;
    } else if (gameState.questionsAnswered >= 6) {
        message = `Great work remembering and sharing today! You've explored ${gameState.questionsAnswered} special memories. Reminiscing about your life experiences can bring comfort and connection. Thank you for taking this journey down memory road.`;
    } else if (gameState.questionsAnswered >= 3) {
        message = `Thank you for sharing ${gameState.questionsAnswered} memories with us today. Every memory recalled is a success! Some days remembering is easier than others, and that's perfectly normal. Your experiences and feelings are always valid.`;
    } else {
        message = `Thank you for spending time with us today. Even remembering just a little bit is meaningful. Your memories are important, and we're here to support you on this journey. You're doing great!`;
    }

    document.getElementById('resultsMessage').textContent = message;

    // Show encouraging fact
    const randomFact = dementiaFacts[Math.floor(Math.random() * dementiaFacts.length)];
    document.getElementById('finalFact').textContent = randomFact;

    // Save high score
    saveHighScore();

    switchScreen('resultsScreen');
}

/**
 * Save high score to localStorage
 */
function saveHighScore() {
    const highScore = localStorage.getItem('memoryRoadHighScore') || 0;
    if (gameState.score > highScore) {
        localStorage.setItem('memoryRoadHighScore', gameState.score);
    }
}

/**
 * Load and display high score
 */
function loadHighScore() {
    return localStorage.getItem('memoryRoadHighScore') || 0;
}

/**
 * Show high score alert
 */
function showHighScore() {
    const highScore = loadHighScore();
    alert(`🏆 Your High Score: ${highScore} Memory Points\n\nKeep playing to learn more about dementia awareness!`);
}

/**
 * Quit current game with confirmation
 */
function quitGame() {
    if (confirm('Are you sure you want to quit? Your progress will be lost.')) {
        switchScreen('menuScreen');
    }
}

/**
 * Return to main menu
 */
function backToMenu() {
    switchScreen('menuScreen');
}

/**
 * Play sound effect
 * @param {string} type - Sound type to play
 *
 * NOTE: Sound files would be generated using AI audio tools
 * AI PROMPT: "Generate gentle, soothing game sound effects suitable for
 * elderly users: success chime, dice roll, and soft background music"
 */
function playSound(type) {
    // Placeholder for sound effects
    // In production: new Audio('assets/sounds/' + type + '.mp3').play();
    console.log('Playing sound:', type);
}

// Handle window resize for responsive player token positioning
window.addEventListener('resize', () => {
    if (gameState.position > 0) {
        updatePlayerPosition();
    }
});
