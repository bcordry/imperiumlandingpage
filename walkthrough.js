document.addEventListener('DOMContentLoaded', () => {
  // Get all checkboxes
  const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');

  // 1. Assign unique IDs to all checkboxes first
  checkboxes.forEach((checkbox, index) => {
    if (!checkbox.id) {
      checkbox.id = `checkbox-${index}`;
    }
  });

  // 2. Load saved states
  function loadCheckboxStates() {
    const savedStates = localStorage.getItem('emeraldImperiumCheckboxes');
    if (savedStates) {
      const checkboxStates = JSON.parse(savedStates);
      checkboxes.forEach(checkbox => {
        if (checkbox.id in checkboxStates) {
          checkbox.checked = checkboxStates[checkbox.id];
        }
      });
    }
  }

  // 3. Save states on change
  function saveCheckboxStates() {
    const checkboxStates = {};
    checkboxes.forEach(checkbox => {
      checkboxStates[checkbox.id] = checkbox.checked;
    });
    localStorage.setItem('emeraldImperiumCheckboxes', JSON.stringify(checkboxStates));
  }

  // 4. Add event listeners
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', saveCheckboxStates);
  });

  // 5. Make reset function global
  window.resetCheckboxes = function() {
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    saveCheckboxStates();
  };

  // 6. Load states on page load
  loadCheckboxStates();
});

// Keep your existing tab functionality
const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

