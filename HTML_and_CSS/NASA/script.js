const API_KEY = 'dQlzYgax7seYiNRLOm76pGxc0Y5l3e1JbYbeUPfj'; // NASA API key
const baseUrl = 'https://api.nasa.gov/planetary/apod';

// Current Date
const currentDate = new Date().toISOString().split('T')[0];

// Function to format date for display
function formatDate(date) {
    return new Date(date).toISOString().split('T')[0];
}

// Function to display image data in the UI
function displayImageData(data) {
    const container = document.getElementById('current-image-container');
    container.innerHTML = `
        <h1 class="image-title">Picture On ${data.date}</h1>
        <img src="${data.url}" alt="${data.title}">
        <h2>${data.title}</h2>
        <p class="image-explanation">${data.explanation}</p>
    `;
}

// Function to get current day's image
async function getCurrentImageOfTheDay() {
    try {
        const response = await fetch(`${baseUrl}?api_key=${API_KEY}&date=${currentDate}`);
        const data = await response.json();
        displayImageData(data);
    } catch (error) {
        console.error('Error fetching current image:', error);
    }
}

// Function to get image for selected date
async function getImageOfTheDay(date) {
    try {
        const response = await fetch(`${baseUrl}?api_key=${API_KEY}&date=${date}`);
        const data = await response.json();
        displayImageData(data);
        saveSearch(date);
        addSearchToHistory();
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}

// Function to save search to local storage
function saveSearch(date) {
    let searches = JSON.parse(localStorage.getItem('searches')) || [];
    if (!searches.includes(date)) {
        searches.push(date);
        localStorage.setItem('searches', JSON.stringify(searches));
    }
}

// Function to add searches to history
function addSearchToHistory() {
    const searches = JSON.parse(localStorage.getItem('searches')) || [];
    const historyList = document.getElementById('search-history');
    historyList.innerHTML = '';

    searches.forEach(date => {
        const li = document.createElement('li');
        li.textContent = date;
        li.addEventListener('click', () => getImageOfTheDay(date));
        historyList.appendChild(li);
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    getCurrentImageOfTheDay();
    addSearchToHistory();
});

document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const date = document.getElementById('search-input').value;
    getImageOfTheDay(date);
});