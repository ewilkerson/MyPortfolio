// Interactivity 1: Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    // Toggles the dark-mode class on the body tag
    body.classList.toggle('dark-mode');

    // Updates the button text dynamically
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Toggle Light Mode';
    } else {
        themeToggleBtn.textContent = 'Toggle Dark Mode';
    }
});

// Interactivity 2: Dynamic Greeting based on time of day
const helloBtn = document.getElementById('hello-btn');
const greetingMessage = document.getElementById('greeting-message');

helloBtn.addEventListener('click', () => {
    const currentHour = new Date().getHours();
    let greetingText;

    if (currentHour < 12) {
        greetingText = "Good morning! I'd love to connect. Please email me at developer@example.com.";
    } else if (currentHour < 18) {
        greetingText = "Good afternoon! I'd love to connect. Please email me at developer@example.com.";
    } else {
        greetingText = "Good evening! I'd love to connect. Please email me at developer@example.com.";
    }

    // Update DOM element
    greetingMessage.textContent = greetingText;
    greetingMessage.style.color = body.classList.contains('dark-mode') ? "#2ecc71" : "#27ae60";
    greetingMessage.style.fontWeight = "bold";
    greetingMessage.style.marginTop = "1rem";
});