let myFont ;
function preload(){
myFont = loadFont("data/BrunswickGrotesque-Regular.otf");
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
text("a fretful snail",width/2,200);
text("went out",width/2,230);
text("naked",width/2,260);
text("without any cloth",width/2,290);
text("for a walk",width/2,320);
text("and then",width/2,350);
text("he stepped on a nail",width/2,380);
text("ouch",width/2,440);

//push();
//textSize(45);
//text("hi,there",width/3,height/3);
//pop();

}
function windowResized(){
resizeCanvas(windowWidth,windowHeight);
}
function keyPressed() {
  if (key === 's') {
    saveCanvas('a_fretful_snail.jpg');
  }
}
