const about = document.querySelector('.stats');
const stats = document.querySelectorAll('.stat-count');
let activated = false;

function updateCount(el) {
  const target = +el.getAttribute('data-count'); // e.g. <span class="stat-count" data-target="1000"></span>
  let count = 0;
  const speed = target / 100; // adjust speed

  const step = () => {
    count += speed;
    if (count < target) {
      el.innerText = Math.ceil(count);
      requestAnimationFrame(step);
    } else {
      el.innerText = target;
    }
  };
  requestAnimationFrame(step);
}

if (about) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !activated) {
        stats.forEach(stat => {
          stat.innerText = 0;
          updateCount(stat);
        });
        activated = true;
      }
    });
  }, { threshold: 0.1 });

  observer.observe(about);
}
