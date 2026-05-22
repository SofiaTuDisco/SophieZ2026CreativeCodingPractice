
let myFont;
let points;
let sampleF;

function preload() {
  myFont = loadFont("data/AdobeClean-ExtraBold.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  sampleF = 0.01;

  points = myFont.textToPoints('Disco', (width / 4) - 200, height / 2, 500, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });

 
}

function draw() {
  background("black");

  for (let i = 0; i < points.length; i++) {
    let p = points[i];

  
    stroke(255, 255, 255, 100);
    strokeWeight(1);
    line(p.x, p.y, mouseX, mouseY);

  
    let randomDotColor = color(255, 255, 255);

    fill(randomDotColor);
    stroke("white");
    strokeWeight(0.5);
    ellipse(p.x, p.y, 10, 10);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  points = myFont.textToPoints('diamonds', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });
}
function keyPressed() {
  if (key === 's') {
    saveCanvas('text_to_point_line');
  }
}
