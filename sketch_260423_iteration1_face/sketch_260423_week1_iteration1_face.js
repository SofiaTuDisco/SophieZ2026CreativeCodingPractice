function setup(){
createCanvas(windowWidth,windowHeight);
background(255,255,255);
}
function draw(){
  push();fill(0,0,0);
  square(555,140,197);
  pop();
  square(600,200,10);
  square(700,200,10);
  stroke(255,255,255)
  strokeWeight(7);
  line(645,280,665,280);
  push();textSize(40);
  fill(0,0,0)
  text("sup",625,460);
  pop();
}
function keyPressed(){
  if(key==='s'){
    saveCanvas('myCanvas.jpg');}
}
