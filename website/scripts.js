function openMenu() {
    document.getElementById('mobileMenu').classList.add('show');
    document.getElementById('menuOverlay').classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  
  function closeMenu() {
    document.getElementById('mobileMenu').classList.remove('show');
    document.getElementById('menuOverlay').classList.remove('show');
    document.body.style.overflow = '';
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });