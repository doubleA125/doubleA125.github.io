document.addEventListener('DOMContentLoaded', (event) => {
    // Load data from local storage when the page loads
    const savedData = localStorage.getItem('inputData');
    if (savedData) {
        document.getElementById('inputField').value = savedData;
    }

    // Add click event listener to the save button
    document.getElementById('saveButton').addEventListener('click', () => {
        const inputData = document.getElementById('inputField').value;
        localStorage.setItem('inputData', inputData);
        alert('Data saved!');
    });
});