// NexCore Laptop Service Lucknow — Main JS
// authorisedlaptopservicelucknow.com

document.addEventListener('DOMContentLoaded', () => {

  // ---- LOADER ----
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 1600);
  }

  // ---- SCROLL HEADER ----
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // ---- MOBILE MENU ----
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuClose = document.getElementById('menu-close');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
    if (menuClose) menuClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
  }

  // ---- SCROLL ANIMATIONS ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // ---- COUNTER ANIMATION ----
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (counters.length) {
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current).toLocaleString() + suffix;
        }, 16);
        counterObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObs.observe(c));
  }

  // ---- FAQ ACCORDION ----
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => { i.classList.remove('open'); i.querySelector('.faq-q').classList.remove('open'); });
      if (!isOpen) { item.classList.add('open'); btn.classList.add('open'); }
    });
  });

  // ---- CONTACT FORM ----
  const form = document.getElementById('contact-form');
  const formMsg = document.getElementById('form-msg');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...'; btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Send Message'; btn.disabled = false;
        if (formMsg) { formMsg.style.display = 'block'; form.reset(); }
        setTimeout(() => { if (formMsg) formMsg.style.display = 'none'; }, 5000);
      }, 1200);
    });
  }

  // ---- SMOOTH SCROLL for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

});
