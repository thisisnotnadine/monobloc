let images = []; // Array to hold the loaded images
let canvasWidth = 800;
let canvasHeight = 600;
let currentIndex = 0; // Index of the next image to display
let clickCount = 0; // Counter for the number of clicks

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
  // Choose a random image from the array
  let img = random(images);

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

  // Increment click count
  clickCount++;

  // Change background color every three clicks
  if (clickCount % 3 === 0) {
    changeBackgroundColor();
  }
}

function mouseClicked() {
  // Call addImage function when mouse is clicked
  addImage();
}

function changeBackgroundColor() {
  // Generate random color values
  let r = random(255);
  let g = random(255);
  let b = random(255);

  // Set the background color of the entire page
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}


