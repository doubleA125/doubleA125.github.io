import { db, auth } from './fireBase-config.js';
import { doc, setDoc, getDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

async function updateUserScore(delta) {
    const user = auth.currentUser;
    if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            await updateDoc(userRef, {
                score: increment(delta),
                timestamp: new Date()
            });
        } else {
            await setDoc(userRef, {
                username: user.email,
                score: delta,
                timestamp: new Date()
            });
        }
    } else {
        console.error('No authenticated user found.');
    }
}

export { updateUserScore };

// Load hearts when the page loads
window.onload = function() {
    loadHearts();
    const username = localStorage.getItem('username');
    if (username) {
        // Display username or handle accordingly
    }
};

