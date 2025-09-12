const headings = document.querySelectorAll(".head");
const journey = document.querySelector(".job");
const fade = document.querySelectorAll(".fade");



const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); 
      }
    });
  }, {threshold: 0.1 }
);

headings.forEach(heading => {
    observer.observe(heading);
});
fade.forEach(fade => {
    observer.observe(fade);
});