const darkSlider = document.getElementById('darkModeSlider');
if (darkSlider) {
  // Restore preference on load
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkSlider.checked = true;
  }
  darkSlider.addEventListener('change', () => {
    if (darkSlider.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  });
}