document.addEventListener('DOMContentLoaded', () => {
  const pokeball = document.querySelector('.pokeball-icon');
  const dropdown = document.querySelector('.dropdown-menu');
  let timeoutId = null;

  function showDropdown() {
    clearTimeout(timeoutId);
    dropdown.classList.add('open');
  }

  function startHideTimer() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      dropdown.classList.remove('open');
    }, 1750); // 1.75seconds
  }

  // Show menu when hovering pokeball
  pokeball.addEventListener('mouseenter', showDropdown);

  // Start timer when leaving pokeball
  pokeball.addEventListener('mouseleave', (e) => {
    // Check if we're not moving to the dropdown
    if (!e.relatedTarget || !e.relatedTarget.closest('.dropdown-menu')) {
      startHideTimer();
    }
  });

  // Keep menu open when hovering dropdown
  dropdown.addEventListener('mouseenter', showDropdown);

  // Start timer when leaving dropdown
  dropdown.addEventListener('mouseleave', startHideTimer);

  // Remove the old hover-based display
  pokeball.style.removeProperty('hover');
});

