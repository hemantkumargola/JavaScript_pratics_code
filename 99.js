// External JavaScript
const button = document.getElementById('changeBtn');
const heading = document.getElementById('greeting');

button.addEventListener('click', () => {
    heading.textContent = "Hello, Hemant!";
});
