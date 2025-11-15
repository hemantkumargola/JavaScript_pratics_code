// This is external JS file

// Select the button and heading
const button = document.getElementById('changeBtn');
const heading = document.getElementById('greeting');

// Add click event
button.addEventListener('click', () => {
    heading.textContent = "Hello, Hemant!";
});
