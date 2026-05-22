/**
 * Creative Coding 2026 - Week 5: Image Basics
 * Sketch: image_basics by Andy Simionato
 * 
 * This sketch demonstrates ways to load and display images, 
 * Introducing the COVER and CONTAIN modes, and positioning images.
 * See the p5.js reference for more information.
 * 
 * Main credit: image used is of an artwork by Karen ann Donnachie
 * https://karenandy.com/
 */

let bgImage;
let myFont;

function preload() {
  //load BEFORE the sketch, cause it may slow us down otherwise
  //bodyFont = loadFont("data/myfontname.otf");        //change to reflect YOUR font
  bgImage = loadImage("data/IMG_8624.JPG");  //change this to reflect YOUR image
  myFont = loadFont("data/AdobeDevanagari-Regular.otf");
}

//setup() runs exactly once when the program starts
function setup() {
  createCanvas(windowWidth, windowHeight);
  // imageMode(CENTER); // method for setting the anchor point e.g. CENTER or CORNER
  }

//draw() runs continuously after setup(), matching your screen's refresh rate
function draw() {
  // METHOD 1: Cover (fill) the background of the browser
  imageMode(CORNER); //use this if you need other modes elsewhere
  image(bgImage, 0, 0, width, height, 0, 0, bgImage.width, bgImage.height, COVER);
  

  // Just some type to show you where it would be added
  // Alternatively you can add all this in setup() if remains static
  fill(255);
  textSize(32);
  textAlign(LEFT, LEFT);
  textFont(myFont);
  text("She still can’t recall his name. ", 80, 580);
  text("Years have gone by, he remains the drummer with a buzz cut.", 80, 610);

}

// Adjust the canvas and typography if the browser window changes size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //you can also add the bgImage in there to avoid weird resizing issues
}

function keyPressed(){
if(key==='s'){
saveCanvas('the_drummer_coverpage');
}
}
