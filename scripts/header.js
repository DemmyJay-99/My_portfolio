const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');
    body.style.overflowY = isOpen ? 'hidden' : 'auto';
});
