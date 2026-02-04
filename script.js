window.addEventListener('load', () => {
    const loader = document.getElementById('preloader');
    if(loader) {
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.display = 'none'; }, 800);
    }
});
