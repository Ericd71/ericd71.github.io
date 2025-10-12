// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navRight = document.querySelector('.nav-right');

navToggle.addEventListener('click', () => {
    navRight.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-right a').forEach(link => {
    link.addEventListener('click', () => {
        navRight.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate skill bars when they come into view
function animateSkillBars() {
    const skillProgresses = document.querySelectorAll('.skill-progress');
    const languageProgresses = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const level = progressBar.getAttribute('data-level');
                progressBar.style.width = level + '%';
                
                // Stop observing after animation
                observer.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all progress bars
    skillProgresses.forEach(bar => observer.observe(bar));
    languageProgresses.forEach(bar => observer.observe(bar));
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    animateSkillBars();
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon!`);
        
        // Reset form
        this.reset();
    });
}