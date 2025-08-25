// Array of background image sets
const backgrounds = [
  {
    background: './assets/background1/sky.png', // Path to background 1
  },
  {
    background: './assets/background2/sky.png', // Path to background 2
  },
  {
    background: './assets/background3/ground.png', // Path to background 3
  }
];

// Function to randomly select and set a background
function setRandomBackground() {
  // Randomly pick an index (0, 1, or 2)
  const randomIndex = Math.floor(Math.random() * backgrounds.length);

  // Get the selected background image
  const selectedBackground = backgrounds[randomIndex];

  // Assign the background image to the about-container
  document.querySelector('.about-container').style.backgroundImage = `url(${selectedBackground.background})`;
}

// Call the function on page load
window.onload = setRandomBackground;
