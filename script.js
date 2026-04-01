/**
 * EBBRATO TRAVEL - Core Logic
 * Powered by GASA TECH
 */

// 1. Preloader Handling
window.addEventListener('load', () => {
    const loader = document.getElementById('preloader');
    if (loader) {
        loader.style.transition = 'opacity 0.8s ease';
        loader.style.opacity = '0';
        setTimeout(() => { 
            loader.style.display = 'none'; 
        }, 800);
    }
});

// 2. Navigation & Mobile Menu Logic
const initMenu = () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isActive = mobileMenu.classList.toggle('active');
            mobileMenu.classList.toggle('hidden');
            
            // Toggle Icon Class
            if (isActive) {
                menuIcon.classList.replace('fa-bars', 'fa-times');
            } else {
                menuIcon.classList.replace('fa-times', 'fa-bars');
            }
        });

        // Auto-close menu when a link is clicked
        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('active');
                menuIcon.classList.replace('fa-times', 'fa-bars');
            });
        });
    }
};

// Initialize menu on DOM load
document.addEventListener('DOMContentLoaded', initMenu);

// 3. Scroll Reveal Effect (Optional addition for smooth entry)
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.reveal-up');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
