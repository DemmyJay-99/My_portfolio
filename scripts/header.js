const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav-links');
const body = document.querySelector('body');
let lastScrollTop = 0;

hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');
    body.style.overflowY = isOpen ? 'hidden' : 'auto';
});

// handleScroll() {
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
//         // Add/remove scrolled class
//         if (scrollTop > 50) {
//             nav.classList.add('scrolled');
//         } else {
//             nav.classList.remove('scrolled');
//         }
        
//         lastScrollTop = scrollTop;
//     }