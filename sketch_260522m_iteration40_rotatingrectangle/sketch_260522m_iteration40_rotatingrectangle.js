function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  describe('A white square spins around on gray canvas.');
}

function draw() {
  background(0);

  // Rotate around the y-axis.
  rotateY(frameCount * 1);
  
  rectMode(CENTER);
  rect(0, 0, 555, 255);}
  
  
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
  
