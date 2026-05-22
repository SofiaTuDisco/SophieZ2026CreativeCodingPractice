let myFont;
function preload(){
myFont=loadFont("data/A Glitch In Time.otf");
}
function setup() {
createCanvas(windowWidth,windowHeight);
textFont(myFont);
textAlign(CENTER,CENTER);

}

function draw() {
background(240);
stroke(200,0,0);
strokeWeight(1);
line(width/2,0,width/2,height);
line(0,height/2,width,height/2);
noStroke();
fill(0);
textSize(120);
text("SUP",width/2,height/2);
}
push();
textSize(45)
fill(0,100,200);
text("Hi there", width/3, height/3);
pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
