let images = []; // Array to hold the loaded images
let canvasWidth = 800;
let canvasHeight = 600;
let currentIndex = 0; // Index of the next image to display

function preload() {
  // Load your images into the array
  for (let i = 0; i < 25; i++) {
    images.push(loadImage(`photos/${i + 1}.jpeg`));
  }
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  imageMode(CENTER); // Set image mode to draw from the center
}

function addImage() {
  // Get the image from the array based on currentIndex
  let img = images[currentIndex];

  // Increment currentIndex to cycle through images
  currentIndex = (currentIndex + 1) % images.length;

  // Calculate random scaling factors for width and height
  let scaleFactorX = random(0.5, 1.5); // Random scaling factor for width
  let scaleFactorY = random(0.5, 1.5); // Random scaling factor for height

  // Calculate scaled dimensions
  let scaledWidth = img.width * scaleFactorX;
  let scaledHeight = img.height * scaleFactorY;

  // Calculate center position of the canvas
  let x = width / 2;
  let y = height / 2;

  // Draw the image at the center of the canvas
  image(img, x, y, scaledWidth, scaledHeight);
}

function mouseClicked() {
  // Call addImage function when mouse is clicked
  addImage();
}
