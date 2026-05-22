function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);

  circle(50, 50, 30);
  circle(150, 50, 30);
  circle(250, 50, 30);
  circle(350, 50, 30);
  circle(450, 50, 30);
  circle(550, 50, 30);
  circle(650, 50, 30);
  circle(750, 50, 30);
  circle(850, 50, 30);
  circle(950, 50, 30);
  circle(1050, 50, 30);
  circle(1150, 50, 30);
  circle(1250, 50, 30);
  circle(50, 150, 30);
  circle(150, 150, 30);
  circle(250, 150, 30);
  circle(350, 150, 30);
  circle(450, 150, 30);
  circle(550, 150, 30);
  circle(650, 150, 30);
  circle(750, 150, 30);
  circle(850, 150, 30);
  circle(950, 150, 30);
  circle(1050, 150, 30);
  circle(1150, 150, 30);
  circle(1250, 150, 30);
  circle(50, 250, 30);
  circle(150, 250, 30);
  circle(250, 250, 30);
  circle(350, 250, 30);
  circle(450, 250, 30);
  circle(550, 250, 30);
  circle(650, 250, 30);
  circle(750, 250, 30);
  circle(850, 250, 30);
  circle(950, 250, 30);
  circle(1050, 250, 30);
  circle(1150, 250, 30);
  circle(1250, 250, 30);
  circle(50, 350, 30);
  circle(150, 350, 30);
  circle(250, 350, 30);
  circle(350, 350, 30);
  circle(450, 350, 30);
  circle(550, 350, 30);
  circle(650, 350, 30);
  circle(750, 350, 30);
  circle(850, 350, 30);
  circle(950, 350, 30);
  circle(1050, 350, 30);
  circle(1150, 350, 30);
  circle(1250, 350, 30);
circle(50, 450, 30);
  circle(150, 450, 30);
  circle(250, 450, 30);
  circle(350, 450, 30);
  circle(450, 450, 30);
  circle(550, 450, 30);
  circle(650, 450, 30);
  circle(750, 450, 30);
  circle(850, 450, 30);
  circle(950, 450, 30);
  circle(1050, 450, 30);
  circle(1150, 450, 30);
  circle(1250, 450, 30);
  circle(50, 550, 30);
  circle(150, 550, 30);
  circle(250, 550, 30);
  circle(350, 550, 30);
  circle(450, 550, 30);
  circle(550, 550, 30);
  circle(650, 550, 30);
  circle(750, 550, 30);
  circle(850, 550, 30);
  circle(950, 550, 30);
  circle(1050, 550, 30);
  circle(1150, 550, 30);
  circle(1250, 550, 30);
  circle(50, 650, 30);
  circle(150, 650, 30);
  circle(250, 650, 30);
  circle(350, 650, 30);
  circle(450, 650, 30);
  circle(550, 650, 30);
  circle(650, 650, 30);
  circle(750, 650, 30);
  circle(850, 650, 30);
  circle(950, 650, 30);
  circle(1050, 650, 30);
  circle(1150, 650, 30);
  circle(1250, 650, 30);
  
  
  //describe('A yellow circle with black outline in the middle of a gray canvas.');
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
