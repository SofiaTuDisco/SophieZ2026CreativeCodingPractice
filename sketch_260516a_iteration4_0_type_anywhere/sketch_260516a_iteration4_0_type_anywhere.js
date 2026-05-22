let bigness;
let fonty;
function preload(){
  fonty = loadFont("data/Badger.otf")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
    bigness = 120;
    fill(200,200,0);
    textFont(fonty);
}
function draw(){
background(0,4);  
textSize(bigness);
text(key,mouseX,mouseY);
}
function keyPressed(){
if (keyCode === LEFT_ARROW){
  bigness-=10;
}
if (keyCode === RIGHT_ARROW){
  bigness +=10;
}
}
function keyPressed() {
  if (key === 's') {
    saveCanvas('badger_randomletters');
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
