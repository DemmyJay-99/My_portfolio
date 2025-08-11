const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
    body.style.overflow = "hidden";
}
)