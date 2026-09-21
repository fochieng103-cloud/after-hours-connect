document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const packageCards = document.querySelectorAll('.package-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      packageCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
document.getElementById('tourForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting After Hours Connect! Our travel specialists will reach out shortly.');
  this.reset();
});
// Intersection Observer for Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Animates once per scroll
      }
    });
  }, {
    threshold: 0.15 // Triggers when 15% of the element is visible
  });

  revealElements.forEach(el => revealOnScroll.observe(el));
});
// Scroll Reveal Observer
document.addEventListener('DOMContentLoaded', () => {
  // 1. Automatically tag main section elements for animation
  const animatableElements = document.querySelectorAll(
    'section, .package-card, .value-card, .jobs-referral-container, .quote-section'
  );

  animatableElements.forEach(el => el.classList.add('reveal'));

  // 2. Observe elements coming into viewport
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve once animated to keep performance lightweight
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15, // Triggers when 15% of element is visible
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});