function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  background(200,85,25,0.2);
  
  colorMode(RGB, 255, 255, 255, 1);
  noStroke();
  fill(55, 80, 10, 0.05);
  ellipse(240, 300, 290, 60);
  
  fill(55, 90, 50, 0.1);
  ellipse(200, 200, 200, 200);
  
  fill(65, 100, 10, 0.1);
  ellipse(130, 160, 140, 140);
  
  fill(55, 60, 10, 0.1);
  ellipse(300, 250, 130, 130);
  
  if(mouseY !== pmouseY && mouseX !== pmouseX) {
  textSize(32);
  fill(0,100,120)
  text('Deerocc', 01, 390);
  fill(0, 102, 150);
  text('Deerocc', 04, 390);
  fill(0, 102, 180);
  text('Deerocc', 07, 390);
  }
  
}