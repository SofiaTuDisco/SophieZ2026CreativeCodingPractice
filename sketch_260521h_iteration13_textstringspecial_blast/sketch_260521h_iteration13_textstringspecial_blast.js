/**
 * Creative Coding 2026 - Week 4: Advanced Typography
 * Original Concept by Andy Simionato & KarenAnn Donnachie
 * 
 * This sketch creates a "SELECTIVE BLAST" effect by highlighting
 * specific words with color and randomizing everything else.
 * 
 */

let blastText; // Array to store our lines of text
let myFont; 
let x = random(width);
let y = random(height);
text(processedText, x, y);

function preload() {
  // preload() runs before setup() and ensures files are fully loaded.
  // loadStrings() reads a text file and turns each line into one item in an array.
  blastText = loadStrings("data/textstring.txt");
  myFont = loadFont("data/MTMightyMono-Bold.otf")
}

function setup() {
  // createCanvas uses the full browser window
  createCanvas(windowWidth, windowHeight);

  // Set initial styles
  background(255);
  fill(0);
  
  // Use a bold impact-style font for the Vorticist look
  textFont(myFont);

  // noLoop stops p5 from running the draw loop 60 times a second.
  // This is great for static designs or "one-off" layout experiments.
  noLoop();
}

function draw() {
  // Clear the background if the window was resized or redrawn
  background(255);

  let margin = width * 0.1;       // 10% margin on the left/right
  let textBoxWidth = width * 0.8; // Use 80% of the screen width for text
  let currentY = 50;              // The starting vertical position

  // These arrays hold our "ingredients" for the random design
  let alignments = [LEFT, CENTER, RIGHT];
  let sizing = [12, 16, 20, 24, 28]; // an array of possible sizes (stack the odds!)

  // Loop through every line of text we loaded
  for (let i = 0; i < blastText.length; i++) {

    // 1. RANDOM ALIGNMENT
    let randomAlign = random(alignments);
    textAlign(randomAlign); // randomize alignments here

    // 2. RANDOM SIZE
    let thisSize = random(sizing); // randomize sizes here
    textSize(thisSize);

    // 3. RANDOM CASE (Flip a coin to decide)
    let processedText = blastText[i];
    if (random() <= 0.5) { // flip the coin
      processedText = processedText.toUpperCase();
    } else {
      processedText = processedText.toLowerCase();
    }

    // 4. COLOR HIGHLIGHTING BASED ON CONTENT
    // We check the text to see if it contains specific words
    let searchString = processedText.toLowerCase();
    
    if (searchString.includes("pig")) {
      fill(255, 0, 0); // Red for "eyes"
    } 
    
    else if (searchString.includes("space")) {
      fill(0, 0, 255); // Cyan for "space"
    } 
    else if (searchString.includes("wombs")) {
      fill(0, 255, 0); //  green for "wombs"
    } 
    else {
      fill(0); // Default to black
    }

    // 5. RENDER
    // text(string, x, y, [maxWidth]) 
    // The [maxWidth] argument automatically wraps long sentences to fit.
    text(processedText, margin, currentY, textBoxWidth);

    // Increment the Y position based on current text size.
    // Adding 1.4 to the textSize creates 'leading' or line-spacing.
    currentY += textSize() * 2,6;
  }
}

// This function makes our sketch responsive to browser resizing
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Because we use noLoop(), we have to manually tell p5 to "redraw"
  redraw();
}
function keyPressed(){
if(key==='s'){
saveCanvas('bad_eyes_textstringspecial_blast');
}
}
