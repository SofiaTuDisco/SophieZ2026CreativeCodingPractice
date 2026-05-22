let myFont;
function preload(){
  myFont = loadFont("data/Badger.otf");
}
function setup() {
createCanvas(windowWidth,windowHeight);
textFont(myFont);
textAlign(CENTER,CENTER);
}

function draw() {
background(255);
//stroke(200,0,0);
//strokeWeight(2);
//line(width / 2, 0 , width / 2 , height);
//line(0,height/2,width,height/2);
noStroke();
fill(0);
textSize(26);
//textLeading(80);
textFont('futura');
text("a freitful snail",width/2,height/3);
//push();
//textSize(45);
//text("hi,there",width/3,height/3);
//pop();

}
function windowResized(){
resizeCanvas(windowWidth,windowHeight);
}
