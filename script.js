// ===== Navbar scroll effect =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== Mobile menu =====
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navbar nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// ===== Hero slider =====
const heroImgs = document.querySelectorAll('.hero-img');
const thumbs = document.querySelectorAll('.thumb');
let current = 0;

function showSlide(i){
  heroImgs.forEach(img => img.classList.remove('active'));
  thumbs.forEach(t => t.classList.remove('active'));
  heroImgs[i].classList.add('active');
  thumbs[i].classList.add('active');
  current = i;
}
thumbs.forEach(t => t.addEventListener('click', () => showSlide(+t.dataset.index)));
setInterval(() => showSlide((current + 1) % heroImgs.length), 5000);

// ===== Reveal on scroll =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
