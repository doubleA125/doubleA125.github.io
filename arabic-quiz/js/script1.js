// Set initial number of hearts if not already set
if (!localStorage.getItem('hearts')) {
    localStorage.setItem('hearts', 7); // Set hearts to 7 by default
}

// Set initial score if not already set
if (!localStorage.getItem('score')) {
    localStorage.setItem('score', 0); // Set score to 0 by default
}

// Import updateUserScore from score.js
import { updateUserScore } from './score.js';

// Load hearts into the DOM
function loadHearts() {
    const heartsContainer = document.getElementById('hearts-container'); // Get hearts container element
    heartsContainer.innerHTML = ''; // Clear previous hearts

    const hearts = localStorage.getItem('hearts'); // Get the current number of hearts from local storage
    for (let i = 0; i < hearts; i++) {
        const heart = document.createElement('span'); // Create a heart element
        heart.innerHTML = '❤️'; // You can replace this with an image or any other icon you prefer
        heartsContainer.appendChild(heart); // Append the heart to the container
    }
}

// Function to check the answer and handle correct or incorrect responses
function checkAnswer(button, result, questionNumber) {
    if (result === 'correct') {
        handleCorrectAnswer(questionNumber); // Handle the correct answer case
    } else {
        handleIncorrectAnswer(); // Handle the incorrect answer case
    }
}

// Handle correct answer: update score and move to next question
function handleCorrectAnswer(questionNumber) {
    updateUserScore(1); // Increment the user's score by 1
    
    if (questionNumber === 20) {
        window.location.href = 'completion.html'; // Navigate to the completion page if it's the last question
    } else {
        const nextQuestionNumber = questionNumber + 1; // Increment question number for the next question
        window.location.href = `question${nextQuestionNumber}.html`; // Navigate to the next question page
    }
}


// Handle incorrect answer: lose a heart, check if game over
function handleIncorrectAnswer() {
    loseHeart(); // Lose a heart if the answer is incorrect
}

// Function to handle losing a heart and deducting score
function loseHeart() {
    let hearts = localStorage.getItem('hearts'); // Get the current number of hearts from local storage
    hearts--; // Decrease the number of hearts

    // Deduct 1 point from the score
    let score = parseInt(localStorage.getItem('score')); // Get the current score
    score--; // Decrease the score by 1
    localStorage.setItem('score', score); // Save the updated score

    if (hearts > 0) {
        localStorage.setItem('hearts', hearts); // Save the updated number of hearts
        loadHearts(); // Reload hearts in the DOM to reflect the change
    } else {
        resetGame(); // If no hearts left, reset the game
    }
}

// Function to reset the game when all hearts are lost
function resetGame() {
    localStorage.setItem('hearts', 7); // Reset hearts to 7
    localStorage.setItem('score', 0); // Reset score to 0
    alert('Game Over! Restarting the quiz.'); // Show a game over alert
    window.location.href = 'question1.html'; // Redirect to the first question to restart the quiz
}

// Attach event listeners to all option buttons
document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', function() {
        const result = this.getAttribute('data-result'); // Get the result (correct/incorrect) from the button
        const questionNumber = parseInt(window.location.pathname.match(/question(\d+)\.html/)[1]); // Extract current question number from URL
        checkAnswer(this, result, questionNumber); // Call checkAnswer with the button and result
    });
});

// Load hearts and score when the page loads
window.onload = function() {
    loadHearts(); // Load the hearts into the hearts container
};
