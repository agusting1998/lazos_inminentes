
(function(){
  // menu toggles for multiple pages
  function bindMenu(btnId, overlayId){
    var btn = document.getElementById(btnId);
    var overlay = document.getElementById(overlayId);
    if(!btn || !overlay) return;
    btn.addEventListener('click', function(){
      overlay.classList.toggle('hidden');
    });
    // close when click outside panel
    overlay.addEventListener('click', function(e){
      if(e.target === overlay) overlay.classList.add('hidden');
    });
  }

  bindMenu('btn-menu','overlay-menu');
  bindMenu('btn-menu-2','overlay-menu-2');
  bindMenu('btn-menu-3','overlay-menu-3');

  // Improve touch scrolling experience
  document.addEventListener('touchstart', function(){}, {passive:true});
})();

document.addEventListener('DOMContentLoaded', function() {
  const personajesItem = document.getElementById('personajes-item');
  const submenu = document.getElementById('personajes-submenu');

  if (personajesItem && submenu) {
    const mainLink = personajesItem.querySelector('a');
    mainLink.addEventListener('click', function(e) {
      e.preventDefault(); // evita el salto inmediato
      submenu.classList.toggle('hidden');
    });

    const subLinks = submenu.querySelectorAll('a');
    subLinks.forEach(link => {
      link.addEventListener('click', function(e) {
      });
    });
  }
});
