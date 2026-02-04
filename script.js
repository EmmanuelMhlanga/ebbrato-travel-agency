document.addEventListener('DOMContentLoaded', () => {
    // 1. Preloader Fade Out
    const loader = document.getElementById('preloader');
    if (loader) {
        window.addEventListener('load', () => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        });
    }

    // 2. Mobile Menu Toggle (Future expansion)
    console.log("EBBRATO System Active - 2026");
});
