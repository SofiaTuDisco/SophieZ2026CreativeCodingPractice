let smallImage;

function preload() {
  smallImage = loadImage("data/AdobeStock_575662250.png"); // change to yours
}

// setup() runs exactly once when the program starts
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0,200,0);

  imageMode(CENTER); // looks better if the mouse is in the centre!
  image(smallImage, mouseX, mouseY, 400, 400);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
if(key==='s'){
saveCanvas('the_drummer_coverpage');
}
}
