function setup() {
  createCanvas(windowWidth, windowHeight);
  describe('A yellow circle on a black background. The circle opens and closes its mouth.');
}

function draw() {
  background(0);

  // Style the arc.
  noStroke();
  fill(255, 255, 0);

  // Update start and stop angles.
  let biteSize = PI / 16;
  let startAngle = biteSize * sin(frameCount * 0.1) + biteSize;
  let endAngle = TWO_PI - startAngle;

  // Draw the arc.
  arc(450, 450, 400, 400, startAngle, endAngle, PIE);
  circle(850, 400, 50);

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
  // We need to redraw the background here, otherwise resizing gives us a blank transparent canvas!
  background(0, 255, 0);
}
