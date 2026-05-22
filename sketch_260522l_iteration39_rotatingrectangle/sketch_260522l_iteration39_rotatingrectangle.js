function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  describe('A black square spins around on gray canvas.');
}

function draw() {
  background(255);

  // Rotate around the y-axis.
  rotateY(frameCount * 0.009);

    fill(0, 0, 0); // black
    rect(-900, -900, 900, 1900);
  // Draw the rectangle.
  //rect(-220, -130, 155, 155);
}

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
  
