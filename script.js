// Change background color function
document.getElementById("changeColorBtn").addEventListener("click", function() {
    const colors = ["#EAEAEA", "#FFD700", "#FF6347", "#98FB98", "#ADD8E6"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

// Accordion functionality
const accordionHeaders = document.querySelectorAll(".accordion-header");
accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});



// Display current date and time
function displayDateTime() {
    const now = new Date();
    document.getElementById("currentDateTime").innerText = now.toLocaleString();
}

// Call displayDateTime every second
setInterval(displayDateTime, 1000);
    
function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}


// Drag-and-drop functionality for the Subscribe button
let newX = 0, newY = 0, startX = 0, startY = 0;

const card = document.getElementById('subscribeBtn');   

card.addEventListener('mousedown', mouseDown);

function mouseDown(e) {
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
    
    
    const audio = new Audio('C:/Users/Admin/Downloads/click.mp3'); 
    audio.play();
}

function mouseMove(e) {
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    card.style.top = (card.offsetTop - newY) + 'px';
    card.style.left = (card.offsetLeft - newX) + 'px';
}

function mouseUp() {
    document.removeEventListener('mousemove', mouseMove);
}

// Light/Dark Mode Toggle
const toggleModeBtn = document.getElementById('toggleModeBtn');
const body = document.body;

// Load the user's preference from local storage
const currentMode = localStorage.getItem('mode') || 'light';
body.classList.add(currentMode);

toggleModeBtn.addEventListener('click', () => {
    // Toggle between light and dark mode
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('mode', 'dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('mode', 'light');
    }
});

// User Authentication
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginMessage = document.getElementById('loginMessage');

loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username);
        loginMessage.textContent = `Welcome, ${username}!`;
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline';
    } else {
        alert('Please enter a username.');
    }
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    loginMessage.textContent = '';
    loginBtn.style.display = 'inline';
    logoutBtn.style.display = 'none';
});

// Check if user is logged in on page load
window.onload = () => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        loginMessage.textContent = `Welcome back, ${storedUsername}!`;
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline';
    }
};
