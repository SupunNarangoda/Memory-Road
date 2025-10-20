/**
 * Memory Road - UI Controller
 *
 * Manages all UI updates, screen transitions, and visual feedback
 */

/**
 * Update all UI elements with current game state
 */
function updateUI() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('position').textContent = gameState.position;

    const progress = (gameState.position / TOTAL_TILES) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

/**
 * Switch between different game screens
 * @param {string} screenId - ID of screen to display
 */
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

/**
 * Toggle About section visibility
 */
function toggleAbout() {
    const aboutSection = document.getElementById('aboutSection');
    aboutSection.style.display = aboutSection.style.display === 'none' ? 'block' : 'none';
}
