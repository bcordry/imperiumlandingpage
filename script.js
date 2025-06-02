// === Trainer & Pokemon image arrays ===
const trainerImages = [
    'assets/images/trainers/trainer1.png',
    'assets/images/trainers/trainer2.png',
    'assets/images/trainers/trainer3.png',
    'assets/images/trainers/trainer4.png',
    'assets/images/trainers/trainer5.png',
    'assets/images/trainers/trainer6.png',
    'assets/images/trainers/trainer7.png',
    'assets/images/trainers/trainer8.png',
    'assets/images/trainers/trainer9.png',
    'assets/images/trainers/trainer10.png',
    // Add more...
  ];
  
  const pokemonImages = [
    'assets/images/pokemon/mon1.png',
    'assets/images/pokemon/mon2.png',
    'assets/images/pokemon/mon3.png',
    'assets/images/pokemon/mon4.png',
    'assets/images/pokemon/mon5.png',
    'assets/images/pokemon/mon6.png',
    'assets/images/pokemon/mon7.png',
    'assets/images/pokemon/mon8.png',
    'assets/images/pokemon/mon9.png',
    'assets/images/pokemon/mon10.png',
    // Add more...
  ];
  
  // === DOM references ===
  const trainerPanel = document.querySelector('.trainer-panel');
  const pokemonPanel = document.querySelector('.pokemon-panel');
  
  let trainerIndex = 0;
  let pokemonIndex = 0;
  

  document.querySelectorAll('.nav-links li').forEach(li => {
    const quote = li.getAttribute('data-quote');
    if (quote) {
      const selector = li.querySelector('.selector');
      if (selector) {
        const bubble = document.createElement('span');
        bubble.classList.add('speech-bubble');
        bubble.textContent = quote;
        selector.appendChild(bubble);
      }
    }
  });




  // === Animation function for Trainer Panel ===
function cycleTrainerImage() {
  const oldImg = trainerPanel.querySelector('img');

  const img = document.createElement('img');
  img.src = trainerImages[trainerIndex];
  img.style.position = 'absolute';
  img.style.top = '0';
  img.style.left = '0';
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'contain';
  img.style.transition = 'transform 1s ease';
  img.style.transform = 'translateY(-100%)';
  img.style.willChange = 'transform';

  // Append the image to the DOM
  trainerPanel.appendChild(img);

  // Force a reflow to ensure the animation triggers
  void img.offsetWidth;

  // Trigger the slide-in
  img.style.transform = 'translateY(0)';

  // Slide old image out if it exists
  if (oldImg) {
    oldImg.style.transition = 'transform 1s ease';
    oldImg.style.transform = 'translateY(100%)';
    setTimeout(() => {
      trainerPanel.removeChild(oldImg);
    }, 1000);
  }

  trainerIndex = (trainerIndex + 1) % trainerImages.length;
}


    
  // === Animation function for Pokemon Panel ===
  function cyclePokemonImage() {
  const oldImg = pokemonPanel.querySelector('img');

  const img = document.createElement('img');
  img.src = pokemonImages[pokemonIndex];
  img.style.position = 'absolute';
  img.style.top = '0';
  img.style.left = '0';
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'contain';
  img.style.transition = 'transform 1s ease';
  img.style.transform = 'translateY(100%)';
  img.style.willChange = 'transform';

  pokemonPanel.appendChild(img);

  // Force reflow
  void img.offsetWidth;

  img.style.transform = 'translateY(0)';

  if (oldImg) {
    oldImg.style.transition = 'transform 1s ease';
    oldImg.style.transform = 'translateY(-100%)';
    setTimeout(() => {
      pokemonPanel.removeChild(oldImg);
    }, 1000);
  }

  pokemonIndex = (pokemonIndex + 1) % pokemonImages.length;
}

  
  
 function randomDelay(min = 1000, max = 6000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
  // === Loop the animations ===
  function startTrainerLoop() {
  cycleTrainerImage();
  setTimeout(startTrainerLoop, randomDelay());
}

function startPokemonLoop() {
  cyclePokemonImage();
  setTimeout(startPokemonLoop, randomDelay());
}

  
window.onload = () => {
  startTrainerLoop();
  startPokemonLoop();
};


// Fade in on page load
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-loaded');
});

// Fade out and slide down on link click
document.querySelectorAll('a').forEach(link => {
  // Only apply to internal links
  if (link.hostname === window.location.hostname) {
    link.addEventListener('click', function(e) {
      // Ignore if opening in new tab/window
      if (e.ctrlKey || e.metaKey || link.target === "_blank") return;
      e.preventDefault();
      document.body.classList.remove('page-loaded');
      setTimeout(() => {
        window.location = link.href;
      }, 320); // matches the CSS transition
    });
  }
});