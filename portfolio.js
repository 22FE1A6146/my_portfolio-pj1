// JS File for Vaishu's Portfolio Website

// Smooth Scrolling to Sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling effect
            block: 'start',
        });
    });
});

// Highlight Active Navigation Link Based on Scroll Position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust offset for sticky headers
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active'); // Add active class to the current link
        }
    });
});

// Form Validation
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        e.preventDefault(); // Prevent form submission
        alert('Please fill out all fields before submitting.');
    } else {
        alert('Message sent successfully!');
    }
});

// Back-to-Top Button Functionality
const backToTopBtn = document.querySelector('footer a[href="#home"]');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block'; // Show button when scrolled down
    } else {
        backToTopBtn.style.display = 'none'; // Hide button when at the top
    }
});

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.scrollIntoView({
        behavior: 'smooth',
    });
});
