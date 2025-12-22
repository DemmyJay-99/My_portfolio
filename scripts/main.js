const headings = document.querySelectorAll(".head");
const journey = document.querySelector(".job");
const fade = document.querySelectorAll(".fade");
const slide = document.querySelectorAll(".slide");



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
slide.forEach(slide => {
    observer.observe(slide);
});


// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll(".nav-links a");

// const sectionObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting) {
//       console.log("Currently viewing:", entry.target.id);
//       navLinks.forEach(link => {link.classList.remove("active");})
    
//       const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
//       if (activeLink) activeLink.classList.add("active");
//     }
//   });
// }, { threshold: 0.5 });

// sections.forEach(section => sectionObserver.observe(section));