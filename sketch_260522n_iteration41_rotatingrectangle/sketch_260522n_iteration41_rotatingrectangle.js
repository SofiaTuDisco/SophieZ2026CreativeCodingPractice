let img;

function preload() {
  
  img = loadImage("data/yu.jpg");  
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  describe('A white square spins around on gray canvas.');
}

function draw() {
  background(0);

  // Rotate around the y-axis.
  rotateY(frameCount * 0.01);
  
  rectMode(CENTER);
  fill(255,0,0);
  texture(img);   // fill the rectangle with image as texture
  rect(0, 0, 300, 180);}
  
  
function keyPressed() {
  // Check if the specific key pressed was a lowercase 's'
  if (key === 's') {
    // Save the current canvas as an image file downloaded to your computer!
    saveCanvas('my_cool_sketch.jpg');
  }
}

// This function automatically triggers when the window is resized
// It ensures your canvas always fits the browser window perfectly.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    background(0, 255, 0);
}
  
