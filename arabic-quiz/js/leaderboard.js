import { getFirestore, collection, getDocs, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Initialize Firestore
const db = getFirestore();

// Function to load leaderboard data
async function loadLeaderboard() {
    const leaderboardTableBody = document.getElementById('leaderboard-body'); // Get the table body element

    // Firestore query to fetch leaderboard data ordered by score in descending order
    const leaderboardRef = collection(db, 'leaderboard');
    const q = query(leaderboardRef, orderBy('score', 'desc'));

    try {
        const querySnapshot = await getDocs(q); // Get all documents from the leaderboard collection

        let rank = 1; // Start with rank 1
        querySnapshot.forEach((doc) => {
            const data = doc.data(); // Get the data from each document (user)
            const username = data.username; // Get the username from the document
            const score = data.score; // Get the score from the document

            // Create a new table row element
            const row = document.createElement('tr');

            // Create cells for rank, username, and score
            const rankCell = document.createElement('td');
            const usernameCell = document.createElement('td');
            const scoreCell = document.createElement('td');

            // Set the text content for each cell
            rankCell.textContent = rank; // Rank starts at 1 and increments
            usernameCell.textContent = username; // Set the username
            scoreCell.textContent = score; // Set the score

            // Append cells to the row
            row.appendChild(rankCell);
            row.appendChild(usernameCell);
            row.appendChild(scoreCell);

            // Append the row to the leaderboard table body
            leaderboardTableBody.appendChild(row);

            // Increment rank for the next user
            rank++;
        });
    } catch (error) {
        console.error('Error loading leaderboard data:', error); // Log any errors
    }
}

// Call the function to load leaderboard when the page is loaded
window.onload = function() {
    loadLeaderboard(); // Load leaderboard data on page load
};
