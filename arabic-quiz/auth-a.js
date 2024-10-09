// auth.js continued
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Logged in successfully
            const user = userCredential.user;
            console.log('User logged in:', user.email);
        })
        .catch((error) => {
            console.error('Error logging in:', error.message);
        });
}

export { login };

// Load hearts when the page loads
window.onload = function() {
    loadHearts();
    const username = localStorage.getItem('username');
    if (username) {
        // Display username or handle accordingly
    }
};
