document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.add('show1');
      } else {
        entry.target.classList.remove('show');
        entry.target.classList.remove('show1');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
  });

  document.querySelectorAll('.sakriven, .sakriven1').forEach((el) => observer.observe(el));
});