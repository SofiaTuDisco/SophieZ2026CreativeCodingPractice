/**
 * Creative Coding 2026 - Week 4: Advanced Typography
 * Original Concept by Andy Simionato & KarenAnn Donnachie
 * 
 * This sketch demonstrates how to layout multiple "blocks" or columns 
 * of text over a background image, using liquid layout principles.
 */

let bgImage;      // Note: we avoid calling this 'texture' so we don't mix it up with p5 functions
let bodyFont;     // Global variable to store our custom typeface
let contentA = "It was the time of the year we needed to send the cranky old ones to the Mountain. Ma went away to find a buyer for our pig; these days not that many people can afford pork. She said that my brother had to get married, that we needed to build him a folio for a wife within a year: a house, a car and two hard drives, and that back in her days, they didn’t need to include hard drives in Caili*.";
let contentB = "Grandma just turned 70: time to be uploaded. Dad had already arranged a hard drive, using my supposed-to-be tuition fee, before he boarded the space trawler. I hope he can save enough money for their hard drives in time to see his grandchildren. They weren’t counting on my brother to do that.";

let bodySize;
let isDesktop = true;

function preload() {
  // Make sure these files exist in your sketch's 'data' folder!
  // or change the file names in these next 2 lines to reflect your files...
  bgImage = loadImage("sir-simo-PWtEIfx68hg-unsplash.jpg");
  bodyFont = loadFont("BrunswickGrotesque-Regular.otf");
}

function setup() {
  // Create a canvas that fills the full browser window
  createCanvas(windowWidth, windowHeight);

  // Initialize font and size (we calculate size based on width)
  bodySize = int(width / 70);
  textSize(bodySize);
  textFont(bodyFont);

  // Simple check for screen proportions
  if (width < height) {
    isDesktop = false;
  }
}

function draw() {
  // Display background image. 
  // We use the 4th argument 'COVER' to ensure it always fills the frame.
  image(bgImage, 0, 0, width, height, 0, 0, bgImage.width, bgImage.height, COVER);

  // Set the visual style for our text
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);

  // COLUMN LAYOUT: text(string, x, y, maxWidth, maxHeight)
  // We use percentages (0.1 for 10%) so it stays in place on all screens.

  // Column 1 (Left Side)
  text(contentA, width * 0.1, height * 0.1, width * 0.35, height * 0.8);

  // Column 2 (Right Side)
  text(contentB, width * 0.55, height * 0.1, width * 0.35, height * 0.8);



// Adjust the canvas and typography if the browser window changes size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Recalculate the liquid typography
  bodySize = int(width / 70);
  textSize(bodySize);
}
