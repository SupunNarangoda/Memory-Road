/**
 * Memory Road - Main Entry Point
 *
 * Initializes the game when the page loads
 */

/**
 * Initialize game on page load
 */
function initGame() {
    createBoard();
    loadHighScore();
}

// Start game when DOM is fully loaded
window.addEventListener('DOMContentLoaded', initGame);

// Log game info to console
console.log('%c🧠 Memory Road', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cA dementia awareness game for Australia', 'font-size: 12px; color: #764ba2;');
console.log('%cDeveloped with AI assistance for social impact', 'font-size: 10px; color: #666;');
