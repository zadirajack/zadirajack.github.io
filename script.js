// Improved interactive functionality and animations
document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  hamburger.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    navMenu.setAttribute('aria-hidden', expanded ? 'true' : 'false');
    this.classList.toggle('active');
    navMenu.classList.toggle('open');
  });
  // Close mobile menu on nav link click (for one-page navigation UX)
  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth < 768) {
        hamburger.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('aria-hidden', 'true');
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
      }
    });
  });

  // GSAP animations
  if (typeof gsap !== 'undefined') {
    // Register ScrollTrigger plugin for scroll animations
    if (gsap.registerPlugin) {
      gsap.registerPlugin(ScrollTrigger);
    }
    // Animate hero section content on page load
    gsap.from('.hero-content h1', { opacity: 0, y: -50, duration: 1 });
    gsap.from('.hero-content p', { opacity: 0, y: -50, duration: 1, delay: 0.3 });
    gsap.from('.hero-content .btn', { opacity: 0, scale: 0.5, duration: 0.5, delay: 0.8 });
    // Animate sections on scroll (content appears when scrolled into view)
    document.querySelectorAll('.section:not(.hero)').forEach(section => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power1.out'
      });
    });
  }

  // Lazy loading images (handled via HTML `loading="lazy"` attribute in modern browsers)
  // You could also implement IntersectionObserver for older browsers if needed.

  // Contact form submission handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Simulate form submission (here you can integrate with backend via fetch/XHR)
      alert('Спасибо! Ваше сообщение отправлено.');
      contactForm.reset();
    });
  }

  // Email subscription form submission handling
  const subscribeForm = document.getElementById('subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Simulate subscription (integration with backend can be added here)
      alert('Спасибо за подписку на рассылку!');
      subscribeForm.reset();
    });
  }
});