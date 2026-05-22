let img;

function preload() {
  
  img = loadImage("data/yu.jpg");  
}


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(0);

  // Calculate the x-coordinate.
  let x = frameCount * 3;

  // Translate the origin.
  translate(x, 250);

  // Draw a circle at coordinates (0, 0).

image(img, -50, -180, 200, 120);
  image(img, 200, -180, 200, 120);
  image(img, 450, -180, 200, 120);
  image(img, 700, -180, 200, 120);
  image(img, 950, -180, 200, 120);



  image(img, 0, 0, 200, 120);
  image(img, 250, 0, 200, 120);
  image(img, 500, 0, 200, 120);
  image(img, 750, 0, 200, 120);
  image(img, 1000, 0, 200, 120);
  
  image(img, 50, 180, 200, 120);
  image(img, 300, 180, 200, 120);
  image(img, 550, 180, 200, 120);
  image(img, 800, 180, 200, 120);
  image(img, 1050, 180, 200, 120);


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
