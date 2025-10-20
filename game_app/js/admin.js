/**
 * Admin Portal JavaScript
 * Handles editing, saving, and managing quiz questions
 */

// Storage key for custom questions
const STORAGE_KEY = 'memoryRoad_customQuestions';

// Current editing state
let editingIndex = -1;
let isNewQuestion = false;

// Load questions from localStorage or use defaults
function loadQuestions() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Error parsing stored questions:', e);
            return [...quizQuestions];
        }
    }
    return [...quizQuestions];
}

// Save questions to localStorage
function saveQuestions(questions) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
        return true;
    } catch (e) {
        console.error('Error saving questions:', e);
        alert('Error saving questions. Please try again.');
        return false;
    }
}

// Render all questions in the list
function renderQuestions() {
    const questions = loadQuestions();
    const questionsList = document.getElementById('questionsList');

    questionsList.innerHTML = questions.map((q, index) => `
        <div class="question-card">
            <div class="question-header">
                <span class="question-category">${escapeHtml(q.category)}</span>
                <div class="question-actions">
                    <button class="btn-icon btn-edit" onclick="editQuestion(${index})">✏️ Edit</button>
                    <button class="btn-icon btn-delete" onclick="deleteQuestion(${index})">🗑️ Delete</button>
                </div>
            </div>
            <div class="question-text">${escapeHtml(q.question)}</div>
            <div class="question-options">
                ${q.options.map((opt, i) => `
                    <div class="option-item ${i === q.correct ? 'correct' : ''}">
                        ${i === q.correct ? '✓ ' : ''}${escapeHtml(opt)}
                    </div>
                `).join('')}
            </div>
            <div class="question-feedback">
                <strong>Feedback:</strong> ${escapeHtml(q.feedback)}
            </div>
        </div>
    `).join('');
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Edit a question
function editQuestion(index) {
    const questions = loadQuestions();
    const question = questions[index];

    editingIndex = index;
    isNewQuestion = false;

    // Populate modal
    document.getElementById('editCategory').value = question.category;
    document.getElementById('editQuestion').value = question.question;
    document.getElementById('editFeedback').value = question.feedback;

    // Populate options
    const optionInputs = document.querySelectorAll('.option-text');
    question.options.forEach((opt, i) => {
        if (optionInputs[i]) {
            optionInputs[i].value = opt;
        }
    });

    // Set correct answer
    const correctRadio = document.querySelector(`input[name="correctAnswer"][value="${question.correct}"]`);
    if (correctRadio) {
        correctRadio.checked = true;
    }

    // Show modal
    document.getElementById('editModal').classList.add('active');
}

// Delete a question
function deleteQuestion(index) {
    if (!confirm('Are you sure you want to delete this question?')) {
        return;
    }

    const questions = loadQuestions();
    questions.splice(index, 1);

    if (saveQuestions(questions)) {
        renderQuestions();
    }
}

// Add new question
function addNewQuestion() {
    editingIndex = -1;
    isNewQuestion = true;

    // Clear modal
    document.getElementById('editCategory').value = '';
    document.getElementById('editQuestion').value = '';
    document.getElementById('editFeedback').value = '';

    // Clear options
    document.querySelectorAll('.option-text').forEach(input => {
        input.value = '';
    });

    // Set first option as correct by default
    const firstRadio = document.querySelector('input[name="correctAnswer"][value="0"]');
    if (firstRadio) {
        firstRadio.checked = true;
    }

    // Show modal
    document.getElementById('editModal').classList.add('active');
}

// Save question (edit or new)
function saveQuestion() {
    // Collect form data
    const category = document.getElementById('editCategory').value.trim();
    const question = document.getElementById('editQuestion').value.trim();
    const feedback = document.getElementById('editFeedback').value.trim();

    const options = Array.from(document.querySelectorAll('.option-text')).map(input => input.value.trim());
    const correctRadio = document.querySelector('input[name="correctAnswer"]:checked');

    // Validate
    if (!category) {
        alert('Please enter a category');
        return;
    }
    if (!question) {
        alert('Please enter a question');
        return;
    }
    if (options.some(opt => !opt)) {
        alert('Please fill in all answer options');
        return;
    }
    if (!correctRadio) {
        alert('Please select the correct answer');
        return;
    }
    if (!feedback) {
        alert('Please enter feedback');
        return;
    }

    // Create question object
    const questionObj = {
        category: category,
        question: question,
        options: options,
        correct: parseInt(correctRadio.value),
        feedback: feedback
    };

    // Save to questions array
    const questions = loadQuestions();

    if (isNewQuestion) {
        questions.push(questionObj);
    } else {
        questions[editingIndex] = questionObj;
    }

    if (saveQuestions(questions)) {
        // Close modal and refresh
        closeModal();
        renderQuestions();
    }
}

// Close modal
function closeModal() {
    document.getElementById('editModal').classList.remove('active');
    editingIndex = -1;
    isNewQuestion = false;
}

// Restore default questions
function restoreDefaults() {
    if (!confirm('This will restore all default questions and delete any custom questions you\'ve added. Are you sure?')) {
        return;
    }

    localStorage.removeItem(STORAGE_KEY);
    renderQuestions();
    alert('Default questions restored!');
}

// Initialize admin portal
document.addEventListener('DOMContentLoaded', () => {
    renderQuestions();

    // Event listeners
    document.getElementById('addNewQuestionBtn').addEventListener('click', addNewQuestion);
    document.getElementById('restoreDefaultBtn').addEventListener('click', restoreDefaults);
    document.getElementById('saveQuestionBtn').addEventListener('click', saveQuestion);
    document.getElementById('cancelEditBtn').addEventListener('click', closeModal);

    // Close modal on background click
    document.getElementById('editModal').addEventListener('click', (e) => {
        if (e.target.id === 'editModal') {
            closeModal();
        }
    });
});
