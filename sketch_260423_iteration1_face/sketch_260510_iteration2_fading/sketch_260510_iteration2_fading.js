function setup(){
createCanvas(windowWidth,windowHeight);
background(0,0,0);
}
function draw() {
 
  background(0, 0, 0, 2);

  
  
  if (mouseIsPressed) {
 
    fill(255, 0, 0); 
    stroke(255, 0, 0); 
     } else {
    fill(255, 255, 255);   
    stroke(255);         
  }
  
  strokeWeight(2);
  circle(mouseX, mouseY, 288);
}
function keyPressed(){
  if (key==='s'){
    saveCanvas('fading.jpg');
  }
}
function windowResized(){
resizeCanvas(windowWidth,windowHeight);
background(255,255,255);
}
