let bgImage;
let bodyFont;
let contentA="Bad Eyes";
let contentN="Nadja";
let contentB="It was the time of the year we needed to send the cranky old ones to the Mountain.";
let contentC="Ma went away to find a buyer for our pig; these days not that many people can afford pork.";
let contentD="She said that my brother had to get married, that we needed to build him a folio for a wife within a year: a house, a car and two hard drives, and that back in her days, they didn’t need to include hard drives in Caili*.";
let contentE="Ma said she would save up for my tuition after my brother’s wedding, and before that, she had told me she would have saved for my tuition after she bought the hard drive for Grandma, and before that, she had said she would save up for my tuition after my brother’s eye-transplant. She thought she wasn’t the same person as grandma who had sold two daughters for her only son.";
let contentF="Grandma just turned 70: time to be uploaded. Dad had already arranged a hard drive, using my supposed-to-be tuition fee, before he boarded the space trawler. I hope he can save enough money for their hard drives in time to see his grandchildren. They weren’t counting on my brother to do that.";
let bodySize;
let isDesktop=true;

function preload(){
bgImage=loadImage("data/AdobeStock_1850308830.jpeg");
bodyFont=loadFont("data/MTGertrudes-LightA.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bodySize = int(width / 75);
  textSize(bodySize);
  textFont(bodyFont);
  if (width < height) {
    isDesktop = false;
  }
}
function draw() {
  image(bgImage, 0, 0, width, height);
  fill(0);
  noStroke();
  
  square(650, 30, 650);
  
  textAlign(LEFT, LEFT);
  fill(255,255,255);
  
  text(
    contentA,
    width * 0.7,
    height * 0.1,
    width * 0.4,
    height * 0.8
  ); 
 text(
    contentN,
    width * 0.71,
    height * 0.15,
    width * 0.4,
    height * 0.4
  ); 
  text(
    contentB,
    width * 0.55,
    height * 0.25,
    width * 0.4,
    height * 0.8
  );
  
  text(
    contentC,
    width * 0.55,
    height * 0.33,
    width * 0.4,
    height * 0.8
  );
  
  text(
    contentD,
    width * 0.55,
    height * 0.41,
    width * 0.4,
    height * 0.8
  );
  
  text(
    contentE,
    width * 0.55,
    height * 0.55,
    width * 0.4,
    height * 0.8
  );
  
   text(
    contentF,
    width * 0.55,
    height * 0.76,
    width * 0.4,
    height * 0.8
  );
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  bodySize = int(width / 70);
  textSize(bodySize);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('bad_eyes');
  }
}
