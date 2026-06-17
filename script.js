// STAR CANVAS
const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');
let stars = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function initStars() {
  stars = [];
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.2,
      a: Math.random(),
      speed: Math.random() * 0.3 + 0.05
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(200,180,255,${s.a})`;
    ctx.fill();
    s.a += s.speed * 0.01;
    if (s.a > 1) s.a = 0.1;
  });
  requestAnimationFrame(drawStars);
}

resize();
initStars();
drawStars();
window.addEventListener('resize', () => { resize(); initStars(); });

// PARALLAX on island
document.addEventListener('mousemove', e => {
  const mx = (e.clientX / window.innerWidth - 0.5) * 30;
  const my = (e.clientY / window.innerHeight - 0.5) * 20;
  const island = document.getElementById('island-scene');
  if (island) {
    island.style.transform = `translateY(${my * 0.4}px) translateX(${mx * 0.2}px)`;
  }
});

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 0.05}s`;
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// SCROLL ANIMATIONS (planet cards, project cards)
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 0.08}s`;
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'none';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.planet-card, .project-card, .info-card, .contact-link').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.2s';
  cardObserver.observe(el);
});
