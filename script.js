document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    function toggleNav() {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    }

    navToggle.addEventListener('click', toggleNav);

    // Close menu when a nav item is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleNav();
            }
        });
    });
});