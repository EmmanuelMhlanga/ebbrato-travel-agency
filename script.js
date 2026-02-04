document.addEventListener('DOMContentLoaded', () => {
    // PRELOADER
    const loader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.display = 'none'; }, 800);
    });
});
