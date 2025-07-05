// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link (for mobile)
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
            }
        });
    });
    
    // Optional: Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        }
    });
    
    // Optional: Add active class based on current page
    document.querySelectorAll('.menu a').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});