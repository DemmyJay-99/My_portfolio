const hamburger = document.getElementById('hamburger');
const navBar = document.querySelector('.nav-bar');
const nav = document.getElementById('nav-links');
const body = document.querySelector('body');
let lastScrollTop = 0;

hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');
    hamburger.classList.toggle("active");
    // nav.style.overflowY = isOpen ? 'hidden' : 'auto';
});

document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('show');
                hamburger.classList.remove('active')
            });
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

window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                navBar.classList.add('scrolled');
            } else {
                navBar.classList.remove('scrolled');
            }
});