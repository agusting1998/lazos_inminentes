(function() {
  function bindMenu(btnId, overlayId) {
    const btn = document.getElementById(btnId);
    const overlay = document.getElementById(overlayId);
    if (!btn || !overlay) return;

    btn.addEventListener('click', () => {
      if (overlay.classList.contains('hidden')) {
        overlay.classList.remove('hidden');
        requestAnimationFrame(() => overlay.classList.add('show-animate'));
      } else {
        overlay.classList.remove('show-animate');
        setTimeout(() => overlay.classList.add('hidden'), 500);
      }
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('show-animate');
        setTimeout(() => overlay.classList.add('hidden'), 500);
      }
    });
  }

  bindMenu('btn-menu', 'overlay-menu');
  bindMenu('btn-menu-2', 'overlay-menu-2');
  bindMenu('btn-menu-3', 'overlay-menu-3');

  document.addEventListener('touchstart', () => {}, { passive: true });
})();

document.addEventListener('DOMContentLoaded', () => {
  const personajesItem = document.getElementById('personajes-item');
  const submenu = document.getElementById('personajes-submenu');

  if (personajesItem && submenu) {
    const mainLink = personajesItem.querySelector('a');

    mainLink.addEventListener('click', (e) => {
      e.preventDefault();
      submenu.classList.toggle('show');
    });

    submenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        // submenu.classList.remove('show'); // opcional cerrar submenú
      });
    });
  }
});

const faders = document.querySelectorAll('.character, .about-image, .bio-card, .bio-box, .artist-bio-card');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tech-menu-container, .tag.name, .age, .chip.sign')
    .forEach(el => el.classList.add('animate-slide-fade'));
});
