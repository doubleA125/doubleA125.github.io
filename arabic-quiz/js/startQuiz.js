import { auth } from './fireBase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

export function startQuiz() {
  onAuthStateChanged(auth, (user) => {
    window.location.href = "./question1.html";
  });
}

// Load hearts when the page loads
window.onload = function() {
    loadHearts();
    const username = localStorage.getItem('username');
    if (username) {
        // Display username or handle accordingly
    }
};
