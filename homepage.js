// Array of background and character image sets
const imageSets = [
  {
    background: './assets/background1/sky.png', // Cloud background for set 1
    cloud: './assets/background1/cloud1.png', // Cloud image for set 1
    cloudMoving: './assets/background1/cloud2.png', // Moving cloud for set 1
    character: './assets/midground1.png',
  },
  {
    background: './assets/background2/sky.png', // Cloud background for set 2
    cloud: './assets/background2/cloud.png', // Cloud image for set 2
    character: './assets/midground2.png',
  },
  {
    background: './assets/background3/ground.png', // Sea background for set 3
    sea: './assets/background3/sea.png', // Sea image for set 3
    character: './assets/midground3.png',
  },
];

// Function to randomly select a set of images
function setRandomBackgroundAndCharacter() {
  // Randomly pick an index (0, 1, or 2)
  const randomIndex = Math.floor(Math.random() * imageSets.length);

  // Get the selected image set
  const selectedSet = imageSets[randomIndex];

  // Get the elements by their IDs
  const backgroundImage = document.getElementById('background');
  const characterImage = document.getElementById('character');
  const cloudImage = document.getElementById('cloud');
  const cloudMovingImage = document.getElementById('cloud-moving');
  const seaImage = document.getElementById('sea');

  // Set the background and character images
  if (backgroundImage && characterImage) {
    backgroundImage.src = selectedSet.background;
    characterImage.src = selectedSet.character;
  }

  // Display the stable and moving clouds if it exists
  if (selectedSet.cloud && cloudImage) {
    cloudImage.src = selectedSet.cloud;
    cloudImage.style.display = 'block';  // Show stable cloud
  }
  if (selectedSet.cloudMoving && cloudMovingImage) {
    cloudMovingImage.src = selectedSet.cloudMoving;
    cloudMovingImage.style.display = 'block';  // Show moving cloud
  }

  // Set the sea image if it exists
  if (selectedSet.sea && seaImage) {
    seaImage.src = selectedSet.sea;
    seaImage.style.display = 'block';   // Show sea
  }
}

// Call the function on page load
window.onload = setRandomBackgroundAndCharacter;
