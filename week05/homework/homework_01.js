function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(255);

    if (mouseIsPressed) {
        drawRedCircle(width / 2, height / 2, 100);
    } else {
        drawBlueCircle(width / 2, height / 2, 100);
    }
}

function drawRedCircle(x,y,r){
  noStroke();
  fill(255,0,0);
  ellipse(x, y, r);
  
}

function drawBlueCircle(x,y,r){
  fill(0,0,255);
  noStroke();
  ellipse(x, y, r);
  
}
