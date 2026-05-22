let myFont;
let points;
let sampleF;

function preload(){
myFont=loadFont("data/AdobeClean-ExtraBold.otf");
}


function setup() {
createCanvas(windowWidth,windowHeight);
points=myFont.textToPoints('SofiaTuDisco',(width/4)-230,height/2,200,{
sampleFactor:sampleF,
simplifyThreshold:0
});
noLoop();
}

function draw() {
background(0);
//fill(0,255,0);
stroke(255,255,0);
strokeWeight(2);
for (let i=0;i<points.length;i++){
  let p=points[i];
  ellipse(p.x,p.y,0.5,0.5);
 }
}
function keyPressed() {
  if (key === 's') {
    saveCanvas('text_to_point_sofia_tudisco');
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
