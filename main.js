// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const moonIcon = darkModeToggle.querySelector('i');

function toggleDarkMode() {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    moonIcon.className = document.body.dataset.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // Save preference
    localStorage.setItem('theme', document.body.dataset.theme);
}

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.dataset.theme = savedTheme;
    moonIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

darkModeToggle.addEventListener('click', toggleDarkMode);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here



});